import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LichThiService } from './../../../../services/lich-thi.service';
import { LichThi } from 'src/app/models/LichThi';

@Component({
  selector: 'app-detail-ky-thi',
  templateUrl: './detail-ky-thi.component.html',
  styleUrls: ['./detail-ky-thi.component.css'],
})
export class DetailKyThiComponent implements OnInit {
  lichThis: LichThi[]=[]
  uniqueDates: string[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      kyThi: any;
    },
    private dialogRef: MatDialogRef<DetailKyThiComponent>,
    private lichThiService: LichThiService,

  ) {}
  ngOnInit(): void {
    this.loadLichThiCuaKyThi()
  }
  loadLichThiCuaKyThi() {
    this.lichThiService.layLichThiKyThi(this.data.kyThi.maKyThi).subscribe({
      next: (data) => {
        console.log(data)
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

// loadLichThiCuaKyThi() {
//   this.lichThiService.layLichThiKyThi(this.data.kyThi.maKyThi).subscribe({
//     next: (data) => {
//       console.log(data);
//       this.lichThis = data;
//       const dateSet = new Set();
//       for (const lichThi of this.lichThis) {
//         // No need to parse date if ngayThi is already a Date object
//         dateSet.add(lichThi.ngayThi); // Directly add the Date object
//       }
//       this.uniqueDates = Array.from(dateSet) as string[];
//     },
//     error: (err) => {
//       console.log(err);
//     },
//   });
// }


  closePopup() {
    this.dialogRef.close();
  }
}
