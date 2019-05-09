import { RulesetModel } from './ruleset.model';

export interface MatchModel {
  Id: number;
  challengerId: number;
  oppositionId: number;
  challengerScore: number;
  oppositionScore: number;
  matchDate: Date;
  ruleset: RulesetModel;
}
