import { Component, OnInit } from '@angular/core';

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


  clientes:string[]=['Maria','Pedro','Juan','Pepe']


  clientesMapa={
    '=0':'No tenemos clientes esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando',


  }
}
