import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { PublishedComponent } from './published/published.component';
import { PendingComponent } from './pending/pending.component';
import { DraftComponent } from './draft/draft.component';
import { TrashComponent } from './trash/trash.component';
import { NewArticlesComponent } from './new-articles/new-articles.component';
import { AddBannersComponent } from './add-banners/add-banners.component';
import { MainComponent } from './main/main.component';
import { SignInComponent } from './sign-in/sign-in.component';




const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,

  },


  // { path: 'main/allArticles', component: AllArticlesComponent },
  // { path: 'main/pending', component: PendingComponent },
  // { path: 'draft', component: DraftComponent },
  // { path: 'trash', component: TrashComponent },
  // { path: 'newArticles', component: NewArticlesComponent },
  // { path: 'addBanners', component: AddBannersComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      
      { path: 'allArticles', component: AllArticlesComponent },
      { path: 'published', component: PublishedComponent },

      { path: 'pending', component: PendingComponent },
      { path: 'draft', component: DraftComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'newArticles', component: NewArticlesComponent },
      { path: 'addBanners', component: AddBannersComponent },
    ]
  },
  { path: 'signIn', component: SignInComponent },
  { path: 'published', component: PublishedComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
