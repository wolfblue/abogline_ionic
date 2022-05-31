import { Component,ViewChild, TemplateRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxTweetModule } from "ngx-tweet";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("modalRegistoMain", {static: false}) modalRegistoMain: TemplateRef<any>;

  closeResult = '';
  perfil = "";

  constructor(
    private modalService: NgbModal
  ) {

    //  Variables de sesión
    this.variablesSesion();

  }

  /************************************************************************************* */
  //  Redireccionar
  /************************************************************************************* */

  location(ruta){

    console.log(ruta);

    //  Redireccionar
    window.location.href = ruta;

  }

  //  VARIABLES DE SESIÓN

  variablesSesion(){

    //  Variables iniciales
    var _this = this;

    //  Obtener variables de sesión

    if(sessionStorage.getItem("perfil"))
      _this.perfil = sessionStorage.getItem("perfil");

  }

}