import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CorsiComponent } from './components/corsi/corsi.component';
import { PersoneComponent } from './components/persone/persone.component';
import { AbbonamentiComponent } from './components/abbonamenti/abbonamenti.component';
import { SeguitiComponent } from './components/seguiti/seguiti.component';

const routes: Routes = [
  {path:'Persone', component:PersoneComponent},
  {path:'Corsi', component:CorsiComponent},
  {path:'Abbonamenti', component:AbbonamentiComponent},
  {path:'Persone/Seguiti/:id', component:SeguitiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
