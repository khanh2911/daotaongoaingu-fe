import { StorageService } from 'src/app/services/storage.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-xac-nhan-giao-vien',
  templateUrl: './xac-nhan-giao-vien.component.html',
  styleUrls: ['./xac-nhan-giao-vien.component.css']
})
export class XacNhanGiaoVienComponent {
  constructor(
    public dialogRef: MatDialogRef<XacNhanGiaoVienComponent>,
  ) {}
  closedialog() {
    this.dialogRef.close('no');
  }
  accept() {
    this.dialogRef.close('ok');
  }
}
