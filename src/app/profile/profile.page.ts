import { Component, OnInit } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  perfil = "";

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService

  ) {

    //  Consultar información de la página
    this.getInfoPage();

  }

  ngOnInit() {}

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  /**************************************************************************** */
  //  CONSULTAR INFORMACIÓN DE LA PÁGINA
  /**************************************************************************** */

  getInfoPage(){

    var _this = this;

    //  Consultar perfil del usuario autenticado
    _this.perfil = sessionStorage.getItem("perfil");

    //  Consultar información inicial de la página

    let apiAboglineProfileGetInfo = new FormData();

    apiAboglineProfileGetInfo.append("usuario",sessionStorage.getItem("usuario"));

    _this.postModel("apiAboglineProfileGetInfo",apiAboglineProfileGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0){

        // Cargar información del cliente

        if(sessionStorage.getItem("perfil") == "cliente"){

          $("#clienteCampo1 input").val(result[0].perfil[0].nombres);
          $("#clienteCampo2 input").val(result[0].perfil[0].apellidos);
          $("#clienteCampo3 select").val(result[0].perfil[0].tipo_identificacion);
          $("#clienteCampo4 input").val(result[0].perfil[0].identificacion);
          $("#clienteCampo5 input").val(result[0].perfil[0].email);
          $("#clienteCampo6 input").val(result[0].perfil[0].usuario);
          $("#clienteCampo8 input").val(result[0].perfil[0].telefono_contacto);

        }

        // Cargar información del abogado

        if(sessionStorage.getItem("perfil") == "abogado"){

          $("#clienteCampo1 input").val(result[0].perfil[0].nombres);
          $("#clienteCampo2 input").val(result[0].perfil[0].apellidos);
          $("#clienteCampo3 select").val(result[0].perfil[0].tipo_identificacion);
          $("#clienteCampo4 input").val(result[0].perfil[0].identificacion);
          $("#clienteCampo5 input").val(result[0].perfil[0].email);
          $("#clienteCampo6 input").val(result[0].perfil[0].usuario);
          $("#clienteCampo8 input").val(result[0].perfil[0].telefono_contacto);
          $("#clienteCampo9 select").val(result[0].perfil[0].genero);
          $("#clienteCampo10 input").val(result[0].perfil[0].direccion);
          $("#clienteCampo11 select").val(result[0].perfil[0].abogado_con);
          $("#clienteCampo12 input").val(result[0].perfil[0].universidad);
          $("#clienteCampo13 input").val(result[0].perfil[0].licencia);
          $("#clienteCampo14 select").val(result[0].perfil[0].experiencia);
          $("#clienteCampo15 input").val(result[0].perfil[0].anos_experiencia);
          $("#clienteCampo16 select").val(result[0].perfil[0].investigacion);
          $("#clienteCampo17 select").val(result[0].perfil[0].ramas);
          $("#clienteCampo18 input").val(result[0].perfil[0].cual_rama);
          $("#clienteCampo19 input").val(result[0].perfil[0].costo_consulta);

          //  Habilitar campos

          if(result[0].perfil[0].experiencia == "Si")
            $("#clienteCampo15 input").prop("disabled",false);

          if(result[0].perfil[0].ramas == "Otro")
            $("#clienteCampo18 input").prop("disabled",false);

        }

      }

    });

  }

  /**************************************************************************** */
  //  ACTUALIZAR PERFIL DEL CLIENTE
  /**************************************************************************** */

  actualizarCliente(){

    //  Variables iniciales
    
    var _this = this;
    var error = 0;
    var mensaje = "";

    //  Validar campos obligatorios

    if(error == 0 && !$("#clienteCampo1 input").val()){

      error = 1;
      mensaje = "El campo Nombres es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo2 input").val()){

      error = 1;
      mensaje = "El campo Apellidos es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo3 select").val()){

      error = 1;
      mensaje = "El campo Tipo de Identificación es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo4 input").val()){

      error = 1;
      mensaje = "El campo Identificación es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo5 input").val()){

      error = 1;
      mensaje = "El campo Correo electrónico es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo8 input").val()){

      error = 1;
      mensaje = "El campo Teléfono de contacto es obligatorio";

    }

    //  Validar errores
    
    if(error == 1)
      alert(mensaje);

    //  Actualizar cliente

    if(error == 0){

      let apiAboglineProfileUpdateUserCliente = new FormData();

      apiAboglineProfileUpdateUserCliente.append("usuario",sessionStorage.getItem("usuario"));
      apiAboglineProfileUpdateUserCliente.append("nombres",$("#clienteCampo1 input").val());
      apiAboglineProfileUpdateUserCliente.append("apellidos",$("#clienteCampo2 input").val());
      apiAboglineProfileUpdateUserCliente.append("tipoIdentificacion",$("#clienteCampo3 select").val());
      apiAboglineProfileUpdateUserCliente.append("identificacion",$("#clienteCampo4 input").val());
      apiAboglineProfileUpdateUserCliente.append("email",$("#clienteCampo5 input").val());
      apiAboglineProfileUpdateUserCliente.append("password",$("#clienteCampo7 input").val());
      apiAboglineProfileUpdateUserCliente.append("telefonoContacto",$("#clienteCampo8 input").val());

      _this.postModel("apiAboglineProfileUpdateUserCliente",apiAboglineProfileUpdateUserCliente).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        window.location.href = '/home';

      });

    }

  }

  /**************************************************************************** */
  //  ACTUALIZAR PERFIL DEL ABOGADO
  /**************************************************************************** */

  actualizarAbogado(){

    //  Variables iniciales
    
    var _this = this;
    var error = 0;
    var mensaje = "";

    //  Validar campos obligatorios

    if(error == 0 && !$("#clienteCampo1 input").val()){

      error = 1;
      mensaje = "El campo Nombres es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo2 input").val()){

      error = 1;
      mensaje = "El campo Apellidos es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo3 select").val()){

      error = 1;
      mensaje = "El campo Tipo de Identificación es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo4 input").val()){

      error = 1;
      mensaje = "El campo Identificación es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo5 input").val()){

      error = 1;
      mensaje = "El campo Correo electrónico es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo8 input").val()){

      error = 1;
      mensaje = "El campo Teléfono de contacto es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo9 select").val()){

      error = 1;
      mensaje = "El campo Genero es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo10 input").val()){

      error = 1;
      mensaje = "El campo Dirección es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo11 select").val()){

      error = 1;
      mensaje = "El campo ¿ Es usted abogado con ? es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo13 input").val()){

      error = 1;
      mensaje = "El campo Número de tarjeta o licencia es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo14 select").val()){

      error = 1;
      mensaje = "El campo ¿ Cuenta con experiencia laboral en el ejercicio del Derecho ? es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo16 select").val()){

      error = 1;
      mensaje = "El campo ¿ Cuenta con alguna investigación disciplinaria por parte del Consejo Superior de la Judicatura ? es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo17 select").val()){

      error = 1;
      mensaje = "El campo ¿ Cuál de las siguientes opciones se ajusta a sus gustos en las ramas del derecho o en cual le gustaría desempeñar laboralmente ? es obligatorio";

    }

    if(error == 0 && !$("#clienteCampo19 input").val()){

      error = 1;
      mensaje = "El campo ¿ Cuanto es el promedio que cobra usted por una asesoría juridica (Solo asesoría) ? es obligatorio";

    }

    //  Validar errores
    
    if(error == 1)
      alert(mensaje);

    //  Actualizar abogado

    if(error == 0){

      let apiAboglineProfileUpdateUserCliente = new FormData();

      apiAboglineProfileUpdateUserCliente.append("usuario",sessionStorage.getItem("usuario"));
      apiAboglineProfileUpdateUserCliente.append("nombres",$("#clienteCampo1 input").val());
      apiAboglineProfileUpdateUserCliente.append("apellidos",$("#clienteCampo2 input").val());
      apiAboglineProfileUpdateUserCliente.append("tipoIdentificacion",$("#clienteCampo3 select").val());
      apiAboglineProfileUpdateUserCliente.append("identificacion",$("#clienteCampo4 input").val());
      apiAboglineProfileUpdateUserCliente.append("email",$("#clienteCampo5 input").val());
      apiAboglineProfileUpdateUserCliente.append("password",$("#clienteCampo7 input").val());
      apiAboglineProfileUpdateUserCliente.append("telefonoContacto",$("#clienteCampo8 input").val());
      apiAboglineProfileUpdateUserCliente.append("genero",$("#clienteCampo9 select").val());
      apiAboglineProfileUpdateUserCliente.append("direccion",$("#clienteCampo10 input").val());
      apiAboglineProfileUpdateUserCliente.append("abogadoCon",$("#clienteCampo11 select").val());
      apiAboglineProfileUpdateUserCliente.append("universidad",$("#clienteCampo12 input").val());
      apiAboglineProfileUpdateUserCliente.append("licencia",$("#clienteCampo13 input").val());
      apiAboglineProfileUpdateUserCliente.append("experiencia",$("#clienteCampo14 select").val());
      apiAboglineProfileUpdateUserCliente.append("anosExperiencia",$("#clienteCampo15 input").val());
      apiAboglineProfileUpdateUserCliente.append("investigacion",$("#clienteCampo16 select").val());
      apiAboglineProfileUpdateUserCliente.append("ramas",$("#clienteCampo17 select").val());
      apiAboglineProfileUpdateUserCliente.append("cualRama",$("#clienteCampo18 input").val());
      apiAboglineProfileUpdateUserCliente.append("costoConsulta",$("#clienteCampo19 input").val());

      _this.postModel("apiAboglineProfileUpdateUserAbogado",apiAboglineProfileUpdateUserCliente).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        window.location.href = '/home';

      });

    }

  }

  /**************************************************************************** */
  //  CUENTA CON EXPERIENCIA LABORAL
  /**************************************************************************** */

  experienciaLaboral(){

    //  Validar si cuenta con experiencia laboral

    if($("#clienteCampo14 select").val() == "Si"){

      //  Habilitar cuantos años
      $("#clienteCampo15 input").prop("disabled",false);

    }else{

      //  Deshabilitar cuantos años

      $("#clienteCampo15 input").prop("disabled",true);
      $("#clienteCampo15 input").val("");

    }

  }

  /**************************************************************************** */
  //  OTRA RAMA
  /**************************************************************************** */

  otraRama(){

    //  Validar si ha seleccionado otra rama

    if($("#clienteCampo17 select").val() == "Otro"){

      //  Habilitar cual
      $("#clienteCampo18 input").prop("disabled",false);

    }else{

      //  Deshabilitar cuantos años

      $("#clienteCampo18 input").prop("disabled",true);
      $("#clienteCampo18 input").val("");

    }

  }

}
