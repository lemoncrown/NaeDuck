export class ENV {

  public static currentEnvironment: string = "development";
    // public static currentEnvironment: string = "production";

  public static development: any = {
        webControllInfo: "http://wwww.lemonCrown.com/aaa/",
        //webServicesInfo: "http://192.168.50.37/WebServices/WebService1.asmx",
        //webServicesInfo: "http://localhost/WebServices/WebService1.asmx",
        webServicesInfo: "http://192.168.0.166/WebServices//WebService1.asmx",
        key1: "value1",
        key2: "value2",
        //jsonP: "http://127.0.0.1/MVC/",
       // jsonP: "http://localhost:6533/",
        jsonP: "http://localhost:54241/HelloWorld/Post/",
        //localtest
        http: "http://localhost:54241",
        //http: "http://192.168.0.4",
        //http: "http://192.168.0.62/MVC",
        //jsonP: "http://192.168.0.10/MVC/",
        distance: "3000000000",
        keyDaum: "19a40b3b4b31307415704b0fcdfadaed",
        webUrl: "http://192.168.0.166/MVC/",
        webServiceUrl: "http://192.168.0.166/WebServices",
        showImgUrl: "/wwwroot/Upload/show",
        UploadImgUrl: "/Upload",
        posterImgUrl: "/wwwroot/Upload/poster",
        youtubeUrl: "https://www.youtube.com/embed",
        MessageCount: 10,
        azureDetectionKey: "1c5853cfcb6a4cb3b7ee7e28fdfd5fec",
        azureDetectionUri: "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect",
        
        azureDetectionValue: 0.5,
        azureDetectionTime: 10,
        azureInspectTime: 30
    };
    public static production: any = {
        webControllInfo: "value1",
        webServicesInfo: "http://www.sosoksa.com/WebServices/WebService1.asmx",
        key1: "value1",
        key2: "value2",
        jsonP: "http://www.sosoksa.com/MVC/",
        http: "http://localhost:54241",
        distance: "3000000000",  //1000 >> 1km
        keyDaum: "19a40b3b4b31307415704b0fcdfadaed",
        webUrl: "http://www.sosoksa.com/",
        webServiceUrl: "http://www.sosoksa.com/WebServices",
        UploadImgUrl: "/Upload",
        showImgUrl: "/wwwroot/Upload/show",
        posterImgUrl: "/wwwroot/Upload/poster",
        youtubeUrl: "https://www.youtube.com/embed",
        MessageCount: 10,
        azureDetectionKey: "1c5853cfcb6a4cb3b7ee7e28fdfd5fec",
        azureDetectionUri: "https://westcentralus.api.cognitive.microsoft.com/face/v1.0",
        azureDetectionValue: 0.5,
        azureDetectionTime: 10,
        azureInspectTime: 100
    };

}
