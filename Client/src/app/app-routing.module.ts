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
import { AddEventComponent } from "./_Association/event/add-event/add-event.component";
import { ListeEventComponent} from "./_Association/event/liste-event/liste-event.component";
import { WelcomeComponent } from './_Public/welcome/welcome.component';

// Association
import { AddBloodDonationComponent } from "./_Association/blood/add-blood-donation/add-blood-donation.component"
import { MysideComponent } from "./components/myside/myside.component";
import { BloodListVComponent } from "./_Association/blood/blood-list-v/blood-list-v.component"

const routes: Routes = [

  {path:"",component:WelcomeComponent},
  {path:"login",component:LoginComponent},
  // admin views
  { path: "dash", 
    component: MysideComponent,
    children: [
      { path: "add_blood", component: AddBloodDonationComponent },
      { path: "blood_list", component: BloodListVComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "add_blood", component: AddBloodDonationComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
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
