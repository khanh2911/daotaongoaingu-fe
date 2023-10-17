import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LichThi } from 'src/app/models/LichThi';
import { LichThiService } from 'src/app/services/lich-thi.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PhanCongGiaoVienService } from './../../../services/phan-cong-giao-vien.service';
import { StorageService } from './../../../services/storage.service';

@Component({
  selector: 'app-quan-ly-len-diem',
  templateUrl: './quan-ly-len-diem.component.html',
  styleUrls: ['./quan-ly-len-diem.component.css']
})
export class QuanLyLenDiemComponent implements OnInit{
  danhSachLichThi: MatTableDataSource<LichThi> = new MatTableDataSource();
  displayedColumns: string[] = ['stt', 'ngayThi', 'kyThi', 'phong', 'actions'];
  searchTerm: string = '';
  checkEmtyList: boolean = true;
  data!: any;
  phongThis: any[] = [];
  username: string=''
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private lichThiService: LichThiService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private storageService:StorageService,
    private phanCongGiaoVienService:PhanCongGiaoVienService
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser()
    this.username = user.tenTaiKhoan
    this.loadDL();
  }

  loadDL() {
    this.phanCongGiaoVienService.layTheoTenDangNhapLenDiem(this.username).subscribe((data) => {
      if (data.length !== 0) {
        // Trích xuất tất cả các đối tượng lichThi vào một mảng mới
        const allLichThi = data.map((item: { lichThi: any; }) => item.lichThi);
        console.log(allLichThi);
        // Trích xuất dữ liệu hiện có từ MatTableDataSource
        const currentData = this.danhSachLichThi.data;

        // Cập nhật danhSachLichThi
        this.danhSachLichThi.data = [...currentData, ...allLichThi];

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
  dsHv(lichThi:any){
    this.router.navigate([
      `/giao-vien/quan-ly-len-diem/ky-thi/${lichThi.kyThi.maKyThi}/lich-thi/${lichThi.maLichThi}`,
    ]);
  }

}
