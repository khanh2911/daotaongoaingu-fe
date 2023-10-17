import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  changePassword(oldPassword: string, newPassword: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(taiKhoan: string, matKhau: string): Observable<any> {
    const body = {
      taiKhoan: taiKhoan,
      matKhau: matKhau,
    };

    return this.http.post(`/api/tai-khoan/dang-nhap`, body, httpOptions)
  }

  //reset password

}
