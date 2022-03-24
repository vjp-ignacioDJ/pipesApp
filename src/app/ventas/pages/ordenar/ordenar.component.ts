import { Component, OnInit } from '@angular/core';
import { MayusculasPipe } from '../../pipes/mayusculas.pipe';
import { Color, Heroe } from "../../interfaces/ventas.interfaces";
@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  enMayusculas: boolean=true;
  ordenarPor: string=''
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
     nombre: 'Batman',
     vuela: false,
     color: Color.negro
   },
   {
     nombre: 'Robin',
     vuela: false,
     color: Color.verde
   },
   {
     nombre: 'Daredevil',
     vuela: false,
     color: Color.rojo
   },
   {
     nombre: 'Linterna Verde',
     vuela: true,
     color: Color.verde
   }
  ]

  toggleMayus(){
    if(this.enMayusculas){
      this.enMayusculas=false
    }else{
      this.enMayusculas=true
    }
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;


  }



}
