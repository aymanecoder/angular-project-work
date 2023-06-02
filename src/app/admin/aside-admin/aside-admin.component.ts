import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-admin',
  templateUrl: './aside-admin.component.html',
  styleUrls: ['./aside-admin.component.scss']
})
export class AsideAdminComponent{
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  constructor() {}


}
