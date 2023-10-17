import { TaiKhoan } from './TaiKhoan';

export interface GiaoVien {
  maTaiKhoan: number;
  namNhapHoc: string;
  taiKhoan: TaiKhoan;
  quyen: string;
  trinhDo: string;
}
