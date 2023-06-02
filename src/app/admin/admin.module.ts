import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AsideAdminComponent } from './aside-admin/aside-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceComponent } from './appliance/appliance.component';


const routes : Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'admin/appliance', component: ApplianceComponent}
];


@NgModule({
  declarations: [
    AdminComponent,
    AsideAdminComponent,
    ApplianceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [AdminComponent,AsideAdminComponent,ApplianceComponent]
})
export class AdminModule { }
