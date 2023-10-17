import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const SECRET_KEY = 'khuóngdasdasdasdasdsa';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private cookieService: CookieService, private http: HttpClient) {}
  public saveUser(user: any): void {
    this.cookieService.deleteAll('/'); // chỉ đặt thuộc tính path khi xóa tất cả cookies

    const { tenTaiKhoan, quyen, token } = user;

    // Mã hóa từng trường trước khi lưu vào cookie
    const encryptedAccessToken = CryptoJS.AES.encrypt(
      token,
      SECRET_KEY
    ).toString();
    const encryptedUsername = CryptoJS.AES.encrypt(
      tenTaiKhoan,
      SECRET_KEY
    ).toString();
    const encryptedRole = CryptoJS.AES.encrypt(quyen, SECRET_KEY).toString();

    const cookieOptions = {
      expires: 7,
      path: '/',
    };

    // Lưu từng trường đã được mã hóa vào cookie với chỉ thuộc tính path
    this.cookieService.set('token', encryptedAccessToken, cookieOptions);
    this.cookieService.set('quyen', encryptedRole, cookieOptions);
    this.cookieService.set('tenTaiKhoan', encryptedUsername, cookieOptions);
  }

  public getUser(): any {
    try {
      const encryptedAccessToken = this.cookieService.get('token');
      const encryptedUsername = this.cookieService.get('tenTaiKhoan');
      const encryptedRole = this.cookieService.get('quyen');
      // Giải mã từng trường khi đọc từ cookie
      const token = CryptoJS.AES.decrypt(
        encryptedAccessToken,
        SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);
      const tenTaiKhoan = CryptoJS.AES.decrypt(
        encryptedUsername,
        SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);
      const quyen = CryptoJS.AES.decrypt(encryptedRole, SECRET_KEY).toString(
        CryptoJS.enc.Utf8
      );

      // Tạo đối tượng user từ các trường đã được giải mã
      const user = {
        token,
        tenTaiKhoan,
        quyen,
      };
      return user;
    } catch (error) {
      this.cookieService.deleteAll();
      console.error('Lỗi khi giải mã cookie:', error);
      return null;
    }
  }

  public isLoggedIn(): boolean {
    return this.cookieService.check('token');
  }

  public signOut() {
    this.cookieService.deleteAll('/');
   
  }
}
