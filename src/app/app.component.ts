import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  showLabel = false;
  titulo = 'Calculadora';
  result='Resultado'
  operandoA: number=0;
  operandoB:number=0;
  resultado:number=0;
  
 
  onSumar(){
    this.showLabel=true;
    this.resultado=this.operandoA+this.operandoB;
  }
}
