import { Controller, Get, Post, Put, Param, ParseUUIDPipe } from "@nestjs/common";
import { TeacherService } from "./teacher.service";


@Controller('teachers')
export class TeacherController{

    constructor(public teacherService: TeacherService){}

    @Get()
    getTeachers(){
        return this.teacherService.getTeachers();
    }

    @Get('/:teacherId')
    getTeachersById(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string
    ){
        return this.teacherService.getTeachersById(teacherId);
    }

}