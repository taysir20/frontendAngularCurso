import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
La clase AppComponent es propia  de Angular y debe de llevar es te nombre
Esta clase contiene las variables que queremos llamar desde el template de
app.component, concretamente se llama mediante {nombre de la variable} en el
app.componet.html y se carga en el template. Después con la etiqeuta que
está desginada para el app.componet llamada 'app-root' se llama al template
app.component.html en el index.html
*/
export class AppComponent {
  /*
  Si nos fijamos podemos especificar el tipo de variable o no. Angular la detecta
  solo porque recordamos que es un framework de JavaScript, podemos añadir el "," al final
  o no.
  */

  title = 'Bienvenido a Angular';
  curso: string = "Aungular con Spring 5";
  alumno: string = "Andrés Guzmán";
}
