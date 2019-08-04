var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, Renderer } from '@angular/core';
var FabToolbar = (function () {
    function FabToolbar(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.active = false;
        this.position = 'left';
        this.color = 'secondary';
        this.icon = 'more';
        this.cssClass = '';
        this.enableBackdropDismiss = true;
        this.buttons = [];
    }
    FabToolbar.prototype.ngOnInit = function () {
        this.renderer.setElementClass(this.el.nativeElement, this.position, true);
    };
    FabToolbar.prototype.onClick = function (event, button) {
        var _this = this;
        // We are listening to click event on document in order to be able to close button on backdrop click
        // Therefore we need to check if user clicked on our component or outside
        if (!event && !button) {
            // clicked on backdrop
            if (this.enableBackdropDismiss === true && this.active) {
                this.closeButton();
                return;
            }
        }
        if (this.el.nativeElement.contains(event.target)) {
            // User has clicked on our component. Check if he clicked on sub button or no.
            if (button) {
                var shouldDismiss = true;
                if (button.handler) {
                    // a handler has been provided, execute it
                    if (button.handler() === false) {
                        // if the return value of the handler is false then do not dismiss
                        shouldDismiss = false;
                    }
                }
                if (shouldDismiss) {
                    setTimeout(function () {
                        _this.closeButton();
                    }, 10);
                }
            }
            else {
                if (!this.active)
                    this.openButton();
            }
        }
        else {
            // User has clicked outside our component.
            // Check if `enableBackdropDismiss` is true and if component is opened.
            if (this.enableBackdropDismiss === true && this.active) {
                this.closeButton();
            }
        }
    };
    Object.defineProperty(FabToolbar.prototype, "width", {
        get: function () {
            var width = window.innerWidth / 56 * 2;
            return 'scale(' + width + ')';
        },
        enumerable: true,
        configurable: true
    });
    FabToolbar.prototype.openButton = function () {
        var _this = this;
        this.renderer.setElementClass(this.el.nativeElement, 'activated', !this.active);
        setTimeout(function () {
            _this.renderer.setElementClass(_this.el.nativeElement, 'closed', false);
            _this.renderer.setElementClass(_this.el.nativeElement, 'opened', true);
        }, 400);
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '100%');
        this.active = !this.active;
    };
    FabToolbar.prototype.closeButton = function () {
        var _this = this;
        this.renderer.setElementClass(this.el.nativeElement, 'activated', !this.active);
        setTimeout(function () {
            _this.renderer.setElementClass(_this.el.nativeElement, 'opened', false);
            _this.renderer.setElementClass(_this.el.nativeElement, 'closed', true);
            _this.renderer.setElementStyle(_this.el.nativeElement, 'width', '68px');
        }, 400);
        this.active = !this.active;
    };
    return FabToolbar;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], FabToolbar.prototype, "position", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FabToolbar.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FabToolbar.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FabToolbar.prototype, "cssClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FabToolbar.prototype, "enableBackdropDismiss", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FabToolbar.prototype, "buttons", void 0);
FabToolbar = __decorate([
    Component({
        selector: 'fab-toolbar',
        template: "\n        <div tappable class=\"backdrop\" (click)=\"onClick(false, false)\"></div>\n        <div class=\"fab-toolbar\">\n            <ion-row [style.transform]=\"\">\n                <ion-col class=\"{{b.icon && b.title ? 'icon-and-title' : ''}}\" *ngFor=\"let b of buttons\">\n                    <button (click)=\"onClick($event, b)\" ion-button clear [color]=\"b.color ? b.color : 'light'\" style=\"width:68px\" >\n                        <div>\n                            <ion-icon *ngIf=\"b.icon\" [name]=\"b.icon\"></ion-icon>\n                                <br *ngIf=\"b.title && b.icon\">\n                            <label *ngIf=\"b.title\">{{b.title}}</label>\n                        </div>\n                    </button>\n                </ion-col>\n            </ion-row>\n            <button (click)=\"onClick($event, false)\" [style.transform]=\"active ? width: 'scale(1)' \"ion-fab color=\"{{color}}\"><ion-icon name=\"{{icon}}\"></ion-icon></button>\n        </div>\n        "
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], FabToolbar);
export { FabToolbar };
//# sourceMappingURL=fab-toolbar.js.map