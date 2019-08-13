import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullcrud',
  templateUrl: './fullcrud.component.html',
  styleUrls: ['./fullcrud.component.css']
})
export class FullcrudComponent implements OnInit {
titulo = '';
descripcion = '';
descripcionCorta = '';
linkDemo = '';
linkGithub = '';
imagen1 = '';
imagen2 = '';
imagen3 = '';
  constructor() { }

  ngOnInit() {
    this.titulo = 'Titulo';
    this.descripcion = 'Descripcion';
    this.descripcionCorta = 'Descripción Corta';

  }

}
