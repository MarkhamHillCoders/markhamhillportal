import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ResourcesComponent } from './components/resources/resources.component';
<<<<<<< HEAD
import { Sidebar2Component } from './components/sidebar2/sidebar2.component';
=======
import { RouterModule, Routes } from '@angular/router';

>>>>>>> fixbuild
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
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

<<<<<<< HEAD
=======
const appRoutes: Routes = [
  {
    path: 'members',
    component: MemberComponent,
    data: { title: 'Members List' }
  },
  { path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  }
];

>>>>>>> fixbuild
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
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
<<<<<<< HEAD
    DirectoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
=======
    DirectoryComponent,
    LoginComponent,
    MemberComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // For debugging!
    )
  ],
  providers: [ UserService, appRoutingProviders ],
  bootstrap: [ AppComponent ]
>>>>>>> fixbuild
})
export class AppModule { }
