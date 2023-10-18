import { StorageService } from './../../../services/storage.service';
import { PhanCongGiaoVienService } from 'src/app/services/phan-cong-giao-vien.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LichThi } from 'src/app/models/LichThi';
import { LichThiService } from 'src/app/services/lich-thi.service';

@Component({
  selector: 'app-danh-sach-lich-thi',
  templateUrl: './danh-sach-lich-thi.component.html',
  styleUrls: ['./danh-sach-lich-thi.component.css'],
})
export class DanhSachLichThiComponent implements OnInit {
  danhSachLichThi: MatTableDataSource<LichThi> = new MatTableDataSource();
  displayedColumns: string[] = ['stt', 'ngayThi', 'caThi', 'phong', 'actions'];
  searchTerm: string = '';
  checkEmtyList: boolean = true;
  data!: any;
  maKyThi!: any;
  username: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private storageService: StorageService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private phanCongGiaoVienService: PhanCongGiaoVienService
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.tenTaiKhoan; this.loadDL();

  }

  loadDL() {
    this.phanCongGiaoVienService
      .layLichThiTheoTenDangNhapGacThi(this.username)
      .subscribe((data) => {
        if (data.length !== 0) {
          console.log(data);
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

  dsHv(lichThi: any) {
    //trạng thái chỉ xem chi tiết
    const trangThai = 1;
    //chuyển đến Danhsachhocvien trong  phân công lên điểm cảu staff
    this.router.navigate([
      `/giao-vien/danh-sach-lich-gac-thi/${lichThi.kyThi.maKyThi}/danh-sach-lich-gac-thi/${lichThi.maLichThi}/danh-sach-hoc-vien/${trangThai}`,
    ]);
  }

}
