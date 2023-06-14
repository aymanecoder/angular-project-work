import { Component } from '@angular/core';

@Component({
  selector: 'app-pov',
  templateUrl: './pov.component.html',
  styleUrls: ['./pov.component.scss']
})
export class PovComponent {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  displayModal=false;
  updateModal(){
    this.displayModal=!this.displayModal;
  }
}
