import {Component, OnInit} from '@angular/core';
import {Player} from "../../shared/interfaces/player";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-player-panel',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './player-panel.component.html',
  styleUrl: './player-panel.component.css'
})
export class PlayerPanelComponent implements OnInit {
  playerList: Player[] = []

  ngOnInit(): void {
    this.getPlayers()
  }

  getPlayers() {
    this.playerList = [
      {id: 1, name: 'fighter', image: 'assets/portraits/fighter.jpg'},
      {id: 2, name: 'ranger', image: 'assets/portraits/ranger.jpg'},
      {id: 3, name: 'wizard', image: 'assets/portraits/wizard.jpg'},
      {id: 4, name: 'rogue', image: 'assets/portraits/rogue.jpg'},
    ];
  }

  addPlayer() {

  }

  updatePlayer(id: number) {

  }

  deletePlayer(id: number) {

  }
}
