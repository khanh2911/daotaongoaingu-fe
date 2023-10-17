import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaiKhoanService {
  [x: string]: any;
  private apiBaseUrl = '/api/tai-khoan';

  constructor(private http: HttpClient) {}

  authenticateUser(loginRequest: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/dang-nhap`, loginRequest);
  }

  createAccount(taiKhoanRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/them-moi`, taiKhoanRequest);
  }

  getAllUsersByRole(
    page: number,
    size: number,
    sortBy: string,
    sortDir: string,
    searchTerm: string,
    userRole: string
  ): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir)
      .set('searchTerm', searchTerm)
      .set('userRole', userRole);

    return this.http.get(`${this.apiBaseUrl}/lay-danh-sach`, { params });
  }

  updateStatus(status: string, tenDangNhap: string): Observable<any> {
    const params = { status, tenDangNhap };
    return this.http.put(`${this.apiBaseUrl}/cap-nhat-trang-thai`, null, {
      params,
    });
  }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/lay-thong-tin-chi-tiet`);
  }

  doiMatKhau(matKhauMoiRequest: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/doi-mat-khau`, matKhauMoiRequest);
  }

  updateAccount(username: string, taiKhoanRequest: any): Observable<string> {
    return this.http.put<string>(
      `${this.apiBaseUrl}/cap-nhat/${username}`,
      taiKhoanRequest
    );
  }
  testLogin(request: any): Observable<any> {
    return this.http.post<any>(`/api/tai-khoan/kiem-tra-dang-nhap`, request);
  }
}
