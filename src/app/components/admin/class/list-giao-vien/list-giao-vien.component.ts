import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { HocVien } from 'src/app/models/HocVien';
import { DetailStudentComponent } from '../../list-student/detail-student/detail-student.component';
import { LopHocService } from 'src/app/services/lop-hoc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { DangKyKH } from 'src/app/models/DangKyKH';
import { LopHoc } from 'src/app/models/LopHoc';
import { GiaoVien } from 'src/app/models/GiaoVien';
import { DetailLecturerComponent } from '../../list-lecturer/detail-lecturer/detail-lecturer.component';
import { DetailGiaoVienComponent } from '../detail-giao-vien/detail-giao-vien.component';

@Component({
  selector: 'app-list-giao-vien',
  templateUrl: './list-giao-vien.component.html',
  styleUrls: ['./list-giao-vien.component.css'],
})
export class ListGiaoVienComponent {
  danhSachGiaoVien: MatTableDataSource<any> = new MatTableDataSource();
  danhSachGiaoVienFull: any[] = [];
  displayedColumns: string[] = [
    'STT',
    'taiKhoan.hoTen',
    'taiKhoan.soDienThoai',
    'taiKhoan.gioiTinh',
    'detail',
    'actions',
  ];
  searchTerm: string = '';
  maLopHoc!: number;
  maKhoaHoc!: number;
  dangKy!: DangKyKH;
  lopHoc!: LopHoc;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dangKyKhoaHocService: DangKyKhoaHocService,
    private storageService: StorageService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private lopHocService: LopHocService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.maLopHoc = parseInt(
      this.activateRoute.snapshot.paramMap.get('maLopHoc')!,
      10
    ); // Lấy maLopHoc từ URL
    this.maKhoaHoc = parseInt(
      this.activateRoute.snapshot.paramMap.get('maKhoaHoc')!,
      10
    ); // Lấy maLopHoc từ URL
    this.loadDanhSachGiaoVienCuaLopHoc();
    this.layLopHoc();
  }

  loadDanhSachGiaoVienCuaLopHoc() {
    if (!this.maLopHoc) {
      this.toastr.error('Mã lớp học không hợp lệ!');
      return;
    }

    this.lopHocService.getAvailableGiaoVien(this.maLopHoc).subscribe({
      next: (data) => {
        console.log(data);
        if (data.message && data.message === 'null') {
          this.toastr.error('Không có giáo viên hợp lệ!');
        } else {
          this.danhSachGiaoVien = new MatTableDataSource(data);
          this.danhSachGiaoVien.paginator = this.paginator;
          this.danhSachGiaoVien.sort = this.sort;
          this.danhSachGiaoVienFull = data;
        }
      },
      error: (error) => {
        this.toastr.error(
          'Có lỗi xảy ra khi tải danh sách học viên!',
          error.message
        );
      },
    });
  }

  onSearch() {
    const searchTermLowercase = this.searchTerm.trim().toLowerCase(); // Đảm bảo tìm kiếm không phân biệt hoa thường

    // Lọc danh sách học viên dựa trên điều kiện tìm kiếm
    const filteredHocVien = this.danhSachGiaoVienFull.filter((hocVien) => {
      return hocVien.taiKhoan.hoTen.toLowerCase().includes(searchTermLowercase);
    });

    // Cập nhật dữ liệu cho MatTableDataSource
    this.danhSachGiaoVien = new MatTableDataSource(filteredHocVien);
    this.danhSachGiaoVien.paginator = this.paginator;
    this.danhSachGiaoVien.sort = this.sort;
  }
  refresh() {
    this.searchTerm = '';
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.loadDanhSachGiaoVienCuaLopHoc();
  }
  layLopHoc() {
    this.lopHocService.layLopHoc(this.maLopHoc).subscribe({
      next: (data) => {
        this.lopHoc = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  detail(item: any): void {
    var popup = this.dialog.open(DetailGiaoVienComponent, {
      data: {
        item: item,
      },
      width: '40%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }

  chon(giaoVien: GiaoVien) {
    this.lopHocService
      .datGiaoVienDay(this.maLopHoc, giaoVien.maTaiKhoan)
      .subscribe({
        next: (data) => {
          this.toastr.success('Phân công giáo viên dạy thành công!');
          this.router.navigate([
            `/nhan-vien/quan-ly-khoa-hoc/${this.maKhoaHoc}/danh-sach-lop-hoc`,
          ]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  return() {
    this.router.navigate([
      `/nhan-vien/quan-ly-khoa-hoc/${this.maKhoaHoc}/danh-sach-lop-hoc`,
    ]);
  }
}
