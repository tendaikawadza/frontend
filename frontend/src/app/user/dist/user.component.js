"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
var UserComponent = /** @class */ (function () {
    function UserComponent(messageService) {
        this.messageService = messageService;
        this.titleSubject = new BehaviorSubject_1.BehaviorSubject('Users');
        this.titleAction$ = this.titleSubject.asObservable();
        this.activeIndex = 0;
    }
    UserComponent.prototype.changeTitle = function (title) {
        this.titleSubject.next(title);
    };
    UserComponent.prototype.getStock = function () {
        alert('do something');
    };
    UserComponent.prototype.onResetPassword = function (val) { };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [{
                label: 'Purchase Requarst Sent To Manager',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.messageService.add({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    };
    UserComponent.prototype.complete = function () { };
    UserComponent.prototype.prevPage = function () {
        this.activeIndex--;
    };
    UserComponent.prototype.nextPage = function () {
        this.activeIndex++;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=user.component.js.map
