var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var NumberWithCommas = (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function NumberWithCommas() {
    }
    NumberWithCommas.prototype.transform = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return NumberWithCommas;
}());
NumberWithCommas = __decorate([
    Pipe({
        name: 'numberWithCommas'
    }),
    __metadata("design:paramtypes", [])
], NumberWithCommas);
export { NumberWithCommas };
//# sourceMappingURL=number-comma.js.map