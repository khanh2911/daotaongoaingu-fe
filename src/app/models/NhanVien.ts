import { TaiKhoan } from './TaiKhoan';

export interface NhanVien {
  maTaiKhoan: number;
  taiKhoan: TaiKhoan;
  quyen: string;
  tenVaiTro: string;
  vaiTros:string;
}
