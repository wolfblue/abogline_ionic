(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{NApd:function(i,o,a){"use strict";a.r(o),a.d(o,"ClienteCasoPageModule",function(){return Y});var e=a("ofXK"),n=a("3Pt+"),c=a("TEn/"),l=a("tyNb"),t=a("1G5W"),s=a("XNiG"),d=a("AytR"),b=a("fXoL"),r=a("tk/3"),u=a("JqCM");function p(i,o){1&i&&(b.Lb(0,"option",8),b.kc(1,"Con tu empleo en una entidad p\xfablica"),b.Kb())}function f(i,o){1&i&&(b.Lb(0,"option",9),b.kc(1,"Con tus impuestos"),b.Kb())}function g(i,o){1&i&&(b.Lb(0,"option",43),b.kc(1,"Con tu negocio"),b.Kb())}function F(i,o){1&i&&(b.Lb(0,"option",44),b.kc(1,"Con un amigo o conocido"),b.Kb())}function v(i,o){1&i&&(b.Lb(0,"option",45),b.kc(1,"Reparaci\xf3n de da\xf1os y perjuicios causados por el estado"),b.Kb())}function h(i,o){1&i&&(b.Lb(0,"option",46),b.kc(1,"Tu familia"),b.Kb())}function m(i,o){1&i&&(b.Lb(0,"option",47),b.kc(1,"Tu jefe o empresa"),b.Kb())}function V(i,o){1&i&&(b.Lb(0,"option",48),b.kc(1,"Vulneraci\xf3n a tu salud"),b.Kb())}function L(i,o){1&i&&(b.Lb(0,"option",49),b.kc(1,"Vulneraci\xf3n de derechos fundamentales"),b.Kb())}function K(i,o){1&i&&(b.Lb(0,"option",50),b.kc(1,"Vulneraci\xf3n de derechos por el estado"),b.Kb())}function k(i,o){1&i&&(b.Lb(0,"option",51),b.kc(1,"Un delito o temas con polic\xeda"),b.Kb())}function I(i,o){1&i&&(b.Lb(0,"option",52),b.kc(1,"Otro"),b.Kb())}function x(i,o){1&i&&(b.Lb(0,"option",8),b.kc(1,"Acoso laboral"),b.Kb())}function j(i,o){1&i&&(b.Lb(0,"option",9),b.kc(1,"Alimentos a hijos o conyugues"),b.Kb())}function C(i,o){1&i&&(b.Lb(0,"option",43),b.kc(1,"Capitulaciones"),b.Kb())}function w(i,o){1&i&&(b.Lb(0,"option",44),b.kc(1,"Con tu EPS"),b.Kb())}function y(i,o){1&i&&(b.Lb(0,"option",45),b.kc(1,"Contratos"),b.Kb())}function P(i,o){1&i&&(b.Lb(0,"option",46),b.kc(1,"Declaraci\xf3n de renta"),b.Kb())}function O(i,o){1&i&&(b.Lb(0,"option",47),b.kc(1,"Deterioro de tu salud a causa de la responsabilidad m\xe9dica"),b.Kb())}function M(i,o){1&i&&(b.Lb(0,"option",48),b.kc(1,"Despido sin justa causa"),b.Kb())}function S(i,o){1&i&&(b.Lb(0,"option",49),b.kc(1,"Dineros adeudados"),b.Kb())}function J(i,o){1&i&&(b.Lb(0,"option",50),b.kc(1,"Divorcios"),b.Kb())}function T(i,o){1&i&&(b.Lb(0,"option",51),b.kc(1,"Emancipaci\xf3n"),b.Kb())}function _(i,o){1&i&&(b.Lb(0,"option",52),b.kc(1,"Herencias"),b.Kb())}function D(i,o){1&i&&(b.Lb(0,"option",53),b.kc(1,"Inpugnaci\xf3n de paternidad"),b.Kb())}function E(i,o){1&i&&(b.Lb(0,"option",54),b.kc(1,"Matrimonio"),b.Kb())}function R(i,o){1&i&&(b.Lb(0,"option",55),b.kc(1,"Omisi\xf3n m\xe9dica"),b.Kb())}function q(i,o){1&i&&(b.Lb(0,"option",56),b.kc(1,"Prestaciones sociales (Prima, vacaciones, cesant\xedas, etc)"),b.Kb())}function A(i,o){1&i&&(b.Lb(0,"option",57),b.kc(1,"Problemas de deudas impuestos"),b.Kb())}function N(i,o){1&i&&(b.Lb(0,"option",58),b.kc(1,"Saldos y/o pagos adeudados por el empleador"),b.Kb())}function G(i,o){1&i&&(b.Lb(0,"option",59),b.kc(1,"Seguridad social (Salud, Pensi\xf3n ARL)"),b.Kb())}function U(i,o){1&i&&(b.Lb(0,"option",60),b.kc(1,"Tus bienes"),b.Kb())}function X(i,o){1&i&&(b.Lb(0,"option",61),b.kc(1,"Violencia intrafamiliar"),b.Kb())}function z(i,o){1&i&&(b.Lb(0,"option",62),b.kc(1,"Otro"),b.Kb())}const H=[{path:"",component:(()=>{class i{constructor(i,o,a){this.http=i,this.router=o,this.spinner=a,this.unsubscribe$=new s.a,this.msg="",this.error=0,this.casoField2Vali1=0,this.casoField2Vali2=0,this.casoField4Vali1=0,this.casoField4Vali2=0,this.idCaso="0"}ngOnInit(){$(".otro").hide(),this.loadDataCasoEdit()}postModel(i,o){return this.http.post(""+d.a.apiUrl+i,o)}location(i){sessionStorage.setItem("caso","0"),window.location=i}modalConfirmar(i,o){var a=this;$(".modal-title").html(i),$(".modal-body").html(o),$(".modalConfirm").modal("toggle"),$(".modalContinuar").unbind(),$(".modal-continuar").click(function(){a.casoRegister(),$(".modalConfirm").modal("toggle")})}changeField(i){switch(this.error=0,$(".error").hide(),$(".success").hide(),$(".warning").hide(),i){case"casoField1":this.casoField2Vali1=$("#"+i).val()?1:0,0==$("#"+i).val()&&(this.casoField2Vali2=0),1==$("#"+i).val()&&(this.casoField2Vali2=1),2==$("#"+i).val()&&(this.casoField2Vali2=2);break;case"casoField2":this.casoField4Vali1=0,this.casoField4Vali2=0,12==$("#"+i).val()?($(".casoField3").show(),$("#casoField3").prop("disabled",!1)):($(".casoField3").hide(),$("#casoField3").val(""),$("#casoField3").prop("disabled",!0)),this.casoField4Vali1=$("#"+i).val()?1:0,6==$("#"+i).val()&&(this.casoField4Vali2=1),7==$("#"+i).val()&&(this.casoField4Vali2=2),4==$("#"+i).val()&&(this.casoField4Vali2=3),2==$("#"+i).val()&&(this.casoField4Vali2=4),8==$("#"+i).val()&&(this.casoField4Vali2=5);break;case"casoField4":22==$("#"+i).val()?($(".casoField5").show(),$("#casoField5").prop("disabled",!1)):($(".casoField5").hide(),$("#casoField5").val(""),$("#casoField5").prop("disabled",!0)),$("#casoField4 option:selected").length>2&&$("#casoField4").val("")}}casoRegister(){var i=this;if(this.error=0,this.spinner.show(),$(".error").hide(),$(".success").hide(),$(".warning").hide(),$("#casoField1").val()&&$("#casoField2").val()&&0!=$("#casoField4").val().length&&0!=$("#casoField6").val().length&&$("#casoField7").val()||(this.error=1,this.msg="Faltan campos que son obligatorios por diligenciar"),0==this.error){let o=new FormData;o.append("id",this.idCaso),o.append("email",sessionStorage.getItem("email")),o.append("field1",$("#casoField1").val()),o.append("field2",$("#casoField2").val()),o.append("field3",$("#casoField3").val()),o.append("field4",$("#casoField4").val().toString()),o.append("field5",$("#casoField5").val()),o.append("field6",$("#casoField6").val()),o.append("field7",$("#casoField7").val()),this.postModel("casosUpdate",o).pipe(Object(t.a)(this.unsubscribe$)).subscribe(o=>{this.msg="Se registr\xf3 el caso correctamente",$(".success").show(),setTimeout(function(){$(".success").hide(),i.location("home")},3e3)})}1==this.error&&$(".error").show()}loadDataCasoEdit(){var i=this,o=JSON.parse(sessionStorage.getItem("caso"));this.idCaso=o.id,$("#casoField1").val(o.field1),this.changeField("casoField1"),setTimeout(function(){$("#casoField2").val(o.field2),i.changeField("casoField2"),setTimeout(function(){$("#casoField3").val(o.field3),$("#casoField4").val(o.field4),i.changeField("casoField4"),setTimeout(function(){$("#casoField5").val(o.field5)},800)},800)},800),$("#casoField6").html(o.field6),$("#casoField7").val(o.field7)}}return i.\u0275fac=function(o){return new(o||i)(b.Ib(r.a),b.Ib(l.g),b.Ib(u.c))},i.\u0275cmp=b.Cb({type:i,selectors:[["app-cliente-caso"]],decls:103,vars:38,consts:[[3,"fullscreen"],["id","container"],["role","alert",1,"informacion","success","alert-primary"],["role","alert",1,"informacion","warning","alert-warning"],["role","alert",1,"informacion","error","alert-danger"],[1,"label-txt"],["id","casoField1",1,"input",3,"change"],["value",""],["value","1"],["value","2"],[1,"line-box"],[1,"line"],["id","casoField2",1,"input",3,"change"],["value","1",4,"ngIf"],["value","2",4,"ngIf"],["value","3",4,"ngIf"],["value","4",4,"ngIf"],["value","5",4,"ngIf"],["value","6",4,"ngIf"],["value","7",4,"ngIf"],["value","8",4,"ngIf"],["value","9",4,"ngIf"],["value","10",4,"ngIf"],["value","11",4,"ngIf"],["value","12",4,"ngIf"],[1,"otro","casoField3"],["type","text","id","casoField3","disabled","",1,"input"],["id","casoField4","multiple","",1,"input",3,"change"],["value","13",4,"ngIf"],["value","14",4,"ngIf"],["value","15",4,"ngIf"],["value","16",4,"ngIf"],["value","17",4,"ngIf"],["value","18",4,"ngIf"],["value","19",4,"ngIf"],["value","20",4,"ngIf"],["value","21",4,"ngIf"],["value","22",4,"ngIf"],[1,"otro","casoField5"],["type","text","id","casoField5","disabled","",1,"input"],["id","casoField6",1,"input"],["id","casoField7",1,"input"],[3,"click"],["value","3"],["value","4"],["value","5"],["value","6"],["value","7"],["value","8"],["value","9"],["value","10"],["value","11"],["value","12"],["value","13"],["value","14"],["value","15"],["value","16"],["value","17"],["value","18"],["value","19"],["value","20"],["value","21"],["value","22"]],template:function(i,o){1&i&&(b.Lb(0,"ion-content",0),b.Lb(1,"div",1),b.Lb(2,"form"),b.Lb(3,"div",2),b.kc(4),b.Kb(),b.Lb(5,"div",3),b.kc(6),b.Kb(),b.Lb(7,"div",4),b.kc(8),b.Kb(),b.Lb(9,"label"),b.Lb(10,"p",5),b.kc(11,"\xbfCon qui\xe9n tiene problemas? (*):"),b.Kb(),b.Lb(12,"select",6),b.Tb("change",function(){return o.changeField("casoField1")}),b.Lb(13,"option",7),b.kc(14,"- Seleccionar -"),b.Kb(),b.Lb(15,"option",8),b.kc(16,"El estado (Toda entidad p\xfablica u organismo adscrito a los gobiernos nacionales regionales y/o locales)"),b.Kb(),b.Lb(17,"option",9),b.kc(18,"Un particular o empresa privada (Tu jefe, un amigo, tu familia, conocidos, tu jefe y empresas que son privadas)"),b.Kb(),b.Kb(),b.Lb(19,"div",10),b.Jb(20,"div",11),b.Kb(),b.Kb(),b.Lb(21,"label"),b.Lb(22,"p",5),b.kc(23,"\xbfSobre que trata tu caso? (*):"),b.Kb(),b.Lb(24,"select",12),b.Tb("change",function(){return o.changeField("casoField2")}),b.Lb(25,"option",7),b.kc(26,"- Seleccionar -"),b.Kb(),b.jc(27,p,2,0,"option",13),b.jc(28,f,2,0,"option",14),b.jc(29,g,2,0,"option",15),b.jc(30,F,2,0,"option",16),b.jc(31,v,2,0,"option",17),b.jc(32,h,2,0,"option",18),b.jc(33,m,2,0,"option",19),b.jc(34,V,2,0,"option",20),b.jc(35,L,2,0,"option",21),b.jc(36,K,2,0,"option",22),b.jc(37,k,2,0,"option",23),b.jc(38,I,2,0,"option",24),b.Kb(),b.Lb(39,"div",10),b.Jb(40,"div",11),b.Kb(),b.Kb(),b.Lb(41,"label",25),b.Lb(42,"p",5),b.kc(43,"Cual:"),b.Kb(),b.Jb(44,"input",26),b.Lb(45,"div",10),b.Jb(46,"div",11),b.Kb(),b.Kb(),b.Lb(47,"label"),b.Lb(48,"p",5),b.kc(49,"\xbfCu\xe1l es tu problema? (*):"),b.Kb(),b.Lb(50,"select",27),b.Tb("change",function(){return o.changeField("casoField4")}),b.Lb(51,"option",7),b.kc(52,"- Seleccionar -"),b.Kb(),b.jc(53,x,2,0,"option",13),b.jc(54,j,2,0,"option",14),b.jc(55,C,2,0,"option",15),b.jc(56,w,2,0,"option",16),b.jc(57,y,2,0,"option",17),b.jc(58,P,2,0,"option",18),b.jc(59,O,2,0,"option",19),b.jc(60,M,2,0,"option",20),b.jc(61,S,2,0,"option",21),b.jc(62,J,2,0,"option",22),b.jc(63,T,2,0,"option",23),b.jc(64,_,2,0,"option",24),b.jc(65,D,2,0,"option",28),b.jc(66,E,2,0,"option",29),b.jc(67,R,2,0,"option",30),b.jc(68,q,2,0,"option",31),b.jc(69,A,2,0,"option",32),b.jc(70,N,2,0,"option",33),b.jc(71,G,2,0,"option",34),b.jc(72,U,2,0,"option",35),b.jc(73,X,2,0,"option",36),b.jc(74,z,2,0,"option",37),b.Kb(),b.Lb(75,"div",10),b.Jb(76,"div",11),b.Kb(),b.Kb(),b.Lb(77,"label",38),b.Lb(78,"p",5),b.kc(79,"Cual:"),b.Kb(),b.Jb(80,"input",39),b.Lb(81,"div",10),b.Jb(82,"div",11),b.Kb(),b.Kb(),b.Lb(83,"label"),b.Lb(84,"p",5),b.kc(85,"Cuentanos de tu caso (*):"),b.Kb(),b.Jb(86,"textarea",40),b.Lb(87,"div",10),b.Jb(88,"div",11),b.Kb(),b.Kb(),b.Lb(89,"label"),b.Lb(90,"p",5),b.kc(91,"\xbfYa se inici\xf3 un proceso ante un juzgado o entidad para su soluci\xf3n? (*):"),b.Kb(),b.Lb(92,"select",41),b.Lb(93,"option",7),b.kc(94,"- Seleccionar -"),b.Kb(),b.Lb(95,"option",8),b.kc(96,"Si"),b.Kb(),b.Lb(97,"option",9),b.kc(98,"No"),b.Kb(),b.Kb(),b.Lb(99,"div",10),b.Jb(100,"div",11),b.Kb(),b.Kb(),b.Lb(101,"button",42),b.Tb("click",function(){return o.modalConfirmar("Registrar caso","\xbf Esta seguro de continuar con la informaci\xf3n diligenciada ?")}),b.kc(102,"Registrar Caso"),b.Kb(),b.Kb(),b.Kb(),b.Kb()),2&i&&(b.ac("fullscreen",!0),b.xb(4),b.mc(" ",o.msg," "),b.xb(2),b.mc(" ",o.msg," "),b.xb(2),b.mc(" ",o.msg," "),b.xb(19),b.ac("ngIf",1==o.casoField2Vali1&&1==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&2==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&2==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&2==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&1==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&2==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&2==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&2==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&1==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&1==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1&&2==o.casoField2Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1),b.xb(15),b.ac("ngIf",1==o.casoField4Vali1&&2==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&5==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&3==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&4==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&5==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&2==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&3==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&5==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&2==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&4==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&2==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&3==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField4Vali1&&1==o.casoField4Vali2),b.xb(1),b.ac("ngIf",1==o.casoField2Vali1))},directives:[c.d,n.h,n.d,n.e,n.f,n.g,e.i],styles:["body[_ngcontent-%COMP%]{background:#c5e1a5}form[_ngcontent-%COMP%]{width:60%;margin:60px auto;background:#efefef;padding:12% 120px 80px;text-align:center;box-shadow:2px 2px 3px rgba(0,0,0,.1)}label[_ngcontent-%COMP%]{display:block;position:relative;margin:40px 0}.label-txt[_ngcontent-%COMP%]{position:absolute;top:-1.6em;padding:10px;font-family:sans-serif;font-size:.8em;letter-spacing:1px;color:#787878;transition:.3s ease}.input[_ngcontent-%COMP%]{width:100%;padding:10px;background:transparent;border:none;outline:none}.line-box[_ngcontent-%COMP%]{position:relative;width:100%;height:2px;background:#bcbcbc}.line[_ngcontent-%COMP%]{position:absolute;width:0;height:2px;top:0;left:50%;transform:translateX(-50%);background:#0b1b3b;transition:.6s ease}.input[_ngcontent-%COMP%]:focus + .line-box[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%}.label-active[_ngcontent-%COMP%]{top:-3em}button[_ngcontent-%COMP%]{display:inline-block;padding:12px 24px;background:#dcdcdc;font-weight:700;color:#787878;border:none;outline:none;border-radius:3px;cursor:pointer;transition:.3s ease}button[_ngcontent-%COMP%]:hover{background:#0b1b3b;color:#fff}"]}),i})()}];let W=(()=>{class i{}return i.\u0275mod=b.Gb({type:i}),i.\u0275inj=b.Fb({factory:function(o){return new(o||i)},imports:[[l.i.forChild(H)],l.i]}),i})(),Y=(()=>{class i{}return i.\u0275mod=b.Gb({type:i}),i.\u0275inj=b.Fb({factory:function(o){return new(o||i)},imports:[[e.b,n.a,c.i,W]]}),i})()}}]);