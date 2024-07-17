import {Npc} from "./npc";
import {Monster} from "./monster";

export interface Scenario {
  id: number,
  title : string,
  description: string,
  order: number,
  lvl_requirement: number,
  map: string, // path
  soundtrack: string | null, // path
  combat_mode: boolean,
  npcs: Npc[]
  monsters: Monster[]
}
