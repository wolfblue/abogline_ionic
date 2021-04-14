import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import {AbogadoDetalleCasoPage} from '../abogado-detalle-caso/abogado-detalle-caso.page'

declare var $;

@Component({
  selector: 'app-abogado-buscar-caso',
  templateUrl: './abogado-buscar-caso.page.html',
  styleUrls: ['./abogado-buscar-caso.page.scss'],
})
export class AbogadoBuscarCasoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  casos:any = [];

  constructor(

    private http:HttpClient,
    private router: Router,
    private AbogadoDetalleCasoPage: AbogadoDetalleCasoPage

  ) { 

    //  Obtener todos los casos
    this.getCasos();

  }

  ngOnInit() {}

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
     
    var _this = this;

    let getDataCaso = new FormData();

    this.postModel("getDataCaso",getDataCaso).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.casos = result;

      var buscarCaso = "";

      for(var i = 0; i < result.length; i++){

        buscarCaso += "<tr>";
        buscarCaso += " <td>"+result[i].id+"</td>";
        buscarCaso += " <td>"+result[i].field1Desc+"</td>";
        buscarCaso += " <td>"+result[i].field2Desc+"</td>";
        buscarCaso += " <td>"+result[i].field7Desc+"</td>";
        buscarCaso += " <td><button type='button' id='"+i+"' class='btn btn-info verDetalle'>Ver Detalle</button></td>";
        buscarCaso += "</tr>";

      }

      $("#buscarCaso tbody").append(buscarCaso);

      //  Evento click ver detalle

      $(".verDetalle").click(function(){

        sessionStorage.setItem('caso',JSON.stringify(_this.casos[$(this).prop('id')]));

        _this.location('abogado-detalle-caso');
        _this.AbogadoDetalleCasoPage.getDataCaso();

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
