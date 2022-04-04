import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { takeUntil } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppComponent } from '../../app/app.component';
import { Subject } from 'rxjs';

declare var $;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private http:HttpClient,
    private appComponent:AppComponent
  ) { }

  ngOnInit() {

    //  Ocultar contenidos

    $("ion-header").hide();
    $(".chatHeader").hide();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  //  AUTENTICAR

  autenticar(){

    //  Variables iniciales
    var _this = this;

    //  Validar contraseña del usuario

    let apiUsuariosGetUserPassword = new FormData();

    apiUsuariosGetUserPassword.append("usuario",$("#loginUsuario").val());
    apiUsuariosGetUserPassword.append("password",$("#loginPassword").val());

    _this.postModel("apiUsuariosGetUserPassword",apiUsuariosGetUserPassword).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length == 0){

        $.alert('Los datos ingresados no son válidos');

      }else{

        if(result[0].perfil == "administrador"){

          sessionStorage.setItem("autenticado","1");
          sessionStorage.setItem("usuario",result[0].usuario);
          sessionStorage.setItem("perfil",result[0].perfil);

          _this.appComponent.getUser();
          _this.appComponent.location("/home");

        }else{

          $.alert('Los datos ingresados no son válidos');

        }

      }

    });

  }

}
