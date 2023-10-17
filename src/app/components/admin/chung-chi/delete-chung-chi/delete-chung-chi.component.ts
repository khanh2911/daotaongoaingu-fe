import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChungChiService } from 'src/app/services/chung-chi.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delete-chung-chi',
  templateUrl: './delete-chung-chi.component.html',
  styleUrls: ['./delete-chung-chi.component.css'],
})
export class DeleteChungChiComponent {
  maChungChi: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maChungChi: number },
    public dialogRef: MatDialogRef<DeleteChungChiComponent>,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
    private chungChiService: ChungChiService
  ) {
    console.log('maChungChi:', data.maChungChi);
    this.maChungChi = data.maChungChi; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }

  accept() {
    // Call the API service to delete the type class
    this.chungChiService.xoaChungChi(this.maChungChi).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa chứng chỉ này.');
        } else {
          // Handle other cases or errors
          this.toastr.success('Bạn đã xóa thành công!');
          this.dialogRef.close('accept');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
