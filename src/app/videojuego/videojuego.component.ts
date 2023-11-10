
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl:  './videojuego.component.html',
  // styleUrls: ['./videojuego.component.css']



})


export class VideojuegoComponent  implements OnInit, DoCheck {
  public title: string;
  public listado: string;
  constructor() {
    this.title = 'Componente de Videojuego';
    this.listado = 'Listado de videojuegos';
    console.log('Componente de videojuego cargado');

  }
  ngOnInit() {
    console.log('onInit de videojuego cargado');
    //temporizador de 5 segundos

  }

  ngDoCheck() {
    console.log('DoCheck de videojuego cargado');

  }
  ngOnDestroy(){
    console.log('OnDestroy de videojuego cargado');
  }
  cambiuarTitulo(){
    this.title = 'Nuevo titulo de videojuego';
    
  }
}
