import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LichThiService } from './../../../../services/lich-thi.service';
import { LichThi } from 'src/app/models/LichThi';

@Component({
  selector: 'app-chi-tiet-lich-thi',
  templateUrl: './chi-tiet-lich-thi.component.html',
  styleUrls: ['./chi-tiet-lich-thi.component.css']
})
export class ChiTietLichThiComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      kyThi: any,
      lichThi: any
    },
    private dialogRef: MatDialogRef<ChiTietLichThiComponent>,

  ) {}


  closePopup() {
    this.dialogRef.close();
  }
}
