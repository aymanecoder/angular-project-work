import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import {  RouterModule, Routes } from '@angular/router';
import { AsideManagerComponent } from './aside-manager/aside-manager.component';
import { PovComponent } from './pov/pov.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuivieComponent } from './suivie/suivie.component';
import { SeanceComponent } from './seance/seance.component';


const routes:Routes =[
  {path: 'manager', component: ManagerComponent},
  {path:'manager/pov', component: PovComponent},
  {path:'manager/suivie', component: SuivieComponent}
]

@NgModule({
  declarations: [
   ManagerComponent,
   AsideManagerComponent,
   PovComponent,
   SuivieComponent,
   SeanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
