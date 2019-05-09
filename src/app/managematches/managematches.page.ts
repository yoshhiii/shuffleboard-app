import { Component, OnInit } from '@angular/core';
import { TeamService } from '../shared/team.service';
import { TeamModel } from '../shared/models/team.model';
import { MatchService } from '../shared/match.service';
import { MatchModel } from '../shared/models/match.model';
import { RulesetService } from '../shared/ruleset.service';
import { RulesetModel } from '../shared/models/ruleset.model';

@Component({
  selector: 'app-managematches',
  templateUrl: './managematches.page.html',
  styleUrls: ['./managematches.page.scss'],
})
export class ManagematchesPage implements OnInit {
  rulesets: RulesetModel[];
  selectedRulesetName: string;

  oppositionTeams: TeamModel[];
  oppTeamName: string;

  challengerTeams: TeamModel[];
  chaTeamName: string;

  matchDate: any;
  ruleSet: any;
  constructor(private teamService: TeamService,
              private matchService: MatchService,
              private rulesetsService: RulesetService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(teams => {
      this.oppositionTeams = teams;
      this.challengerTeams = teams;
    });

    this.rulesetsService.getRulesets().subscribe(rules => {
      this.rulesets = rules;
    });
  }

  CreateMatch() {
    const oppTeam = this.oppositionTeams.find(x => x.name === this.oppTeamName);
    const chaTeam = this.challengerTeams.find(x => x.name === this.chaTeamName);
    const selectedRules = this.rulesets.find(x => x.name === this.selectedRulesetName);

    const match: MatchModel = {
      challengerName: null,
      oppositionName: null,
      challengerId: oppTeam.id,
      oppositionId: chaTeam.id,
      matchDate: this.matchDate,
      Id: null,
      oppositionScore: null,
      challengerScore: null,
      ruleset: selectedRules
    };

    this.matchService.createMatch(match);
  }
}
