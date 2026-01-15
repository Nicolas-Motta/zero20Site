import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './Components/nav-bar/nav-bar';
import { HomePage } from './Page/home-page/home-page';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, HomePage, Footer],
  templateUrl: './app.html'
})
export class App {
  	protected readonly title = signal('zero20site');


}
