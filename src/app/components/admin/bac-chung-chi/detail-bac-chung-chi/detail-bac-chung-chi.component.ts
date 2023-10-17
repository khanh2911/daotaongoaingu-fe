import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-bac-chung-chi',
  templateUrl: './detail-bac-chung-chi.component.html',
  styleUrls: ['./detail-bac-chung-chi.component.css'],
})
export class DetailBacChungChiComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      bacChungChi: any;
    },
    private dialogRef: MatDialogRef<DetailBacChungChiComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
