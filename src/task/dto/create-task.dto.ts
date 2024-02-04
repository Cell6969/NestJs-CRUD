/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    task_name: string;

    @IsNotEmpty()
    @IsString()
    task_description: string;

    id_user: number;
}
