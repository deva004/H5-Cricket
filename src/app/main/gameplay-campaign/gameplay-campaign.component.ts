import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-gameplay-campaign',
  templateUrl: './gameplay-campaign.component.html',
  styleUrls: ['./gameplay-campaign.component.css']
})
export class GameplayCampaignComponent {


  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private data: StoreService) { }
  response: string = ''
  Level: any
  outcome: any = null
  mission: any = null
  cardclick = false
  mainLevel: any;
  Coin: any
  streak: any
  start: any
  next: any
  public getData() {
    this.mainLevel = localStorage.getItem('MainLevel')
    this.Level = localStorage.getItem('CampLevel');
    (window as any).rewardValue = 2000;
    if (localStorage.getItem('CampLevel') == null) {
      localStorage.setItem('CampLevel', '0');
      this.Level = localStorage.getItem('CampLevel')
    }
    if (localStorage.getItem('MainLevel') == null) {
      localStorage.setItem('MainLevel', '0');
      this.mainLevel = localStorage.getItem('MainLevel')
    }
  }
  /*
  public removeData() {
    localStorage.removeItem('Level');
  }*/
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
    this.getData()
    this.next = localStorage.getItem('next')
    this.start = localStorage.getItem('start')
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
    this.Coin = Number(localStorage.getItem('Coin'))
    if (this.start == 'true' && this.next == 'false') {
  
      //gameLevel(Number(this.Level))
    }
    if (this.start == 'false') {

      localStorage.setItem('start', "true")
      //gameLevel(Number(this.Level))
    }

  }


  winningStreak() {
    this.streak = localStorage.getItem('streak')
    if (this.streak == null || this.streak == "undefined" || this.streak == " ") {
      localStorage.setItem('streak', "0")
      this.streak = localStorage.getItem('streak')
    }
  }
  levels = [
    [{ level: '1', mission: 6, objective: 'R Tev has to hit a 6 off the last ball by Cotll of West Indies. Which shot would you play?', ball: 'legcutter', bat1: 'sweep', outcome1: 4, bat2: 'pull', outcome2: 6, bat3: 'hook', outcome3: 2, price: 500, win: 100 },
    { level: '2', mission: 6, objective: 'R Tev has to hit a 6 off the last ball by Cotll of West Indies. Which shot would you play?', ball: 'pace', bat1: 'hook', outcome1: 6, bat2: 'legglance', outcome2: 2, bat3: 'uppercut', outcome3: 0, price: 500, win: 100 },
    { level: '3', mission: 6, objective: 'R Tev has to hit a 6 off the last ball by Cotll of West Indies. Which shot would you play?', ball: 'inswinger', bat1: 'ondrive', outcome1: 0, bat2: 'straightdrive', outcome2: 2, bat3: 'flick', outcome3: 6, price: 500, win: 100 }
    ],


    [{ level: '1', mission: 4, objective: 'Din Kik has to hit a 4 off the last ball by Hlr of West Indies. Which shot would you play?', ball: 'pace', bat1: 'pull', outcome1: 2, bat2: 'squaredrive', outcome2: 4, bat3: 'straightdrive', outcome3: 3, price: 500, win: 100 },
    { level: '2', mission: 6, objective: 'Din Kik has to hit a 6 off the last ball by Hlr of West Indies. Which shot would you play?', ball: 'yorker', bat1: 'slog', outcome1: 6, bat2: 'legglance', outcome2: 3, bat3: 'latecut', outcome3: 1, price: 500, win: 100 },
    { level: '3', mission: 4, objective: 'Din Kik has to hit a 4 off the last ball by Hlr of West Indies. Which shot would you play?', ball: 'bouncer', bat1: 'slog', outcome1: 0, bat2: 'hook', outcome2: 1, bat3: 'uppercut', outcome3: 4, price: 500, win: 100 }
    ],


    [{ level: '1', mission: 4, objective: 'D Ash has to hit a 4 off the last ball by Andy of New Zealand. Which shot would you play?', ball: 'outswinger', bat1: 'ondrive', outcome1: 3, bat2: 'latecut', outcome2: 4, bat3: 'straightdrive', outcome3: 2, price: 500, win: 100 },
    { level: '2', mission: 4, objective: 'D Ash has to hit a 4 off the last ball by Andy of New Zealand. Which shot would you play?', ball: 'pace', bat1: 'latecut', outcome1: 4, bat2: 'flick', outcome2: 0, bat3: 'legglance', outcome3: 3, price: 500, win: 100 },
    { level: '3', mission: 6, objective: 'D Ash has to hit a 6 off the last ball by Andy of New Zealand. Which shot would you play?', ball: 'yorker', bat1: 'straightdrive', outcome1: 3, bat2: 'squaredrive', outcome2: 1, bat3: 'ondrive', outcome3: 6, price: 500, win: 100 }
    ],


    [{ level: '1', mission: 6, objective: 'Dho has to hit a 6 off the last ball by Malin of Sri Lanka. Which shot would you play?', ball: 'outswinger', bat1: 'slog', outcome1: 6, bat2: 'legglance', outcome2: 3, bat3: 'squaredrive', outcome3: 0, price: 500, win: 100 },
    { level: '2', mission: 2, objective: 'Dho has to hit a 2 off the last ball by Malin of Sri Lanka. Which shot would you play?', ball: 'inswinger', bat1: 'straightdrive', outcome1: 0, bat2: 'latecut', outcome2: 2, bat3: 'ondrive', outcome3: 3, price: 500, win: 100 },
    { level: '3', mission: 4, objective: 'Dho has to hit a 4 off the last ball by Malin of Sri Lanka. Which shot would you play?	', ball: 'yorker', bat1: 'squaredrive', outcome1: 1, bat2: 'ondrive', outcome2: 0, bat3: 'straightdrive', outcome3: 4, price: 500, win: 100 }
    ],


    [{ level: '1', mission: 4, objective: '	Sur has to hit a 4 off the last ball by Wil of England. Which shot would you play?', ball: 'inswinger', bat1: 'legglance', outcome1: 2, bat2: 'squaredrive', outcome2: 4, bat3: 'slog', outcome3: 1, price: 500, win: 100 },
    { level: '2', mission: 6, objective: 'Sur has to hit a 6 off the last ball by Wil of England. Which shot would you play?', ball: 'bouncer', bat1: 'uppercut', outcome1: 6, bat2: 'flick', outcome2: 0, bat3: 'latecut', outcome3: 2, price: 500, win: 100 },
    { level: '3', mission: 4, objective: ' Sur has to hit a 4 off the last ball by Wil of England. Which shot would you play?', ball: 'outswinger', bat1: 'pull', outcome1: 0, bat2: 'straightdrive', outcome2: 1, bat3: 'sweep', outcome3: 4, price: 500, win: 100 }
    ],

    [{ level: '1', mission: 6, objective: "Vk has to hit a 6 off the last ball by Rou of Pakistan. Which shot would you play?", ball: "pace", bat1: "latecut", outcome1: 1, bat2: "hook", outcome2: 6, bat3: "uppercut", outcome3: 0, price: 500, win: 100 },
    { level: '2', mission: 6, objective: "Vk has to hit a 6 off the last ball by Rou of Pakistan. Which shot would you play?", ball: "outswinger", bat1: "pull", outcome1: 0, bat2: "sweep", outcome2: 2, bat3: "straightdrive", outcome3: 6, price: 500, win: 100 },
    { level: '3', mission: 6, objective: "Vk has to hit a 6 off the last ball by Rou of Pakistan. Which shot would you play?", ball: "yorker", bat1: "flick", outcome1: 6, bat2: "ondrive", outcome2: 3, bat3: "pull", outcome3: 1, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 6, objective: "Jad has to hit a 6 off the last ball by Haz of Australian. Which shot would you play?", ball: "inswinger", bat1: "pull", outcome1: 7, bat2: "slog", outcome2: 6, bat3: "hook", outcome3: 0, price: 500, win: 100 },
    { level: '2', mission: 6, objective: "Jad has to hit a 6 off the last ball by Haz of Australian. Which shot would you play?", ball: "bouncer", bat1: "sweep", outcome1: 2, bat2: "straightdrive", outcome2: 1, bat3: "uppercut", outcome3: 6, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Jad has to hit a 4 off the last ball by Haz of Australian. Which shot would you play?", ball: "reverseswing", bat1: "latecut", outcome1: 4, bat2: "pull", outcome2: 0, bat3: "ondrive", outcome3: 3, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 6, objective: "Pand has to hit a 6 off the last ball by Zam of Australian. Which shot would you play?", ball: "legcutter", bat1: "straightdrive", outcome1: 1, bat2: "hook", outcome2: 6, bat3: "flick", outcome3: 0, price: 500, win: 100 },
    { level: '2', mission: 4, objective: "Pand has to hit a 4 off the last ball by Zam of Australian. Which shot would you play?", ball: "offcutter", bat1: "ondrive", outcome1: 3, bat2: "squaredrive", outcome2: 2, bat3: "sweep", outcome3: 4, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Pand has to hit a 4 off the last ball by Zam of Australian. Which shot would you play?", ball: "legcutter", bat1: "latecut", outcome1: 4, bat2: "uppercut", outcome2: 3, bat3: "slog", outcome3: 1, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 6, objective: "Ro has to hit a 6 off the last ball by Ibad of Bangladesh. Which shot would you play?", ball: "inswinger", bat1: "switchhit", outcome1: 0, bat2: "pull", outcome2: 6, bat3: "ondrive", outcome3: 2, price: 500, win: 100 },
    { level: '2', mission: 6, objective: "Ro has to hit a 6 off the last ball by Ibad of Bangladesh. Which shot would you play?", ball: "outswinger", bat1: "sweep", outcome1: 2, bat2: "flick", outcome2: 0, bat3: "hook", outcome3: 6, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Ro has to hit a 4 off the last ball by Ibad of Bangladesh. Which shot would you play?", ball: "yorker", bat1: "squaredrive", outcome1: 4, bat2: "straightdrive", outcome2: 1, bat3: "latecut", outcome3: 0, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 4, objective: "Sub Gl has to hit a 4 off the last ball by Sant of New Zeland. Which shot would you play?", ball: "offcutter", bat1: "sweep", outcome1: 1, bat2: "switchhit", outcome2: 2, bat3: "straightdrive", outcome3: 4, price: 500, win: 100 },
    { level: '2', mission: 6, objective: "Sub Gl has to hit a 6 off the last ball by Sant of New Zeland. Which shot would you play?", ball: "legcutter", bat1: "flick", outcome1: 0, bat2: "ondrive", outcome2: 6, bat3: "slog", outcome3: 1, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Sub Gl has to hit a 4 off the last ball by Sant of New Zeland. Which shot would you play?", ball: "yorker", bat1: "latecut", outcome1: 4, bat2: "uppercut", outcome2: 0, bat3: "squaredrive", outcome3: 2, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 6, objective: "Yuv has to hit a 6 off the last ball by Sturt of England. Which shot would you play?", ball: "pace", bat1: "slog", outcome1: 3, bat2: "switchhit", outcome2: 2, bat3: "hook", outcome3: 6, price: 500, win: 100 },
    { level: '2', mission: 6, objective: "Yuv has to hit a 6 off the last ball by Sturt of England. Which shot would you play?", ball: "inswinger", bat1: "ondrive", outcome1: 2, bat2: "pull", outcome2: 6, bat3: "straightdrive", outcome3: 1, price: 500, win: 100 },
    { level: '3', mission: 6, objective: "Yuv has to hit a 6 off the last ball by Sturt of England. Which shot would you play?", ball: "outswinger", bat1: "flick", outcome1: 6, bat2: "squaredrive", outcome2: 3, bat3: "sweep", outcome3: 0, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 4, objective: "Ish has to hit a 4 off the last ball by Musi of Bangladesh. Which shot would you play?", ball: "outswinger", bat1: "hook", outcome1: 1, bat2: "slog", outcome2: 0, bat3: "squaredrive", outcome3: 4, price: 500, win: 100 },
    { level: '2', mission: 4, objective: "Ish has to hit a 4 off the last ball by Musi of Bangladesh. Which shot would you play?", ball: "inswinger", bat1: "ondrive", outcome1: 4, bat2: "uppercut", outcome2: 1, bat3: "flick", outcome3: 2, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Ish has to hit a 4 off the last ball by Musi of Bangladesh. Which shot would you play?", ball: "yorker", bat1: "straightdrive", outcome1: 1, bat2: "switchhit", outcome2: 4, bat3: "pull", outcome3: 2, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 6, objective: "Shrya has to hit a 6 off the last ball by Nas of Bangladesh. Which shot would you play?", ball: "outswinger", bat1: "pull", outcome1: 0, bat2: "hook", outcome2: 3, bat3: "straightdrive", outcome3: 6, price: 500, win: 100 },
    { level: '2', mission: 6, objective: "Shrya has to hit a 6 off the last ball by Nas of Bangladesh. Which shot would you play?", ball: "bouncer", bat1: "uppercut", outcome1: 6, bat2: "sweep", outcome2: 1, bat3: "switchhit", outcome3: 0, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Shrya has to hit a 4 off the last ball by Nas of Bangladesh. Which shot would you play?", ball: "inswinger", bat1: "squaredrive", outcome1: 3, bat2: "flick", outcome2: 4, bat3: "slog", outcome3: 1, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 4, objective: "Shwg has to hit a 4 off the last ball by Mil of New Zeland. Which shot would you play?", ball: "yorker", bat1: "switchhit", outcome1: 1, bat2: "pull", outcome2: 2, bat3: "squaredrive", outcome3: 4, price: 500, win: 100 },
    { level: '2', mission: 6, objective: "Shwg has to hit a 6 off the last ball by Mil of New Zeland. Which shot would you play?", ball: "pace", bat1: "slog", outcome1: 6, bat2: "ondrive", outcome2: 0, bat3: "flick", outcome3: 2, price: 500, win: 100 },
    { level: '3', mission: 6, objective: "Shwg has to hit a 6 off the last ball by Mil of New Zeland. Which shot would you play?", ball: "bouncer", bat1: "straightdrive", outcome1: 2, bat2: "uppercut", outcome2: 6, bat3: "sweep", outcome3: 0, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 4, objective: "Sac has to hit a 4 off the last ball by Mork of South African. Which shot would you play?", ball: "outswinger", bat1: "pull", outcome1: 4, bat2: "squaredrive", outcome2: 3, bat3: "switchhit", outcome3: 1, price: 500, win: 100 },
    { level: '2', mission: 4, objective: "Sac has to hit a 4 off the last ball by Mork of South African. Which shot would you play?", ball: "inswinger", bat1: "pull", outcome1: 7, bat2: "slog", outcome2: 1, bat3: "ondrive", outcome3: 4, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Sac has to hit a 4 off the last ball by Mork of South African. Which shot would you play?", ball: "yorker", bat1: "uppercut", outcome1: 0, bat2: "flick", outcome2: 4, bat3: "latecut", outcome3: 2, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 6, objective: "Rahl has to hit a 6 off the last ball by Henr of Austrlian. Which shot would you play?", ball: "bouncer", bat1: "hook", outcome1: 6, bat2: "sweep", outcome2: 0, bat3: "straightdrive", outcome3: 2, price: 500, win: 100 },
    { level: '2', mission: 4, objective: "Rahl has to hit a 4 off the last ball by Henr of Austrlian. Which shot would you play?", ball: "reverseswing", bat1: "slog", outcome1: 7, bat2: "pull", outcome2: 0, bat3: "latecut", outcome3: 4, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Rahl has to hit a 4 off the last ball by Henr of Austrlian. Which shot would you play?", ball: "pace", bat1: "switchhit", outcome1: 1, bat2: "straightdrive", outcome2: 4, bat3: "sweep", outcome3: 2, price: 500, win: 100 },
    ],

    [{ level: '1', mission: 6, objective: "Gamb has to hit a 6 off the last ball by Hodg of Austrlian. Which shot would you play?", ball: "legcutter", bat1: "sweep", outcome1: 6, bat2: "slog", outcome2: 2, bat3: "pull", outcome3: 1, price: 500, win: 100 },
    { level: '2', mission: 4, objective: "Gamb has to hit a 4 off the last ball by Hodg of Austrlian. Which shot would you play?", ball: "offcutter", bat1: "pull", outcome1: 0, bat2: "uppercut", outcome2: 0, bat3: "flick", outcome3: 4, price: 500, win: 100 },
    { level: '3', mission: 4, objective: "Gamb has to hit a 4 off the last ball by Hodg of Austrlian. Which shot would you play?", ball: "yorker", bat1: "pull", outcome1: 3, bat2: "latecut", outcome2: 4, bat3: "hook", outcome3: 2, price: 500, win: 100 }]]





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
            localStorage.setItem('streak', '0')
            localStorage.setItem('next', "false")
          }
          if (outcome == mission) {
            var strk: any
            strk = (Number(this.streak) + 1).toString()
            localStorage.setItem('streak', strk)
            if (this.Level < 2) {
              var lvl = 0
              lvl = 1 + Number(this.Level)
              localStorage.setItem('CampLevel', lvl.toString());
              this.Level = localStorage.getItem('Level')
              //  gameLevel(Number(this.Level))
            }

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

              if (this.Level < 2) {

              }
            }, 2000)
            if (Number(this.Level) == 2) {
              this.claim()
              if (this.mainLevel < 16) {
                var mainlvl = 0
                mainlvl = 1 + Number(this.mainLevel)
                localStorage.setItem('MainLevel', mainlvl.toString())
                localStorage.setItem('Access', "false")
                localStorage.setItem('CampLevel', '0')
              }
              if (this.mainLevel == 16) {
                var mainlvl = 0
                mainlvl = Math.floor((Math.random() * 15) + 1);
                localStorage.setItem('MainLevel', mainlvl.toString());
              }

            }
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
    window.location.reload()
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
  claim() {
    if (this.Level == 2) {
      var lvl = 0
      localStorage.setItem('Coin', (this.Coin + 1000).toString())
      localStorage.setItem('CampLevel', '0')
    }

  }

  rwrd() {
    localStorage.setItem('next', "true")

  }

  /*twoxReward(){
    if(this.Level==2){
      var lvl=0;
    
      this.router.navigate(['/']);
      localStorage.setItem('CampLevel','0')
    }
  }*/
  gEnd() {
    localStorage.setItem('next', "false")
  }

  //-------2xreward----------
  async routFunc() {
    if (this.Level == 2) {
      var lvl = 0;

      this.router.navigate(['/']);
      localStorage.setItem('CampLevel', '0')
    }
    this.response = await this.data.routeFunction();
    if (this.response == "true") {
      this.router.navigate(['/']);
    }
  }
}

