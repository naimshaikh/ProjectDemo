import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MAT_DIALOG_DATA, MatBottomSheetRef, MatCardModule, MatDialogModule, MatDialogRef, MatIconModule, MatToolbarModule } from '@angular/material';
// ------------------------------------------------------------------------
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ManageDomainRoutingModule } from './manage-domain-routing.module';
import { ManageDomainService } from './manage-domain.service';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    ManageDomainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [ManageDomainService],
  entryComponents: [AddComponent],
})
export class ManageDomainModule { }
