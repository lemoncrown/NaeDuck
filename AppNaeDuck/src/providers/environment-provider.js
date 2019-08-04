var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { ENV } from './environment';
var EnvironmentProvider = (function () {
    function EnvironmentProvider() {
    }
    //webControllInfo
    EnvironmentProvider.prototype.getWebControllInfo = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webControllInfo;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.webControllInfo;
        }
    };
    EnvironmentProvider.prototype.webServicesInfo = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webServicesInfo;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.webServicesInfo;
        }
    };
    EnvironmentProvider.prototype.getJsonP = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.jsonP;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.jsonP;
        }
    };
    EnvironmentProvider.prototype.getHttpUrl = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.http.trim();
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.http.trim();
        }
    };
    EnvironmentProvider.prototype.getUploadImgUrl = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.http.trim() + ENV.development.UploadImgUrl.trim();
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.http.trim() + ENV.production.UploadImgUrl.trim();
        }
    };
    EnvironmentProvider.prototype.getShowImgUrl = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.http.trim() + ENV.development.showImgUrl.trim();
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.http.trim() + ENV.production.showImgUrl.trim();
        }
    };
    EnvironmentProvider.prototype.getPosterImgUrl = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.http.trim() + ENV.development.posterImgUrl.trim();
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.http.trim() + ENV.production.posterImgUrl.trim();
        }
    };
    EnvironmentProvider.prototype.getDistance = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.distance;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.distance;
        }
    };
    EnvironmentProvider.prototype.getkeyDaum = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.keyDaum;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.keyDaum;
        }
    };
    EnvironmentProvider.prototype.getWebUrl = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webUrl;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.webUrl;
        }
    };
    EnvironmentProvider.prototype.getWebServiceUrl = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webServiceUrl;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.webServiceUrl;
        }
    };
    //keyDaum
    EnvironmentProvider.prototype.getKey1 = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.key1;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.key1;
        }
    };
    EnvironmentProvider.prototype.getKey2 = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.key2;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.key2;
        }
    };
    EnvironmentProvider.prototype.getMessageCount = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.MessageCount;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.MessageCount;
        }
    };
    EnvironmentProvider.prototype.getAzureDectetionKey = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.azureDetectionKey;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.azureDetectionKey;
        }
    };
    EnvironmentProvider.prototype.getAzureDectetionUri = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.azureDetectionUri;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.azureDetectionUri;
        }
    };
    EnvironmentProvider.prototype.getAzureDectetionValue = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.azureDetectionValue;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.azureDetectionValue;
        }
    };
    EnvironmentProvider.prototype.getAzureDectetionTime = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.azureDetectionTime;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.azureDetectionTime;
        }
    };
    EnvironmentProvider.prototype.getAzureInspectTime = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.azureInspectTime;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.azureInspectTime;
        }
    };
    EnvironmentProvider.prototype.getyoutubeUrl = function () {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.youtubeUrl;
        }
        else if (ENV.currentEnvironment === "production") {
            return ENV.production.youtubeUrl;
        }
    };
    return EnvironmentProvider;
}());
EnvironmentProvider = __decorate([
    Injectable()
], EnvironmentProvider);
export { EnvironmentProvider };
//# sourceMappingURL=environment-provider.js.map