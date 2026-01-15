import { Component, inject, signal } from '@angular/core';
import { DarkService } from '../../Service/dark-service';

@Component({
  selector: 'switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch { 
    isDark = inject(DarkService);

    trigger() {
        this.isDark.toggleDarkMode()
    }

}
