import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './component/shop/master/master.component';
import { SignupComponent } from './component/signin-signup/signup/signup.component';
import { LoginComponent } from './component/signin-signup/login/login.component';
import {AuthGuard} from "./helper/auth-guard";

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    loadChildren: () => import('./module/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
