import { ChangePasswordComponent } from './../../auth/change-password/change-password.component';
import { BooleanInput } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { LogoutComponent } from '../../auth/logout/logout.component';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent {
  
}
