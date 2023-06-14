import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import {  RouterModule, Routes } from '@angular/router';
import { AsideManagerComponent } from './aside-manager/aside-manager.component';
import { PovComponent } from './pov/pov.component';


const routes:Routes =[
  {path: 'manager', component: ManagerComponent},
  {path:'manager/pov', component: PovComponent}
]

@NgModule({
  declarations: [
   ManagerComponent,
   AsideManagerComponent,
   PovComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
