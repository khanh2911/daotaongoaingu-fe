import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DangKyKH } from 'src/app/models/DangKyKH';
import { LopHoc } from 'src/app/models/LopHoc';
import { LopHocService } from 'src/app/services/lop-hoc.service';

@Component({
  selector: 'app-detail-hoc-vien',
  templateUrl: './detail-hoc-vien.component.html',
  styleUrls: ['./detail-hoc-vien.component.css']
})
export class DetailHocVienComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      dangKy: DangKyKH,
      lopHoc: LopHoc
    },
    private dialogRef: MatDialogRef<DetailHocVienComponent>,
  ) {}


  closePopup() {
    this.dialogRef.close();
  }
}
