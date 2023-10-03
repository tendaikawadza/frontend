"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var angular2_signaturepad_1 = require("angular2-signaturepad");
var PurchaseRequastAdminComponent = /** @class */ (function () {
    function PurchaseRequastAdminComponent(productService, messageService, confirmationService, fb) {
        this.productService = productService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 300,
            'canvasHeight': 100
        };
        this.products = [
            {
                productId: 11,
                productName: 'Computer',
                productDesc: 'High Config',
                purposeOfIssue: 'damage',
                departCode: '002',
                requestingReport: 'Yes',
                itemDescription: 'Very High',
                datePreviousIssue: '01/04/2023',
                previousIssueQty: 5,
                estimatedValue: 55555533,
                empSign: 'sign',
                quanity: 5
            }
        ];
        this.categoryOpt = [
            { name: 'accounts', code: 'accounts' },
            { name: 'admini', code: 'admini' },
            { name: 'human resourse', code: 'human resourse' },
        ];
    }
    PurchaseRequastAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchaseRequastForm = this.fb.group({
            productId: ['', [forms_1.Validators.required]],
            productName: ['', [forms_1.Validators.required]],
            productDesc: ['', [forms_1.Validators.required]],
            purposeOfIssue: ['', [forms_1.Validators.required]],
            departCode: ['', [forms_1.Validators.required]],
            requestingReport: ['', [forms_1.Validators.required]],
            itemDescription: ['', [forms_1.Validators.required]],
            datePreviousIssue: ['', [forms_1.Validators.required]],
            previousIssueQty: ['', [forms_1.Validators.required]],
            estimatedValue: ['', [forms_1.Validators.required]],
            empSign: ['', [forms_1.Validators.required]],
            quanity: ['', [forms_1.Validators.required]]
        });
        this.productService.getAllProducts().subscribe(function (data) { return _this.products = data; });
    };
    Object.defineProperty(PurchaseRequastAdminComponent.prototype, "f", {
        get: function () {
            return this.purchaseRequastForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    PurchaseRequastAdminComponent.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 2);
        this.signaturePad.clear();
    };
    PurchaseRequastAdminComponent.prototype.drawComplete = function () {
        console.log(this.signaturePad.toDataURL());
    };
    PurchaseRequastAdminComponent.prototype.drawStart = function () {
        console.log('begin drawing');
    };
    PurchaseRequastAdminComponent.prototype.clearSignature = function () {
        this.signaturePad.clear();
    };
    PurchaseRequastAdminComponent.prototype.savePad = function () {
        var base64Data = this.signaturePad.toDataURL();
        this.signatureImg = base64Data;
        console.log(this.signatureImg);
    };
    PurchaseRequastAdminComponent.prototype.openNew = function () {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    };
    PurchaseRequastAdminComponent.prototype.deleteSelectedProducts = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                //this.products = this.products.filter(val => !this.selectedProducts.includes('');
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    };
    PurchaseRequastAdminComponent.prototype.editProduct = function (product) {
        this.purchaseRequastForm.patchValue(product);
        this.productDialog = true;
    };
    PurchaseRequastAdminComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.productName + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.products = _this.products.filter(function (val) { return val.productId !== product.productId; });
                _this.product = {};
                _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    };
    PurchaseRequastAdminComponent.prototype.hideDialog = function () {
        this.productDialog = false;
        this.submitted = false;
    };
    PurchaseRequastAdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.purchaseRequastForm.value);
        if (this.purchaseRequastForm.invalid) {
            return;
        }
        this.products = __spreadArrays([this.products], this.purchaseRequastForm.value);
        this.productService.addProduct(this.purchaseRequastForm.value).subscribe(function (data) {
            if (data) {
                _this.products.push(_this.purchaseRequastForm.value);
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
    PurchaseRequastAdminComponent.prototype.findIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].productId === id) {
                index = i;
                break;
            }
        }
        return index;
    };
    PurchaseRequastAdminComponent.prototype.createId = function () {
        var id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };
    __decorate([
        core_1.ViewChild(angular2_signaturepad_1.SignaturePad)
    ], PurchaseRequastAdminComponent.prototype, "signaturePad");
    PurchaseRequastAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-purchase-requast-admin',
            templateUrl: './purchase-requast-admin.component.html',
            styleUrls: ['./purchase-requast-admin.component.css']
        })
    ], PurchaseRequastAdminComponent);
    return PurchaseRequastAdminComponent;
}());
exports.PurchaseRequastAdminComponent = PurchaseRequastAdminComponent;

//# sourceMappingURL=purchase-requast-admin.component.js.map
