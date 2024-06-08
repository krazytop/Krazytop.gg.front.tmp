import {LOLObjectives} from "./lol-objectives.model";
import {LOLChampion} from "./lol-champion.model";
import {LOLParticipant} from "./lol-participant.model";

export class LOLTeam {
  hasWin: boolean = false;
  objectives: LOLObjectives = new LOLObjectives();
  bannedChampions: LOLChampion[] = [];
  participants: LOLParticipant[] = [];
}