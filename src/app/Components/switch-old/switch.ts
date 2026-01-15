import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'switch',
  imports: [NgClass],
  templateUrl: './switch.html',
  styleUrl: "./switch.css"
})
export class Switch {
    isActive = signal<boolean>(false)
}
