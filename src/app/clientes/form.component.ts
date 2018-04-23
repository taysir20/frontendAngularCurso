import { Component, OnInit } from '@angular/core';
//importamos el cliente para poder usarlo:
import {Cliente} from './cliente'

//importamos el clienteService
import{ClienteService} from './cliente.service'

//importamos el Router
import {Router, ActivatedRoute} from '@angular/router'

/*
importamos el sweetalert2. Como es una
dependencia externa que hemos isntalado entonces va sin las {}
*/
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  /*
  La directiva ngModel del formulario va a poblar los atributos del objeto
  cliente automaticamente
  */
  public titulo: string;
  private cliente: Cliente;

//Inyectamos la dependencia del ClienteService mediante el constructor
  constructor(private clienteService:ClienteService, private router:Router, private activatedRoute: ActivatedRoute) {
      this.titulo = "Formulario Cliente";
    this.cliente = new Cliente();

  }

  ngOnInit() {
    this.cargarCliente();
  }

  public create():void{
  /*
    Si nos acordamos hay que subscribir al cliente como observable
    para que si se sufren cambiar en el lado del backend se actualicen sin
    regargar automaticamente
  */
    this.clienteService.save(this.cliente).subscribe(
      /*
        Una vez enviado el objeto cliente como un json se nos
        retorna una respuesta que es el objeto actualizado de tipo json.
        La idea es que cuando se haya guardado el cliente en la bbdd y nos
        retorne la respuesta con ese cliente actualizado, entonces
        redirijamos al componente principal donde s elistan todos los
        clientes.
        Para ello tenemos que usar la directiva router que tendremos que
        importar e inyectar como atributo de la clase por el constructor

      */
      //puede ser response o el nombre qeu queramos.
      /*response recordamos que es el parámetro que le llega  a la función
      anónima, por tanto si queremos añadir más líneas a la función, entonces
      añadimos las {}
      */
      response => {
        this.router.navigate(['/clientes'])
        /*
          Creamos el alert.
          concatenamos el string "Cliente" con el parámetro response que es
          el objeto cliente mediante `` y especificamos el tipo de alert
          que es de success.
        */

        swal("Nuevo Cliente", `Cliente ${response.nombre} creado con éxito`,'success');
    }


    )
  }
  /*
    Método que setea los valores de la respuesta(ESTA RESPUESTA ES EL OBJETO CLIENTE)
    Desde aquí se llama al método getCliente pasándole la id que obtenemos de la
    ruta. Para obtener el id usaremos la clase ActivatedRouter que nos devuelve la ruta
    activa en ese momento y por tanto será la que vamos a añadir al app.module.ts
    para que al momento de pinchar sobre ella entonces se ponga como activa y recojamos
    el id.

  */
  public cargarCliente():void{
    /*
      Subscribimos los parámetros del ActivatedRoute
      a cambios para que est econstantemente observando si cambia
      el valor de estos aprámetros, concretamente el de la id
      del cliente.
      Como vamos a añadir una route en el app.module.ts que
      presenta el id entonces recibimos este id en la función
      anónima que recibe el parámetro "params".
      Una vez sacada la id del parámetro "params" comprobamos
      si existe esta id y si existe entonces llamamos al service
      que se encarga d epedir el cliente a la api mediante la id.
      Este método getCliente también lo subscribimos para
      que en todo momento observe los posibles cambios del cliente
      que nos traemos desde el api dado que si cambian sus datos
      entonces se vuelven a actualizar en el cliente de forma automatica.
      Como hemos dicho el método del api que devuelve el cliente lo recibimos
      en la función anónima como un parámetro y se lo seteamos a nuestro
      objeto cliente que al estar mapeado con el formulario, entonces
      mostrará los campso rellenos con sus atributos.
    */
    this.activatedRoute.params.subscribe(
      params=>{
        let id = params['id'];
        if(id){
            this.clienteService.getCliente(id).subscribe(
              cliente=>{
                this.cliente=cliente;
              }
            )
        }
      }

    )

  }

}
