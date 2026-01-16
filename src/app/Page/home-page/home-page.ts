import { Component, ElementRef, viewChildren } from '@angular/core';
import { Box } from './Components/box/box'
import { NavBar } from '../../Components/nav-bar/nav-bar';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'home-page',
  imports: [NavBar, Box, Footer],
  templateUrl: './home-page.html'
})
export class HomePage {
}
