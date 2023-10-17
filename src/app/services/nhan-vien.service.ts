import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NhanVienService {
  private apiUrl = '/api/tai-khoan/nhan-vien'; // Điều chỉnh URL của API của bạn

  constructor(private http: HttpClient) {}

  // Hàm để gửi yêu cầu POST để thêm vai trò cho nhân viên
  themVaiTroChoNhanVien(nhanVienId: number, vaiTroIds: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/them-vai-tro/${nhanVienId}`,
      vaiTroIds
    );
  }
    themVaiTro(vaiTro: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/them-vai-tro`, vaiTro);
  }

  // Hàm để lấy vai trò của nhân viên
  layVaiTroCuaNhanVien(tenDangNhap: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/vai-tro/${tenDangNhap}`);
  }

  // Hàm để lấy danh sách nhân viên của một vai trò
  layNhanVienCuaVaiTro(tenVaiTro: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/danh-sach-nhan-vien-cua-vai-tro/${tenVaiTro}`
    );
  }

  // Hàm để lấy danh sách tất cả vai trò
  layAllVaiTro(): Observable<any> {
    return this.http.get(`${this.apiUrl}/danh-sach-vai-tro`);
  }

  capNhatVaiTro(maVaiTro: number, vaiTro: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/cap-nhat-vai-tro/${maVaiTro}`, vaiTro);
  }

  // Xóa vai trò
  xoaVaiTro(maVaiTro: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/xoa-vai-tro/${maVaiTro}`);
  }

  // Lấy thông tin vai trò theo mã vai trò
  layVaiTro(maVaiTro: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/lay-vai-tro/${maVaiTro}`);
  }
}
