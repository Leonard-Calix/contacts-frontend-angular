import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  conteo: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
    this.conteo ++;

    this.alertar100();
    
  }

  restar(){

    this.alerta0();

    this.conteo--;
  }

  aumentar(){
    this.conteo = this.conteo + 10;

    this.alertar100();
    
  }

  alertar100(){
    if(this.conteo > 100){
      alert("Ya basta");
    }
  }

  alerta0(){
    if (this.conteo <=0){
      alert("Ya no se puede restar");
      return;
    }
  }

}
