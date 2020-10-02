import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';

import { InputTextModule } from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from './header/header.component';
import { SeleccionRegistroComponent } from './seleccion-registro/seleccion-registro.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { ConsultaTablaComponent } from './consulta-tabla/consulta-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    HomeComponent,
    RegistroComponent,
    HeaderComponent,
    SeleccionRegistroComponent,
    RegistroUsuarioComponent,
    ConsultaTablaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    NgbModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
