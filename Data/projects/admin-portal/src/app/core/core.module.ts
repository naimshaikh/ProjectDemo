import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// ----------------------------------------------------
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [NavbarModule],
})
export class CoreModule { }
