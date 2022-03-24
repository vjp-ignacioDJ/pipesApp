import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string='Nacha'
  genero: string='femenino'

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':  'invitarla'
  }


  clientes:string[]=['Maria','Pedro','Juan','Pepe','Darío']


  clientesMapa={
    '=0':'No tenemos clientes esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando',


  }

  cambiarCliente(){
     if(this.genero==='femenino'){
       this.nombre='Nacho'
       this.genero='masculino'
     } else{
      this.nombre='María'
      this.genero='femenino'
     }
  }

  borrarCliente(){
    this.clientes.pop()
  }


  ///keyValuePipe
  persona={
    nombre:'Fernando',
    edad:35,
    direccion: 'Ottawa, Cánada'
  }


  //jsonpipe

  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Spiderman',
      vuela:false
    },
    {
      nombre:'Batman',
      vuela:false
    }
  ]



//Async type


miObservable=interval(1000);

valorPromesa=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Tenemos data de promesa')
  },3500)
})

}
