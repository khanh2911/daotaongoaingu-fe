import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LopHoc } from 'src/app/models/LopHoc';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrls: ['./detail-class.component.css'],
})
export class DetailClassComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      lopHoc: LopHoc;
    },
    private dialogRef: MatDialogRef<DetailClassComponent>
  ) {
    console.log(this.data.lopHoc)
  }

  closePopup() {
    this.dialogRef.close('no');
  }
  doiGv(){
    this.dialogRef.close('ok');
  }
}
