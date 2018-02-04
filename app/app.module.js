"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var home_component_1 = require("./layouts/home/home.component");
var topic_component_1 = require("./components/topic/topic.component");
var fines_component_1 = require("./layouts/fines/fines.component");
var sings_component_1 = require("./layouts/sings/sings.component");
var sign_component_1 = require("./components/sign/sign.component");
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
                sign_component_1.SignComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                http_1.HttpModule,
                http_2.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLHNDQUEyQztBQUMzQyw2Q0FBd0Q7QUFFeEQsaURBQTZDO0FBQzdDLDJEQUFzRDtBQUN0RCxnRUFBNEQ7QUFDNUQsc0VBQW9FO0FBQ3BFLG1FQUFpRTtBQUNqRSxtRUFBaUU7QUFDakUsbUVBQWlFO0FBR2pFLHdEQUFvRDtBQXVCcEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxTQUFTO1FBckJyQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsOEJBQWE7YUFDaEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDTCxpQkFBVTtnQkFDVix1QkFBZ0I7Z0JBQ2hCLHFDQUFnQjtnQkFDaEIsd0NBQWtCO2FBQ3JCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2FBQ2Q7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0cy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRvcGljQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvcGljL3RvcGljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaW5lc0NvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9maW5lcy9maW5lcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2luZ3NDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvc2luZ3Mvc2luZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lnbi9zaWduLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIFRvcGljQ29tcG9uZW50LFxuICAgICAgICBGaW5lc0NvbXBvbmVudCxcbiAgICAgICAgU2luZ3NDb21wb25lbnQsXG4gICAgICAgIFNpZ25Db21wb25lbnQsXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERhdGFTZXJ2aWNlLFxuICAgIF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19