import { Injectable } from '@angular/core';
import { ENV } from './environment';

@Injectable()
export class EnvironmentProvider {


    //webControllInfo
    public getWebControllInfo(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webControllInfo;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.webControllInfo;
        }
    }

    public webServicesInfo(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webServicesInfo;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.webServicesInfo;
        }
    }


    public getJsonP(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.jsonP;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.jsonP;
        }
    }

    public getHttpUrl(): string {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.http.trim();
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.http.trim();
      }
    }

    public getUploadImgUrl(): string {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.http.trim() + ENV.development.UploadImgUrl.trim();
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.http.trim() + ENV.production.UploadImgUrl.trim();
      }
    }




    public getShowImgUrl(): string {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.http.trim() + ENV.development.showImgUrl.trim();
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.http.trim() + ENV.production.showImgUrl.trim();
      }
    }

    public getPosterImgUrl(): string {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.http.trim() + ENV.development.posterImgUrl.trim();
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.http.trim() + ENV.production.posterImgUrl.trim();
      }
    }


    public getDistance(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.distance;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.distance;
        }
    }

    public getkeyDaum(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.keyDaum;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.keyDaum;
        }
    }

    public getWebUrl(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webUrl;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.webUrl;
        }
    }

    public getWebServiceUrl(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.webServiceUrl;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.webServiceUrl;
        }
    }

    //keyDaum

    public getKey1(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.key1;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.key1;
        }
    }

    public getKey2(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.key2;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.key2;
        }
    }
    public getMessageCount(): string {
        if (ENV.currentEnvironment === "development") {
            return ENV.development.MessageCount;
        } else if (ENV.currentEnvironment === "production") {
            return ENV.production.MessageCount;
        }
    }

    public getAzureDectetionKey(): string {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.azureDetectionKey;
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.azureDetectionKey;
      }
    }

    public getAzureDectetionUri(): string {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.azureDetectionUri;
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.azureDetectionUri;
      }
    }

    public getAzureDectetionValue(): number {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.azureDetectionValue;
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.azureDetectionValue;
      }
    }

    public getAzureDectetionTime(): number {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.azureDetectionTime;
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.azureDetectionTime;
      }
    }

    public getAzureInspectTime(): number {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.azureInspectTime;
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.azureInspectTime;
      }
    }



    public getyoutubeUrl(): string {
      if (ENV.currentEnvironment === "development") {
        return ENV.development.youtubeUrl;
      } else if (ENV.currentEnvironment === "production") {
        return ENV.production.youtubeUrl;
      }
    }

}

