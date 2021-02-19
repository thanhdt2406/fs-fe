import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './module/shop.module';
import { MasterComponent } from './component/shop/master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
