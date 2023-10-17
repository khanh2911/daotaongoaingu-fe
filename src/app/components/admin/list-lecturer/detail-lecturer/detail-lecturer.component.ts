import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GiaoVien } from 'src/app/models/GiaoVien';

@Component({
  selector: 'app-detail-lecturer',
  templateUrl: './detail-lecturer.component.html',
  styleUrls: ['./detail-lecturer.component.css'],
})
export class DetailLecturerComponent{
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      giaoVien: any;
    },
    private dialogRef: MatDialogRef<DetailLecturerComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }

}
