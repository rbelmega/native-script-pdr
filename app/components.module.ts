import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { MainComponent } from './layouts/main/main.component';
import { HomeComponent } from './layouts/home/home.component';
import { TopicComponent } from './components/topic/topic.component';
import { FinesComponent } from './layouts/fines/fines.component';
import { SingsComponent } from './layouts/sings/sings.component';
import { SignComponent } from './components/sign/sign.component';
import { SearchComponent } from './layouts/search/search.component';
import { SearchPipe } from './pipes/search.pipe';

const COMPONENTS = [
  MainComponent,
  HomeComponent,
  TopicComponent,
  FinesComponent,
  SignComponent,
  SingsComponent,
  SearchComponent,
  SearchPipe,
];

export const routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'topic/:id', component: TopicComponent },
      { path: 'fines', component: FinesComponent },
      { path: 'signs', component: SingsComponent },
      { path: 'signs/:id', component: SignComponent },
      { path: 'search', component: SearchComponent },
    ],
  },
];

@NgModule({
  imports: [NativeScriptModule, NativeScriptRouterModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS, NativeScriptModule, NativeScriptRouterModule],
})
export class ComponentsModule {}
