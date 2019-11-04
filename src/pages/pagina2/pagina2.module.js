var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pagina2Page } from './pagina2';
var Pagina2PageModule = /** @class */ (function () {
    function Pagina2PageModule() {
    }
    Pagina2PageModule = __decorate([
        NgModule({
            declarations: [
                Pagina2Page,
            ],
            imports: [
                IonicPageModule.forChild(Pagina2Page),
            ],
        })
    ], Pagina2PageModule);
    return Pagina2PageModule;
}());
export { Pagina2PageModule };
//# sourceMappingURL=pagina2.module.js.map