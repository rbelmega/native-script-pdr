import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'my-app',
  styles: [
    `
      .router-link-active {
        background: red;
        color: red;
      }
    `,
  ],
  template: `
<ActionBar title="Правила дорожнього руху">
  <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" (tap)="onNavBtnTap()"></NavigationButton>
</ActionBar>
<StackLayout>
    <page-router-outlet></page-router-outlet>
</StackLayout>
  `,
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  public onNavBtnTap() {
    this.routerExtensions.back();
  }

  public goToHome() {
    this.routerExtensions.back();
  }
}
