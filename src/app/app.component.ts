import { Component } from '@angular/core';
import { configuracion } from './models/configuracin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']



})



export class AppComponent {
  public title = 'Master en Angular';
public descripcion: string;
  public mostaraVideojuego: boolean = true;
  public fondo_color:string ='';
  public letra_color:string='';

  constructor() {
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.fondo_color = configuracion.fondo;
    this.letra_color = configuracion.color;

  }

  ocultarVideojuego(value: boolean) {
    this.mostaraVideojuego = value;
  }
}
