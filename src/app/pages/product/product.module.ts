
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../quantity-module/quantity.module";
import {ProductComponent} from "./product.component";

export const productRoutes=[
    {
        path:':id',
        component:ProductComponent
    },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        ProductComponent
    ]
})
export class ProductModule { }
