import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  // styleUrls: ['./zapatillas.component.css']
})


export class ZapatillasComponent implements OnInit {

  public title: string = 'Componente de Zapatillas';
  public listado: string = 'Listado de zapatillas';
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebook clasic', 'Reebook', 'darkred', 20, true),
      new Zapatilla('Adidas', 'Adidas', 'blue', 30, true),
      new Zapatilla('Puma', 'Puma', 'black', 40, true),
      new Zapatilla('Air Jordan', 'Nike', 'red', 50, true),
      new Zapatilla('Fila', 'Fila', 'green', 60, true)
    ]

  }

  ngOnInit(){
    console.log(this.zapatillas);

  }


}

