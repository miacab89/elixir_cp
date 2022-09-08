import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { ServerComponent } from './server/server.component';
import { BillingComponent } from './billing/billing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ServersService } from './servers.service';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { UserComponent } from './user/user.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  imports: [
    MdbCollapseModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdbDropdownModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'servers', component: ServerComponent },
      { path: 'adduser', component: AdduserComponent},
      { path: 'users', component: UserComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'productlist', component: ProductListComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    DashboardComponent,
    ServerComponent,
    BillingComponent,
    InvoicesComponent,
    UserComponent,
    PermissionsComponent,
    AdduserComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CartService,
    ServersService
  ]
})

export class AppModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/