import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Player} from "../../shared/interfaces/player";
import {NgOptimizedImage} from "@angular/common";
import {Modal} from "../../shared/interfaces/modal";

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
  @Output() modalContent = new EventEmitter<Modal>();
  modal: Modal = { content: null, type: '' };
  modalState: Boolean = false;
  playerList: Player[] = []

  ngOnInit(): void {
    this.getPlayers()
  }

  showModal(player: Player) {
    this.modal.content = player;
    this.modal.type = 'player';

    this.modalState ? this.modalContent.emit(this.modal) : this.modalContent.emit();
    this.modalState = !this.modalState;
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
