
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'quantity-add',
    styleUrls: ['./quantity-add.component.css'],
    template: `
    <div class="number">
        <input class="input-style" type="number" [ngModel]="quantity" (ngModelChange)="onChange.emit($event)">
    </div>
    <div class="actions">
        <div (click)="plus()" class="noselect">+</div>
        <div (click)="minus()" class="noselect">-</div>
    </div>
`
})
export class QuantityAddComponent implements OnInit {
    @Input() quantity: number;
    @Output() onChange = new EventEmitter<number>();
    constructor() { }

    ngOnInit() { }
    plus = () =>{
        if (this.quantity < 1000){
            this.quantity++;
            this.onChange.emit(this.quantity);
        }
    };
    minus = () => {
        if (this.quantity > 1){
            this.quantity--;
            this.onChange.emit(this.quantity);
        }
    }
}
