import { KyThi } from "./KyThi";
import { Phong } from "./Phong";

export interface LichThi {
  maLichThi: number;
  kyThi: KyThi;
  ngayThi: Date;
  phong: Phong;
  caThi: CaThi;
}
export enum CaThi {
  Sang = 'Sang',
  Chieu = 'Chieu',
}
