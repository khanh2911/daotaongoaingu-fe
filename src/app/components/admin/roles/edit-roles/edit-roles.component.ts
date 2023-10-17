import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NhanVienService } from 'src/app/services/nhan-vien.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css'],
})
export class EditRolesComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditRolesComponent>,
    private formBuilder: FormBuilder,
    private nhanVienService: NhanVienService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.formBuilder.group({
      tenVaiTro: ['', Validators.required],
      moTa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu loại lớp cần chỉnh sửa và điền vào form
    this.editForm.setValue({
      tenVaiTro: this.data.tenVaiTro,
      moTa: this.data.moTa,

    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedVaiTro = {
        tenVaiTro: this.editForm.value.tenVaiTro,
        moTa: this.editForm.value.moTa,

      };

      // Gọi service để cập nhật thông tin loại lớp
      this.nhanVienService
        .capNhatVaiTro(this.data.maVaiTro, updatedVaiTro)
        .subscribe((response) => {
          if (response) {
            // Cập nhật thành công, đóng dialog và thông báo
            this.dialogRef.close(response);
          } else {
            // Xử lý lỗi nếu cần
          }
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
