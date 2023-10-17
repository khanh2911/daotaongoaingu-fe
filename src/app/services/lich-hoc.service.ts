import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LichHocService {
  private baseUrl = '/api/lich-hoc'; // Điều này dựa trên cấu hình của bạn

  constructor(private http: HttpClient) {}

  // Lấy danh sách tất cả lịch học
  getDanhSachLichHoc(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay-tat-ca`);
  }

  // Lấy thông tin lịch học theo mã lịch học
  getLichHoc(maLichHoc: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay/${maLichHoc}`);
  }

  // Thêm lịch học mới
  themLichHoc(lichHoc: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, lichHoc);
  }

  // Sửa thông tin lịch học
  suaLichHoc(maLichHoc: number, lichHocMoi: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/sua/${maLichHoc}`, lichHocMoi);
  }

  // Xóa lịch học
  xoaLichHoc(maLichHoc: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/xoa/${maLichHoc}`);
  }
}
