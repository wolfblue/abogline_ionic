(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{eKPx:function(n,t,o){"use strict";o.r(t),o.d(t,"QuienesSomosPageModule",function(){return m});var e=o("ofXK"),i=o("3Pt+"),a=o("TEn/"),r=o("tyNb"),s=o("AytR"),c=o("1G5W"),g=o("XNiG"),d=o("fXoL"),b=o("tk/3");const p=[{path:"",component:(()=>{class n{constructor(n){this.http=n,this.unsubscribe$=new g.a,this.quienesSomos="",this.getQuienesSomos()}ngOnInit(){}postModel(n,t){return this.http.post(""+s.a.apiUrl+n,t)}getQuienesSomos(){var n=this;let t=new FormData;t.append("tipo","quienes-somos"),n.postModel("apiAdminGetContenido",t).pipe(Object(c.a)(n.unsubscribe$)).subscribe(t=>{t.length>0&&(n.quienesSomos=t[0].contenido)})}}return n.\u0275fac=function(t){return new(t||n)(d.Kb(b.a))},n.\u0275cmp=d.Eb({type:n,selectors:[["app-quienes-somos"]],decls:111,vars:0,consts:[[1,"nosotros"],[1,"encabezado"],[1,"encabezadoTitle","marginTop7"],[1,"encabezadoDescription"],[1,"row","separador"],[1,"col-3","textTipo1"],["src","/assets/images/nuestro_equipo.png"],[1,"col-8"],[1,"col-1"],["src","/assets/images/logo_redondo.png"],[1,"nuestroEquipoDescription"],[1,"nuestroEquipoTable"],[1,"row","nuestroEquipoRow"],[1,"col-3","nuestroEquipoCol"],["src","/assets/images/perfil_example.jpg"],[1,"nuestroEquipoName"],[1,"nuestroEquipoRol"],["src","/assets/images/nuestros_servicios.png"],[1,"nuestrosClientes"],[1,"row","row5"],[1,"col-sm-12","col-md-4","col51"],[1,"title2"],[1,"row"],[1,"col-md-10","paadingR0"],["type","text","placeholder","Email",1,"input1"],[1,"col-md-2"],["src","/assets/images/btn_enviar.png",1,"btnEnviar","cursor"],[1,"p1"],[1,"title2","servicioCliente"],[1,"title3"],[1,"col-sm-12","col-md-4","col52"],[1,"title2","center"],[1,"row","redes"],[1,"col","center","paddingEmpty"],["src","/assets/images/facebook.png",1,"siguenosIcon","cursor"],["src","/assets/images/twitter.png",1,"siguenosIcon","cursor"],["src","/assets/images/instagram.png",1,"siguenosIcon","cursor"],["src","/assets/images/linked.png",1,"siguenosIcon","cursor"],["src","/assets/images/whastapp.png",1,"siguenosIcon","cursor"],[1,"center"],["src","/assets/images/24_7.png",1,"icon247"],[1,"col-sm-12","col-md-4","col53"],[1,"copyright"],[1,"copyright2"]],template:function(n,t){1&n&&(d.Pb(0,"div",0),d.Pb(1,"div",1),d.Pb(2,"div",2),d.Jc(3,"\xbfQui\xe9nes Somos?"),d.Ob(),d.Pb(4,"div",3),d.Jc(5," Somos una empresa de tecnolog\xeda y legal que brindan servicios jur\xeddicos (mediante su marca abogline) y soluciones tecnol\xf3gicas en desarrollo para los problemas de personas naturales; peque\xf1as, medianas y grandes empresas. "),d.Ob(),d.Pb(6,"div",2),d.Jc(7,"\xbfQu\xe9 Hacemos?"),d.Ob(),d.Pb(8,"div",3),d.Jc(9," Generar intermediaci\xf3n entre usuarios y abogados seg\xfan se ajusten a las necesidades del caso jur\xeddico. "),d.Ob(),d.Pb(10,"div",2),d.Jc(11,"C\xf3mo Lo Hacemos"),d.Ob(),d.Pb(12,"div",3),d.Jc(13," Mediante una plataforma web y aplicaciones, en el cual de manera did\xe1ctica hay v\xednculos entre usuarios (personas naturales y jur\xeddicas) y abogados, y de igual manera la vigilancia y control de los procesos que surgen de esa relaci\xf3n. "),d.Ob(),d.Ob(),d.Pb(14,"div",4),d.Pb(15,"div",5),d.Lb(16,"img",6),d.Ob(),d.Pb(17,"div",7),d.Lb(18,"hr"),d.Ob(),d.Pb(19,"div",8),d.Lb(20,"img",9),d.Ob(),d.Ob(),d.Pb(21,"div",10),d.Jc(22," Lorem ipsum dolor sit amet , consectetur adipiscing elit. Ut a quam blandit, pallentesque massa ut, fermentum elit. Sed commodo ligula vel turpis. "),d.Ob(),d.Pb(23,"div",11),d.Pb(24,"div",12),d.Pb(25,"div",13),d.Lb(26,"img",14),d.Pb(27,"div",15),d.Jc(28,"DIEGO MOLINA"),d.Ob(),d.Pb(29,"div",16),d.Jc(30,"CEO"),d.Ob(),d.Ob(),d.Pb(31,"div",13),d.Lb(32,"img",14),d.Pb(33,"div",15),d.Jc(34,"JULIAN GARAVITO"),d.Ob(),d.Pb(35,"div",16),d.Jc(36,"COO"),d.Ob(),d.Ob(),d.Pb(37,"div",13),d.Lb(38,"img",14),d.Pb(39,"div",15),d.Jc(40,"EDWIN ALDANA"),d.Ob(),d.Pb(41,"div",16),d.Jc(42,"DESARROLLADOR WEB"),d.Ob(),d.Ob(),d.Pb(43,"div",13),d.Lb(44,"img",14),d.Pb(45,"div",15),d.Jc(46,"CAMILO AVELLANEDA"),d.Ob(),d.Pb(47,"div",16),d.Jc(48,"DISE\xd1ADOR PUBLICITARIO"),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Ob(),d.Pb(49,"div",4),d.Pb(50,"div",5),d.Lb(51,"img",17),d.Ob(),d.Pb(52,"div",7),d.Lb(53,"hr"),d.Ob(),d.Pb(54,"div",8),d.Lb(55,"img",9),d.Ob(),d.Ob(),d.Pb(56,"div",18),d.Jc(57," Lorem ipsum dolor sit amet , consectetur adipiscing elit. Ut a quam blandit, pallentesque massa ut, fermentum elit. Sed commodo ligula vel turpis.\n"),d.Ob(),d.Pb(58,"div",19),d.Pb(59,"div",20),d.Pb(60,"p",21),d.Jc(61," MANTENGAMOS EL CONT\xc1CTO"),d.Ob(),d.Pb(62,"div",22),d.Pb(63,"div",23),d.Lb(64,"input",24),d.Ob(),d.Pb(65,"div",25),d.Lb(66,"img",26),d.Ob(),d.Ob(),d.Pb(67,"p",27),d.Jc(68," Suscribete y s\xe9 el primero en recibir ofertas, informaci\xf3n de servicios y m\xe1s acerca"),d.Lb(69,"br"),d.Jc(70," de "),d.Pb(71,"span"),d.Jc(72,"ABOGLINE"),d.Ob(),d.Jc(73,". Para obtener m\xe1s informaci\xf3n visita nuestro "),d.Pb(74,"a"),d.Jc(75,"Aviso de privacidad"),d.Ob(),d.Ob(),d.Pb(76,"p",28),d.Jc(77,"SERVICIO AL CLIENTE"),d.Ob(),d.Pb(78,"p",29),d.Jc(79,"Preguntas Frecuentes"),d.Ob(),d.Pb(80,"p",29),d.Jc(81,"PQRS"),d.Ob(),d.Pb(82,"p",29),d.Jc(83,"Correo directo"),d.Ob(),d.Ob(),d.Pb(84,"div",30),d.Pb(85,"p",31),d.Jc(86,"S\xcdGUENOS"),d.Ob(),d.Pb(87,"div",32),d.Pb(88,"div",33),d.Lb(89,"img",34),d.Ob(),d.Pb(90,"div",33),d.Lb(91,"img",35),d.Ob(),d.Pb(92,"div",33),d.Lb(93,"img",36),d.Ob(),d.Pb(94,"div",33),d.Lb(95,"img",37),d.Ob(),d.Pb(96,"div",33),d.Lb(97,"img",38),d.Ob(),d.Ob(),d.Pb(98,"div",39),d.Lb(99,"img",40),d.Ob(),d.Ob(),d.Lb(100,"div",41),d.Ob(),d.Pb(101,"p",42),d.Pb(102,"span"),d.Jc(103,"2021 \xa9 INFOABOGADOS S.A.S - ABOGLINE; Todos los derechos reservados."),d.Ob(),d.Pb(104,"span",43),d.Jc(105,"Elaborado por: "),d.Pb(106,"b"),d.Jc(107,"Edwin Aldana"),d.Ob(),d.Jc(108," en colaboraci\xf3n de "),d.Pb(109,"b"),d.Jc(110,"Camilo Avellaneda"),d.Ob(),d.Ob(),d.Ob())},styles:[".cursor[_ngcontent-%COMP%]:hover{cursor:pointer;opacity:.4}.center[_ngcontent-%COMP%]{text-align:center}.color1[_ngcontent-%COMP%]{background-color:#d8d9dd}.row2[_ngcontent-%COMP%]{background-image:url(/assets/images/banner_ejemplo.png);background-position:50%;background-size:100% 100%;min-height:350px;background-repeat:no-repeat}.row3[_ngcontent-%COMP%]{background-color:#d8d9dd;padding-bottom:4%}.col41[_ngcontent-%COMP%]{background-image:url(/assets/images/mockup_app.png);background-position:50%;background-size:100% 100%;padding-bottom:7%}.col42[_ngcontent-%COMP%]{background-color:#8b8b8c}.row5[_ngcontent-%COMP%]{background-image:url(/assets/images/banner_inferior.png);background-position:50%;background-size:100% 100%}.col51[_ngcontent-%COMP%]{padding-left:6%}.col51[_ngcontent-%COMP%], .col52[_ngcontent-%COMP%]{padding-top:3%;padding-bottom:2%}.logo2[_ngcontent-%COMP%]{position:relative;left:60%;padding-top:2%;padding-bottom:2%}.logo2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20%}.submain[_ngcontent-%COMP%]{width:75%;margin:7% 0 0 14%}.titleMain[_ngcontent-%COMP%]{color:#041836;font-weight:700;padding-top:2%;font-size:18px;font-family:Lato}.mantenteAlDia[_ngcontent-%COMP%]{text-align:center;padding-top:5%;color:#071a39;font-weight:800;font-size:18px}.logotipoAbogline[_ngcontent-%COMP%]{width:42%;margin-top:22%}.descargaNuestraApp[_ngcontent-%COMP%]{margin-top:6%;color:#041835;font-weight:700;font-size:17px;line-height:17px;font-family:Calibri}.googlePlay[_ngcontent-%COMP%]{margin-top:3%;width:76%}.appStore[_ngcontent-%COMP%]{margin-top:9%;width:76%}.copyright[_ngcontent-%COMP%]{background:#00475c;color:#fff;font-size:12px;padding:.5% 0 .5% 5%;margin:0;font-family:Calibri}.title2[_ngcontent-%COMP%]{font-weight:800;font-size:22px}.title2[_ngcontent-%COMP%], .title3[_ngcontent-%COMP%]{color:#041836;padding-top:2%}.title3[_ngcontent-%COMP%]{font-weight:500;font-size:17px;margin:0;line-height:19px;font-family:Calibri}.input1[_ngcontent-%COMP%]{background:#788392;border:0 solid;border-radius:5px;width:100%;padding-left:5%;font-style:italic}.input1[_ngcontent-%COMP%], .input1[_ngcontent-%COMP%]::placeholder{color:#fff}.p1[_ngcontent-%COMP%]{margin-top:3%;font-size:10px;font-family:Calibri}.siguenosIcon[_ngcontent-%COMP%]{width:70%}.paddingEmpty[_ngcontent-%COMP%]{padding:0}.redes[_ngcontent-%COMP%]{width:60%;margin:auto}.icon247[_ngcontent-%COMP%]{width:60%;margin-top:2%}.copyright2[_ngcontent-%COMP%]{float:right;margin-right:5%;font-family:Calibri}.servicioCliente[_ngcontent-%COMP%]{margin-bottom:0}.facebookWidget[_ngcontent-%COMP%]{padding-bottom:2%}.agendaCita[_ngcontent-%COMP%]:hover, .consultarAbogados[_ngcontent-%COMP%]:hover, .registraTuCaso[_ngcontent-%COMP%]:hover{transform:scale(1.1);cursor:pointer;opacity:.8}.btnEnviar[_ngcontent-%COMP%]{width:62%}.paadingR0[_ngcontent-%COMP%]{padding-right:0}.facebook[_ngcontent-%COMP%]{padding-right:0!important}.twitter[_ngcontent-%COMP%]{padding-left:0!important}.twitter[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin-left:-6%!important}.marginTop7[_ngcontent-%COMP%]{margin-top:7%}.nosotros[_ngcontent-%COMP%]{background-image:url(/assets/images/fondo_nosotros.png);background-position:top;background-size:100% 100%}.encabezado[_ngcontent-%COMP%]{background-image:url(/assets/images/quienes_somos.png);background-size:52% 100%;background-repeat:no-repeat;padding-top:2%;padding-left:54%;padding-right:5%;height:551px}.encabezadoTitle[_ngcontent-%COMP%]{font-size:25px;text-align:center;padding-bottom:2%}.word1[_ngcontent-%COMP%]{font-size:16px}.encabezadoTitle[_ngcontent-%COMP%], .word1[_ngcontent-%COMP%]{color:#0c1f3c;font-weight:700}.encabezadoTitle[_ngcontent-%COMP%]{font-size:21px}.encabezadoDescription[_ngcontent-%COMP%]{font-size:13px;text-align:justify;line-height:23px}.separador[_ngcontent-%COMP%]{margin-top:2%;margin-left:4%;margin-right:4%}.textTipo1[_ngcontent-%COMP%]{color:#1a344b;font-size:19px;font-weight:700;padding-top:1%}.separador[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-top:3%;color:#0b1e3b}.separador[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:76%}.testimonio[_ngcontent-%COMP%]{background-image:url(/assets/images/testimonio_vacio.png);background-position:50%;background-size:94% 100%;background-repeat:no-repeat;height:241px}.testimonios[_ngcontent-%COMP%]{padding:1% 5%}.testimonio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;width:100%;padding-top:4%;padding-left:2%}.testimonioTitle[_ngcontent-%COMP%]{margin-top:12%;color:#142642;font-weight:700}.estrellas[_ngcontent-%COMP%]{margin-top:10%;margin-left:7%}.estrellas[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:11%;margin:0;padding:0 3% 0 0}.testimonioDescription[_ngcontent-%COMP%]{margin-left:19%;margin-right:10%;color:#0e213d;font-size:12px;text-align:center;margin-top:3%}.testimonioPersona[_ngcontent-%COMP%]{text-align:right;color:#0d203d;font-size:12px;font-weight:700;margin-right:11%;margin-top:4%}.nuestrosClientes[_ngcontent-%COMP%]{text-align:center;margin:2% 5% 5%}.nuestroEquipoDescription[_ngcontent-%COMP%]{text-align:center;margin:2% 5% 3%}.nuestroEquipoTable[_ngcontent-%COMP%]{margin-left:5%;margin-right:5%;margin-bottom:4%}.nuestroEquipoName[_ngcontent-%COMP%]{text-align:center;color:#264558;margin-top:4%;font-weight:700}.nuestroEquipoRol[_ngcontent-%COMP%]{text-align:center;color:#264558;margin-top:0}"]}),n})()}];let l=(()=>{class n{}return n.\u0275mod=d.Ib({type:n}),n.\u0275inj=d.Hb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(p)],r.i]}),n})(),m=(()=>{class n{}return n.\u0275mod=d.Ib({type:n}),n.\u0275inj=d.Hb({factory:function(t){return new(t||n)},imports:[[e.c,i.a,a.e,l]]}),n})()}}]);