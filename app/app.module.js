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
var search_component_1 = require("./layouts/search/search.component");
var data_service_1 = require("./services/data.service");
var search_pipe_1 = require("./pipes/search.pipe");
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
                search_component_1.SearchComponent,
                search_pipe_1.SearchPipe,
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [http_1.HttpModule, http_2.HttpClientModule, app_routing_module_1.AppRoutingModule, nativescript_module_1.NativeScriptModule],
            providers: [data_service_1.DataService],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNDQUEyQztBQUMzQyw2Q0FBd0Q7QUFFeEQsaURBQStDO0FBQy9DLDJEQUF3RDtBQUN4RCxnRUFBOEQ7QUFDOUQsc0VBQW9FO0FBQ3BFLG1FQUFpRTtBQUNqRSxtRUFBaUU7QUFDakUsbUVBQWlFO0FBQ2pFLHNFQUFvRTtBQUVwRSx3REFBc0Q7QUFFdEQsbURBQWlEO0FBa0JqRDtJQUFBO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBaEJyQixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2Ysd0JBQVU7YUFDWDtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsaUJBQVUsRUFBRSx1QkFBZ0IsRUFBRSxxQ0FBZ0IsRUFBRSx3Q0FBa0IsQ0FBQztZQUM3RSxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb3BpY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b3BpYy90b3BpYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmluZXNDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZmluZXMvZmluZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NpbmdzL3NpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZ24vc2lnbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcblxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5cbmltcG9ydCB7IFNlYXJjaFBpcGUgfSBmcm9tICcuL3BpcGVzL3NlYXJjaC5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgVG9waWNDb21wb25lbnQsXG4gICAgRmluZXNDb21wb25lbnQsXG4gICAgU2luZ3NDb21wb25lbnQsXG4gICAgU2lnbkNvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgU2VhcmNoUGlwZSxcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0h0dHBNb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGUsIE5hdGl2ZVNjcmlwdE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==