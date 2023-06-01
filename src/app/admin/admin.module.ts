import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AsideAdminComponent } from './aside-admin/aside-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/_shared.module';

const routes : Routes = [
  {path: 'admin', component: AdminComponent}
];


@NgModule({
  declarations: [
    AdminComponent,
    AsideAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [AdminComponent,AsideAdminComponent]
})
export class AdminModule { }
