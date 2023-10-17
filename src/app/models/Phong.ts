// phong-hoc-request.model.ts
export interface PhongHocRequest {
  tenPhong: string;
  sucChua: number;
  viTri: string;
  kiHieu: string;
  loaiPhong: LoaiPhong;
}

// phong.model.ts
export interface Phong {
  maPhongHoc?: number;
  tenPhong: string;
  sucChua: number;
  viTri: string;
  kiHieu: string;
  loaiPhong: LoaiPhong;
}
export enum LoaiPhong {
  Học = 'Hoc',
  Thi = 'Thi',
}
