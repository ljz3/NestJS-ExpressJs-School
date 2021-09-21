import { Injectable } from "@nestjs/common";
import { teachers } from '../db';

export class TeacherService{

    teachers = teachers;


    getTeachers(){
        return this.teachers;
    }

    getTeachersById(teacherId: string){
        return this.teachers.find(teacher =>{
            return teacher.id === teacherId;
        });
    }

}