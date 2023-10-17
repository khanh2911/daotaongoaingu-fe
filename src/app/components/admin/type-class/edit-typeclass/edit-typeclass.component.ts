import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaiLopService } from 'src/app/services/loai-lop.service';
// Thay đường dẫn tới LoaiLopService

@Component({
  selector: 'app-edit-typeclass',
  templateUrl: './edit-typeclass.component.html',
  styleUrls: ['./edit-typeclass.component.css'],
})
export class EditTypeclassComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditTypeclassComponent>,
    private formBuilder: FormBuilder,
    private loaiLopService: LoaiLopService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.formBuilder.group({
      tenLoaiLop: ['', Validators.required],
      deCuong: [''],
      hocPhi: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu loại lớp cần chỉnh sửa và điền vào form
    this.editForm.setValue({
      tenLoaiLop: this.data.tenLoaiLop,
      deCuong: this.data.deCuong,
      hocPhi: this.data.hocPhi,
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedLoaiLop = {
        tenLoaiLop: this.editForm.value.tenLoaiLop,
        deCuong: this.editForm.value.deCuong,
        hocPhi: this.editForm.value.hocPhi,
      };

      // Gọi service để cập nhật thông tin loại lớp
      this.loaiLopService
        .suaLoaiLop(this.data.maLoaiLop, updatedLoaiLop)
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
