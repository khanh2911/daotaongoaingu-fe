// hoso-student.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HocVien } from 'src/app/models/HocVien';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { StorageService } from 'src/app/services/storage.service';
import { EditHosoComponent } from './edit-hoso/edit-hoso.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hoso-student',
  templateUrl: './hoso-student.component.html',
  styleUrls: ['./hoso-student.component.css'],
})
export class HosoStudentComponent implements OnInit {
  dataHV!: any;
  user: any;
  roles: any;
  constructor(
    private router: Router,
    private taiKhoanService: TaiKhoanService,
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.user = this.storageService.getUser();
    this.roles = this.user.quyen;
    if (this.user) {
      this.loadDataForUser(this.user);
    } else {
      // Xử lý trường hợp không có người dùng hoặc lỗi xảy ra khi lấy dữ liệu.
    }
  }

  loadDataForUser(user: any): void {
    // Gọi API hoặc xử lý dữ liệu dựa trên thông tin người dùng.
    // Ví dụ: Gọi API từ taiKhoanService để lấy thông tin học viên dựa trên user.token.
    this.taiKhoanService.getUserDetails().subscribe({
      next: (data: HocVien) => {
        this.dataHV = data;
      },
      error: (error) => {
        // Xử lý lỗi khi không thể lấy thông tin học viên.
        console.error('Lỗi khi lấy thông tin học viên:', error);
      },
    });
  }
  editHoSo(dataUser: HocVien): void {
    const dialogRef = this.dialog.open(EditHosoComponent, {
      width: '45%',
      data: { dataUser, roles:this.roles }, // Truyền cả dataHV và roles vào component EditHosoComponent
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result = 'acept') {
        this.loadDataForUser(this.user);
      }

    });
  }
}
