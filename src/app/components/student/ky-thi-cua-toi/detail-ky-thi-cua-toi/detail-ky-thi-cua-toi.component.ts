import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LichThi } from 'src/app/models/LichThi';
import { LichThiService } from 'src/app/services/lich-thi.service';

@Component({
  selector: 'app-detail-ky-thi-cua-toi',
  templateUrl: './detail-ky-thi-cua-toi.component.html',
  styleUrls: ['./detail-ky-thi-cua-toi.component.css'],
})
export class DetailKyThiCuaToiComponent implements OnInit {
  lichThis: LichThi[] = [];
  uniqueDates: string[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      kyThi: any;
    },
    private dialogRef: MatDialogRef<DetailKyThiCuaToiComponent>,
    private lichThiService: LichThiService
  ) {}
  ngOnInit(): void {
    this.loadLichThiCuaKyThi();
  }
  loadLichThiCuaKyThi() {
    this.lichThiService.layLichThiKyThi(this.data.kyThi.maKyThi).subscribe({
      next: (data) => {
        console.log(data);
        this.lichThis = data;
        const dateSet = new Set();
        for (const lichThi of this.lichThis) {
          const formattedDate = new Date(lichThi.ngayThi).toLocaleDateString();
          dateSet.add(formattedDate);
        }
        this.uniqueDates = Array.from(dateSet) as string[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  closePopup() {
    this.dialogRef.close();
  }
}
