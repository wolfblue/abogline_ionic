import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { count, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import { NgxSpinnerService  } from "ngx-spinner";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

declare var $;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild("modalEditUser", {static: false}) modalEditUser: TemplateRef<any>;

  private unsubscribe$ = new Subject<void>();

  usuario = sessionStorage.getItem("usuario");
  perfil = sessionStorage.getItem("perfil");
  usuarios:any = [];
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

    let apiAboglineUsuariosGetInfo = new FormData();

    _this.postModel("apiAboglineUsuariosGetInfo",apiAboglineUsuariosGetInfo).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      if(result.length > 0)
        _this.usuarios = result[0].usuarios;

      //  Datatable
      $('#usuarios').DataTable();

    });

  }

  /**************************************************************************** */
  //  EDITAR USUARIO
  /**************************************************************************** */

  editarUsuario(i){

    // Variables iniciales
    var _this = this;

    //  Abrir modal
    _this.open(_this.modalEditUser);

    //  Cargar información del usuario a modificar

    $("#usuario").val(_this.usuarios[i].usuario);
    $("#nombres").val(_this.usuarios[i].nombres);
    $("#apellidos").val(_this.usuarios[i].apellidos);

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

  actualizarUsuario(){

    // Variables iniciales
    var _this = this;

    //  Actualizar usuario

    let apiAboglineUsuariosUpdate = new FormData();

    apiAboglineUsuariosUpdate.append("usuario",$("#usuario").val());
    apiAboglineUsuariosUpdate.append("nombres",$("#nombres").val());
    apiAboglineUsuariosUpdate.append("apellidos",$("#apellidos").val());

    _this.postModel("apiAboglineUsuariosUpdate",apiAboglineUsuariosUpdate).pipe(takeUntil(_this.unsubscribe$)).subscribe((result: any) => {

      window.location.href = "/usuarios";

    });    

  }

}
