import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AllArticlesComponent } from './all-articles/all-articles.component'; 

import { MatCardModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material';
import { PublishedComponent } from './published/published.component';
import { PendingComponent } from './pending/pending.component';
import { DraftComponent } from './draft/draft.component';
import { TrashComponent } from './trash/trash.component';
import { NewArticlesComponent } from './new-articles/new-articles.component';
import { AddBannersComponent } from './add-banners/add-banners.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LandingComponent } from './landing/landing.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AllArticlesComponent,
    PublishedComponent,
    PendingComponent,
    DraftComponent,
    TrashComponent,
    NewArticlesComponent,
    AddBannersComponent,
    MainComponent,
    SignInComponent,
    LandingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    // MatInputModule,
    // MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
