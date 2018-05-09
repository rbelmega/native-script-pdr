"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var AppComponent = /** @class */ (function () {
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
            styles: [
                "\n     .router-link-active {\n        background: red;\n        color: red;\n     }\n    ",
            ],
            template: "\n<ActionBar title=\"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0440\u043E\u0436\u043D\u044C\u043E\u0433\u043E \u0440\u0443\u0445\u0443\">\n  <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavBtnTap()\"></NavigationButton>\n</ActionBar>\n<StackLayout>\n    <page-router-outlet></page-router-outlet>\n</StackLayout>\n  ",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQStEO0FBcUIvRDtJQUNFLHNCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFbkQsa0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLCtCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQVRVLFlBQVk7UUFuQnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixNQUFNLEVBQUU7Z0JBQ04sMkZBS0M7YUFDRjtZQUNELFFBQVEsRUFBRSxnWEFPVDtTQUNGLENBQUM7eUNBRXNDLHlCQUFnQjtPQUQzQyxZQUFZLENBVXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgfVxuICAgIGAsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG48QWN0aW9uQmFyIHRpdGxlPVwi0J/RgNCw0LLQuNC70LAg0LTQvtGA0L7QttC90YzQvtCz0L4g0YDRg9GF0YNcIj5cbiAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cIkdvIEJhY2tcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAodGFwKT1cIm9uTmF2QnRuVGFwKClcIj48L05hdmlnYXRpb25CdXR0b24+XG48L0FjdGlvbkJhcj5cbjxTdGFja0xheW91dD5cbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxuPC9TdGFja0xheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gIHB1YmxpYyBvbk5hdkJ0blRhcCgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG5cbiAgcHVibGljIGdvVG9Ib21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==