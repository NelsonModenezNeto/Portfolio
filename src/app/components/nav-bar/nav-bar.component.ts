import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent {
  name: string = 'Neto';
  numero: number = 0;

  netos = [
    {bola: 'Bola', tipo: 'Superior'},
    {bola: 'Júnior', tipo: 'Grau1'},
    {bola: 'Neto', tipo: 'Grau1'}
    
  ]

  acrescentar(){
    this.numero++;
  }

}
