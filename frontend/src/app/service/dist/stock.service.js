"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var StockService = /** @class */ (function () {
    function StockService(http) {
        this.http = http;
        this.host = environment_1.environment.apiUrl;
    }
    StockService.prototype.getStock = function () {
        return this.http.get('${this.host}/stock/list');
    };
    StockService.prototype.addStock = function (formData) {
        return this.http.post('${this.host}/stock/add', formData);
    };
    StockService.prototype.updateStock = function (formData) {
        return this.http.post('${this.host}/stock/update', formData);
    };
    StockService.prototype.deleteStock = function (stockId) {
        return this.http["delete"]('${this.host}/stock/delete/${userId}');
    };
    StockService.prototype.addProducts = function (formData) {
        return this.http.post('${this.host}/product/product', formData);
    };
    StockService.prototype.addProduct = function (product) {
        var url = this.host + '/product/product';
        console.log(product);
        var data = {
            "productId": 1,
            "productName": "mtisi",
            "productDescription": "bond",
            "productCategory": "vie",
            "units": 20
        };
        return this.http.post(url, data);
    };
    StockService.prototype.getAllProducts = function () {
        var url = this.host + '/product/products';
        return this.http.get(url);
    };
    StockService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StockService);
    return StockService;
}());
exports.StockService = StockService;

//# sourceMappingURL=stock.service.js.map
