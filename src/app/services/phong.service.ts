import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phong, PhongHocRequest } from '../models/Phong';

@Injectable({
  providedIn: 'root'
})
export class PhongService {

  private apiUrl = '/api/phong';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUnusedRooms(maLop: number): Observable<Phong[]> {
    return this.http.get<Phong[]>(`${this.apiUrl}/phong-hop-le/${maLop}`);
  }

  themPhongHoc(phongHocRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/them`, phongHocRequest, this.httpOptions);
  }

  layTatCaPhongHoc(loai: string): Observable<Phong[]> {
    return this.http.get<Phong[]>(`${this.apiUrl}/danh-sach/${loai}`);
  }

  layPhongHocTheoId(maPhongHoc: number): Observable<Phong> {
    return this.http.get<Phong>(`${this.apiUrl}/${maPhongHoc}`);
  }

  capNhatPhongHoc(maPhongHoc: number, phongHocRequest: PhongHocRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/cap-nhat/${maPhongHoc}`, phongHocRequest, this.httpOptions);
  }

  xoaPhongHoc(maPhongHoc: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/xoa/${maPhongHoc}`, this.httpOptions);
  }
}
