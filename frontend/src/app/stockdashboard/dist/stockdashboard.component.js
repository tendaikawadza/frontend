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
var StockdashboardComponent = /** @class */ (function () {
    function StockdashboardComponent(router, auth, productService, messageService, confirmationService, fb) {
        this.router = router;
        this.auth = auth;
        this.productService = productService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' },
            { label: 'Logout', icon: 'pi pi-fw pi-power-off' },
        ];
        this.products = [
            { productId: 11, productCode: 17, productName: "test", productDescription: "test", productCategory: "tets desc", quantityOnHand: 4 },
            { productId: 12, productCode: 155, productName: "test prod", productDescription: "test", productCategory: "tets desc", quantityOnHand: 5 },
            { productId: 13, productCode: 166, productName: "test test no", productDescription: "test", productCategory: "tets desc", quantityOnHand: 6 },
        ];
        this.categoryOpt = [
            { name: 'accounts', code: 'accounts' },
            { name: 'admini', code: 'admini' },
            { name: 'human resourse', code: 'human resourse' },
        ];
    }
    StockdashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addProductForm = this.fb.group({
            productName: ['', [forms_1.Validators.required]],
            productCode: ['', [forms_1.Validators.required]],
            quantityOnHand: ['', [forms_1.Validators.required]],
            productCategory: ['', [forms_1.Validators.required]],
            productDescription: ['', [forms_1.Validators.required]]
        });
        this.productService.getAllProducts().subscribe(function (data) { return _this.products = data; });
    };
    Object.defineProperty(StockdashboardComponent.prototype, "f", {
        get: function () {
            return this.addProductForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    StockdashboardComponent.prototype.openNew = function () {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    };
    StockdashboardComponent.prototype.deleteSelectedProducts = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.products = _this.products.filter(function (val) { return !_this.selectedProducts.includes(val); });
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    };
    StockdashboardComponent.prototype.editProduct = function (product) {
        this.addProductForm.patchValue(product);
        this.productDialog = true;
    };
    StockdashboardComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.productName + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.products = _this.products.filter(function (val) { return val.productCode !== product.productCode; });
                _this.product = {};
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    };
    StockdashboardComponent.prototype.hideDialog = function () {
        this.productDialog = false;
        this.submitted = false;
    };
    StockdashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.addProductForm.value);
        if (this.addProductForm.invalid) {
            return;
        }
        this.submitted = true;
        this.productService.addProduct(this.addProductForm.value).subscribe(function (data) {
            if (data) {
                _this.products.push(_this.addProductForm.value);
                _this.messageService.add({ severity: 'success', summary: 'Product successfully added to the catalog', detail: 'Via MessageService' });
            }
            else {
                _this.messageService.add({ severity: 'success', summary: 'Product could not be Added to the catalog : Check Specification of your product', detail: 'Via MessageService' });
            }
        });
        // if (this.product.productCode.trim()) {
        //     if (this.product.productCode) {
        //         this.products[this.findIndexById(this.product.productCode)] = this.product;
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        //     }
        //     else {
        //         this.product.productCode = this.createId();
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        //     }
        //     this.products = [...this.products];
        //     this.productDialog = false;
        //     this.product = {};
        // }
    };
    StockdashboardComponent.prototype.findIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].productCode === id) {
                index = i;
                break;
            }
        }
        return index;
    };
    StockdashboardComponent.prototype.createId = function () {
        var id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };
    StockdashboardComponent.prototype.logout = function () {
        console.log('ddd');
        this.auth.logOut();
        this.router.navigate(['login']);
    };
    StockdashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-stockdashboard',
            templateUrl: './stockdashboard.component.html',
            styleUrls: ['./stockdashboard.component.css']
        })
    ], StockdashboardComponent);
    return StockdashboardComponent;
}());
exports.StockdashboardComponent = StockdashboardComponent;

//# sourceMappingURL=stockdashboard.component.js.map
