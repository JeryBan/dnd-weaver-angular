import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Player} from "../../shared/interfaces/player";
import {Monster} from "../../shared/interfaces/monster";
import {Scenario} from "../../shared/interfaces/scenario";
import {PlayerPanelComponent} from "../player-panel/player-panel.component";

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {
  @Input() modalContent: Player & Monster & Scenario | undefined;
  // modalType: string | undefined;
  //
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['modalContent']) {
  //     this.setModalType();
  //   }
  // }
  //
  // setModalType() {
  //   if (this.isPlayer(this.modalContent)) {
  //     this.modalType = 'player'
  //   } else if (this.isMonster(this.modalContent)) {
  //     this.modalType = 'monster'
  //   } else if (this.isScenario(this.modalContent)) {
  //     this.modalType = 'scenario'
  //   }
  // }
  //
  // isPlayer(obj: any) {
  //   return obj['modalType'] === 'player' || false;
  // }
  //
  // isMonster(obj: any) {
  //   return obj['modalType'] === 'monster';
  // }
  //
  // isScenario(obj: any) {
  //   return obj['modalType'] === 'scenario';
  // }
}
