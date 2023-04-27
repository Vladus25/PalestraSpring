import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-seguiti',
  templateUrl: './seguiti.component.html',
  styleUrls: ['./seguiti.component.css']
})
export class SeguitiComponent {
  corsi: any;
  id:any;
  constructor(private route: ActivatedRoute, private rest: ServiceService) { }

  ngOnInit() {

      this.id = this.route.snapshot.paramMap.get('id');
      this.rest.getSeguiti(this.id).subscribe(corsi => {
      this.corsi = corsi;
    })
  }
}
