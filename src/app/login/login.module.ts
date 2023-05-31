import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FooterComponent } from '../_shared/components/footer/footer.component';
import { SharedModule } from '../_shared/_shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
