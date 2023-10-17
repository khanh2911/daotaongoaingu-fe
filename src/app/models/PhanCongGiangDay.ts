import { GiaoVien } from "./GiaoVien";
import { LopHoc } from "./LopHoc";

export interface PhanCongGiangDay {
  maPhanCongGiangDay: number;
  lopHoc: LopHoc;
  giaoVien: GiaoVien;
  kyNang: KyNang;
}
export enum KyNang {
  Nghe = 'Nghe',
  Noi = 'Noi',
  Doc = 'Doc',
  Viet = 'Viet'
}
