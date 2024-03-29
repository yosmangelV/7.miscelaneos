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
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AjustesProvider } from "../providers/ajustes/ajustes";
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _ajustes) {
        var _this = this;
        this.platform = platform;
        this._ajustes = _ajustes;
        platform.ready().then(function () {
            _this._ajustes.cargar_storage().then(function () {
                if (_this._ajustes.ajustes.mostrar_tutorial) {
                    _this.rootPage = "IntroduccionPage";
                }
                else {
                    _this.rootPage = HomePage;
                }
                _this.platform.pause.subscribe(function () {
                    console.log("----->La aplicacion se detendrá");
                });
                _this.platform.resume.subscribe(function () {
                    console.log("------>La aplicacion se iniciará");
                });
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
            });
        });
    }
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen,
            AjustesProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map