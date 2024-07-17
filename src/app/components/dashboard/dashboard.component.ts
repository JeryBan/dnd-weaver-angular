import {Component, Input} from '@angular/core';
import {PlayerPanelComponent} from "../player-panel/player-panel.component";
import {ScenarioPanelComponent} from "../scenario-panel/scenario-panel.component";
import {MonsterPanelComponent} from "../monster-panel/monster-panel.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {Scenario} from "../../shared/interfaces/scenario";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PlayerPanelComponent,
    ScenarioPanelComponent,
    MonsterPanelComponent,
    ToolbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activeScenario: Scenario | undefined;

  onScenarioSelected(scenario: Scenario) {
    this.activeScenario = scenario;
  }

}
