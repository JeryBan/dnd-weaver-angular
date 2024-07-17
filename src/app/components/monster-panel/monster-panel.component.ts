import {Component, inject, Input, OnChanges} from '@angular/core';
import {MonsterInfo} from "../../shared/interfaces/monster";
import {Scenario} from "../../shared/interfaces/scenario";
import {DndApiService} from "../../shared/services/dnd-api.service";

@Component({
  selector: 'app-monster-panel',
  standalone: true,
  imports: [],
  templateUrl: './monster-panel.component.html',
  styleUrl: './monster-panel.component.css'
})
export class MonsterPanelComponent implements OnChanges{
  apiService: DndApiService = inject(DndApiService);
  @Input() activeScenario: Scenario | undefined;
  monsterList: MonsterInfo[] = []

  ngOnChanges() {
    this.getMonsters();
  }

  getMonsters() {
    this.monsterList = [];

    if (this.activeScenario?.monsters) {
      for (let monster of this.activeScenario.monsters) {
        this.apiService.searchMonster(monster.index).subscribe({
          next: result => {
            result.level = monster.level;
            this.monsterList.push(result);
          },
          error: err => {
            console.log(`Error fetching monster ${monster.name}: `, err);
          }
        });
      }
    }
  }

  addMonster() {

  }

  updateMonster(id: number) {

  }

  deleteMonster(id: number) {

  }

}
