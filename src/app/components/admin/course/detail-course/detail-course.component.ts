import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css'],
})
export class DetailCourseComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      khoaHoc: any;
    },
    private dialogRef: MatDialogRef<DetailCourseComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
