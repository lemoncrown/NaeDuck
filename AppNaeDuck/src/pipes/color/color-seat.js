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
var ColorSeat = (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function ColorSeat() {
    }
    ColorSeat.prototype.transform = function (value) {
        var returnvalue = '';
        if (value == null || value < 0) {
            returnvalue = 'enable-backgrould-color';
        }
        else {
            if (value > 0) {
                returnvalue = 'disable-backgrould-color';
            }
            else {
                returnvalue = 'disable-backgrould-color';
            }
        }
        // returnvalue = 'error-backgrould-color';
        return returnvalue;
    };
    return ColorSeat;
}());
ColorSeat = __decorate([
    Pipe({
        name: 'colorbackgroundSeat'
    }),
    __metadata("design:paramtypes", [])
], ColorSeat);
export { ColorSeat };
//# sourceMappingURL=color-seat.js.map