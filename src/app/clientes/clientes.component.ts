import { Component, OnInit } from '@angular/core';
//Importamos la clase cliente par apoder crear el array de tipo Cliente
import {Cliente} from './cliente';

//Importamos el la clase cliente service para poder inyectarlo
import {ClienteService} from './cliente.service'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit{
  clientes: Cliente[];

  /*
    Para realizar una inyección de dependencias podemos definir
    un atributo de la clase o directamente inyectarlo en el constructor
    del componente como argumento.
    Vamos a darle private dado que solo lo vamos a ver desde eta clase.

  */
  constructor(private clienteService:ClienteService) {
  }
//Vamos a usar el método onInit que se ejecuta cuando se inica el componente
  ngOnInit(){
  //Suscribimos la lista de clientes como observables
  this.clienteService.getClientes().subscribe(
  /*
    La idea es añadir aquí el atributo clientes para que reciba todos
    los cambios de la lista de clientes dado que están siendo observadas a
    posibles cambios pues nos hemos suscrito a que sea observable.
  */
  /*
    Clientes sería nuestro argumento, es decir el resultado del stream/flujo
    de datos. y se lo asignamos a la variable clientes con la siguiente
    sintáxis de función anónimo '=>'
    Podríamos haber hecho con otra sintaxis de función anónima:
    fuction (clientes){
        clientes =>this.clientes=clientes
  }
  */
  /*
    De esta forma se puedne omitir las llaves si solo tenemos una línea
    de código y además, se puedne omitir los paréntesis () si solo tenemos
    un parámetro que recibimos.
  */
    (clientes) =>{
      this.clientes=clientes
    }



);
  }



}
