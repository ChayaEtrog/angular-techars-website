import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, viewChild } from '@angular/core';
import { log } from 'node:console';
import { Student } from '../../models/student';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';
import { NgTemplateOutlet } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [FormsModule,
            NgTemplateOutlet,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            MatButtonModule,
            MatCardModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input() id: string = "";
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() address: string = "";
  @Input() phonNumber: string = "";
  @Input() isActive: boolean = true;
  @Input() payed: boolean = false;
  @Input() courseList: Course[]=[]
  @Input() selectedCourse: Course[] = []
  @Input() dateLefting?: Date = new Date()
  @Output() ChildSaveStudent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('lDate') ldate?: ElementRef;

  showSelectedCourses:boolean=false 

  SaveStudent(id: string, firstName: string, lastName: string, address: string, phonNumber: string, isActive: boolean, payed: boolean, selctedCourse: Course[]) {
    let student = { id: id, firstName: firstName, lastName: lastName, address: address, phonNumber: phonNumber, isActive: isActive, dateLefting: this.ldate?.nativeElement.value, flagPayed: payed,selctedCourse: selctedCourse };
    console.log(student)
    this.ChildSaveStudent.emit(student)
  }

  cancelEdit(){
    this.ChildSaveStudent.emit(null);
  }

  isCourseSelected(course: Course): boolean {
    return this.selectedCourse?.some(selected => selected.courseId === course.courseId) || false;
  }

  toggleCourseSelection(course:Course, isChecked: boolean): void {
    if (isChecked) {
      // Add classId to the selected classes array
      if (!this.selectedCourse.includes(course)) {
        this.selectedCourse.push(course);
      }
    } else {
      // Remove classId from the selected classes array
      this.selectedCourse = this.selectedCourse.filter((c) => c.courseId !== course.courseId );
    }
  }

  log(obj: any) {
    console.log(obj)
    console.log(this.courseList);
    
    }
}
