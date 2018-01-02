import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from "./app.component";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './layouts/home/home.component';
import { TopicComponent } from './layouts/topic/topic.component';
import { FinesComponent } from './layouts/fines/fines.component';


import {DataService} from './services/data.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TopicComponent,
        FinesComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        NativeScriptModule
    ],
    providers: [
        DataService,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
