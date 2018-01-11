import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'allArticles', title: 'All Articles', icon: 'person', class: '' },
    { path: 'published', title: 'Published', icon: 'person', class: '' },
    { path: 'pending', title: 'Pending', icon: 'person', class: '' },
    { path: 'draft', title: 'Draft', icon: 'person', class: '' },
    { path: 'trash', title: 'Trash', icon: 'person', class: '' },
    { path: 'newArticles', title: 'New Article', icon: 'person', class: 'new' },
];

export const advRoutes: RouteInfo[] = [
    { path: 'addBanners', title: 'addBanners', icon: 'dashboard', class: '' },
];
export const dRoutes: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    adMenuItems: any[];
    showAllArticles = false;
    showAddArticles = false;

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.adMenuItems = advRoutes.filter(adMenu => adMenu)
        // this.adMenu = ROUTES1
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    showAllArticle() {
        if (!this.showAllArticles) {
            this.showAllArticles = true;
            this.showAddArticles = false;
        }
        else {
            this.showAllArticles = false;
        }
    }

    showAddArticle() {
        if (!this.showAddArticles) {
            this.showAddArticles = true;
            this.showAllArticles = false;

        }
        else {
            this.showAddArticles = false;
        }
    }

}
