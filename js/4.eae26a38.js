(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"5ca6":function(t,a,e){"use strict";e("eabd")},"8b24":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pt-xl "},[t.dialogContacto||t.dialogProyectos?t._e():e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-12 col-md-5 cuadradoPrincipal",style:t.cd},[t._m(0),e("div",{staticClass:"text-center"},[e("q-btn",{staticClass:"q-px-lg q-ma-sm q-pa-xs",attrs:{outline:"",color:"white",label:"Proyectos"},on:{click:function(a){t.dialogProyectos=!0}}}),e("q-btn",{staticClass:"q-px-lg q-ma-sm q-pa-xs",attrs:{outline:"",color:"white",label:"Contacto"},on:{click:function(a){t.dialogContacto=!0}}})],1)])]),e("q-dialog",{model:{value:t.dialogContacto,callback:function(a){t.dialogContacto=a},expression:"dialogContacto"}},[e("q-card",{staticClass:"column dialog-bg q-pa-xl miFuente",staticStyle:{width:"700px","max-width":"80vw"}},[e("q-form",{on:{submit:t.contactarFirebase}},[e("h3",{staticClass:"titulo text-primary q-pl-md"},[t._v(" Contacto")]),e("div",{staticClass:"row justify-start"},[e("div",{staticClass:"col-12 col-md-6"},[e("q-input",{ref:"input1",staticClass:"q-pa-md",attrs:{dark:"",filled:"",label:"Nombre","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Ingrese su nombre"}]},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("div",{staticClass:"col-12 col-md-6"},[e("q-input",{ref:"input2",staticClass:"q-pa-md",attrs:{dark:"",filled:"",label:"Mail",type:"email","lazy-rules":"",rules:[function(t){return t.length>0||"Ingrese su email"}]},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1)]),e("q-input",{ref:"input3",staticClass:"q-pa-md",attrs:{dark:"",filled:"",label:"Mensaje",type:"textarea","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Ingrese un mensaje"}]},model:{value:t.text,callback:function(a){t.text=a},expression:"text"}}),e("div",{staticClass:"text-center q-pt-md"},[e("q-btn",{staticClass:"q-px-lg q-mx-md q-mb-md",attrs:{outline:"",color:"white",type:"submit",label:"Enviar"}}),e("q-btn",{staticClass:"q-px-md q-mx-md q-mb-md",attrs:{outline:"",color:"white",label:"Cancelar"},on:{click:t.closeDialog}})],1)],1)],1)],1),e("q-dialog",{model:{value:t.dialogProyectos,callback:function(a){t.dialogProyectos=a},expression:"dialogProyectos"}},[e("q-card",{staticClass:"dialog-bg ",staticStyle:{width:"700px","max-width":"80vw"}},[e("q-card-section",[e("div",{staticClass:"text-h4 text-primary"},[t._v("Proyectos")])]),e("q-separator"),e("q-card-section",{staticClass:"text-center q-hoverable  "},[e("span",{staticClass:"q-focus-helper"}),e("q-img",{staticClass:"cursor-pointer ",staticStyle:{width:"80%"},attrs:{src:"https://i.imgur.com/V6Rnu8K.jpg"},on:{click:t.linkPet}},[e("div",{staticClass:"absolute-bottom text-subtitle1 text-center"},[t._v("\n          Repositorio de app android con kotlin.\n        ")])])],1),e("q-card-section",{staticClass:"text-center q-hoverable  "},[e("span",{staticClass:"q-focus-helper"}),e("q-img",{staticClass:"cursor-pointer ",staticStyle:{width:"80%"},attrs:{src:"https://i.imgur.com/mluvdKz.jpg"},on:{click:t.linkPort}})],1),e("q-card-section",{staticClass:"text-center q-hoverable  "},[e("span",{staticClass:"q-focus-helper"}),e("q-img",{staticClass:"cursor-pointer ",staticStyle:{width:"80%"},attrs:{src:"https://i.imgur.com/sfrz0ui.png"},on:{click:t.linkHotel}})],1),e("q-card-section",{staticClass:"text-center q-hoverable  "},[e("span",{staticClass:"q-focus-helper"}),e("q-img",{staticClass:"cursor-pointer ",staticStyle:{width:"80%"},attrs:{src:"https://i.imgur.com/OR2bf6S.png"},on:{click:t.linkNews}})],1)],1)],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center logo"},[e("img",{staticClass:"text-center responsive ",staticStyle:{height:"75px",width:"55px"},attrs:{src:"https://i.imgur.com/ifEdLNY.png"}})])}],o=(e("e6cf"),e("fc1b")),l={name:"PageIndex",data(){return{name:"",email:"",text:"",mensaje:"",id:"",correcto:!1,dialogContacto:!1,dialogProyectos:!1,condition:!1,adsenseContent:""}},methods:{closeDialog:function(){this.name="",this.email="",this.text="",this.dialogContacto=!1},async contactarFirebase(){try{await o["a"].collection("mensajes").add({texto:this.text,email:this.email,nombre:this.name,fecha:new Date})}finally{this.name="",this.email="",this.text="",this.$q.notify({message:"Mensaje enviado",color:"black",timeout:1500}),this.$refs.input1.resetValidation(),this.$refs.input2.resetValidation(),this.$refs.input3.resetValidation()}},linkHotel(){window.location.href="https://tomasbritofailace.github.io/hotel/#/"},linkNews(){window.location.href="https://tomasbritofailace.github.io/News/#/"},linkPort(){window.location.href="https://tomasbritofailace.github.io/Portfolio/#/"},linkPet(){window.location.href="https://github.com/BrianWolko/PetRescue/"}}},c=l,n=(e("5ca6"),e("2877")),r=e("9c40"),d=e("24e8"),m=e("f09f"),u=e("0378"),p=e("27f9"),h=e("a370"),f=e("eb85"),g=e("068f"),b=e("eebe"),q=e.n(b),C=Object(n["a"])(c,s,i,!1,null,"dfb6c800",null);a["default"]=C.exports;q()(C,"components",{QBtn:r["a"],QDialog:d["a"],QCard:m["a"],QForm:u["a"],QInput:p["a"],QCardSection:h["a"],QSeparator:f["a"],QImg:g["a"]})},eabd:function(t,a,e){}}]);