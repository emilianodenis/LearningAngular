import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class MinesweeperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
