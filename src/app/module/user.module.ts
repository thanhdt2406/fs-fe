import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {UserProfileComponent} from '../component/shop/user/profile/user-profile/user-profile.component';
import {EditProfileComponent} from '../component/shop/user/edit-profile/edit-profile.component';
import {ManageOrderComponent} from '../component/shop/user/manage-order/manage-order.component';
import {AddressBookComponent} from '../component/shop/user/address-book/address-book.component';
import {DashAddressMakeDefaultComponent} from '../component/shop/user/dash-address-make-default/dash-address-make-default.component';
import {AddressAddComponent} from '../component/shop/user/address-add/address-add.component';
import {ListOrderComponent} from '../component/shop/user/list-order/list-order.component';
import {AddressEditComponent} from '../component/shop/user/address-edit/address-edit.component';
import {WishlistComponent} from '../component/shop/user/wishlist/wishlist.component';



const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent
  },
  {
    path: 'order',
    component: ManageOrderComponent
  },
  {
    path: 'address-book',
    component: AddressBookComponent
  },
  {
    path: 'default-address',
    component: DashAddressMakeDefaultComponent
  },
  {
    path: 'address/add',
    component: AddressAddComponent
  },
  {
    path: 'orders',
    component: ListOrderComponent
  },
  {
    path: 'address/edit',
    component: AddressEditComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
];

@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileComponent,
    ManageOrderComponent,
    AddressBookComponent,
    DashAddressMakeDefaultComponent,
    AddressAddComponent,
    ListOrderComponent,
    AddressEditComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ],
})
export class UserModule { }
