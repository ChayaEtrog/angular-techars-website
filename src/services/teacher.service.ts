import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { Class } from '../models/class';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  private teachers=[
    new Teacher("1","nechama"),
    new Teacher("2","chana",[new Class("third",3)]),
    new Teacher("1","michal",[new Class("first",1), new Class("fifth",2)]),
    new Teacher("1","adina",[new Class("first",1), new Class("second",2)])
  ]

  getTeachers(){
    return this.teachers;
  }

  getTeacherById(id:string){
    return this.teachers.findIndex(t => t.id === id);
  }

  addTeacher(teacher:Teacher){
    this.teachers.push(teacher);
  }

  updateTeacher(teacher:Teacher, id:string){
    const index = this.teachers.findIndex(t => t.id === id);
    if(index!==-1){
      this.teachers[index] = teacher;
    }
  }

  deleteTeacher(t:Teacher){
    this.teachers = this.teachers.filter(element => element!== t)
  }
}
