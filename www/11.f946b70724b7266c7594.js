(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{bR24:function(t,e,o){"use strict";o.r(e),o.d(e,"AdminTipoDocumentoPageModule",function(){return O});var n=o("ofXK"),i=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),r=o("1G5W"),a=o("XNiG"),b=o("AytR"),p=o("fXoL"),m=o("tk/3"),d=o("1kSV"),l=o("JqCM");const u=["modalRegister"];function g(t,e){if(1&t){const t=p.Qb();p.Pb(0,"tr"),p.Pb(1,"td"),p.Ic(2),p.Ob(),p.Pb(3,"td",3),p.cc(),p.Pb(4,"svg",6),p.ac("click",function(){p.zc(t);const o=e.$implicit;return p.dc().deleteTipoDocumento(o.tipo_documento)}),p.Lb(5,"path",7),p.Lb(6,"path",8),p.Ob(),p.Ob(),p.Ob()}if(2&t){const t=e.$implicit;p.yb(2),p.Jc(t.tipo_documento)}}function h(t,e){if(1&t){const t=p.Qb();p.Pb(0,"div",9),p.Pb(1,"form"),p.Pb(2,"div",10),p.Pb(3,"label",11),p.Ic(4,"Tipo documento"),p.Ob(),p.Lb(5,"input",12),p.Pb(6,"small",13),p.Ic(7,"Ingresar nombre del tipo de documento."),p.Ob(),p.Ob(),p.Lb(8,"p",14),p.Pb(9,"button",15),p.ac("click",function(){return p.zc(t),p.dc().formRegister()}),p.Ic(10,"Agregar tipo de documento"),p.Ob(),p.Ob(),p.Ob()}}const f=[{path:"",component:(()=>{class t{constructor(t,e,o,n){this.http=t,this.router=e,this.modalService=o,this.spinner=n,this.unsubscribe$=new a.a,this.tiposDocumentos=[],this.getTiposDocumentos()}ngOnInit(){}postModel(t,e){return this.http.post(""+b.a.apiUrl+t,e)}open(t){this.modal=this.modalService.open(t,{centered:!0,backdropClass:"light-blue-backdrop"}),this.modal.result.then(t=>{console.log("dialogo cerrado")})}addTipoDocumento(){this.open(this.modalRegister)}formRegister(){var t=this,e=0,o="",n=$("#tipoDocumento").val();if(t.spinner.show(),n||(e=1,o="El campo tipo de documento es obligatorio."),1==e&&($(".msg").css("color","red"),$(".msg").html(o),$(".msg").show(),setTimeout(function(){$(".msg").hide()},3e3)),0==e){let e=new FormData;e.append("tipoDocumento",n),t.postModel("apiAdminTipoDocumentoRegister",e).pipe(Object(r.a)(t.unsubscribe$)).subscribe(e=>{t.spinner.hide(),$(".msg").css("color","green"),$(".msg").html("Se registro el tipo de documento correctamente."),$(".msg").show(),setTimeout(function(){$(".msg").hide(),t.modal.close(),$(".tipoDocumento").val(""),t.getTiposDocumentos()},3e3)})}}getTiposDocumentos(){var t=this;t.spinner.show();let e=new FormData;t.postModel("apiAdminTipoDocumentoGet",e).pipe(Object(r.a)(t.unsubscribe$)).subscribe(e=>{t.spinner.hide(),t.tiposDocumentos=e,setTimeout(function(){$("#tableDT").DataTable()})})}deleteTipoDocumento(t){var e=this;e.spinner.show();let o=new FormData;o.append("tipoDocumento",t),e.postModel("apiAdminTipoDocumentoDelete",o).pipe(Object(r.a)(e.unsubscribe$)).subscribe(t=>{e.spinner.hide(),e.getTiposDocumentos()})}}return t.\u0275fac=function(e){return new(e||t)(p.Kb(m.a),p.Kb(s.g),p.Kb(d.a),p.Kb(l.c))},t.\u0275cmp=p.Eb({type:t,selectors:[["app-admin-tipo-documento"]],viewQuery:function(t,e){if(1&t&&p.Nc(u,!0),2&t){let t;p.wc(t=p.bc())&&(e.modalRegister=t.first)}},decls:16,vars:1,consts:[[1,"container"],["type","submit",1,"btn","btn-primary","addBtn",3,"click"],["id","tableDT",1,"table","table-striped","table-bordered",2,"width","100%"],[1,"center"],[4,"ngFor","ngForOf"],["modalRegister",""],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","red","viewBox","0 0 16 16",1,"bi","bi-trash",3,"click"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"],["fill-rule","evenodd","d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"],[1,"modal-body"],[1,"form-group"],["for","tipoDocumento"],["type","text","id","tipoDocumento","aria-describedby","emailHelp","placeholder","Ingresar tipo de documento",1,"form-control"],["id","tipoDocumentoHelp",1,"form-text","text-muted"],[1,"msg"],["type","submit",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(p.Pb(0,"div",0),p.Pb(1,"h3"),p.Ic(2,"Administrar Tipos de Documentos"),p.Ob(),p.Pb(3,"button",1),p.ac("click",function(){return e.addTipoDocumento()}),p.Ic(4,"Agregar Tipo de Documento"),p.Ob(),p.Pb(5,"table",2),p.Pb(6,"thead"),p.Pb(7,"tr"),p.Pb(8,"th",3),p.Ic(9,"Tipo de documento"),p.Ob(),p.Pb(10,"th",3),p.Ic(11,"Acciones"),p.Ob(),p.Ob(),p.Ob(),p.Pb(12,"tbody"),p.Gc(13,g,7,1,"tr",4),p.Ob(),p.Ob(),p.Ob(),p.Gc(14,h,11,0,"ng-template",null,5,p.Hc)),2&t&&(p.yb(13),p.kc("ngForOf",e.tiposDocumentos))},directives:[n.l,i.i,i.e,i.f],styles:["h3[_ngcontent-%COMP%]{margin-top:3%}#tableDT[_ngcontent-%COMP%]{margin-top:8%}.addBtn[_ngcontent-%COMP%]{float:right}.center[_ngcontent-%COMP%]{text-align:center}.btnDelete[_ngcontent-%COMP%]{margin-left:2%}.msg[_ngcontent-%COMP%]{display:none}"]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(f)],s.i]}),t})(),O=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[n.c,i.a,c.e,D]]}),t})()}}]);