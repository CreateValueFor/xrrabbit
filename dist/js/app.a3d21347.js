(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],p=0,m=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&m.push(l[r][0]),l[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==l[u]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"024e":function(e,t,n){},"14ee":function(e,t,n){},"23d1":function(e,t,n){},"2dae":function(e,t,n){"use strict";n("14ee")},"2ef6":function(e,t,n){},"490e":function(e,t,n){"use strict";n("dfeb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"app"},[n("sidebar",{staticClass:"sidebar",on:{show:e.changePage}}),n("contents",{staticClass:"content",attrs:{page:e.page}})],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["club"===e.page?n("Club"):e._e(),"crimson"===e.page?n("Crimson"):e._e(),"article"===e.page?n("Article"):e._e(),"sports"===e.page?n("SportStar"):e._e()],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Select",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"클럽명",name:"clubId",items:e.items},on:{onChange:e.onChange},model:{value:e.clubData.clubId,callback:function(t){e.$set(e.clubData,"clubId",t)},expression:"clubData.clubId"}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"기부자 이름",name:"name",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"인명구분(기업 / 재단 / 개인)",name:"role",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"소속",name:"belong",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"직책",name:"position",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),e.clubData.clubId<7?n("ImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"thumb",label:!0,labelHolder:"기부자 대표 이미지"},on:{onChange:e.onChangeThumb}}):e._e(),e.clubData.clubId<4?n("ImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"logo",label:!0,labelHolder:"기업 BI / CI / Logo 이미지 업로드"},on:{onChange:e.onChangeLogo}}):e._e(),e.clubData.clubId<7?n("MultyImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"thumb_detail",label:!0,labelHolder:"기부자 추가 이미지"},on:{onChange:e.onMultyImageChange,remove:e.onDeleteMultyImageFile}}):e._e(),n("TextArea",{staticStyle:{"margin-bottom":"140px"},attrs:{name:"description",minHeight:"300px",label:!0,labelHolder:"기부자 소개"},on:{onKeyUp:e.onChange}}),n("ButtonGroup",{on:{ok:e.onSubmit}})],1)},s=[],c=n("1da1"),p=(n("96cf"),n("a630"),n("3ca3"),n("a434"),n("d3b7"),n("159b"),n("b0c0"),n("a4d3"),n("e01a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.containerClasses},[e.label?a("p",[e._v(e._s(e.labelHolder))]):e._e(),a("div",{staticStyle:{position:"relative","max-width":"882px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],class:e.classes,style:e.style,attrs:{disabled:e.disabled},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.localValue=t.target.multiple?n:n[0]},e.onChange]}},e._l(e.items,(function(t,n){return a("option",{key:n,domProps:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),0),a("img",{staticClass:"select-dropdown",attrs:{src:n("8cc0"),alt:"dropdown"}})])])}),m=[],d=n("ade3"),b=(n("a9e3"),{name:"bo-select",data:function(){return{inputType:"text"}},props:{items:{type:Array},name:{type:String,required:!0},disabled:{type:Boolean,default:!1},width:{type:String,default:"full",validator:function(e){return-1!==["full","half","quarter"].indexOf(e)}},placeholder:{type:[String,Number]},value:{type:[String,Number]},active:{type:Boolean,default:!1},label:{type:Boolean,default:!0},labelHolder:{type:String},height:{type:String,default:"80px"}},computed:{classes:function(){return{"bo-input":!0,"bo-input--active":this.active,"bo-input--disabled":this.disabled}},containerClasses:function(){return Object(d["a"])({},"bo-input--".concat(this.width),!0)},style:function(){return{height:"80px"}},localValue:{get:function(){return this.value},set:function(e){this.$emit("onKeyUp",{name:this.name,value:e})}}},mounted:function(){"r-number"===this.type?this.inputType="text":this.inputType=this.type},methods:{onChange:function(e){this.$emit("onChange",{name:this.name,value:e.target.value})},onFocus:function(){this.$emit("onFocus")},onKeyup:function(){this.$emit("onKeyup")}}}),h=b,g=(n("ae34"),n("2877")),f=Object(g["a"])(h,p,m,!1,null,"04b9c26f",null),v=f.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.containerClasses},[e.label?n("p",[e._v(e._s(e.labelHolder))]):e._e(),"checkbox"===e.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],class:e.classes,style:e.style,attrs:{disabled:e.disabled,placeholder:e.placeholder,max:e.max,maxlength:e.maxLength,multiple:e.multiple,type:"checkbox"},domProps:{checked:Array.isArray(e.localValue)?e._i(e.localValue,null)>-1:e.localValue},on:{change:[function(t){var n=e.localValue,a=t.target,l=!!a.checked;if(Array.isArray(n)){var o=null,r=e._i(n,o);a.checked?r<0&&(e.localValue=n.concat([o])):r>-1&&(e.localValue=n.slice(0,r).concat(n.slice(r+1)))}else e.localValue=l},e.onChange]}}):"radio"===e.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],class:e.classes,style:e.style,attrs:{disabled:e.disabled,placeholder:e.placeholder,max:e.max,maxlength:e.maxLength,multiple:e.multiple,type:"radio"},domProps:{checked:e._q(e.localValue,null)},on:{change:[function(t){e.localValue=null},e.onChange]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],class:e.classes,style:e.style,attrs:{disabled:e.disabled,placeholder:e.placeholder,max:e.max,maxlength:e.maxLength,multiple:e.multiple,type:e.inputType},domProps:{value:e.localValue},on:{change:e.onChange,input:function(t){t.target.composing||(e.localValue=t.target.value)}}})])},x=[],w={name:"bo-input",data:function(){return{inputType:"text"}},props:{multiple:{type:Boolean},type:{type:String,default:"text"},max:{type:String},maxLength:{type:String},name:{type:String,required:!0},disabled:{type:Boolean,default:!1},width:{type:String,default:"full",validator:function(e){return-1!==["full","half","quarter"].indexOf(e)}},placeholder:{type:[String,Number]},value:{type:[String,Number]},active:{type:Boolean,default:!1},label:{type:Boolean,default:!0},labelHolder:{type:String},height:{type:String,default:"80px"}},computed:{classes:function(){return{"bo-input":!0,"bo-input--active":this.active,"bo-input--disabled":this.disabled}},containerClasses:function(){return Object(d["a"])({},"bo-input--".concat(this.width),!0)},style:function(){return{height:"80px"}},localValue:{get:function(){return this.value},set:function(e){this.$emit("onKeyUp",{name:this.name,value:e})}}},mounted:function(){"r-number"===this.type?this.inputType="text":this.inputType=this.type},methods:{onChange:function(e){this.$emit("onChange",{name:this.name,value:e.target.value})},onFocus:function(){this.$emit("onFocus")},onKeyup:function(){this.$emit("onKeyup")}}},C=w,_=(n("f3a6"),Object(g["a"])(C,y,x,!1,null,"3bd2b562",null)),S=_.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.containerClasses},[e.label?n("p",[e._v(" "+e._s(e.labelHolder)+" ")]):e._e(),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.localValue,expression:"localValue"}],class:e.classes,style:e.style,attrs:{type:e.inputType,disabled:e.disabled,placeholder:e.placeholder,minHeight:e.minHeight},domProps:{value:e.localValue},on:{input:function(t){t.target.composing||(e.localValue=t.target.value)}}})])},k=[],A=a["a"].extend({name:"bo-input",data:function(){return{inputType:"text"}},props:{multiple:{type:Boolean},type:{type:String,default:"text"},minHeight:{type:String},maxLength:{type:String},name:{type:String,required:!0},disabled:{type:Boolean,default:!1},width:{type:String,default:"full",validator:function(e){return-1!==["full","half","quarter"].indexOf(e)}},placeholder:{type:[String,Number]},value:{type:[String,Number]},active:{type:Boolean,default:!1},label:{type:Boolean,default:!0},labelHolder:{type:String},height:{type:String,default:"40px"}},computed:{classes:function(){return{"bo-input":!0,"bo-input--active":this.active,"bo-input--disabled":this.disabled}},containerClasses:function(){return Object(d["a"])({},"bo-input--".concat(this.width),!0)},style:function(){return{height:this.minHeight}},localValue:{get:function(){return this.value},set:function(e){this.$emit("onKeyUp",{name:this.name,value:e})}}},mounted:function(){"r-number"===this.type?this.inputType="text":this.inputType=this.type},methods:{onChange:function(){this.$emit("onChange")},onFocus:function(){this.$emit("onFocus")},onKeyup:function(){this.$emit("onKeyup")}}}),H=A,D=(n("6609"),Object(g["a"])(H,I,k,!1,null,"79a609b6",null)),j=D.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.containerClasses},[e.label?n("p",[e._v(e._s(e.labelHolder))]):e._e(),n("div",{staticStyle:{display:"flex","align-items":"flex-start"}},[n("div",{staticStyle:{display:"flex","align-items":"flex-end","margin-right":"100px"}},[n("div",{staticClass:"input-box"},[e._v(" "+e._s(e.imageName)+" ")]),n("button",{staticClass:"input-button",on:{click:e.clickImageButton}},[e._v("Upload")])]),e.image?n("div",{staticStyle:{position:"relative","maring-right":"40px","text-align":"center",width:"293px"}},[n("img",{staticClass:"image-preview",attrs:{src:e.image}}),n("p",{staticStyle:{"margin-top":"30px","font-weight":"400","font-size":"21.1063px","line-height":"130%","letter-spacing":"0.212772px",color:"#989898"}},[e._v(" 미리보기 ")])]):e._e()]),n("input",{ref:"imageInput",class:e.classes,style:e.style,attrs:{type:"file",disabled:e.disabled,multiple:e.multiple},on:{change:e.onFileChange}})])},T=[],O={name:"bo-input",data:function(){return{image:"",imageName:""}},props:{multiple:{type:Boolean},type:{type:String,default:"text"},max:{type:String},maxLength:{type:String},name:{type:String,required:!0},disabled:{type:Boolean,default:!1},width:{type:String,default:"full",validator:function(e){return-1!==["full","half","quarter"].indexOf(e)}},placeholder:{type:[String,Number]},value:{type:[String,Number]},active:{type:Boolean,default:!1},label:{type:Boolean,default:!0},labelHolder:{type:String},height:{type:String,default:"40px"}},computed:{classes:function(){return{"bo-input":!0,"bo-input--active":this.active,"bo-input--disabled":this.disabled}},containerClasses:function(){return Object(d["a"])({},"bo-input--".concat(this.width),!0)},style:function(){return{height:"40px",visibility:"hidden",display:"none"}}},mounted:function(){"r-number"===this.type?this.inputType="text":this.inputType=this.type},methods:{onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&(this.createImage(t[0]),this.imageName=t[0].name,this.$emit("onChange",e))},createImage:function(e){var t=new FileReader,n=this;t.onload=function(e){n.image=e.target.result},t.readAsDataURL(e)},removeImage:function(){this.image=""},clickImageButton:function(){this.$refs.imageInput.click()}}},V=O,K=(n("fc86"),Object(g["a"])(V,B,T,!1,null,"f645ba50",null)),M=K.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.containerClasses},[e.label?a("p",[e._v(e._s(e.labelHolder))]):e._e(),a("div",{staticStyle:{display:"flex","align-items":"flex-end"}},[a("div",{staticClass:"input-box"},[e._v(" "+e._s(e.imageName)+" ")]),a("button",{staticClass:"input-button",on:{click:e.clickImageButton}},[e._v("Upload")])]),a("input",{ref:"imageInput",class:e.classes,style:e.style,attrs:{type:"file",disabled:e.disabled,multiple:""},on:{change:e.onFileChange}}),a("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},e._l(e.image,(function(t,l){return a("div",{key:l,staticStyle:{position:"relative","margin-top":"80px","maring-right":"40px"}},[a("img",{staticClass:"image-preview",attrs:{src:t}}),a("button",{staticClass:"image-preview-btn",on:{click:function(t){return e.removeImage(l)}}},[a("img",{attrs:{src:n("7e18"),alt:"remove"}})])])})),0)])},U=[],P=(n("ac1f"),n("5319"),n("4de4"),{name:"bo-multy-image",data:function(){return{image:[],imageName:""}},props:{multiple:{type:Boolean},type:{type:String,default:"text"},max:{type:String},maxLength:{type:String},name:{type:String,required:!0},disabled:{type:Boolean,default:!1},width:{type:String,default:"full",validator:function(e){return-1!==["full","half","quarter"].indexOf(e)}},placeholder:{type:[String,Number]},value:{type:[String,Number]},active:{type:Boolean,default:!1},label:{type:Boolean,default:!0},labelHolder:{type:String},height:{type:String,default:"40px"}},computed:{classes:function(){return{"bo-input":!0,"bo-input--active":this.active,"bo-input--disabled":this.disabled}},containerClasses:function(){return Object(d["a"])({},"bo-input--".concat(this.width),!0)},style:function(){return{height:"40px",visibility:"hidden",display:"none"}}},mounted:function(){"r-number"===this.type?this.inputType="text":this.inputType=this.type},methods:{onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;if(t.length){for(var n=0;n<t.length;n++)console.log(t[n]),this.createImage(t[n]),this.imageName=this.imageName+","+t[n].name;this.imageName=this.imageName.replace(",",""),this.$emit("onChange",e)}},createImage:function(e){var t=new FileReader,n=this;t.onload=function(e){n.image.push(e.target.result)},t.readAsDataURL(e)},removeImage:function(e){this.image=this.image.filter((function(t,n){return n!==e})),this.removeFile(e)},removeFile:function(e){this.$emit("remove",e)},clickImageButton:function(){this.$refs.imageInput.click()}}}),R=P,E=(n("d71a"),Object(g["a"])(R,$,U,!1,null,"89fbf354",null)),N=E.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("button",{staticClass:"btn btn-secondary",on:{click:function(t){return e.$emit("preview")}}},[e._v(" 미리보기 ")]),n("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.$emit("ok")}}},[e._v("저장")])])},L=[],G={name:"button-group"},Y=G,q=(n("ffd1"),Object(g["a"])(Y,F,L,!1,null,"19db4eb2",null)),J=q.exports,Q=n("bc3a"),z=n.n(Q),W="./admin/";function Z(e,t){return X.apply(this,arguments)}function X(){return X=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){var a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post(t,n);case 3:return a=e.sent,l=a.data,e.abrupt("return",l);case 8:return e.prev=8,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),X.apply(this,arguments)}var ee=function(e){var t=Z(W+"article/check",e);return t},te=function(e){var t=Z(W+"article",e);return t},ne=function(e){var t=Z(W+"sports",e);return t},ae=function(e){var t=Z(W+"crimson",e);return t},le=function(e){var t=Z(W+"donor",e);return t},oe={searchDonor:ee,postArticle:te,postSportStar:ne,postCrimson:ae,postDonor:le},re={components:{Select:v,Input:S,TextArea:j,ImageInput:M,MultyImageInput:N,ButtonGroup:J},data:function(){return{items:[{value:1,name:"Predident’s Honor Club ( 50억+ )"},{name:"Platinum Honor Club ( 30억+ )",value:2},{value:3,name:"Gold Honor Club ( 10억+ )"},{value:4,name:"Rosegold Honor Club ( 5억+ )"},{value:5,name:"Whitegold Honor Club ( 3억+ )"},{value:6,name:"Silver Honor Club ( 1억+ )"},{value:7,name:"Partner Club ( 1천만원+ )"},{value:8,name:"일반 기부자"}],clubId:10,clubData:{clubId:10,name:"",belong:"",role:"",position:""},thumb_detail:null,thumb:null,logo:null}},watch:{clubData:{deep:!0,handler:function(e){console.log(e)}}},methods:{onChangeLogo:function(e){this.logo=e.target.files[0],console.log(this.logo)},onChangeThumb:function(e){this.thumb=e.target.files[0],console.log(this.thumb)},onMultyImageChange:function(e){console.log(e.target.files),this.thumb_detail=e.target.files,console.log(this.thumb_detail)},onDeleteMultyImageFile:function(e){var t=new DataTransfer,n=Array.from(this.thumb_detail);n.splice(e,1),n.forEach((function(e){t.items.add(e)})),this.thumb_detail=t.files},onChange:function(e){var t=e.name,n=e.value;"clubId"===t&&(this.clubId=n),this.$set(this.clubData,t,n),console.log(this.clubData)},test:function(e){console.log("test"),console.log(e)},onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=new FormData,10!=e.clubData.clubId){t.next=4;break}return window.alert("클럽을 선택해주세요"),t.abrupt("return");case 4:if(""!=e.clubData.name){t.next=7;break}return window.alert("이름을 입력해주세요."),t.abrupt("return");case 7:if(""!=e.clubData.role){t.next=10;break}return window.alert("인명구분을 입력해주세요."),t.abrupt("return");case 10:if(""!=e.clubData.belong){t.next=13;break}return window.alert("소속을 입력해주세요."),t.abrupt("return");case 13:if(""!=e.clubData.position){t.next=16;break}return window.alert("직책을 입력해주세요."),t.abrupt("return");case 16:if(n.append("clubId",e.clubData.clubId),n.append("name",e.clubData.name),n.append("role",e.clubData.role),n.append("belong",e.clubData.belong),n.append("position",e.clubData.position),!(e.clubData.clubId<7)){t.next=41;break}if(""!=e.clubData.description){t.next=25;break}return window.alert("기부자 설명을 입력해주세요."),t.abrupt("return");case 25:if(null!=e.thumb){t.next=28;break}return window.alert("대표사진을 입력해주세요."),t.abrupt("return");case 28:if(null!=e.thumb_detail){t.next=31;break}return window.alert("추가사진들을 입력해주세요."),t.abrupt("return");case 31:n.append("description",e.clubData.description),n.append("thumb",e.thumb),a=0;case 34:if(!(a<e.thumb_detail.length)){t.next=41;break}if(null!=e.thumb_detail[a]){t.next=37;break}return t.abrupt("continue",38);case 37:n.append("thumb_detail",e.thumb_detail[a]);case 38:a++,t.next=34;break;case 41:if(!(e.clubData.clubId<4)){t.next=46;break}if(null!=e.logo){t.next=45;break}return window.alert("로고를 입력해주세요."),t.abrupt("return");case 45:n.append("logo",e.logo);case 46:return t.next=48,oe.postDonor(n);case 48:l=t.sent,l.success&&(window.alert("성공적으로 업로드되었습니다."),window.location.reload()),console.log(l),console.log("gogo");case 52:case"end":return t.stop()}}),t)})))()}}},ie=re,ue=Object(g["a"])(ie,u,s,!1,null,null,null),se=ue.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"클럽명",name:"genre",items:e.items,value:"KU Sejong Crimson Club",disabled:!0},on:{onKeyUp:e.onChange}}),n("Select",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"크림슨 등급",name:"level",items:e.items},on:{onChange:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"이름",name:"name",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"주소",name:"address",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"전화번호",name:"phone",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("ImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"thumb",label:!0,labelHolder:"대표이미지"},on:{onChange:e.onChangeThumb}}),n("MultyImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"thumb_detail",label:!0,labelHolder:"추가이미지"},on:{onChange:e.onMultyImageChange,remove:e.onDeleteMultyImageFile}}),n("ButtonGroup",{on:{ok:e.onSubmit}})],1)},pe=[],me={components:{Input:S,Select:v,ImageInput:M,MultyImageInput:N,ButtonGroup:J},data:function(){return{thumb:null,thumb_detail:null,items:[{value:"gold",name:"gold"},{name:"silver",value:"silver"},{value:"bronze",name:"bronze"}],crimsonData:{name:"",phone:"",address:"",level:""}}},methods:{onChangeThumb:function(e){this.thumb=e.target.files[0],console.log(this.thumb)},onChangeImage:function(e){console.log(e),console.log(this.thumb_detail)},onMultyImageChange:function(e){console.log(e.target.files),this.thumb_detail=e.target.files,console.log(this.thumb_detail)},onDeleteMultyImageFile:function(e){var t=new DataTransfer,n=Array.from(this.thumb_detail);n.splice(e,1),n.forEach((function(e){t.items.add(e)})),this.thumb_detail=t.files},test:function(){console.log("dd")},onChange:function(e){console.log(e);var t=e.name,n=e.value;this.$set(this.crimsonData,t,n),console.log(this.crimsonData)},onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.crimsonData.phone){t.next=3;break}return window.alert("연락처를 선택해주세요"),t.abrupt("return");case 3:if(""!=e.crimsonData.name){t.next=6;break}return window.alert("이름을 입력해주세요."),t.abrupt("return");case 6:if(""!=e.crimsonData.address){t.next=9;break}return window.alert("주소를 입력해주세요."),t.abrupt("return");case 9:if(""!=e.crimsonData.level){t.next=12;break}return window.alert("크림슨 등급을 입력해주세요."),t.abrupt("return");case 12:if(null!=e.thumb){t.next=15;break}return window.alert("대표사진을 입력해주세요."),t.abrupt("return");case 15:if(null!=e.thumb_detail){t.next=18;break}return window.alert("추가사진들을 입력해주세요."),t.abrupt("return");case 18:n=new FormData,n.append("clubId",9),n.append("phone",e.crimsonData.phone),n.append("name",e.crimsonData.name),n.append("address",e.crimsonData.address),n.append("level",e.crimsonData.level),n.append("thumb",e.thumb),a=0;case 26:if(!(a<e.thumb_detail.length)){t.next=33;break}if(null!=e.thumb_detail[a]){t.next=29;break}return t.abrupt("continue",30);case 29:n.append("thumb_detail",e.thumb_detail[a]);case 30:a++,t.next=26;break;case 33:return t.next=35,oe.postCrimson(n);case 35:l=t.sent,l.success&&(window.alert("성공적으로 업로드되었습니다."),window.location.reload()),console.log(l),console.log("gogo");case 39:case"end":return t.stop()}}),t)})))()}}},de=me,be=Object(g["a"])(de,ce,pe,!1,null,null,null),he=be.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Select",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"종목",name:"genre",items:e.items},on:{onChange:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"이름",name:"name",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"학적정보",name:"major",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("ImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"thumb",label:!0,labelHolder:"대표이미지"},on:{onChange:e.onChangeThumb}}),n("MultyImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"thumb_detail",label:!0,labelHolder:"추가이미지"},on:{onChange:e.onMultyImageChange,remove:e.onDeleteMultyImageFile}}),n("TextArea",{staticStyle:{"margin-bottom":"140px"},attrs:{name:"description",minHeight:"300px",label:!0,labelHolder:"스포츠 스타 소개"},on:{onKeyUp:e.onChange}}),e._v(" "),n("ButtonGroup",{on:{ok:e.onSubmit}})],1)},fe=[],ve={components:{Select:v,Input:S,TextArea:j,ImageInput:M,MultyImageInput:N,ButtonGroup:J},data:function(){return{items:[{name:"골프",value:"골프"},{name:"마라톤",value:"마라톤"},{name:"쇼트트랙",value:"쇼트트랙"},{name:"스키",value:"스키"},{name:"아티스틱스위밍",value:"아티스틱스위밍"},{name:"야구",value:"야구"},{name:"축구",value:"축구"},{name:"피겨",value:"피겨"}],thumb:null,thumb_detail:null,starContent:{genre:"",name:"",major:"",description:""}}},methods:{onChangeThumb:function(e){this.thumb=e.target.files[0],console.log(this.thumb)},onMultyImageChange:function(e){console.log(e.target.files),this.thumb_detail=e.target.files,console.log(this.thumb_detail)},onDeleteMultyImageFile:function(e){var t=new DataTransfer,n=Array.from(this.thumb_detail);n.splice(e,1),n.forEach((function(e){t.items.add(e)})),this.thumb_detail=t.files},onChange:function(e){var t=e.name,n=e.value;this.$set(this.starContent,t,n),console.log(this.starContent)},onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.starContent.genre){t.next=3;break}return window.alert("장르를 선택해주세요"),t.abrupt("return");case 3:if(""!=e.starContent.name){t.next=6;break}return window.alert("이름을 입력해주세요."),t.abrupt("return");case 6:if(""!=e.starContent.major){t.next=9;break}return window.alert("전공을 입력해주세요."),t.abrupt("return");case 9:if(""!=e.starContent.description){t.next=12;break}return window.alert("선수 소개를 입력해주세요."),t.abrupt("return");case 12:if(null!=e.thumb){t.next=15;break}return window.alert("대표사진을 입력해주세요."),t.abrupt("return");case 15:if(null!=e.thumb_detail){t.next=18;break}return window.alert("추가사진들을 입력해주세요."),t.abrupt("return");case 18:n=new FormData,n.append("genre",e.starContent.genre),n.append("name",e.starContent.name),n.append("major",e.starContent.major),n.append("description",e.starContent.description),n.append("thumb",e.thumb),a=0;case 25:if(!(a<e.thumb_detail.length)){t.next=32;break}if(null!=e.thumb_detail[a]){t.next=28;break}return t.abrupt("continue",29);case 28:n.append("thumb_detail",e.thumb_detail[a]);case 29:a++,t.next=25;break;case 32:return t.next=34,oe.postSportStar(n);case 34:l=t.sent,l.success&&(window.alert("성공적으로 업로드되었습니다."),window.location.reload()),console.log(l),console.log("gogo");case 38:case"end":return t.stop()}}),t)})))()}}},ye=ve,xe=Object(g["a"])(ye,ge,fe,!1,null,null,null),we=xe.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Select",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"클럽명",name:"clubId",items:e.items},on:{onChange:e.changeClub}}),n("div",{staticStyle:{display:"flex","align-items":"flex-end","margin-bottom":"75px"}},[n("div",{staticStyle:{width:"100%","max-width":"882px",position:"relative"}},[n("Input",{attrs:{label:!0,labelHolder:"기부자 이름",name:"name",placeholder:"텍스트입력"},on:{onKeyUp:e.onSearchKeyWord}}),e.searchResult?n("p",{staticStyle:{position:"absolute",top:"100%"}},[e._v(" "+e._s(e.searchResult)+" ")]):e._e()],1),n("button",{staticClass:"input-button",staticStyle:{"margin-left":"20px"},on:{click:e.onSearch}},[e._v(" search ")])]),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"작성일시",type:"date",name:"regdate",placeholder:"텍스트입력",max:"9999-12-31"},on:{onKeyUp:e.onChange}}),n("Input",{staticStyle:{"margin-bottom":"75px"},attrs:{label:!0,labelHolder:"기사제목",name:"title",placeholder:"텍스트입력"},on:{onKeyUp:e.onChange}}),n("TextArea",{staticStyle:{"margin-bottom":"140px"},attrs:{name:"contents",minHeight:"300px",label:!0,labelHolder:"기사 내용"},on:{onKeyUp:e.onChange}}),n("MultyImageInput",{staticStyle:{"margin-bottom":"75px"},attrs:{name:"thumb_detail",label:!0,labelHolder:"기사 사진(첫번째 사진은 등급 현판 이미지로 넣어주세요.)"},on:{onChange:e.onMultyImageChange,remove:e.onDeleteMultyImageFile}}),n("ButtonGroup",{on:{ok:e.onSubmit}})],1)},_e=[],Se=(n("841c"),{components:{Input:S,TextArea:j,Select:v,MultyImageInput:N,ButtonGroup:J},data:function(){return{items:[{value:1,name:"Predident’s Honor Club ( 50억+ )"},{name:"Platinum Honor Club ( 30억+ )",value:2},{value:3,name:"Gold Honor Club ( 10억+ )"},{value:4,name:"Rosegold Honor Club ( 5억+ )"},{value:5,name:"Whitegold Honor Club ( 3억+ )"},{value:6,name:"Silver Honor Club ( 1억+ )"},{value:7,name:"Partner Club ( 1천만원+ )"},{value:8,name:"일반 기부자"}],clubId:null,search:"",searchResult:"",thumb_detail:null,articleContent:{title:"",regdate:"",contents:""},donor:null}},methods:{onChange:function(e){var t=e.name,n=e.value;this.$set(this.articleContent,t,n),console.log(this.articleContent)},changeClub:function(e){var t=e.value;this.clubId=t},onSearchKeyWord:function(e){var t=e.value;console.log(e),this.search=t},onMultyImageChange:function(e){console.log(e.target.files),this.thumb_detail=e.target.files,console.log(this.thumb_detail)},onDeleteMultyImageFile:function(e){var t=new DataTransfer,n=Array.from(this.thumb_detail);n.splice(e,1),n.forEach((function(e){t.items.add(e)})),this.thumb_detail=t.files},onSearch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==e.clubId){t.next=3;break}return window.alert("클럽을 선택해주세요"),t.abrupt("return");case 3:if(""!==e.search){t.next=6;break}return window.alert("이름을 입력해주세요."),t.abrupt("return");case 6:return t.next=8,oe.searchDonor({clubId:e.clubId,search:e.search});case 8:n=t.sent,console.log(n),n.success?(e.searchResult="검색 완료",e.donor=n.data):e.searchResult="일치하는 기부자가 없습니다. 등록한 기부자명을 정확히 입력해주세요.";case 11:case"end":return t.stop()}}),t)})))()},onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.thumb_detail.length),null!==e.donor){t.next=4;break}return window.alert("기부자를 검색해주세요."),t.abrupt("return");case 4:if(""!=e.articleContent.title){t.next=7;break}return window.alert("제목을 입력해주세요."),t.abrupt("return");case 7:if(""!=e.articleContent.regdate){t.next=10;break}return window.alert("기사 등록일을 입력해주세요."),t.abrupt("return");case 10:if(""!=e.articleContent.contents){t.next=13;break}return window.alert("기사 내용을 입력해주세요."),t.abrupt("return");case 13:if(null!=e.thumb_detail){t.next=16;break}return window.alert("기사 사진들을 입력해주세요."),t.abrupt("return");case 16:n=new FormData,n.append("clubId",e.clubId),n.append("name",e.donor.name),n.append("donorId",e.donor.id),n.append("title",e.articleContent.title),n.append("regdate",e.articleContent.regdate),n.append("contents",e.articleContent.contents),a=0;case 24:if(!(a<e.thumb_detail.length)){t.next=36;break}if(0!=a){t.next=29;break}return console.log("init appended"),n.append("init",e.thumb_detail[a]),t.abrupt("continue",33);case 29:if(null!=e.thumb_detail[a]){t.next=31;break}return t.abrupt("continue",33);case 31:console.log("article appended"),n.append("article",e.thumb_detail[a]);case 33:a++,t.next=24;break;case 36:return console.log(n),t.next=39,oe.postArticle(n);case 39:l=t.sent,l.success&&(window.alert("성공적으로 업로드되었습니다."),window.location.reload()),console.log(l),console.log("gogo");case 43:case"end":return t.stop()}}),t)})))()}}}),Ie=Se,ke=(n("490e"),Object(g["a"])(Ie,Ce,_e,!1,null,null,null)),Ae=ke.exports,He={props:["page"],mounted:function(){console.log(this.page)},components:{Crimson:he,SportStar:we,Article:Ae,Club:se}},De=He,je=Object(g["a"])(De,r,i,!1,null,null,null),Be=je.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",[a("v-list",{attrs:{color:"transparent",height:"170px"}},[a("v-list-group",{attrs:{value:!0},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-icon",[a("img",{attrs:{src:n("c828"),alt:"article"}})]),a("v-list-item-title",[e._v("Donuts Wall")])]},proxy:!0}])},[a("v-list-item",{on:{click:function(t){return e.changePage("club")}}},[a("v-list-item-icon",[a("img",{attrs:{src:n("b94f"),alt:"arrow"}})]),a("v-list-item-title",[e._v("프레지던트 ·플래티넘·골드 로즈골드·화이트골드·실버 파트너·일반기부자")])],1),a("v-list-item",{on:{click:function(t){return e.changePage("crimson")}}},[a("v-list-item-icon",[a("img",{attrs:{src:n("b94f"),alt:"arrow"}})]),a("v-list-item-title",[e._v("KU 크림슨 클럽")])],1)],1),a("v-list-item",{on:{click:function(t){return e.changePage("article")}}},[a("v-list-item-icon",[a("img",{attrs:{src:n("e66c"),alt:"article"}})]),a("v-list-item-title",[e._v("기부자 기사 추가")])],1),a("v-list-item",{on:{click:function(t){return e.changePage("sports")}}},[a("v-list-item-icon",[a("img",{attrs:{src:n("b497"),alt:"sport"}})]),a("v-list-item-title",[e._v("스포츠 스타")])],1)],1)],1)])},Oe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sidebar--title"},[a("img",{staticClass:"logo",attrs:{src:n("6a0c"),alt:"korea university"}}),a("div",[e._v(" 고려대학교 "),a("br"),e._v(" 히스토리룸 "),a("br"),e._v(" Admin ")])])}],Ve={name:"sidebar",data:function(){return{admins:[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]]}},methods:{changePage:function(e){this.$emit("show",e)}}},Ke=Ve,Me=(n("2dae"),n("6544")),$e=n.n(Me),Ue=n("8860"),Pe=n("56b0"),Re=n("da13"),Ee=n("34c3"),Ne=n("5d23"),Fe=Object(g["a"])(Ke,Te,Oe,!1,null,null,null),Le=Fe.exports;$e()(Fe,{VList:Ue["a"],VListGroup:Pe["a"],VListItem:Re["a"],VListItemIcon:Ee["a"],VListItemTitle:Ne["a"]});var Ge={name:"App",components:{Contents:Be,Sidebar:Le},data:function(){return{page:"club"}},methods:{changePage:function(e){this.page=e}}},Ye=Ge,qe=(n("d26a"),n("7496")),Je=Object(g["a"])(Ye,l,o,!1,null,"69322e30",null),Qe=Je.exports;$e()(Je,{VApp:qe["a"]});n("a766");var ze=n("f309");a["a"].use(ze["a"]);var We=new ze["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:We,render:function(e){return e(Qe)}}).$mount("#app")},6609:function(e,t,n){"use strict";n("2ef6")},"6a0c":function(e,t,n){e.exports=n.p+"img/korea.9f34f481.svg"},"7e18":function(e,t,n){e.exports=n.p+"img/remove.089ab4a9.svg"},"7e7b":function(e,t,n){},"8cc0":function(e,t,n){e.exports=n.p+"img/dropdown.987b5829.svg"},9592:function(e,t,n){},a766:function(e,t,n){},ae34:function(e,t,n){"use strict";n("f4b8")},b497:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGWSURBVHgBzZeLbcMgEIb/RB0g3YARskHZoBmBDdoNwgjZIM4EbSdwN0g2IBu4G6Sg2hKiPA64Pj7ppITjzj+cD+EV8mytbSLj19laYi/WPlCBSzJau2Vsn4gV1kwh9hkVqEKyxWIrHwhxU+yhd4izAQ23Qh3EPc6/r9ZOwfw9GnBJKTsTrlB5vmPgkxlfkZEoSHoxZ29cBPmGRAyJHVHMOM/fRsYWhOczaMCVaiIKcnMH778KcqmMj8yBKObgCY+t3CBdPjKSKMY3HeTwy/eKTs6VYkQQP3i+HTrRFUJiK8+VrxrqmVN6cY9gYqwQ5Mr6hK9y+XECTFDPHN8M0udOFzWlopQvyho09ujjAUwo9O3KYlV3mBgC5YsS1VyLZ68mpTJJ8HWBE9K1OyN4doXUVSvkuYGfeyQu5LkyCfwMyfdm3RLUSZOYqm+bCpJ5S+9MsR0bSD6z1NoX8PKec5bEvIGXEzpwJeI6gQ0YkExiFJjQnUI0mNH/RciCu/EZogg3T+IXUNZe8P2Lc5rHJf4I13ECDIfjJ3lheYX5z1lZAAAAAElFTkSuQmCC"},b94f:function(e,t,n){e.exports=n.p+"img/arrow.ff99ce96.svg"},bb7f:function(e,t,n){},c828:function(e,t,n){e.exports=n.p+"img/Users.e7f01846.svg"},d26a:function(e,t,n){"use strict";n("23d1")},d71a:function(e,t,n){"use strict";n("024e")},dfeb:function(e,t,n){},e66c:function(e,t,n){e.exports=n.p+"img/Book_open.18f26f87.svg"},f3a6:function(e,t,n){"use strict";n("7e7b")},f4b8:function(e,t,n){},fc86:function(e,t,n){"use strict";n("9592")},ffd1:function(e,t,n){"use strict";n("bb7f")}});
//# sourceMappingURL=app.a3d21347.js.map