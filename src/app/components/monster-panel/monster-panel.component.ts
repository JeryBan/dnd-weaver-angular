import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {Monster, MonsterInfo} from "../../shared/interfaces/monster";
import {Scenario} from "../../shared/interfaces/scenario";
import {DndApiService} from "../../shared/services/dnd-api.service";
import {Modal} from "../../shared/interfaces/modal";
import {environment} from "../../../environments/environment";
import {CdkDrag, CdkDragEnd} from "@angular/cdk/drag-drop";

const apiUrl = environment.dnd5api;

@Component({
  selector: 'app-monster-panel',
  standalone: true,
  imports: [
    CdkDrag
  ],
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
        this.apiService.getMonster(monster.index).subscribe({
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

  generateToken(div: HTMLDivElement) {
    // const parent = div.parentElement;
    // if (parent != document.body) {
    //   const clone = div.cloneNode(true);
    //   parent?.appendChild(clone);
    // }
  }

  detachElement(div: HTMLDivElement, event: CdkDragEnd) {
    const dashboard = document.getElementById('dashboard');

    if (dashboard && div.parentNode != dashboard) {
      const dropPointX = event.dropPoint.x - event.distance.x -28;
      const dropPointY = event.dropPoint.y - event.distance.y -27;

      div.classList.remove('clone-image');
      div.classList.add('image-position');
      div.style.left = `${dropPointX}px`;
      div.style.top = `${dropPointY}px`;
      dashboard.appendChild(div);
    }
  }

  protected readonly apiUrl = apiUrl;
}
