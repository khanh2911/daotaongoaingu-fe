import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GiaoVien } from 'src/app/models/GiaoVien';

@Component({
  selector: 'app-detail-phong-thi',
  templateUrl: './detail-phong-thi.component.html',
  styleUrls: ['./detail-phong-thi.component.css'],
})
export class DetailPhongThiComponent {
  giaoVien!: GiaoVien;
  danhSachGiaoVienGacThi: GiaoVien[];
  danhSachGiaoVienLenDiem: GiaoVien[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      item: any;
      danhSachGiaoVienGacThi: GiaoVien[];
      danhSachGiaoVienLenDiem: GiaoVien[];
    },
    private dialogRef: MatDialogRef<DetailPhongThiComponent>
  ) {
    this.danhSachGiaoVienGacThi = data.danhSachGiaoVienGacThi;
    this.danhSachGiaoVienLenDiem = data.danhSachGiaoVienLenDiem;
    console.log(data.item);
  }

  closePopup() {
    this.dialogRef.close('no');
  }
  doiGv() {
    this.dialogRef.close('ok');
  }
}
