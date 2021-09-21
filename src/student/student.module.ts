import { Module, Get, Post, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import { StudentController } from "./student.controller";
import { StudentService } from "./student.service";

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule{}