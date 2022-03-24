import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  nombreLower: string ='nacho'
  nombreUpper: string ='nacho'
  nombreCompleto: string ='naCho dOmIngUez'



  fecha: Date =new Date();

  ngOnInit(): void {
  }

}
