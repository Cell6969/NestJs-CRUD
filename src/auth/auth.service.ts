/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { jwt_config } from 'src/config/jwt_config';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDTO } from './dto/Register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDTO } from './dto/Login.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }

    /**
     * Generate JWT Token
     * @param payload
     * @returns
     */
    generateJWT(payload: any) {
        return this.jwtService.sign(payload, {
            secret: jwt_config.secret,
            expiresIn: jwt_config.expired
        })
    }

    /**
     * Register New User
     * @param data
     * @returns
     */
    async register(data: RegisterDTO) {
        const checkUserExists = await this.prisma.users.findFirst({
            where: {
                email: data.email
            }
        })

        if (checkUserExists) {
            throw new HttpException('User already registered', HttpStatus.FOUND);
        }

        // Hashing Password
        data.password = await hash(data.password, 12);

        // Create Data
        const createUser = await this.prisma.users.create({
            data: data
        })

        if (createUser) {
            return {
                statusCode: 200,
                message: 'Register Successfully'
            }
        }
    }

    /**
     * Login User
     * @param data
     */
    async login(data: LoginDTO) {
        const existingUser = await this.prisma.users.findFirst({ where: { email: data.email } });
        if (!existingUser) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        const isValidPassword = await compare(data.password, existingUser.password);
        if (!isValidPassword) {
            throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED)
        }

        const accessToken = this.generateJWT({
            sub: existingUser.id,
            name: existingUser.name,
            email: existingUser.email
        })

        return {
            statusCode: 200,
            message: 'Login Successfully',
            accessToken
        }
    }

    /**
     * User Detail
     * @param user_id
     * @returns
     */
    async profile(user_id: number) {
        console.log(user_id);
        const user = await this.prisma.users.findFirst({
            where: {
                id: user_id
            },
            select: {
                name: true,
                email: true,
                avatar: true,
                tasks: true,
            }
        })
        return {
            statusCode: 200,
            data: user
        }
    }

    /**
     * Upload Avatar
     * @param user_id
     * @param avatar
     * @returns
     */
    async uploadAvatar(user_id: number, avatar) {
        const existingUser = await this.prisma.users.findFirst({
            where: {
                id: user_id
            }
        })

        if (!existingUser) {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
        };

        await this.prisma.users.update({
            data: {
                avatar: avatar
            },
            where: {
                id: user_id
            }
        })

        return {
            statusCode: 200,
            message: 'Upload avatar berhasil'
        }
    }
}
