import { Component } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  selector: "my-app",
  template: `
<ActionBar title="Правила дорожнього руху">
    <ActionItem ios.systemIcon="21" ios.position="left" (tap)="onNavBtnTap()"></ActionItem>
  <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" (tap)="onNavBtnTap()"></NavigationButton>
</ActionBar>
    <DockLayout stretchLastChild="true">
  <GridLayout dock="bottom" height="60" columns="*, *, *, *" rows="*">
    <Button 
        text="Main"
        row="0"
        col="0"
        [nsRouterLink]="['/']" 
    ></Button>
    <Button text="sings" row="0" col="1"></Button>
    <Button text="fines" row="0" col="2"></Button>
    <Button text="search" row="0" col="3"></Button>
</GridLayout>
    <router-outlet  dock="top"></router-outlet>

</DockLayout>
  `
})
export class AppComponent {

  constructor(private routerExtensions: RouterExtensions){}

    public onNavBtnTap() {
        this.routerExtensions.back();
    }
    public goToHome() {
        this.routerExtensions.back();
    }
}
