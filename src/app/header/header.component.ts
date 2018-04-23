/*
  Lo primero será crear la clase.
  Usamos "export" que nos permite exportar esta clase para que se
  pueda guardar/registrar en la configuración del modulo, en
  app.Module que es concretamente en el contenedor de angular.
  Por estandar recordamos que al sclases empeizan en mayúscula
*/

//Tenemos que importar la anotación @Component del angular Core
import {Component} from '@angular/Core'
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'



})
export class HeaderComponent{

  /*
Como hemos dicho antes en la clase del componente añadimos las varaibles que
queremos llamar desde el template del header component.
Para llamar usamos lo que se conoce como itnerpolación de string en Angular
--> }{title}}
  */
  title:string= 'App-Angular-Spring'



}
