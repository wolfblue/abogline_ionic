import { Component, ViewChild, TemplateRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../environments/environment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild("modalRegistoMain", {static: false}) modalRegistoMain: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();
  public email = "";
  public auth: any = 0;
  public mainActive: any = "inicio";
  public profile = sessionStorage.getItem("profile");
  public notificacionesTotal: any = "0";
  
  closeResult = '';
  design = 0;
  usuario:any = "";

  constructor(
    private http:HttpClient,
    private router: Router,
    private modalService: NgbModal
  ) {

    var _this = this;

  }

  ngOnInit() {

    //  Variables iniciales
    var _this = this;
    
    //  Validar autenticación
    this.validateAuth();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */
  //  Redireccionar
  /************************************************************************************* */

  location(ruta){

    //  Limpiar variables de sesión
    sessionStorage.setItem("idCaso","0");

    //  Redireccionar
    window.location.href = ruta;

  }

  /************************************************************************************* */
  //  Validar autenticación
  /************************************************************************************* */

  validateAuth(){

    //  Variables iniciales
    var _this = this;

    if(sessionStorage.getItem("usuario")){  //  Sesión abierta

      //  Ocultar botones

      $(".register").hide();
      $(".login").hide();

      //  Mostrar botones

      $(".logout").show();
      $(".email").show();
      $(".notification").show();

      //  Datos de autenticación

      this.auth = 1;
      this.email = sessionStorage.getItem("email");
      this.profile = sessionStorage.getItem("perfil");
      this.usuario = sessionStorage.getItem("usuario");

    }else{

      //  Ocultar botones

      $(".logout").hide();
      $(".email").hide();
      $(".notification").hide();

      //  Mostrar botones

      $(".register").show();
      $(".login").show();

    }

  }

  /**
   * Cerrar sesión
   */

   logout(){

      //  Limpiar variables de sesión

      sessionStorage.setItem("email","");
      sessionStorage.setItem("usuario","");
      sessionStorage.setItem("perfil","");

      //  Limpiar variables
      this.usuario = "";

    this.auth = 0;
    this.email = "";
    this.validateAuth();
    this.router.navigateByUrl("home");

   }

   /**************************************************************************** */
  //  MODAL
  /**************************************************************************** */

  open(content) {

    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }

  /**************************************************************************** */
  //  REGISTRARSE DESDE EL MENÚ
  /**************************************************************************** */

  registrarseMain(){

    //  Variables iniciales
    var _this = this;

    // Abrir modal
    _this.open(_this.modalRegistoMain);

    //  Editar estilos

    setTimeout(function(){
      $(".modal-content").css("background","none");
      $(".modal-content").css("border","0px solid");
      $(".modal-dialog").css("margin-top","13%");
    },20);

  }

}
