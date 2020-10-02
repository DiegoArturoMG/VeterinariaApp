import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-tabla',
  templateUrl: './consulta-tabla.component.html',
  styleUrls: ['./consulta-tabla.component.css'],
})
export class ConsultaTablaComponent implements OnInit {
  mascotasList: any;

  constructor() {}

  ngOnInit(): void {
    this.mascotasList = [
      {
        code: 'CODE',
        name: 'NAME',
        category: 'CATEGORY',
        quantity: 'QUANTITY',
      },
    ];
  }
}
