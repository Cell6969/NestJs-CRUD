/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
    constructor(
        private prisma: PrismaService,
        @Inject(REQUEST) private req: any,
    ) { }

    async createTask(data: CreateTaskDto) {
        data.id_user = this.req.user.id;
        const createData = await this.prisma.tasks.create({
            data: data
        })
        return {
            statusCode: 201,
            data: createData
        }
    }

    async getAllTask() {
        const allData = await this.prisma.tasks.findMany({
            where: {
                id_user: this.req.user.id
            }
        });
        return {
            statusCode: 200,
            data: allData
        }
    }

    async getTaskById(task_id: number) {
        const data = await this.prisma.tasks.findFirst({
            where:
            {
                id: task_id,
                id_user: this.req.user.id
            }
        })
        return {
            statusCode: 200,
            data
        }
    }

    async updateTaskById(task_id: number, data: UpdateTaskDto) {
        data.id_user = this.req.user.id;
        const updateData = await this.prisma.tasks.update({
            data: data,
            where: {
                id: task_id
            }
        })
        return {
            statusCode: 200,
            data: updateData
        }
    }

    async deletTaskById(task_id: number) {
        const deleteData = await this.prisma.tasks.delete({
            where: {
                id: task_id
            }
        })
        return {
            statusCode: 200,
            data: deleteData,
            message: "Sucessfully deleted data"
        }
    }
}
