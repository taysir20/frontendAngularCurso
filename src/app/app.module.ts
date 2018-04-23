import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
/*
  Para poder usar el nuevo componenete que hemos creado HeaderComponent
  tenemos que registrarlo en el app.module.ts. Podremos hacerlo gracias
  a que hemos exprotado la clase que la renderiza.
  usaremos import
*/
import {HeaderComponent} from './header/header.component'
//Agregamos el componente footer
import {FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component'
//Importamos el cliente Service
import {ClienteService} from './clientes/cliente.service';

//Importamos el modulo RouterModule y la clase Routes de Angular
import {RouterModule, Routes} from '@angular/router'

/*
Impotamos el odulo HttpCliente para poder counicarnos con nuestro
servidor remoto de Spring
*/
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component'

//Importamos el FormsModule
import {FormsModule} from '@angular/forms'

/*
  Creamos una cte de tipo Routes que contenga la srutas a las que
  se mapean los componentes de nuestros proyecto
*/
const routes: Routes = [
  /*
  Agregamos a la ruta principal del proyecto es decir localhost:4200
  que redirija a la págnia principal /clientes y que haga un match
  del proyecto mediante full. De esta forma la especificar full
  decimos que una a todo el proyecto a esta ruta principal
  */
  {path:'' ,redirectTo:'/clientes', pathMatch: 'full'},
  /*
  Mapeamos con la ruta que queramos (el nombre lo escogemos nosotros)
  un componente
  */
  {path:'directivas' ,component:DirectivaComponent},
  {path:'clientes' ,component:ClientesComponent},
  {path:'clientes/form' ,component:FormComponent},
  {path:'clientes/form/:id' ,component:FormComponent}
];


@NgModule({
  declarations: [
    /*
      En declarations añadimos el nombre del componenets.
      En esta variable de tipo array se guardan tdoos los componentes
      que queremos registrar en nuestro contenedor app.module
    */
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,

    /*
    Regisramos el modulo importado HttpClientModule.
    Como no e sun componente que hayamos creado se coloca en
    el atributo imports
    */
    HttpClientModule,
    /*
      Hay que registrar las rutas de la cte routes
      en el import para que estén registradas. Se registran usando
      el método de la clase RouterModule
      que habíamos importado arriba.
    */
    RouterModule.forRoot(routes),
    //Agregamos el FormsModule
    FormsModule


  ],
  //Añadimos el Service en el providers
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
