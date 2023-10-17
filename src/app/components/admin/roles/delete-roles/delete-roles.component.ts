import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NhanVienService } from 'src/app/services/nhan-vien.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delete-roles',
  templateUrl: './delete-roles.component.html',
  styleUrls: ['./delete-roles.component.css'],
})
export class DeleteRolesComponent {
  maVaiTro: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maVaiTro: number },
    public dialogRef: MatDialogRef<DeleteRolesComponent>,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
    private nhanVienService: NhanVienService
  ) {
    this.maVaiTro = data.maVaiTro;
    console.log('maVaiTro:', data.maVaiTro); // Khởi tạo maLoaiLop từ dữ liệu được truyền vào dialog
  }

  closeDialog() {
    this.dialogRef.close('Đã đóng dialog bằng hàm');
  }

  accept() {
    // Gọi dịch vụ API để xóa vai trò
    this.nhanVienService.xoaVaiTro(this.maVaiTro).subscribe({
      next: (data: any) => {
          // Xử lý khi xóa thành công hoặc các trường hợp khác
          this.toastr.success('Bạn đã xóa thành công!');
          this.dialogRef.close('accept');

      },
      error: (err) => {
         if (err.error.message && err.error.message === 'cant-delete') {
          // Xử lý trường hợp không cho phép xóa
          this.toastr.warning('Không thể xóa vai trò này.');
        }
        console.log(err);
      },
    });
  }
}
