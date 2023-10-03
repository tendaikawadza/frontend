"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HideForRolesDirective = /** @class */ (function () {
    function HideForRolesDirective(viewContainerRef, templateRef) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
    }
    HideForRolesDirective.prototype.set = function (HideForRoles) {
        var hideFor = HideForRoles || [];
        if (hideFor.length > 0) {
        }
    };
    __decorate([
        core_1.Input()
    ], HideForRolesDirective.prototype, "set");
    HideForRolesDirective = __decorate([
        core_1.Directive({
            selector: '[appHideForRoles]'
        })
    ], HideForRolesDirective);
    return HideForRolesDirective;
}());
exports.HideForRolesDirective = HideForRolesDirective;

//# sourceMappingURL=hide-for-roles.directive.js.map
