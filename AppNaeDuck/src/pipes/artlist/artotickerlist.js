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
var ArtTicketListPipe = (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function ArtTicketListPipe() {
    }
    ArtTicketListPipe.prototype.transform = function (value, filter) {
        return value.filter(function (task) { return task.KEY_RAWID === filter; });
        //var aaaaa = value.filter(
        //    task => task.USER_RAWID === filter);
        //console.log('PPPPP');
        //console.log(aaaaa);
        //return value.filter(
        //    task => task.USER_RAWID === filter);
        //var uniqueNames = [];
        //var itemData = [];
        //for (var i = 0; i < value.length; i++) {
        //    if (uniqueNames.indexOf(value[i].USER_RAWID) === -1) {
        //        uniqueNames.push(value[i].USER_RAWID);
        //        itemData.push(value[i]);
        //    }
        //}
        //console.log(itemData.length);
        //return itemData;
    };
    return ArtTicketListPipe;
}());
ArtTicketListPipe = __decorate([
    Pipe({
        name: 'artlistTickerFilter',
    }),
    __metadata("design:paramtypes", [])
], ArtTicketListPipe);
export { ArtTicketListPipe };
//# sourceMappingURL=artotickerlist.js.map