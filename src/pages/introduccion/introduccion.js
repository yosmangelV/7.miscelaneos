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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AjustesProvider } from "../../providers/ajustes/ajustes";
var IntroduccionPage = /** @class */ (function () {
    function IntroduccionPage(navCtrl, navParams, _ajustes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ajustes = _ajustes;
        this.slides = [
            {
                title: "Bienvenido!!!",
                description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
                image: "assets/imgs/ica-slidebox-img-1.png",
            },
            {
                title: "¿Qué es ionic?",
                description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
                image: "assets/imgs/ica-slidebox-img-2.png",
            },
            {
                title: "¿Que hace esta app?",
                description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
                image: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    IntroduccionPage.prototype.saltar_tutorial = function () {
        this._ajustes.ajustes.mostrar_tutorial = false;
        this._ajustes.guardar_storage();
        this.navCtrl.setRoot(HomePage);
    };
    IntroduccionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-introduccion',
            templateUrl: 'introduccion.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AjustesProvider])
    ], IntroduccionPage);
    return IntroduccionPage;
}());
export { IntroduccionPage };
//# sourceMappingURL=introduccion.js.map