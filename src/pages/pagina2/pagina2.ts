import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  accessPage:boolean;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController
              ) {
  }

  ir_pagina3(){
  	this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad(){
	  console.log("ionViewDidLoad");
  }
  ionViewWillEnter(){
	  console.log("ionViewWillEnter");
  }
  ionViewDidEnter(){
	  console.log("ionViewDidEnter");
  }
  ionViewWillLeave(){
	  console.log("ionViewWillLeave");
  }
  ionViewDidLeave(){
	  console.log("ionViewDidLeave");
  }
  ionViewCanEnter(){
    let promise= new Promise((resolve,reject)=>{
      let prompt = this.alertCtrl.create({
        title: '¿Seguro?',
        subTitle: "¿Está seguro que desea entrar?",
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Seguro',
            handler: () => resolve(true)
          }
        ]
      });
      prompt.present();
    });
    
    return promise;
  }


  ionViewCanLeave(){
  	console.log("ionViewCanLeave");
  	console.log("Espere 2 segundos para salir");
    let loading=this.loadingCtrl.create({
          content: "Cargando..."
        });

    loading.present();
  	let promesa=new Promise((resolve,reject)=>{
  		
      setTimeout(()=>{
        loading.dismiss();
  			resolve(true);
  		},2000);
  	});
    return promesa

  }
}
