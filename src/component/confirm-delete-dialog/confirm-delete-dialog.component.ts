import { Component } from '@angular/core';
import { InfromationCardComponent } from '../infromation-card/infromation-card.component';
import {MatButton} from '@angular/material/button';
import{
MatDialogRef,
MatDialogContent,
MatDialogActions,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [InfromationCardComponent,MatDialogContent,MatDialogActions,MatButton],
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrl: './confirm-delete-dialog.component.css'
})
export class ConfirmDeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>) { }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}