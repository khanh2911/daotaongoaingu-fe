import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaiLopService } from 'src/app/services/loai-lop.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delete-typeclass',
  templateUrl: './delete-typeclass.component.html',
  styleUrls: ['./delete-typeclass.component.css'],
})
export class DeleteTypeclassComponent {
  maLoaiLop: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maLoaiLop: number },
    public dialogRef: MatDialogRef<DeleteTypeclassComponent>,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
    private loaiLopService: LoaiLopService
  ) {
    this.maLoaiLop = data.maLoaiLop; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }

  // accept() {
  //   // Pass maLoaiLop to the method and handle the response using subscribe
  //   this.loaiLopService.xoaLoaiLop(this.maLoaiLop).subscribe({
  //     next: (response) => {
  //       if (response) {
  //         this.toastr.success('Bạn đã Xóa thành công!');
  //         this.dialogRef.close('accept');

  //       } else {
  //         // Handle the case where the deletion failed
  //         this.toastr.error('Xóa không thành công. Vui lòng thử lại sau.');
  //       }
  //     },
  //       error: (error) => {
  //         console.error('Error deleting LoaiLop:', error);
  //       },
  //   })

  // }
  // accept() {
  //   // Call the API service to delete the type class
  //   this.loaiLopService.xoaLoaiLop(this.maLoaiLop).subscribe(
  //     (response: any) => {
  //       if (response.message === 'cant-delete') {
  //         // Handle the case where the deletion is not allowed
  //         this.toastr.warning('Không thể xóa loại lớp này.');
  //       }  else {
  //         // Handle other cases or errors
  //          this.toastr.success('Bạn đã xóa thành công!');
  //          this.dialogRef.close('accept');
  //       }
  //     },
  //     (error) => {
  //       // Handle any errors that occur during the HTTP request
  //       console.error('Error deleting LoaiLop:', error);
  //       this.toastr.error(
  //         'Có lỗi xảy ra khi xóa LoaiLop. Vui lòng thử lại sau.'
  //       );
  //     }
  //   );
  // }
  accept() {
    // Call the API service to delete the type class
    this.loaiLopService.xoaLoaiLop(this.maLoaiLop).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa loại lớp này.');
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

