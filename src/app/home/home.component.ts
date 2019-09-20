import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import EmblaCarousel from 'embla-carousel';

// Services
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'geotrix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('installable', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s', style({ opacity: 0 }))
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  public installable: boolean;
  private deferredPrompt: any;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(evt: any) {
    evt.preventDefault();

    this.installable = true;
    this.deferredPrompt = evt;
  }

  @HostListener('window:appinstalled', ['$event'])
  onappinstalled(evt: any) {
    this.installable = false;
    this.deferredPrompt = null;

    this.snackBar.open(this.translate.instant('home.install.success'));
  }

  constructor(private translate: TranslateService, private snackBar: MatSnackBar) { }

  ngOnInit() {
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
  }
}
