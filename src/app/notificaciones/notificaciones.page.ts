import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  notificaciones: any = [];

  constructor(

    private http:HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService

  ) { 

    //  Obtener todas las notificaciones
    this.getNotificaciones();

  }

  ngOnInit() {}

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){

    this.router.navigateByUrl(ruta); 

  }

  /************************************************************************************* */

  /**
   * Modal confirmar notificaciones
   */

   modalConfirmar(titulo,body){

    var _this = this;

    $(".modal-title").html(titulo);
    $(".modal-body").html(body);
    $(".modalConfirmNotification").modal("toggle");
    $(".modalContinuar").unbind("click");

    $(".modal-continuar").click(function(){
      $(".modalConfirm").modal("toggle");
    });

  }

  /************************************************************************ */

  /**
   * Obtener todas las notificaciones de un usuario
   */

   getNotificaciones(){
     
    //  Variables iniciales

    var _this = this;
    this.spinner.show();

    let getNotificacion = new FormData();

    getNotificacion.append("email", sessionStorage.getItem("email"));
    getNotificacion.append("tipo", "2");

    this.postModel("getNotificacion",getNotificacion).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.spinner.hide();

      this.notificaciones = result;

      var buscarNotificaciones = "";

      for(var i = 0; i < result.length; i++){

        //  Validar leído o no leído

        var background = "#3880ff6e";
        
        if(result[i].active == '2')
          background = "#ffffff";

        buscarNotificaciones += "<tr class='notificacion' style='background:" + background + ";'>";
        buscarNotificaciones += " <td>";
        buscarNotificaciones += "   <input class='id' type='hidden' value='" + result[i].id + "' />";
        buscarNotificaciones += "   <input class='tipo' type='hidden' value='" + result[i].tipo + "' />";
        buscarNotificaciones += "   <input class='message' type='hidden' value='" + result[i].message + "' />";
        buscarNotificaciones += "   <input class='idCaso' type='hidden' value='" + result[i].id_caso + "' />";
        buscarNotificaciones += "   <input class='estadoProceso' type='hidden' value='" + result[i].estadoProceso + "' />";
        buscarNotificaciones += "   <input class='idReunion' type='hidden' value='" + result[i].idReunion + "' />";
        buscarNotificaciones +=     result[i].tipo;
        buscarNotificaciones += " </td>";
        buscarNotificaciones += " <td>"+result[i].created_at+"</td>";
        buscarNotificaciones += "</tr>";

      }

      $("#buscarNotificaciones tbody").append(buscarNotificaciones);

      //  Aplicar estilos

      $(".notificacion").hover(function(e) { 

        $(this).css("cursor","pointer");
        $(this).css("opacity","0.4");

      },function(){

        $(this).css("cursor","default");
        $(this).css("opacity","1");

      });

      //  Abrir modal notificación

      $(".notificacion").click(function(){

        sessionStorage.setItem("idReunion",$(this).find(".idReunion").val());

        $(".modalConfirmNotification").modal("show");
        $(".mnTitle").html($(this).find(".tipo").val());

        var message = $(this).find(".message").val();

        //  Agregar botón detalle del caso cuando aplique

        if($(this).find(".idCaso").val() && $(this).find(".estadoProceso").val() != "3"){

          message += "<br><br>";
          message += "<button type'button' data-dismiss='modal' class='btn btn-primary irCaso' id='"+$(this).find(".idCaso").val()+"'>Ir al caso</button>";

        }

        $(".mnMessage").html(message);
        $(this).css("background","#ffffff");

        //  Agregar evento para ir al caso

        $(".irCaso").unbind();

        $(".irCaso").click(function(){

          _this.spinner.show();

          //  Consultar datos del caso

          let getDataCasoEspecifico = new FormData();

          getDataCasoEspecifico.append("idCaso", $(this).prop("id"));
          getDataCasoEspecifico.append("emailLogin", sessionStorage.getItem("email"));

          _this.postModel("getDataCasoEspecifico",getDataCasoEspecifico).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

            _this.spinner.hide();

            sessionStorage.setItem("caso",JSON.stringify(result[0]));
            sessionStorage.setItem("notificacion","true");

            _this.location("/abogado-detalle-caso");

          });

        });

        //  Actualizar notificación como leído

        let notificacionLeido = new FormData();

        notificacionLeido.append("id", $(this).find(".id").val());

        _this.postModel("notificacionLeido",notificacionLeido).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

        });

      });

      //  Datatable notificaciones

      $('#buscarNotificaciones thead tr').clone(true).appendTo( '#buscarNotificaciones thead' );
      $('#buscarNotificaciones thead tr:eq(1) th').each( function (i) {
          var title = $(this).text();

          if(title != 'Acciones')
            $(this).html( '<input type="text" />' );
          else
          $(this).html( '' );
   
          $( 'input', this ).on( 'keyup change', function () {
              if ( table.column(i).search() !== this.value ) {
                  table
                      .column(i)
                      .search( this.value )
                      .draw();
              }
          } );

      } );
   
      var table = $('#buscarNotificaciones').DataTable( {
          orderCellsTop: true,
          fixedHeader: true,
          order: [[ 1, "desc" ]],
          language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }

      });

    });

   }

}
