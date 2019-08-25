import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geotrix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private win: any = window;
  public standalone: boolean;

  constructor() { }

  ngOnInit() {
    this.standalone = this.win.navigator.standalone ||
      this.win.matchMedia('(display-mode: standalone)').matches;
  }

  onBack() {
    this.win.history.back();
  }
}
