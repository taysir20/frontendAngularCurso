import { Component, OnInit } from '@angular/core';
//Importamos la clase cliente par apoder crear el array de tipo Cliente
import {Cliente} from './cliente';

//Importamos el la clase cliente service para poder inyectarlo
import {ClienteService} from './cliente.service'
//Importamos el sweet2alert
import swal from 'sweetalert2'


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
  //Elinado del cliente
  public delete(cliente:Cliente):void{
    /*
    Si recordamos, en el formController como Tenemos
    mapeado el objeto cliente entonces podemos coger directamente
    la id del cliente, pero en el clienteComponent no tenemos al cliente
    mapeado y tendrá que recibir por parámetro al cliente
    para poder sacar su id.
    */
    swal({
  title: '¿Estás seguro de que deseas elimnar a este Cliente?',
  text: `Si eliminas al cliente ${cliente.nombre} no podrás recuperarlo.`,
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: '¡Si, eliminar!',
  cancelButtonText: '¡No, cancelar!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: false,
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    /*
    Si presionan sobre el botón de confirmar entonces
    se borra el cliente
    */
    this.clienteService.delete(cliente.id).subscribe(
      response => {
        /*
        Vamos a quitar al cliente que acabamos de eliminar de la lista
        mediante fitler()
        Preguntamos pásandole por argumento cada cliente. Se va a recorrer
        cada cliente y prguntando que si ese cliente es igual al cliente
        que hemos eliminado entonces que se quite de la lista
        */
        //Seteamos a la lista de clientes la lsita sin el cliente borrado
        this.clientes = this.clientes.filter(cli=> cli !==cliente);
        swal('¡Cliente eliminado!', '¡Cliente eliminado con éxito!', 'success')
      }


    )
    swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
  }



}
