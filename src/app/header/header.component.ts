import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Services
import { SidenavService } from '../services/SidenavService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'geotrix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lang: string;
  public disabled: boolean;

  constructor(private location: Location, private sidenavService: SidenavService, private translate: TranslateService) { }

  ngOnInit() {
    this.lang = this.translate.currentLang;
    this.location.onUrlChange(url => { this.disabled = url === '/'; });
  }

  onBack() {
    window.history.go(-1);
  }

  openSidenav(): void {
    this.sidenavService.open();
  }

  setLanguage(language: string): void {
    this.lang = language;
    this.translate.use(language);
  }
}
