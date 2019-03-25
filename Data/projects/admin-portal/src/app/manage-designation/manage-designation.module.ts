import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDesignationRoutingModule } from './manage-designation-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    ManageDesignationRoutingModule
  ]
})
export class ManageDesignationModule { }
