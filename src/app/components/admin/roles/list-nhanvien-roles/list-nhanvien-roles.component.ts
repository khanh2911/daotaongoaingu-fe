import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NhanVien } from 'src/app/models/NhanVien';

@Component({
  selector: 'app-list-nhanvien-roles',
  templateUrl: './list-nhanvien-roles.component.html',
  styleUrls: ['./list-nhanvien-roles.component.css'],
})
export class ListNhanvienRolesComponent {
  danhSachVaiTro: MatTableDataSource<NhanVien> = new MatTableDataSource();
  displayedColumns: string[] = ['stt', 'hoTen', 'moTa'];
  length: number = 0;
 
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      staff: any;
    },
    private dialogRef: MatDialogRef<ListNhanvienRolesComponent>
  ) {}

  closePopup() {
    this.dialogRef.close();
  }
}
