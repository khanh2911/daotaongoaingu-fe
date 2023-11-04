import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteScheduleComponent } from '../../schedule/delete-schedule/delete-schedule.component';
import { KhoaHocService } from 'src/app/services/khoa-hoc.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css'],
})
export class DeleteCourseComponent {
  maKhoaHoc: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maKhoaHoc: number },
    public dialogRef: MatDialogRef<DeleteScheduleComponent>,
    private router: Router,
    private toastr: ToastrService,
    private khoahocService: KhoaHocService
  ) {
    console.log('maKhoaHoc:', data.maKhoaHoc);
    this.maKhoaHoc = data.maKhoaHoc; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }

  accept() {
    // Call the API service to delete the type class
    this.khoahocService.deleteKhoaHoc(this.maKhoaHoc).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa Khóa học này!');
        } else {
          // Handle other cases or errors
          this.toastr.success('Bạn đã xóa thành công!');
          this.dialogRef.close('accept');
        }
      },
      error: (err) => {
        if (err.status === 401) {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa Khóa học này!');
        }
        console.log(err);
      },
    });
  }
}
