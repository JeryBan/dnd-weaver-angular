import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Modal} from "../../shared/interfaces/modal";
import {environment} from "../../../environments/environment";
import {DndApiService} from "../../shared/services/dnd-api.service";
import {Monster} from "../../shared/interfaces/monster";
import {Subscription} from "rxjs";

const apiUrl = environment.dnd5api;

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent implements OnInit, OnDestroy {
  @Input() modal: Modal | undefined;
  apiService: DndApiService = inject(DndApiService);
  combatMode: boolean = false;
  availableMonsters: Monster[] = [];
  selectedMonsters = new Set<Monster>;
  sub: Subscription | undefined;

  ngOnInit(): void {
    this.searchAvailableMonsters();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  searchAvailableMonsters() {
    this.sub = this.apiService.getAvailableMonsters().subscribe({
      next: data => {this.availableMonsters = data.results;},
      error: err => {console.log("Error fetching availableMonsters", err);}
    })
  }

  addMonster(monster: Monster) {
    this.selectedMonsters.add(monster);
  }

  removeMonster(monster: Monster) {
    this.selectedMonsters.delete(monster);
  }

  deleteScenario(scenarioId: number): void {

  }

  protected readonly apiUrl = apiUrl;
}
