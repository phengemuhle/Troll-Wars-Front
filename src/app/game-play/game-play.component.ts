import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TrolltollService } from './trolltoll.service';
//import { TrollToll } from '@angular/core/'

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamePlayComponent implements OnInit {
  public units = [];
  start: boolean = false;
  public selectedPiece = {};
  constructor(private _TrolltollService: TrolltollService) { }

  ngOnInit() {
    this._TrolltollService.getUnits()
      .subscribe(data => {
        this.units = data;
        this.start = true;

      })
    this._TrolltollService.getBoard()
    this.setBoard()
  }
  populateInfo(piece) {
    this.selectedPiece = piece;
  }
  setBoard() {

    let knight = this.units.filter(unit => unit.id === 1)[0]
    let mage = this.units.filter(unit => unit.id === 2)[0]
    let ranger = this.units.filter(unit => unit.id === 3)[0]
    let cleric = this.units.filter(unit => unit.id === 4)[0]


    this._TrolltollService.board.map(position => {
      console.log("hi dane")
      if ((position.id === 129) || (position.id === 130) || (position.id === 131) || (position.id === 14) || (position.id === 15) || (position.id === 16)) {
        position.piece = knight
      }
      else if ((position.id === 141) || (position.id === 144) || (position.id === 1) || (position.id === 4)) {
        position.piece = ranger
      }
      else if ((position.id === 143) || (position.id === 2)) {
        position.piece = cleric
      }
      else if ((position.id === 142) || (position.id === 3)) {
        position.piece = mage
      }
      return position
    })
    console.log(this._TrolltollService.board)
  }



}
