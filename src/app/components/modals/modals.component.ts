import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Modal} from "../../shared/interfaces/modal";
import {environment} from "../../../environments/environment";

const apiUrl = environment.dnd5api;

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {
  @Input() modal: Modal | undefined;

  protected readonly apiUrl = apiUrl;
}
