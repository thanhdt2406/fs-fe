import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './module/shop.module';
import { MasterComponent } from './component/shop/master/master.component';
import { SignupComponent } from './component/signin-signup/signup/signup.component';
import { SigninComponent } from './component/signin-signup/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    SignupComponent,
    SigninComponent,
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
