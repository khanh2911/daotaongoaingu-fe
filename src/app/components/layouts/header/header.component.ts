
import { ChangePasswordComponent } from './../../auth/change-password/change-password.component';
import { BooleanInput } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { LogoutComponent } from '../../auth/logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  [x: string]: any;
  loggedInUsername: string | null = null;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document
  ) {}
  opened = true; // Đặt giá trị mặc định là false
  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.loggedInUsername = user.tenTaiKhoan;
    this.checkScreenWidth();
    this.addResizeListener();
  }

  // Kiểm tra độ rộng màn hình và đặt giá trị cho biến opened
  checkScreenWidth(): void {
    this.opened = this.isSmallScreen() ? false : true;
  }

  // Kiểm tra xem màn hình có đúng là nhỏ hơn hoặc bằng 800px hay không
  isSmallScreen(): boolean {
    return this.document.documentElement.clientWidth <= 800;
  }

  // Thêm sự kiện lắng nghe cho sự thay đổi kích thước cửa sổ
  addResizeListener(): void {
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }

  // Mã cho hàm mở dialog để đăng xuất
  // Mã cho hàm mở dialog để đăng xuất
  dangXuat(): void {
    let dialogRef = this.dialog.open(LogoutComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        // this.storageService.signOut();
        // this.router.navigate(['dang-nhap']);
      }
    });
  }

  //mở form đổi mật khẩu
  DoiMatKhau() {
    this.OpenFormDMK();
  }
  OpenFormDMK() {
    var _popup = this.dialog.open(ChangePasswordComponent, {
      width: '40%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    _popup.afterClosed().subscribe((item) => {
      // console.log(item)
    });
  }
}
