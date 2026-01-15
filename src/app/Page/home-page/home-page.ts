import { Component } from '@angular/core';
import { Box } from './Components/box/box'
import { NavBar } from '../../Components/nav-bar/nav-bar';

@Component({
  selector: 'home-page',
  imports: [NavBar, Box],
  templateUrl: './home-page.html'
})
export class HomePage {
  
}
