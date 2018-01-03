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
            template: "\n<ActionBar title=\"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0440\u043E\u0436\u043D\u044C\u043E\u0433\u043E \u0440\u0443\u0445\u0443\">\n    <ActionItem ios.systemIcon=\"21\" ios.position=\"left\" (tap)=\"onNavBtnTap()\"></ActionItem>\n  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n</ActionBar>\n    <DockLayout stretchLastChild=\"true\">\n  <GridLayout dock=\"bottom\" height=\"60\" columns=\"*, *, *, *\" rows=\"*\">\n    <Button \n        text=\"Main\"\n        row=\"0\"\n        col=\"0\"\n        [nsRouterLink]=\"['/']\" \n    ></Button>\n    <Button [nsRouterLink]=\"['/signs']\" text=\"sings\" row=\"0\" col=\"1\"></Button>\n    <Button [nsRouterLink]=\"['/fines']\" text=\"fines\" row=\"0\" col=\"2\"></Button>\n    <Button text=\"search\" row=\"0\" col=\"3\"></Button>\n</GridLayout>\n    <router-outlet  dock=\"top\"></router-outlet>\n\n</DockLayout>\n  "
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQTZEO0FBMEI3RDtJQUVFLHNCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFFLENBQUM7SUFFaEQsa0NBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNNLCtCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQVRRLFlBQVk7UUF4QnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsNjdCQW9CVDtTQUNGLENBQUM7eUNBR3NDLHlCQUFnQjtPQUYzQyxZQUFZLENBVXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuPEFjdGlvbkJhciB0aXRsZT1cItCf0YDQsNCy0LjQu9CwINC00L7RgNC+0LbQvdGM0L7Qs9C+INGA0YPRhdGDXCI+XG4gICAgPEFjdGlvbkl0ZW0gaW9zLnN5c3RlbUljb249XCIyMVwiIGlvcy5wb3NpdGlvbj1cImxlZnRcIiAodGFwKT1cIm9uTmF2QnRuVGFwKClcIj48L0FjdGlvbkl0ZW0+XG4gIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XCJHbyBCYWNrXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVwiaWNfbWVudV9iYWNrXCIgKHRhcCk9XCJvbk5hdkJ0blRhcCgpXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxuPC9BY3Rpb25CYXI+XG4gICAgPERvY2tMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cInRydWVcIj5cbiAgPEdyaWRMYXlvdXQgZG9jaz1cImJvdHRvbVwiIGhlaWdodD1cIjYwXCIgY29sdW1ucz1cIiosICosICosICpcIiByb3dzPVwiKlwiPlxuICAgIDxCdXR0b24gXG4gICAgICAgIHRleHQ9XCJNYWluXCJcbiAgICAgICAgcm93PVwiMFwiXG4gICAgICAgIGNvbD1cIjBcIlxuICAgICAgICBbbnNSb3V0ZXJMaW5rXT1cIlsnLyddXCIgXG4gICAgPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gW25zUm91dGVyTGlua109XCJbJy9zaWducyddXCIgdGV4dD1cInNpbmdzXCIgcm93PVwiMFwiIGNvbD1cIjFcIj48L0J1dHRvbj5cbiAgICA8QnV0dG9uIFtuc1JvdXRlckxpbmtdPVwiWycvZmluZXMnXVwiIHRleHQ9XCJmaW5lc1wiIHJvdz1cIjBcIiBjb2w9XCIyXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiB0ZXh0PVwic2VhcmNoXCIgcm93PVwiMFwiIGNvbD1cIjNcIj48L0J1dHRvbj5cbjwvR3JpZExheW91dD5cbiAgICA8cm91dGVyLW91dGxldCAgZG9jaz1cInRvcFwiPjwvcm91dGVyLW91dGxldD5cblxuPC9Eb2NrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKXt9XG5cbiAgICBwdWJsaWMgb25OYXZCdG5UYXAoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnb1RvSG9tZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG59XG4iXX0=