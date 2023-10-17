import { LoaiLopService } from './../../../../services/loai-lop.service';
import {Component,Inject,OnInit,} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetailLecturerComponent } from '../../list-lecturer/detail-lecturer/detail-lecturer.component';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-typeclass',
  templateUrl: './add-typeclass.component.html',
  styleUrls: ['./add-typeclass.component.css'],
})
export class AddTypeclassComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddTypeclassComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loaiLopService: LoaiLopService
  ) {}

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    tenLoaiLop: ['', [Validators.required]],
    deCuong: ['', [Validators.required]],
    hocPhi: [
      '',
      [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
    ],
  });

  savetypeclass() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      this.loaiLopService.themLoaiLop(formData).subscribe({
        next: (data) => {
          console.log(data);
        this.closePopup();
          this.toastr.success('Thêm loại lớp thành công!');
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    }
  }
}
