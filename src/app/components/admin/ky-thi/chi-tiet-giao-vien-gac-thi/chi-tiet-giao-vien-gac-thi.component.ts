import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GiaoVien } from 'src/app/models/GiaoVien';

@Component({
  selector: 'app-chi-tiet-giao-vien-gac-thi',
  templateUrl: './chi-tiet-giao-vien-gac-thi.component.html',
  styleUrls: ['./chi-tiet-giao-vien-gac-thi.component.css']
})
export class ChiTietGiaoVienGacThiComponent {
  giaoVien!: GiaoVien
  soLuongLopDaDayHienTai!: number
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      item: any,
    },
    private dialogRef: MatDialogRef<ChiTietGiaoVienGacThiComponent>
  ) {}

  closePopup() {
    this.dialogRef.close('no');
  }
  doiGv() {
    this.dialogRef.close('ok');
  }
}
