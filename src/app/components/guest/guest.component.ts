import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-guest',
  template: `<app-guest-header></app-guest-header>
    <router-outlet></router-outlet>
    <app-guest-footer></app-guest-footer>`,
  styles: [''],
})
export class GuestComponent {
  private role: string = '';
  isLoggedIn = false;
  username?: string;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.role = user.quyen;
      console.log(this.role);
      this.username = user.tenTaiKhoan;
      if (this.role === 'QuanTriVien') {
        this.router.navigate(['/quan-tri-vien']);
      }
      if (this.role === 'HocVien') {
        this.router.navigate(['/hoc-vien']);
      }
      if (this.role === 'GiaoVien') {
        this.router.navigate(['/giao-vien']);
      }
    } else {
      this.router.navigate(['/trang-chu']);
    }
  }
}
