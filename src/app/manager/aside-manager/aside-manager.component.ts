import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-manager',
  templateUrl: './aside-manager.component.html',
  styleUrls: ['./aside-manager.component.scss']
})
export class AsideManagerComponent {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
}
