import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'geotrix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public standalone: boolean;

  constructor() { }

  ngOnInit() {
    this.standalone = window.matchMedia('(display-mode: standalone)').matches;

    // this.standalone = this.win.navigator.standalone ||
    //   this.win.matchMedia('(display-mode: standalone)').matches;
  }

  onBack() {
    window.history.back();
  }
}
