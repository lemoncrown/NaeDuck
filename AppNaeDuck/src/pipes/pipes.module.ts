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
@NgModule({
    declarations: [YoutubePipe, ArtListPipe, ArtOpenListPipe, TimetoDatePipe, ArtTicketListPipe, ArtMyTicketPipe, TimetoTimePipe
      , NumberWithCommas, FirstWithSplit, SecondWithSplit, ColorSeat, ColorFlow, ShowCastingListPipe],
	imports: [],
    exports: [YoutubePipe, ArtListPipe, ArtOpenListPipe, TimetoDatePipe, ArtTicketListPipe, ArtMyTicketPipe, TimetoTimePipe
      , NumberWithCommas, FirstWithSplit, SecondWithSplit, ColorSeat, ColorFlow, ShowCastingListPipe]
})
export class PipesModule {}
