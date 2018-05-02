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
            selector: "my-app",
            template: "\n<ActionBar title=\"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0440\u043E\u0436\u043D\u044C\u043E\u0433\u043E \u0440\u0443\u0445\u0443\">\n    <ActionItem ios.systemIcon=\"21\" ios.position=\"left\" (tap)=\"onNavBtnTap()\"></ActionItem>\n  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n</ActionBar>\n    <DockLayout stretchLastChild=\"true\">\n  <GridLayout dock=\"bottom\" height=\"60\" columns=\"*, *, *, *\" rows=\"*\">\n    <Button [nsRouterLink]=\"['/']\" text=\"main\" row=\"0\"  col=\"0\"></Button>\n    <Button [nsRouterLink]=\"['/signs']\" text=\"sings\" row=\"0\" col=\"1\"></Button>\n    <Button [nsRouterLink]=\"['/fines']\" text=\"fines\" row=\"0\" col=\"2\"></Button>\n    <Button [nsRouterLink]=\"['/search']\" text=\"search\" row=\"0\" col=\"3\"></Button>\n</GridLayout>\n    <router-outlet  dock=\"top\"></router-outlet>\n\n</DockLayout>\n  "
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFDeEMsc0RBQTZEO0FBcUI3RDtJQUVJLHNCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDO0lBRU0sa0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQVhRLFlBQVk7UUFuQnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsaTdCQWVYO1NBQ0YsQ0FBQzt5Q0FHd0MseUJBQWdCO09BRjdDLFlBQVksQ0FZeEI7SUFBRCxtQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxBY3Rpb25CYXIgdGl0bGU9XCLQn9GA0LDQstC40LvQsCDQtNC+0YDQvtC20L3RjNC+0LPQviDRgNGD0YXRg1wiPlxuICAgIDxBY3Rpb25JdGVtIGlvcy5zeXN0ZW1JY29uPVwiMjFcIiBpb3MucG9zaXRpb249XCJsZWZ0XCIgKHRhcCk9XCJvbk5hdkJ0blRhcCgpXCI+PC9BY3Rpb25JdGVtPlxuICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVwiR28gQmFja1wiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfYmFja1wiICh0YXApPVwib25OYXZCdG5UYXAoKVwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cbjwvQWN0aW9uQmFyPlxuICAgIDxEb2NrTGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XCJ0cnVlXCI+XG4gIDxHcmlkTGF5b3V0IGRvY2s9XCJib3R0b21cIiBoZWlnaHQ9XCI2MFwiIGNvbHVtbnM9XCIqLCAqLCAqLCAqXCIgcm93cz1cIipcIj5cbiAgICA8QnV0dG9uIFtuc1JvdXRlckxpbmtdPVwiWycvJ11cIiB0ZXh0PVwibWFpblwiIHJvdz1cIjBcIiAgY29sPVwiMFwiPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gW25zUm91dGVyTGlua109XCJbJy9zaWducyddXCIgdGV4dD1cInNpbmdzXCIgcm93PVwiMFwiIGNvbD1cIjFcIj48L0J1dHRvbj5cbiAgICA8QnV0dG9uIFtuc1JvdXRlckxpbmtdPVwiWycvZmluZXMnXVwiIHRleHQ9XCJmaW5lc1wiIHJvdz1cIjBcIiBjb2w9XCIyXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBbbnNSb3V0ZXJMaW5rXT1cIlsnL3NlYXJjaCddXCIgdGV4dD1cInNlYXJjaFwiIHJvdz1cIjBcIiBjb2w9XCIzXCI+PC9CdXR0b24+XG48L0dyaWRMYXlvdXQ+XG4gICAgPHJvdXRlci1vdXRsZXQgIGRvY2s9XCJ0b3BcIj48L3JvdXRlci1vdXRsZXQ+XG5cbjwvRG9ja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmF2QnRuVGFwKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG59XG4iXX0=