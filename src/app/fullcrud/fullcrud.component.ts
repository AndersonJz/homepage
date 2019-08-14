import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
imagen4 = '';
imagen5 = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    switch (params.nombre) {
      case 'cripto':
        this.titulo = 'Cotización de Criptomonedas';
        this.descripcionCorta = 'Compara monedas locales con las principales criptomonedas para ver su comportamiento.';
        this.descripcion = 'Éste proyecto es sencillo pero interesante, puesto que se consulta un API para los elementos que se ' +
        'muestran en los selectores y una vez que el usuario escoge las opciones, las convierte en variables que serán ' +
        'enviadas de nuevo a otra instancia del API y de esta forma hacer la consulta con las monedas deseadas...';
        this.linkDemo = 'asd';
        this.linkGithub = 'asd';
        this.imagen1 = './assets/img/theme/cripto.png';
        this.imagen2 = '';
        this.imagen3 = '';
        break;
      case 'eventos':
      this.titulo = 'Buscador de Eventos';
      this.descripcionCorta = 'Busca eventos segun los criterios que escoja el usuario.';
      this.descripcion = 'En este proyecto construido en React JS, el usuario puede escoger una categoría y un criterio como una ciudada ' +
      'o un tema de interes, esta app consume datos de un API llamada EventBrite, y para este caso se utiliza una libreria ' +
      'llamada Context en la cual se reciben los datos y estos quedas disponibles para cualqier componente que se encierre dentro de ' +
      'este, Context viene a sustituir a los comúnes "props" de React JS...';
      this.linkDemo = 'asd';
      this.linkGithub = 'asd';
      this.imagen1 = './assets/img/theme/eventos1.png';
      this.imagen2 = './assets/img/theme/eventos.png';
      this.imagen3 = './assets/img/theme/eventos2.png';
      break;
      case 'domicilios':
      this.titulo = 'Aplicación de Domicilios';
      this.descripcionCorta = 'Web para administracion de una app de domicilios.';
      this.descripcion = 'Este proyecto es una aplicación desarrollada en el Stack MEAN (MySQL, Express, Node, Angular 7), ' +
      'esta aplicación permite a los empleados de una empresa hacer inventario, facturacion, gestion de empleados, tener acceso ' +
      'seguro segun su rol a las funcionalidades del sistema, además de gestionar los pedidos de los usuarios en tiempo real ' +
      'con el uso de sockets, todo esto consumiendo datos de un API rest que construí en Node JS. Al ser este sistema propiedad ' +
      'de una empresa, evidentemente no puedo dejarte los links ni al producto ni al codigo...';
      this.imagen1 = './assets/img/theme/remyproductos.png';
      this.imagen2 = './assets/img/theme/remyfacturacion.png';
      this.imagen3 = './assets/img/theme/remyperfil.png';
      this.imagen4 = './assets/img/theme/remyservicios.png';
      this.imagen5 = './assets/img/theme/remyunservicio.png';
      break;

    }


  }

}
