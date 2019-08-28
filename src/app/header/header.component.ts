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

  ngOnInit() { }

  onBack() {
    window.history.go(-1);
  }
}
