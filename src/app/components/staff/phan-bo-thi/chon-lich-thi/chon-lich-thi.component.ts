import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LichThi } from 'src/app/models/LichThi';
import { LichThiService } from 'src/app/services/lich-thi.service';
import { LichHocService } from './../../../../services/lich-hoc.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DanhSachPhongThiComponent } from 'src/app/components/admin/ky-thi/phan-cong-phong-thi/danh-sach-phong-thi/danh-sach-phong-thi.component';
import { DangKyThiService } from './../../../../services/dang-ky-thi.service';

@Component({
  selector: 'app-chon-lich-thi',
  templateUrl: './chon-lich-thi.component.html',
  styleUrls: ['./chon-lich-thi.component.css'],
})
export class ChonLichThiComponent implements OnInit {
  danhSachLichThi: MatTableDataSource<LichThi> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'ngayThi',
    'caThi',
    'phong',
    'soLuong',
    'actions',
  ];
  searchTerm: string = '';
  checkEmtyList: boolean = true;
  data!: any;
  maKyThi!: any;
  maDangKyThi!: any;
  trangThai!: any;
  phongThis: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private lichThiService: LichThiService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private dangKyThiService:DangKyThiService

  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.maKyThi = +params['maKyThi'];
      this.maDangKyThi = +params['maDangKyThi'];
      this.trangThai = +params['trangThai'];
      this.loadDL();
    });
    console.log(this.trangThai);
  }

  loadDL() {
    this.lichThiService.layLichThiKyThi(this.maKyThi).subscribe((data) => {
      if (data.length !== 0) {
        console.log(data)
        this.danhSachLichThi = new MatTableDataSource<any>(data);
        this.danhSachLichThi.paginator = this.paginator;
        this.danhSachLichThi.sort = this.sort;
        this.checkEmtyList = false;
      } else {
        this.checkEmtyList = true;
      }
    });
  }

  onSearch() {
    this.danhSachLichThi.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachLichThi.paginator) {
      this.danhSachLichThi.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = '';
    this.danhSachLichThi.filter = '';
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 5;
  }
  chonLich(maLichThi: number) {
    const body = {
      maLichThi: maLichThi,
    };
      this.dangKyThiService.capNhatLichThi(this.maDangKyThi,body).subscribe({
        next: (data) => {
          if(data.message && data.message === 'phongnull'){
            this.toastr.warning('Chưa sắp phòng học cho lịch thi!');
          } else if(data.message && data.message === 'full'){
            this.toastr.warning('Phòng thi đầy!');
          }
          else{
            this.router.navigate([`/nhan-vien/phan-bo-thi`]);
            if(this.trangThai ===0){
              this.toastr.success('Đã sắp lịch thi cho học viên!');
            }else if(this.trangThai ===1){
              this.toastr.success('Đã đổi lịch thi cho học viên!');
            }
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
}
