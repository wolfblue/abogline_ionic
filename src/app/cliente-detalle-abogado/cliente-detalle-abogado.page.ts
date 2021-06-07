import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';
import { NgxSpinnerService  } from "ngx-spinner";

declare var $;

@Component({
  selector: 'app-cliente-detalle-abogado',
  templateUrl: './cliente-detalle-abogado.page.html',
  styleUrls: ['./cliente-detalle-abogado.page.scss'],
})
export class ClienteDetalleAbogadoPage implements OnInit {

  private unsubscribe$ = new Subject<void>();
  msg:any = "";
  error: any = 0;
  abogados:any = [];

  constructor(

    private http:HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService

  ) { }

  ngOnInit() {

    //  Consultar abogados
    this.getAbogados();

  }

  postModel(Metodo: string, data: FormData) {
    let url = `${environment.apiUrl}` + Metodo;
    return this.http.post(url, data);
  }

  location(ruta){

    window.location = ruta; 

  }

  /******************************************************************************** */

  /**
   * Consultar abogados inscritos
   */

  getAbogados(){

    //  Variables iniciales

    var _this = this;
    this.spinner.show();
    var caso = JSON.parse(sessionStorage.getItem('caso'));

    //  Consultar abogados

    let getAbogados = new FormData();

    getAbogados.append("idCaso",caso.id);

    this.postModel("getAbogados",getAbogados).pipe(takeUntil(this.unsubscribe$)).subscribe((result: any) => {

      this.spinner.hide();

      this.abogados = result;

      var buscarAbogado = "";
      var abogadoCon = "";

      for(var i = 0; i < result.length; i++){

        //  Validar Abogado con licencia o tarjeta


        if(result[i].document1 == 1)
          abogadoCon = "Licencia temporal";
        else
          abogadoCon = "Tarjeta profesional";

        buscarAbogado += "<tr>";
        buscarAbogado += " <td>"+result[i].fullname+"</td>";
        buscarAbogado += " <td>"+abogadoCon+"</td>";
        buscarAbogado += " <td>"+result[i].university+"</td>";
        buscarAbogado += " <td>"+result[i].years+"</td>";
        buscarAbogado += " <td>$"+parseInt(result[i].price).toLocaleString()+"</td>";
        buscarAbogado += " <td>";
        buscarAbogado += "   <button type='button' id='"+i+"' class='btn btn-info verDetalle'>Ver Detalle</button>";
        buscarAbogado += " </td>";
        buscarAbogado += "</tr>";

      }

      $("#buscarAbogado tbody").append(buscarAbogado);

      //  Aplicar estilos

      $("td").css("vertical-align","middle");
      $("button").css("width","100%");
      $("button").css("margin","1%");

      //  Evento click ver detalle

      $(".verDetalle").click(function(){

        sessionStorage.setItem('abogado',JSON.stringify(_this.abogados[$(this).prop('id')]));

        _this.location('cliente-abogado');

      });

      //  Datatable casos

      $('#buscarAbogado thead tr').clone(true).appendTo( '#buscarAbogado thead' ); 
      $('#buscarAbogado thead tr:eq(1) th').each( function (i) {
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

      });

      var table = $('#buscarAbogado').DataTable( {
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
