import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pov } from 'src/app/_core/interfaces/Pov';
import { PovService } from 'src/app/_core/services/pov/pov.service';

@Component({
  selector: 'app-pov',
  templateUrl: './pov.component.html',
  styleUrls: ['./pov.component.scss']
})
export class PovComponent {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  povs$! :Observable<Pov[]>;

  povs!: Pov[];

  // appliance$! :Observable<Appliance[]>;

  pov!:Pov;

  modalForm: FormGroup;

  updateForm: FormGroup;


  povToUpdate ={

    id:1,
    dateDebut:'',
    dateFin:'',
    description:'',
    compteManager:'',
    ingenieurCybersecurite:'',
    analystCybersecurite:'',
    libellePov:'',
  }





  constructor(private povService:PovService,private fb :FormBuilder){

    this.modalForm = this.fb.group({


      dateDebut: ['', Validators.required],
      dateFin: [''],
      description: [''],
      compteManager: [''],
      ingenieurCybersecurite: [''],
      analystCybersecurite: [''],
      libellePov: [''],
    });

    this.updateForm = this.fb.group({
      dateDebut: ['', Validators.required],
      dateFin: [''],
      description: [''],
      compteManager: [''],
      ingenieurCybersecurite: [''],
      analystCybersecurite: [''],
      libellePov: [''],



    });



  }











  ngOnInit(): void {



     this.povs$ = this.povService.getPovs();

    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));


  }



  onSubmit() {

    const formValues = this.modalForm.value;



    const pov: Pov = {

      id:formValues.id,
      dateDebut: formValues.dateDebut,
      dateFin: formValues.dateFin,
      description: formValues.description,
      compteManager: formValues.compteManager,
      ingenieurCybersecurite: formValues.ingenieurCybersecurite,
      analystCybersecurite: formValues.analystCybersecurite,
      libellePov: formValues.libellePov,

    };



    this.povService.addPov(pov).subscribe({

      next: (newPov) => {

        console.log(`New pov created: ${newPov}`);

      },

      error: (err) => {

        console.log(`Error creating pov: ${err}`);

      }

    });



  }

  // }



  deletePov(id: number): void {

    this.povService.deletePov(id)

      .subscribe(() => {

        this.povs = this.povs.filter(a => a.id !== id);

      });

  }

  onUpdate(){



    this.povService.updatePov(this.povToUpdate).subscribe(result => {

      console.log('Appliance updated:', result);

    });

  }







  edit(pov :any){

      this.povToUpdate=pov;

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
