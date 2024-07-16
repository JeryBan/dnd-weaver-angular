import {Component, OnInit} from '@angular/core';
import {Monster} from "../../shared/interfaces/monster";

@Component({
  selector: 'app-monster-panel',
  standalone: true,
  imports: [],
  templateUrl: './monster-panel.component.html',
  styleUrl: './monster-panel.component.css'
})
export class MonsterPanelComponent implements OnInit{
  monsterList: Monster[] = []

  ngOnInit() {
    this.getMonsters();
  }

  getMonsters() {
    this
  }

  addMonster() {

  }

  updateMonster(id: number) {

  }

  deleteMonster(id: number) {

  }
}
