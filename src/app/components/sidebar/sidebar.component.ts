import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'allArticles', title: 'All Articles',  icon:'person', class: '' }, 
    { path: 'published', title: 'Published',  icon:'person', class: '' },
    { path: 'pending', title: 'Pending',  icon:'person', class: '' }, 
    { path: 'draft', title: 'Draft',  icon:'person', class: '' },  
    { path: 'trash', title: 'Trash',  icon:'person', class: '' },  
     
      
    // { path: 'user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: 'table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  showAllArticles = false;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  showAllArticle(){
      if(!this.showAllArticles){
          this.showAllArticles = true;
      }
      else{
          this.showAllArticles= false;
      }
  }
}
