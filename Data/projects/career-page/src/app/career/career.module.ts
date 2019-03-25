import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { CultureComponent } from './culture/culture.component';

@NgModule({
  declarations: [CareerComponent, CultureComponent],
  imports: [
    SharedModule,
    CareerRoutingModule,
  ],
  exports: [CareerComponent],
})
export class CareerModule { }
