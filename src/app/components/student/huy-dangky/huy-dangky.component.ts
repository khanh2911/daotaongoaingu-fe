import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DangKyKhoaHocService } from 'src/app/services/dang-ky-khoa-hoc.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-huy-dangky',
  templateUrl: './huy-dangky.component.html',
  styleUrls: ['./huy-dangky.component.css'],
})
export class HuyDangkyComponent {
  maKhoaHoc: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maKhoaHoc: number },
    public dialogRef: MatDialogRef<HuyDangkyComponent>,
    private router: Router,
    private toastr: ToastrService,
    private dangKyKhoaHocService: DangKyKhoaHocService,
    private storageService: StorageService
  ) {
    console.log('maKhoaHoc:', data.maKhoaHoc);
    this.maKhoaHoc = data.maKhoaHoc; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close();
  }
  accept() {
    const user = this.storageService.getUser();
    // Call the API service to delete the type class
    this.dangKyKhoaHocService.huyDangKyKhoaHoc(this.maKhoaHoc, user.tenTaiKhoan).subscribe({
      next: (data: any) => {
          this.toastr.success('Bạn đã hủy thành công!');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
