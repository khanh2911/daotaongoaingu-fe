import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DangKyKhoaHocService {
  private baseUrl = '/api/dang-ky-khoa-hoc'; // Điều này phụ thuộc vào cấu hình proxy trong Angular CLI (angular.json)
  constructor(private http: HttpClient) {}
  getAllDangKyKhoaHoc(
    page: number,
    size: number,
    sortBy: string,
    sortDir: string,
    searchTerm: string,
    tenDangNhap?: string,
    maKhoaHoc?: number, // Chỉnh sửa kiểu dữ liệu này nếu cần
    manage?: boolean
  ): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir)
      .set('searchTerm', searchTerm);

    if (maKhoaHoc !== undefined) {
      params = params.set('maKhoaHoc', maKhoaHoc.toString());
    }

    if (tenDangNhap !== undefined) {
      params = params.set('tenDangNhap', tenDangNhap);
    }
    if (manage !== undefined) {
      params = params.set('manage', manage.toString());
    }

    return this.http.get(`${this.baseUrl}/lay-danh-sach`, { params });
  }


  // Kiểm tra đăng ký khóa học
  kiemTraDangKyKhoaHoc(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/kiem-tra`, data);
  }

  // Thêm đăng ký khóa học
  themDangKyKhoaHoc(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, data);
  }

  // Lấy thông tin đăng ký khóa học
  layDangKyKhoaHoc(maDangKy: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay/${maDangKy}`);
  }
  layDangKyKhoaHocTheoKHHV(maKH: number, tenDangNhap: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay-theo-khoa-hoc-hoc-vien/${maKH}/${tenDangNhap}`);
  }
  // Cập nhật trạng thái đăng ký khóa học
  capNhatTrangThaiDangKyKhoaHoc(maDangKy: number, data: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/cap-nhat-trang-thai/${maDangKy}`,
      data
    );
  }

  // Xóa đăng ký khóa học
  xoaDangKyKhoaHoc(maDangKy: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/huy/${maDangKy}`);
  }
  huyDangKyKhoaHoc(maKhoaHoc: number, tenDangNhap: string): Observable<any> {
    const url = `${this.baseUrl}/huy-theo-khoa-hoc-hoc-vien/${maKhoaHoc}?tenDangNhap=${tenDangNhap}`;

    // Thực hiện yêu cầu DELETE
    return this.http.delete(url);
  }
  // Lấy danh sách học viên đã đóng học phí
  getDanhSachHocVienDaDongHocPhi(maKhoaHoc: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/danh-sach-hoc-vien-da-dong-hoc-phi/${maKhoaHoc}`
    );
  }
}
