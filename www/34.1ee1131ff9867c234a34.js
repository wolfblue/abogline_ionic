(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{nMF9:function(i,o,t){"use strict";t.r(o),t.d(o,"NotificacionesPageModule",function(){return v});var n=t("ofXK"),c=t("3Pt+"),e=t("TEn/"),a=t("tyNb"),s=t("1G5W"),r=t("XNiG"),b=t("AytR"),d=t("fXoL"),l=t("tk/3"),u=t("JqCM"),p=t("1kSV");const f=["modalCaso"];function g(i,o){if(1&i){const i=d.Qb();d.Pb(0,"span",23),d.ac("click",function(){d.Bc(i);const o=d.ec().$implicit;return d.ec().verCaso(o.id_caso)}),d.Kc(1),d.Ob()}if(2&i){const i=d.ec().$implicit;d.yb(1),d.Lc(i.id_caso)}}function m(i,o){if(1&i){const i=d.Qb();d.dc(),d.cc(),d.Pb(0,"div",18),d.dc(),d.Pb(1,"svg",24),d.ac("click",function(){d.Bc(i);const o=d.ec().$implicit;return d.ec().aprobarNotificacion(o.id,o.tipo_notificacion,o.id_caso,o.id_calendario)}),d.Lb(2,"path",25),d.Ob(),d.Ob()}}function P(i,o){if(1&i){const i=d.Qb();d.Pb(0,"div",16),d.Pb(1,"div",11),d.Kc(2),d.Ob(),d.Pb(3,"div",11),d.Kc(4),d.Ob(),d.Pb(5,"div",11),d.Ic(6,g,2,1,"span",17),d.Ob(),d.Pb(7,"div",11),d.Pb(8,"div",3),d.Pb(9,"div",18),d.dc(),d.Pb(10,"svg",19),d.ac("click",function(){d.Bc(i);const t=o.$implicit;return d.ec().eliminarNotificacion(t.id)}),d.Lb(11,"path",20),d.Lb(12,"path",21),d.Ob(),d.Ob(),d.Ic(13,m,3,0,"div",22),d.Ob(),d.Ob(),d.Ob()}if(2&i){const i=o.$implicit;d.yb(2),d.Lc(i.notificacion),d.yb(2),d.Lc(i.mensaje),d.yb(2),d.lc("ngIf",0!=i.id_caso),d.yb(7),d.lc("ngIf","2"==i.tipo_notificacion||"3"==i.tipo_notificacion)}}function h(i,o){if(1&i){const i=d.Qb();d.Pb(0,"div",26),d.Pb(1,"form"),d.Pb(2,"div",27),d.Pb(3,"div",3),d.Pb(4,"div",18),d.Pb(5,"b"),d.Kc(6,"Ciudad donde se presenta el problema:"),d.Ob(),d.Kc(7),d.Ob(),d.Ob(),d.Pb(8,"div",3),d.Pb(9,"div",18),d.Pb(10,"b"),d.Kc(11,"Cu\xe1l es el problema:"),d.Ob(),d.Kc(12),d.Ob(),d.Ob(),d.Pb(13,"div",3),d.Pb(14,"div",18),d.Pb(15,"b"),d.Kc(16,"Descripci\xf3n del caso:"),d.Ob(),d.Kc(17),d.Ob(),d.Ob(),d.Pb(18,"div",3),d.Pb(19,"div",18),d.Pb(20,"b"),d.Kc(21,"Fecha de registro:"),d.Ob(),d.Kc(22),d.Ob(),d.Ob(),d.Pb(23,"div",3),d.Pb(24,"div",18),d.Pb(25,"b"),d.Kc(26,"Con quien tiene el problema:"),d.Ob(),d.Pb(27,"span",28),d.Kc(28),d.Ob(),d.Ob(),d.Ob(),d.Pb(29,"div",3),d.Pb(30,"div",18),d.Pb(31,"b"),d.Kc(32,"Ya se inicio un proceso:"),d.Ob(),d.Kc(33),d.Ob(),d.Ob(),d.Pb(34,"div",3),d.Pb(35,"div",18),d.Pb(36,"b"),d.Kc(37,"De que trata el caso:"),d.Ob(),d.Kc(38),d.Ob(),d.Ob(),d.Pb(39,"div",3),d.Pb(40,"div",18),d.Pb(41,"button",29),d.ac("click",function(){return d.Bc(i),d.ec().seguimiento()}),d.Kc(42,"Seguimiento"),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob()}if(2&i){const i=d.ec();d.yb(7),d.Mc(" ",i.casoCiudadProblema,""),d.yb(5),d.Mc(" ",i.casoCualProblema,""),d.yb(5),d.Mc(" ",i.casoCuentanos,""),d.yb(5),d.Mc(" ",i.casoFechaRegistro,""),d.yb(6),d.Lc(i.casoProblemas),d.yb(5),d.Mc(" ",i.casoProceso,""),d.yb(5),d.Mc(" ",i.casoTrataCaso,"")}}const O=[{path:"",component:(()=>{class i{constructor(i,o,t){this.http=i,this.spinner=o,this.modalService=t,this.unsubscribe$=new r.a,this.notificaciones=[],this.totalNotificaciones=0,this.mostrandoNotificaciones=0,this.usuario=sessionStorage.getItem("usuario")?sessionStorage.getItem("usuario"):"",this.casoCiudadProblema="",this.casoCualProblema="",this.casoCuentanos="",this.casoFechaRegistro="",this.casoProblemas="",this.casoProceso="",this.casoTrataCaso="",this.consultarNotificaciones()}ngOnInit(){}postModel(i,o){return this.http.post(""+b.a.apiUrl+i,o)}location(i){window.location.href=i}open(i){this.modal=this.modalService.open(i,{size:"lg",centered:!0,backdropClass:"light-blue-backdrop"}),this.modal.result.then(i=>{console.log("dialogo cerrado")})}consultarNotificaciones(){var i=this;let o=new FormData;o.append("usuario",sessionStorage.getItem("usuario")),i.postModel("apiConsultarNotificaciones",o).pipe(Object(s.a)(i.unsubscribe$)).subscribe(o=>{i.notificaciones=o,i.totalNotificaciones=o.length,i.mostrandoNotificaciones=o.length})}confirmarReunion(i,o){var t=this;$.confirm({title:"Confirmar reuni\xf3n",content:"Esta seguro de confirmar la reuni\xf3n ?",buttons:{confirmar:function(){let n=new FormData;n.append("idNotificacion",o),n.append("idCalendario",i),t.postModel("apiAprobarNotificacionReunion",n).pipe(Object(s.a)(t.unsubscribe$)).subscribe(i=>{$.alert("Se confirm\xf3 la reuni\xf3n correctamente"),setTimeout(function(){t.location("/notificaciones")},3e3)})},cancelar:function(){}}})}rechazarReunion(i,o){var t=this;$.confirm({title:"Rechazar asesor\xeda",content:"Esta seguro de rechazar la reuni\xf3n ?",buttons:{confirmar:function(){let n=new FormData;n.append("idNotificacion",o),n.append("idCalendario",i),t.postModel("apiRechazarNotificacionReunion",n).pipe(Object(s.a)(t.unsubscribe$)).subscribe(i=>{$.alert("Se rechaz\xf3 la reuni\xf3n correctamente"),setTimeout(function(){t.location("/notificaciones")},3e3)})},cancelar:function(){}}})}eliminarNotificacion(i){var o=this;$.confirm({title:"Eliminar notificaci\xf3n",content:"Esta seguro de eliminar la notificaci\xf3n ?",buttons:{confirmar:function(){let t=new FormData;t.append("id",i),o.postModel("apiEliminarNotificacion",t).pipe(Object(s.a)(o.unsubscribe$)).subscribe(i=>{$.alert("Se elimin\xf3 la notificaci\xf3n correctamente"),setTimeout(function(){o.location("/notificaciones")},3e3)})},cancelar:function(){}}})}aprobarNotificacion(i,o,t,n){var c=this;$.confirm({title:"Confirmar aprobaci\xf3n",content:"Esta seguro de confirmar la notificaci\xf3n ?",buttons:{confirmar:function(){c.spinner.show();let e=new FormData;e.append("idNotificacion",i),e.append("tipoNotificacion",o),e.append("idCaso",t),e.append("usuario",c.usuario),e.append("idCalendario",n),c.postModel("apiNotificacionesAprobar",e).pipe(Object(s.a)(c.unsubscribe$)).subscribe(i=>{c.spinner.hide(),$.alert("Se aprob\xf3 la notificaci\xf3n correctamente"),setTimeout(function(){c.location("/notificaciones")},3e3)})},cancelar:function(){}}})}irCaso(i){sessionStorage.setItem("idCaso",i),window.location.href="/core"}verCaso(i){this.idCaso=i;let o=new FormData;o.append("idCaso",i),this.postModel("apiNotificacionesGetCaso",o).pipe(Object(s.a)(this.unsubscribe$)).subscribe(i=>{this.casoCiudadProblema=i[0].ciudad_problema,this.casoCualProblema=i[0].cual_problema,this.casoCuentanos=i[0].cuentanos,this.casoFechaRegistro=i[0].fecha_registro,this.casoProblemas=i[0].problemas,this.casoProceso=i[0].proceso,this.casoTrataCaso=i[0].trata_caso,this.open(this.modalCaso)})}seguimiento(){sessionStorage.setItem("idCaso",this.idCaso),this.location("/core")}}return i.\u0275fac=function(o){return new(o||i)(d.Kb(l.a),d.Kb(u.c),d.Kb(p.a))},i.\u0275cmp=d.Eb({type:i,selectors:[["app-notificaciones"]],viewQuery:function(i,o){if(1&i&&d.Qc(f,!0),2&i){let i;d.xc(i=d.bc())&&(o.modalCaso=i.first)}},decls:35,vars:3,consts:[[1,"notificaciones"],[1,"contenido"],[1,"reporte"],[1,"row"],[1,"col-md-6","buscador"],["src","/assets/images/icon_buscar.png"],["type","text","placeholder","Buscar"],[1,"col-md-6","filtro"],["value","1"],[1,"tableNotificaciones"],[1,"row","tableEncabezado"],[1,"col-md-3"],["class","row tableRegistro",4,"ngFor","ngForOf"],[1,"footer"],["class","modalCaso"],["modalCaso",""],[1,"row","tableRegistro"],["class","link",3,"click",4,"ngIf"],[1,"col"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["class","col",4,"ngIf"],[1,"link",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-check2",3,"click"],["d","M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"],[1,"modal-body"],[1,"form-group"],[1,"capitalize"],[1,"seguimiento",3,"click"]],template:function(i,o){1&i&&(d.Pb(0,"div"),d.Pb(1,"div",0),d.Kc(2," NOTIFICACIONES "),d.Ob(),d.Pb(3,"div",1),d.Pb(4,"div",2),d.Pb(5,"div",3),d.Pb(6,"div",4),d.Lb(7,"img",5),d.Lb(8,"input",6),d.Ob(),d.Pb(9,"div",7),d.Pb(10,"span"),d.Kc(11,"Mostrar"),d.Ob(),d.Pb(12,"select"),d.Pb(13,"option",8),d.Kc(14,"1"),d.Ob(),d.Ob(),d.Pb(15,"span"),d.Kc(16,"Entradas"),d.Ob(),d.Ob(),d.Ob(),d.Pb(17,"div",9),d.Pb(18,"div",10),d.Pb(19,"div",11),d.Kc(20,"Tipo"),d.Ob(),d.Pb(21,"div",11),d.Kc(22,"Notificaci\xf3n"),d.Ob(),d.Pb(23,"div",11),d.Kc(24,"Caso"),d.Ob(),d.Pb(25,"div",11),d.Kc(26,"Acci\xf3n"),d.Ob(),d.Ob(),d.Ic(27,P,14,4,"div",12),d.Ob(),d.Pb(28,"div",13),d.Kc(29,"Mostrando "),d.Pb(30,"b"),d.Kc(31),d.Ob(),d.Kc(32," Notificaciones"),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ic(33,h,43,7,"ng-template",14,15,d.Jc)),2&i&&(d.yb(27),d.lc("ngForOf",o.notificaciones),d.yb(4),d.Nc("",o.mostrandoNotificaciones," de ",o.totalNotificaciones,""))},directives:[c.g,c.h,n.m,n.n,c.i,c.e,c.f],styles:[".notificaciones[_ngcontent-%COMP%]{background:#fff;color:#0a1738;font-weight:700;font-size:24px;text-align:center;margin-top:1%;margin-bottom:1%}.contenido[_ngcontent-%COMP%]{background:#d8d8dc}.reporte[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:2% 4%}.buscador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4%}.buscador[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:3%;background:#d8d8db;font-size:13px;width:63%}.filtro[_ngcontent-%COMP%]{text-align:right}.filtro[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;color:#444547;font-weight:700;padding:0 2%}.filtro[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-top:0 solid;border-left:0 solid;border-right:0 solid;width:10%;height:26px;color:#112340;text-align:center;font-size:16px;background:url(/assets/images/flecha_abajo.png);background-repeat:no-repeat;background-size:30%;background-position:93%;background-color:#d8d8dc}.tableNotificaciones[_ngcontent-%COMP%]{margin-top:3%}.tableEncabezado[_ngcontent-%COMP%]{background:#d8d8db;border-radius:8px;font-size:16px;color:#444547;font-weight:600}.tableEncabezado[_ngcontent-%COMP%], .tableRegistro[_ngcontent-%COMP%]{padding:2%;text-align:center;margin-left:1%;margin-right:1%}.tableRegistro[_ngcontent-%COMP%]{background:#edeeef;border-left:5px solid #09455a;font-size:14px}.footer[_ngcontent-%COMP%]{margin-left:1%;margin-right:1%;margin-top:4%}.link[_ngcontent-%COMP%]{text-decoration:underline;font-weight:700}.capitalize[_ngcontent-%COMP%]{text-transform:capitalize}.seguimiento[_ngcontent-%COMP%]{background:#00475c;color:#fff;padding:2% 0;margin-top:5%;border-radius:8px;font-size:12px;width:17%;float:right}"]}),i})()}];let C=(()=>{class i{}return i.\u0275mod=d.Ib({type:i}),i.\u0275inj=d.Hb({factory:function(o){return new(o||i)},imports:[[a.i.forChild(O)],a.i]}),i})(),v=(()=>{class i{}return i.\u0275mod=d.Ib({type:i}),i.\u0275inj=d.Hb({factory:function(o){return new(o||i)},imports:[[n.c,c.a,e.e,C]]}),i})()}}]);