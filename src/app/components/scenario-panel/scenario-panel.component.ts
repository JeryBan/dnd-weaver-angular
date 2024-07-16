import { Component } from '@angular/core';
import {Scenario} from "../../shared/interfaces/scenario";

@Component({
  selector: 'app-scenario-panel',
  standalone: true,
  imports: [],
  templateUrl: './scenario-panel.component.html',
  styleUrl: './scenario-panel.component.css'
})
export class ScenarioPanelComponent {
  scenarioList: Scenario[] = []

  getScenarios() {

  }

  addScenario() {

  }

  updateScenario(id: number) {

  }

  deleteScenario(id: number) {

  }

}
