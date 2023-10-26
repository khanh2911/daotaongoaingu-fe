import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DangKyKH } from 'src/app/models/DangKyKH';
import { LopHoc } from 'src/app/models/LopHoc';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { PhanCongGiaoVienService } from 'src/app/services/phan-cong-giao-vien.service';
import { StorageService } from 'src/app/services/storage.service';
import { DetailGiaoVienRaDeComponent } from '../detail-giao-vien-ra-de/detail-giao-vien-ra-de.component';
import { DeleteComponent } from 'src/app/components/delete/delete.component';
import { KyThiService } from 'src/app/services/ky-thi.service';
import { GiaoVien } from 'src/app/models/GiaoVien';

@Component({
  selector: 'app-list-giao-vien-ra-de',
  templateUrl: './list-giao-vien-ra-de.component.html',
  styleUrls: ['./list-giao-vien-ra-de.component.css'],
})
export class ListGiaoVienRaDeComponent {
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
  maLichThi!: number;
  trangThai!: number;
  maKyThi!: number;
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
    private router: Router,
    private kyThiService: KyThiService
  ) {}

  ngOnInit(): void {
    this.loadDL();
  }
  loadDL() {
    this.activateRoute.params.subscribe((params: Params) => {
      this.maLichThi = +params['maLichThi'];
      this.maKyThi = +params['maKyThi'];
      this.trangThai = +params['trangThai'];
      this.loadDanhSachGiaoVienRaDe();
    });
  }

  loadDanhSachGiaoVienRaDe() {
    if (this.trangThai === 0) {
      this.kyThiService.layDanhSachGiaoVienRaDe(this.maKyThi).subscribe({
        next: (data) => {
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
            'Có lỗi xảy ra khi tải danh sách giáo viên!',
            error.message
          );
        },
      });
    }
    //lấy danh sách để chọn
    else if (this.trangThai === 1) {
      this.kyThiService
        .layDanhSachGiaoVienHopLeChoKyThi(this.maKyThi)
        .subscribe({
          next: (data) => {
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
              'Có lỗi xảy ra khi tải danh sách giáo viên!',
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
    this.loadDanhSachGiaoVienRaDe();
  }

  detail(item: any): void {
    var popup = this.dialog.open(DetailGiaoVienRaDeComponent, {
      data: {
        item: item,
      },
      width: '40%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
  themGiaoVien() {
    const trangThai = 1; //chọn giáo viên lên điểm
    this.router.navigate([
      `/nhan-vien/quan-ly-ky-thi/${this.maKyThi}/danh-sach-giao-vien-ra-de/phan-cong-ra-de/${trangThai}`,
    ]);
  }
  luuGiaoVienRaDe(body: any) {
    this.kyThiService
      .themGiaoVienRaDe(body.maKyThi, body.maTaiKhoan)
      .subscribe({
        next: (data: any) => {

            this.toastr.success('Phân công giáo viên ra đề thành công!');
            const trangThai = 0;
            this.router.navigate([
              `/nhan-vien/quan-ly-ky-thi/${this.maKyThi}/danh-sach-giao-vien-ra-de/phan-cong-ra-de/${trangThai}`,
            ]);

        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  chonGiaoVien(giaoVien: GiaoVien) {
    const body = {
      maKyThi: this.maKyThi,
      maTaiKhoan: giaoVien.maTaiKhoan,
    };
    this.luuGiaoVienRaDe(body);
  }
  xoa(ma: any) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'ok') {
        this.kyThiService.xoaGiaoVienRaDe(ma, this.maKyThi).subscribe({
          next: (data) => {
            this.loadDL();
            this.toastr.success('Xóa giáo viên ra đề thành công!');
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
      `/nhan-vien/quan-ly-ky-thi`,
    ]);
  }
}
