import { GiaoVien } from "./GiaoVien";
import { HocVien } from "./HocVien";
import { KhoaHoc } from "./KhoaHoc";
import { LichHoc } from "./LichHoc";
import { Phong } from "./Phong";


export interface LopHoc {
  maLop: number;
  soLuong: number;
  phong?: Phong;
  khoaHoc: KhoaHoc;
  lichHoc?: LichHoc;
  tenLop: string;
  hinhThucHoc:HinhThucHoc
  hocViens: HocVien;
  giaoVien?: GiaoVien;
}
export enum HinhThucHoc {
  Online = 'Online',
  Offline = 'Offline',
}


