import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './component/shop/master/master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    loadChildren: () => import('./module/shop.module').then(module => module.ShopModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
