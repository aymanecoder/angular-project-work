import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from 'src/app/_core/interfaces/clients';
import { ClientService } from 'src/app/_core/services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  clients$! :Observable<Client[]>;
  clients!: Client[];
  // appliance$! :Observable<Appliance[]>;
  client!:Client;
  modalForm: FormGroup;
  updateForm: FormGroup;
  clientToUpdate ={
    id:1,
    libelle:'',
    secteur:'',
    activite:''

  }


  constructor(private clientService:ClientService,private fb :FormBuilder){
    this.modalForm = this.fb.group({
      libelle: ['', Validators.required],
      secteur: ['', Validators.required],
      activite: ['', Validators.required],


    });

    this.updateForm = this.fb.group({
      libelle: ['', Validators.required],
      secteur: ['', Validators.required],
      activite: ['', Validators.required],

    });

  }





  ngOnInit(): void {

     this.clients$ = this.clientService.getClients();
    //  this.listAppliance.getAppliances().subscribe(res=>console.log(res));

  }


  onSubmit() {
    const formValues = this.modalForm.value;

    const client: Client = {
      id:formValues.id,
      libelle: formValues.libelle,
      secteur: formValues.secteur,
      activite: formValues.activite,

    };

    this.clientService.addClient(client).subscribe({
      next: (newAppliance) => {
        console.log(`New appliance created: ${newAppliance}`);
      },
      error: (err) => {
        console.log(`Error creating appliance: ${err}`);
      }
    });

  }
  // }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id)
      .subscribe(() => {
        this.clients = this.clients.filter(a => a.id !== id);
      });
  }
  onUpdate(){

    this.clientService.updateClient(this.clientToUpdate).subscribe(result => {
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

  edit(client :any){
      this.clientToUpdate=client;
  }

}
