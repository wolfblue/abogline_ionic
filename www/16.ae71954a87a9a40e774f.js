(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ubkt:function(e,t,n){"use strict";n.r(t),n.d(t,"CargarDocumentacionPageModule",function(){return v});var i=n("ofXK"),c=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),s=n("1G5W"),r=n("XNiG"),b=n("AytR"),p=n("fXoL"),u=n("tk/3"),l=n("JqCM");function d(e,t){if(1&e&&(p.Pb(0,"option",8),p.Hc(1),p.Ob()),2&e){const e=p.cc().$implicit;p.kc("value",e.id),p.yb(1),p.Ic(e.id)}}function f(e,t){if(1&e&&(p.Nb(0),p.Fc(1,d,2,2,"option",7),p.Mb()),2&e){const e=t.$implicit;p.yb(1),p.jc("ngIf","registrado"!=e.estado)}}function g(e,t){if(1&e&&p.Lb(0,"input",12),2&e){const e=p.cc().$implicit;p.zb("id",e.id)("class","respuesta"+e.id+" anexo")}}function m(e,t){if(1&e&&p.Lb(0,"textarea"),2&e){const e=p.cc().$implicit;p.zb("class","respuesta"+e.id)}}function h(e,t){if(1&e){const e=p.Qb();p.Nb(0),p.Pb(1,"tr"),p.Pb(2,"td"),p.Hc(3),p.Ob(),p.Pb(4,"td"),p.Hc(5),p.Ob(),p.Pb(6,"td"),p.Hc(7),p.Ob(),p.Pb(8,"td"),p.Fc(9,g,1,2,"input",9),p.Fc(10,m,1,1,"textarea",10),p.Ob(),p.Pb(11,"td"),p.Pb(12,"button",11),p.ac("click",function(){p.yc(e);const n=t.$implicit;return p.cc().enviarRespuesta(n.id,n.tipo_informacion,n.id_peticion)}),p.Hc(13,"Enviar respuesta"),p.Ob(),p.Ob(),p.Ob(),p.Mb()}if(2&e){const e=t.$implicit;p.yb(3),p.Ic(e.creado),p.yb(2),p.Ic(e.tipo_informacion),p.yb(2),p.Ic(e.observacion),p.yb(2),p.jc("ngIf","Documento"==e.tipo_informacion),p.yb(1),p.jc("ngIf","Documento"!=e.tipo_informacion)}}const O=[{path:"",component:(()=>{class e{constructor(e,t){this.http=e,this.spinner=t,this.unsubscribe$=new r.a,this.casos=[],this.pagosPendientes=[],this.peticiones=[],this.tmpFile=[],this.extensiones=[],this.getInfoPage()}ngOnInit(){$("#fechaAgendar").prop("min",(new Date).toISOString().split("T")[0]+"T00:00:00")}postModel(e,t){return this.http.post(""+b.a.apiUrl+e,t)}getInfoPage(){var e=this;let t=new FormData;t.append("usuario",sessionStorage.getItem("usuario")),t.append("perfil",sessionStorage.getItem("perfil")),e.postModel("apiAboglineCargarDocumentacionGetInfo",t).pipe(Object(s.a)(e.unsubscribe$)).subscribe(t=>{t.length>0&&(e.casos=t[0].casos),$("#peticionesDT").DataTable()})}cargarPeticiones(){var e=this;let t=new FormData;t.append("idCaso",$("#idCaso").val()),e.postModel("apiAboglineCargarDocumentacionPeticiones",t).pipe(Object(s.a)(e.unsubscribe$)).subscribe(t=>{t.length>0&&(e.peticiones=t[0].peticiones,setTimeout(function(){$(".anexo").change(function(t){var n=$(this).prop("id"),i=$(this).prop("files")[0].name.toString().split(".");e.extensiones[n]=i[1];let c=new FileReader;if(t.target.files&&t.target.files.length){const[i]=t.target.files;c.readAsDataURL(i),c.onloadend=function(){e.tmpFile[n]=c.result}}})},1e3))})}enviarRespuesta(e,t,n){var i=this,c="",o="";switch(t){case"Documento":c=i.tmpFile[e],o=i.extensiones[e];break;case"Informacion general":c=$(".respuesta"+e).val()}if(c){let t=new FormData;t.append("idDocumento",e),t.append("respuesta",c),t.append("extension",o),t.append("peticion",n),i.postModel("apiAboglineCargarDocumentacionRespuesta",t).pipe(Object(s.a)(i.unsubscribe$)).subscribe(e=>{window.location.href="/cargar-documentacion"})}}}return e.\u0275fac=function(t){return new(t||e)(p.Kb(u.a),p.Kb(l.c))},e.\u0275cmp=p.Eb({type:e,selectors:[["app-cargar-documentacion"]],decls:27,vars:3,consts:[[3,"fullscreen"],[1,"contenido"],["id","idCaso",3,"change"],["value",""],[4,"ngFor","ngForOf"],[1,"peticiones"],["id","peticionesDT","width","100%"],[3,"value",4,"ngIf"],[3,"value"],["type","file",4,"ngIf"],[4,"ngIf"],[3,"click"],["type","file"]],template:function(e,t){1&e&&(p.Pb(0,"ion-content",0),p.Pb(1,"div",1),p.Pb(2,"h3"),p.Hc(3,"Cargar documentaci\xf3n"),p.Ob(),p.Pb(4,"div"),p.Pb(5,"p"),p.Hc(6,"Seleccionar caso (*):"),p.Ob(),p.Pb(7,"select",2),p.ac("change",function(){return t.cargarPeticiones()}),p.Pb(8,"option",3),p.Hc(9,"- Seleccionar -"),p.Ob(),p.Fc(10,f,2,1,"ng-container",4),p.Ob(),p.Ob(),p.Pb(11,"div",5),p.Pb(12,"table",6),p.Pb(13,"thead"),p.Pb(14,"tr"),p.Pb(15,"th"),p.Hc(16,"Fecha de solicitud"),p.Ob(),p.Pb(17,"th"),p.Hc(18,"Tipo de informaci\xf3n"),p.Ob(),p.Pb(19,"th"),p.Hc(20,"Observaci\xf3n"),p.Ob(),p.Pb(21,"th"),p.Hc(22,"Respuesta"),p.Ob(),p.Pb(23,"th"),p.Hc(24,"Acciones"),p.Ob(),p.Ob(),p.Ob(),p.Pb(25,"tbody"),p.Fc(26,h,14,5,"ng-container",4),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob()),2&e&&(p.jc("fullscreen",!0),p.yb(10),p.jc("ngForOf",t.casos),p.yb(16),p.jc("ngForOf",t.peticiones))},directives:[o.b,c.g,c.h,i.m,i.n],styles:["button[_ngcontent-%COMP%]{margin-top:2%}p[_ngcontent-%COMP%]{margin-top:1%}#mensaje[_ngcontent-%COMP%]{color:red}.peticiones[_ngcontent-%COMP%]{margin-top:3%}"]}),e})()}];let P=(()=>{class e{}return e.\u0275mod=p.Ib({type:e}),e.\u0275inj=p.Hb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(O)],a.i]}),e})(),v=(()=>{class e{}return e.\u0275mod=p.Ib({type:e}),e.\u0275inj=p.Hb({factory:function(t){return new(t||e)},imports:[[i.c,c.a,o.g,P]]}),e})()}}]);