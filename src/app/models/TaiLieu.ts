import { LoaiLop } from "./LoaiLop";

export interface TaiLieu {
  maTaiLieu: number;
  fileTaiLieu: string;
  loaiLop: LoaiLop;
  ngayTao?: string; // hoặc Date tùy thuộc vào cách bạn xử lý ngày giờ
  ngayCapNhat?: string; // hoặc Date
}
