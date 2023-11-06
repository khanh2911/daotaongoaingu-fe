import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { NhanVienService } from 'src/app/services/nhan-vien.service';
import { ThongBaoService } from 'src/app/services/thong-bao.service';
export const Roles = {
  QuanTriVien: 'QuanTriVien',
  GiaoVien: 'GiaoVien',
  HocVien: 'HocVien',
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  showMenu = false;
  roles: string = '';
  vaiTro: string = '';
  vaiTroNhanVien: string[] = [];
  tenDangNhap: string = '';
  soThongBao: number = 0;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private nhanVienService: NhanVienService,
    private thongBaoService: ThongBaoService
  ) {}

  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.roles = user.quyen;
    this.tenDangNhap = user.tenTaiKhoan;
    if (this.roles === 'NhanVien') {
      this.loadVaiTroNhanVien(user.tenTaiKhoan);
    }
    this.laySoThongBao();
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  loadVaiTroNhanVien(ten: any) {
    this.nhanVienService.layVaiTroCuaNhanVien(ten).subscribe({
      next: (response: any[]) => {
        this.vaiTroNhanVien = response.map((item) => item.tenVaiTro);
      },
      error: (err) => {},
    });
  }

  hasVaiTro(vaiTro: string): boolean {
    return this.vaiTroNhanVien.includes(vaiTro);
  }

  laySoThongBao() {
    this.thongBaoService.laySoThongBaoChuaDocTheoNguoiDungId().subscribe({
      next: (data) => {
        this.soThongBao = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
