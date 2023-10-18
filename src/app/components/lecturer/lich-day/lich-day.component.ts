import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LopHoc } from 'src/app/models/LopHoc';
import { LopHocService } from 'src/app/services/lop-hoc.service';
import { PhanCongGiaoVienService } from 'src/app/services/phan-cong-giao-vien.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-lich-day',
  templateUrl: './lich-day.component.html',
  styleUrls: ['./lich-day.component.css'],
})
export class LichDayComponent implements OnInit {
  danhSachLichDay: MatTableDataSource<LopHoc> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'tenKhoaHoc',
    'tenLop',
    'hinhThucHoc',
    'actions',
  ];
  searchTerm: string = '';
  checkEmtyList: boolean = true;
  data!: any;
  phongThis: any[] = [];
  username: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private storageService: StorageService,
    private phanCongGiaoVienService: PhanCongGiaoVienService,
    private lopHocService: LopHocService
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.tenTaiKhoan;
    this.loadDL();
  }

  loadDL() {
    this.lopHocService.lichDayCuaGiaoVien(this.username).subscribe((data) => {
      console.log(data)
     
    });
  }

  onSearch() {
    this.danhSachLichDay.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachLichDay.paginator) {
      this.danhSachLichDay.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = '';
    this.danhSachLichDay.filter = '';
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 5;
  }
}
