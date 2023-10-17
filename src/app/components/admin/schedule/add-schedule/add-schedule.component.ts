import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LichHocService } from 'src/app/services/lich-hoc.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css'],
})
export class AddScheduleComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<AddScheduleComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private lichhocService: LichHocService
  ) {}

  get formControls() {
    return this.myform.controls;
  }

  ngOnInit(): void {}

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    kiHieu: ['', [Validators.required]],
    moTa: ['', [Validators.required]],
  });

  savetypeclass() {
    if (this.myform.valid) {
      const formData = this.myform.value;
      this.lichhocService.themLichHoc(formData).subscribe({
        next: (data) => {
          console.log(data);
          this.closePopup();
          this.toastr.success('Thêm lịch học thành công!');
        },
        error: (err) => {
          this.toastr.error(err);
        },
      });
    }
  }
}
