import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  
  aoldal : number = 1;
  boldal : number = 1;
  lista: any[]=[];
  
  EredmenyMentes(){
    var a = this.aoldal;
    var b = this.boldal;

    var eredmenyker = a * 2 + b * 2;
    var eredmenyter = a * b;

    var eredmeny = ("Az " + a + " és " + b + " oldalú teglalap kerülete: " + eredmenyker + ";" + " területe: " + eredmenyter + ".");
    
    this.lista.push({id:this.lista.length, name:eredmeny})
    //console.warn(this.lista);
  }


}