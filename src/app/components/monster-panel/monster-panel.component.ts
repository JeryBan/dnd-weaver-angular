import {Component, EventEmitter, inject, Input, OnChanges, Output} from '@angular/core';
import {Monster, MonsterInfo} from "../../shared/interfaces/monster";
import {Scenario} from "../../shared/interfaces/scenario";
import {DndApiService} from "../../shared/services/dnd-api.service";
import {Modal} from "../../shared/interfaces/modal";

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
  @Output() modalContent = new EventEmitter<Modal>();
  modal: Modal = { content: null, type: '' };
  monsterList: MonsterInfo[] = []

  ngOnChanges() {
    this.getMonsters();
  }

  showModal(monster: MonsterInfo) {
      this.modal.content = monster;
      this.modal.type = 'monster';
      this.modalContent.emit(this.modal);
      console.log(monster)
  }

  getMonsters() {
    this.monsterList = [];

    if (this.activeScenario?.monsters) {
      for (let monster of this.activeScenario.monsters) {
        this.apiService.searchMonster(monster.index).subscribe({
          next: result => {
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
