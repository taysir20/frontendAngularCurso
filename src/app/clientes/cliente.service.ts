import { Injectable } from '@angular/core';
/*
Usa el decorador/anotación @Ikectable que comor ecordamos los decoradores
son aquellos que especifican como s ecomprota una clase y cuál es
su función dentro del proyecto.
@Injectable e sapra clase de servio y rerpesenta
lógica de negocio y s epueden inyectar mediante dependencias
a otras clases como por ejemplo  aun component.
la idea es lelvarnos todos los datos aquí
*/

//Vamos a mover el import del clientes.componet.ts de la cte CLIENTES a aquí
import {CLIENTES} from './clientes.json';
//importamos la clase cliente para pdoer designar al getCliente de tipo Cliente
import {Cliente} from './cliente'

//Importamos el API Observable del reactive extensions
import {Observable} from 'rxjs/Observable'
/*
  Impotamos el operador 'of' que nos servirá para transformar la cte
  CLIENTES ne un observable
*/
import {of} from 'rxjs/observable/of'


/*
Lo primero para poder usar la clase HttpClient
es importarla.
Podremos usar esta clase porque en el app.module.ts
habíamos registrado su modulo HttpClientModule
*/
//Importamos la clase HttpHeaders para su uso
import {HttpClient,HttpHeaders} from '@angular/common/http'




@Injectable()
export class ClienteService {
  /*
  Tenemos que definir nuestra url/endpoint el cuál,
  la variable httpClient para a usar para llamar al api
  */
  private urlEndPoint: string;
  private httpHeaders:HttpHeaders;
/*
Ahora hay que inyectar la dependencia de la clase HttpClient
mediante el constructor, quedaría además como una variable
de la clase
*/
  constructor(private httpClient: HttpClient) {
    this.urlEndPoint = 'http://localhost:8080/api/clientes';
    /*
    El httpHeaders recibe como parámetro de constructor
    el tipo de content-type es decir el tipo de contenido
    de cabecera que será en formato json
    */

    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
   }

  /*
  Vamos a crear un método que nos devuleva la cte CLIENTES.
  Por lo tanto nos devovlerá un array y d ebe de ser del tipo Cliente
  Como tenemos importada la cte CLIENTES entonces podemos hacer return
  directamente de ella
  */
  public getClientes():Observable<Cliente[]>{
    /*
      El retorno de cliente por tanto tiene que ser un stream es decir
      un observable(stream/flujo de datos) de CLIENTES.
      Para transformar CLIENTES en un observable usamos el operador 'of'
      que hemos importado
    */
  //  return of(CLIENTES);
  /*
  Tenemos que llamar a los atributos de la clase con "this"
  Nos retorna un observable de tipo 'any' y hay que castearlo
  al tipo Clientes (get seguido del tipo de dato)
  */
  return this.httpClient.get<Cliente[]>(this.urlEndPoint);
  }

  /*
  Método para persistir el objeto cliente en la bbdd enviandoselo
  por petición post al api-rest.
  Cuando s ehace un post tenemos que apsar pro parámetros el objecto cliente,
  la urlEndPoint para saber a que método tieneque ir. El endPoint será el mismo
  que para el get de la lista d eclinetes pero como es post sabrá a que método tiene
  que ir. Por último, hay que enviar las cabeceras http con el content types
  para que sepa que el objeto cliente se envía en formato json.
  */

  public save(cliente:Cliente):Observable<Cliente>{
    /*
      Para enviar por parámetro la cabecera se hacen como un objeto con el atributo
      headers.
      Si recordamos el método save del api rest devuelve un el clinete que hemos guardado
    */
    return this.httpClient.post<Cliente>(this.urlEndPoint,cliente,{headers:this.httpHeaders});
  }

/*
  Método que realiza la petición a la api para que nos devuelva el cliente con la
  id que recibimos como parámetro
*/
    public getCliente(id:number):Observable<Cliente>{
      /*
        Como podemos ver usamos el string de interpolación para
        poder concatenar la url con la id para llamar al método mapeado
        con esa url en la api.la sintaxis apra concatenerlo en el string de
        interpolación `` es con el uso de $ para la llamada a los parámetros
        y variables de la clase.
      */
      return this.httpClient.get<Cliente>(`${this.urlEndPoint}/${id}`);
    }
/*
  Método update que envía la petición put a la API de Spring y nos retorna
  el cliente actualizado
*/
    public update(cliente:Cliente):Observable<Cliente>{
      return this.httpClient.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente,{headers: this.httpHeaders});
    }

    /*
    Método queenvía un delete por petición a la api de Spring
    para borrar un cliente. No retorna nada.
    */

    public delete(id:number):Observable<Cliente>{
      /*
      Recordamos que todo lo que se pasa con interpolación de string ``
      tiene que ir con $ ya sea parámetro del método o variable global
      de la clase
      */
      return this.httpClient.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders});
    }
}
