import { RulesetModel } from './ruleset.model';

export interface MatchModel {
  Id: number;
  challengerId: number;
  oppositionId: number;
  challengerName: string;
  oppositionName: string;
  challengerScore: number;
  oppositionScore: number;
  matchDate: Date;
  rulesetId: number;
}
