import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  mascota_id: any;
  mascota_nombre: any;
  mascota_raza: any;
  razas: any[];

  constructor() {}

  ngOnInit() {
    this.razas = [{ name: 'Boxer' }, { name: 'Chihuhua' }];
  }
}
