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
  soLuongLopDaDayHienTai!: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { item: any },
    private dialogRef: MatDialogRef<DetailPhongThiComponent>
  ) {
    console.log(data.item);
  }

  closePopup() {
    this.dialogRef.close('no');
  }
  doiGv() {
    this.dialogRef.close('ok');
  }
}
