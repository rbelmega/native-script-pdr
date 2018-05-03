"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AppComponent = (function () {
    function AppComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    AppComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    AppComponent.prototype.goToHome = function () {
        this.routerExtensions.back();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<ActionBar title=\"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0440\u043E\u0436\u043D\u044C\u043E\u0433\u043E \u0440\u0443\u0445\u0443\">\n    <ActionItem ios.systemIcon=\"21\" ios.position=\"left\" (tap)=\"onNavBtnTap()\"></ActionItem>\n  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n</ActionBar>\n    <DockLayout stretchLastChild=\"true\">\n  <GridLayout dock=\"bottom\" height=\"60\" columns=\"*, *, *, *\" rows=\"*\">\n    <Button [nsRouterLink]=\"['/']\" text=\"main\" row=\"0\"  col=\"0\"></Button>\n    <Button [nsRouterLink]=\"['/signs']\" text=\"sings\" row=\"0\" col=\"1\"></Button>\n    <Button [nsRouterLink]=\"['/fines']\" text=\"fines\" row=\"0\" col=\"2\"></Button>\n    <Button [nsRouterLink]=\"['/search']\" text=\"search\" row=\"0\" col=\"3\"></Button>\n</GridLayout>\n    <router-outlet  dock=\"top\"></router-outlet>\n\n</DockLayout>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQStEO0FBcUIvRDtJQUNFLHNCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFbkQsa0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQVRVLFlBQVk7UUFuQnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsaTdCQWVUO1NBQ0YsQ0FBQzt5Q0FFc0MseUJBQWdCO09BRDNDLFlBQVksQ0FVeEI7SUFBRCxtQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGU6IGBcbjxBY3Rpb25CYXIgdGl0bGU9XCLQn9GA0LDQstC40LvQsCDQtNC+0YDQvtC20L3RjNC+0LPQviDRgNGD0YXRg1wiPlxuICAgIDxBY3Rpb25JdGVtIGlvcy5zeXN0ZW1JY29uPVwiMjFcIiBpb3MucG9zaXRpb249XCJsZWZ0XCIgKHRhcCk9XCJvbk5hdkJ0blRhcCgpXCI+PC9BY3Rpb25JdGVtPlxuICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVwiR28gQmFja1wiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiICh0YXApPVwib25OYXZCdG5UYXAoKVwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbjwvQWN0aW9uQmFyPlxuICAgIDxEb2NrTGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XCJ0cnVlXCI+XG4gIDxHcmlkTGF5b3V0IGRvY2s9XCJib3R0b21cIiBoZWlnaHQ9XCI2MFwiIGNvbHVtbnM9XCIqLCAqLCAqLCAqXCIgcm93cz1cIipcIj5cbiAgICA8QnV0dG9uIFtuc1JvdXRlckxpbmtdPVwiWycvJ11cIiB0ZXh0PVwibWFpblwiIHJvdz1cIjBcIiAgY29sPVwiMFwiPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gW25zUm91dGVyTGlua109XCJbJy9zaWducyddXCIgdGV4dD1cInNpbmdzXCIgcm93PVwiMFwiIGNvbD1cIjFcIj48L0J1dHRvbj5cbiAgICA8QnV0dG9uIFtuc1JvdXRlckxpbmtdPVwiWycvZmluZXMnXVwiIHRleHQ9XCJmaW5lc1wiIHJvdz1cIjBcIiBjb2w9XCIyXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBbbnNSb3V0ZXJMaW5rXT1cIlsnL3NlYXJjaCddXCIgdGV4dD1cInNlYXJjaFwiIHJvdz1cIjBcIiBjb2w9XCIzXCI+PC9CdXR0b24+XG48L0dyaWRMYXlvdXQ+XG4gICAgPHJvdXRlci1vdXRsZXQgIGRvY2s9XCJ0b3BcIj48L3JvdXRlci1vdXRsZXQ+XG5cbjwvRG9ja0xheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gIHB1YmxpYyBvbk5hdkJ0blRhcCgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG5cbiAgcHVibGljIGdvVG9Ib21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==