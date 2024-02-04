/* eslint-disable prettier/prettier */
import { IsOptional, IsString } from 'class-validator';


export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    task_name?: string;

    @IsString()
    @IsOptional()
    task_description?: string;

    id_user: number;
}