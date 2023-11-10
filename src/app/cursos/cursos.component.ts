import { Component } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  
  public title: string = 'Cursos de Programación';
  public listado: string = 'Listado de Cursos';

}
