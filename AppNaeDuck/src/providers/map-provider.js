var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var MapProvider = (function () {
    function MapProvider() {
    }
    MapProvider.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat;
        var lon1 = start.lng;
        var lat2 = end.lat;
        var lon2 = end.lng;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    MapProvider.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    return MapProvider;
}());
MapProvider = __decorate([
    Injectable()
], MapProvider);
export { MapProvider };
//# sourceMappingURL=map-provider.js.map