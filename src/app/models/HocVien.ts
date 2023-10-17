import { TaiKhoan } from './TaiKhoan';

export interface HocVien {
  maTaiKhoan: number;
  taiKhoan: TaiKhoan;
  truongHoc: string | null;
  lop: number;
  soDTNguoiThan:string | null;
}
