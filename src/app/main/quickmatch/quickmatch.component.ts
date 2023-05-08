import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';




@Component({
  selector: 'app-quickmatch',
  templateUrl: './quickmatch.component.html',
  styleUrls: ['./quickmatch.component.css']
})

export class QuickmatchComponent {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private data: StoreService) { }
  response: string = ''
  Level: any
  outcome: any = null
  mission: any = null
  cardclick = false
  Coin: any
  streak: any
  start: any
  next: any
  public getData() {

    this.Level = localStorage.getItem('Level')
    if (localStorage.getItem('Level') == null) {
      localStorage.setItem('Level', '1');
      this.Level = localStorage.getItem('Level')
    }
  }
  /*
  public removeData() {
    localStorage.removeItem('Level');
  }*/
  winningStreak() {
    this.streak = localStorage.getItem('streak')
    if (this.streak == null || this.streak == "undefined" || this.streak == " ") {
      localStorage.setItem('streak', "0")
      this.streak = localStorage.getItem('streak')
    }
  }

  device = false
  keyframes: Keyframe[] = [
    {
      opacity: 0
    },
    {
      height: "0px",
      opacity: 0
    }
  ]
  show: boolean = false;
  isFullScreen: boolean = false;
  ngOnInit() {

    this.getData();
    this.next = localStorage.getItem('next')
    this.start = localStorage.getItem('start')
    this.Coin = Number(localStorage.getItem('Coin'))
    if (this.Level > 19) {
      var randomnumber = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
      localStorage.setItem('Level', randomnumber.toString());
      this.Level = localStorage.getItem('Level')
      //this._router.navigate([''])
    }
    document.getElementById("chooseACard")?.classList.add("d-none")
    document.getElementById("win-bg")?.classList.add('d-none')
    document.getElementById("loss-bg")?.classList.add('d-none')
    document.getElementById("four-runs")?.classList.add('d-none')
    document.getElementById("two-runs")?.classList.add('d-none')
    document.getElementById("missed")?.classList.add('d-none')
    document.getElementById("total-loss-box")?.classList.add('d-none')
    document.getElementById("slight-loss-box")?.classList.add('d-none')
    document.getElementById("total-win-box")?.classList.add('d-none')
    setTimeout(() => {
      document.getElementById("startingCard")?.classList.add('d-none')
      document.getElementById("chooseACard")?.classList.remove('d-none')
      document.getElementById("chooseACard")?.classList.add('d-flex')
      document.getElementById("chooseItems")?.classList.add("d-none")
      setTimeout(() => {
        document.getElementById("chooseItems")?.classList.remove("d-none")
        document.getElementById("chooseItems")?.classList.add("d-flex")
      }, 500)
    }, 3200);

    this.winningStreak()
    if (this.start == 'false') {


      localStorage.setItem('start', "true")
    }
    if (this.start == 'true' && this.next == 'false') {

    }

  }


  levels = [{ level: '0', mission: 4, objective: 'Hit a 4 against pace ball', ball: 'pace', bat1: 'straightdrive', outcome1: 4, bat2: 'pull', outcome2: 2, bat3: 'hook', outcome3: 0 }, { level: '1', mission: 4, objective: 'Hit a 4 against pace ball', ball: 'pace', bat1: 'straightdrive', outcome1: 4, bat2: 'pull', outcome2: 2, bat3: 'hook', outcome3: 0 },
  { level: '2', mission: 2, objective: 'Score atleast 1 Run against Yorker ball', ball: 'yorker', bat1: 'uppercut', outcome1: 7, bat2: 'hook', outcome2: 7, bat3: 'straightdrive', outcome3: 2 },
  { level: '3', mission: 3, objective: 'Hit 3Runs against ReverseSwing Ball', ball: 'reverseswing', bat1: 'ondrive', outcome1: 2, bat2: 'latecut', outcome2: 3, bat3: 'sweep', outcome3: 0 },
  { level: '4', mission: 4, objective: 'Hit a 4 against OutSwinger Ball', ball: 'outswinger', bat1: 'squarecut', outcome1: 4, bat2: 'latecut', outcome2: 2, bat3: 'ondrive', outcome3: 3 },
  { level: '5', mission: 6, objective: 'Hit a 6 against Inswinger Ball', ball: 'inswinger', bat1: 'flick', outcome1: 6, bat2: 'ondrive', outcome2: 4, bat3: 'straightdrive', outcome3: 2 },
  { level: '6', mission: 2, objective: 'Score atleast 2 Run against LegCutter Ball', ball: 'legcutter', bat1: 'sweep', outcome1: 2, bat2: 'hook', outcome2: 0, bat3: 'squarecut', outcome3: 0 },
  { level: '7', mission: 2, objective: 'Score without Getting Out against Offcutter Ball', ball: 'offcutter', bat1: 'slog', outcome1: 7, bat2: 'hook', outcome2: 7, bat3: 'flick', outcome3: 2 },
  { level: '8', mission: 6, objective: 'Hit a 6 against Bouncer Ball', ball: 'bouncer', bat1: 'uppercut', outcome1: 6, bat2: 'sweep', outcome2: 0, bat3: 'flick', outcome3: 2 },
  { level: '9', mission: 1, objective: 'Score atleast 1 Run against Pace ball', ball: 'pace', bat1: 'hook', outcome1: 0, bat2: 'sweep', outcome2: 1, bat3: 'pull', outcome3: 7 },
  { level: '10', mission: 4, objective: 'Hit a 4 against Yorker Ball', ball: 'yorker', bat1: 'straightdrive', outcome1: 2, bat2: 'hook', outcome2: 0, bat3: 'latecut', outcome3: 4 },
  { level: '11', mission: 4, objective: 'Score without Getting Out against ReverseSwing Ball', ball: 'reverseswing', bat1: 'switchhit', outcome1: 4, bat2: 'sweep', outcome2: 0, bat3: 'slog', outcome3: 7 },
  { level: '12', mission: 4, objective: 'Hit a 4 against OutSwinger Ball', ball: 'outswinger', bat1: 'hook', outcome1: 4, bat2: 'legglance', outcome2: 3, bat3: 'ondrive', outcome3: 1 },
  { level: '13', mission: 3, objective: 'Hit  3 Runs against InSwinger Ball', ball: 'inswinger', bat1: 'ondrive', outcome1: 3, bat2: 'slog', outcome2: 7, bat3: 'pull', outcome3: 0 },
  { level: '14', mission: 6, objective: 'Hit a 6 against Legcutter Ball', ball: 'legcutter', bat1: 'sweep', outcome1: 4, bat2: 'squarecut', outcome2: 6, bat3: 'hook', outcome3: 0 },
  { level: '15', mission: 4, objective: 'Score atleast 1 Run against OffCutter ball', ball: 'offcutter', bat1: 'pull', outcome1: 2, bat2: 'flick', outcome2: 4, bat3: 'slog', outcome3: 0 },
  { level: '16', mission: 4, objective: 'Score without Getting Out against Bouncer Ball', ball: 'bouncer', bat1: 'hook', outcome1: 4, bat2: 'sweep', outcome2: 0, bat3: 'slog', outcome3: 7 },
  { level: '17', mission: 6, objective: 'Hit a 6 against Pace Ball', ball: 'pace', bat1: 'straightdrive', outcome1: 4, bat2: 'squarecut', outcome2: 6, bat3: 'ondrive', outcome3: 2 },
  { level: '18', mission: 2, objective: 'Score without Getting Out against Yorker Ball', ball: 'yorker', bat1: 'pull', outcome1: 4, bat2: 'slog', outcome2: 7, bat3: 'ondrive', outcome3: 2 },
  { level: '19', mission: 6, objective: 'Hit a 6 against RreverseSwing Ball', ball: 'reverseswing', bat1: 'switchhit', outcome1: 6, bat2: 'latecut', outcome2: 4, bat3: 'pull', outcome3: 7 },
  { level: '20', mission: 6, objective: 'Hit a 6 against OutSwinger Ball', ball: 'outswinger', bat1: 'squaredrive', outcome1: 6, bat2: 'latecut', outcome2: 1, bat3: 'slog', outcome3: 0 },
  { level: '0', mission: 6, objective: 'Hit a 4 against OutSwinger Ball', ball: 'outswinger', bat1: 'squarecut', outcome1: 6, bat2: 'latecut', outcome2: 2, bat3: 'ondrive', outcome3: 3 }]





  playCard(card: string, outcome: any, mission: any): void {

    if (!this.cardclick) {
      this.cardclick = true
      this.outcome = outcome
      this.mission = mission
      this.document.getElementById('opocard')?.classList.add('oppocard-play-animation');
      this.document.getElementById('opocard-img')?.classList.add('oppocard-play-animation1')
      document.getElementById('ah')?.classList.add('back');
      if (card === 'cut') {
        document.getElementById('leg-glance')?.animate([{ opacity: 1 }, { opacity: 0 }], 1500)
        document.getElementById('reverse-swing')?.animate([{ opacity: 1 }, { opacity: 0 }], 1500)
        document.getElementById('cut')?.classList.add('cut-play-animation')
        setTimeout(() => {
          document.getElementById('leg-glance')?.classList.add('d-none');
          document.getElementById('reverse-swing')?.classList.add('d-none');
        }, 1500)
      } else if (card === 'legGlance') {
        document.getElementById('cut')?.animate([{ opacity: 1 }, { opacity: 0 }], 1500)
        document.getElementById('reverse-swing')?.animate([{ opacity: 1 }, { opacity: 0 }], 1500)
        document.getElementById('leg-glance')?.classList.add('leg-glance-play-animation')
        setTimeout(() => {
          document.getElementById('cut')?.classList.add('d-none');
          document.getElementById('reverse-swing')?.classList.add('d-none');
        }, 1500)
      } else if (card === 'reverseSwing') {
        document.getElementById('leg-glance')?.animate([{ opacity: 1 }, { opacity: 0 }], 1500)
        document.getElementById('cut')?.animate([{ opacity: 1 }, { opacity: 0 }], 1500)
        document.getElementById('reverse-swing')?.classList.add('reverse-swing-play-animation')
        setTimeout(() => {
          document.getElementById('leg-glance')?.classList.add('d-none');
          document.getElementById('cut')?.classList.add('d-none');
        }, 1500)
      }
      document.getElementById('choose-text')?.animate(this.keyframes, { delay: 1500, duration: 2000 });
      document.getElementById('arrow')?.animate(this.keyframes, { delay: 1500, duration: 2000 });
      document.getElementById('pointer')?.animate(this.keyframes, { delay: 1500, duration: 2000 });
      setTimeout(() => {
        document.getElementById('chooseItems')?.classList.remove('justify-content-end');
        document.getElementById('chooseItems')?.classList.add('justify-content-start');
        document.getElementById('pointer')?.classList.add('d-none')
        document.getElementById('choose-text')?.classList.add('d-none');
        document.getElementById('arrow')?.classList.add('d-none');
        setTimeout(() => {
          document.getElementById('chooseACard')?.classList.remove('d-flex');
          document.getElementById('chooseACard')?.classList.add('d-none');

          //--------------------------score---------------------------------------
          if (outcome != mission) {
            localStorage.setItem('streak', '0');
            localStorage.setItem('next', "false")
          }
          if (outcome == mission) {
            var strk: any
            strk = (Number(this.streak) + 1).toString()
            localStorage.setItem('streak', strk)


            var lvl = 0
            lvl = 1 + Number(this.Level)
            document.getElementById('four-runs')?.classList.remove('d-none')
            document.getElementById('win-bg')?.classList.remove('d-none')
            document.getElementById('four-runs')?.classList.add('d-flex')
            document.getElementById('win-bg')?.classList.add('d-block')
            this.winAudio()
            setTimeout(() => {
              document.getElementById('four-runs')?.classList.remove('d-flex')
              document.getElementById('win-bg')?.classList.remove('d-block')
              document.getElementById('four-runs')?.classList.add('d-none')
              document.getElementById("total-win-box")?.classList.remove('d-none')
              localStorage.setItem('Level', lvl.toString());
              this.Level = localStorage.getItem('Level')


            }, 2500)

          }
          if (outcome != mission && outcome != 0 && outcome != 7) {

            document.getElementById('four-runs')?.classList.remove('d-none')
            document.getElementById('loss-bg')?.classList.remove('d-none')
            document.getElementById('four-runs')?.classList.add('d-flex')
            document.getElementById('loss-bg')?.classList.add('d-block')
            this.lossAudio()
            setTimeout(() => {
              document.getElementById('four-runs')?.classList.remove('d-flex')
              document.getElementById('loss-bg')?.classList.remove('d-block')
              document.getElementById('four-runs')?.classList.add('d-none')
              document.getElementById("slight-loss-box")?.classList.remove('d-none')

            }, 2500)
          }
          else if (outcome == 0) {

            document.getElementById('missed')?.classList.remove('d-none')
            document.getElementById('loss-bg')?.classList.remove('d-none')
            document.getElementById('missed')?.classList.add('d-flex')
            document.getElementById('loss-bg')?.classList.add('d-block')
            this.lossAudio()
            setTimeout(() => {
              document.getElementById('missed')?.classList.remove('d-flex')
              document.getElementById('loss-bg')?.classList.remove('d-block')
              document.getElementById('missed')?.classList.add('d-none')
              document.getElementById("total-loss-box")?.classList.remove('d-none')

            }, 2500)
          }
          else if (outcome == 7) {

            document.getElementById('two-runs')?.classList.remove('d-none')
            document.getElementById('loss-bg')?.classList.remove('d-none')
            document.getElementById('two-runs')?.classList.add('d-flex')
            document.getElementById('loss-bg')?.classList.add('d-block')
            this.lossAudio()
            setTimeout(() => {
              document.getElementById('two-runs')?.classList.remove('d-flex')
              document.getElementById('loss-bg')?.classList.remove('d-block')
              document.getElementById('two-runs')?.classList.add('d-none')
              document.getElementById("total-loss-box")?.classList.remove('d-none')

            }, 2500)
          }
          else if (mission == outcome + 2) {

            document.getElementById('missed')?.classList.remove('d-none')
            document.getElementById('loss-bg')?.classList.remove('d-none')
            document.getElementById('missed')?.classList.add('d-flex')
            document.getElementById('loss-bg')?.classList.add('d-block')
            this.lossAudio()
            setTimeout(() => {
              document.getElementById('missed')?.classList.remove('d-flex')
              document.getElementById('loss-bg')?.classList.remove('d-block')
              document.getElementById('missed')?.classList.add('d-none')
              document.getElementById("slight-loss-box")?.classList.remove('d-none')

            }, 2500)
          }
        }, 1000)
      }, 1500)
    }
  }

  refresh() {

    this.router.navigateByUrl('/LB', { skipLocationChange: true }).then(() => {
      this.router.navigate(['Qm']);
      localStorage.setItem('next', "true")
    });

  }
  goToUrl(): void {
    this.document.location.href = 'https://www.facebook.com/gaming/play/544652224092593';
  }
  winAudio() {
    let audio = new Audio();
    audio.src = "./assets/sounds/Win.ogg";
    audio.load();
    audio.play();
  }
  lossAudio() {
    let audio = new Audio();
    audio.src = "./assets/sounds/lose.ogg";
    audio.load();
    audio.play();
  }

  twoxReward() {
    //  rewardEvent();
  }
  claim() {
    if (this.Level != '0' || this.Level != 0) {
      if (this.Level % 3 == 0) {

      }
    }
    localStorage.setItem('Coin', (this.Coin + 200).toString())
  }
  gEnd() {

    localStorage.setItem('next', "false")
  }


  //-------2xreward----------
  async routFunc() {

    this.response = await this.data.routeFunction();
    if (this.response == "true") {
      this.router.navigate(['/']);
    }
    //this.CoinFn()
  }

}

