import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  modalState: Boolean = false;
  @Output() modalContent = new EventEmitter<Player>();

  ngOnInit(): void {
    this.getPlayers()
  }

  showModal(player: Player) {
      this.modalState ? this.modalContent.emit(player) : this.modalContent.emit();
      this.modalState = !this.modalState;
  }

  getPlayers() {
    this.playerList = [
      {id: 1, modalType: 'player', name: 'fighter', image: 'assets/portraits/fighter.jpg'},
      {id: 2, modalType: 'player', name: 'ranger', image: 'assets/portraits/ranger.jpg'},
      {id: 3, modalType: 'player', name: 'wizard', image: 'assets/portraits/wizard.jpg'},
      {id: 4, modalType: 'player', name: 'rogue', image: 'assets/portraits/rogue.jpg'},
    ];
  }

  addPlayer() {

  }

  updatePlayer(id: number) {

  }

  deletePlayer(id: number) {

  }
}
