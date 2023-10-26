import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GiaoVien } from 'src/app/models/GiaoVien';

@Component({
  selector: 'app-detail-giao-vien-ra-de',
  templateUrl: './detail-giao-vien-ra-de.component.html',
  styleUrls: ['./detail-giao-vien-ra-de.component.css'],
})
export class DetailGiaoVienRaDeComponent {
  giaoVien!: GiaoVien;
  soLuongLopDaDayHienTai!: number;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      item: any;
    },
    private dialogRef: MatDialogRef<DetailGiaoVienRaDeComponent>
  ) {}

  closePopup() {
    this.dialogRef.close('no');
  }
  doiGv() {
    this.dialogRef.close('ok');
  }
}
