
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../quantity-module/quantity.module";
import {ListComponent} from "./list.component";
import { BoldDirective } from './light.directive';

export const listRoutes=[
    {
        path:'',
        component:ListComponent
    },
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(listRoutes)
    ],
    declarations: [
        ListComponent, BoldDirective
    ]
})
export class ListModule { }
