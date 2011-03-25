var embed,dojo;embed=dojo={};embed.config={};embed.global=this;embed.doc=this.document||null;embed.body=function(){var _1=embed;return _1.doc&&_1.doc.body;};embed.version="0.1";dojo.toJson=function(_2){return JSON.stringify(_2);};dojo.fromJson=function(_3){return JSON.parse(_3);};dojo.byId=function(id,_4){return (typeof id=="string")?(_4||document).getElementById(id):id;};dojo.query=function(_5,_6){if(typeof _6=="string"){_6=dojo.byId(_6);if(!_6){return [];}}_6=_6||dojo.doc;if(/[>+~]\s*$/.test(_5)){_5+="*";}var _7=_6;if(_6.nodeType==9){if(/^\s*>/.test(_5)){var _8=_5.replace(/^\s*>/,"").match(/([^\s>+~]+)(.*)/);if(!_8){return [];}var _9=_8[1];_5=_8[2];if(_6.querySelector(_9)!==_6.documentElement){return [];}if(!_5){return [_6.documentElement];}_6=_6.documentElement;}else{if(/^\s*[+~]/.test(_5)){return [];}}}if(_6.nodeType==1){var _a=_6.id;var _b=_a;if(!_a){_b=_6.id="d---dojo-query-synthetic-id-"+new Date().getTime();var _c=true;}_5="#"+_b+" "+_5;_7=_6.parentNode||_6;}var n=_7.querySelectorAll(_5);if(_c){_6.id="";}return n||[];};(function(d){var _d={},_e;for(var i in {toString:1}){_e=[];break;}dojo._extraNames=_e=_e||["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString"];d._mixin=function(_f,_10){var _11,s,i=0,l=_e.length;for(_11 in _10){s=_10[_11];if(s!==_d[_11]&&s!==_f[_11]){_f[_11]=s;}}if(l&&_10){for(;i<l;++i){_11=_e[i];s=_10[_11];if(s!==_d[_11]&&s!==_f[_11]){_f[_11]=s;}}}return _f;};dojo.mixin=function(obj,_12){if(!obj){obj={};}for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo.safeMixin=function(_13,_14){var _15,t,i=0,l=d._extraNames.length;var op=Object.prototype,_16=op.toString,_17="constructor";for(_15 in _14){t=_14[_15];if((t!==op[_15]||!(_15 in op))&&_15!=_17){if(_16.call(t)=="[object Function]"){t.nom=_15;}_13[_15]=t;}}for(;i<l;++i){_15=d._extraNames[i];t=_14[_15];if((t!==op[_15]||!(_15 in op))&&_15!=_17){if(_16.call(t)=="[object Function]"){t.nom=_15;}_13[_15]=t;}}return _13;};}(dojo));(function(d){d._getComputedStyle=function(_18){return _18.nodeType==1?_18.ownerDocument.defaultView.getComputedStyle(_18,null):{};};var _19="cssFloat",_1a={"cssFloat":_19,"styleFloat":_19,"float":_19};d._style=function(_1b,_1c,_1d){var n=dojo.byId(_1b),l=arguments.length;_1c=_1a[_1c]||_1c;if(l==3){return n.style[_1c]=_1d;}var s=d._getComputedStyle(n);if(l==2&&typeof _1c!="string"){for(var x in _1c){d._style(_1b,x,_1c[x]);}return s;}return (l==1)?s:parseFloat(s[_1c]||n.style[_1c])||s[_1c];};})(dojo);dojo.getComputedStyle=dojo._getComputedStyle;dojo.style=dojo._style;dojo.isString=function(it){return (typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=(function(){var _1e=function(it){var t=typeof it;return it&&(t=="function"||it instanceof Function)&&!it.nodeType;};return dojo.isSafari?function(it){if(typeof it=="function"&&it=="[object NodeList]"){return false;}return _1e(it);}:_1e;})();dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||dojo.isArray(it)||dojo.isFunction(it));};dojo.isArrayLike=function(it){var d=dojo;return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!dojo.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.isNumeric=function(n){return n==parseFloat(n);};dojo.isNumber=function(n){return typeof n=="number"||n instanceof Number;};dojo._hitchArgs=function(_1f,_20){var pre=dojo.toArray(arguments,2);var _21=dojo.isString(_20);return function(){var _22=dojo.toArray(arguments);var f=_21?(_1f||dojo.global)[_20]:_20;return f&&f.apply(_1f||this,pre.concat(_22));};};dojo.hitch=function(_23,_24){if(arguments.length>2){return dojo._hitchArgs.apply(dojo,arguments);}if(!_24){_24=_23;_23=null;}if(dojo.isString(_24)){_23=_23||dojo.global;if(!_23[_24]){throw (["dojo.hitch: scope[\"",_24,"\"] is null (scope=\"",_23,"\")"].join(""));}return function(){return _23[_24].apply(_23,arguments||[]);};}return !_23?_24:function(){return _24.apply(_23,arguments||[]);};};dojo._listener={getDispatcher:function(){return function(){var ap=Array.prototype,c=arguments.callee,ls=c._listeners,t=c.target;var r=t&&t.apply(this,arguments);var i,lls;lls=[].concat(ls);for(i in lls){if(!(i in ap)){lls[i].apply(this,arguments);}}return r;};},add:function(_25,_26,_27){_25=_25||dojo.global;var f=_25[_26];if(!f||!f._listeners){var d=dojo._listener.getDispatcher();d.target=f;d._listeners=[];f=_25[_26]=d;}return f._listeners.push(_27);},remove:function(_28,_29,_2a){var f=(_28||dojo.global)[_29];if(f&&f._listeners&&_2a--){delete f._listeners[_2a];}}};dojo.connect=dojo.on=function(obj,_2b,_2c,_2d,_2e){var a=arguments,_2f=[],i=0;_2f.push(dojo.isString(a[0])?null:a[i++],a[i++]);var a1=a[i+1];_2f.push(dojo.isString(a1)||dojo.isFunction(a1)?a[i++]:null,a[i++]);for(var l=a.length;i<l;i++){_2f.push(a[i]);}return dojo._connect.apply(this,_2f);};dojo._connect=function(obj,_30,_31,_32){var l=dojo._listener,h=l.add(obj,_30,dojo.hitch(_31,_32));return [obj,_30,h,l];};dojo.disconnect=function(_33){if(_33&&_33[0]!==undefined){dojo._disconnect.apply(this,_33);delete _33[0];}};dojo._disconnect=function(obj,_34,_35,_36){_36.remove(obj,_34,_35);};(function(){var del=(dojo._event_listener={add:function(_37,_38,fp){if(!_37){return;}_38=del._normalizeEventName(_38);_37.addEventListener(_38,fp,false);return fp;},remove:function(_39,_3a,_3b){if(_39){_3a=del._normalizeEventName(_3a);_39.removeEventListener(_3a,_3b,false);}},_normalizeEventName:function(_3c){return _3c.slice(0,2)=="on"?_3c.slice(2):_3c;}});dojo.fixEvent=function(evt,_3d){return del._fixEvent(evt,_3d);};dojo.stopEvent=function(evt){evt.preventDefault();evt.stopPropagation();};dojo._connect=function(obj,_3e,_3f,_40,_41){var _42=obj&&(obj.nodeType||obj.attachEvent||obj.addEventListener);var lid=_42?1:0,l=[dojo._listener,del][lid];var h=l.add(obj,_3e,dojo.hitch(_3f,_40));return [obj,_3e,h,lid];};dojo._disconnect=function(obj,_43,_44,_45){([dojo._listener,del][_45]).remove(obj,_43,_44);};})();dojo._topics={};dojo.subscribe=function(_46,_47,_48){return [_46,dojo._listener.add(dojo._topics,_46,dojo.hitch(_47,_48))];};dojo.unsubscribe=function(_49){if(_49){dojo._listener.remove(dojo._topics,_49[0],_49[1]);}};dojo.publish=function(_4a,_4b){var f=dojo._topics[_4a];if(f){f.apply(this,_4b||[]);}};dojo.connectPublisher=function(_4c,obj,_4d){var pf=function(){dojo.publish(_4c,arguments);};return _4d?dojo.connect(obj,_4d,pf):dojo.connect(obj,pf);};(function(d){var _4e={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"},_4f={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"},_50={innerHTML:1,className:1,htmlFor:0,value:1};var _51=function(_52){return _4f[_52.toLowerCase()]||_52;};var _53=function(_54,_55){var _56=_54.getAttributeNode&&_54.getAttributeNode(_55);return _56&&_56.specified;};d.hasAttr=function(_57,_58){var lc=_58.toLowerCase();return _50[_4e[lc]||_58]||_53(d.byId(_57),_4f[lc]||_58);};var _59={},_5a=0,_5b="_attrid",_5c={col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1};d.attr=function(_5d,_5e,_5f){_5d=d.byId(_5d);var _60=arguments.length,_61;if(_60==2&&typeof _5e!="string"){for(var x in _5e){d.attr(_5d,x,_5e[x]);}return _5d;}var lc=_5e.toLowerCase(),_62=_4e[lc]||_5e,_63=_50[_62],_64=_4f[lc]||_5e;if(_60==3){do{if(_62=="style"&&typeof _5f!="string"){d.style(_5d,_5f);break;}if(_62=="innerHTML"){_5d[_62]=_5f;break;}if(d.isFunction(_5f)){var _65=d.attr(_5d,_5b);if(!_65){_65=_5a++;d.attr(_5d,_5b,_65);}if(!_59[_65]){_59[_65]={};}var h=_59[_65][_62];if(h){d.disconnect(h);}else{try{delete _5d[_62];}catch(e){}}_59[_65][_62]=d.connect(_5d,_62,_5f);break;}if(_63||typeof _5f=="boolean"){_5d[_62]=_5f;break;}_5d.setAttribute(_64,_5f);}while(false);return _5d;}_5f=_5d[_62];if(_63&&typeof _5f!="undefined"){return _5f;}if(_62!="href"&&(typeof _5f=="boolean"||d.isFunction(_5f))){return _5f;}return _53(_5d,_64)?_5d.getAttribute(_64):null;};d.removeAttr=function(_66,_67){d.byId(_66).removeAttribute(_51(_67));};})(dojo);(function(d){var _68=d.byId;var _69={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_6a=/<\s*([\w\:]+)/,_6b={},_6c=0,_6d="__"+d._scopeName+"ToDomId";for(var _6e in _69){var tw=_69[_6e];tw.pre=_6e=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";tw.post="</"+tw.reverse().join("></")+">";}d._toDom=function(_6f,doc){doc=doc||d.doc;var _70=doc[_6d];if(!_70){doc[_6d]=_70=++_6c+"";_6b[_70]=doc.createElement("div");}_6f+="";var _71=_6f.match(_6a),tag=_71?_71[1].toLowerCase():"",_72=_6b[_70],_73,i,fc,df;if(_71&&_69[tag]){_73=_69[tag];_72.innerHTML=_73.pre+_6f+_73.post;for(i=_73.length;i;--i){_72=_72.firstChild;}}else{_72.innerHTML=_6f;}if(_72.childNodes.length==1){return _72.removeChild(_72.firstChild);}df=doc.createDocumentFragment();while(fc=_72.firstChild){df.appendChild(fc);}return df;};d._docScroll=function(){var n=d.global;return "pageXOffset" in n?{x:n.pageXOffset,y:n.pageYOffset}:(n=d.doc.documentElement,n.clientHeight?{x:n.scrollLeft,y:n.scrollTop}:(n=d.body(),{x:n.scrollLeft||0,y:n.scrollTop||0}));};var _74=function(_75,ref){var _76=ref.parentNode;if(_76){_76.insertBefore(_75,ref);}};var _77=function(_78,ref){var _79=ref.parentNode;if(_79){if(_79.lastChild==ref){_79.appendChild(_78);}else{_79.insertBefore(_78,ref.nextSibling);}}};d.place=function(_7a,_7b,_7c){_7b=_68(_7b);if(typeof _7a=="string"){_7a=_7a.charAt(0)=="<"?d._toDom(_7a,_7b.ownerDocument):_68(_7a);}if(typeof _7c=="number"){var cn=_7b.childNodes;if(!cn.length||cn.length<=_7c){_7b.appendChild(_7a);}else{_74(_7a,cn[_7c<0?0:_7c]);}}else{switch(_7c){case "before":_74(_7a,_7b);break;case "after":_77(_7a,_7b);break;case "replace":_7b.parentNode.replaceChild(_7a,_7b);break;case "only":d.empty(_7b);_7b.appendChild(_7a);break;case "first":if(_7b.firstChild){_74(_7a,_7b.firstChild);break;}default:_7b.appendChild(_7a);}}return _7a;};d.create=function(tag,_7d,_7e,pos){var doc=d.doc;if(_7e){_7e=_68(_7e);doc=_7e.ownerDocument;}if(typeof tag=="string"){tag=doc.createElement(tag);}if(_7d){for(var _7f in _7d){switch(_7f){case "class":tag.className=_7d[_7f];break;default:tag[_7f]=_7d[_7f];}}}if(_7e){d.place(tag,_7e,pos);}return tag;};d.empty=function(_80){_68(_80).innerHTML="";};})(dojo);dojo._getProp=function(_81,_82,_83){var obj=_83||dojo.global;for(var i=0,p;obj&&(p=_81[i]);i++){obj=(p in obj?obj[p]:(_82?obj[p]={}:undefined));}return obj;};dojo.setObject=function(_84,_85,_86){var _87=_84.split("."),p=_87.pop(),obj=dojo._getProp(_87,true,_86);return obj&&p?(obj[p]=_85):undefined;};dojo.getObject=function(_88,_89,_8a){return dojo._getProp(_88.split("."),_89,_8a);};dojo.trim=String.prototype.trim?function(str){return str.trim();}:function(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");};var _pattern=/\{([^\}]+)\}/g;dojo.replace=function(_8b,map,_8c){return _8b.replace(_8c||_pattern,dojo.isFunction(map)?map:function(_8d,k){return dojo.getObject(k,false,map);});};dojo.hasClass=function(_8e,_8f){return ((" "+dojo.byId(_8e).className+" ").indexOf(" "+_8f+" ")>=0);};dojo.toggleClass=function(_90,_91,_92){if(_92===undefined){_92=!dojo.hasClass(_90,_91);}dojo[_92?"addClass":"removeClass"](_90,_91);};(function(){var _93=/\s+/;var _94=function(s){if(typeof s=="string"||s instanceof String){if(s.indexOf(" ")<0){return [s];}else{return dojo.trim(s).split(_93);}}return s;};dojo.addClass=function(_95,_96){_95=dojo.byId(_95);_96=_94(_96);var cls=" "+_95.className+" ";for(var i=0,len=_96.length,c;i<len;++i){c=_96[i];if(c&&cls.indexOf(" "+c+" ")<0){cls+=c+" ";}}_95.className=dojo.trim(cls);};dojo.removeClass=function(_97,_98){_97=dojo.byId(_97);var cls;if(_98!==undefined){_98=_94(_98);cls=" "+_97.className+" ";for(var i=0,len=_98.length;i<len;++i){cls=cls.replace(" "+_98[i]+" "," ");}cls=dojo.trim(cls);}else{cls="";}if(_97.className!=cls){_97.className=cls;}};})();(function(d){d._loaders=[];d._loadNotifying=false;d._onto=function(arr,obj,fn){if(!fn){arr.push(obj);}else{if(fn){var _99=(typeof fn=="string")?obj[fn]:fn;arr.push(function(){_99.call(obj);});}}};dojo.ready=dojo.addOnLoad=function(obj,_9a){d._onto(d._loaders,obj,_9a);if(document.readyState==="complete"||(d._postLoad&&!d._loadNotifying)){d._callLoaded();}};dojo._callLoaded=function(){setTimeout("dojo.loaded();",0);};dojo.loaded=function(){d._loadNotifying=true;d._postLoad=true;var mll=d._loaders;d._loaders=[];for(var x=0;x<mll.length;x++){mll[x]();}d._loadNotifying=false;if(d._postLoad&&mll.length){d._callLoaded();}};dojo._initFired=false;dojo._loadInit=function(){if(!dojo._initFired){dojo._initFired=true;document.removeEventListener("DOMContentLoaded",dojo._loadInit,false);dojo._callLoaded();}};document.addEventListener("DOMContentLoaded",dojo._loadInit,false);window.addEventListener("load",dojo._loadInit,false);})(dojo);