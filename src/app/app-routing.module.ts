import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './component/shop/master/master.component';
import { SignupComponent } from './component/signin-signup/signup/signup.component';
import { LoginComponent } from './component/signin-signup/login/login.component';
import {AuthGuard} from "./helper/auth-guard";
import { AdminComponent } from './component/admin/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    loadChildren: () => import('./module/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./module/admin.module').then(module => module.AdminModule)
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
