import { Component } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher.service';
import { TeacherDetailsComponent } from "../teacher-details/teacher-details.component";
import { ColorInGrayDirective } from '../../directive/color-in-gray.directive';
import { IconPipe } from '../../pipes/icon.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatChipListbox } from '@angular/material/chips';
@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [TeacherDetailsComponent,
            ColorInGrayDirective,
            IconPipe,
            MatSidenavModule,
            MatListModule,
            MatCardModule,
            MatToolbarModule,
            MatIconModule,
            MatButtonModule,
            MatDialogModule,
            MatChipsModule,
            MatChipListbox],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  teachers: Teacher[]

  constructor(private userTeacher: TeacherService,public dialog: MatDialog) {
    this.teachers = userTeacher.getTeachers();
  }

  toDelete: boolean = false;
  isAdd: boolean = false;
  selectedTeacher:any = null;
  buttonDelete: string="delete"
  buttonAdd: string="add"
  buttonEdit: string="edit"

  openDeleteDialog(student: Teacher): void {
      const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteTeacher(student);
        }
      });
    }

  deleteTeacher(t: Teacher) {
    this.userTeacher.deleteTeacher(t);
    this.teachers = this.userTeacher.getTeachers();
    this.selectedTeacher = null;
  }

  parentSaveTeacher(teacher: any) {
    if(teacher ===null)
      this.isAdd=false;
    if (this.userTeacher.getTeacherById(teacher.id) !=-1)
      this.userTeacher.updateTeacher(teacher, teacher.id);
    else
      this.userTeacher.addTeacher(teacher);

    this.teachers = this.userTeacher.getTeachers();

    this.isAdd=false;
  }
}
