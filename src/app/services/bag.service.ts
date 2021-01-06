
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../data/product";
import {Bag} from "../data/bag";

@Injectable()
export class BagService {

    public bagListSubject = new BehaviorSubject([]);
    public toggleBagSubject = new BehaviorSubject(false);

    toggleBag = () => {
        this.toggleBagSubject.next(!this.toggleBagSubject.getValue());
    };
    addToBag = (bag:Bag) => {
        let current = this.bagListSubject.getValue();
        let dup = current.find(c=>c.product.title === bag.product.title);
        if(dup) dup.quantity += bag.quantity;
        else current.push(bag);
        this.bagListSubject.next(current);
    };
    reloadBag = (bagList) => {
        this.bagListSubject.next(bagList);
    };
    removeBag = index => {
        let current = this.bagListSubject.getValue();
        current.splice(index,1);
        this.bagListSubject.next(current);
    };
}
