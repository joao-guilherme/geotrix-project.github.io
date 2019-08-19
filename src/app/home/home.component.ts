import { Component, OnInit, HostListener, ViewChildren } from '@angular/core';
import EmblaCarousel from 'embla-carousel';

@Component({
  selector: 'geotrix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  deferredPrompt;

  constructor() { }

  ngOnInit() {
    // const carousel: Element = document.querySelector('.embla');

    // const nextBtn: Element = carousel.querySelector('.embla__button--next');
    // const previousBtn: Element = carousel.querySelector('.embla__button--prev');

    // const embla = EmblaCarousel(carousel.querySelector('.embla__viewport'), {
    //   loop: true,
    //   startIndex: 1,
    //   align: 'center',
    //   draggable: true,
    //   dragFree: false,
    //   slidesToScroll: 1
    // });

    // nextBtn.addEventListener('click', embla.scrollNext, false);
    // previousBtn.addEventListener('click', embla.scrollPrev, false);
  }

  onInstallClick() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  }
}
