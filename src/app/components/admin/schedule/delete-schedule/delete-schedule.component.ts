import { LichHocService } from './../../../../services/lich-hoc.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-delete-schedule',
  templateUrl: './delete-schedule.component.html',
  styleUrls: ['./delete-schedule.component.css'],
})
export class DeleteScheduleComponent {
  maLichHoc: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maLichHoc: number },
    public dialogRef: MatDialogRef<DeleteScheduleComponent>,
    private router: Router,
    private toastr: ToastrService,
    private lichHocService: LichHocService
  ) {
    console.log('maLichHoc:', data.maLichHoc);
    this.maLichHoc = data.maLichHoc; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }

  // accept() {
  //   // Pass maLoaiLop to the method and handle the response using subscribe
  //   this.lichHocService.xoaLichHoc(this.maLichHoc).subscribe({
  //     next: (response) => {
  //       if (response) {
  //         this.toastr.success('Bạn đã Xóa thành công!');
  //         this.dialogRef.close('accept');
  //       } else {
  //         // Handle the case where the deletion failed
  //         this.toastr.error('Xóa không thành công. Vui lòng thử lại sau.');
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Error deleting Lịch Học:', error);
  //     },
  //   });
  // }
  accept() {
    // Call the API service to delete the type class
    this.lichHocService.xoaLichHoc(this.maLichHoc).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa Lịch học này.');
        } else {
          // Handle other cases or errors
          this.toastr.success('Bạn đã xóa thành công!');
          this.dialogRef.close('accept');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
