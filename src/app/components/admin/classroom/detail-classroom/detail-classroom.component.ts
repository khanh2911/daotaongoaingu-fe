import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.css']
})
export class DetailClassroomComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      phong: any;
    },
    private dialogRef: MatDialogRef<DetailClassroomComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
