import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output, Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Monster, MonsterInfo} from "../../shared/interfaces/monster";
import {Scenario} from "../../shared/interfaces/scenario";
import {DndApiService} from "../../shared/services/dnd-api.service";
import {Modal} from "../../shared/interfaces/modal";
import {environment} from "../../../environments/environment";
import {CdkDrag, CdkDragEnd, CdkDragStart} from "@angular/cdk/drag-drop";
import {read} from "@popperjs/core";

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

  @ViewChild('tokenContainer') tokenContainer: ElementRef | undefined;

  renderer: Renderer2 = inject(Renderer2);

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

  generateToken(div: HTMLDivElement) {
    const parent = div.parentElement;
    if (parent != document.body) {
      const container = this.tokenContainer?.nativeElement;
      const clone = div.cloneNode(true);
      container.appendChild(clone);

      console.log(clone);
      console.log(container.childNodes);
    }
  }

  detachElement(div: HTMLDivElement, event: CdkDragEnd) {
    if (div.parentNode != document.body) {

      const dropPointX = event.dropPoint.x - event.distance.x -28;
      const dropPointY = event.dropPoint.y - event.distance.y -27;

      div.classList.remove('clone-image');
      div.classList.add('image-position');
      div.style.left = `${dropPointX}px`;
      div.style.top = `${dropPointY}px`;
      document.body.appendChild(div);
    }
  }

  protected readonly apiUrl = apiUrl;
}
