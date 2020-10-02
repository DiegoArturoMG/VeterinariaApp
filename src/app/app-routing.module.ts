import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { SeleccionRegistroComponent } from './seleccion-registro/seleccion-registro.component';

const routes: Routes = [
  { path: 'consulta', component: ConsultaComponent },
  { path: 'registro-mascota', component: RegistroComponent },
  { path: 'seleccion-registro', component: SeleccionRegistroComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
