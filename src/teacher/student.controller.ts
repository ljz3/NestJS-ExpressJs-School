import { Controller, Get, Post, Put, Param, ParseUUIDPipe} from "@nestjs/common";
import { StudentService } from '../student/student.service'

@Controller('teachers/:teacherId/students')
export class StudentTeacherController{

    constructor(public studentService: StudentService){}

    @Get()
    getStudentsOfTeacher(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string
    ){
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ){
        return `teacherId: ${teacherId}, studentId: ${studentId}`
    }
}