import { isPlatformBrowser } from '@angular/common';
import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { get } from 'http';

@Injectable({
    providedIn: 'root',
})
export class DarkService {


    private isDark = signal<boolean>(false) 
    public get isDarkMode() {
        return this.isDark();
    }

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.initTheme();
    }

    toggleDarkMode() {
        this.isDark.set(!this.isDark())
        this.applyDarkMode();
    }

    private applyDarkMode() {
        if (isPlatformBrowser(this.platformId)) {
            const HTMLElement = document.documentElement;

            if (this.isDark()) {
                HTMLElement.classList.add("dark");
            } else {
                HTMLElement.classList.remove("dark");
            }
        }
    }

    private initTheme() {
        if (isPlatformBrowser(this.platformId)) {
            this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
            //// Debug
            ////console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)
        }

        this.applyDarkMode();
    }
}
