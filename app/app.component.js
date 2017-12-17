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
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n<ActionBar title=\"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0440\u043E\u0436\u043D\u044C\u043E\u0433\u043E \u0440\u0443\u0445\u0443\">\n  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" \n    (tap)=\"onNavBtnTap()\"></NavigationButton>\n</ActionBar>\n    <WrapLayout> \n                          <router-outlet></router-outlet>\n        </WrapLayout>\n  "
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQTZEO0FBYzdEO0lBRUUsc0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUUsQ0FBQztJQUVoRCxrQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBTlEsWUFBWTtRQVp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDZZQVFUO1NBQ0YsQ0FBQzt5Q0FHc0MseUJBQWdCO09BRjNDLFlBQVksQ0FPeEI7SUFBRCxtQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG48QWN0aW9uQmFyIHRpdGxlPVwi0J/RgNCw0LLQuNC70LAg0LTQvtGA0L7QttC90YzQvtCz0L4g0YDRg9GF0YNcIj5cbiAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cIkdvIEJhY2tcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiBcbiAgICAodGFwKT1cIm9uTmF2QnRuVGFwKClcIj48L05hdmlnYXRpb25CdXR0b24+XG48L0FjdGlvbkJhcj5cbiAgICA8V3JhcExheW91dD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9XcmFwTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKXt9XG5cbiAgICBwdWJsaWMgb25OYXZCdG5UYXAoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxufVxuIl19