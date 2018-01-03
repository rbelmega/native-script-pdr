import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from './layouts/home/home.component';
import { TopicComponent } from './layouts/topic/topic.component';
import { FinesComponent } from './layouts/fines/fines.component';
import { SingsComponent } from './layouts/sings/sings.component';
import { SignComponent } from './layouts/sign/sign.component';


const routes = [
  { path: '', component: HomeComponent },
  { path: 'topic/:id', component: TopicComponent },
  { path: 'fines', component: FinesComponent },
  { path: 'signs', component: SingsComponent },
  { path: 'signs/:id', component: SignComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [NativeScriptModule, NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
