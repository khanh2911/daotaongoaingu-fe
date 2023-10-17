import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddDocumentComponent } from './add-document/add-document.component';
import { TaiLieu } from 'src/app/models/TaiLieu';
import { TaiLieuService } from 'src/app/services/tai-lieu.service';
import { LoaiLopService } from 'src/app/services/loai-lop.service';
import { LoaiLop } from 'src/app/models/LoaiLop';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from '../../delete/delete.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit {
  danhSachTaiLieu: MatTableDataSource<TaiLieu> = new MatTableDataSource();
  displayedColumns: string[] = ['stt', 'fileTaiLieu', 'loaiLop', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  searchTerm: string = '';
  ListLoaiLop: any[] = [];
  loaiLopSelected!: LoaiLop;
  constructor(
    private taiLieuService: TaiLieuService,
    private dialog: MatDialog,
    private loailopService: LoaiLopService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadLoaiLop();
  }

  loadDL() {
    this.taiLieuService
      .getAllTaiLieuByLoaiLop(this.loaiLopSelected)
      .subscribe((data) => {
        console.log(data);
        this.danhSachTaiLieu = new MatTableDataSource<TaiLieu>(data);
        this.danhSachTaiLieu.paginator = this.paginator;
        this.danhSachTaiLieu.sort = this.sort;
      });
  }
  //bỏ loại lớp
  loadLoaiLop() {
    this.loailopService.layTatCaLoaiLop().subscribe((data) => {
      this.ListLoaiLop = data;
      this.loaiLopSelected = data[0].maLoaiLop;
      this.loadDL();
    });
  }
  onLoaiLoaiLopChange(event: any): void {
    this.loaiLopSelected = event.value;
    this.loadDL();
  }
  addDocument(): void {
    const popup = this.dialog.open(AddDocumentComponent, {
      width: '45%',
    });
    popup.afterClosed().subscribe((result) => {
      if (result === 'ok') {
        this.toastr.success('Thêm tài liệu thành công!');
        this.loadDL();
      }
    });
  }
  onSearch() {
    this.danhSachTaiLieu.filter = this.searchTerm.trim().toLowerCase();
    if (this.danhSachTaiLieu.paginator) {
      this.danhSachTaiLieu.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = '';
    this.loadDL();
  }
  taiFile(ma: any) {
    this.taiLieuService.downloadFile(ma).subscribe({
      next: (response) => {
        const blob = new Blob([response.body as Blob], {
          type: 'application/octet-stream',
        });
        // Extract filename from the Content-Disposition header
        const contentDisposition = response.headers.get('content-disposition');
        let filename = 'default-filename.ext'; // default filename if not provided
        if (contentDisposition) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
            contentDisposition
          );
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
          }
        }
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error: (err) => {
        this.toastr.error('Tải thất bại');
      },
    });
  }

  deleteTaiLieu(ma: any) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '350px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'ok') {
        this.taiLieuService.deleteTaiLieu(ma).subscribe((data) => {
          this.toastr.success('Xóa thành công');
          this.loadDL();
        });
      }
    });
  }
}
