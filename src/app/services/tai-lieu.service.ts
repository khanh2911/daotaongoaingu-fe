import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaiLieu } from '../models/TaiLieu';


@Injectable({
  providedIn: 'root'
})
export class TaiLieuService {
  private apiUrl = '/api/tai-lieu';

  constructor(private http: HttpClient) { }

  getAllTaiLieu(): Observable<TaiLieu[]> {
    return this.http.get<TaiLieu[]>(this.apiUrl);
  }
  getAllTaiLieuByLoaiLop(maLoaiLop:any): Observable<TaiLieu[]> {
    return this.http.get<TaiLieu[]>(`${this.apiUrl}/lay-theo-loai-lop/${maLoaiLop}`);
  }
  getTaiLieuById(maTaiLieu: number): Observable<TaiLieu> {
    return this.http.get<TaiLieu>(`${this.apiUrl}/${maTaiLieu}`);
  }

  createTaiLieu(file: File, maLoaiLop: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('maLoaiLop', maLoaiLop.toString());

    const req = new HttpRequest('POST', `${this.apiUrl}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  updateTaiLieu(maTaiLieu: number, file: File, maLoaiLop: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('maLoaiLop', maLoaiLop.toString());

    const req = new HttpRequest('PUT', `${this.apiUrl}/${maTaiLieu}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  deleteTaiLieu(maTaiLieu: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${maTaiLieu}`);
  }

  getOriginalFileName(maTaiLieu: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${maTaiLieu}/ten`);
  }

  downloadFile(maTaiLieu: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${maTaiLieu}/download`, { responseType: 'blob', observe: 'response' });
}

}
