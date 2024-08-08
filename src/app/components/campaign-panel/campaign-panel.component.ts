import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Campaign} from "../../shared/interfaces/campaign";
import {RouterLink} from "@angular/router";
import {CampaignService} from "../../shared/services/campaign.service";


@Component({
  selector: 'app-campaign-panel',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './campaign-panel.component.html',
  styleUrl: './campaign-panel.component.css'
})
export class CampaignPanelComponent implements OnInit, OnDestroy {
  campaignService: CampaignService = inject(CampaignService);
  campaignList: Campaign[] = [];
  sub: Subscription | undefined;

  ngOnInit() {
   this.getCampaigns();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  getCampaigns() {
    this.campaignList = [
      {id: 1, title: "first campaign", description: "jdoashdos osadoADJAS ASDPJOSDJSAD AOSD DOASID", image: null},
      {id: 1, title: "first campaign", description: "jdoashdos osadoADJAS ASDPJOSDJSAD AOSD DOASID", image: null},
    ]
  }

  selectCampaign(campaign: Campaign) {
    this.campaignService.activeCampaign.set(campaign);
  }


  // getCampaigns() {
  //   this.sub = this.campaignService.fetchCampaigns().subscribe({
  //     next: (campaigns: Campaign[]) => this.campaignList = campaigns,
  //     error: err => console.log(`Error fetching campaigns: `, err)
  //   });
  // }

}
