import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {Scenario} from "../../shared/interfaces/scenario";
import {Modal} from "../../shared/interfaces/modal";
import {CampaignService} from "../../shared/services/campaign.service";

@Component({
  selector: 'app-scenario-panel',
  standalone: true,
  imports: [],
  templateUrl: './scenario-panel.component.html',
  styleUrl: './scenario-panel.component.css'
})
export class ScenarioPanelComponent implements OnInit{
  @Output() activeScenario = new EventEmitter<Scenario>()
  @Output() modalContent = new EventEmitter<Modal>();
  campaignService: CampaignService = inject(CampaignService);
  activeCampaign = this.campaignService.activeCampaign;
  modal: Modal = { content: null, type: '' };
  scenarioList: Scenario[] = [];

  ngOnInit() {
    this.getScenarios();
  }

  selectScenario(scenario: Scenario) {
    this.activeScenario.emit(scenario);
    this.campaignService.activeScenario.set(scenario);

    const dashboard = document.getElementById('dashboard')
    if (dashboard) {
      dashboard.style.backgroundImage = `url(${scenario.map})`;
    }
  }

  showScenarioModal(scenario: Scenario) {
    this.modal.content = scenario;
    this.modal.type = 'scenario';
    this.modalContent.emit(this.modal)
  }

  showNewScenarioModal() {
    this.modal.content = null;
    this.modal.type = 'createScenario';
    this.modalContent.emit(this.modal)
  }

  getScenarios() {
    this.scenarioList = [
      {
        id: 1,
        title: 'intro',
        description: 'the gathering. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam corporis dolores eius est expedita ipsa ipsam ipsum, itaque molestias non nulla officia quam quibusdam ratione reprehenderit vero. Eaque, excepturi? Architecto asperiores, beatae est illo in inventore iusto minus odit officiis optio pariatur porro provident, quaerat quas qui quisquam rerum veritatis voluptates.',
        order: 1,
        lvl_requirement: 1,
        map: 'assets/maps/tavern.jpg',
        soundtrack: null,
        combat_mode: false,
        npcs: [],
        monsters: []
      },

      {
        id: 2,
        title: 'gankup in the woods',
        description: 'Lorem ipsum dolor sit amet, contur porro provident, quaerat quas qui quisquam rerum veritatis voluptates.',
        order: 2,
        lvl_requirement: 2,
        map: 'assets/maps/training-grounds.jpg',
        soundtrack: null,
        combat_mode: true,
        npcs: [],
        monsters: [
          {index: 'wolf', name: 'wolf1', level: 1, image: null},
          // {index: 'wraith', name: 'wraith', level: 8, image: null},
          // {index: 'assassin', name: 'chado', level: 2, image: null},
          {index: 'ancient-brass-dragon', name: 'drogo', level: 10, image: null}
        ]
      }
    ]
    this.scenarioList.sort((s1, s2) => s1.order - s2.order);
  }

  // getScenarios() {
  //     if (this.activeCampaign()?.id) {
  //       this.campaignService.fetchScenarios(this.activeCampaign()!.id).subscribe({
  //         next: scenarios => {
  //           this.scenarioList = scenarios;
  //           this.scenarioList.sort((s1, s2) => s1.order - s2.order);
  //         },
  //         error: err => console.log(`Error fetching scenarios: `, err)
  //       })
  //     }
  // }

  addScenario() {

  }

  updateScenario(id: number) {

  }

  deleteScenario(id: number) {

  }

}
