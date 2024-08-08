import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CampaignService} from "../../shared/services/campaign.service";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  campaignService: CampaignService = inject(CampaignService);
  isMuted = false;

  toggleMute() {
    this.isMuted = !this.isMuted;
  }

  logout() {
    this.campaignService.activeCampaign.set(null);
  }

}
