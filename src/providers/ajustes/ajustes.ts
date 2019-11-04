import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular";

@Injectable()
export class AjustesProvider {

	ajustes={
		mostrar_tutorial:true
	}
  constructor(private storage: Storage,
  				private platform:Platform) {
    console.log('Hello AjustesProvider Provider');
  }

  cargar_storage(){

  	let promesa =new Promise((resolve,reject)=>{
  		if(this.platform.is("cordova")){
  			this.storage.ready().then(()=>{
  				this.storage.get("ajustes").then(ajustes=>{
  					if(ajustes){
  						this.ajustes=ajustes;
  					}
  					
  					resolve();
  				});	
  			});
	  	}else{
	  		if(localStorage.getItem("ajustes")){
	  			this.ajustes=JSON.parse(localStorage.getItem("ajustes"));
	  		}
	  		resolve();
	  		
	  	}
  	});

  	return promesa;
  	
  }

  guardar_storage(){
  	if(this.platform.is("cordova")){
  		this.storage.ready().then(()=>{
  			this.storage.set("ajustes",this.ajustes);
  		});
  	}else{
  		localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  	}
  }
}
