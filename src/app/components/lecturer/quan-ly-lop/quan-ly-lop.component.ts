
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LopHoc } from 'src/app/models/LopHoc';
import { LopHocService } from 'src/app/services/lop-hoc.service';
import { StorageService } from 'src/app/services/storage.service';
import { DetailLopComponent } from './detail-lop/detail-lop.component';

@Component({
  selector: 'app-quan-ly-lop',
  templateUrl: './quan-ly-lop.component.html',
  styleUrls: ['./quan-ly-lop.component.css'],
})
export class QuanLyLopComponent implements OnInit {
  danhSachLopHoc: MatTableDataSource<LopHoc> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'tenLop',
    'hinhThucHoc',
    'dshv',
    'actions',
  ];
  length: number = 0;
  searchTerm: string = '';
  checkEmtyList: boolean = true;
  data!: any;
  username: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private lopHocService: LopHocService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.tenTaiKhoan;
    this.loadDL();
  }
  loadDL() {
    this.lopHocService.lopHocCuaGiaoVien(this.username).subscribe((data) => {
      console.log(data);
      if (data.length !== 0) {
        this.danhSachLopHoc = new MatTableDataSource<LopHoc>(data);
        this.danhSachLopHoc.paginator = this.paginator;
        this.danhSachLopHoc.sort = this.sort;
        this.checkEmtyList = false;
      } else {
        this.checkEmtyList = true;
      }
    });
  }

  onSearch() {
    this.danhSachLopHoc.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachLopHoc.paginator) {
      this.danhSachLopHoc.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = '';
    this.danhSachLopHoc.filter = '';
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 5;
  }

  detailClass(lopHoc: LopHoc | null): void {
    if (lopHoc) {
      console.log(lopHoc);
      var popup = this.dialog.open(DetailLopComponent, {
        data: {
          lopHoc: lopHoc,
        },
        width: '40%',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
      });
    }
  }


  listHv(LopHoc: any): void {
    this.router.navigate([
      `/giao-vien/quan-ly-lop-hoc/${LopHoc.khoaHoc.maKhoaHoc}/danh-sach-lop-hoc/${LopHoc.maLop}/danh-sach-hoc-vien`,
    ]);
  }
}
