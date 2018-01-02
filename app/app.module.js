"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var home_component_1 = require("./layouts/home/home.component");
var topic_component_1 = require("./layouts/topic/topic.component");
var fines_component_1 = require("./layouts/fines/fines.component");
var sings_component_1 = require("./layouts/sings/sings.component");
var data_service_1 = require("./services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                topic_component_1.TopicComponent,
                fines_component_1.FinesComponent,
                sings_component_1.SingsComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                http_1.HttpModule,
                http_2.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule
            ],
            providers: [
                data_service_1.DataService,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLHNDQUEyQztBQUMzQyw2Q0FBd0Q7QUFFeEQsaURBQTZDO0FBQzdDLDJEQUFzRDtBQUN0RCxnRUFBNEQ7QUFDNUQsbUVBQWlFO0FBQ2pFLG1FQUFpRTtBQUNqRSxtRUFBaUU7QUFHakUsd0RBQW9EO0FBc0JwRDtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFwQnJCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxnQ0FBYzthQUNqQjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNMLGlCQUFVO2dCQUNWLHVCQUFnQjtnQkFDaEIscUNBQWdCO2dCQUNoQix3Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0FwcFJvdXRpbmdNb2R1bGV9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9sYXlvdXRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9waWNDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvdG9waWMvdG9waWMuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbmVzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL2ZpbmVzL2ZpbmVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW5nc0NvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9zaW5ncy9zaW5ncy5jb21wb25lbnQnO1xuXG5cbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBUb3BpY0NvbXBvbmVudCxcbiAgICAgICAgRmluZXNDb21wb25lbnQsXG4gICAgICAgIFNpbmdzQ29tcG9uZW50LFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERhdGFTZXJ2aWNlLFxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19