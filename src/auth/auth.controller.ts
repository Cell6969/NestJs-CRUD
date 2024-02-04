/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/Register.dto';
import { LoginDTO } from './dto/Login.dto';
import { AuthGuard } from './auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UsePipes(ValidationPipe)
    @Post('register')
    async register(@Body() data: RegisterDTO) {
        return await this.authService.register(data)
    }

    @UsePipes(ValidationPipe)
    @Post('login')
    async login(@Body() data: LoginDTO) {
        return await this.authService.login(data)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async profile(@Req() req) {
        return await this.authService.profile(req.user.id)
    }

    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor('avatar', {
        storage: diskStorage({
            destination: 'public/uploads/image',
            filename: (req, file, cb) => {
                cb(null, file.originalname)
            }
        })
    }))
    @Post('avatar')
    async avatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
        return await this.authService.uploadAvatar(req.user.id, '/uploads/image/' + file.filename)
    }
}
