"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var components_module_1 = require("./components.module");
var data_service_1 = require("./services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                http_1.HttpModule,
                http_2.HttpClientModule,
                components_module_1.ComponentsModule,
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule.forRoot(components_module_1.routes),
            ],
            providers: [data_service_1.DataService],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUN2RSxzQ0FBMkM7QUFDM0MsNkNBQXdEO0FBRXhELGlEQUErQztBQUMvQyx5REFBK0Q7QUFFL0Qsd0RBQXNEO0FBZXREO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFickIsZUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUCxpQkFBVTtnQkFDVix1QkFBZ0I7Z0JBQ2hCLG9DQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsMEJBQU0sQ0FBQzthQUN6QztZQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50c01vZHVsZSwgcm91dGVzIH0gZnJvbSAnLi9jb21wb25lbnRzLm1vZHVsZSc7XG5cbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgSHR0cE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbXBvbmVudHNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gIF0sXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==