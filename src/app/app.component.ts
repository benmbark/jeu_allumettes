import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allumettes';
  lenght : number = 10
  minLen: number= 10
  maxLen: number= 40
  tour : boolean

  constructor(){
    this.tour = Math.random() >= 0.5;
    this.lenght =  Math.floor(Math.random() * (this.maxLen - this.minLen + 1) + this.minLen);
  }

  enlever(number:number){

    if(number <= this.lenght){
      this.lenght = this.lenght - number
      this.tour = !this.tour}
    else{
      alert("Impossible d'effectuer l'operation")
    }

  }
 
}
