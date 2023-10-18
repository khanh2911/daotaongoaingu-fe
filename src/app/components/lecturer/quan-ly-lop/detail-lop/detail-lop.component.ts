import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LopHoc } from 'src/app/models/LopHoc';

@Component({
  selector: 'app-detail-lop',
  templateUrl: './detail-lop.component.html',
  styleUrls: ['./detail-lop.component.css'],
})
export class DetailLopComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      lopHoc: LopHoc;
    },
    private dialogRef: MatDialogRef<DetailLopComponent>
  ) {
    console.log(this.data.lopHoc);
  }

  closePopup() {
    this.dialogRef.close('no');
  }

}
