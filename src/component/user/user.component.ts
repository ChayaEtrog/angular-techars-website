import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatError } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatError
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userTypes: string[] = ["Administrator", "Secretary", "Student", "Teacher"]
  userForm: FormGroup;
  showForm: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)],
      userType: ['']
    });
  }

  onSubmit() {
    let user = new User(
      this.userForm.value.password,
      this.userForm.value.name,
      this.userForm.value.email,
      this.userForm.value.userType
    );
    this.userService.addUser(user)
    console.log(this.userService.getUsers());
    console.log(this.userForm);
    this.showForm = false;
  }
}
