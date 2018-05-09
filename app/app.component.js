"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        if (!this.page) {
            throw new Error("Inside ActionBarScope but no Page found in DI.");
        }
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
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQWdFO0FBQ2hFLGlEQUFnRDtBQXFCaEQ7SUFDRSxzQkFBb0IsZ0JBQWtDLEVBQVUsSUFBVTtRQUF0RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNyRTtJQUNMLENBQUM7SUFFTSxrQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBYlUsWUFBWTtRQW5CeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRTtnQkFDTiwyRkFLQzthQUNGO1lBQ0QsUUFBUSxFQUFFLGdYQU9UO1NBQ0YsQ0FBQzt5Q0FFc0MseUJBQWdCLEVBQWdCLFdBQUk7T0FEL0QsWUFBWSxDQWN4QjtJQUFELG1CQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMsIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgfVxuICAgIGAsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG48QWN0aW9uQmFyIHRpdGxlPVwi0J/RgNCw0LLQuNC70LAg0LTQvtGA0L7QttC90YzQvtCz0L4g0YDRg9GF0YNcIj5cbiAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cIkdvIEJhY2tcIiBhbmRyb2lkLnN5c3RlbUljb249XCJpY19tZW51X2JhY2tcIiAodGFwKT1cIm9uTmF2QnRuVGFwKClcIj48L05hdmlnYXRpb25CdXR0b24+XG48L0FjdGlvbkJhcj5cbjxTdGFja0xheW91dD5cbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxuPC9TdGFja0xheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICAgIGlmICghdGhpcy5wYWdlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5zaWRlIEFjdGlvbkJhclNjb3BlIGJ1dCBubyBQYWdlIGZvdW5kIGluIERJLlwiKTtcbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbk5hdkJ0blRhcCgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICB9XG5cbiAgcHVibGljIGdvVG9Ib21lKCkge1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==