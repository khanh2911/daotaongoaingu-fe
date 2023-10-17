import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BacChungChiService {
  private baseUrl = 'http://localhost:8081/api/bac-chung-chi'; // Điều chỉnh URL dựa trên cấu hình của bạn

  constructor(private http: HttpClient) {}

  // Phương thức để thêm bậc chứng chỉ
  addBacChungChi(bacChungChi: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/them`, bacChungChi);
  }

  // Phương thức để lấy tất cả các bậc chứng chỉ
  getAllBacChungChi(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay-tat-ca`);
  }

  // Phương thức để lấy bậc chứng chỉ theo ID
  getBacChungChiById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay/${id}`);
  }

  // Phương thức để cập nhật bậc chứng chỉ
  updateBacChungChi(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/sua/${id}`, data);
  }

  // Phương thức để lấy bậc chứng chỉ theo chứng chỉ
  getBacChungChiByChungChi(maChungChi: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lay-theo-chung-chi/${maChungChi}`);
  }

  // Phương thức để xóa bậc chứng chỉ
  deleteBacChungChi(maBacChungChi: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/xoa/${maBacChungChi}`);
  }
}
