import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroduccionPage } from "../pages/introduccion/introduccion";
import { AjustesProvider } from "../providers/ajustes/ajustes";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private _ajustes:AjustesProvider) {
    platform.ready().then(() => {
      
      this._ajustes.cargar_storage().then(()=>{
        if(this._ajustes.ajustes.mostrar_tutorial){
          this.rootPage = "IntroduccionPage";
        }else{
          this.rootPage= HomePage;
        }

        this.platform.pause.subscribe(()=>{
          console.log("----->La aplicacion se detendrá");
        });

        this.platform.resume.subscribe(()=>{
          console.log("------>La aplicacion se iniciará");
        });
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });

        
      
    });
  }
}

