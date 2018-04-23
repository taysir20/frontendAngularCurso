import {Component} from "@angular/core";
/*
Recordamos añadir la anotación/decorador Component para anotarla como un componente
de angular. Para ello hay que importar el decorador.
*/
@Component({
  /*
  Agregamos el selector y la ruta donde va a ir el template que renderiza este componente
  que vamos a crear
  */
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  //Podemos recibir varias ojas de estilo
  styleUrls: ['./footer.component.css']


})
export class FooterComponent {
/*
Si sacamos paralelismos con Spring, esta clase podría bien ser
el model/map que es visible desde la vista
*/
/*
El tipo de dato any es genérico es decir de cualquier tipo.
Se usa para generar objetos genéricos que no son de ninguna tipo en especial.
Como cualqueir atributo pueden ser public, private, protected,etc.
EN angular por defecto
si no se define es público
*/
  autor:any= {nombre:'Tay', apellido: 'AlShareef'}
}
