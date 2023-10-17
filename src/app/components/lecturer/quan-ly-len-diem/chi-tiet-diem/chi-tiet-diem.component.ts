import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GiaoVien } from 'src/app/models/GiaoVien';

@Component({
  selector: 'app-chi-tiet-diem',
  templateUrl: './chi-tiet-diem.component.html',
  styleUrls: ['./chi-tiet-diem.component.css']
})
export class ChiTietDiemComponent {
  giaoVien!: GiaoVien
  soLuongLopDaDayHienTai!: number
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      item: any,
    },
    private dialogRef: MatDialogRef<ChiTietDiemComponent>
  ) {}

  closePopup() {
    this.dialogRef.close('no');
  }
  doiGv() {
    this.dialogRef.close('ok');
  }
}
