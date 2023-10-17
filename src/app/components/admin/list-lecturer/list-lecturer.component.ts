import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { GiaoVien } from 'src/app/models/GiaoVien';

import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { DetailLecturerComponent } from './detail-lecturer/detail-lecturer.component';
import { MatDialog } from '@angular/material/dialog';
import { AddLecturerComponent } from './add-lecturer/add-lecturer.component';
import { DetailGiaoVienComponent } from '../class/detail-giao-vien/detail-giao-vien.component';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-lecturer.component.html',
  styleUrls: ['./list-lecturer.component.css'],
})
export class ListLecturerComponent implements OnInit {
  danhSachGiaoVien: MatTableDataSource<GiaoVien> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
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
    this.loadDanhSachGiaoVien();
  }

  ngAfterViewInit() {
    this.danhSachGiaoVien.paginator = this.paginator;
    this.danhSachGiaoVien.sort = this.sort;
    this.paginator.page.subscribe(() => {
      this.loadDanhSachGiaoVien(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });

    this.sort.sortChange.subscribe(() => {
      this.loadDanhSachGiaoVien(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction
      );
    });
  }

  loadDanhSachGiaoVien(
    page: number = 0,
    size: number = 10,
    sortBy: string = 'taiKhoan.ngayTao',
    sortDir: string = 'DESC'
  ) {
    this.taiKhoanService
      .getAllUsersByRole(
        page,
        size,
        sortBy,
        sortDir,
        this.searchTerm,
        'GiaoVien'
      )
      .subscribe((data) => {
        this.danhSachGiaoVien = new MatTableDataSource<any>(data.content);
        this.paginator.length = data.totalElements;
        this.length = data.totalElements;
      });
  }
  onSearch() {
    this.loadDanhSachGiaoVien();
  }
  refresh() {
    this.searchTerm = '';
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.loadDanhSachGiaoVien();
  }
  detail(lecturer: any | null): void {
    if (lecturer) {
      var popup = this.dialog.open(DetailLecturerComponent, {
        data: {
          giaoVien: lecturer,
        },
        width: '40%',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
      });
    }
  }
  addlecturer(): void {
    var popup = this.dialog.open(AddLecturerComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDanhSachGiaoVien();
    });
  }
  updateUserStatus(status: string, tenDangNhap: string): void {
    this.taiKhoanService.updateStatus(status, tenDangNhap).subscribe({
      next: (data) => {
        this.toastr.success('Status updated successfully', 'Success');
        this.loadDanhSachGiaoVien();
      },
      error: (error) => {
        this.toastr.error('An error occurred while updating status', 'Error');
        console.error('Error updating status:', error);
      },
    });
  }
}
