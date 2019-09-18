import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

// tslint:disable

@Component({
  selector: 'geotrix-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  private _matrix: string[][];

  @Input()
  set matrix(matrix: string[][]) {
    this._matrix = matrix || [['', '', ''], ['', '', ''], ['', '', '']];
  }

  get matrix(): string[][] {
    return this._matrix;
  }

  constructor(private translate: TranslateService, private snackBar: MatSnackBar) { }

  ngOnInit() { }

  public transpose(): void {
  }

  public incrementRows(): void {
    if (this.matrix.length < 6) {
      this.matrix.push(new Array(this.matrix[0].length));
    } else {
      this.showMensage(this.translate.instant('matrix.message.row'));
    }
  }

  public removeRows(): void {
    if (this.matrix.length > 1) {
      this.matrix.pop();
    } else {
      this.showMensage(this.translate.instant('matrix.message.row'));
    }
  }

  public incrementCols(): void {
    if (this.matrix[0].length < 6) {
      this.matrix.forEach(element => { element.push(''); });
    } else {
      this.showMensage(this.translate.instant('matrix.message.column'));
    }
  }

  public removeCols(): void {
    if (this.matrix[0].length > 1) {
      this.matrix.forEach(element => { element.pop(); });
    } else {
      this.showMensage(this.translate.instant('matrix.message.column'));
    }
  }

  private showMensage(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';

    this.snackBar.open(message, undefined, config);
  }
}
