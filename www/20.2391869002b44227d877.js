(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{QnAp:function(i,t,c){"use strict";c.r(t),c.d(t,"AdminSolicitudesPageModule",function(){return L});var o=c("ofXK"),e=c("3Pt+"),n=c("TEn/"),a=c("tyNb"),r=c("1G5W"),l=c("XNiG"),s=c("AytR"),d=c("fXoL"),b=c("tk/3"),u=c("1kSV"),p=c("JqCM");const h=["modalLink"],m=["modalRechazarDocumentos"];function g(i,t){if(1&i){const i=d.Qb();d.Pb(0,"div",8),d.Pb(1,"div",9),d.dc(),d.Pb(2,"svg",10),d.ac("click",function(){d.Bc(i);const t=d.ec().$implicit;return d.ec().aprobarSolicitud(t.id)}),d.Lb(3,"path",11),d.Ob(),d.Ob(),d.cc(),d.Pb(4,"div",9),d.dc(),d.Pb(5,"svg",12),d.ac("click",function(){d.Bc(i);const t=d.ec().$implicit;return d.ec().rechazarSolicitud(t.id)}),d.Lb(6,"path",13),d.Lb(7,"path",14),d.Ob(),d.Ob(),d.Ob()}}function f(i,t){if(1&i){const i=d.Qb();d.Pb(0,"div"),d.dc(),d.Pb(1,"svg",15),d.ac("click",function(){d.Bc(i);const t=d.ec().$implicit;return d.ec().asignarLink(t.id,t.id_calendario)}),d.Lb(2,"path",16),d.Lb(3,"path",17),d.Ob(),d.Ob()}}function O(i,t){if(1&i){const i=d.Qb();d.Pb(0,"div"),d.Pb(1,"div",8),d.Pb(2,"div",9),d.dc(),d.Pb(3,"svg",18),d.ac("click",function(){d.Bc(i);const t=d.ec().$implicit;return d.ec().aprobarSolicitudDocumentos(t.id,t.id_caso)}),d.Lb(4,"path",19),d.Ob(),d.Ob(),d.cc(),d.Pb(5,"div",9),d.dc(),d.Pb(6,"svg",20),d.ac("click",function(){d.Bc(i);const t=d.ec().$implicit;return d.ec().abrirModalRechazarDocumentos(t.id_caso,t.id)}),d.Lb(7,"path",21),d.Ob(),d.Ob(),d.Ob(),d.Ob()}}function w(i,t){if(1&i&&(d.Pb(0,"tr"),d.Pb(1,"td"),d.Kc(2),d.Ob(),d.Pb(3,"td"),d.Kc(4),d.Ob(),d.Pb(5,"td"),d.Kc(6),d.Ob(),d.Pb(7,"td"),d.Kc(8),d.Ob(),d.Pb(9,"td"),d.Kc(10),d.Ob(),d.Pb(11,"td"),d.Kc(12),d.Ob(),d.Pb(13,"td"),d.Kc(14),d.Ob(),d.Pb(15,"td"),d.Ic(16,g,8,0,"div",6),d.Ic(17,f,4,0,"div",7),d.Ic(18,O,8,0,"div",7),d.Ob(),d.Ob()),2&i){const i=t.$implicit;d.yb(2),d.Lc(i.id),d.yb(2),d.Lc(i.usuario),d.yb(2),d.Lc(i.perfil),d.yb(2),d.Lc(i.tipo_solicitud),d.yb(2),d.Lc(i.solicitud),d.yb(2),d.Lc(i.id_caso),d.yb(2),d.Lc(i.fechaDesde),d.yb(2),d.lc("ngIf","Crear actividad"==i.tipo_solicitud),d.yb(1),d.lc("ngIf","Reunion"==i.tipo_solicitud),d.yb(1),d.lc("ngIf","Solicitud de documentos"==i.tipo_solicitud)}}function P(i,t){if(1&i){const i=d.Qb();d.Pb(0,"div",22),d.Pb(1,"h4"),d.Kc(2,"Asignar link de la reuni\xf3n"),d.Ob(),d.Pb(3,"div"),d.Lb(4,"input",23),d.Ob(),d.Pb(5,"button",24),d.ac("click",function(){return d.Bc(i),d.ec().asignarLinkReunion()}),d.Kc(6,"Asignar"),d.Ob(),d.Pb(7,"button",25),d.ac("click",function(){return d.Bc(i),d.ec().generarLink()}),d.Kc(8,"Generar link"),d.Ob(),d.Ob()}}function v(i,t){if(1&i){const i=d.Qb();d.Pb(0,"div",22),d.Pb(1,"h4"),d.Kc(2,"Rechazar solicitud de documentos"),d.Ob(),d.Lb(3,"textarea",26),d.Pb(4,"button",24),d.ac("click",function(){return d.Bc(i),d.ec().rechazarSolicitudDocumentos()}),d.Kc(5,"Rechazar"),d.Ob(),d.Ob()}}const k=[{path:"",component:(()=>{class i{constructor(i,t,c,o){this.http=i,this.router=t,this.modalService=c,this.spinner=o,this.unsubscribe$=new l.a,this.solicitudes=[],this.idSolicitud="0",this.idCalendario="0",this.idCasoRechazo="0",this.idSolicitudRechazo="0",this.consultarSolicitudes()}ngOnInit(){}postModel(i,t){return this.http.post(""+s.a.apiUrl+i,t)}location(i){window.location.href=i}open(i){this.modal=this.modalService.open(i,{centered:!0,backdropClass:"light-blue-backdrop"}),this.modal.result.then(i=>{console.log("dialogo cerrado")})}consultarSolicitudes(){this.spinner.show();var i=this;let t=new FormData;i.postModel("apiConsultarSolicitudes",t).pipe(Object(r.a)(i.unsubscribe$)).subscribe(t=>{i.spinner.hide(),i.solicitudes=t})}aprobarSolicitud(i){var t=this;$.confirm({title:"Aprobar solicitud!",content:"Esta seguro de aprobar la solicitud ?",buttons:{confirmar:function(){let c=new FormData;c.append("id",i),t.postModel("apiAprobarSolicitud",c).pipe(Object(r.a)(t.unsubscribe$)).subscribe(i=>{$.alert("Se aprob\xf3 la solicitud correctamente"),setTimeout(function(){t.location("/admin-solicitudes")},3e3)})},cancelar:function(){}}})}rechazarSolicitud(i){var t=this;$.confirm({title:"Rechazar solicitud!",content:"Esta seguro de rechazar la solicitud ?",buttons:{confirmar:function(){let c=new FormData;c.append("id",i),t.postModel("apiRechazarSolicitud",c).pipe(Object(r.a)(t.unsubscribe$)).subscribe(i=>{$.alert("Se rechaz\xf3 la solicitud correctamente"),setTimeout(function(){t.location("/admin-solicitudes")},3e3)})},cancelar:function(){}}})}asignarLink(i,t){var c=this;c.idSolicitud=i,c.idCalendario=t,c.open(c.modalLink),$("input").css("background","#ffffff")}generarLink(){window.open("http://meet.google.com/new")}asignarLinkReunion(){var i=this,t=0,c="";if($("#link").val()||(t=1,c="Debe asignar link para la reuni\xf3n."),1==t)$.alert(c);else{let t=new FormData;t.append("idSolicitud",i.idSolicitud),t.append("idCalendario",i.idCalendario),t.append("link",$("#link").val()),i.postModel("apiAsignarLinkReunion",t).pipe(Object(r.a)(i.unsubscribe$)).subscribe(t=>{$.alert("Se asign\xf3 el link de la reuni\xf3n correctamente."),setTimeout(function(){i.location("/admin-solicitudes")},3e3)})}}aprobarSolicitudDocumentos(i,t){var c=this;let o=new FormData;o.append("idSolicitud",i),o.append("idCaso",t),c.postModel("apiAdminAprobarSolicitudDocumentos",o).pipe(Object(r.a)(c.unsubscribe$)).subscribe(i=>{$.alert("Se aprob\xf3 correctamente la solicitud de documentos para el caso #"+t),setTimeout(function(){c.location("/admin-solicitudes")},3e3)})}abrirModalRechazarDocumentos(i,t){var c=this;c.idCasoRechazo=i,c.idSolicitudRechazo=t,c.open(c.modalRechazarDocumentos)}rechazarSolicitudDocumentos(){var i=this;let t=new FormData;t.append("idCaso",i.idCasoRechazo),t.append("motivo",$("#motivoRechazoSolicitudDocumentos").val()),t.append("idSolicitud",i.idSolicitudRechazo),i.postModel("apiAdminRechazarSolicitudDocumentos",t).pipe(Object(r.a)(i.unsubscribe$)).subscribe(t=>{$.alert("Se rechazo la solicitud de documentos correctamente"),i.location("/admin-solicitudes")})}}return i.\u0275fac=function(t){return new(t||i)(d.Kb(b.a),d.Kb(a.g),d.Kb(u.a),d.Kb(p.c))},i.\u0275cmp=d.Eb({type:i,selectors:[["app-admin-solicitudes"]],viewQuery:function(i,t){if(1&i&&(d.Qc(h,!0),d.Qc(m,!0)),2&i){let i;d.xc(i=d.bc())&&(t.modalLink=i.first),d.xc(i=d.bc())&&(t.modalRechazarDocumentos=i.first)}},decls:28,vars:1,consts:[[1,"container"],["id","tableDT",1,"table","table-striped","table-bordered",2,"width","100%"],[1,"center"],[4,"ngFor","ngForOf"],["modalLink",""],["modalRechazarDocumentos",""],["class","row",4,"ngIf"],[4,"ngIf"],[1,"row"],[1,"col-md-6"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-check2",3,"click"],["d","M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-link",3,"click"],["d","M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"],["d","M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-check-lg",3,"click"],["d","M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-lg",3,"click"],["d","M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"],[1,"modal-body"],["type","text","id","link"],[1,"btn","btn-success","asignar",3,"click"],["type","button",1,"btn","btn-info","asignar",3,"click"],["id","motivoRechazoSolicitudDocumentos",1,"motivoRechazoSolicitudDocumentos"]],template:function(i,t){1&i&&(d.Pb(0,"div",0),d.Pb(1,"h3"),d.Kc(2,"Administrar Solicitudes"),d.Ob(),d.Pb(3,"table",1),d.Pb(4,"thead"),d.Pb(5,"tr"),d.Pb(6,"th",2),d.Kc(7,"Id"),d.Ob(),d.Pb(8,"th",2),d.Kc(9,"Usuario"),d.Ob(),d.Pb(10,"th",2),d.Kc(11,"Perfil"),d.Ob(),d.Pb(12,"th",2),d.Kc(13,"Tipo de solicitud"),d.Ob(),d.Pb(14,"th",2),d.Kc(15,"Solicitud"),d.Ob(),d.Pb(16,"th",2),d.Kc(17,"# Caso"),d.Ob(),d.Pb(18,"th",2),d.Kc(19,"Fecha y hora del evento"),d.Ob(),d.Pb(20,"th",2),d.Kc(21,"Acciones"),d.Ob(),d.Ob(),d.Ob(),d.Pb(22,"tbody"),d.Ic(23,w,19,10,"tr",3),d.Ob(),d.Ob(),d.Ob(),d.Ic(24,P,9,0,"ng-template",null,4,d.Jc),d.Ic(26,v,6,0,"ng-template",null,5,d.Jc)),2&i&&(d.yb(23),d.lc("ngForOf",t.solicitudes))},directives:[o.m,o.n],styles:["h3[_ngcontent-%COMP%]{margin-top:3%}#tableDT[_ngcontent-%COMP%]{margin-top:8%}#link[_ngcontent-%COMP%]{margin-top:5%;width:100%}.addBtn[_ngcontent-%COMP%]{float:right}.center[_ngcontent-%COMP%]{text-align:center}.btnDelete[_ngcontent-%COMP%]{margin-left:2%}.msg[_ngcontent-%COMP%]{display:none}.asignar[_ngcontent-%COMP%]{float:right;margin-top:3%;margin-left:2%;margin-right:2%}.motivoRechazoSolicitudDocumentos[_ngcontent-%COMP%]{width:100%;border-radius:8px;margin-top:3%;margin-bottom:1%;height:100px}"]}),i})()}];let S=(()=>{class i{}return i.\u0275mod=d.Ib({type:i}),i.\u0275inj=d.Hb({factory:function(t){return new(t||i)},imports:[[a.i.forChild(k)],a.i]}),i})(),L=(()=>{class i{}return i.\u0275mod=d.Ib({type:i}),i.\u0275inj=d.Hb({factory:function(t){return new(t||i)},imports:[[o.c,e.a,n.e,S]]}),i})()}}]);