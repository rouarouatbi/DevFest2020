import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { WelcomeComponent } from './_Public/welcome/welcome.component';
import { AddEventComponent } from "./_Association/event/add-event/add-event.component";

// Association
import { AddBloodDonationComponent } from "./_Association/blood/add-blood-donation/add-blood-donation.component"
import { MysideComponent } from "./components/myside/myside.component";
import { BloodListVComponent } from "./_Association/blood/blood-list-v/blood-list-v.component"
import { ListeEventComponent } from "./_Association/event/liste-event/liste-event.component"
import { AddNeedComponent } from "./_Association/needs/add-need/add-need.component";
import { ListNeedComponent } from "./_Association/needs/list-need/list-need.component";

//Volunteer
import { ListBloodComponent } from "./_Volunteer/blood/list-blood/list-blood.component";
import { Profile2Component } from "./_Volunteer/profile/profile.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardBarChartComponent } from './components/cards/card-bar-chart/card-bar-chart.component';
import { CardLineChartComponent } from './components/cards/card-line-chart/card-line-chart.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { AccueilVComponent } from './_Volunteer/accueil-v/accueil-v.component';

const routes: Routes = [

  {path:"",component:WelcomeComponent},
  {path:"login",component:LoginComponent},
  // Association views
 
  // admin views
  { path: "dash", 
    component: MysideComponent,
    children: [
      { path: "add_blood", component: AddBloodDonationComponent },
      { path: "blood_list", component: BloodListVComponent },
      { path: "add_event", component: AddEventComponent },
      { path: "event_list", component: ListeEventComponent },
      { path: "add_need", component: AddNeedComponent },
      { path: "need_list", component: ListNeedComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "add_blood", component: AddBloodDonationComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
    ]
  },

  // Volunteer views
  { path: "user", 
    component: MysideComponent,
    children: [
      { path: "blood_list", component: ListBloodComponent },
      { path: "profile", component: Profile2Component },
      { path:"home",component:AccueilVComponent},
      
    ]
  },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dash", component: MysideComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "add_blood", component: AddBloodDonationComponent },
      { path: "add_event", component: AddEventComponent },
      { path: "list_event", component: ListeEventComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
