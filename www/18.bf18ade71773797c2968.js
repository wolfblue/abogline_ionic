(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{QnAp:function(i,t,n){"use strict";n.r(t),n.d(t,"AdminSolicitudesPageModule",function(){return k});var c=n("ofXK"),e=n("3Pt+"),o=n("TEn/"),a=n("tyNb"),r=n("1G5W"),l=n("XNiG"),s=n("AytR"),b=n("fXoL"),d=n("tk/3"),u=n("1kSV"),p=n("JqCM");const h=["modalLink"];function g(i,t){if(1&i){const i=b.Qb();b.Pb(0,"div",7),b.Pb(1,"div",8),b.dc(),b.Pb(2,"svg",9),b.ac("click",function(){b.Ac(i);const t=b.ec().$implicit;return b.ec().aprobarSolicitud(t.id)}),b.Lb(3,"path",10),b.Ob(),b.Ob(),b.cc(),b.Pb(4,"div",8),b.dc(),b.Pb(5,"svg",11),b.ac("click",function(){b.Ac(i);const t=b.ec().$implicit;return b.ec().rechazarSolicitud(t.id)}),b.Lb(6,"path",12),b.Lb(7,"path",13),b.Ob(),b.Ob(),b.Ob()}}function f(i,t){if(1&i){const i=b.Qb();b.Pb(0,"div"),b.dc(),b.Pb(1,"svg",14),b.ac("click",function(){b.Ac(i);const t=b.ec().$implicit;return b.ec().asignarLink(t.id,t.id_calendario)}),b.Lb(2,"path",15),b.Lb(3,"path",16),b.Ob(),b.Ob()}}function m(i,t){if(1&i&&(b.Pb(0,"tr"),b.Pb(1,"td"),b.Jc(2),b.Ob(),b.Pb(3,"td"),b.Jc(4),b.Ob(),b.Pb(5,"td"),b.Jc(6),b.Ob(),b.Pb(7,"td"),b.Jc(8),b.Ob(),b.Pb(9,"td"),b.Jc(10),b.Ob(),b.Pb(11,"td"),b.Hc(12,g,8,0,"div",5),b.Hc(13,f,4,0,"div",6),b.Ob(),b.Ob()),2&i){const i=t.$implicit;b.yb(2),b.Kc(i.usuario),b.yb(2),b.Kc(i.email),b.yb(2),b.Kc(i.perfil),b.yb(2),b.Kc(i.tipo_solicitud),b.yb(2),b.Kc(i.solicitud),b.yb(2),b.lc("ngIf","Crear actividad"==i.tipo_solicitud),b.yb(1),b.lc("ngIf","Reunion"==i.tipo_solicitud)}}function O(i,t){if(1&i){const i=b.Qb();b.Pb(0,"div",17),b.Pb(1,"h4"),b.Jc(2,"Asignar link de la reuni\xf3n"),b.Ob(),b.Pb(3,"div"),b.Lb(4,"input",18),b.Ob(),b.Pb(5,"button",19),b.ac("click",function(){return b.Ac(i),b.ec().asignarLinkReunion()}),b.Jc(6,"Asignar"),b.Ob(),b.Pb(7,"button",20),b.ac("click",function(){return b.Ac(i),b.ec().generarLink()}),b.Jc(8,"Generar link"),b.Ob(),b.Ob()}}const w=[{path:"",component:(()=>{class i{constructor(i,t,n,c){this.http=i,this.router=t,this.modalService=n,this.spinner=c,this.unsubscribe$=new l.a,this.solicitudes=[],this.idSolicitud="0",this.idCalendario="0",this.consultarSolicitudes()}ngOnInit(){}postModel(i,t){return this.http.post(""+s.a.apiUrl+i,t)}location(i){window.location.href=i}open(i){this.modal=this.modalService.open(i,{centered:!0,backdropClass:"light-blue-backdrop"}),this.modal.result.then(i=>{console.log("dialogo cerrado")})}consultarSolicitudes(){this.spinner.show();var i=this;let t=new FormData;i.postModel("apiConsultarSolicitudes",t).pipe(Object(r.a)(i.unsubscribe$)).subscribe(t=>{i.spinner.hide(),i.solicitudes=t})}aprobarSolicitud(i){var t=this;$.confirm({title:"Aprobar solicitud!",content:"Esta seguro de aprobar la solicitud ?",buttons:{confirmar:function(){let n=new FormData;n.append("id",i),t.postModel("apiAprobarSolicitud",n).pipe(Object(r.a)(t.unsubscribe$)).subscribe(i=>{$.alert("Se aprob\xf3 la solicitud correctamente"),setTimeout(function(){t.location("/admin-solicitudes")},3e3)})},cancelar:function(){}}})}rechazarSolicitud(i){var t=this;$.confirm({title:"Rechazar solicitud!",content:"Esta seguro de rechazar la solicitud ?",buttons:{confirmar:function(){let n=new FormData;n.append("id",i),t.postModel("apiRechazarSolicitud",n).pipe(Object(r.a)(t.unsubscribe$)).subscribe(i=>{$.alert("Se rechaz\xf3 la solicitud correctamente"),setTimeout(function(){t.location("/admin-solicitudes")},3e3)})},cancelar:function(){}}})}asignarLink(i,t){var n=this;n.idSolicitud=i,n.idCalendario=t,n.open(n.modalLink),$("input").css("background","#ffffff")}generarLink(){window.open("http://meet.google.com/new")}asignarLinkReunion(){var i=this,t=0,n="";if($("#link").val()||(t=1,n="Debe asignar link para la reuni\xf3n."),1==t)$.alert(n);else{let t=new FormData;t.append("idSolicitud",i.idSolicitud),t.append("idCalendario",i.idCalendario),t.append("link",$("#link").val()),i.postModel("apiAsignarLinkReunion",t).pipe(Object(r.a)(i.unsubscribe$)).subscribe(t=>{$.alert("Se asign\xf3 el link de la reuni\xf3n correctamente."),setTimeout(function(){i.location("/admin-solicitudes")},3e3)})}}}return i.\u0275fac=function(t){return new(t||i)(b.Kb(d.a),b.Kb(a.g),b.Kb(u.a),b.Kb(p.c))},i.\u0275cmp=b.Eb({type:i,selectors:[["app-admin-solicitudes"]],viewQuery:function(i,t){if(1&i&&b.Pc(h,!0),2&i){let i;b.xc(i=b.bc())&&(t.modalLink=i.first)}},decls:22,vars:1,consts:[[1,"container"],["id","tableDT",1,"table","table-striped","table-bordered",2,"width","100%"],[1,"center"],[4,"ngFor","ngForOf"],["modalLink",""],["class","row",4,"ngIf"],[4,"ngIf"],[1,"row"],[1,"col-md-6"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-check2",3,"click"],["d","M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-link",3,"click"],["d","M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"],["d","M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"],[1,"modal-body"],["type","text","id","link"],[1,"btn","btn-success","asignar",3,"click"],["type","button",1,"btn","btn-info","asignar",3,"click"]],template:function(i,t){1&i&&(b.Pb(0,"div",0),b.Pb(1,"h3"),b.Jc(2,"Administrar Solicitudes"),b.Ob(),b.Pb(3,"table",1),b.Pb(4,"thead"),b.Pb(5,"tr"),b.Pb(6,"th",2),b.Jc(7,"Usuario"),b.Ob(),b.Pb(8,"th",2),b.Jc(9,"Email"),b.Ob(),b.Pb(10,"th",2),b.Jc(11,"Perfil"),b.Ob(),b.Pb(12,"th",2),b.Jc(13,"Tipo de solicitud"),b.Ob(),b.Pb(14,"th",2),b.Jc(15,"Solicitud"),b.Ob(),b.Pb(16,"th",2),b.Jc(17,"Acciones"),b.Ob(),b.Ob(),b.Ob(),b.Pb(18,"tbody"),b.Hc(19,m,14,7,"tr",3),b.Ob(),b.Ob(),b.Ob(),b.Hc(20,O,9,0,"ng-template",null,4,b.Ic)),2&i&&(b.yb(19),b.lc("ngForOf",t.solicitudes))},directives:[c.m,c.n],styles:["h3[_ngcontent-%COMP%]{margin-top:3%}#tableDT[_ngcontent-%COMP%]{margin-top:8%}#link[_ngcontent-%COMP%]{margin-top:5%;width:100%}.addBtn[_ngcontent-%COMP%]{float:right}.center[_ngcontent-%COMP%]{text-align:center}.btnDelete[_ngcontent-%COMP%]{margin-left:2%}.msg[_ngcontent-%COMP%]{display:none}.asignar[_ngcontent-%COMP%]{float:right;margin-top:3%;margin-left:2%;margin-right:2%}"]}),i})()}];let P=(()=>{class i{}return i.\u0275mod=b.Ib({type:i}),i.\u0275inj=b.Hb({factory:function(t){return new(t||i)},imports:[[a.i.forChild(w)],a.i]}),i})(),k=(()=>{class i{}return i.\u0275mod=b.Ib({type:i}),i.\u0275inj=b.Hb({factory:function(t){return new(t||i)},imports:[[c.c,e.a,o.e,P]]}),i})()}}]);