import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhongHocService {
  private baseUrl = '/api/phong-hoc'; // Điều chỉnh baseURL tùy thuộc vào cấu hình của bạn

  constructor(private http: HttpClient) {}

  // Hàm để thêm phòng học
  themPhongHoc(phongHoc: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, phongHoc);
  }

  // Hàm để lấy danh sách phòng học
  layDanhSachPhongHoc(): Observable<any> {
    return this.http.get(`${this.baseUrl}/danh-sach`);
  }

  // Hàm để lấy thông tin phòng học theo ID
  layPhongHocTheoId(maPhongHoc: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${maPhongHoc}`);
  }

  // Hàm để cập nhật thông tin phòng học
  capNhatPhongHoc(maPhongHoc: number, phongHoc: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/cap-nhat/${maPhongHoc}`, phongHoc);
  }

  // Hàm để xóa phòng học
  xoaPhongHoc(maPhongHoc: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/xoa/${maPhongHoc}`);
  }
}
