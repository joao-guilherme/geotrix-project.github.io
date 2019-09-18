import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/SidenavService';

@Component({
  selector: 'geotrix-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
  }

  closeSidenav(): void {
    this.sidenavService.close();
  }

}
