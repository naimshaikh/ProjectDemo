import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemsComponent } from './header/menu-items/menu-items.component';
import { ContactDetailsComponent } from './footer/contact-details/contact-details.component';
import { ContactComponent } from './footer/contact/contact.component';

@NgModule({
  declarations: [HeaderComponent, MenuItemsComponent, FooterComponent, ContactDetailsComponent, ContactComponent],
  imports: [
    SharedModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule { }
