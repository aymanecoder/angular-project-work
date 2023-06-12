import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appliance } from 'src/app/_core/interfaces/Appliance';
import { AddApplianceService } from 'src/app/_core/services/add-appliance.service';
import { DeleteService } from 'src/app/_core/services/delete.service';
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
  appliances!: Appliance[];
  // appliance$! :Observable<Appliance[]>;
  appliance!:Appliance;
  modalForm: FormGroup;
  updateForm!: FormGroup;
  applianceToUpdate ={
    libelle:'',
    reference:'',
    dbid:'',
    disponibilite:'',
    type:{
      libelle:''
    },
  }


  constructor(private listAppliance:ListApplianceService,private applianceAj$ :AddApplianceService,private fb :FormBuilder,private applianceUp$ : EditService,private applianceDel$ : DeleteService){
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
    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));

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

  deleteAppliance(id: number): void {
    this.applianceDel$.deleteAppliance(id)
      .subscribe(() => {
        this.appliances = this.appliances.filter(a => a.id !== id);
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

  edit(appliance :any){
      this.applianceToUpdate=appliance;
  }


}
