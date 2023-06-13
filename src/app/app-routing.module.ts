import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'shared',loadChildren:()=>import('./_shared/_shared.module').then(m=>m.SharedModule)},
  {path:'Admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'Manager',loadChildren:()=>import('./manager/manager.module').then(m=>m.ManagerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
