import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeng


import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports:[
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
