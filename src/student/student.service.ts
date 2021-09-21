import {Injectable} from '@nestjs/common';
import { students } from "../db";
import { v4 as uuid } from "uuid";


@Injectable()
export class StudentService{
    students = students;

    getStudents(){
        return this.students;
    }

    getStudentById(studentId: string){
        return this.students.find(student =>{
            return student.id === studentId;
        });
    }

    createStudent(payload) {
        let newStudent = {
            id: uuid(),
            ...payload
        }

        this.students.push(newStudent);

        return newStudent;
    }

    getStudentsByTeacherId(teacherId: string){
        return this.students.filter(student =>{
            return student.teacher === teacherId;
        });
    }

}