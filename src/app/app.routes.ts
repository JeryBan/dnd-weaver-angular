import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CampaignPanelComponent} from "./components/campaign-panel/campaign-panel.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'my-campaigns', component: CampaignPanelComponent},
  {path: 'dashboard', component: DashboardComponent},
];
