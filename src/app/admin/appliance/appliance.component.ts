import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appliance } from 'src/app/_core/interfaces/Appliance';
import { ListApplianceService } from 'src/app/_core/services/list-appliance.service';

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.scss']
})
export class ApplianceComponent implements OnInit {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  appliances$! :Observable<Appliance[]>;

  constructor(private listAppliance:ListApplianceService){}


  ngOnInit(): void {

     this.appliances$ = this.listAppliance.getAppliances();

  }


}
