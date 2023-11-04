import { HocVien } from './HocVien';
import { KhoaHoc } from './KhoaHoc';
export interface DangKyKH {
  maDangKy: number;
  trangThaiDangKyHoc: string;
  hocVien: HocVien;
  khoaHoc: KhoaHoc;
  ngayDangKy: Date;

}
export enum TrangThaiDangKyHoc {
  CHUA_DUYET,
  DA_DUYET,
  DA_PHAN_LOP,
}

