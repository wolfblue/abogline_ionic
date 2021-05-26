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
  selector: 'app-abogado-caso-proceso',
  templateUrl: './abogado-caso-proceso.page.html',
  styleUrls: ['./abogado-caso-proceso.page.scss'],
})
export class AbogadoCasoProcesoPage implements OnInit {

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

  ) { }

  ngOnInit(){

    //  Consultar casos en proceso
    this.getAbogadoCasosProceso();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){
    window.location = ruta; 
  }

  /*********************************************************************************** */

  /**
   * Consultar los casos en proceso de un abogado
   */

   getAbogadoCasosProceso(){

    //  Variables iniciales

    var _this = this;
    _this.spinner.show();
    $("#abogadoCasosProceso").hide();

    let getAbogadoCasosProceso = new FormData();

    getAbogadoCasosProceso.append("emailAbogado",sessionStorage.getItem("email"));

    _this.postModel("getAbogadoCasosProceso",getAbogadoCasosProceso).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      _this.spinner.hide();

      _this.casos = result;

      console.log(_this.casos);

      //  Datatable

      setTimeout(function(){

        $('#abogadoCasosProceso thead tr').clone(true).appendTo( '#abogadoCasosProceso thead' );
        $('#abogadoCasosProceso thead tr:eq(1) th').each( function (i) {
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
    
        var table = $('#abogadoCasosProceso').DataTable( {
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

        $("#abogadoCasosProceso").show();

      },1000);

    });

   }

}
