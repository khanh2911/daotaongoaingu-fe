import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { HocVien } from 'src/app/models/HocVien';
import { AddStudentComponent } from './add-student/add-student.component';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
})
export class ListStudentComponent implements OnInit {
  danhSachHocVien: MatTableDataSource<HocVien> = new MatTableDataSource();
  displayedColumns: string[] = [
    'STT',
    'taiKhoan.hoTen',
    'taiKhoan.tenDangNhap',
    'taiKhoan.soDienThoai',
    'taiKhoan.gioiTinh',
    'taiKhoan.trangThai',
    'actions',
  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private taiKhoanService: TaiKhoanService,
    private storageService: StorageService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadDanhSachHocVien();
  }

  ngAfterViewInit() {
    this.danhSachHocVien.paginator = this.paginator;
    this.danhSachHocVien.sort = this.sort;
    this.paginator.page.subscribe(() => {
      this.loadDanhSachHocVien(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });

    this.sort.sortChange.subscribe(() => {
      this.loadDanhSachHocVien(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });
  }

  loadDanhSachHocVien(
    page: number = 0,
    size: number = 10,
    sortBy: string = 'taiKhoan.ngayTao',
    sortDir: string = 'ASC'
  ) {
    this.taiKhoanService
      .getAllUsersByRole(
        page,
        size,
        sortBy,
        sortDir,
        this.searchTerm,
        'HocVien'
      )
      .subscribe((data) => {
        this.danhSachHocVien = new MatTableDataSource<any>(data.content);
        this.paginator.length = data.totalElements;
        this.length = data.totalElements;
      });
  }
  onSearch() {
    this.loadDanhSachHocVien();
  }
  refresh() {
    this.searchTerm = '';
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.loadDanhSachHocVien();
  }
  detail(student: any | null): void {
    // Bước 4: Mở dialog thay vì đặt selectedNotification
    if (student) {
      var popup = this.dialog.open(DetailStudentComponent, {
        data: {
          student: student,
        },
        width: '40%',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
      });
    }
  }

  addstudent(): void {
    var popup = this.dialog.open(AddStudentComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe(() => {
      // console.log(item)
      this.loadDanhSachHocVien();
    });
  }
  updateUserStatus(status: string, tenDangNhap: string): void {
    this.taiKhoanService.updateStatus(status, tenDangNhap).subscribe({
      next: (data) => {
        this.toastr.success('Cập nhật trạng thái thành công!', 'Success');
        this.loadDanhSachHocVien();
      },
      error: (error) => {
        this.toastr.error('Xảy ra lỗi khi cập nhật trạng thái!', 'Error');
        console.error('Error updating status:', error);
      },
    });
  }
}

