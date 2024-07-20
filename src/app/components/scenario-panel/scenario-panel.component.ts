import {Component, EventEmitter, OnInit, Output, signal} from '@angular/core';
import {Scenario} from "../../shared/interfaces/scenario";
import {Player} from "../../shared/interfaces/player";

@Component({
  selector: 'app-scenario-panel',
  standalone: true,
  imports: [],
  templateUrl: './scenario-panel.component.html',
  styleUrl: './scenario-panel.component.css'
})
export class ScenarioPanelComponent implements OnInit{
  scenarioList: Scenario[] = [];
  modalState: boolean = false;
  @Output() activeScenario = new EventEmitter<Scenario>()
  @Output() modalContent = new EventEmitter<Scenario>();

  ngOnInit() {
    this.getScenarios();
  }

  selectScenario(scenario: Scenario) {
    this.activeScenario.emit(scenario);
  }

  showModal(scenario: Scenario) {
    this.modalState ? this.modalContent.emit(scenario) : this.modalContent.emit();
    this.modalState = !this.modalState;
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
        combat_mode: false,
        npcs: [],
        monsters: []
      },

      {
        id: 2,
        title: 'gankup in the woods',
        description: 'first combat',
        order: 2,
        lvl_requirement: 2,
        map: 'assets/maps/training-grounds.jpg',
        soundtrack: null,
        combat_mode: true,
        npcs: [],
        monsters: [
          {index: 'wolf', name: 'wolf1', level: 1, image: null},
          {index: 'wolf', name: 'wolf2', level: 1, image: null},
          {index: 'bandit', name: 'chado', level: 2, image: null}
        ]
      }
    ]
    this.scenarioList.sort((s1, s2) => s1.order - s2.order);
  }

  addScenario() {

  }

  updateScenario(id: number) {

  }

  deleteScenario(id: number) {

  }

}
