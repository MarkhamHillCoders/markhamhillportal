import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Sidebar2Component } from './components/sidebar2/sidebar2.component';
import { FooterComponent } from './components/footer/footer.component';

import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LocationComponent } from './components/location/location.component';
import { WeatherComponent } from './components/weather/weather.component';

import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserService } from './user/user.service';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { DirectoryComponent } from './components/directory/directory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AboutComponent,
    ResourcesComponent,
    NavbarComponent,
    Sidebar2Component,
    PortfolioComponent,
    LocationComponent,
    WeatherComponent,
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
    DirectoryComponent,
    LoginComponent
  ],
  imports:   [ BrowserModule, routing ],
  providers: [ UserService, appRoutingProviders ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
