import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {ClienteDetalleCasoPage} from '../cliente-detalle-caso/cliente-detalle-caso.page';
import {ClienteDetalleAbogadoPage} from '../cliente-detalle-abogado/cliente-detalle-abogado.page';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-cliente-buscar-caso',
  templateUrl: './cliente-buscar-caso.page.html',
  styleUrls: ['./cliente-buscar-caso.page.scss'],
})
export class ClienteBuscarCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  casos:any = [];

  constructor(

    private http:HttpClient,
    private router: Router,
    private ClienteDetalleCasoPage: ClienteDetalleCasoPage,
    private ClienteDetalleAbogadoPage: ClienteDetalleAbogadoPage,
    private spinner: NgxSpinnerService

  ) { 

    //  Obtener todos los casos
    this.getCasos();

  }

  ngOnInit() {
  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){

    window.location = ruta; 

  }

  /************************************************************************ */

  /**
   * Obtener todos los casos
   */

   getCasos(){
     
    //  Variables iniciales

    var _this = this;
    this.spinner.show();

    let getDataCaso = new FormData();

    getDataCaso.append("email",sessionStorage.getItem("email"));

    this.postModel("getDataCaso",getDataCaso).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.spinner.hide();

      this.casos = result;

      var buscarCaso = "";

      for(var i = 0; i < result.length; i++){

        buscarCaso += "<tr>";
        buscarCaso += " <td>"+result[i].id+"</td>";
        buscarCaso += " <td>"+result[i].field1Desc+"</td>";
        buscarCaso += " <td>"+result[i].field2Desc+"</td>";
        buscarCaso += " <td>"+result[i].field7Desc+"</td>";
        buscarCaso += " <td>";
        buscarCaso += "   <button type='button' id='"+i+"' class='btn btn-info verDetalle'>Ver Detalle</button>";

        //  Permitir editar el caso cuando no se ha iniciado un proceso

        if(result[i].hasProceso == 'N')
          buscarCaso += "   <button type='button' id='"+i+"' class='btn btn-info editarCaso'>Editar Caso</button>";

        //  Permitir consultar abogado cuando no se ha realizado merge con alguno

        if(!result[i].abogado)
          buscarCaso += "   <button type='button' id='"+i+"' class='btn btn-success verAbogado'>Consultar Abogado</button>";

        buscarCaso += " </td>";
        buscarCaso += "</tr>";

      }

      $("#buscarCaso tbody").append(buscarCaso);

      //  Aplicar estilos

      $("td").css("vertical-align","middle");
      $("button").css("width","100%");
      $("button").css("margin","1%");

      //  Evento click ver detalle

      $(".verDetalle").click(function(){

        sessionStorage.setItem('caso',JSON.stringify(_this.casos[$(this).prop('id')]));

        _this.location('cliente-detalle-caso');
        _this.ClienteDetalleCasoPage.getDataCaso();

      });

      //  Evento editar caso

      $(".editarCaso").click(function(){

        sessionStorage.setItem('caso',JSON.stringify(_this.casos[$(this).prop('id')]));
        _this.location('cliente-caso');

      });

      //  Evento click ver abogado

      $(".verAbogado").click(function(){

        sessionStorage.setItem('caso',JSON.stringify(_this.casos[$(this).prop('id')]));

        _this.location('cliente-detalle-abogado');

      });

      //  Datatable casos

      $('#buscarCaso thead tr').clone(true).appendTo( '#buscarCaso thead' );
      $('#buscarCaso thead tr:eq(1) th').each( function (i) {
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
   
      var table = $('#buscarCaso').DataTable( {
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
