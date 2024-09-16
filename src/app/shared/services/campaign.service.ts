import {effect, inject, Injectable, signal} from '@angular/core';
import {Observable} from "rxjs";
import {Campaign} from "../interfaces/campaign";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Scenario} from "../interfaces/scenario";

const serverUrl = environment.server;
const headers = {
  Accept: 'application/json',
  Authorization: `Token ${localStorage.getItem('access_token')}`
};

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  http: HttpClient = inject(HttpClient);
  activeCampaign = signal<Campaign | null>(null);
  activeScenario = signal<Scenario | null>(null);

  constructor() {
    effect( () => {
      if (this.activeCampaign()) {
        console.log('Campaign <' + this.activeCampaign()?.title + '> selected.')
      }
      if (this.activeScenario()) {
        console.log('Scenario <' + this.activeScenario()?.title + '> selected.')
      }
    })
  }

  fetchCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(serverUrl + "/campaigns/", {headers: headers});
  }

  insertCampaign(campaign: Campaign): Observable<Campaign> {
    return this.http.post<Campaign>(serverUrl + "/campaign/" , campaign, {headers: headers});
  }

  deleteCampaign(id: number){
    return this.http.delete<Campaign>(serverUrl + "/campaign/" + id, {headers: headers});
  }

  fetchScenarios(campaignId: number | null): Observable<Scenario[]> {
    return this.http.get<Scenario[]>(serverUrl + `/${campaignId}` + '/scenarios', {headers: headers});
  }
}
