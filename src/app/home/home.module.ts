import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../_shared/_shared.module';
import { HerosComponent } from './heros/heros.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    HerosComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }
