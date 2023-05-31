import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


const DECLARATION = [NavbarComponent, FooterComponent]
@NgModule({
  declarations: DECLARATION,
  imports: [
    CommonModule
  ],
  exports: DECLARATION

})
export class SharedModule { }
