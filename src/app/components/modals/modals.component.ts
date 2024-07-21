import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Modal} from "../../shared/interfaces/modal";

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [],
  templateUrl: './modals.component.html',
  styleUrl: './modals.component.css'
})
export class ModalsComponent {
  @Input() modal: Modal | undefined;

}
