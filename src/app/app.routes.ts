import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CampaignPanelComponent} from "./components/campaign-panel/campaign-panel.component";
import {LoginComponent} from "./components/login/login.component";
import {authenticationGuard} from "./shared/guards/authentication.guard";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'my-campaigns', component: CampaignPanelComponent, canActivate: [authenticationGuard]},
  {path: 'dashboard', component: DashboardComponent},
];
