import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ChungChi } from 'src/app/models/ChungChi';
import { LoaiLopService } from 'src/app/services/loai-lop.service';
import { AddChungChiComponent } from './add-chung-chi/add-chung-chi.component';
import { EditChungChiComponent } from './edit-chung-chi/edit-chung-chi.component';
import { DeleteChungChiComponent } from './delete-chung-chi/delete-chung-chi.component';
import { ChungChiService } from 'src/app/services/chung-chi.service';

@Component({
  selector: 'app-chung-chi',
  templateUrl: './chung-chi.component.html',
  styleUrls: ['./chung-chi.component.css'],
})
export class ChungChiComponent implements OnInit {
  danhSachChungChi: MatTableDataSource<ChungChi> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'tenChungChi',
    'moTa',
    'lePhiThi',
    'actions',
  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private chungChiService: ChungChiService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadDL();
  }

  loadDL() {
    this.chungChiService.layTatCaChungChi().subscribe((data) => {
      this.danhSachChungChi = new MatTableDataSource<ChungChi>(data);
      this.danhSachChungChi.paginator = this.paginator;
      this.danhSachChungChi.sort = this.sort;
    });
  }

  onSearch() {
    this.danhSachChungChi.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachChungChi.paginator) {
      this.danhSachChungChi.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = ''; // Đặt lại giá trị của bộ lọc tìm kiếm về rỗng
    this.danhSachChungChi.filter = ''; // Xóa bộ lọc trong MatTableDataSource
    this.paginator.pageIndex = 0; // Đặt lại trang về trang đầu tiên
    this.paginator.pageSize = 5; // Đặt lại kích thước trang về giá trị mặc định nếu cần
  }

  addChungChi(): void {
    var popup = this.dialog.open(AddChungChiComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDL();
    });
  }

  editChungChi(chungChi: ChungChi): void {
    const dialogRef = this.dialog.open(EditChungChiComponent, {
      width: '45%',
      data: chungChi,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDL();
      }
    });
  }

  modeleteChungChi(maChungChi: number): void {
    const dialogRef = this.dialog.open(DeleteChungChiComponent, {
      width: '350px',
      data: { maChungChi }, // Pass the maLoaiLop value to the dialog
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        // Handle any further actions if needed after deletion
      }
      this.loadDL();
    });
  }
}
