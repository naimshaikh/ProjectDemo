import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// ------------------------------------------------------------
import { AppRoutingModule } from '../../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [SidebarComponent, TopbarComponent],
})
export class NavbarModule { }
