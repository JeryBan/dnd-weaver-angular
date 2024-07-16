import { Component } from '@angular/core';
import {Player} from "../../shared/interfaces/player";

@Component({
  selector: 'app-player-panel',
  standalone: true,
  imports: [],
  templateUrl: './player-panel.component.html',
  styleUrl: './player-panel.component.css'
})
export class PlayerPanelComponent {
  playerList: Player[] = []

  getPlayers() {

  }

  addPlayer() {

  }

  updatePlayer(id: number) {

  }

  deletePlayer(id: number) {

  }
}
