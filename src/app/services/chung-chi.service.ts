import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChungChiService {
  private apiBaseUrl = 'http://localhost:8081/api/chung-chi';

  constructor(private http: HttpClient) {}

  // Phương thức để thêm một chứng chỉ
  themChungChi(chungChi: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/them`, chungChi);
  }

  // Phương thức để lấy tất cả chứng chỉ
  layTatCaChungChi(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiBaseUrl}/lay-tat-ca`);
  }

  // Phương thức để lấy một chứng chỉ theo mã
  layChungChi(maChungChi: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/lay/${maChungChi}`);
  }

  // Phương thức để cập nhật một chứng chỉ
  suaChungChi(maChungChi: number, chungChiMoi: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/sua/${maChungChi}`, chungChiMoi);
  }

  // Phương thức để xóa một chứng chỉ theo mã
  xoaChungChi(maChungChi: number): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/xoa/${maChungChi}`);
  }
}
