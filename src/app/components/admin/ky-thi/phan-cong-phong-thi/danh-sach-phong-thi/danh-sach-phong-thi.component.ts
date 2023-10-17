import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DangKyKH } from 'src/app/models/DangKyKH';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { LopHocService } from 'src/app/services/lop-hoc.service';

import { Router } from '@angular/router';
import { LichThiService } from './../../../../../services/lich-thi.service';

@Component({
  selector: 'app-danh-sach-phong-thi',
  templateUrl: './danh-sach-phong-thi.component.html',
  styleUrls: ['./danh-sach-phong-thi.component.css'],
})
export class DanhSachPhongThiComponent implements OnInit{
  phong: any[] = [];
  displayedColumns: string[] = ['tenPhong', 'kiHieu', 'sucChua', 'action'];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      maLichThi: number;
    },
    private dangKyKhoaHocService: DangKyKhoaHocService,
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<DanhSachPhongThiComponent>,
    private lichThiService: LichThiService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.layDanhPhongHopLe();
    console.log(this.data);
  }

  layDanhPhongHopLe() {
    this.lichThiService.timPhongTrong(this.data.maLichThi).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.phong = data;
        } else {
          this.phong = [];
        }
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách lớp học', error);
      },
    });
  }
  chon(maPhong: any) {
    //thêm học viên vào lớp học
    const body = {
      maPhong: maPhong,
    };
    this.lichThiService.capNhatPhong(this.data.maLichThi, body).subscribe({
      next: (data) => {
        this.dialogRef.close('ok');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  closePopup() {
    this.dialogRef.close('no');
  }
}
