import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhanCongGiangDayService {
  // URL tới backend API
  private apiUrl = '/api/phan-cong-giang-day';

  constructor(private http: HttpClient) { }

  // Thêm phân công giảng dạy
  themPhanCongGiangDay(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/them`, data);
  }

  // Cập nhật phân công giảng dạy
  suaPhanCongGiangDay(maPhanCongGiangDay: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sua/${maPhanCongGiangDay}`, data);
  }

  // Lấy tất cả phân công giảng dạy
  layTatCaPhanCongGiangDay(): Observable<any> {
    return this.http.get(`${this.apiUrl}/lay-tat-ca`);
  }

  // Lấy phân công giảng dạy theo ID
  layPhanCongGiangDay(maPhanCongGiangDay: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/lay/${maPhanCongGiangDay}`);
  }

  // Xóa phân công giảng dạy
  xoaPhanCongGiangDay(maPhanCongGiangDay: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/xoa/${maPhanCongGiangDay}`);
  }

}

