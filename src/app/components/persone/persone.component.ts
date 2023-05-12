import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-persone',
  templateUrl: './persone.component.html',
  styleUrls: ['./persone.component.css']
})
export class PersoneComponent {
  persone:any;

  constructor(private rest : ServiceService){}

  ngOnInit(){
    this.getPersone();
  }

  getPersone(){
    const onSuccess= (response:any)=>this.persone = response;
    return this.rest.getPersone().subscribe(onSuccess);
  }
}
