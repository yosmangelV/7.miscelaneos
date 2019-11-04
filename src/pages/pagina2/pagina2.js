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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
var Pagina2Page = /** @class */ (function () {
    function Pagina2Page(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    Pagina2Page.prototype.ir_pagina3 = function () {
        this.navCtrl.push("mi-pagina3");
    };
    Pagina2Page.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad");
    };
    Pagina2Page.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter");
    };
    Pagina2Page.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
    };
    Pagina2Page.prototype.ionViewWillLeave = function () {
        console.log("ionViewWillLeave");
    };
    Pagina2Page.prototype.ionViewDidLeave = function () {
        console.log("ionViewDidLeave");
    };
    Pagina2Page.prototype.ionViewCanEnter = function () {
        if (this.navParams.get("access")) {
            console.log("Pase usted");
            return true;
        }
        {
            console.log("acceso rechazado");
            return false;
        }
    };
    Pagina2Page.prototype.ionViewCanLeave = function () {
        console.log("ionViewCanLeave");
        console.log("Espere 2 segundos para salir");
        var loading = let, promesa = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, 2000);
        });
    };
    Pagina2Page = __decorate([
        Component({
            selector: 'page-pagina2',
            templateUrl: 'pagina2.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController])
    ], Pagina2Page);
    return Pagina2Page;
}());
export { Pagina2Page };
//# sourceMappingURL=pagina2.js.map