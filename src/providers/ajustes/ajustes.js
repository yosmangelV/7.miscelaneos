var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";
var AjustesProvider = /** @class */ (function () {
    function AjustesProvider(storage, platform) {
        this.storage = storage;
        this.platform = platform;
        this.ajustes = {
            mostrar_tutorial: true
        };
        console.log('Hello AjustesProvider Provider');
    }
    AjustesProvider.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                _this.storage.ready().then(function () {
                    _this.storage.get("ajustes").then(function (ajustes) {
                        if (ajustes) {
                            _this.ajustes = ajustes;
                        }
                        resolve();
                    });
                });
            }
            else {
                if (localStorage.getItem("ajustes")) {
                    _this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
                }
                resolve();
            }
        });
        return promesa;
    };
    AjustesProvider.prototype.guardar_storage = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.storage.ready().then(function () {
                _this.storage.set("ajustes", _this.ajustes);
            });
        }
        else {
            localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
        }
    };
    AjustesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage,
            Platform])
    ], AjustesProvider);
    return AjustesProvider;
}());
export { AjustesProvider };
//# sourceMappingURL=ajustes.js.map