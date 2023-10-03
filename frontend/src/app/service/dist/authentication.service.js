"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var angular_jwt_1 = require("@auth0/angular-jwt");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.host = environment_1.environment.apiUrl;
        this.jwtHelper = new angular_jwt_1.JwtHelperService();
    }
    AuthenticationService.prototype.login = function (user) {
        return this.http.post(this.host + "/user/login", user, { observe: 'response' });
    };
    AuthenticationService.prototype.register = function (user) {
        return this.http.post(this.host + "/user/register", user);
    };
    AuthenticationService.prototype.logOut = function () {
        this.token = null;
        this.loggedInUsername != null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('users');
    };
    AuthenticationService.prototype.saveToken = function (token) {
        this.token = token;
        localStorage.removeItem('user');
        localStorage.setItem('token', token);
    };
    AuthenticationService.prototype.addUserToLocalCache = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    AuthenticationService.prototype.getUserFromLocalCache = function () {
        return JSON.parse(localStorage.getItem('user') || "false");
    };
    AuthenticationService.prototype.loadToken = function () {
        this.token = localStorage.getItem('token');
    };
    AuthenticationService.prototype.getToken = function () {
        return this.token;
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        this.loadToken();
        if (this.token != null && this.token !== '') {
            if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
                if (!this.jwtHelper.isTokenExpired(this.token)) {
                    this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
                    return true;
                }
            }
        }
        else {
            this.logOut();
        }
        return false;
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

//# sourceMappingURL=authentication.service.js.map
