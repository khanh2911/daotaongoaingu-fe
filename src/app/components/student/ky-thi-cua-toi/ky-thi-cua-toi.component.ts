import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DangKyKH } from 'src/app/models/DangKyKH';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { KhoaHoc } from 'src/app/models/KhoaHoc';
import { KhoaHocService } from 'src/app/services/khoa-hoc.service';
import { DangKyThiService } from './../../../services/dang-ky-thi.service';
import { KetQuaThiService } from './../../../services/ket-qua-thi.service';
import { ChiTietDiemComponent } from '../../lecturer/quan-ly-len-diem/chi-tiet-diem/chi-tiet-diem.component';

@Component({
  selector: 'app-ky-thi-cua-toi',
  templateUrl: './ky-thi-cua-toi.component.html',
  styleUrls: ['./ky-thi-cua-toi.component.css']
})
export class KyThiCuaToiComponent {
  danhSachDKKyThi: MatTableDataSource<DangKyKH> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'kyThi',
    'tenHocVien',
    'trangThai',
    'ngayDangKy',
    'action',
  ];
  searchTerm: string = '';
  currentDateTime: Date = new Date();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dangKyThiService: DangKyThiService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private ketQuaThiService: KetQuaThiService

  ) {}

  ngOnInit(): void {
    this.loadDanhSachDKKyThi();
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  ngAfterViewInit() {
    this.danhSachDKKyThi.paginator = this.paginator;
    this.danhSachDKKyThi.sort = this.sort;
  }

  loadDanhSachDKKyThi() {
    this.dangKyThiService.layTatCa().subscribe({
      next: (data) => {
        // Gán dữ liệu vào danhSachDKKyThi
        this.danhSachDKKyThi.data = data;

        // Sử dụng paginator để thiết lập tổng số trang
        this.paginator.length = data.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSearch() {
    // Áp dụng bộ lọc tìm kiếm vào danhSachDKKyThi
    this.danhSachDKKyThi.filter = this.searchTerm.trim().toLowerCase();
  }

  refresh() {
    this.searchTerm = '';
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.loadDanhSachDKKyThi();
  }
  xemDiem(ma:any){
    this.ketQuaThiService.layKetQuaThiTheoMaDangKy(ma).subscribe({
      next:data1=>{
        console.log(data1)
        var popup = this.dialog.open(ChiTietDiemComponent, {
          data: {
            item: data1,
          },
          width: '40%',
          enterAnimationDuration: '300ms',
          exitAnimationDuration: '300ms',
        });
      }
      ,error:err=>{
        console.log(err)
      }
    })
  }

}

