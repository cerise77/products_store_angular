import { Component, OnInit } from '@angular/core';
import {ListService} from "../../services/list.service";
import {Product} from "../../data/product";
import {BagService} from "../../services/bag.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public products:Array<Product>;
    private sub;
    constructor(
         private ListService:ListService,
         private bagService:BagService,
         private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }
    load = () => {
       this.sub = this.ListService.getProducts('./assets/table.json')
            .subscribe(res => {
                this.products = res;
            })
    };
    addToBag = (product) => {
        this.bagService.addToBag({product,quantity:1})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
