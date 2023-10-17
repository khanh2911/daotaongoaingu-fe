import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { NhanVien } from 'src/app/models/NhanVien';
import { NhanVienService } from 'src/app/services/nhan-vien.service';
import { AddRolesComponent } from './add-roles/add-roles.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';
import { DeleteRolesComponent } from './delete-roles/delete-roles.component';
import { ListNhanvienRolesComponent } from './list-nhanvien-roles/list-nhanvien-roles.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  danhSachVaiTro: MatTableDataSource<NhanVien> = new MatTableDataSource();
  displayedColumns: string[] = ['stt', 'tenVaiTro', 'moTa', 'actions'];
  length: number = 0;
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private nhanVienService: NhanVienService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadDL();
  }

  loadDL() {
    this.nhanVienService.layAllVaiTro().subscribe((data) => {
      this.danhSachVaiTro = new MatTableDataSource<NhanVien>(data);
      this.danhSachVaiTro.paginator = this.paginator;
      this.danhSachVaiTro.sort = this.sort;
    });
  }

  onSearch() {
    this.danhSachVaiTro.filter = this.searchTerm.trim().toLowerCase();

    if (this.danhSachVaiTro.paginator) {
      this.danhSachVaiTro.paginator.firstPage();
    }
  }
  refresh() {
    this.searchTerm = ''; // Đặt lại giá trị của bộ lọc tìm kiếm về rỗng
    this.danhSachVaiTro.filter = ''; // Xóa bộ lọc trong MatTableDataSource
    this.paginator.pageIndex = 0; // Đặt lại trang về trang đầu tiên
    this.paginator.pageSize = 5; // Đặt lại kích thước trang về giá trị mặc định nếu cần
  }

  addRoles(): void {
    var popup = this.dialog.open(AddRolesComponent, {
      width: '45%',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
    popup.afterClosed().subscribe((item) => {
      // console.log(item)
      this.loadDL();
    });
  }

  editRoles(vaiTro: NhanVien): void {
    const dialogRef = this.dialog.open(EditRolesComponent, {
      width: '45%',
      data: vaiTro,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadDL();
      }
    });
  }

  OpenDeleteRoles(maVaiTro: number): void {
    const dialogRef = this.dialog.open(DeleteRolesComponent, {
      width: '350px',
      data: { maVaiTro }, // Pass the maLoaiLop value to the dialog
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
  detailRoles(staff: any | null): void {
    // Bước 4: Mở dialog thay vì đặt selectedNotification
    if (staff) {
      var popup = this.dialog.open(ListNhanvienRolesComponent, {
        data: {
          staff: staff,
        },
        width: '40%',
        enterAnimationDuration: '300ms',
        exitAnimationDuration: '300ms',
      });
    }
  }
}
