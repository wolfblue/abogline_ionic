import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';

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

  /************************************************************************ */

  /**
   * Obtener todas las notificaciones de un usuario
   */

   getNotificaciones(){
     
    var _this = this;

    let getNotificacion = new FormData();

    getNotificacion.append("email", sessionStorage.getItem("email"));

    this.postModel("getNotificacion",getNotificacion).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.notificaciones = result;

      var buscarNotificaciones = "";

      for(var i = 0; i < result.length; i++){

        buscarNotificaciones += "<tr>";
        buscarNotificaciones += " <td>"+(i+1)+"</td>";
        buscarNotificaciones += " <td>"+result[i].message+"</td>";
        buscarNotificaciones += " <td>"+result[i].created_at+"</td>";
        buscarNotificaciones += " <td><button type='button' id='" + result[i].id + "' class='btn btn-danger eliminarNotificacion'>Eliminar Notificación</button></td>";
        buscarNotificaciones += "</tr>";

      }

      $("#buscarNotificaciones tbody").append(buscarNotificaciones);

      //  Evento click eliminar notificacion

      $(".eliminarNotificacion").click(function(){

        var confirm = window.confirm("¿ Esta seguro de eliminar la notificación ?");

        if(confirm == true){

          let deleteNotificacion = new FormData();

          deleteNotificacion.append("id", $(this).prop("id"));

          _this.postModel("deleteNotificacion",deleteNotificacion).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {
            
            _this.msg = "Se eliminó la notificación correctamente";
            
            $(".success").show();

            $(this).parent().parent().remove();

            //  Volver a la busqueda de casos

            setTimeout(function(){

              $(".success").hide();

            },3000);

          });

        }

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
