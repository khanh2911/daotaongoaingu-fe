import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-hvhp',
  templateUrl: './list-hvhp.component.html',
  styleUrls: ['./list-hvhp.component.css'],
})
export class ListHVHPComponent implements OnInit {
  danhSachHocVien: any[] = [];
  displayedColumns: string[] = ['tenHocVien', 'daDongHocPhi'];

  constructor(
    public dialogRef: MatDialogRef<ListHVHPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // Kiểm tra nếu danhSachDKKhoaHoc là một mảng trước khi sử dụng filter
    if (Array.isArray(this.data.danhSachDKKhoaHoc)) {
      // Sử dụng filter để lấy danh sách học viên đã đóng học phí
      this.danhSachHocVien = this.data.danhSachDKKhoaHoc.filter(
        (DangKyKH: any) => DangKyKH.trangThaiHocPhi === 'DA_DONG'
      );
    } else {
      console.error('Danh sách không hợp lệ.');
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
