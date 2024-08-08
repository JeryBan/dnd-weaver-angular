import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CampaignPanelComponent} from "./components/campaign-panel/campaign-panel.component";

export const routes: Routes = [
  {path: '', component: CampaignPanelComponent},
  {path: 'my-campaigns', component: CampaignPanelComponent},
  {path: 'dashboard', component: DashboardComponent},
];
