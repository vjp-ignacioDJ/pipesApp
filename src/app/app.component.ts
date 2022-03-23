import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

 nombre: string='nachoDh'
 valor:number=1000000


 obj={
   nombre: 'Nacho'
 }
 mostrarNombre(){
   console.log(this.nombre);


 }
}
