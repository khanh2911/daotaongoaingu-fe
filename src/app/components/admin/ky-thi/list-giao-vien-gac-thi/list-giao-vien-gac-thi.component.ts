import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { HocVien } from 'src/app/models/HocVien';
import { LopHocService } from 'src/app/services/lop-hoc.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { DangKyKH } from 'src/app/models/DangKyKH';
import { LopHoc } from 'src/app/models/LopHoc';
import { GiaoVien } from 'src/app/models/GiaoVien';
import { DetailGiaoVienComponent } from 'src/app/components/admin/class/detail-giao-vien/detail-giao-vien.component';
import { ChiTietGiaoVienGacThiComponent } from '../chi-tiet-giao-vien-gac-thi/chi-tiet-giao-vien-gac-thi.component';
import { PhanCongGiaoVienService } from '../../../../services/phan-cong-giao-vien.service';
import { DeleteComponent } from 'src/app/components/delete/delete.component';
import { XacNhanGiaoVienComponent } from '../xac-nhan-giao-vien/xac-nhan-giao-vien.component';

@Component({
  selector: 'app-list-giao-vien-gac-thi',
  templateUrl: './list-giao-vien-gac-thi.component.html',
  styleUrls: ['./list-giao-vien-gac-thi.component.css'],
})
export class ListGiaoVienGacThiComponent {
  danhSachGiaoVien: MatTableDataSource<any> = new MatTableDataSource();
  danhSachGiaoVienFull: any[] = [];
  displayedColumns: string[] = [
    'STT',
    'taiKhoan.hoTen',
    'taiKhoan.soDienThoai',
    'taiKhoan.gioiTinh',
    'actions',
  ];
  searchTerm: string = '';
  maKyThi!: number;
  maLichThi!: number;
  trangThai!: number;
  maDangKyThi!: number;
  dangKy!: DangKyKH;
  lopHoc!: LopHoc;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dangKyKhoaHocService: DangKyKhoaHocService,
    private storageService: StorageService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private phanCongGiaoVienService: PhanCongGiaoVienService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDL();
  }
  loadDL() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.maKyThi = +params['maKyThi'];
      this.maLichThi = +params['maLichThi'];
      this.maDangKyThi = +params['maDangKyThi'];
      this.trangThai = +params['trangThai'];
      this.loadDanhSachGiaoVienCuaLichThi();
    });
  }

  loadDanhSachGiaoVienCuaLichThi() {
    if (this.trangThai === 0) {
      this.phanCongGiaoVienService
        .layGiaoVienGacThiTheoLichThi(this.maLichThi)
        .subscribe({
          next: (data) => {
            console.log(data);
            if (data.message && data.message === 'null') {
              this.danhSachGiaoVienFull = [];
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
    //lấy danh sách để chọn
    else if (this.trangThai === 1) {
      this.phanCongGiaoVienService
        .layGiaoVienGacThiHopLe(this.maLichThi)
        .subscribe({
          next: (data) => {
            console.log(data);
            if (data.message && data.message === 'null') {
              this.toastr.error('Không có giáo viên hợp lệ!');
              this.danhSachGiaoVienFull = [];
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
    this.loadDanhSachGiaoVienCuaLichThi();
  }

  detail(item: any): void {
    var popup = this.dialog.open(ChiTietGiaoVienGacThiComponent, {
      data: {
        item: item,
      },
      width: '40%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
  themGiaoVien() {
    const trangThai = 1; //chọn giáo viên đang gác thi
    this.router.navigate([
      `/nhan-vien/quan-ly-ky-thi/${this.maDangKyThi}/lich-thi/${this.maLichThi}/phan-cong-gac-thi/${trangThai}`,
    ]);
  }
  luuGiaoVienGacThi(body: any) {
    this.phanCongGiaoVienService.themGiaoVienGacThi(body).subscribe({
      next: (data) => {
        if (data.message && data.message === 'phongnull') {
          this.toastr.warning(
            'Không thể chọn giáo viên!',
            'Chưa đặt phòng cho lịch thi này!'
          );
        } else {
          this.toastr.success('Phân công giáo viên gác thi thành công!');
          const trangThai = 0; // hiển thị danh sách giáo viên đang gác thi
          this.router.navigate([
            `/nhan-vien/quan-ly-ky-thi/${this.maDangKyThi}/lich-thi/${this.maLichThi}/phan-cong-gac-thi/${trangThai}`,
          ]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  chonGiaoVien(giaoVien: GiaoVien) {
    const body = {
      maLichThi: this.maLichThi,
      maGiaoVien: giaoVien.maTaiKhoan,
    };
    this.phanCongGiaoVienService
      .checkGiaoVienDay(giaoVien.maTaiKhoan, this.maLichThi)
      .subscribe({
        next: (data) => {
          console.log(data);
          if (data.message && data.message === 'true') {
            const dialogRef = this.dialog.open(XacNhanGiaoVienComponent, {
              width: '350px',
              enterAnimationDuration: '300ms',
              exitAnimationDuration: '300ms',
            });

            dialogRef.afterClosed().subscribe((result) => {
              if (result === 'ok') {
                this.luuGiaoVienGacThi(body);
              }
            });
          } else if (data.message && data.message === 'false') {
            this.luuGiaoVienGacThi(body);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  xoa(ma: any) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'ok') {
        this.phanCongGiaoVienService
          .xoaGiaoVienGacThi(ma, this.maLichThi)
          .subscribe({
            next: (data) => {
              this.loadDL();
              this.toastr.success('Xóa giáo viên gác thi thành công!');
            },
            error: (err) => {
              console.log(err);
            },
          });
      }
    });
  }
  return() {
    // Thực hiện điều hướng đến địa chỉ mong muốn khi quay lại
    this.router.navigate([
      `/nhan-vien/quan-ly-ky-thi/${this.maKyThi}/danh-sach-lich-thi`,
    ]);
  }
}

