import { Component } from '@angular/core';
import {Type }  from '../../_core/interfaces/Type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TypeService } from 'src/app/_core/services/type/type.service';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {

  isList: number = 0;

  isMenu: boolean = false;

  isSearch: boolean = false;

  types$! :Observable<Type[]>;

  types!: Type[];

  // appliance$! :Observable<Appliance[]>;

  type!:Type;

  modalForm: FormGroup;

  updateForm: FormGroup;

  typeToUpdate ={
    id:1,
    libelle:''

  }





  constructor(private typeService:TypeService,private fb :FormBuilder){

    this.modalForm = this.fb.group({


      libelle: ['', Validators.required],








    });



    this.updateForm = this.fb.group({



      libelle: ['', Validators.required],




    });



  }











  ngOnInit(): void {



     this.types$ = this.typeService.getTypes();
     

    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));



  }





  onSubmit() {

    const formValues = this.modalForm.value;



    const contact: Type = {

      id:formValues.id,
      libelle: formValues.libelle,




    };



    this.typeService.addType(contact).subscribe({

      next: (newType) => {

        console.log(`New contact created: ${newType}`);

      },

      error: (err) => {

        console.log(`Error creating contact: ${err}`);

      }

    });



  }

  // }



  deleteType(id: number): void {

    this.typeService.deleteType(id)

      .subscribe(() => {

        this.types = this.types.filter(a => a.id !== id);

      });

  }

  onUpdate(){



    this.typeService.updateType(this.typeToUpdate).subscribe(result => {

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



  edit(type :any){

      this.typeToUpdate=type;

  }


}
