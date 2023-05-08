import { Component } from '@angular/core';
declare function showLeaderBoard(score:Number):void
@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent {
  ngOnInit() {
    this.LeaderBoard()
  }
  LeaderBoard(){
   var score=Number(localStorage.getItem('streak'))
    showLeaderBoard(score)
  }
}
