import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GiaoVien } from 'src/app/models/GiaoVien';

@Component({
  selector: 'app-detail-giao-vien',
  templateUrl: './detail-giao-vien.component.html',
  styleUrls: ['./detail-giao-vien.component.css']
})
export class DetailGiaoVienComponent implements OnInit{
  giaoVien!: GiaoVien
  soLuongLopDaDayHienTai!: number
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      item: any,
      isDoi: boolean
    },
    private dialogRef: MatDialogRef<DetailGiaoVienComponent>
  ) {}
  ngOnInit(): void {
    this.giaoVien= this.data.item.giaoVien
    this.soLuongLopDaDayHienTai = this.data.item.soLuongLopHocHienTai
  }

  closePopup() {
    this.dialogRef.close('no');
  }
  doiGv() {
    this.dialogRef.close('ok');
  }
}
