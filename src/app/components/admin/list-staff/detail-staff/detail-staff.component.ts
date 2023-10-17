import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailLecturerComponent } from '../../list-lecturer/detail-lecturer/detail-lecturer.component';

@Component({
  selector: 'app-detail-staff',
  templateUrl: './detail-staff.component.html',
  styleUrls: ['./detail-staff.component.css'],
})
export class DetailStaffComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      staff: any;
    },
    private dialogRef: MatDialogRef<DetailStaffComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
