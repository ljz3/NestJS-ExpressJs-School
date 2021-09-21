import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller('students')
export class StudentController{

    constructor(public studentService: StudentService) {}

    @Get()
    getStudents(){
        return this.studentService.getStudents();
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ){

        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        @Body() body
    ){
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
        @Body() body
    ){
        return `Update Student by Id of ${studentId} with data of ${JSON.stringify(body)}`
    }
}