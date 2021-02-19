import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './component/shop/master/master.component';
import { SignupComponent } from './component/signin-signup/signup/signup.component';
import { SigninComponent } from './component/signin-signup/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    loadChildren: () => import('./module/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'signin',
    component: SigninComponent,
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
