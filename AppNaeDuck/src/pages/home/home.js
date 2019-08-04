var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { NearyeventsPage } from '../nearyevents/nearyevents';
import { EventPage } from '../event/event';
import { GlobalVars } from '../../providers/global';
import { EnvironmentProvider } from '../../providers/environment-provider';
import { HttpService } from '../../services/http-service';
import { AllEventPage } from '../allevent/allevent';
var HomePage = (function () {
    function HomePage(navCtrl, httpService, environmentProvider, globalVars) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.environmentProvider = environmentProvider;
        this.globalVars = globalVars;
        this.home_tab = "for_you";
    }
    HomePage.prototype.ngOnInit = function () {
        this.httpImgUrl = this.environmentProvider.getUploadImgUrl();
        var data = [
            { taskname: 'chennai', id: 'maa', status: 'Submitted' },
            { taskname: 'mumbai', id: 'bom', status: 'Resolved' },
            { taskname: 'delhi', id: 'del', status: 'Submitted' },
            { taskname: 'salem', id: 'che', status: 'In Progress' },
            { taskname: 'bengaluru', id: 'blr', status: 'Resolved' },
            { taskname: 'chavvapet', id: 'chv', status: 'Submitted' }
        ];
        function filterByString(data, s) {
            return data.filter(function (e) { return e.id.includes(s) || e.taskname.includes(s); })
                .sort(function (a, b) { return a.id.includes(s) && !b.id.includes(s) ? -1 : b.id.includes(s) && !a.id.includes(s) ? 1 : 0; });
        }
        console.log(filterByString(data, "ch"));
        this.getData();
    };
    HomePage.prototype.ngOnDestroy = function () {
    };
    //LIST
    HomePage.prototype.getData = function () {
        var _this = this;
        var body = {
            TID: "DD-1004",
            Items: [
                {
                    TODAY: this.globalVars.getToday()
                }
            ]
        };
        this.httpService.Post(body).subscribe(function (data) {
            if (data != null) {
                console.log(data.length);
                console.log(data[0]);
                console.log(data[1]);
                console.log(data);
                _this.items = data[0];
                _this.itemsCast = data[1];
            }
            else {
                //  this.showError('예약정보가 없습니다');
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    HomePage.prototype.filterByString2 = function (data, s) {
        return data.filter(function (e) { return e.SHOW_RAWID === 1; });
    };
    HomePage.prototype.test = function () {
        console.log(this.filterByString(this.itemsCast, "1"));
    };
    HomePage.prototype.filterByString = function (data, s) {
        var result = data.filter(function (entry) {
            return entry.SHOW_RAWID === s;
        });
        console.log(result);
        return result;
    };
    HomePage.prototype.nearyevents = function () {
        console.log('all events');
        this.navCtrl.push(AllEventPage);
    };
    HomePage.prototype.event = function (param) {
        this.navCtrl.push(EventPage, param);
    };
    HomePage.prototype.eventgood = function (param) {
        console.log(param);
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController,
        HttpService,
        EnvironmentProvider,
        GlobalVars])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map