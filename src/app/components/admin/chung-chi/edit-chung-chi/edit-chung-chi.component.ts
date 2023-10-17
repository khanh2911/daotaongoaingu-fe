import { ChungChiService } from './../../../../services/chung-chi.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-chung-chi',
  templateUrl: './edit-chung-chi.component.html',
  styleUrls: ['./edit-chung-chi.component.css'],
})
export class EditChungChiComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditChungChiComponent>,
    private formBuilder: FormBuilder,
    private chungChiService: ChungChiService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.formBuilder.group({
      tenChungChi: ['', Validators.required],
      moTa: ['', Validators.required],
      lePhiThi: ['', Validators.pattern(/^\d+(\.\d{1,2})?$/)],
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu loại lớp cần chỉnh sửa và điền vào form
    this.editForm.setValue({
      tenChungChi: this.data.tenChungChi,
      moTa: this.data.moTa,
      lePhiThi: this.data.lePhiThi,
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedChungChi = {
        tenChungChi: this.editForm.value.tenChungChi,
        moTa: this.editForm.value.moTa,
        lePhiThi: this.editForm.value.lePhiThi,
      };

      // Gọi service để cập nhật thông tin loại lớp
      this.chungChiService
        .suaChungChi(this.data.maChungChi, updatedChungChi)
        .subscribe((response) => {
          if (response) {
            // Cập nhật thành công, đóng dialog và thông báo
            this.toastr.success('Bạn đã chỉnh sửa thành công!');
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
