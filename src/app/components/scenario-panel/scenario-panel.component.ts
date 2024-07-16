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

  ngOnInit() {
    this.getScenarios();
  }

  getScenarios() {
    this.scenarioList = [
      {
        id: 1,
        title: 'intro',
        description: 'the gathering',
        order: 1,
        lvl_requirement: 1,
        map: 'assets/maps/training-grounds.jpg',
        soundtrack: null,
        story_mode: false,
        combat_mode: true,
        npcs: [],
        monsters: [
          {index: 'wolf', name: 'wolf1', level: 1, image: null},
          {index: 'wolf', name: 'wolf2', level: 1, image: null},
          {index: 'bandit', name: 'chado', level: 2, image: null}
        ]
      }
    ]
  }

  addScenario() {

  }

  updateScenario(id: number) {

  }

  deleteScenario(id: number) {

  }

}
