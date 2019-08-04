var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { YoutubePipe } from './youtube/youtube';
import { ArtListPipe } from './artlist/artlist';
import { ArtOpenListPipe } from './artlist/artopenlist';
import { TimetoDatePipe } from './time/timetodate';
import { TimetoTimePipe } from './time/timetotime';
import { ArtTicketListPipe } from './artlist/artotickerlist';
import { ArtMyTicketPipe } from './artlist/artmyticket';
import { NumberWithCommas } from './math/number-comma';
import { FirstWithSplit } from './string/first-split';
import { SecondWithSplit } from './string/second-split';
import { ColorSeat } from './color/color-seat';
import { ColorFlow } from './color/color-flow';
import { ShowCastingListPipe } from './casting/showcastinglist';
//ArtListPipe
var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    NgModule({
        declarations: [YoutubePipe, ArtListPipe, ArtOpenListPipe, TimetoDatePipe, ArtTicketListPipe, ArtMyTicketPipe, TimetoTimePipe,
            NumberWithCommas, FirstWithSplit, SecondWithSplit, ColorSeat, ColorFlow, ShowCastingListPipe],
        imports: [],
        exports: [YoutubePipe, ArtListPipe, ArtOpenListPipe, TimetoDatePipe, ArtTicketListPipe, ArtMyTicketPipe, TimetoTimePipe,
            NumberWithCommas, FirstWithSplit, SecondWithSplit, ColorSeat, ColorFlow, ShowCastingListPipe]
    })
], PipesModule);
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map