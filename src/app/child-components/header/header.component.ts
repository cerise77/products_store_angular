
import { Component, OnInit } from '@angular/core';
import {BagService} from "../../services/bag.service";

@Component({
    selector: 'header-bar',
    styleUrls: ['./header.component.css'],
    template: `
    <div class="main-header navbar-fixed-top">
        <div class="header-menu">
            <div class="header-mobile-nav-wrapper">
                <button type="button" class="navbar-toggle" (click)="collapse = !collapse">
                    <span class="fa fa-bars fa-2x"></span>
                </button>
            </div>
            <div class="header-logo-wrapper">

            </div>
            <div class="header-nav-wrapper">
                <ul class="header-nav">
                    <li class="header-nav-item">
                        <a routerLink="/">Home</a>
                    </li>
                    <li class="header-nav-item">
                        <a routerLink="/">Women</a>
                    </li>
                    <li class="header-nav-item">
                        <a routerLink="/">Sale</a>
                    </li>
                </ul>
            </div>
            <div class="header-cart-wrapper">
                <div class="header-cart" (click)="toggleBagPopup($event)">
                    <div class="mobil-shopping-bag">
                        <span><i class="fa fa-shopping-bag fa-2x"></i> <span *ngIf="bag_num">( {{bag_num}} )</span></span>
                    </div>
                    <div class="header-cart-item">
                        <a href="">MY BAG <span *ngIf="bag_num">( {{bag_num}} )</span><span class="fa fa-caret-down"></span></a>
                    </div>
                </div>
            </div>
        </div>
        <ul class="mobile-header-nav" *ngIf="collapse" (click)="collapse = !collapse">
            <li>
                <a routerLink="/">HOME</a>
            </li>
            <li>
                <a routerLink="/">SHOP</a>
            </li>
            <li>
                <a routerLink="/">JOURNAL</a>
            </li>
        </ul>

    </div>
`
})
export class HeaderComponent implements OnInit {
    public collapse: boolean = false;
    public bag_num:number;
    constructor(
        private bagService: BagService
    ) { }

    ngOnInit() {
        this.bagService.bagListSubject
            .subscribe(res => {
                this.bag_num = res.length;
            })
    }
    toggleBagPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.bagService.toggleBag()
    }
}
