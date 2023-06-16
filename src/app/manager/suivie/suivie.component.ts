import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Suivie } from 'src/app/_core/interfaces/Suivie';
import { SuivieService } from 'src/app/_core/services/suivie/suivie.service';

@Component({
  selector: 'app-suivie',
  templateUrl: './suivie.component.html',
  styleUrls: ['./suivie.component.scss']
})
export class SuivieComponent {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  suivies$! :Observable<Suivie[]>;

  suivies!: Suivie[];

  // appliance$! :Observable<Appliance[]>;

  suivie!:Suivie;

  modalForm: FormGroup;

  updateForm: FormGroup;

  // {
	// 	// id: number,
	// 	// offreCommercial: boolean,
	// 	montant: number,
	// 	compteRendu: string,
	// 	typePrestation: {
  //     id:number,
	// 		libelle: string,
	// 	},
	// 	pov: {
	// 		id: number,
  //     libellePov: string,
  //     description:string,


	// 	}
  suivieToUpdate ={

    id:1,
    offreCommercial:false,
    montant:'',
    compteRendu:'',
    typePrestation:{
      id:1,
      libelle:''
    },
    pov:{
      id:4,
      libellePov:'',

    }

  }





  constructor(private suivieService:SuivieService,private fb :FormBuilder){

    this.modalForm = this.fb.group({


      offreCommercial: [false],
      compteRendu: [''],
      montant: [''],
      typePrestation: [''],
      pov: [''],
    });

    this.updateForm = this.fb.group({
      offreCommercial: [false],
      compteRendu: [''],
      montant: [''],
      typePrestation: [''],
      pov: [''],


    });



  }











  ngOnInit(): void {



     this.suivies$ = this.suivieService.getSuivies();

    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));


  }



  onSubmit() {

    const formValues = this.modalForm.value;



    const suivie: Suivie = {

      id:formValues.id,
      offreCommercial: formValues.offreCommercial,
      montant: formValues.montant,
      compteRendu: formValues.compteRendu,
      typePrestation:{id:2,libelle:formValues.typePrestation},
      pov:{id:4,libellePov:formValues.pov}


    };



    this.suivieService.addSuivie(suivie).subscribe({

      next: (newPov) => {

        console.log(`New Suivie created: ${newPov}`);

      },

      error: (err) => {

        console.log(`Error creating Suivie: ${err}`);

      }

    });



  }

  // }



  deleteSuivie(id: number): void {

    this.suivieService.deleteSuivie(id)

      .subscribe(() => {

        this.suivies = this.suivies.filter(a => a.id !== id);

      });

  }

  onUpdate(){



    this.suivieService.updateSuivie(this.suivieToUpdate).subscribe(result => {

      console.log('Appliance updated:', result);

    });


}
edit(suivie :any){

  this.suivieToUpdate=suivie;

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
