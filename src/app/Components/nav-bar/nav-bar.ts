import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'nav-bar',
    imports: [NgClass],
    templateUrl: './nav-bar.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavBar {

    @Input({ required: true }) currentPage!: number;

    readonly listPages = signal<string[]>(["Home", "Servizi", "Tecnici", "Contatti"])
}
