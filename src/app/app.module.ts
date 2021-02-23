import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from './module/shop.module';
import { MasterComponent } from './component/shop/master/master.component';
import { SignupComponent } from './component/signin-signup/signup/signup.component';
import { LoginComponent } from './component/signin-signup/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminComponent } from './component/admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
