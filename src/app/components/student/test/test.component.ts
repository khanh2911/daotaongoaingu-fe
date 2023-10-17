import { Component } from '@angular/core';
import { HocVien } from 'src/app/models/HocVien';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  dataSV!: HocVien;
}
