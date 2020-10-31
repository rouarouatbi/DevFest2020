import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//auth

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

//utils
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms'


// auth 
import { LoginComponent } from "./_Association/auth/login/login.component";
import { RegisterComponent } from "./_Association/auth/register/register.component";
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { AuthGuard } from './_helper/auth.guard'; 

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { WelcomeComponent } from './_Public/welcome/welcome.component';
import { AboutusComponent } from './_Public/aboutus/aboutus.component';
import { AddEventComponent } from './_Association/event/add-event/add-event.component';
import { ListeEventComponent } from './_Association/event/liste-event/liste-event.component';
import { ListBloodComponent } from './_Volunteer/blood/list-blood/list-blood.component';
import { AddNeedComponent } from './_Association/needs/add-need/add-need.component';
import { ListNeedComponent } from './_Association/needs/list-need/list-need.component';
import { FooterWelcomeComponent } from './components/footers/footer-welcome/footer-welcome.component';
import { AddBloodDonationComponent } from './_Association/blood/add-blood-donation/add-blood-donation.component';
import { MysideComponent } from './components/myside/myside.component';
import { MyheaderComponent } from './components/headers/myheader/myheader.component';
import { FormComponent } from './_Association/blood/form/form.component';
import { BloodListVComponent } from './_Association/blood/blood-list-v/blood-list-v.component';
import { BlistComponent } from './_Association/blood/blist/blist.component';

import { NformComponent } from './_Association/needs/nform/nform.component';
import { NlistComponent } from './_Association/needs/nlist/nlist.component';
import { UsersideComponent } from './components/userside/userside.component';
import { UserComponent } from './layouts/user/user.component';
import { Profile2Component } from './_Volunteer/profile/profile.component';
import { AccueilVComponent } from './_Volunteer/accueil-v/accueil-v.component';
import { CardVolunteerComponent } from './components/cards/card-volunteer/card-volunteer.component';
import { DetailsComponent } from './_Volunteer/blood/details/details.component';

import { ProfileAsComponent } from './_Volunteer/profile-as/profile-as.component';
import { CardProfComponent } from './components/cards/card-prof/card-prof.component';
import { OtherDonationListComponent } from './_Volunteer/other-donation-list/other-donation-list.component';
import { CardOtherDonationComponent } from './components/cards/card-other-donation/card-other-donation.component';
import { HelpComponent } from './_Volunteer/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    Profile2Component,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
    WelcomeComponent,
    AboutusComponent,
    AddEventComponent,
    ListeEventComponent,
    ListBloodComponent,
    FooterWelcomeComponent  ,
    AddNeedComponent,
    ListNeedComponent,
    FooterWelcomeComponent ,

    AddBloodDonationComponent,
    MysideComponent,
    MyheaderComponent,
    FormComponent,
    BloodListVComponent,
    BlistComponent,
    NformComponent,
    NlistComponent,
    UsersideComponent,
    UserComponent,
    AccueilVComponent,
    CardVolunteerComponent,
    DetailsComponent,
    ProfileAsComponent,
    CardProfComponent,
    OtherDonationListComponent,
    CardOtherDonationComponent,
    HelpComponent,
  ],
     
    
  imports: [BrowserModule, AppRoutingModule,
    HttpClientModule,
    // ReactiveFormsModule,
     FormsModule,
     AppRoutingModule,
     ReactiveFormsModule,],
  providers: [ 
    AuthGuard,
    JwtInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent],
})
export class AppModule {}
