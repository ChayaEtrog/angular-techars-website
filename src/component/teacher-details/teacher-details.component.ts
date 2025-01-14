import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { FormsModule } from '@angular/forms';
import { Class } from '../../models/class';
import { MatInputModule } from '@angular/material/input'; // MatInput for the text fields
import { MatFormFieldModule } from '@angular/material/form-field'; // MatFormField for structure
import { MatCheckboxModule } from '@angular/material/checkbox'; // MatCheckbox for the checkboxes
import { MatButtonModule } from '@angular/material/button'; // MatButton for buttons
import { MatSnackBarModule } from '@angular/material/snack-bar'; // MatSnackBar for success messages

@Component({
  selector: 'app-teacher-details',
  standalone: true,
  imports: [FormsModule,
            MatInputModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatButtonModule,
            MatSnackBarModule,
  ],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css'
})
export class TeacherDetailsComponent {
  @Input() id: string = ""
  @Input() name: string = ""
  @Input() classes: Class[] = []
  @Output() ChildSaveTechaer: EventEmitter<any> = new EventEmitter<any>();

  public classesId: Class[] = [
  { grade: "first", id: 1},
  { grade: "second", id: 2},
  { grade: "third", id: 3},
  { grade: "forth", id: 4 },
  { grade: "fifth", id: 5 },
  { grade: "sixth", id: 6 },
  { grade: "seventh", id: 7 }]

  saveTeacher() {
    let teacher = new Teacher(this.id,this.name, this.classes);
    this.ChildSaveTechaer.emit(teacher);
  }

  toggleClassSelection(classChecked: Class, isChecked: boolean): void {
    if (isChecked) {
      // Add classId to the selected classes array
      if (!this.classes.includes(classChecked)) {
        this.classes.push(classChecked);
      }
    } else {
      // Remove classId from the selected classes array
      this.classes = this.classes.filter((c) => c.id !== classChecked.id);
    }
  }

  cancelFunc()
  {
    this.ChildSaveTechaer.emit(null); // Emitting null to cancel the operation.
  }
}
