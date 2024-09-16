import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription, take} from "rxjs";
import {Campaign} from "../../shared/interfaces/campaign";
import {Router, RouterLink} from "@angular/router";
import {CampaignService} from "../../shared/services/campaign.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-campaign-panel',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './campaign-panel.component.html',
  styleUrl: './campaign-panel.component.css'
})
export class CampaignPanelComponent implements OnInit, OnDestroy {
  campaignService: CampaignService = inject(CampaignService);
  router: Router = inject(Router);
  formBuilder: FormBuilder = inject(FormBuilder);
  campaignList: Campaign[] = [];
  sub: Subscription | undefined;
  createMode: boolean = false;
  campaignForm!: FormGroup;

  ngOnInit() {
   this.getCampaigns();

   this.campaignForm = this.formBuilder.group({
     title: ['', Validators.required],
     description: ['']
   })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  // getCampaigns() {
  //   this.campaignList = [
  //     {id: 1, title: "first campaign", description: "jdoashdos osadoADJAS ASDPJOSDJSAD AOSD DOASID"},
  //     {id: 2, title: "second campaign", description: "jdoashdos osadoADJAS ASDPJOSDJSAD AOSD DOASID"},
  //   ]
  // }

  selectCampaign(campaign: Campaign) {
    this.campaignService.activeCampaign.set(campaign);
    this.router.navigate(['/dashboard']);
  }

  getCampaigns() {
    this.sub = this.campaignService.fetchCampaigns().subscribe({
      next: (campaigns: Campaign[]) => this.campaignList = campaigns,
      error: err => console.log(`Error fetching campaigns: `, err)
    });
  }

  createCampaign() {
    const campaign: Campaign = {
      id: null,
      title: this.campaignForm.value.title,
      description: this.campaignForm.value.description,
      image: '',
      scenarios: []
    }
    this.campaignService.insertCampaign(campaign).pipe(take(1)).subscribe({
      next: (campaign: Campaign) => {
        this.campaignService.activeCampaign.set(campaign);
        this.campaignList.push(campaign)
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        console.log('Error creating new campaign: ', err)
      }
    })
  }

}
