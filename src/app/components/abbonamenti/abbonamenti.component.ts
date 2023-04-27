import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-abbonamenti',
  templateUrl: './abbonamenti.component.html',
  styleUrls: ['./abbonamenti.component.css']
})
export class AbbonamentiComponent {
  constructor(private rest:ServiceService){}
  abbonamenti:any;

  ngOnInit(){
    const onSuccess = (response:any)=>this.abbonamenti = response;
    return this.rest.getAbbonamenti().subscribe(onSuccess);
  }

  isScaduto(data_fine: string): boolean {
    const dataFineAbbonamento = new Date(data_fine);
    const oggi = new Date();
    return dataFineAbbonamento < oggi;
  }
}
