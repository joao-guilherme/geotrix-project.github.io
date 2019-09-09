import { Component, OnInit, HostListener } from '@angular/core';

import EmblaCarousel from 'embla-carousel';

// Services
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

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
    evt.preventDefault();

    this.showButton = true;
    this.deferredPrompt = evt;
  }

  @HostListener('window:appinstalled', ['$event'])
  onappinstalled(evt: any) {
    this.showButton = false;
    this.deferredPrompt = null;

    this.snackBar.open(
      this.translate.instant('home.install.success'), null, {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      }
    );
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
