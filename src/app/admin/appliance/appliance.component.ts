import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appliance } from 'src/app/_core/interfaces/Appliance';
import { AddApplianceService } from 'src/app/_core/services/add-appliance.service';
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
  // appliance$! :Observable<Appliance[]>;
  modalForm: FormGroup;



  constructor(private listAppliance:ListApplianceService,private applianceAj$ :AddApplianceService,private fb :FormBuilder){
    this.modalForm = this.fb.group({
      libelle: ['', Validators.required],
      reference: ['', Validators.required],
      dbid: [''],
      type: [''],
      disponibilite: [false]
    });
  }




  ngOnInit(): void {
     this.appliances$ = this.listAppliance.getAppliances();
  }


  onSubmit() {
    const formValues = this.modalForm.value;

    const appliance: Appliance = {
      libelle: formValues.libelle,
      reference: formValues.reference,
      dbid: formValues.dbid,
      type: { libelle: formValues.type },
      disponibilite: formValues.disponibilite
    };

    this.applianceAj$.addAppliance(appliance).subscribe({
      next: (newAppliance) => {
        console.log(`New appliance created: ${newAppliance}`);
      },
      error: (err) => {
        console.log(`Error creating appliance: ${err}`);
      }
    });
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
