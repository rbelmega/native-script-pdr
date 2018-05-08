import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-component',
  template: `
<DockLayout stretchLastChild="true">
  <GridLayout dock="bottom" height="60" columns="*, *, *, *" rows="*">
    <Button [nsRouterLink]="['/home']" nsRouterActive="router-link-active" text="main" row="0" col="0"></Button>
    <Button [nsRouterLink]="['/home/signs']" text="sings" row="0" col="1"></Button>
    <Button [nsRouterLink]="['/home/fines']" text="fines" row="0" col="2"></Button>
    <Button [nsRouterLink]="['/home/search']" text="search" row="0" col="3"></Button>
</GridLayout>
    <router-outlet dock="top"></router-outlet>
</DockLayout>
`,
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
