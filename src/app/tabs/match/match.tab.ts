import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/shared/match.service';
import { TeamService } from 'src/app/shared/team.service';
import { TeamModel } from 'src/app/shared/models/team.model';
import { MatchModel } from 'src/app/shared/models/match.model';
import { ResultsModel } from 'src/app/shared/models/results.model';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ManagematchesPage } from 'src/app/managematches/managematches.page';

@Component({
  selector: 'app-match-tab',
  templateUrl: 'match.tab.html',
  styleUrls: ['match.tab.scss']
})
export class MatchTab implements OnInit {
  @ViewChild('myslides') slider: ElementRef;

  matches: MatchModel[];
  teams: TeamModel[];
  selectedTeamName: string;

  selectedTeam: TeamModel;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private matchService: MatchService,
              private teamService: TeamService,
              public alertController: AlertController,
              private modalController: ModalController) { }

  ngOnInit(): void {
    this.teamService.getTeams(localStorage.getItem('userId')).subscribe(yourTeams => {
      this.teams = yourTeams;

      this.matchService.getMatchesByTeam(this.teams[0].id).subscribe(matches => {
        this.matches = matches;
      });
    });
  }

  UpdateSelectedMatches() {
    this.selectedTeam = this.teams.find(x => x.name === this.selectedTeamName);

    console.log(this.selectedTeam);

    this.matchService.getMatchesByTeam(this.selectedTeam.id).subscribe(matches => {
      this.matches = matches;
      console.log(this.matches);
    });
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Enter Results:',
      inputs: [
        {
          name: 'chaScore',
          type: 'number',
          id: 'cha-score',
          placeholder: 'Challenger Score'
        },
        {
          name: 'oppScore',
          type: 'number',
          id: 'opp-score',
          placeholder: 'Opposition Score'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Complete',
          handler: (data) => {
            const results: ResultsModel = {
              ChallengerScore: null,
              OppositionScore: null
            };

            results.ChallengerScore = data.chaScore;
            results.OppositionScore = data.oppScore;

            this.matchService.completeMatch(1, results);
          }
        }
      ]
    });

    await alert.present();
  }

  SlideChanged($event) {
    console.log($event);
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: ManagematchesPage,
    });

    modal.onDidDismiss()
      .then(data => {
        if (this.selectedTeam != null) {
          this.matchService.getMatchesByTeam(this.selectedTeam.id).subscribe(matches => {
            this.matches = matches;
          });
        } else {
          this.matchService.getMatchesByTeam(this.teams[0].id).subscribe(matches => {
            this.matches = matches;
          });
        }
      });
    return await modal.present();
  }

}
