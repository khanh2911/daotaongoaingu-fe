
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LichHoc } from 'src/app/models/LichHoc';
import { LichHocService } from 'src/app/services/lich-hoc.service';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent {
  danhSachLichHoc: MatTableDataSource<LichHoc> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    // 'maLichHoc',
    'kiHieu',
    'moTa',
    'actions',

  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private lichhocService: LichHocService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadDL();
  }

  loadDL() {
    this.lichhocService.getDanhSachLichHoc().subscribe((data) => {
      this.danhSachLichHoc = new MatTableDataSource<LichHoc>(data);
      this.danhSachLichHoc.paginator = this.paginator;
      this.danhSachLichHoc.sort = this.sort;
    });
  }

  onSearch() {
    this.danhSachLichHoc.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachLichHoc.paginator) {
      this.danhSachLichHoc.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = ''; // Đặt lại giá trị của bộ lọc tìm kiếm về rỗng
    this.danhSachLichHoc.filter = ''; // Xóa bộ lọc trong MatTableDataSource
    this.paginator.pageIndex = 0; // Đặt lại trang về trang đầu tiên
    this.paginator.pageSize = 5; // Đặt lại kích thước trang về giá trị mặc định nếu cần
  }

  addschedule(): void {
    var popup = this.dialog.open(AddScheduleComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDL();
    });
  }

  editschedule(LichHoc: LichHoc): void {
    const dialogRef = this.dialog.open(EditScheduleComponent, {
      width: '45%',
      data: LichHoc,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDL();
      }
    });
  }

  modeleteschedule(maLichHoc: number): void {
    const dialogRef = this.dialog.open(DeleteScheduleComponent, {
      width: '350px',
      data: { maLichHoc }, // Pass the maLoaiLop value to the dialog
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
