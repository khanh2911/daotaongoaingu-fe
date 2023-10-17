import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';
import { TaiKhoanService } from './services/tai-khoan.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [''],
})
export class RootComponent {
  private role: string = '';
  isLoggedIn = false;
  username?: string;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private taiKhoanService: TaiKhoanService
  ) {}
  testLogin(): void {
    const user = this.storageService.getUser();
    if (user.token) {

      this.role = user.quyen;
      const body = {
        token: user.token,

      };

      this.taiKhoanService.testLogin(body).subscribe({
        next: (data) => {
          if (data.message && data.message === 'ok') {
            switch (this.role) {
              case 'QuanTriVien':
                this.router.navigate(['/quan-tri-vien']);
                break;
              case 'HocVien':
                this.router.navigate(['/hoc-vien']);
                break;
              case 'GiaoVien':
                this.router.navigate(['/giao-vien']);
                break;
              case 'NhanVien':
                this.router.navigate(['/nhan-vien']);
                break;
              default:
                this.router.navigate(['trang-chu']);
                break;
            }
          }
          if (data.message && data.message === 'error') {
            this.storageService.signOut();
            this.router.navigate(['trang-chu']);

          }
          if (data.message && data.message === 'empty') {

            this.storageService.signOut();
          }
        },
        error: (err) => {
          if (err.status === 504) {
            this.router.navigate(['/bao-tri']);
          }
          console.log(err);
        },
      });
    } else
    {
     this.router.navigate(['trang-chu']);
      }
  }
  ngOnInit(): void {
    this.testLogin();
    }

}
