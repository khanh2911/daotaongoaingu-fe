import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DangKyThiService } from './../../../../services/dang-ky-thi.service';
import { KetQuaThiService } from './../../../../services/ket-qua-thi.service';

@Component({
  selector: 'app-nhap-diem-hoc-vien',
  templateUrl: './nhap-diem-hoc-vien.component.html',
  styleUrls: ['./nhap-diem-hoc-vien.component.css']
})
export class NhapDiemHocVienComponent implements OnInit {

  maDangKyThi: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      item: any,
      maKyThi: any,
      maLichThi: any
    },
    private dialogRef: MatDialogRef<NhapDiemHocVienComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dangKyThiService: DangKyThiService,
    private ketQuaThiService: KetQuaThiService
  ) { }

  ngOnInit(): void {
    this.loadDangKyThi();
  }

  loadDangKyThi() {
    this.dangKyThiService.layTheoKyThiLTHV(this.data.maKyThi, this.data.maLichThi, this.data.item.maTaiKhoan).subscribe({
      next: data => {
        this.maDangKyThi = data.maDangKyThi;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  get formControls() {
    return this.myform.controls;
  }

  myform = this.formBuilder.group({
    diemNghe: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    diemNoi: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    diemDoc: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    diemViet: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
  });

  savetypeclass() {
    if (this.myform.valid) {
      const formData = {
        ...this.myform.value,
        maDangKyThi: this.maDangKyThi
      };
      this.ketQuaThiService.themKetQuaThi(formData).subscribe({
        next: data => {
          this.closePopup();
          this.toastr.success('Cập nhật điểm thành công!');
        },
        error: err => {
          this.toastr.error(err);
        }
      });
    }
  }

  closePopup() {
    this.dialogRef.close('Closed using function');
  }
}
