import { LichHocService } from './../../../../services/lich-hoc.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoaiLopService } from 'src/app/services/loai-lop.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css'],
})
export class EditScheduleComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditScheduleComponent>,
    private formBuilder: FormBuilder,
    private lichHocService: LichHocService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.formBuilder.group({
      kiHieu: ['', Validators.required],
      moTa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu loại lớp cần chỉnh sửa và điền vào form
    this.editForm.setValue({
      kiHieu: this.data.kiHieu,
      moTa: this.data.moTa,
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedLichHoc = {
        kiHieu: this.editForm.value.kiHieu,
        moTa: this.editForm.value.moTa,
      };

      // Gọi service để cập nhật thông tin loại lớp
      this.lichHocService
        .suaLichHoc(this.data.maLichHoc, updatedLichHoc)
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
