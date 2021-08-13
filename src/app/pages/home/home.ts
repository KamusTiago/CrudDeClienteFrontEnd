import { Component } from "@angular/core";
import { CredenciaisDTO } from "src/app/models/credenciais.dto";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage{

    creds :CredenciaisDTO ={
        email: "",
        senha: ""
      };
    
      constructor() {
      }
    
      login(){
        
      }
    
      singUp(){
      }
    
    
    }