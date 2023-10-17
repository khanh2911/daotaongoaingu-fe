import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BacChungChiService } from 'src/app/services/bac-chung-chi.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delete-bac-chung-chi',
  templateUrl: './delete-bac-chung-chi.component.html',
  styleUrls: ['./delete-bac-chung-chi.component.css'],
})
export class DeleteBacChungChiComponent {
  maBacChungChi: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { maBacChungChi: number },
    public dialogRef: MatDialogRef<DeleteBacChungChiComponent>,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService,
    private bacChungChiService: BacChungChiService
  ) {
    console.log('maBacChungChi:', data.maBacChungChi);
    this.maBacChungChi = data.maBacChungChi; // Initialize maLoaiLop from the data passed to the dialog
  }

  closedialog() {
    this.dialogRef.close('Closed using function');
  }

  accept() {
    // Call the API service to delete the type class
    this.bacChungChiService.deleteBacChungChi(this.maBacChungChi).subscribe({
      next: (data: any) => {
        if (data.message === 'cant-delete') {
          // Handle the case where the deletion is not allowed
          this.toastr.warning('Không thể xóa bậc chứng chỉ này.');
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
