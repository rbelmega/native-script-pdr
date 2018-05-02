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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLHNDQUF5QztBQUN6Qyw2Q0FBc0Q7QUFFdEQsaURBQTZDO0FBQzdDLDJEQUFzRDtBQUN0RCxnRUFBNEQ7QUFDNUQsc0VBQWtFO0FBQ2xFLG1FQUErRDtBQUMvRCxtRUFBK0Q7QUFDL0QsbUVBQStEO0FBQy9ELHNFQUFrRTtBQUdsRSx3REFBb0Q7QUF3QnBEO0lBQUE7SUFDQSxDQUFDO0lBRFksU0FBUztRQXRCckIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLGtDQUFlO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUU7Z0JBQ0wsaUJBQVU7Z0JBQ1YsdUJBQWdCO2dCQUNoQixxQ0FBZ0I7Z0JBQ2hCLHdDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FDckI7SUFBRCxnQkFBQztDQUFBLEFBREQsSUFDQztBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0cy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7VG9waWNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy90b3BpYy90b3BpYy5jb21wb25lbnQnO1xuaW1wb3J0IHtGaW5lc0NvbXBvbmVudH0gZnJvbSAnLi9sYXlvdXRzL2ZpbmVzL2ZpbmVzLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpbmdzQ29tcG9uZW50fSBmcm9tICcuL2xheW91dHMvc2luZ3Mvc2luZ3MuY29tcG9uZW50JztcbmltcG9ydCB7U2lnbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZ24vc2lnbi5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIFRvcGljQ29tcG9uZW50LFxuICAgICAgICBGaW5lc0NvbXBvbmVudCxcbiAgICAgICAgU2luZ3NDb21wb25lbnQsXG4gICAgICAgIFNpZ25Db21wb25lbnQsXG4gICAgICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGF0YVNlcnZpY2UsXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=