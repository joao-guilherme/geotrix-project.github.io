import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';

import EmblaCarousel from 'embla-carousel';

@Component({
  selector: 'geotrix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private deferredPrompt: any;
  public showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(evt: any) {
    console.log(evt);
    evt.preventDefault();

    this.showButton = true;
    this.deferredPrompt = evt;
  }

  // window.addEventListener('appinstalled', (evt) => {
  //   console.log('Instalação realizada com sucesso.');
  // });

  constructor(public router: Router) { }

  ngOnInit() {
    // *ngIf="!router.url.includes('home')"

    const carousel: Element = document.querySelector('.embla');

    const nextBtn: Element = carousel.querySelector('.embla__button--next');
    const previousBtn: Element = carousel.querySelector('.embla__button--prev');

    const embla = EmblaCarousel(carousel.querySelector('.embla__viewport'), {
      loop: true,
      startIndex: 1,
      align: 'center',
      draggable: true,
      dragFree: false,
      slidesToScroll: 1
    });

    nextBtn.addEventListener('click', embla.scrollNext, false);
    previousBtn.addEventListener('click', embla.scrollPrev, false);
  }

  addToHomeScreen() {
    this.deferredPrompt.prompt();

    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        this.showButton = false;
        this.deferredPrompt = null;
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  }
}
