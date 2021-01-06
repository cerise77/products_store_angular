

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {QuantityAddComponent} from "../child-components/quantity-add/quantity-add.component";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
    ],
    declarations:[
        QuantityAddComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        QuantityAddComponent
    ]
})

export class SharedModule {

}
