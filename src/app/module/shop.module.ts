import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { FooterComponent } from '../component/share/footer/footer.component';
import { HeaderComponent } from '../component/share/header/header.component';
import { NavbarComponent } from '../component/share/navbar/navbar.component';

import { HomepageComponent } from '../component/shop/homepage/homepage.component';
import {DetailComponent} from '../component/shop/detail/detail.component';
import {ShopGirdComponent} from '../component/shop/shop-gird/shop-gird.component';
import {CardComponent} from '../component/shop/card/card.component';
import {UserComponent} from '../component/shop/user/user/user.component';
import {SidebarComponent} from '../component/shop/user/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./user.module').then(module => module.UserModule)
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'shop-gird',
    component: ShopGirdComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
];
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HomepageComponent,
    DetailComponent,
    ShopGirdComponent,
    CardComponent,
    UserComponent,
    SidebarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
})
export class ShopModule { }
