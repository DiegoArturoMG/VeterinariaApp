import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent implements OnInit {
  usuario_nombre: string;
  usuario_apPaterno: string;
  usuario_apMaterno: string;
  es: any;

  constructor(public conexion: ConexionService) {}

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 0,
      dayNames: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
      ],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      today: 'Hoy',
      clear: 'Limpiar',
      dateFormat: 'dd/mm/yy',
      weekHeader: 'Wk',
    };
  }

  saveUser() {
    let user = {
      usuario_nombre: this.usuario_nombre,
      usuario_apPaterno: this.usuario_apPaterno,
      usuario_apMaterno: this.usuario_apMaterno,
    };
    this.conexion.saveUser(user);
  }
}
