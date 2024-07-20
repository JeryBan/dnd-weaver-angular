import {Component, HostListener, ViewChild} from '@angular/core';
import {PlayerPanelComponent} from "../player-panel/player-panel.component";
import {ScenarioPanelComponent} from "../scenario-panel/scenario-panel.component";
import {MonsterPanelComponent} from "../monster-panel/monster-panel.component";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {Scenario} from "../../shared/interfaces/scenario";
import {ModalsComponent} from "../modals/modals.component";
import {Modal} from "../../shared/interfaces/modal";

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
  modal: Modal = { content: null, type: '' };

  onScenarioSelected(scenario: Scenario) {
    this.activeScenario = scenario;
  }

  showModal(modal: Modal) {
    this.modal = modal;
  }

  @HostListener('window:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const backgroundElement = document.body as HTMLElement;

    if (target === backgroundElement) {
      this.closeModal();
    }

  }

  closeModal(): void {
      this.modal = {content: null, type: ''};
  }

}
