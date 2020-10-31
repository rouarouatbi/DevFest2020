import { NgModule } from "@angular/core";
import { Routes, RouterModule,PreloadAllModules } from "@angular/router";


// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./_Association/auth/login/login.component";
import { RegisterComponent } from "./_Association/auth/register/register.component";
import { AuthGuard } from './_helper/auth.guard';



// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { AddEventComponent } from "./_Association/event/add-event/add-event.component";

import { WelcomeComponent } from './_Public/welcome/welcome.component';


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
import { AccueilVComponent } from './_Volunteer/accueil-v/accueil-v.component';
import { UsersideComponent } from "./components/userside/userside.component";
import { DetailsComponent } from "./_Volunteer/blood/details/details.component";
import { ProfileAsComponent } from './_Volunteer/profile-as/profile-as.component';
import { HelpComponent } from "./_Volunteer/help/help.component"
import { OtherDonationListComponent} from './_Volunteer/other-donation-list/other-donation-list.component';

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
    ],
    canActivate : [AuthGuard]
  },

  // Volunteer views
  { path: "user", 
    component: UsersideComponent,
    children: [
      { path: "blood_list", component: ListBloodComponent },
      { path: "profile", component: Profile2Component },
      { path :"other_donation_list", component: OtherDonationListComponent},
      { path:"home",component:AccueilVComponent},
      { path:"rdv",component:DetailsComponent},
      { path:"help",component:HelpComponent},
      { path:"profile_as",component:ProfileAsComponent}
      
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
