import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'geotrix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public disabled: boolean;

  constructor(private location: Location) { }

  ngOnInit() {
    this.location.onUrlChange(url => { this.disabled = url === '/'; });
  }

  onBack() {
    window.history.go(-1);
  }
}
