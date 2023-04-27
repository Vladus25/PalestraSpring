import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.css']
})
export class CorsiComponent {
  constructor(private rest:ServiceService){}
corsi:any;

ngOnInit(){
  this.getCorsi();
}

getCorsi(){
  const onSuccess = (response:any) => this.corsi=response;
  return this.rest.getCorsi().subscribe(onSuccess);
}
}
