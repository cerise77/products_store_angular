import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

import {appRoutes} from "./app.routes";
import {HeaderComponent} from "./child-components/header/header.component";
import {BagService} from "./services/bag.service";
import {ListService} from "./services/list.service";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [BagService,ListService],
    bootstrap: [AppComponent]
})
export class AppModule { }
