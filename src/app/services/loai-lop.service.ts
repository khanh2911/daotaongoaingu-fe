import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaiLopService {
  private baseUrl = '/api/loai-lop'; // Đặt baseUrl tương ứng với địa chỉ API của bạn

  constructor(private http: HttpClient) {}

  // Phương thức để thêm loại lớp
  themLoaiLop(loaiLop: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, loaiLop);
  }

  // Phương thức để lấy tất cả loại lớp
  layTatCaLoaiLop(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay-tat-ca`);
  }

  // Phương thức để lấy một loại lớp dựa trên mã
  layLoaiLop(maLoaiLop: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay/${maLoaiLop}`);
  }

  // Phương thức để sửa loại lớp
  suaLoaiLop(maLoaiLop: number, loaiLopMoi: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/sua/${maLoaiLop}`, loaiLopMoi);
  }

  // Phương thức để xóa loại lớp
  xoaLoaiLop(maLoaiLop: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/xoa/${maLoaiLop}`);
  }
}
