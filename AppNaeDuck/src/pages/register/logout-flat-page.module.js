var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoutFlatModule } from '../../component/logout/logout-flat/logout-flat.module';
var LogoutFlatPageModule = (function () {
    function LogoutFlatPageModule() {
    }
    return LogoutFlatPageModule;
}());
LogoutFlatPageModule = __decorate([
    NgModule({
        declarations: [
            LogoutFlatModule,
        ],
        imports: [
            IonicPageModule.forChild(LogoutFlatModule),
            LogoutFlatModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
], LogoutFlatPageModule);
export { LogoutFlatPageModule };
//# sourceMappingURL=logout-flat-page.module.js.map