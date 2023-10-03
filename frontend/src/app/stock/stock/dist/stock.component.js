"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var StockComponent = /** @class */ (function () {
    function StockComponent(productService, fb, messageService, route) {
        this.productService = productService;
        this.fb = fb;
        this.messageService = messageService;
        this.route = route;
        this.successMessage = "";
        this.errMessage = "";
        this.updateId = route.snapshot.params['id'];
    }
    StockComponent.prototype.ngOnInit = function () {
        this.addProductForm = this.fb.group({
            productid: ['', [forms_1.Validators.required]],
            productname: ['', [forms_1.Validators.required]],
            units: ['', [forms_1.Validators.required]],
            category: ['', [forms_1.Validators.required]],
            description: ['', [forms_1.Validators.required]]
        });
        this.editProduct();
    };
    StockComponent.prototype.editProduct = function () {
        if (this.updateId) {
            console.log(this.updateId);
        }
    };
    StockComponent.prototype.addProduct = function () {
        var _this = this;
        if (this.addProductForm.valid) {
            console.log(this.addProductForm.value);
            this.productService.addProduct(this.addProductForm.value).subscribe(function (data) {
                console.log(data);
                if (data) {
                    _this.errMessage = "";
                    _this.messageService.add({ severity: 'success', summary: 'Product successfully added to the catalog', detail: 'Via MessageService' });
                    // this.successMessage = "Product successfully added to the catalog";
                }
                else {
                    _this.messageService.add({ severity: 'success', summary: 'Product could not be Added to the catalog : Check Specification of your product', detail: 'Via MessageService' });
                    _this.successMessage = "";
                    // this.errMessage = "Product could not be Added to the catalog : Check Specification of your product";
                }
            });
        }
    };
    StockComponent = __decorate([
        core_1.Component({
            selector: 'app-stock',
            templateUrl: './stock.component.html',
            styleUrls: ['./stock.component.css']
        })
    ], StockComponent);
    return StockComponent;
}());
exports.StockComponent = StockComponent;

//# sourceMappingURL=stock.component.js.map
