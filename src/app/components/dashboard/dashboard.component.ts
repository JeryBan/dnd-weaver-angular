import {Component, Input} from '@angular/core';
import {PlayerPanelComponent} from "../player-panel/player-panel.component";
import {ScenarioPanelComponent} from "../scenario-panel/scenario-panel.component";
import {MonsterPanelComponent} from "../monster-panel/monster-panel.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {Scenario} from "../../shared/interfaces/scenario";
import {ModalsComponent} from "../modals/modals.component";
import {Player} from "../../shared/interfaces/player";
import {Monster} from "../../shared/interfaces/monster";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PlayerPanelComponent,
    ScenarioPanelComponent,
    MonsterPanelComponent,
    ToolbarComponent,
    ModalsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activeScenario: Scenario | undefined;
  modalContent: Player | Monster | Scenario | undefined;
  modalState: Boolean = false;

  onScenarioSelected(scenario: Scenario) {
    this.activeScenario = scenario;
  }

  onPlayerSelected(player: Player) {
    this.modalContent = player;
  }

  closeModal(): void {
    this.modalState = false;
  }

}
