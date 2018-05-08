import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentsModule, routes } from './components.module';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    NativeScriptModule,
    NativeScriptRouterModule.forRoot(routes),
  ],
  providers: [DataService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
