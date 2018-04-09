import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LocationComponent } from './location/location.component';
import { WeatherComponent } from './weather/weather.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
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
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
