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
        this.linkDemo = 'https://naughty-dubinsky-279fc0.netlify.com';
        this.linkGithub = 'https://github.com/AndersonJz/proyectos/tree/master/criptomonedas';
        this.imagen1 = './assets/img/theme/cripto.png';
        this.imagen2 = '';
        this.imagen3 = '';
        break;
      case 'eventos':
      this.titulo = 'Buscador de Eventos';
      this.descripcionCorta = 'Busca eventos segun los criterios que escoja el usuario.';
      this.descripcion = 'En este proyecto construido en React JS, el usuario puede escoger una categoría y un criterio como una ciudad ' +
      'o un tema de interes, esta app consume datos de un API llamada EventBrite, y para este caso se utiliza una libreria ' +
      'llamada Context en la cual se reciben los datos y estos quedas disponibles para cualqier componente que se encierre dentro de ' +
      'este, Context viene a sustituir a los comúnes "props" de React JS...';
      this.linkDemo = 'https://gracious-heyrovsky-d05971.netlify.com/';
      this.linkGithub = 'https://github.com/AndersonJz/proyectos/tree/master/eventosreact';
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
      case 'restaurante':
      this.titulo = 'App Restaurante';
      this.descripcionCorta = 'Aplicacion para gestionar los platillos que se sirven en un restaurante';
      this.descripcion = 'Este proyecto es uno de mis favoritos, pues aunque no tiene muchas funcionalidades, ' +
      'es una aplicación diseñada en el stack MERN (MongoDB, Express, React JS, Node Js), por lo que en ella te muestro ' +
      'mis habilidades tanto en Back-end, creando un API rest que se conecta a MongoDB y que responde ' +
      'datos en formato JSON, asi como Front-end, consumiendo los datos mencionados anteriormente y organizandolos ' +
      'de una forma amigable para el usuario, asi como el uso de las rutas proporcionadas por el API... ' +
      'Proximamente con login y gestión de imagenes :)';
      this.linkDemo = 'https://kind-wozniak-26bab1.netlify.com';
      this.linkGithub = 'https://github.com/AndersonJz/proyectos/tree/master/mern';
      this.imagen1 = './assets/img/theme/mern1.png';
      this.imagen2 = './assets/img/theme/mern2.png';
      this.imagen3 = './assets/img/theme/mern3.png';
      break;
      case 'buscadorletras':
      this.titulo = 'Buscador de letras de Canciones';
      this.descripcionCorta = 'Aplicacion para buscar letras de canciones por Artista';
      this.descripcion = 'Lo interesante de esta aplicación es la utilización de dos APIs simultaneas, ' +
      'una para buscar la letra de la cancion que el usuario requiera, y ' +
      'otra que toma información de la consulta para buscar información del artista en cuestión... ' +
      'Estas APIs trabajan con mucha informacion por lo que puede tardar un par de segundos en responderte';
      this.linkDemo = 'https://heuristic-poitras-abc5ff.netlify.com';
      this.linkGithub = 'https://github.com/AndersonJz/proyectos/tree/master/buscadorletras';
      this.imagen1 = './assets/img/theme/letras.png';
      this.imagen2 = './assets/img/theme/letras2.png';
      this.imagen3 = './assets/img/theme/letras3.png';
      break;

    }


  }

}
