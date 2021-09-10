import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReaduserComponent } from './readuser/readuser.component';
import { ShowAllUserComponent } from './show-all-user/show-all-user.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { ShowOrderComponent } from './show-order/show-order.component';

const routes: Routes = [

{path:'',component:UserComponent},
{path:'userlogin',component:UserloginComponent},
{path:'readuser',component:ReaduserComponent},
{path:'showalldata',component:ShowAllUserComponent},
{path: 'product',component:ProductComponent},
{path: 'Order',component:OrderComponent},
{path: 'showOrder',component:ShowOrderComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
