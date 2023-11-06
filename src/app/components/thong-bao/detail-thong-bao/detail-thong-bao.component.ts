import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThongBao } from 'src/app/models/ThongBao';

@Component({
  selector: 'app-detail-thong-bao',
  templateUrl: './detail-thong-bao.component.html',
  styleUrls: ['./detail-thong-bao.component.css'],
})
export class DetailThongBaoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      notification: ThongBao;
      deleteHandler: (maThongBao: number) => void;
    },
    private dialogRef: MatDialogRef<DetailThongBaoComponent>
  ) {}

  handleDelete() {
    this.data.deleteHandler(this.data.notification.maThongBao);
    this.closePopup();
  }
  closePopup() {
    this.dialogRef.close();
  }
}
