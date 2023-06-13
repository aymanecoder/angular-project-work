import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/_core/interfaces/Contact';
import { ContactService } from 'src/app/_core/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  isList: number = 0;

  isMenu: boolean = false;

  isSearch: boolean = false;

  contacts$! :Observable<Contact[]>;

  contacts!: Contact[];

  // appliance$! :Observable<Appliance[]>;

  contact!:Contact;

  modalForm: FormGroup;

  updateForm: FormGroup;

  contactToUpdate ={

    id:1,
    email:'',
    nom:'',
    prenom:'',
    telephone:'',
    fonction:'',






  }





  constructor(private contactService:ContactService,private fb :FormBuilder){

    this.modalForm = this.fb.group({


      email: ['', Validators.required],
      nom: [''],
      prenom: [''],
      telephone: [''],
      fonction:[''],







    });



    this.updateForm = this.fb.group({



      email: ['', Validators.required],
      nom: [''],
      prenom: [''],
      telephone: [''],
      fonction:[''],




    });



  }











  ngOnInit(): void {



     this.contacts$ = this.contactService.getContacts();

    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));



  }





  onSubmit() {

    const formValues = this.modalForm.value;



    const contact: Contact = {

      id:formValues.id,
      nom: formValues.nom,
      email: formValues.email,
      prenom: formValues.prenom,
      telephone:formValues.telephone,
      fonction: formValues.fonction,



    };



    this.contactService.addContact(contact).subscribe({

      next: (newContact) => {

        console.log(`New contact created: ${newContact}`);

      },

      error: (err) => {

        console.log(`Error creating contact: ${err}`);

      }

    });



  }

  // }



  deleteContact(id: number): void {

    this.contactService.deleteContact(id)

      .subscribe(() => {

        this.contacts = this.contacts.filter(a => a.id !== id);

      });

  }

  onUpdate(){



    this.contactService.updateContact(this.contactToUpdate).subscribe(result => {

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



  edit(contact :any){

      this.contactToUpdate=contact;

  }


}
