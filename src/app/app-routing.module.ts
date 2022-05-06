import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { DatosComponent } from './componente/datos/datos.component';
import { LeyComponent } from './componente/ley/ley.component';
import {UneteComponent} from './componente/unete/unete.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path:'inicio',component:InicioComponent},
  {path:'datos',component:DatosComponent},
  {path:'ley',component:LeyComponent},
  {path:'unete',component:UneteComponent}
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
