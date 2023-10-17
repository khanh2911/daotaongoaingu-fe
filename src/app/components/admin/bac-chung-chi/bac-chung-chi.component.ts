
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { BacChungChiService } from 'src/app/services/bac-chung-chi.service';
import { AddBacChungChiComponent } from './add-bac-chung-chi/add-bac-chung-chi.component';
import { EditBacChungChiComponent } from './edit-bac-chung-chi/edit-bac-chung-chi.component';
import { DeleteBacChungChiComponent } from './delete-bac-chung-chi/delete-bac-chung-chi.component';
import { BacChungChi } from 'src/app/models/BacChungChi';
import { DetailBacChungChiComponent } from './detail-bac-chung-chi/detail-bac-chung-chi.component';


@Component({
  selector: 'app-bac-chung-chi',
  templateUrl: './bac-chung-chi.component.html',
  styleUrls: ['./bac-chung-chi.component.css'],
})
export class BacChungChiComponent implements OnInit {
  danhSachBacChungChi: MatTableDataSource<BacChungChi> =
    new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'bac',
    'diemToiThieu',
    'diemToiDa',
    'actions',
  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private bacChungChiService: BacChungChiService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadDL();
  }

  loadDL() {
    this.bacChungChiService.getAllBacChungChi().subscribe((data) => {
      this.danhSachBacChungChi = new MatTableDataSource<BacChungChi>(data);
      this.danhSachBacChungChi.paginator = this.paginator;
      this.danhSachBacChungChi.sort = this.sort;
    });
  }

  onSearch() {
    this.danhSachBacChungChi.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachBacChungChi.paginator) {
      this.danhSachBacChungChi.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = ''; // Đặt lại giá trị của bộ lọc tìm kiếm về rỗng
    this.danhSachBacChungChi.filter = ''; // Xóa bộ lọc trong MatTableDataSource
    this.paginator.pageIndex = 0; // Đặt lại trang về trang đầu tiên
    this.paginator.pageSize = 5; // Đặt lại kích thước trang về giá trị mặc định nếu cần
  }

  addBacChungChi(): void {
    var popup = this.dialog.open(AddBacChungChiComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDL();
    });
  }

  editBacChungChi(bacChungChi: BacChungChi): void {
    const dialogRef = this.dialog.open(EditBacChungChiComponent, {
      width: '45%',
      data: bacChungChi,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDL();
      }
    });
  }

  modeleteBacChungChi(maBacChungChi: number): void {
    const dialogRef = this.dialog.open(DeleteBacChungChiComponent, {
      width: '350px',
      data: { maBacChungChi }, // Pass the maLoaiLop value to the dialog
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
  detailBacChungChi(bacChungChi: any | null): void {
    if (bacChungChi) {
      var popup = this.dialog.open(DetailBacChungChiComponent, {
        data: {
          bacChungChi: bacChungChi,
        },
        width: '40%',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
      });
    }
  }
}
