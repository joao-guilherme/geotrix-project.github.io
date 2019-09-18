import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './services/SidenavService';

@Component({
  selector: 'geotrix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', { static: true })
  private sidenav: MatSidenav;

  constructor(private translate: TranslateService, private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);

    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
