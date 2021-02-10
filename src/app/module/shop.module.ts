import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../component/share/footer/footer.component';
import { HeaderComponent } from '../component/share/header/header.component';
import { NavbarComponent } from '../component/share/navbar/navbar.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
