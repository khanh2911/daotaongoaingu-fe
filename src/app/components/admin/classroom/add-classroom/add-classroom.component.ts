import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoaiPhong } from 'src/app/models/Phong';
import { PhongService } from 'src/app/services/phong.service';


@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css'],
})
export class AddClassroomComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddClassroomComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private phongService: PhongService
  ) {}

  get formControls() {
    return this.myform.controls;
  }
  loaiPhongOptions = Object.values(LoaiPhong);
  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    tenPhong: ['', [Validators.required]],
    sucChua: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
     viTri: ['', [Validators.required]],
     kiHieu:  ['', Validators.required],
     loaiPhong:  ['', Validators.required],
  });

  saveClassroom() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      this.phongService.themPhongHoc(formData).subscribe({
        next: (data) => {
          console.log(data);
          this.closePopup();
          this.toastr.success('Thêm phòng học thành công!');
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    }
  }
}
