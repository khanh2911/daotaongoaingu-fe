import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  showMenu = true;
  role: string =''
  token: string=''
  constructor(
    private storageService: StorageService,
    private router: Router,
    private taiKhoanService: TaiKhoanService,
    private cookie: CookieService
  ) {}
  toggleMenu() {
    this.showMenu = !this.showMenu;

  }
  ngOnInit(): void {
    this.testLogin();
  }
  xoa() {
    this.storageService.signOut();
    this.cookie.deleteAll()
  }
    testLogin(): void {
    const user = this.storageService.getUser();
    this.role = user.quyen;
    this.token = user.token;
      const body = {
        token: this.token
      };
      this.taiKhoanService.testLogin(body).subscribe({
        next: (data) => {
          if (data.message && data.message === 'ok') {
          }
          if (data.message && data.message === 'error') {
            this.storageService.signOut();
            this.router.navigate(['dang-nhap']);
          }
          if (data.message && data.message === 'empty') {
            this.storageService.signOut();
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
