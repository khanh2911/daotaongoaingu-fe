import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KhoaHocService {
  private baseUrl = '/api/khoa-hoc'; // Điều này phụ thuộc vào đường dẫn API thực tế

  constructor(private http: HttpClient) {}

  // Phương thức để lấy danh sách khóa học

  getKhoaHocList(
    page: number = 0,
    size: number = 10,
    sortBy: string,
    sortDir: string,
    searchTerm: string,
    trangThai?: string  
  ): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir)
      .set('searchTerm', searchTerm);

    // Only add trangThai to params if it is provided
    if (trangThai) {
      params = params.set('trangThai', trangThai);
    }

    return this.http.get(`${this.baseUrl}/lay-danh-sach`, { params });
  }
  // Phương thức để lấy thông tin một khóa học dựa trên ID
  getKhoaHocById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay/${id}`);
  }

  // Phương thức để tạo mới khóa học
  createKhoaHoc(khoaHocData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, khoaHocData);
  }

  // Phương thức để cập nhật thông tin khóa học
  updateKhoaHoc(id: number, khoaHocData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/sua/${id}`, khoaHocData);
  }

  // Phương thức để xóa khóa học dựa trên ID
  deleteKhoaHoc(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/xoa/${id}`);
  }
}
