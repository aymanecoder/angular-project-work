import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appliance } from 'src/app/_core/interfaces/Appliance';
import { AddApplianceService } from 'src/app/_core/services/add-appliance.service';
import { EditService } from 'src/app/_core/services/edit.service';
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
  @Input() appliance!: Appliance;
  updateForm!: FormGroup;


  constructor(private listAppliance:ListApplianceService,private applianceAj$ :AddApplianceService,private fb :FormBuilder,private applianceUp$ : EditService){
    this.modalForm = this.fb.group({
      libelle: ['', Validators.required],
      reference: ['', Validators.required],
      dbid: [''],
      type: [''],
      disponibilite: [false]
    });
      // this.updateForm = this.fb.group({
    //   libelle: [this.appliance.libelle],
    //   reference: [this.appliance.reference],
    //   dbid: [this.appliance.dbid],
    //   type: [this.appliance.type.libelle],
    //   disponibilite: [this.appliance.disponibilite],
    // });
  }




  ngOnInit(): void {

     this.appliances$ = this.listAppliance.getAppliances();
    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));
          this.updateForm = this.fb.group({
      libelle: [this.appliance.libelle],
      reference: [this.appliance.reference],
      dbid: [this.appliance.dbid],
      type: [this.appliance.type.libelle],
      disponibilite: [this.appliance.disponibilite],
    });
  }


  onSubmit() {
    const formValues = this.modalForm.value;

    const appliance: Appliance = {
      id:formValues.id,
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
  onUpdate(){
    const updatedAppliance: Appliance = {
      id: this.appliance.id, // Include the ID of the appliance you want to update
      libelle: this.updateForm.value.libelle,
      reference: this.updateForm.value.reference,
      dbid: this.updateForm.value.dbid,
      type: { libelle: this.updateForm.value.type },
      disponibilite: this.updateForm.value.disponibilite
    };
    this.applianceUp$.updateAppliance(updatedAppliance).subscribe(result => {
      console.log('Appliance updated:', result);
    });
  }

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  displayModal=false;
  updateModal(){
    this.displayModal=!this.displayModal;
  }
}
