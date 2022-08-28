import { Component } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    {
      ruta: './graficas/barras',
      texto: 'Barras'
    },
    {
      ruta: './graficas/barras-dobles',
      texto: 'Barras dobles'
    },
    {
      ruta: './graficas/dona',
      texto: 'Dona'
    },
    {
      ruta: './graficas/dona-http',
      texto: 'Dona HTTP'
    }
  ]

}