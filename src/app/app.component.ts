import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../environments/environment';
import {AbogadoProfilePage} from './abogado-profile/abogado-profile.page';
import {ClienteProfilePage} from './cliente-profile/cliente-profile.page';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private unsubscribe$ = new Subject<void>();
  public design = 0;
  public email = "";
  public auth: any = 0;
  public mainActive: any = "inicio";
  public profile = sessionStorage.getItem("profile");
  public notificacionesTotal: any = "0";

  constructor(
    private http:HttpClient,
    private router: Router,
    private AbogadoProfilePage: AbogadoProfilePage,
    private ClienteProfilePage: ClienteProfilePage
  ) {

    var _this = this;

  }

  ngOnInit() {

    var _this = this;
    
    //  Validar autenticación
    this.validateAuth();

    //  Activar opción menú principal

    setTimeout(function(){

      $(".main").removeClass("active");
      $("."+_this.mainActive).addClass("active");

    },1500);

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /************************************************************************************* */

  location(ruta){

    //  Limpiar variables de sesión
    sessionStorage.setItem('caso','0');

    window.location = ruta;

  }

  /************************************************************************************* */

  /**
   * Validar autenticación
   */

  validateAuth(){

    if(sessionStorage.getItem("email")){

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
      this.profile = sessionStorage.getItem("profile");

      //  Obtener total notificaciones

      //this.getNotificaciones();

      setInterval(function(){

        //this.getNotificaciones();

      },3000);

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

    sessionStorage.setItem("email","");

    this.auth = 0;
    this.email = "";
    this.validateAuth();
    this.router.navigateByUrl("home");

   }

   /**
    * Dirigir actualizar perfil de usuario
    */

   profileLink(){

    if(sessionStorage.getItem("profile") == "cliente"){

      this.router.navigateByUrl("cliente-profile");
      this.ClienteProfilePage.getDataCliente();


    }else{

      this.router.navigateByUrl("abogado-profile");
      this.AbogadoProfilePage.getDataAbogado();

    }

  }

  /************************************************************************ */

  /**
   * Obtener todas las notificaciones de un usuario
   */

   getNotificaciones(){

    let getNotificacion = new FormData();

    getNotificacion.append("email", sessionStorage.getItem("email"));

    this.postModel("getNotificacion",getNotificacion).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.notificacionesTotal = result.length;

    });

   }

}
