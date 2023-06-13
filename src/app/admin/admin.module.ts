import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AsideAdminComponent } from './aside-admin/aside-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceComponent } from './appliance/appliance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { TypeComponent } from './type/type.component';
import { TypePrestationComponent } from './type-prestation/type-prestation.component';


const routes : Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'admin/appliance', component: ApplianceComponent},
  {path: 'admin/client', component: ClientComponent},
  {path: 'admin/contact', component: ContactComponent},
  {path: 'admin/type',component:TypeComponent},
  {path: 'admin/tp', component: TypePrestationComponent},
];


@NgModule({
  declarations: [
    AdminComponent,
    AsideAdminComponent,
    ApplianceComponent,
    ClientComponent,
    ContactComponent,
    TypeComponent,
    TypePrestationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  exports: [AdminComponent,AsideAdminComponent,ApplianceComponent]
})
export class AdminModule { }
