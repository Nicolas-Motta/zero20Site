import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
     selector: 'app-intro',
     imports: [],
     templateUrl: './intro.html',
     styleUrl: './intro.css',
})
export class Intro implements OnInit {
     private router = inject(Router);
     private platformId = inject(PLATFORM_ID);

     ngOnInit(): void {
          if (!isPlatformBrowser(this.platformId)) return;

          const introShown = sessionStorage.getItem('introShow');
          if (introShown) {
               this.router.navigate(['/home']);
               return;
          }

          sessionStorage.setItem('introShow', 'true');
          setTimeout(() => this.router.navigate(['/home']), 4000);
     }
}
