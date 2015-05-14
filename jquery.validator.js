/*! nice Validator 0.8.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
!function(e){"function"==typeof define&&(define.amd||define.cmd)?define([],function(){return e}):e(jQuery)}(function(e,t){"use strict";function i(t,n){function s(){a._init(a.$el[0],n)}var a=this;return a instanceof i?(a.$el=e(t),void(a.$el.length?i.loading?e(window).on("validatorready",s):s():Z(t)&&(K[t]=n))):new i(t,n)}function n(e,t){if(J(e)){var i,s=t?t===!0?this:t:n.prototype;for(i in e)g(i)&&(s[i]=a(e[i]))}}function s(e,t){if(J(e)){var i,n=t?t===!0?this:t:s.prototype;for(i in e)n[i]=e[i]}}function a(t){switch(e.type(t)){case"function":return t;case"array":var i=function(e){return t.msg=t[1],t[0].test(z(e))||t[1]||!1};return i.msg=t[1],i;case"regexp":return function(e){return t.test(z(e))}}}function r(t){var i,n,s;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+b);break;case"FORM":i=t;break;default:i=e(t).closest("."+b)}for(n in K)if(e(i).is(n)){s=K[n];break}return e(i).data(v)||e(i)[v](s).data(v)}}function l(e,t){var i,n=t||e.currentTarget;n.form&&null===X(n.form,j)&&(i=r(n),i?(i._parse(n),i._focusin(e),t&&i._focusout(e,t)):X(n,x,null))}function o(e,t){var i=P(X(e,x+"-"+t));if(i)return i=new Function("return "+i)(),i?a(i):void 0}function u(e,t,i){var n=t.msg,s=t._r;return J(n)&&(n=n[s]),Z(n)||(n=X(e,V+"-"+s)||X(e,V)||(i?Z(i)?i:i[s]:"")),n}function d(e){var t;return e&&(t=I.exec(e)),t&&t[1]}function c(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function f(e){return Date.parse(e.replace(/\.|\-/g,"/"))}function g(e){return/^[\w\d]+$/.test(e)}function m(e){return"#"===e.charAt(0)?e.replace(/(:|\.|\[|\])/g,"\\$1"):'[name="'+e+'"]:input'}var p,h,v="validator",_="."+v,y=".rule",k=".field",w=".form",b="nice-"+v,M="msg-box",$="aria-required",O="aria-invalid",x="data-rule",V="data-msg",C="data-tip",F="data-ok",T="data-timely",A="data-target",R="data-must",j="novalidate",E=":verifiable",S=/(&)?(!)?\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,N=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,D=/(?:([^:;\(\[]*):)?(.*)/,q=/[^\x00-\xff]/g,I=/^.*(top|right|bottom|left).*$/,B=/(?:(post|get):)?(.+)/i,L=/[<>'"]|(?:&#)(?:0*\d{2,3}|x[A-Z0-9]{2};)|%[A-Z0-9]{2}/gim,U=e.noop,H=e.proxy,P=e.trim,W=e.isFunction,Z=function(e){return"string"==typeof e},J=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},Q=document.documentMode||+(navigator.userAgent.match(/MSIE (\d+)/)&&RegExp.$1),X=function(e,i,n){return n===t?e.getAttribute(i):void(null===n?e.removeAttribute(i):e.setAttribute(i,""+n))},z=function(t){return e(t).val()},G=window.console||{log:U,info:U},K={},Y={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:U,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(t){var i;return i='<span role="alert" class="msg-wrap n-'+t.type+'">'+t.arrow,t.result?e.each(t.result,function(e,n){i+='<span class="n-'+n.type+'">'+t.icon+'<span class="n-msg">'+n.msg+"</span></span>"}):i+=t.icon+'<span class="n-msg">'+t.msg+"</span>",i+="</span>"},msgArrow:"",msgIcon:'<span class="n-icon"></span>',msgClass:"",defaultMsg:"This field is not valid.",loadingMsg:"Validating..."},et={"default":{formClass:"n-default",msgClass:"n-right"}};e.fn[v]=function(t){var n=this,s=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(v);if(n)if(Z(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(s,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,t){var i,n,s=r(this[0]),a=W(e);return s?(s.checkOnly=!!t,n=s.options,i=s._multiValidate(this.is(":input")?this:this.find(E),function(t){t||!n.focusInvalid||s.checkOnly||s.$el.find("["+O+"]:input:first").focus(),a&&e.call(null,t),s.checkOnly=!1}),a?this:i):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1},e.expr[":"].filled=function(e){return!!P(z(e))},i.prototype={_init:function(t,i){var a,r,l,o=this;if(W(i)&&(i={valid:i}),i=i||{},l=X(t,"data-"+v+"-option"),l=l&&"{"===l.charAt(0)?new Function("return "+l)():{},r=et[i.theme||l.theme||Y.theme],a=o.options=e.extend({},Y,r,o.options,i,l),o.rules=new n(a.rules,!0),o.messages=new s(a.messages,!0),o.elements=o.elements||{},o.deferred={},o.errors={},o.fields={},o._initFields(a.fields),o.msgOpt={type:"error",pos:d(a.msgClass),wrapper:a.msgWrapper,cls:a.msgClass,style:a.msgStyle,arrow:a.msgArrow,icon:a.msgIcon,show:a.msgShow,hide:a.msgHide},Z(a.target)&&o.$el.find(a.target).addClass("msg-container"),o.isAjaxSubmit=!1,a.valid)o.isAjaxSubmit=!0;else{var u=(e._data||e.data)(t,"events");u&&u.valid&&e.map(u.valid,function(e){return~e.namespace.indexOf("form")?1:null}).length&&(o.isAjaxSubmit=!0)}o.$el.data(v)||(o.$el.data(v,o).addClass(b+" "+a.formClass).on("submit"+_+" validate"+_,H(o,"_submit")).on("reset"+_,H(o,"_reset")).on("showmsg"+_,H(o,"_showmsg")).on("hidemsg"+_,H(o,"_hidemsg")).on("focusin"+_+" click"+_,E,H(o,"_focusin")).on("focusout"+_+" validate"+_,E,H(o,"_focusout")),0!==a.timely&&o.$el.on("keyup"+_+" input"+_,E,H(o,"_focusout")).on("click"+_,":radio,:checkbox","click",H(o,"_focusout")).on("change"+_,'select,input[type="file"]',"change",H(o,"_focusout")),o._novalidate=X(t,j),X(t,j,j))},_initFields:function(t){var i=this,n=null===t;n&&(t=i.fields),J(t)&&e.each(t,function(e,t){if(null===t||n){var s=i.elements[e];s&&i._resetElement(s,!0),delete i.fields[e]}else i.fields[e]=Z(t)?{rule:t}:t}),i.$el.find(E).each(function(){i._parse(this)})},_parse:function(e){var t,i,n=this,s=e.name,a=X(e,x);a&&X(e,x,null),(e.id&&"#"+e.id in n.fields||!e.name)&&(s="#"+e.id),s&&(t=n.fields[s]||{},t.key=s,t.old={},t.rule=t.rule||a||"",t.rule&&((null!==X(e,R)||/match\(|checked/.test(t.rule))&&(t.must=!0),~t.rule.indexOf("required")&&(t.required=!0,X(e,$,!0)),"showOk"in t||(t.showOk=n.options.showOk),i=X(e,T),i?t.timely=+i:"timely"in t&&X(e,T,+t.timely),Z(t.target)&&X(e,A,t.target),Z(t.tip)&&X(e,C,t.tip),n.fields[s]=n._parseRule(t)))},_parseRule:function(i){var n=D.exec(i.rule),s=this.options;if(n)return i._i=0,n[1]&&(i.display=n[1]),!i.display&&s.display&&(i.display=s.display),n[2]&&(i.rules=[],n[2].replace(S,function(){var n=arguments;n[4]=n[4]||n[5],i.rules.push({and:"&"===n[1],not:"!"===n[2],or:"|"===n[6],method:n[3],params:n[4]?e.map(n[4].split(", "),function(e){return P(e)}):t})})),i},_multiValidate:function(i,n){var s=this,a=s.options;return s.isValid=!0,a.ignore&&(i=i.not(a.ignore)),i.each(function(e,t){var i=s.getField(t);return i&&(s._validate(t,i),!s.isValid&&a.stopOnError)?!1:void 0}),n&&(s.verifying=!0,e.when.apply(null,e.map(s.deferred,function(e){return e})).done(function(){n.call(s,s.isValid),s.verifying=!1})),e.isEmptyObject(s.deferred)?s.isValid:t},_submit:function(t){var i=this,n=i.options,s=t.target,a="submit"===t.type&&!t.isDefaultPrevented();t.preventDefault(),h&&~(h=!1)||i.submiting||"validate"===t.type&&i.$el[0]!==s||n.beforeSubmit.call(i,s)===!1||(n.debug&&G.log("\n"+t.type),i._reset(),i.submiting=!0,i._multiValidate(i.$el.find(E),function(t){var r,l=t||2===n.debug?"valid":"invalid";t||(n.focusInvalid&&i.$el.find("["+O+'="true"]:input:first').focus(),r=e.map(i.errors,function(e){return e})),i.submiting=!1,W(n[l])&&n[l].call(i,s,r),i.$el.trigger(l+w,[s,r]),t&&!i.isAjaxSubmit&&a&&(h=!0,p&&p.name&&i.$el.append('<input type="hidden" name="'+p.name+'" value="'+e(p).val()+'">'),s.submit())}))},_reset:function(e){var t=this;t.errors={},e&&(t.reseting=!0,t.$el.find(E).each(function(e,i){t._resetElement(i)}),delete t.reseting)},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&X(t,$,null)},_getTimely:function(e,t){var i=X(e,T);return null!==i?+i:+t.timely},_focusin:function(t){var i,n,s=this,a=s.options,r=t.target;s.verifying||"click"===t.type&&document.activeElement===r||(a.focusCleanup&&"true"===X(r,O)&&(e(r).removeClass(a.invalidClass),s.hideMsg(r)),n=X(r,C),n?s.showMsg(r,{type:"tip",msg:n}):(i=s._getTimely(r,a),(8===i||9===i)&&s._focusout(t)))},_focusout:function(i,n){var s,a,r,l,o,u=this,d=u.options,f=i.target,g=i.type,m=z(f),p="focusin"===g,h="validate"===g,v=0;if(!h)if(!n&&c(f)&&(n=u.$el.find('input[name="'+f.name+'"]').get(0)),o=u._getTimely(n||f,d),"focusout"===g){if(2===o||8===o)return s=u.getField(f),void(s.isValid&&!s.showOk?u.hideMsg(f):(!d.focusCleanup&&!d.ignoreBlank||m)&&s&&s.old.ret&&u._makeMsg(f,s,s.old.ret))}else{if(!o||2>o&&!i.data)return;if(a=+new Date,a-(f._ts||0)<100||"keyup"===g&&"input"===f._et)return;if(f._ts=a,f._et=g,"keyup"===g){if(r=i.keyCode,l={8:1,9:1,16:1,32:1,46:1},9===r&&!m)return;if(48>r&&!l[r])return}p||(v=o>=100?o:400)}d.ignore&&e(f).is(d.ignore)||(s=u.getField(f),s&&(clearTimeout(s._t),o&&(!d.ignoreBlank||m||h||p)?(s._e=g,s.value=m,o!==t&&(s.timely=o),v?s._t=setTimeout(function(){u._validate(f,s)},v):(h&&(s.old={}),u._validate(f,s))):u.hideMsg(f)))},_showmsg:function(t,i,n){var s=this,a=t.target;e(a).is(":input")?s.showMsg(a,{type:i,msg:n}):"tip"===i&&s.$el.find(E+"["+C+"]",a).each(function(){s.showMsg(this,{type:i,msg:n})})},_hidemsg:function(t){var i=e(t.target);i.is(":input")&&this.hideMsg(i)},_validatedField:function(t,i,n){var s=this,a=s.options,r=n.isValid=i.isValid=!!n.isValid,l=r?"valid":"invalid";n.key=i.key,n.rule=i._r,r?n.type="ok":(s.submiting&&(s.errors[i.key]=n.msg),s.isValid=!1),s.elements[i.key]=n.element=t,s.$el[0].isValid=r?s.isFormValid():r,i.old.value=z(t),i.old.id=t.id,i.old.ret=n,W(i[l])&&i[l].call(s,t,n),W(a.validation)&&a.validation.call(s,t,n),e(t).attr(O,r?null:!0).removeClass(r?a.invalidClass:a.validClass).addClass(n.skip?"":r?a.validClass:a.invalidClass).trigger(l+k,[n,s]),s.$el.triggerHandler("validation",[n,s]),s.checkOnly||(s._makeMsg.apply(s,arguments),delete i._e)},_makeMsg:function(e,t,i){if(t.msgMaker||this.options.msgMaker){var n="focusin"===t._e||!i.isValid||8===t.timely&&"focusout"!==t._e;this[i.showOk||i.msg||n?"showMsg":"hideMsg"](e,i,t)}},_validatedRule:function(i,n,s,a){n=n||c.getField(i),a=a||{};var r,l,o,d,c=this,f=c.options,g=n._r,m=n.timely||f.timely,p=9===m||8===m,h=!1;if(null===s)return void c._validatedField(i,n,{isValid:!0,skip:!0});if(s===t?o=!0:s===!0||""===s?h=!0:Z(s)?r=s:J(s)&&(s.error?r=s.error:(r=s.ok,h=!0)),l=n.rules[n._i],l.not&&(r=t,h="required"===g||!h),l.or)if(h)for(;n._i<n.rules.length&&n.rules[n._i].or;)n._i++;else o=!0;else l.and&&(n.isValid||(o=!0));o?h=!0:(!h||p?r=(u(i,n,r||l.msg||c.messages[g])||Y.defaultMsg).replace(/\{0\|?([^\}]*)\}/,function(){return c._getDisplay(i,n.display)||arguments[1]}):h&&n.showOk!==!1&&(d=X(i,F),r=null===d?Z(n.ok)?n.ok:r:d,!Z(r)&&Z(n.showOk)&&(r=n.showOk),Z(r)&&(a.showOk=h)),h||(n.isValid=!1),a.msg=r,e(i).trigger((h?"valid":"invalid")+y,[g,r])),!p||o&&!l.and||(h||n._m||(n._m=r),n._v=n._v||[],n._v.push({type:h?o?"tip":"ok":"error",msg:r||l.msg})),f.debug&&G.log("   "+n._i+": "+g+" => "+(h||r)),(h||p)&&n._i<n.rules.length-1?(n._i++,c._checkRule(i,n)):(n._i=0,a.isValid=n.isValid,p&&(a.result=n._v,a.msg=n._m||"",(!n.value&&("focusin"===n._e||n._e&&8===m)||f.focusCleanup&&"focusin"===n._e)&&(a.type="tip")),c._validatedField(i,n,a),delete n._m,delete n._v)},_checkRule:function(i,n){var s,a,r,l=this,u=n.key,d=n.rules[n._i],c=d.method,f=z(i),g=d.params;l.submiting&&l.deferred[u]||(r=n.old,n._r=c,!n.must&&d.ret!==t&&r.rule===d&&r.id===i.id&&f&&r.value===f?s=d.ret:(a=o(i,c)||l.rules[c]||U,s=a.call(l,i,g,n),a.msg&&(d.msg=a.msg)),J(s)&&W(s.then)?(l.deferred[u]=s,!l.checkOnly&&l.showMsg(i,{type:"loading",msg:l.options.loadingMsg},n),s.then(function(s,a,o){var u,c=o.responseText,f=n.dataFilter||l.options.dataFilter;W(f)||(f=function(e){return Z(e)||J(e)&&("error"in e||"ok"in e)?e:void 0}),/jsonp?/.test(this.dataType)?c=s:"{"===P(c).charAt(0)&&(c=e.parseJSON(c)||{}),u=f.call(l,c,i),u===t&&(u=f.call(l,c.data,i)),r.rule=d,d.ret=u,l._validatedRule(i,n,u)},function(e,t){l._validatedRule(i,n,l.messages[t]||t)}).always(function(){delete l.deferred[u]}),n.isValid=t):l._validatedRule(i,n,s))},_validate:function(e,t){if(!e.disabled&&null===X(e,j)){var i=this;if(t=t||i.getField(e),t.isValid=!0,t.rules||i._parse(e),t.rules)return i.options.debug&&G.info(t.key),t.required||t.must||z(e)||c(e)?(i._checkRule(e,t),t.isValid):(i._validatedField(e,t,{isValid:!0}),!0)}},test:function(e,i){var n,s,a,r=this,l=N.exec(i);return l&&(s=l[1],s in r.rules&&(a=l[2]||l[3],a=a?a.split(", "):t,n=r.rules[s].call(r,e,a))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var s=this,a=s.messages[i]||"",r=t[0].split("~"),l=r[0],o=r[1],u="rg",d=[""],c=+e===+e;if(2===r.length){if(l&&o){if(c&&e>=+l&&+o>=e)return!0;d=d.concat(r)}else if(l&&!o){if(c&&e>=+l)return!0;d.push(l),u="gte"}else if(!l&&o){if(c&&+o>=e)return!0;d.push(o),u="lte"}}else{if(e===+l)return!0;d.push(l),u="eq"}return a&&(n&&a[u+n]&&(u+=n),d[0]=a[u]),s.renderMsg.apply(null,d)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getDisplay:function(e,t){return Z(t)?t:W(t)?t.call(this,e):""},_getMsgOpt:function(t){return e.extend({},this.msgOpt,Z(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,s,a,r,l=e(t);if(l.is(":input")?(a=i.target||X(t,A),a&&(a=W(a)?a.call(this,t):this.$el.find(a),a.length&&(a.is(":input")?t=a.get(0):a.hasClass(M)?n=a:r=a)),n||(s=c(t)&&t.name||!t.id?t.name:t.id,n=this.$el.find(i.wrapper+"."+M+'[for="'+s+'"]'))):n=l,!n.length)if(l=this.$el.find(a||t),n=e("<"+i.wrapper+">").attr({"class":M+(i.cls?" "+i.cls:""),style:i.style||"","for":s}),c(t)){var o=l.parent();n.appendTo(o.is("label")?o.parent():o)}else r?n.appendTo(r):n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](l);return n},showMsg:function(t,i,n){if(t){var s,a,r,l=this,o=l.options;if(J(t)&&!t.jquery&&!i)return void e.each(t,function(e,t){var i=l.elements[e]||l.$el.find(m(e))[0];l.showMsg(i,t)});i=l._getMsgOpt(i),t=e(t).get(0),i.msg||"error"===i.type||(a=X(t,"data-"+i.type),null!==a&&(i.msg=a)),Z(i.msg)&&(e(t).is(E)&&(n=n||l.getField(t),n&&(i.style=n.msgStyle||i.style,i.cls=n.msgClass||i.cls,i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||o.target)),(s=(n||{}).msgMaker||o.msgMaker)&&(r=l._getMsgDOM(t,i),!I.test(r[0].className)&&r.addClass(i.cls),6===Q&&"bottom"===i.pos&&(r[0].style.marginTop=e(t).outerHeight()+"px"),r.html(s.call(l,i))[0].style.display="",W(i.show)&&i.show.call(l,r,i.type)))}},hideMsg:function(t,i,n){var s,a=this,r=a.options;t=e(t).get(0),i=a._getMsgOpt(i),e(t).is(E)&&(n=n||a.getField(t),n&&((n.isValid||a.reseting)&&X(t,O,null),i.wrapper=n.msgWrapper||i.wrapper,i.target=n.target||r.target)),s=a._getMsgDOM(t,i),s.length&&(W(i.hide)?i.hide.call(a,s,i.type):(s[0].style.display="none",s[0].innerHTML=null))},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,X(e,x)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};Z(e)?i[e]=t:i=e,this._initFields(i)},isFormValid:function(){var e,t=this.fields;for(e in t)if(!t[e].isValid)return t[e].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(_).removeData(v),X(this.$el[0],j,this._novalidate)}},e(window).on("beforeunload",function(){this.focus()}),e(document).on("focusin","["+x+"]:input",function(e){l(e)}).on("click","input,button",function(e){var t,i,n=this,s=n.name;n.form&&("submit"===n.type?(p=n,t=n.getAttributeNode("formnovalidate"),(t&&null!==t.nodeValue||null!==X(n,j))&&(h=!0)):null===X(n.form,j)&&(s&&c(n)?(i=n.form.elements[s],i.length&&(i=i[0]),X(i,x)&&l(e,i)):l(e)))}).on("submit validate","form",function(t){if(null===X(this,j)){var i,n=e(this);n.data(v)||(i=r(this),e.isEmptyObject(i.fields)?(X(this,j,j),n.off(_).removeData(v)):i._submit(t))}}),new n({required:function(t,i,n){var s=this,a=P(z(t)),r=!0;if(i)if(1===i.length){if(g(i[0])){if(s.rules[i[0]]){if(!a&&!s.test(t,i[0]))return X(t,$,null),null;X(t,$,!0)}}else if(!a&&!e(i[0],s.$el).length)return null}else if("not"===i[0])e.each(i.slice(1),function(){return r=a!==P(this)});else if("from"===i[0]){var l,o=s.$el.find(i[1]),d="_validated_";return r=o.filter(function(){return!!P(z(this))}).length>=(i[2]||1),r?a||(l=null):l=u(o[0],n)||!1,e(t).data(d)||o.data(d,1).each(function(){t!==this&&s._checkRule(this,s.getField(this))}).removeData(d),l}return r&&!!a},integer:function(e,t){var i,n="0|",s="[1-9]\\d*",a=t?t[0]:"*";switch(a){case"+":i=s;break;case"-":i="-"+s;break;case"+0":i=n+s;break;case"-0":i=n+"-"+s;break;default:i=n+"-?"+s}return i="^(?:"+i+")$",new RegExp(i).test(z(e))||this.messages.integer[a]},match:function(t,i,n){if(i){var s,a,r,l,o,u,d,c,g=this,p="eq";if(1===i.length?r=i[0]:(p=i[0],r=i[1]),u=m(r),d=g.$el.find(u)[0]){if(c=g.getField(d),s=z(t),a=z(d),n._match||(g.$el.on("valid"+k+_,u,function(){e(t).trigger("validate")}),n._match=c._match=1),!n.required&&""===s&&""===a)return null;if(o=i[2],o&&(/^date(time)?$/i.test(o)?(s=f(s),a=f(a)):"time"===o&&(s=+s.replace(/:/g,""),a=+a.replace(/:/g,""))),"eq"!==p&&!isNaN(+s)&&isNaN(+a))return!0;switch(l=g.messages.match[p].replace("{1}",g._getDisplay(t,c.display||r)),p){case"lt":return+a>+s||l;case"lte":return+a>=+s||l;case"gte":return+s>=+a||l;case"gt":return+s>+a||l;case"neq":return s!==a||l;default:return s===a||l}}}},range:function(e,t){return this.getRangeMsg(+z(e),t,"range")},checked:function(e,t,i){if(c(e)){var n,s,a=this;return e.name?s=a.$el.find('input[name="'+e.name+'"]').filter(function(){var e=this;return!n&&c(e)&&(n=e),!e.disabled&&e.checked}).length:(n=e,s=n.checked),t?a.getRangeMsg(s,t,"checked"):!!s||u(n,i,"")||a.messages.required}},length:function(e,t){var i=z(e),n=(t[1]?i.replace(q,"xx"):i).length;return this.getRangeMsg(n,t,"length",t[1]?"_2":"")},remote:function(t,i){if(i){var n,s=this,a=B.exec(i[0]),r={},l="";return r[t.name]=z(t),i[1]&&e.map(i.slice(1),function(e){var t,i;~e.indexOf("=")?l+="&"+e:(t=e.split(":"),e=P(t[0]),i=P(t[1])||e,r[e]=s.$el.find(m(i)).val())}),/^https?:/.test(a[2])&&!~a[2].indexOf(location.host)&&(n="jsonp"),e.ajax({url:a[2],type:a[1]||"POST",data:e.param(r)+l,dataType:n,cache:!1})}},validate:function(t,i){var n="_validated_";i&&!e(t).data(n)&&this.$el.find(e.map(i,function(e){return m(e)}).join(",")).data(n,1).trigger("validate").removeData(n)},filter:function(e,t){var i,n=z(e);i=n.replace(t?new RegExp("["+t[0]+"]","gm"):L,""),i!==n&&(e.value=i)}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new s(t):Y[e]=t})},i.setTheme=function(t,i){J(t)?e.extend(!0,et,t):Z(t)&&J(i)&&(et[t]=e.extend(et[t],i))},e[v]=i,function(t){var n,s,a,r,l,o,u=document.getElementsByTagName("script");if(t)s=u[0],n=t.match(/(.*)\/local\/(\w{2,5})\.js/);else for(a=u.length,r=/(.*validator.js)\?.*local=(\w+)/;a--&&!n;)s=u[a],n=(s.hasAttribute?s.src:s.getAttribute("src",4)||"").match(r);n&&(l=n[0].split("/").slice(0,-1).join("/").replace(/\/(local|src)$/,"")+"/",o=document.createElement("link"),o.rel="stylesheet",o.href=l+"jquery.validator.css",s.parentNode.insertBefore(o,s),t||(i.loading=1,o=document.createElement("script"),o.src=l+"local/"+n[2].replace("-","_")+".js",a="onload"in o?"onload":"onreadystatechange",o[a]=function(){(!o.readyState||/loaded|complete/.test(o.readyState))&&(e(window).trigger("validatorready"),delete i.loading,o=o[a]=null)},s.parentNode.insertBefore(o,s)))}(e._VALIDATOR_URI)});