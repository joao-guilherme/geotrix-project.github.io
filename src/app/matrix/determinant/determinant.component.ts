import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geotrix-determinant',
  templateUrl: './determinant.component.html',
  styleUrls: ['./determinant.component.scss']
})
export class DeterminantComponent implements OnInit {

  public showSolution = false;
  public matrix = [['2', '3', '4'], ['5', '10', '11'], ['3', '1', '7']];
  public sarrusResolution: string[] = ['\\sum_{i=1}^nx_i', '\\sum_{i=2}^nx_i', '\\sum_{i=3}^nx_i',
  '\\begin{vmatrix}1 & 2 & 3 \\cr 4 & 5 & 6 \\cr 7 & 8 & 9\\end{vmatrix}'];

  constructor() { }

  ngOnInit() { }

  calculate() {
    if (!this.showSolution) { this.showSolution = !this.showSolution; }
  }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }
}
