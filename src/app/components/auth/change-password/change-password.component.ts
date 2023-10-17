import { TaiKhoanService } from './../../../services/tai-khoan.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-changepass',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  invalidPass = false;
  invalidPassOld = false;
  userId: string = '';
  username: string = '';
  token: string = '';

  constructor(
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private auth: AuthService,
    private storageService: StorageService,
    private taiKhoanService: TaiKhoanService
  ) {}
  showMatKhauMoi: boolean = false;
  showXnMatKhau: boolean = false;
  showMatKhauCu: boolean = false;
  toggleMatKhauMoi() {
    this.showMatKhauMoi = !this.showMatKhauMoi;
  }
  toggleXnMatKhau() {
    this.showXnMatKhau = !this.showXnMatKhau;
  }
  toggleMatKhauCu() {
    this.showMatKhauCu = !this.showMatKhauCu;
  }
  get formControls() {
    return this.myform.controls;
  }
  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.token = user.access_token;
    // this.auth.getUserInfo(user.access_token)

  }

  closePopup() {
    this.dialogRef.close('Closed using function');
  }

  myform = this.formBuilder.group({
    matKhauCu: ['', Validators.required],
    matKhauMoi: ['', Validators.required],
    xnMatKhau: ['', Validators.required],
  });

  savePass() {
    if (this.myform.valid) {
      if (this.myform.value.matKhauMoi !== this.myform.value.xnMatKhau) {
        this.invalidPass = true;
      } else {
        const matKhau = {
          matKhauCu: this.myform.value.matKhauCu,
          matKhauMoi:this.myform.value.matKhauMoi
        }
        this.taiKhoanService

           .doiMatKhau(matKhau)
           .subscribe({
             next: (data) => {
               if (data.message === 'NO_CHANGE') {
                 this.toastr.warning('Không có thay đổi');
               }
               this.toastr.success('Đổi mật khẩu thành công');
               this.closePopup();
             },
             error: (err) => {
               if (err.error.message === 'NOT_MACTH') {
                 this.invalidPassOld = true;
               }
               console.log(err);
             },
           });
      }
    } else {
      this.myform.markAllAsTouched();
    }
  }
}
