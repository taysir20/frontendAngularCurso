import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})

/*
Implementa la interfaz onInit para manejar el ciclode vida
(el evento cuando se
inicializa el componete)
No l vamos a usar asi que quitamos el imlpements
*/
export class DirectivaComponent{
//Vamos a crear un atributo array
//Este array es como un array en js no se dimensionan. Son el equivalente al arrayList
public listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
/*
Creamos una variable de tipo boolean para mostrar o no la lista dependiendo
de que sea falso o verdadero.
*/
public habilitar: boolean;
  constructor() {
    this.habilitar=true;
  }

  public setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false: true;  
  }



}
