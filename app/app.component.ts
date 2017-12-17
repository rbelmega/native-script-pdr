import { Component } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: "my-app",
  template: `
<ActionBar title="Правила дорожнього руху">
  <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" 
    (tap)="onNavBtnTap()"></NavigationButton>
</ActionBar>
    <WrapLayout> 
                          <router-outlet></router-outlet>
        </WrapLayout>
  `
})
export class AppComponent {

  constructor(private routerExtensions: RouterExtensions){}

    public onNavBtnTap() {
        this.routerExtensions.back();
    }
}
