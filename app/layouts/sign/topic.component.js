"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var data_service_1 = require("../../services/data.service");
var TopicComponent = (function () {
    function TopicComponent(dataService, activatedRoute) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .forEach(function (params) {
            _this.dataService.getTopicById(params.id).subscribe(function (data) {
                _this.topic = data;
            }, function (err) {
                console.log(JSON.stringify(err));
            });
        });
    };
    TopicComponent = __decorate([
        core_1.Component({
            selector: 'pdr-topic',
            styles: ["\n.panel {\n\tbackground-color: #f2f2f2;\n\tcolor: rgb(66, 94, 106);\n\tfont-size: 14px;\n\tline-height: 20px;\n\ttext-shadow: 0px 1px rgb(255, 255, 255);\n}\n\n.list-item {\n    margin-top: 20px;\n\tmargin-bottom: 20px;\n\tborder-radius: 2px;\n\tpadding-top: 20px;\n\tpadding-bottom: 20px;\n\tpadding-right: 15px;\n\tpadding-left: 15px;\n\tcolor: #000000;\n\tbackground: #ffffff;\n\tborder: 0;\n\tborder-bottom-width: 1px;\n\tborder-bottom-style: solid;\n\tborder-bottom-color: rgb(204, 204, 204);\n\tbox-shadow: 0 4px 4px #e2e2e2;\n\twidth: 100%;\n}\n  "],
            template: "\n<ScrollView orientation=\"vertical\" class=\"panel\">\n    <WrapLayout >\n        <WrapLayout *ngFor=\"let list of topic.nodes; let i = index\">\n           <Label\n            *ngIf=\"list.type == 'p'\"\n            class=\"list-item\" \n            text=\"{{list.value}}\"\n            textWrap=\"true\"\n            >\n            </Label>\n               <HtmlView\n                 *ngIf=\"list.type == 'html'\"\n                 [html]=\"list.value\"\n                 class=\"list-item\"\n               ></HtmlView>\n        </WrapLayout>\n    </WrapLayout>\n</ScrollView>\n",
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute])
    ], TopicComponent);
    return TopicComponent;
}());
exports.TopicComponent = TopicComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9waWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCx1Q0FBcUM7QUFFckMsNERBQXdEO0FBb0R4RDtJQUlFLHdCQUNZLFdBQXdCLEVBQ3hCLGNBQThCO1FBRDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUN2QyxDQUFDO0lBRUosaUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNO2FBQ3JCLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDbkQsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQyxFQUFFLFVBQUEsR0FBRztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWxCVSxjQUFjO1FBbEQxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsTUFBTSxFQUFFLENBQUMsNmlCQTBCUixDQUFDO1lBQ0YsUUFBUSxFQUFFLDBrQkFtQlg7U0FDQSxDQUFDO3lDQU15QiwwQkFBVztZQUNSLHVCQUFjO09BTi9CLGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcblxuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRyLXRvcGljJyxcbiAgc3R5bGVzOiBbYFxuLnBhbmVsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcblx0Y29sb3I6IHJnYig2NiwgOTQsIDEwNik7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdHRleHQtc2hhZG93OiAwcHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmxpc3QtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XG5cdHBhZGRpbmctbGVmdDogMTVweDtcblx0Y29sb3I6ICMwMDAwMDA7XG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdGJvcmRlcjogMDtcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuXHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xuXHRib3gtc2hhZG93OiAwIDRweCA0cHggI2UyZTJlMjtcblx0d2lkdGg6IDEwMCU7XG59XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGNsYXNzPVwicGFuZWxcIj5cbiAgICA8V3JhcExheW91dCA+XG4gICAgICAgIDxXcmFwTGF5b3V0ICpuZ0Zvcj1cImxldCBsaXN0IG9mIHRvcGljLm5vZGVzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgKm5nSWY9XCJsaXN0LnR5cGUgPT0gJ3AnXCJcbiAgICAgICAgICAgIGNsYXNzPVwibGlzdC1pdGVtXCIgXG4gICAgICAgICAgICB0ZXh0PVwie3tsaXN0LnZhbHVlfX1cIlxuICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICA8SHRtbFZpZXdcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJsaXN0LnR5cGUgPT0gJ2h0bWwnXCJcbiAgICAgICAgICAgICAgICAgW2h0bWxdPVwibGlzdC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1pdGVtXCJcbiAgICAgICAgICAgICAgID48L0h0bWxWaWV3PlxuICAgICAgICA8L1dyYXBMYXlvdXQ+XG4gICAgPC9XcmFwTGF5b3V0PlxuPC9TY3JvbGxWaWV3PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVG9waWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc3ViOiBhbnk7XG4gIHB1YmxpYyB0b3BpYzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtc1xuICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nZXRUb3BpY0J5SWQocGFyYW1zLmlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvcGljID0gZGF0YTtcbiAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICB9XG59XG4iXX0=