import { ChungChiService } from './../../../../services/chung-chi.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BacChungChiService } from 'src/app/services/bac-chung-chi.service';

import { KhoaHocService } from 'src/app/services/khoa-hoc.service';

@Component({
  selector: 'app-edit-bac-chung-chi',
  templateUrl: './edit-bac-chung-chi.component.html',
  styleUrls: ['./edit-bac-chung-chi.component.css'],
})
export class EditBacChungChiComponent {
  editForm: FormGroup;
  ListChungChi: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<EditBacChungChiComponent>,
    private formBuilder: FormBuilder,
    private khoaHocService: KhoaHocService,
    private toastr: ToastrService,
    private bacChungChiService: BacChungChiService,
    private chungChiService: ChungChiService,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.formBuilder.group({
      maChungChi: [this.data.chungChi.maChungChi],
      bac: ['', Validators.required],
      diemToiThieu: ['', Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      diemToiDa: ['', Validators.pattern(/^\d+(\.\d{1,2})?$/)],
    });
  }

  ngOnInit(): void {
    // Lấy dữ liệu loại lớp và lịch học để hiển thị trong dropdown
    this.loadBacChungChi();
  }

  loadBacChungChi() {
    this.chungChiService.layTatCaChungChi().subscribe((data) => {
      this.ListChungChi = data;
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedKhoaHoc = {
        tenChungChi: this.editForm.value.tenChungChi,
        bac: this.editForm.value.bac,
        diemToiThieu: this.editForm.value.diemToiThieu,
        diemToiDa: this.editForm.value.diemToiDa,
      };

      // Gọi service để cập nhật thông tin khóa học
      this.bacChungChiService
        .updateBacChungChi(this.data.maBacChungChi, updatedKhoaHoc)
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
