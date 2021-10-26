import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var $;

@Component({
  selector: 'app-admin-agendas',
  templateUrl: './admin-agendas.page.html',
  styleUrls: ['./admin-agendas.page.scss'],
})
export class AdminAgendasPage implements OnInit {

  @ViewChild("modalEditAgenda", {static: false}) modalEditAgenda: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  usuario = sessionStorage.getItem("usuario");
  perfil = sessionStorage.getItem("perfil");
  agendas:any = [];
  closeResult = '';

  constructor(

    private http:HttpClient,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal

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

    //  Variables iniciales
    var _this = this;

    let apiAboglineAdminAgendasGetInfo = new FormData();

    _this.postModel("apiAboglineAdminAgendasGetInfo",apiAboglineAdminAgendasGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.agendas = result[0].agendas;

      //  Datatable
      $('#agendas').DataTable();

    });

  }

  /**************************************************************************** */
  //  EDITAR AGENDA
  /**************************************************************************** */

  editarAgenda(i){

    // Variables iniciales
    var _this = this;

    //  Abrir modal
    _this.open(_this.modalEditAgenda);

    //  Cargar información del usuario a modificar

    $("#idAgenda").val(_this.agendas[i].id);
    $("#agenda").val(_this.agendas[i].descripcion);
    $("#link").val(_this.agendas[i].link);

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
  //  ACTUALIZAR USUARIO
  /**************************************************************************** */

  actualizarLink(i){

    // Variables iniciales
    var _this = this;

    //  Actualizar usuario

    let apiAboglineAdminAgendaUpdate = new FormData();

    apiAboglineAdminAgendaUpdate.append("idAgenda",$("#idAgenda").val());
    apiAboglineAdminAgendaUpdate.append("link",$("#link").val());

    _this.postModel("apiAboglineAdminAgendaUpdate",apiAboglineAdminAgendaUpdate).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      window.location.href = "/admin-agendas";

    });    

  }

}
