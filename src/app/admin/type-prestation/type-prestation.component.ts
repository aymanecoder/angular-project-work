import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Tps } from 'src/app/_core/interfaces/Tps';
import { TypePrestationService } from 'src/app/_core/services/typePrestation/type-prestation.service';

@Component({
  selector: 'app-Tps-prestation',
  templateUrl: './type-prestation.component.html',
  styleUrls: ['./type-prestation.component.scss']
})
export class TypePrestationComponent {
  isList: number = 0;

  isMenu: boolean = false;

  isSearch: boolean = false;

  tps$! :Observable<Tps[]>;

  tps!: Tps[];

  // appliance$! :Observable<Appliance[]>;

  Tps!:Tps;

  modalForm: FormGroup;

  updateForm: FormGroup;

  typeToUpdate ={
    id:1,
    libelle:''

  }





  constructor(private tpService:TypePrestationService,private fb :FormBuilder){

    this.modalForm = this.fb.group({


      libelle: ['', Validators.required],








    });



    this.updateForm = this.fb.group({



      libelle: ['', Validators.required],




    });



  }











  ngOnInit(): void {



     this.tps$ = this.tpService.getTps();

    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));
    // this.tpService.refreshNeeded$.subscribe(res=>{
    //   this.onSubmit();
    // });



  }





  onSubmit() {

    const formValues = this.modalForm.value;



    const contact: Tps = {

      id:formValues.id,
      libelle: formValues.libelle,




    };



    this.tpService.addTps(contact).subscribe({

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

    this.tpService.deleteTps(id)

      .subscribe(() => {

        this.tps = this.tps.filter(a => a.id !== id);

      });

  }

  onUpdate(){



    this.tpService.updateTps(this.typeToUpdate).subscribe(result => {

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



  edit(Tps :any){

      this.typeToUpdate=Tps;

  }
}
