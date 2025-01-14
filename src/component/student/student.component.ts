import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Course, Subject } from '../../models/course';
import { IconPipe } from '../../pipes/icon.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatChipListbox } from '@angular/material/chips';
import { log } from 'node:console';
import { isNull } from 'node:util';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailsComponent,
    IconPipe,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    MatChipListbox],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})

export class StudentComponent {

  constructor(public dialog: MatDialog) { }

  studentList: Student[] = [
    new Student('1', "chaya", "etrog", "ashomer 47", "0583243025", [new Course('1', "Introduction to Python", Subject.ComputerProgramming)], true),
    new Student('2', "nasralla", "chizbulla", "hell-genom", "1111111111"),
    new Student('3', "bibi", "netaniau", "rechavia", "222222222"),
    new Student('4', "kim", "gon kong", "korea", "0583243025")
  ]

  courseList: Course[] = [
    new Course('1', "Introduction to Python", Subject.ComputerProgramming),
    new Course('2', "JavaScript ", Subject.ComputerProgramming),
    new Course('3', "Data Structures and Algorithms", Subject.ComputerProgramming),
    new Course('4', "Taxation Basics", Subject.Accounting),
    new Course('5', "Accounting Software Training ", Subject.Accounting),
    new Course('6', "Illustrator  ", Subject.Graphic),
    new Course('7', "After Effects ", Subject.Graphic),
    new Course('8', "Yoga", Subject.Gym),
    new Course('9', "Nutrition and Fitness", Subject.Gym),
    new Course('10', "Principles of Financial Accounting", Subject.Accounting)
  ]

  selectedStudent: any = null;

  isAdd: boolean = false
  toDelete: boolean = false
  buttonDelete: string = "delete"
  buttonAdd: string = "add"
  buttonEdit: string = "edit"

  openDeleteDialog(student: Student): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteStudent(student);
      }
    });
  }
  deleteStudent(s: Student) {
    this.studentList = this.studentList.filter(element => element !== s)
    if (this.selectedStudent && this.selectedStudent.id === s.id) {
      this.selectedStudent = null;
    }
  }

  parentSaveStudent(student: any) {   
    if (student===null){
      this.isAdd = false;
      if (this.selectedStudent !== null)
        this.selectedStudent.flagEdit = false;
      return;
    }
    let index = this.studentList.findIndex(element => element.id === student.id);
    if (index != -1) {
      this.studentList[index].firstName = student.firstName
      this.studentList[index].lastName = student.lastName
      this.studentList[index].address = student.address
      this.studentList[index].phonNumber = student.phonNumber
      this.studentList[index].isActive = student.isActive
      this.studentList[index].flagPayed = student.flagPayed
      this.studentList[index].selctedCourse = student.selctedCourse
      this.studentList[index].flagEdit = false;
      console.log(this.selectedStudent.selectedCourse);
      

    } else {

      this.studentList.push(student);
      this.isAdd = false;
    }
  }

}