import {effect, inject, Injectable, signal} from '@angular/core';
import {Observable} from "rxjs";
import {Campaign} from "../interfaces/campaign";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Scenario} from "../interfaces/scenario";

const backendUrl = environment.backend;
const headers = {Accept: 'application/json'};

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  http: HttpClient = inject(HttpClient);
  activeCampaign = signal<Campaign | null>(null);

  constructor() {
    effect( () => {
      if (this.activeCampaign()) {
        console.log('Campaign <' + this.activeCampaign()?.title + '> selected.')
      }
    })
  }

  fetchCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(backendUrl + "/campaigns/", {headers: headers});
  }

  fetchScenarios(campaignId: number | null): Observable<Scenario[]> {
    return this.http.get<Scenario[]>(backendUrl + `/${campaignId}` + '/scenarios', {headers: headers});
  }
}
