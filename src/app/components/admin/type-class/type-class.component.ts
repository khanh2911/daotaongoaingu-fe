import { LoaiLopService } from './../../../services/loai-lop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { LoaiLop } from 'src/app/models/LoaiLop';
import { StorageService } from 'src/app/services/storage.service';
import { TaiKhoanService } from 'src/app/services/tai-khoan.service';
import { AddTypeclassComponent } from './add-typeclass/add-typeclass.component';
import { EditTypeclassComponent } from './edit-typeclass/edit-typeclass.component';
import { DeleteTypeclassComponent } from './delete-typeclass/delete-typeclass.component';

@Component({
  selector: 'app-type-class',
  templateUrl: './type-class.component.html',
  styleUrls: ['./type-class.component.css'],
})
export class TypeClassComponent implements OnInit {
  danhSachLoaiLop: MatTableDataSource<LoaiLop> = new MatTableDataSource();
  displayedColumns: string[] = [
    'stt',
    'tenLoaiLop',
    'deCuong',
    'hocPhi',
    'actions',
  ];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private loaiLopService: LoaiLopService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadDL();
  }

  loadDL() {
    this.loaiLopService.layTatCaLoaiLop().subscribe((data) => {
      this.danhSachLoaiLop = new MatTableDataSource<LoaiLop>(data);
      this.danhSachLoaiLop.paginator = this.paginator;
      this.danhSachLoaiLop.sort = this.sort;
    });
  }

  onSearch() {
    this.danhSachLoaiLop.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachLoaiLop.paginator) {
      this.danhSachLoaiLop.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = ''; // Đặt lại giá trị của bộ lọc tìm kiếm về rỗng
    this.danhSachLoaiLop.filter = ''; // Xóa bộ lọc trong MatTableDataSource
    this.paginator.pageIndex = 0; // Đặt lại trang về trang đầu tiên
    this.paginator.pageSize = 5; // Đặt lại kích thước trang về giá trị mặc định nếu cần
  }

  addtypeclass(): void {
    var popup = this.dialog.open(AddTypeclassComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDL();
    });
  }

  editTypeclass(loaiLop: LoaiLop): void {
    const dialogRef = this.dialog.open(EditTypeclassComponent, {
      width: '45%',
      data: loaiLop,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDL();
      }
    });
  }

  // deleteTypeclass(maLoaiLop: number): void {
  //   const confirmDelete = confirm('Bạn có chắc chắn muốn xóa loại lớp này?');
  //   if (confirmDelete) {
  //     this.loaiLopService.xoaLoaiLop(maLoaiLop).subscribe((response) => {
  //       if (response) {
  //         this.loadDL();
  //         this.toastr.success('Xóa loại lớp thành công', 'Thành công');
  //       } else {
  //         // Xử lý lỗi nếu cần
  //         this.toastr.error('Xóa loại lớp không thành công', 'Lỗi');
  //       }
  //     });
  //   }
  // }
  modeleteTypeclass(maLoaiLop: number): void {
    const dialogRef = this.dialog.open(DeleteTypeclassComponent, {
      width: '350px',
      data: { maLoaiLop }, // Pass the maLoaiLop value to the dialog
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
