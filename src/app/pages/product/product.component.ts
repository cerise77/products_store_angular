import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListService} from "../../services/list.service";
import {Product} from "../../data/product";
import {BagService} from "../../services/bag.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
                private ListService:ListService,
                private bagService:BagService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    getProduct = (id) => {
        this.sub = this.ListService.getProducts('./assets/table.json')
            .subscribe(res => {
                this.product = res[id-1];
            })
    };
    addQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };
    addToBag = (product) => {
        if(this.quantity) this.bagService.addToBag({product,quantity:this.quantity})
    };
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
