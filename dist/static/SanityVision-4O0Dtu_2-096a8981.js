import{aB as Vl,aC as Nl,aD as Hl,aE as gr,r as s,aF as Gl,aG as bs,aH as K,u as _,j as c,aI as Ul,aJ as qo,aK as ms,c as nt,aL as ql,aM as Xl,aN as br,aO as vs,aP as Ds,aQ as ys,aR as Cs,aS as Kl,aT as Ss,aU as xs,aV as ws,aW as Yl,aX as Es,aY as Ql,aZ as Jl,a_ as _s,aA as Zl,a$ as ec,b0 as Ie,b1 as ne,b2 as tc,b3 as nc,b4 as oc,b5 as mr,b6 as vr,b7 as rc,b8 as ic,a4 as Nn,b9 as Hn,ba as ac,bb as uc,bc as sc,J as Dr,bd as yr}from"./sanity-eef9dcb5.js";import{n as lc,W as cc,X as dc,Y as fc,Z as pc,_ as hc,$ as gc,a0 as bc,a1 as mc,a2 as vc,j as ks,x as Dc,a3 as yc,a4 as Cc,a5 as Sc,R as xc,E as wc,H as Ec,t as Q}from"./index-783448c7.js";import{javascriptLanguage as _c}from"./index-2c973ba0.js";import"./index-8cb3085c.js";const no=1,kc=.5,De={_version:2,avatar:{sizes:[{distance:-4,size:19},{distance:-4,size:25},{distance:-8,size:33},{distance:-12,size:49}],focusRing:{offset:1,width:1}},button:{textWeight:"medium",border:{width:no},focusRing:{offset:-1,width:1}},card:{border:{width:no},focusRing:{offset:-1,width:1},shadow:{outline:kc}},container:[320,640,960,1280,1600,1920],media:[360,600,900,1200,1800,2400],layer:{dialog:{zOffset:600},popover:{zOffset:400},tooltip:{zOffset:200}},radius:[0,1,3,6,9,12,21],shadow:[null,{umbra:[0,0,0,0],penumbra:[0,0,0,0],ambient:[0,0,0,0]},{umbra:[0,3,5,-2],penumbra:[0,6,10,0],ambient:[0,1,18,1]},{umbra:[0,7,8,-4],penumbra:[0,12,17,2],ambient:[0,5,22,4]},{umbra:[0,9,11,-5],penumbra:[0,18,28,2],ambient:[0,7,34,6]},{umbra:[0,11,15,-7],penumbra:[0,24,38,3],ambient:[0,9,46,8]}],space:[0,4,8,12,20,32,52,84,136,220],input:{border:{width:no},checkbox:{size:17,focusRing:{offset:-1,width:1}},radio:{size:17,markSize:9,focusRing:{offset:-1,width:1}},switch:{width:25,height:17,padding:5,transitionDurationMs:150,transitionTimingFunction:"ease-out",focusRing:{offset:1,width:1}},select:{focusRing:{offset:-1,width:1}},text:{focusRing:{offset:-1,width:1}}},style:{button:{root:{transition:"background-color 100ms,border-color 100ms,color 100ms"}}}},Bc={code:{family:"ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",weights:{regular:400,medium:500,semibold:600,bold:700},sizes:[{ascenderHeight:4,descenderHeight:4,fontSize:10,iconSize:17,lineHeight:15,letterSpacing:0},{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:21,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:16,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:19,iconSize:29,lineHeight:27,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:22,iconSize:33,lineHeight:31,letterSpacing:0}]},heading:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',weights:{regular:700,medium:800,semibold:900,bold:900},sizes:[{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:17,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:16,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:21,iconSize:33,lineHeight:29,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:27,iconSize:41,lineHeight:35,letterSpacing:0},{ascenderHeight:9.5,descenderHeight:8.5,fontSize:33,iconSize:49,lineHeight:41,letterSpacing:0},{ascenderHeight:10.5,descenderHeight:9.5,fontSize:38,iconSize:53,lineHeight:47,letterSpacing:0}]},label:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", system-ui, sans-serif',weights:{regular:600,medium:700,semibold:800,bold:900},sizes:[{ascenderHeight:2,descenderHeight:2,fontSize:8.1,iconSize:13,lineHeight:10,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:9.5,iconSize:15,lineHeight:11,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:10.8,iconSize:17,lineHeight:12,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:12.25,iconSize:19,lineHeight:13,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:13.6,iconSize:21,lineHeight:14,letterSpacing:.5},{ascenderHeight:2,descenderHeight:2,fontSize:15,iconSize:23,lineHeight:15,letterSpacing:.5}]},text:{family:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Liberation Sans", Helvetica, Arial, system-ui, sans-serif',weights:{regular:400,medium:500,semibold:600,bold:700},sizes:[{ascenderHeight:4,descenderHeight:4,fontSize:10,iconSize:17,lineHeight:15,letterSpacing:0},{ascenderHeight:5,descenderHeight:5,fontSize:13,iconSize:21,lineHeight:19,letterSpacing:0},{ascenderHeight:6,descenderHeight:6,fontSize:15,iconSize:25,lineHeight:23,letterSpacing:0},{ascenderHeight:7,descenderHeight:7,fontSize:18,iconSize:29,lineHeight:27,letterSpacing:0},{ascenderHeight:8,descenderHeight:8,fontSize:21,iconSize:33,lineHeight:31,letterSpacing:0}]}},Cr=new WeakMap;function Ke(e){var t,n,r;const o=Cr.get(e);if(o)return o;const i=Se(e,e.card.enabled),a={_blend:e._blend||(e.dark?"screen":"multiply"),_dark:e.dark,accent:i.accent,avatar:i.avatar,backdrop:e.base.shadow.ambient,badge:i.badge,bg:e.base.bg,border:e.base.border,button:{default:yn(e,e.button.default),ghost:yn(e,e.button.ghost),bleed:yn(e,e.button.bleed)},code:i.code,fg:e.base.fg,focusRing:e.base.focusRing,icon:i.muted.fg,input:{default:Sr(e.input.default),invalid:Sr(e.input.invalid)},kbd:i.kbd,link:i.link,muted:{...i.muted,bg:((t=e.selectable)==null?void 0:t.default.enabled.bg2)||e.base.bg},selectable:yn(e,e.selectable||e.muted),shadow:e.base.shadow,skeleton:{from:((n=e.skeleton)==null?void 0:n.from)||e.base.border,to:((r=e.skeleton)==null?void 0:r.to)||e.base.border},syntax:e.syntax};return Cr.set(e,a),a}function yn(e,t){return{default:{enabled:Se(e,t.default.enabled),hovered:Se(e,t.default.hovered),pressed:Se(e,t.default.pressed),selected:Se(e,t.default.selected),disabled:Se(e,t.default.disabled)},primary:{enabled:Se(e,t.primary.enabled),hovered:Se(e,t.primary.hovered),pressed:Se(e,t.primary.pressed),selected:Se(e,t.primary.selected),disabled:Se(e,t.primary.disabled)},positive:{enabled:Se(e,t.positive.enabled),hovered:Se(e,t.positive.hovered),pressed:Se(e,t.positive.pressed),selected:Se(e,t.positive.selected),disabled:Se(e,t.positive.disabled)},caution:{enabled:Se(e,t.caution.enabled),hovered:Se(e,t.caution.hovered),pressed:Se(e,t.caution.pressed),selected:Se(e,t.caution.selected),disabled:Se(e,t.caution.disabled)},critical:{enabled:Se(e,t.critical.enabled),hovered:Se(e,t.critical.hovered),pressed:Se(e,t.critical.pressed),selected:Se(e,t.critical.selected),disabled:Se(e,t.critical.disabled)}}}function Se(e,t){var n,r;return{...t,avatar:{gray:{bg:e.spot.gray,fg:e.base.bg},blue:{bg:e.spot.blue,fg:e.base.bg},purple:{bg:e.spot.purple,fg:e.base.bg},magenta:{bg:e.spot.magenta,fg:e.base.bg},red:{bg:e.spot.red,fg:e.base.bg},orange:{bg:e.spot.orange,fg:e.base.bg},yellow:{bg:e.spot.yellow,fg:e.base.bg},green:{bg:e.spot.green,fg:e.base.bg},cyan:{bg:e.spot.cyan,fg:e.base.bg}},badge:{default:{bg:e.muted.default.enabled.bg,fg:e.muted.default.enabled.fg,dot:e.muted.default.enabled.muted.fg,icon:e.muted.default.enabled.muted.fg},primary:{bg:e.muted.primary.enabled.bg,fg:e.muted.primary.enabled.fg,dot:e.muted.primary.enabled.muted.fg,icon:e.muted.primary.enabled.muted.fg},positive:{bg:e.muted.positive.enabled.bg,fg:e.muted.positive.enabled.fg,dot:e.muted.positive.enabled.muted.fg,icon:e.muted.positive.enabled.muted.fg},caution:{bg:e.muted.caution.enabled.bg,fg:e.muted.caution.enabled.fg,dot:e.muted.caution.enabled.muted.fg,icon:e.muted.caution.enabled.muted.fg},critical:{bg:e.muted.critical.enabled.bg,fg:e.muted.critical.enabled.fg,dot:e.muted.critical.enabled.muted.fg,icon:e.muted.critical.enabled.muted.fg}},kbd:{bg:e.muted.default.enabled.bg,fg:e.muted.default.enabled.fg,border:e.muted.default.enabled.border},muted:{...e.muted.default.enabled.muted,bg:t.bg2||t.bg},skeleton:{from:((n=t.skeleton)==null?void 0:n.from)||t.border,to:((r=t.skeleton)==null?void 0:r.to)||t.border}}}function Sr(e){return{enabled:Cn(e.enabled),disabled:Cn(e.disabled),readOnly:Cn(e.readOnly),hovered:Cn(e.hovered)}}function Cn(e){return{bg:e.bg,border:e.border,fg:e.fg,muted:{bg:e.bg2},placeholder:e.placeholder}}const xr=new WeakMap;function $(e){var t;if(e.sanity.v2)return e.sanity.v2;const n=xr.get(e);if(n)return n;const r={_version:2,avatar:{...De.avatar,...e.sanity.avatar},button:{...De.button,...e.sanity.button},card:De.card,color:Ke(e.sanity.color),container:e.sanity.container,font:e.sanity.fonts,input:{...De.input,...e.sanity.input,checkbox:{...De.input.checkbox,...e.sanity.input.checkbox},radio:{...De.input.radio,...e.sanity.input.radio},switch:{...De.input.switch,...e.sanity.input.switch}},layer:(t=e.sanity.layer)!=null?t:De.layer,media:e.sanity.media,radius:e.sanity.radius,shadow:e.sanity.shadows,space:e.sanity.space,style:e.sanity.styles};return xr.set(e,r),r}function wr(e){return e._version===2}const Er=new WeakMap;function Mc(e){if(e.v2)return e.v2;const t=Er.get(e);if(t)return t;const{avatar:n,button:r,color:o,container:i,focusRing:a,fonts:u,input:l,layer:d,media:f,radius:h,shadows:b,space:v,styles:x}=e,g={_version:2,avatar:{...De.avatar,...n},button:{...De.button,...r},card:De.card,color:{light:{transparent:Ke(o.light.transparent),default:Ke(o.light.default),primary:Ke(o.light.primary),positive:Ke(o.light.positive),caution:Ke(o.light.caution),critical:Ke(o.light.critical)},dark:{transparent:Ke(o.dark.transparent),default:Ke(o.dark.default),primary:Ke(o.dark.primary),positive:Ke(o.dark.positive),caution:Ke(o.dark.caution),critical:Ke(o.dark.critical)}},container:i,font:u,input:{...De.input,...l,checkbox:{...De.input.checkbox,...l.checkbox},radio:{...De.input.radio,...l.radio},switch:{...De.input.switch,...l.switch}},layer:d??De.layer,media:f,radius:h,shadow:b,space:v,style:x};return Er.set(e,g),g}const Ac=new WeakMap;function Bs(e){const t=Ac.get(e);if(t)return t;const{avatar:n,button:r,color:o,container:i,font:a,input:u,media:l,radius:d,shadow:f,space:h,style:b}=e;return{_version:0,avatar:n,button:r,container:i,color:{light:{transparent:Qe(o.light.transparent),default:Qe(o.light.default),primary:Qe(o.light.primary),positive:Qe(o.light.positive),caution:Qe(o.light.caution),critical:Qe(o.light.critical)},dark:{transparent:Qe(o.dark.transparent),default:Qe(o.dark.default),primary:Qe(o.dark.primary),positive:Qe(o.dark.positive),caution:Qe(o.dark.caution),critical:Qe(o.dark.critical)}},focusRing:u.text.focusRing,fonts:a,input:u,media:l,radius:d,shadows:f,space:h,styles:b,v2:e}}function Qe(e){return{base:{bg:e.bg,fg:e.fg,border:e.border,focusRing:e.focusRing,shadow:e.shadow},button:e.button,card:e.selectable.default,dark:e._dark,input:{default:_r(e.input.default),invalid:_r(e.input.invalid)},muted:{...e.button.ghost,transparent:e.button.ghost.default},solid:{...e.button.default,transparent:e.button.default.default},spot:{gray:e.avatar.gray.bg,blue:e.avatar.blue.bg,purple:e.avatar.purple.bg,magenta:e.avatar.magenta.bg,red:e.avatar.red.bg,orange:e.avatar.orange.bg,yellow:e.avatar.yellow.bg,green:e.avatar.green.bg,cyan:e.avatar.cyan.bg},syntax:e.syntax}}function _r(e){return{enabled:Sn(e.enabled),disabled:Sn(e.disabled),readOnly:Sn(e.readOnly),hovered:Sn(e.hovered)}}function Sn(e){return{bg:e.bg,bg2:e.muted.bg,border:e.border,fg:e.fg,placeholder:e.placeholder}}const Fc=["multiply","screen"],Ms=["transparent","default","primary","positive","caution","critical"],cn=["default","primary","positive","caution","critical"],dn=["enabled","hovered","pressed","selected","disabled"],As=["default","ghost","bleed"],Fs=["default","invalid"],zs=["enabled","hovered","readOnly","disabled"];function zc(e){return Fc.includes(e)}function Oc(e){return Nl.includes(e)}function kr(e){return Hl.includes(e)}[...Ms];[...cn];[...dn];[...Fs];[...zs];function oo(e){return/^\d+%$/.test(e)}function Os(e){const t=e.split("/");let n=t.shift()||"";const[r,o]=n.split(" ");if(kr(r)){const i=r,a=t.shift()||"";if(oo(o)){const u=Number(o.slice(0,-1))/100;return{type:"color",tint:i,mix:u}}if(ro(a)){const u=Number(a);return{type:"color",tint:i,opacity:u}}return{type:"color",tint:i}}if(Rc(r)){const i=r,a=t.shift()||"";if(oo(o)){const u=Number(o.slice(0,-1))/100;return{type:"color",key:i,mix:u}}if(ro(a)){const u=Number(a);return{type:"color",key:i,opacity:u}}return{type:"color",key:i}}if(Oc(r)){const i=r;n=t.shift()||"";const[a,u]=n.split(" ");if(kr(a)){const l=a,d=t.shift()||"";if(oo(u)){const f=Number(u.slice(0,-1))/100;return{type:"color",hue:i,tint:l,mix:f}}if(ro(d)){const f=Number(d);return{type:"color",hue:i,tint:l,opacity:f}}return{type:"color",hue:i,tint:l}}return{type:"hue",value:i}}if(zc(r))return{type:"blendMode",value:r}}function Rc(e){return e==="black"||e==="white"}function ro(e){return e==="0"||/^0\.[0-9]+$/.test(e)||e==="1"}function Pc(e){let t="";return e.key==="black"||e.key==="white"?t=e.key:t="".concat(e.hue,"/").concat(e.tint),e.mix!==void 0?"".concat(t," ").concat(e.mix*100,"%"):(e.opacity!==void 0&&(t+="/".concat(e.opacity)),t)}const Tc=["500","500"];function A(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tc;const{hue:n,scheme:r}=e,o=Os(t[r==="light"?0:1]);if(!o||o.type!=="color")throw new Error("Invalid color token: ".concat(t[0]));return Pc({...o,hue:o.hue||n})}const jc={base:{"*":{_blend:["multiply","screen"],accent:{fg:["purple/600","purple/400"]},avatar:{"*":{_blend:["screen","multiply"],bg:["500","400"],fg:["white","black"]}},backdrop:["gray/200/0.2","black/0.5"],badge:{"*":{bg:["100","900"],fg:["600","400"],icon:["500","500"],dot:["500","500"]},positive:{bg:["200 50%","900"],fg:["600","500"]},caution:{bg:["200 50%","900"],fg:["600","500"]}},bg:["50","950"],border:["200","800"],code:{bg:["50","950"],fg:["600","400"]},fg:["800","200"],focusRing:["blue/500","blue/500"],icon:["600","400"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/600","blue/300"]},muted:{bg:["50","950"],fg:["700 75%","300 75%"]},shadow:{outline:["500/0.3","500/0.4"],umbra:["gray/500/0.1","black/0.2"],penumbra:["gray/500/0.07","black/0.14"],ambient:["gray/500/0.06","black/0.12"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},transparent:{bg:["50","black"]},default:{bg:["white","950"],fg:["800","200"],muted:{fg:["600","400"]}},primary:{_hue:"blue"},positive:{_hue:"green",shadow:{outline:["500/0.4","500/0.4"]}},caution:{_hue:"yellow",shadow:{outline:["600/0.3","500/0.4"]}},critical:{_hue:"red"}},button:{default:{"*":{"*":{_blend:["screen","multiply"],accent:{fg:["purple/300","purple/700"]},avatar:{"*":{_blend:["multiply","screen"],bg:["white","black"],fg:["black","white"]}},badge:{"*":{bg:["900","100"],fg:["400","600"],dot:["500","500"],icon:["500","500"]}},bg:["500","400"],border:["500/0","400/0"],code:{bg:["500 20%","400 20%"],fg:["200","600"]},fg:["white","black"],icon:["100 70%","900 70%"],kbd:{bg:["black","white"],fg:["200","600"],border:["800","200"]},link:{fg:["blue/200","blue/600"]},muted:{bg:["950","50"],fg:["100 70%","900 70%"]},skeleton:{from:["900","100"],to:["900 50%","100 50%"]}},hovered:{bg:["700","300"],border:["700/0","300/0"]},pressed:{bg:["700","300"]},selected:{bg:["700","300"]},disabled:{_hue:"gray",accent:{fg:["100 70%","900 70%"]},badge:{"*":{bg:["gray/700","gray/300"],fg:["white","black"],dot:["white","black"],icon:["white","black"]}},bg:["200","800"],kbd:{bg:["black","white"],fg:["white","black"],border:["700","300"]},link:{fg:["100 70%","900 70%"]}}},default:{"*":{bg:["800","200"],muted:{bg:["950","50"],fg:["400","600"]}},hovered:{bg:["900","100"]},pressed:{bg:["black","white"]},selected:{bg:["black","white"]}}},ghost:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 60%","purple/300 70%"]},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["50","950"],border:["100","900"],code:{bg:["500 10%","400 10%"],fg:["700 60%","400 60%"]},fg:["600","400"],icon:["700 60%","300 60%"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/700 60%","blue/300 60%"]},muted:{bg:["100","950"],fg:["700 60%","300 60%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["100","900"],fg:["700","300"]},pressed:{bg:["100","900"],fg:["800","200"]},selected:{bg:["100","900"],fg:["800","200"]},disabled:{_hue:"gray",accent:{fg:["200","800"]},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},border:["100","900"],code:{bg:["50","950"],fg:["200","800"]},fg:["200","800"],icon:["200","800"],kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]},muted:{fg:["200","800"]}}},positive:{"*":{border:["600 20%","800"]}},caution:{"*":{border:["600 20%","800"]}}},bleed:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 70%","purple/300 70%"]},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["white","black"],border:["white/0","black/0"],code:{bg:["50","950"],fg:["700 75%","300 75%"]},fg:["700","300"],icon:["700 75%","300 75%"],kbd:{bg:["white","black"],fg:["700","300"],border:["200","800"]},link:{fg:["blue/700 70%","blue/300 70%"]},muted:{bg:["100","950"],fg:["700 75%","300 75%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["50","950"],icon:["700 70%","400 70%"]},pressed:{bg:["100","900"],fg:["800","200"],icon:["800 70%","200 70%"]},selected:{bg:["100","900"],fg:["800","200"],icon:["800 60%","200 60%"]},disabled:{_hue:"gray",accent:{fg:["200","800"]},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},code:{bg:["50","950"],fg:["200","800"]},fg:["200","800"],icon:["200","800"],kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]},muted:{fg:["200","800"]}}}}},input:{"*":{"*":{_blend:["multiply","screen"],bg:["white","black"],border:["200","800"],fg:["black","200"],muted:{bg:["50","950"]},placeholder:["400","600 50%"]},hovered:{border:["300","700"]},readOnly:{bg:["50","950"],border:["200","800"],fg:["800","200"]},disabled:{fg:["200","800"],border:["100","900"]}},invalid:{"*":{_hue:"red",bg:["100","950"]}}},selectable:{"*":{"*":{_blend:["multiply","screen"],accent:{fg:["purple/700 70%","purple/300 70%"]},badge:{"*":{bg:["100","900"],fg:["600","400"],dot:["500","500"],icon:["500","500"]}},bg:["white","black"],border:["200","800"],code:{bg:["50","950"],fg:["600","400"]},fg:["700","300"],icon:["700 75%","300 75%"],kbd:{bg:["white","black"],fg:["600","400"],border:["200","800"]},link:{fg:["blue/700 70%","blue/300 70%"]},muted:{bg:["100","950"],fg:["700 75%","300 75%"]},skeleton:{from:["100","900"],to:["100 50%","900 50%"]}},hovered:{bg:["50","950"]},pressed:{bg:["100","900"]},selected:{_blend:["screen","multiply"],accent:{fg:["purple/300","purple/700"]},avatar:{"*":{_blend:["multiply","screen"],bg:["white","black"],fg:["black","white"]}},badge:{"*":{bg:["900","100"],fg:["400","600"],dot:["500","500"],icon:["500","500"]}},bg:["500","400"],border:["500 20%","400 20%"],code:{bg:["500 20%","400 20%"],fg:["200","600"]},fg:["white","black"],icon:["100 70%","900 70%"],kbd:{bg:["black","white"],fg:["200","600"],border:["800","200"]},link:{fg:["blue/200","blue/600"]},muted:{bg:["950","50"],fg:["100 70%","900 70%"]},skeleton:{from:["900","100"],to:["900 50%","100 50%"]}},disabled:{_hue:"gray",accent:{fg:["200","800"]},badge:{"*":{_hue:"gray",bg:["50","950"],fg:["gray/200","gray/800"],dot:["gray/200","gray/800"],icon:["gray/200","gray/800"]}},border:["100","900"],code:{bg:["50","950"],fg:["200","800"]},fg:["200","800"],icon:["200","800"],kbd:{bg:["white","black"],fg:["200","800"],border:["100","900"]},link:{fg:["200","800"]},muted:{fg:["200","800"]}}},default:{selected:{_hue:"blue"}},critical:{disabled:{bg:["50 50%","950 50%"]}}},syntax:{atrule:["purple/600","purple/400"],attrName:["green/600","green/400"],attrValue:["yellow/600","yellow/400"],attribute:["yellow/600","yellow/400"],boolean:["purple/600","purple/400"],builtin:["purple/600","purple/400"],cdata:["yellow/600","yellow/400"],char:["yellow/600","yellow/400"],class:["orange/600","orange/400"],className:["cyan/600","cyan/400"],comment:["gray/400","gray/600"],constant:["purple/600","purple/400"],deleted:["red/600","red/400"],entity:["red/600","red/400"],function:["green/600","green/400"],hexcode:["blue/600","blue/400"],id:["purple/600","purple/400"],important:["purple/600","purple/400"],inserted:["yellow/600","yellow/400"],keyword:["magenta/600","magenta/400"],number:["purple/600","purple/400"],operator:["magenta/600","magenta/400"],property:["blue/600","blue/400"],pseudoClass:["yellow/600","yellow/400"],pseudoElement:["yellow/600","yellow/400"],punctuation:["gray/600","gray/400"],regex:["blue/600","blue/400"],selector:["red/600","red/400"],string:["yellow/600","yellow/400"],symbol:["purple/600","purple/400"],tag:["red/600","red/400"],unit:["orange/600","orange/400"],url:["red/600","red/400"],variable:["red/600","red/400"]}};function Br(e){return!!(e&&typeof e=="object"&&!Array.isArray(e))}function he(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.filter(Boolean);return r.length===0?{}:r.reduce($c,{})}function $c(e,t){for(const n of Object.keys(t)){const r=e[n],o=t[n];Br(r)&&Br(o)?e[n]=he(r,o):e[n]=o}return e}function Wc(e){const t=he(jc,e);return{base:Ic(t),button:Vc(t),input:Uc(t),selectable:Kc(t),syntax:t.syntax}}function Ic(e){const t={};for(const n of Ms)t[n]=Lc(e,n);return t}function Lc(e,t){var n,r,o,i,a,u,l,d,f,h,b,v,x,g,D,p,w,m,C,y,S,P,E,M,F,R,T,O,W,oe,I,H,Y,G,X,J,Z,ue,se,ae,ye,be;const N=he((n=e==null?void 0:e.base)==null?void 0:n["*"],(r=e==null?void 0:e.base)==null?void 0:r[t]),Ce=N._hue||((i=(o=e==null?void 0:e.base)==null?void 0:o[t])==null?void 0:i._hue)||"gray";return{...N,_hue:Ce,avatar:{gray:he({_hue:"gray"},(a=N.avatar)==null?void 0:a["*"],(u=N.avatar)==null?void 0:u.gray),blue:he({_hue:"blue"},(l=N.avatar)==null?void 0:l["*"],(d=N.avatar)==null?void 0:d.blue),purple:he({_hue:"purple"},(f=N.avatar)==null?void 0:f["*"],(h=N.avatar)==null?void 0:h.purple),magenta:he({_hue:"magenta"},(b=N.avatar)==null?void 0:b["*"],(v=N.avatar)==null?void 0:v.magenta),red:he({_hue:"red"},(x=N.avatar)==null?void 0:x["*"],(g=N.avatar)==null?void 0:g.red),orange:he({_hue:"orange"},(D=N.avatar)==null?void 0:D["*"],(p=N.avatar)==null?void 0:p.orange),yellow:he({_hue:"yellow"},(w=N.avatar)==null?void 0:w["*"],(m=N.avatar)==null?void 0:m.yellow),green:he({_hue:"green"},(C=N.avatar)==null?void 0:C["*"],(y=N.avatar)==null?void 0:y.green),cyan:he({_hue:"cyan"},(S=N.avatar)==null?void 0:S["*"],(P=N.avatar)==null?void 0:P.cyan)},badge:{default:{_hue:((M=(E=e==null?void 0:e.base)==null?void 0:E.default)==null?void 0:M._hue)||Ce,...(F=N.badge)==null?void 0:F["*"],...(R=N.badge)==null?void 0:R.default},primary:{_hue:((O=(T=e==null?void 0:e.base)==null?void 0:T.primary)==null?void 0:O._hue)||Ce,...(W=N.badge)==null?void 0:W["*"],...(oe=N.badge)==null?void 0:oe.primary},positive:{_hue:((H=(I=e==null?void 0:e.base)==null?void 0:I.positive)==null?void 0:H._hue)||Ce,...(Y=N.badge)==null?void 0:Y["*"],...(G=N.badge)==null?void 0:G.positive},caution:{_hue:((J=(X=e==null?void 0:e.base)==null?void 0:X.caution)==null?void 0:J._hue)||Ce,...(Z=N.badge)==null?void 0:Z["*"],...(ue=N.badge)==null?void 0:ue.caution},critical:{_hue:((ae=(se=e==null?void 0:e.base)==null?void 0:se.critical)==null?void 0:ae._hue)||Ce,...(ye=N.badge)==null?void 0:ye["*"],...(be=N.badge)==null?void 0:be.critical}}}}function Vc(e){const t={};for(const n of As)t[n]=Nc(e,n);return t}function Nc(e,t){const n={};for(const r of cn)n[r]=Hc(e,t,r);return n}function Hc(e,t,n){const r={};for(const o of dn)r[o]=Gc(e,n,t,o);return r}function Gc(e,t,n,r){var o,i,a,u,l,d,f,h,b,v,x,g,D,p,w,m,C,y,S,P,E,M,F,R,T,O,W,oe,I,H,Y,G,X,J,Z,ue,se,ae,ye,be,N,Ce,Pe,He,je,Ue,xe,U,ze,qe,Ae,we;const re=he((a=(i=(o=e==null?void 0:e.button)==null?void 0:o[n])==null?void 0:i["*"])==null?void 0:a["*"],(d=(l=(u=e==null?void 0:e.button)==null?void 0:u[n])==null?void 0:l[t])==null?void 0:d["*"],(b=(h=(f=e==null?void 0:e.button)==null?void 0:f[n])==null?void 0:h["*"])==null?void 0:b[r],(g=(x=(v=e==null?void 0:e.button)==null?void 0:v[n])==null?void 0:x[t])==null?void 0:g[r]),le=re._hue||((p=(D=e==null?void 0:e.base)==null?void 0:D[t])==null?void 0:p._hue);return{...re,_hue:le,avatar:{gray:he({_hue:"gray"},(w=re.avatar)==null?void 0:w["*"],(m=re.avatar)==null?void 0:m.gray),blue:he({_hue:"blue"},(C=re.avatar)==null?void 0:C["*"],(y=re.avatar)==null?void 0:y.blue),purple:he({_hue:"purple"},(S=re.avatar)==null?void 0:S["*"],(P=re.avatar)==null?void 0:P.purple),magenta:he({_hue:"magenta"},(E=re.avatar)==null?void 0:E["*"],(M=re.avatar)==null?void 0:M.magenta),red:he({_hue:"red"},(F=re.avatar)==null?void 0:F["*"],(R=re.avatar)==null?void 0:R.red),orange:he({_hue:"orange"},(T=re.avatar)==null?void 0:T["*"],(O=re.avatar)==null?void 0:O.orange),yellow:he({_hue:"yellow"},(W=re.avatar)==null?void 0:W["*"],(oe=re.avatar)==null?void 0:oe.yellow),green:he({_hue:"green"},(I=re.avatar)==null?void 0:I["*"],(H=re.avatar)==null?void 0:H.green),cyan:he({_hue:"cyan"},(Y=re.avatar)==null?void 0:Y["*"],(G=re.avatar)==null?void 0:G.cyan)},badge:{default:{_hue:(J=(X=e==null?void 0:e.base)==null?void 0:X.default)==null?void 0:J._hue,...(Z=re.badge)==null?void 0:Z["*"],...(ue=re.badge)==null?void 0:ue.default},primary:{_hue:(ae=(se=e==null?void 0:e.base)==null?void 0:se.primary)==null?void 0:ae._hue,...(ye=re.badge)==null?void 0:ye["*"],...(be=re.badge)==null?void 0:be.primary},positive:{_hue:(Ce=(N=e==null?void 0:e.base)==null?void 0:N.positive)==null?void 0:Ce._hue,...(Pe=re.badge)==null?void 0:Pe["*"],...(He=re.badge)==null?void 0:He.positive},caution:{_hue:(Ue=(je=e==null?void 0:e.base)==null?void 0:je.caution)==null?void 0:Ue._hue,...(xe=re.badge)==null?void 0:xe["*"],...(U=re.badge)==null?void 0:U.caution},critical:{_hue:(qe=(ze=e==null?void 0:e.base)==null?void 0:ze.critical)==null?void 0:qe._hue,...(Ae=re.badge)==null?void 0:Ae["*"],...(we=re.badge)==null?void 0:we.critical}}}}function Uc(e){const t={};for(const n of Fs)t[n]=qc(e,n);return t}function qc(e,t){const n={};for(const r of zs)n[r]=Xc(e,t,r);return n}function Xc(e,t,n){var r,o,i,a,u,l,d,f,h,b;const v=he((o=(r=e==null?void 0:e.input)==null?void 0:r["*"])==null?void 0:o["*"],(a=(i=e==null?void 0:e.input)==null?void 0:i[t])==null?void 0:a["*"],(l=(u=e==null?void 0:e.input)==null?void 0:u["*"])==null?void 0:l[n],(f=(d=e==null?void 0:e.input)==null?void 0:d[t])==null?void 0:f[n]),x=v._hue||((b=(h=e==null?void 0:e.input)==null?void 0:h[t])==null?void 0:b._hue);return{...v,_hue:x}}function Kc(e){const t={};for(const n of cn)t[n]=Yc(e,n);return t}function Yc(e,t){var n,r,o,i;const a={_hue:((r=(n=e==null?void 0:e.selectable)==null?void 0:n[t])==null?void 0:r._hue)||((i=(o=e==null?void 0:e.base)==null?void 0:o[t])==null?void 0:i._hue)};for(const u of dn)a[u]=Qc(e,t,u);return a}function Qc(e,t,n){var r,o,i,a,u,l,d,f,h,b,v,x,g,D,p,w,m,C,y,S,P,E,M,F,R,T,O,W,oe,I,H,Y,G,X,J,Z,ue,se,ae,ye,be,N,Ce,Pe,He,je,Ue,xe;const U=he((o=(r=e==null?void 0:e.selectable)==null?void 0:r["*"])==null?void 0:o["*"],(a=(i=e==null?void 0:e.selectable)==null?void 0:i[t])==null?void 0:a["*"],(l=(u=e==null?void 0:e.selectable)==null?void 0:u["*"])==null?void 0:l[n],(f=(d=e==null?void 0:e.selectable)==null?void 0:d[t])==null?void 0:f[n]),ze=U._hue||((b=(h=e==null?void 0:e.base)==null?void 0:h[t])==null?void 0:b._hue);return{...U,_hue:ze,avatar:{gray:he({_hue:"gray"},(v=U.avatar)==null?void 0:v["*"],(x=U.avatar)==null?void 0:x.gray),blue:he({_hue:"blue"},(g=U.avatar)==null?void 0:g["*"],(D=U.avatar)==null?void 0:D.blue),purple:he({_hue:"purple"},(p=U.avatar)==null?void 0:p["*"],(w=U.avatar)==null?void 0:w.purple),magenta:he({_hue:"magenta"},(m=U.avatar)==null?void 0:m["*"],(C=U.avatar)==null?void 0:C.magenta),red:he({_hue:"red"},(y=U.avatar)==null?void 0:y["*"],(S=U.avatar)==null?void 0:S.red),orange:he({_hue:"orange"},(P=U.avatar)==null?void 0:P["*"],(E=U.avatar)==null?void 0:E.orange),yellow:he({_hue:"yellow"},(M=U.avatar)==null?void 0:M["*"],(F=U.avatar)==null?void 0:F.yellow),green:he({_hue:"green"},(R=U.avatar)==null?void 0:R["*"],(T=U.avatar)==null?void 0:T.green),cyan:he({_hue:"cyan"},(O=U.avatar)==null?void 0:O["*"],(W=U.avatar)==null?void 0:W.cyan)},badge:{default:{_hue:(I=(oe=e==null?void 0:e.base)==null?void 0:oe.default)==null?void 0:I._hue,...(H=U.badge)==null?void 0:H["*"],...(Y=U.badge)==null?void 0:Y.default},primary:{_hue:(X=(G=e==null?void 0:e.base)==null?void 0:G.primary)==null?void 0:X._hue,...(J=U.badge)==null?void 0:J["*"],...(Z=U.badge)==null?void 0:Z.primary},positive:{_hue:(se=(ue=e==null?void 0:e.base)==null?void 0:ue.positive)==null?void 0:se._hue,...(ae=U.badge)==null?void 0:ae["*"],...(ye=U.badge)==null?void 0:ye.positive},caution:{_hue:(N=(be=e==null?void 0:e.base)==null?void 0:be.caution)==null?void 0:N._hue,...(Ce=U.badge)==null?void 0:Ce["*"],...(Pe=U.badge)==null?void 0:Pe.caution},critical:{_hue:(je=(He=e==null?void 0:e.base)==null?void 0:He.critical)==null?void 0:je._hue,...(Ue=U.badge)==null?void 0:Ue["*"],...(xe=U.badge)==null?void 0:xe.critical}}}}function Jc(e){const t={...e,color:Wc(e==null?void 0:e.color)};return{light:Mr({scheme:"light"},t),dark:Mr({scheme:"dark"},t)}}function Mr(e,t){const{scheme:n}=e;return{transparent:$t({scheme:n,tone:"transparent"},t),default:$t({scheme:n,tone:"default"},t),primary:$t({scheme:n,tone:"primary"},t),positive:$t({scheme:n,tone:"positive"},t),caution:$t({scheme:n,tone:"caution"},t),critical:$t({scheme:n,tone:"critical"},t)}}function $t(e,t){var n,r,o,i,a,u,l,d,f,h,b,v,x;const{scheme:g,tone:D}=e,p=(r=(n=t==null?void 0:t.color)==null?void 0:n.base)==null?void 0:r[D],m={hue:(p==null?void 0:p._hue)||"gray",scheme:g};return{_blend:((p==null?void 0:p._blend)||["multiply","screen"])[g==="light"?0:1],_dark:g==="dark",accent:{fg:A(m,(o=p==null?void 0:p.accent)==null?void 0:o.fg)},avatar:Xo({scheme:g},p),backdrop:A(m,p==null?void 0:p.backdrop),badge:Ko(p==null?void 0:p.badge,{scheme:g},t),bg:A(m,p==null?void 0:p.bg),border:A(m,p==null?void 0:p.border),button:ed({scheme:g},t),code:{bg:A(m,(i=p==null?void 0:p.code)==null?void 0:i.bg),fg:A(m,(a=p==null?void 0:p.code)==null?void 0:a.fg)},fg:A(m,p==null?void 0:p.fg),focusRing:A(m,p==null?void 0:p.focusRing),icon:A(m,p==null?void 0:p.icon),input:rd({scheme:g,tone:D},t),kbd:{bg:A(m,(u=p==null?void 0:p.kbd)==null?void 0:u.bg),fg:A(m,(l=p==null?void 0:p.kbd)==null?void 0:l.fg),border:A(m,(d=p==null?void 0:p.kbd)==null?void 0:d.border)},link:{fg:A(m,(f=p==null?void 0:p.link)==null?void 0:f.fg)},muted:{bg:A(m,(h=p==null?void 0:p.muted)==null?void 0:h.bg),fg:A(m,(b=p==null?void 0:p.muted)==null?void 0:b.fg)},selectable:id({scheme:g},t),shadow:Zc({scheme:g,tone:D},t),skeleton:{from:A(m,(v=p==null?void 0:p.skeleton)==null?void 0:v.from),to:A(m,(x=p==null?void 0:p.skeleton)==null?void 0:x.to)},syntax:sd({scheme:g},t)}}function Zc(e,t){var n,r,o,i,a,u;const{scheme:l,tone:d}=e,f=(r=(n=t==null?void 0:t.color)==null?void 0:n.base)==null?void 0:r[d],b={hue:(f==null?void 0:f._hue)||"gray",scheme:l};return{outline:A(b,(o=f==null?void 0:f.shadow)==null?void 0:o.outline),umbra:A(b,(i=f==null?void 0:f.shadow)==null?void 0:i.umbra),penumbra:A(b,(a=f==null?void 0:f.shadow)==null?void 0:a.penumbra),ambient:A(b,(u=f==null?void 0:f.shadow)==null?void 0:u.ambient)}}function Xo(e,t){const{scheme:n}=e;return{gray:st({color:"gray",scheme:n},t),blue:st({color:"blue",scheme:n},t),purple:st({color:"purple",scheme:n},t),magenta:st({color:"magenta",scheme:n},t),red:st({color:"red",scheme:n},t),orange:st({color:"orange",scheme:n},t),yellow:st({color:"yellow",scheme:n},t),green:st({color:"green",scheme:n},t),cyan:st({color:"cyan",scheme:n},t)}}function st(e,t){var n;const{color:r,scheme:o}=e,i=(n=t==null?void 0:t.avatar)==null?void 0:n[r],a={hue:(i==null?void 0:i._hue)||"gray",scheme:o};return{_blend:((i==null?void 0:i._blend)||["screen","multiply"])[o==="light"?0:1],bg:A(a,i==null?void 0:i.bg),fg:A(a,i==null?void 0:i.fg)}}function Ko(e,t,n){const{scheme:r}=t;return{default:Kt(e,{scheme:r,tone:"default"},n),primary:Kt(e,{scheme:r,tone:"primary"},n),positive:Kt(e,{scheme:r,tone:"positive"},n),caution:Kt(e,{scheme:r,tone:"caution"},n),critical:Kt(e,{scheme:r,tone:"critical"},n)}}function Kt(e,t,n){var r,o,i;const{scheme:a,tone:u}=t,l=e==null?void 0:e[u],f={hue:(l==null?void 0:l._hue)||((i=(o=(r=n==null?void 0:n.color)==null?void 0:r.base)==null?void 0:o[u])==null?void 0:i._hue)||"gray",scheme:a};return{bg:A(f,l==null?void 0:l.bg),fg:A(f,l==null?void 0:l.fg),dot:A(f,l==null?void 0:l.dot),icon:A(f,l==null?void 0:l.icon)}}function ed(e,t){const{scheme:n}=e,r={};for(const o of As)r[o]=td({scheme:n,mode:o},t);return r}function td(e,t){const{mode:n,scheme:r}=e,o={};for(const i of cn)o[i]=nd({mode:n,scheme:r,tone:i},t);return o}function nd(e,t){const{mode:n,scheme:r,tone:o}=e,i={};for(const a of dn)i[a]=od({mode:n,tone:o,scheme:r,state:a},t);return i}function od(e,t){var n,r,o,i,a,u,l,d,f,h,b,v,x,g,D;const{mode:p,tone:w,scheme:m,state:C}=e,y=(i=(o=(r=(n=t==null?void 0:t.color)==null?void 0:n.button)==null?void 0:r[p])==null?void 0:o[w])==null?void 0:i[C],S=(y==null?void 0:y._hue)||"gray",P=(y==null?void 0:y._blend)||["screen","multiply"],E={hue:S,scheme:m};return{_blend:P[m==="light"?0:1],accent:{fg:A(E,(a=y==null?void 0:y.accent)==null?void 0:a.fg)},avatar:Xo({scheme:m},y),badge:Ko(y==null?void 0:y.badge,{scheme:m},t),bg:A(E,y==null?void 0:y.bg),border:A(E,y==null?void 0:y.border),code:{bg:A(E,(u=y==null?void 0:y.code)==null?void 0:u.bg),fg:A(E,(l=y==null?void 0:y.code)==null?void 0:l.fg)},fg:A(E,y==null?void 0:y.fg),icon:A(E,y==null?void 0:y.icon),muted:{bg:A(E,(d=y==null?void 0:y.muted)==null?void 0:d.bg),fg:A(E,(f=y==null?void 0:y.muted)==null?void 0:f.fg)},kbd:{bg:A(E,(h=y==null?void 0:y.kbd)==null?void 0:h.bg),fg:A(E,(b=y==null?void 0:y.kbd)==null?void 0:b.fg),border:A(E,(v=y==null?void 0:y.kbd)==null?void 0:v.border)},link:{fg:A(E,(x=y==null?void 0:y.link)==null?void 0:x.fg)},skeleton:{from:A(E,(g=y==null?void 0:y.skeleton)==null?void 0:g.from),to:A(E,(D=y==null?void 0:y.skeleton)==null?void 0:D.to)}}}function rd(e,t){const{scheme:n,tone:r}=e;return{default:Ar({mode:"default",scheme:n,tone:r},t),invalid:Ar({mode:"invalid",scheme:n,tone:r},t)}}function Ar(e,t){const{mode:n,scheme:r,tone:o}=e;return{enabled:xn({mode:n,scheme:r,state:"enabled",tone:o},t),hovered:xn({mode:n,scheme:r,state:"hovered",tone:o},t),readOnly:xn({mode:n,scheme:r,state:"readOnly",tone:o},t),disabled:xn({mode:n,scheme:r,state:"disabled",tone:o},t)}}function xn(e,t){var n,r,o,i,a,u,l;const{mode:d,tone:f,scheme:h,state:b}=e,v=(o=(r=(n=t==null?void 0:t.color)==null?void 0:n.input)==null?void 0:r[d])==null?void 0:o[b],x=(v==null?void 0:v._hue)||((u=(a=(i=t==null?void 0:t.color)==null?void 0:i.base)==null?void 0:a[f])==null?void 0:u._hue)||"gray",g=(v==null?void 0:v._blend)||["screen","multiply"],D={hue:x,scheme:h};return{_blend:g[h==="light"?0:1],bg:A(D,v==null?void 0:v.bg),border:A(D,v==null?void 0:v.border),fg:A(D,v==null?void 0:v.fg),muted:{bg:A(D,(l=v==null?void 0:v.muted)==null?void 0:l.bg)},placeholder:A(D,v==null?void 0:v.placeholder)}}function id(e,t){const{scheme:n}=e,r={};for(const o of cn)r[o]=ad({scheme:n,tone:o},t);return r}function ad(e,t){const{scheme:n,tone:r}=e,o={};for(const i of dn)o[i]=ud({tone:r,scheme:n,state:i},t);return o}function ud(e,t){var n,r,o,i,a,u,l,d,f,h,b,v,x,g;const{scheme:D,state:p,tone:w}=e,m=(o=(r=(n=t==null?void 0:t.color)==null?void 0:n.selectable)==null?void 0:r[w])==null?void 0:o[p],C=(m==null?void 0:m._hue)||"gray",y=(m==null?void 0:m._blend)||["screen","multiply"],S={hue:C,scheme:D};return{_blend:y[D==="light"?0:1],accent:{fg:A(S,(i=m==null?void 0:m.accent)==null?void 0:i.fg)},avatar:Xo({scheme:D},m),badge:Ko(m==null?void 0:m.badge,{scheme:D},t),bg:A(S,m==null?void 0:m.bg),border:A(S,m==null?void 0:m.border),code:{bg:A(S,(a=m==null?void 0:m.code)==null?void 0:a.bg),fg:A(S,(u=m==null?void 0:m.code)==null?void 0:u.fg)},fg:A(S,m==null?void 0:m.fg),icon:A(S,m==null?void 0:m.icon),muted:{bg:A(S,(l=m==null?void 0:m.muted)==null?void 0:l.bg),fg:A(S,(d=m==null?void 0:m.muted)==null?void 0:d.fg)},kbd:{bg:A(S,(f=m==null?void 0:m.kbd)==null?void 0:f.bg),fg:A(S,(h=m==null?void 0:m.kbd)==null?void 0:h.fg),border:A(S,(b=m==null?void 0:m.kbd)==null?void 0:b.border)},link:{fg:A(S,(v=m==null?void 0:m.link)==null?void 0:v.fg)},skeleton:{from:A(S,(x=m==null?void 0:m.skeleton)==null?void 0:x.from),to:A(S,(g=m==null?void 0:m.skeleton)==null?void 0:g.to)}}}function sd(e,t){var n;const{scheme:r}=e,o=(n=t==null?void 0:t.color)==null?void 0:n.syntax,i={hue:"gray",scheme:r};return{atrule:A(i,o==null?void 0:o.atrule),attrName:A(i,o==null?void 0:o.attrName),attrValue:A(i,o==null?void 0:o.attrValue),attribute:A(i,o==null?void 0:o.attribute),boolean:A(i,o==null?void 0:o.boolean),builtin:A(i,o==null?void 0:o.builtin),cdata:A(i,o==null?void 0:o.cdata),char:A(i,o==null?void 0:o.char),class:A(i,o==null?void 0:o.class),className:A(i,o==null?void 0:o.className),comment:A(i,o==null?void 0:o.comment),constant:A(i,o==null?void 0:o.constant),deleted:A(i,o==null?void 0:o.deleted),doctype:A(i,o==null?void 0:o.doctype),entity:A(i,o==null?void 0:o.entity),function:A(i,o==null?void 0:o.function),hexcode:A(i,o==null?void 0:o.hexcode),id:A(i,o==null?void 0:o.id),important:A(i,o==null?void 0:o.important),inserted:A(i,o==null?void 0:o.inserted),keyword:A(i,o==null?void 0:o.keyword),number:A(i,o==null?void 0:o.number),operator:A(i,o==null?void 0:o.operator),prolog:A(i,o==null?void 0:o.prolog),property:A(i,o==null?void 0:o.property),pseudoClass:A(i,o==null?void 0:o.pseudoClass),pseudoElement:A(i,o==null?void 0:o.pseudoElement),punctuation:A(i,o==null?void 0:o.punctuation),regex:A(i,o==null?void 0:o.regex),selector:A(i,o==null?void 0:o.selector),string:A(i,o==null?void 0:o.string),symbol:A(i,o==null?void 0:o.symbol),tag:A(i,o==null?void 0:o.tag),unit:A(i,o==null?void 0:o.unit),url:A(i,o==null?void 0:o.url),variable:A(i,o==null?void 0:o.variable)}}const ld=Vl;function io(e,t,n){const o=(t-e)*n;return e+o}function cd(e,t,n){return{r:io(e.r,t.r,n),g:io(e.g,t.g,n),b:io(e.b,t.b,n)}}function ao(e,t){return e*t}function dd(e,t){return{r:ao(e.r/255,t.r/255)*255,g:ao(e.g/255,t.g/255)*255,b:ao(e.b/255,t.b/255)*255}}function uo(e,t){return e+t-e*t}function fd(e,t){return{r:uo(e.r/255,t.r/255)*255,g:uo(e.g/255,t.g/255)*255,b:uo(e.b/255,t.b/255)*255}}function pd(e,t,n){return e*(1-n)+t*n}function hd(e,t,n){return Ye((n-e)/(t-e))}function Ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.min(n,Math.max(t,e))}function lt(e,t,n,r,o){return pd(n,r,hd(e,t,o))}function so(e){return Math.round(e)}function xo(e){if(e.length===4){const t=e.slice(1,2),n=e.slice(2,3),r=e.slice(3,4);return{r:parseInt(t+t,16),g:parseInt(n+n,16),b:parseInt(r+r,16)}}return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16)}}function gd(e){const t=e.replace(/rgba\(|\)/g,"").split(",");return{r:parseInt(t[0]),g:parseInt(t[1]),b:parseInt(t[2]),a:parseFloat(t[3])}}function Rs(e){const t=so(Ye(Math.round(e.r),0,255)),n=so(Ye(Math.round(e.g),0,255)),r=so(Ye(Math.round(e.b),0,255));return"a"in e?"rgba(".concat(t,",").concat(n,",").concat(r,",").concat(e.a,")"):"#"+((1<<24)+(t<<16)+(n<<8)+r).toString(16).slice(1)}function bd(e){const t=e.s/100,n=e.l/100,r=(1-Math.abs(2*n-1))*t,o=r*(1-Math.abs(e.h/60%2-1)),i=n-r/2;let a=0,u=0,l=0;return 0<=e.h&&e.h<60?(a=r,u=o,l=0):60<=e.h&&e.h<120?(a=o,u=r,l=0):120<=e.h&&e.h<180?(a=0,u=r,l=o):180<=e.h&&e.h<240?(a=0,u=o,l=r):240<=e.h&&e.h<300?(a=o,u=0,l=r):300<=e.h&&e.h<360&&(a=r,u=0,l=o),{r:Math.round((a+i)*255),g:Math.round((u+i)*255),b:Math.round((l+i)*255)}}const md="0123456789ABCDEFabcdef",vd=/hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;function Dd(e){for(const t of e)if(md.indexOf(t)===-1)return!1;return!0}function yd(e){return e[0]!=="#"||!(e.length===4||e.length===7)?!1:Dd(e.slice(1))}function Cd(e){const t=vd.exec(e);if(!t)throw new Error('parseHsl: string is not a HSL color: "'.concat(e,'"'));return{h:parseInt(t[1]),s:parseFloat(t[3]),l:parseFloat(t[5])}}function en(e){if(!e)return{r:0,g:0,b:0};if(typeof e!="string")throw new Error("parseColor: expected a string");if(yd(e))return xo(e);if(e.startsWith("hsl("))return bd(Cd(e));if(e.startsWith("rgba("))return gd(e);throw new Error('parseColor: unexpected color format: "'.concat(e,'"'))}function Sd(e,t){const n=en(e);return"rgba(".concat(n.r,",").concat(n.g,",").concat(n.b,",").concat(t,")")}const Le=[0,255];function xd(e,t){const{blendMode:n}=t,r=en(e),o=en(t.black),i=en(t.white),a=t.bg?en(t.bg):n==="multiply"?i:o,u={r:[o.r,i.r],g:[o.g,i.g],b:[o.b,i.b]},l={r:Ye(lt(...u.r,...Le,a.r),...Le),g:Ye(lt(...u.g,...Le,a.g),...Le),b:Ye(lt(...u.b,...Le,a.b),...Le)},d={r:Ye(lt(...u.r,...Le,r.r),...Le),g:Ye(lt(...u.g,...Le,r.g),...Le),b:Ye(lt(...u.b,...Le,r.b),...Le)},f=n==="multiply"?dd(l,d):fd(l,d),h={r:Ye(lt(...Le,...u.r,f.r),...u.r),g:Ye(lt(...Le,...u.g,f.g),...u.g),b:Ye(lt(...Le,...u.b,f.b),...u.b)};return Rs(h)}function z(e,t){const{bg:n,blendMode:r,colorPalette:o}=t;if(n==="white")throw new Error("Cannot blend with white background");const i=Os(e);if(!i||i.type!=="color")throw new Error("Invalid color token value: ".concat(e));let a="";if(i.key==="black"&&(a=Yt(o.black)),i.key==="white"&&(a=Yt(o.white)),i.hue&&i.tint&&(a=Yt(o[i.hue][i.tint])),!a)throw new Error("Invalid color token value: ".concat(e));const u=a,l={blendMode:r,bg:n,black:Yt(o.black),white:Yt(o.white)};try{if(a=xd(a,l),n&&i.mix!==void 0){const d=xo(n),f=xo(a);a=Rs(cd(d,f,i.mix))}}catch(d){throw console.warn("could not blend",a,l),d}return a==="#aN"&&(console.warn("invalid color token value: ".concat(e)),a=u),i.opacity!==void 0&&(a=Sd(a,i.opacity)),a}function Yt(e){return typeof e=="string"?e:e.hex}function wd(e,t){var n;const r=(n=t==null?void 0:t.palette)!=null?n:ld;return{light:Fr(r,e.light),dark:Fr(r,e.dark)}}function Fr(e,t){const n=Object.entries(t),[,r]=n.find(l=>{let[d]=l;return d==="transparent"}),[,o]=n.find(l=>{let[d]=l;return d==="default"}),i=lo(r,{colorPalette:e}),a=lo(o,{colorPalette:e}),u=a.bg;if(u==="white")throw new Error("Cannot blend with white background");return Object.fromEntries([["transparent",i],["default",a],...n.filter(l=>{let[d]=l;return d!=="default"&&d!=="transparent"}).map(l=>{let[d,f]=l;return[d,lo(f,{bg:u,colorPalette:e})]})])}function lo(e,t){const{colorPalette:n,bg:r}=t,o=e._blend||"multiply",i=z(e.bg,{colorPalette:n,bg:r,blendMode:o}),a={colorPalette:n,bg:i,blendMode:o},u=_d(e.button,{baseBg:i,blendMode:o,colorPalette:n}),l=Bd(e.selectable,{colorPalette:n,baseBg:i,blendMode:o}),d={outline:z(e.shadow.outline,a),umbra:z(e.shadow.umbra,{...a,bg:void 0,colorPalette:{...n,black:"#000000"}}),penumbra:z(e.shadow.penumbra,{...a,bg:void 0,colorPalette:{...n,black:"#000000"}}),ambient:z(e.shadow.ambient,{...a,bg:void 0,colorPalette:{...n,black:"#000000"}})};return{_blend:o,_dark:e._dark,accent:{fg:z(e.accent.fg,a)},avatar:Ps(e.avatar,{baseBg:i,colorPalette:n,blendMode:o}),backdrop:z(e.backdrop,a),badge:Ts(e.badge,{baseBg:i,colorPalette:n,blendMode:o}),bg:i,border:z(e.border,a),button:u,code:{bg:z(e.code.bg,a),fg:z(e.code.fg,a)},fg:z(e.fg,a),focusRing:z(e.focusRing,a),icon:z(e.icon,a),input:kd(e.input,{baseBg:i,colorPalette:n,blendMode:o}),kbd:Ed(e.kbd,{baseBg:i,colorPalette:n,blendMode:o}),link:{fg:z(e.link.fg,a)},muted:{bg:z(e.muted.bg,a),fg:z(e.muted.fg,a)},shadow:d,skeleton:{from:z(e.skeleton.from,a),to:z(e.skeleton.to,a)},syntax:Md(e.syntax,{baseBg:i,colorPalette:n,blendMode:o}),selectable:l}}function Ed(e,t){const{baseBg:n,blendMode:r,colorPalette:o}=t,i={bg:n,blendMode:r,colorPalette:o},a=z(e.bg,i),u={bg:a,blendMode:r,colorPalette:o};return{bg:a,fg:z(e.fg,u),border:z(e.border,u)}}function Ps(e,t){return{gray:ct(e.gray,t),blue:ct(e.blue,t),purple:ct(e.purple,t),magenta:ct(e.magenta,t),red:ct(e.red,t),orange:ct(e.orange,t),yellow:ct(e.yellow,t),green:ct(e.green,t),cyan:ct(e.cyan,t)}}function ct(e,t){const{baseBg:n,blendMode:r,colorPalette:o}=t,i=e._blend||"multiply",a={bg:n,blendMode:r,colorPalette:o},u=z(e.bg,a),l={bg:u,blendMode:i,colorPalette:o};return{_blend:i,bg:u,fg:z(e.fg,l)}}function Ts(e,t){return{default:Qt(e.default,t),primary:Qt(e.primary,t),positive:Qt(e.positive,t),caution:Qt(e.caution,t),critical:Qt(e.critical,t)}}function Qt(e,t){const{baseBg:n,blendMode:r,colorPalette:o}=t,i=r,a={bg:n,blendMode:r,colorPalette:o},u=z(e.bg,a),l={bg:u,blendMode:i,colorPalette:o};return{bg:u,dot:z(e.dot,l),fg:z(e.fg,l),icon:z(e.icon,l)}}function _d(e,t){return{default:co(e.default,t),ghost:co(e.ghost,t),bleed:co(e.bleed,t)}}function co(e,t){return{default:Jt(e.default,t),primary:Jt(e.primary,t),positive:Jt(e.positive,t),caution:Jt(e.caution,t),critical:Jt(e.critical,t)}}function Jt(e,t){return{enabled:it(e.enabled,t),hovered:it(e.hovered,t),pressed:it(e.pressed,t),selected:it(e.selected,t),disabled:it(e.disabled,t)}}function it(e,t){var n,r;const{baseBg:o,blendMode:i,colorPalette:a}=t,u=e._blend||"multiply",l={bg:o,blendMode:i,colorPalette:a},d=z(e.bg,l),f={bg:d,blendMode:u,colorPalette:a};return{_blend:u,accent:{fg:z(e.accent.fg,f)},avatar:Ps(e.avatar,{baseBg:o,colorPalette:a,blendMode:u}),badge:Ts(e.badge,{baseBg:d,colorPalette:a,blendMode:u}),bg:d,border:z(e.border,f),code:{bg:z(e.code.bg,f),fg:z(e.code.fg,f)},fg:z(e.fg,f),icon:z(e.icon,f),link:{fg:z(e.link.fg,f)},muted:{bg:z(e.muted.bg,f),fg:z(e.muted.fg,f)},kbd:{bg:z(e.kbd.bg,f),fg:z(e.kbd.fg,f),border:z(e.kbd.border,f)},skeleton:{from:z((n=e.skeleton)==null?void 0:n.from,f),to:z((r=e.skeleton)==null?void 0:r.to,f)}}}function kd(e,t){return{default:zr(e.default,t),invalid:zr(e.invalid,t)}}function zr(e,t){return{enabled:wn(e.enabled,t),hovered:wn(e.hovered,t),readOnly:wn(e.readOnly,t),disabled:wn(e.disabled,t)}}function wn(e,t){const{baseBg:n,blendMode:r,colorPalette:o}=t,i=e._blend||"multiply",a={colorPalette:o,bg:n,blendMode:r},u=z(e.bg,a),l={colorPalette:o,bg:u,blendMode:i};return{_blend:i,bg:u,border:z(e.border,l),fg:z(e.fg,l),muted:{bg:z(e.muted.bg,l)},placeholder:z(e.placeholder,l)}}function Bd(e,t){return{default:Zt(e.default,t),primary:Zt(e.primary,t),positive:Zt(e.positive,t),caution:Zt(e.caution,t),critical:Zt(e.critical,t)}}function Zt(e,t){return{enabled:it(e.enabled,t),hovered:it(e.hovered,t),pressed:it(e.pressed,t),selected:it(e.selected,t),disabled:it(e.disabled,t)}}function Md(e,t){const{colorPalette:n,baseBg:r,blendMode:o}=t,i={colorPalette:n,bg:r,blendMode:o};return{atrule:z(e.atrule,i),attrName:z(e.attrName,i),attrValue:z(e.attrValue,i),attribute:z(e.attribute,i),boolean:z(e.boolean,i),builtin:z(e.builtin,i),cdata:z(e.cdata,i),char:z(e.char,i),class:z(e.class,i),className:z(e.className,i),comment:z(e.comment,i),constant:z(e.constant,i),deleted:z(e.deleted,i),doctype:z(e.doctype,i),entity:z(e.entity,i),function:z(e.function,i),hexcode:z(e.hexcode,i),id:z(e.id,i),important:z(e.important,i),inserted:z(e.inserted,i),keyword:z(e.keyword,i),number:z(e.number,i),operator:z(e.operator,i),prolog:z(e.prolog,i),property:z(e.property,i),pseudoClass:z(e.pseudoClass,i),pseudoElement:z(e.pseudoElement,i),punctuation:z(e.punctuation,i),regex:z(e.regex,i),selector:z(e.selector,i),string:z(e.string,i),symbol:z(e.symbol,i),tag:z(e.tag,i),unit:z(e.unit,i),url:z(e.url,i),variable:z(e.variable,i)}}function Ad(e){var t,n,r,o,i,a,u,l,d,f,h,b;const v=Jc(e),x={_version:2,avatar:(t=e==null?void 0:e.avatar)!=null?t:De.avatar,button:(n=e==null?void 0:e.button)!=null?n:De.button,card:(r=e==null?void 0:e.card)!=null?r:De.card,color:wd(v,e),container:(o=e==null?void 0:e.container)!=null?o:De.container,font:(i=e==null?void 0:e.font)!=null?i:Bc,input:(a=e==null?void 0:e.input)!=null?a:De.input,layer:(u=e==null?void 0:e.layer)!=null?u:De.layer,media:(l=e==null?void 0:e.media)!=null?l:De.media,radius:(d=e==null?void 0:e.radius)!=null?d:De.radius,shadow:(f=e==null?void 0:e.shadow)!=null?f:De.shadow,space:(h=e==null?void 0:e.space)!=null?h:De.space,style:(b=e==null?void 0:e.style)!=null?b:De.style};return Bs(x)}const Fn=new Map;function Fd(e,t,n){const r=zd(e,t,n);if(r)return r;const o=wr(e)?Bs(e):e,i=wr(e)?e:Mc(e),a=o.color[t]||o.color.light,u=a[n]||a.default,l=o.layer||De.layer,d=i.color[t]||i.color.light,f=d[n]||d.default,h=i.layer||De.layer,b={sanity:{...o,color:u,layer:l,v2:{...i,color:f,layer:h}}};return Od(e,t,n,b),b}function zd(e,t,n){const r=Fn.get(t);if(!r)return;const o=r.get(n);if(o)return o.get(e)}function Od(e,t,n,r){Fn.has(t)||Fn.set(t,new Map);const o=Fn.get(t);o.has(n)||o.set(n,new WeakMap),o.get(n).set(e,r)}const js=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?gr({element:r.current,padding:o}).fn(n):{}:r?gr({element:r,padding:o}).fn(n):{}}}};var zn=typeof document<"u"?s.useLayoutEffect:s.useEffect;function Pn(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Pn(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Pn(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function $s(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Or(e,t){const n=$s(e);return Math.round(t*n)/n}function Rr(e){const t=s.useRef(e);return zn(()=>{t.current=e}),t}function Ws(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:u=!0,whileElementsMounted:l,open:d}=e,[f,h]=s.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[b,v]=s.useState(r);Pn(b,r)||v(r);const[x,g]=s.useState(null),[D,p]=s.useState(null),w=s.useCallback(I=>{I!=S.current&&(S.current=I,g(I))},[g]),m=s.useCallback(I=>{I!==P.current&&(P.current=I,p(I))},[p]),C=i||x,y=a||D,S=s.useRef(null),P=s.useRef(null),E=s.useRef(f),M=Rr(l),F=Rr(o),R=s.useCallback(()=>{if(!S.current||!P.current)return;const I={placement:t,strategy:n,middleware:b};F.current&&(I.platform=F.current),Gl(S.current,P.current,I).then(H=>{const Y={...H,isPositioned:!0};T.current&&!Pn(E.current,Y)&&(E.current=Y,bs.flushSync(()=>{h(Y)}))})},[b,t,n,F]);zn(()=>{d===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,h(I=>({...I,isPositioned:!1})))},[d]);const T=s.useRef(!1);zn(()=>(T.current=!0,()=>{T.current=!1}),[]),zn(()=>{if(C&&(S.current=C),y&&(P.current=y),C&&y){if(M.current)return M.current(C,y,R);R()}},[C,y,R,M]);const O=s.useMemo(()=>({reference:S,floating:P,setReference:w,setFloating:m}),[w,m]),W=s.useMemo(()=>({reference:C,floating:y}),[C,y]),oe=s.useMemo(()=>{const I={position:n,left:0,top:0};if(!W.floating)return I;const H=Or(W.floating,f.x),Y=Or(W.floating,f.y);return u?{...I,transform:"translate("+H+"px, "+Y+"px)",...$s(W.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:H,top:Y}},[n,u,W.floating,f.x,f.y]);return s.useMemo(()=>({...f,update:R,refs:O,elements:W,floatingStyles:oe}),[f,R,O,W,oe])}Ad();const fn=[],Ct={},Is={initial:{opacity:.5,scale:.97},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.97},transition:{duration:.4,type:"spring"}};function Rd(e,t){return e.reduce((n,r)=>(n[r]=t,n),{})}function j(e){return e===0?0:"".concat(e/16,"rem")}function ee(e,t,n){return((t==null?void 0:t.map(n))||[]).map((o,i)=>i===0?o:{["@media screen and (min-width: ".concat(e[i-1],"px)")]:o})}function Pd(e,t){return e===void 0?t||fn:Array.isArray(e)?e:[e]}function Ge(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:fn;if(!Array.isArray(n))throw new Error("the property must be array of numbers");if(n.length===0)return null;const{media:r,space:o}=$(e);return ee(r,n,i=>Rd(t,j(o[i])))}function Nt(e,t){const{$size:n,$weight:r}=t,{font:o,media:i}=$(t.theme),{family:a,sizes:u,weights:l}=o[e],d=r&&l[r]||l.regular,f=u[2],h={position:"relative",fontFamily:a,fontWeight:d,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};if(!n)return Nt.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:n,props:t,base:h}),Nt.warned=!0),[h];const b=ee(i,n,v=>Td(u[v]||f));return[h,...b]}function Td(e){const{ascenderHeight:t,descenderHeight:n,fontSize:r,iconSize:o,letterSpacing:i,lineHeight:a}=e,u=t+n,l=a-u,d=(l-o)/2,f=Math.floor(r*1.125/2)*2+1,h=(l-f)/2;return{fontSize:j(r),lineHeight:"calc(".concat(a," / ").concat(r,")"),letterSpacing:j(i),transform:"translateY(".concat(j(n),")"),"&:before":{marginTop:"calc(".concat(j(0-u)," - 1px)")},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:"calc(".concat(f," / 16 * 1rem)"),margin:j(h)},"& [data-sanity-icon]":{fontSize:"calc(".concat(o," / 16 * 1rem)"),margin:j(d)}}}function jd(e){return Nt("code",e)}function $d(e){return Nt("heading",e)}function Wd(e){return Nt("label",e)}function Yo(e){const{media:t}=$(e.theme);return ee(t,e.$align,n=>({textAlign:n}))}function Id(e){return Nt("text",e)}function B(e,t){const n=s.useMemo(()=>JSON.stringify(e??t),[t,e]);return s.useMemo(()=>Pd(e,t),[n])}function Pr(e,t){const n=[e];for(const r of t)Array.isArray(r)?n.push(...r):n.push(r);return n.filter(Boolean)}function Gn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn,n=arguments.length>2?arguments[2]:void 0;const[r,o]=s.useState(null),[i,a]=s.useState(()=>Pr(r,t)),u=s.useRef(i);return s.useEffect(()=>{const l=u.current,d=Pr(r,t);if(l.length!==d.length){a(d),u.current=d;return}for(const f of l)if(!d.includes(f)){a(d),u.current=d;return}for(const f of d)if(!l.includes(f)){a(d),u.current=d;return}},[r,t]),s.useEffect(()=>{if(!e)return;const l=d=>{const f=d.target;if(f instanceof Node&&!(n&&!n.contains(f))){for(const h of i)if(f===h||h.contains(f))return;e(d)}};return window.addEventListener("mousedown",l),()=>{window.removeEventListener("mousedown",l)}},[n,e,i]),o}var Ft=[],Ld=function(){return Ft.some(function(e){return e.activeTargets.length>0})},Vd=function(){return Ft.some(function(e){return e.skippedTargets.length>0})},Tr="ResizeObserver loop completed with undelivered notifications.",Nd=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Tr}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Tr),window.dispatchEvent(e)},un;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(un||(un={}));var zt=function(e){return Object.freeze(e)},Hd=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,zt(this)}return e}(),Ls=function(){function e(t,n,r,o){return this.x=t,this.y=n,this.width=r,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,zt(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,r=t.y,o=t.top,i=t.right,a=t.bottom,u=t.left,l=t.width,d=t.height;return{x:n,y:r,top:o,right:i,bottom:a,left:u,width:l,height:d}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Qo=function(e){return e instanceof SVGElement&&"getBBox"in e},Vs=function(e){if(Qo(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var o=e,i=o.offsetWidth,a=o.offsetHeight;return!(i||a||e.getClientRects().length)},jr=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},Gd=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},on=typeof window<"u"?window:{},En=new WeakMap,$r=/auto|scroll/,Ud=/^tb|vertical/,qd=/msie|trident/i.test(on.navigator&&on.navigator.userAgent),rt=function(e){return parseFloat(e||"0")},Vt=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new Hd((n?t:e)||0,(n?e:t)||0)},Wr=zt({devicePixelContentBoxSize:Vt(),borderBoxSize:Vt(),contentBoxSize:Vt(),contentRect:new Ls(0,0,0,0)}),Ns=function(e,t){if(t===void 0&&(t=!1),En.has(e)&&!t)return En.get(e);if(Vs(e))return En.set(e,Wr),Wr;var n=getComputedStyle(e),r=Qo(e)&&e.ownerSVGElement&&e.getBBox(),o=!qd&&n.boxSizing==="border-box",i=Ud.test(n.writingMode||""),a=!r&&$r.test(n.overflowY||""),u=!r&&$r.test(n.overflowX||""),l=r?0:rt(n.paddingTop),d=r?0:rt(n.paddingRight),f=r?0:rt(n.paddingBottom),h=r?0:rt(n.paddingLeft),b=r?0:rt(n.borderTopWidth),v=r?0:rt(n.borderRightWidth),x=r?0:rt(n.borderBottomWidth),g=r?0:rt(n.borderLeftWidth),D=h+d,p=l+f,w=g+v,m=b+x,C=u?e.offsetHeight-m-e.clientHeight:0,y=a?e.offsetWidth-w-e.clientWidth:0,S=o?D+w:0,P=o?p+m:0,E=r?r.width:rt(n.width)-S-y,M=r?r.height:rt(n.height)-P-C,F=E+D+y+w,R=M+p+C+m,T=zt({devicePixelContentBoxSize:Vt(Math.round(E*devicePixelRatio),Math.round(M*devicePixelRatio),i),borderBoxSize:Vt(F,R,i),contentBoxSize:Vt(E,M,i),contentRect:new Ls(h,l,E,M)});return En.set(e,T),T},Hs=function(e,t,n){var r=Ns(e,n),o=r.borderBoxSize,i=r.contentBoxSize,a=r.devicePixelContentBoxSize;switch(t){case un.DEVICE_PIXEL_CONTENT_BOX:return a;case un.BORDER_BOX:return o;default:return i}},Xd=function(){function e(t){var n=Ns(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=zt([n.borderBoxSize]),this.contentBoxSize=zt([n.contentBoxSize]),this.devicePixelContentBoxSize=zt([n.devicePixelContentBoxSize])}return e}(),Gs=function(e){if(Vs(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},Kd=function(){var e=1/0,t=[];Ft.forEach(function(a){if(a.activeTargets.length!==0){var u=[];a.activeTargets.forEach(function(d){var f=new Xd(d.target),h=Gs(d.target);u.push(f),d.lastReportedSize=Hs(d.target,d.observedBox),h<e&&(e=h)}),t.push(function(){a.callback.call(a.observer,u,a.observer)}),a.activeTargets.splice(0,a.activeTargets.length)}});for(var n=0,r=t;n<r.length;n++){var o=r[n];o()}return e},Ir=function(e){Ft.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(o){o.isActive()&&(Gs(o.target)>e?n.activeTargets.push(o):n.skippedTargets.push(o))})})},Yd=function(){var e=0;for(Ir(e);Ld();)e=Kd(),Ir(e);return Vd()&&Nd(),e>0},fo,Us=[],Qd=function(){return Us.splice(0).forEach(function(e){return e()})},Jd=function(e){if(!fo){var t=0,n=document.createTextNode(""),r={characterData:!0};new MutationObserver(function(){return Qd()}).observe(n,r),fo=function(){n.textContent="".concat(t?t--:t++)}}Us.push(e),fo()},Zd=function(e){Jd(function(){requestAnimationFrame(e)})},On=0,ef=function(){return!!On},tf=250,nf={attributes:!0,characterData:!0,childList:!0,subtree:!0},Lr=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Vr=function(e){return e===void 0&&(e=0),Date.now()+e},po=!1,of=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=tf),!po){po=!0;var r=Vr(t);Zd(function(){var o=!1;try{o=Yd()}finally{if(po=!1,t=r-Vr(),!ef())return;o?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,nf)};document.body?n():on.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Lr.forEach(function(n){return on.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Lr.forEach(function(n){return on.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),wo=new of,Nr=function(e){!On&&e>0&&wo.start(),On+=e,!On&&wo.stop()},rf=function(e){return!Qo(e)&&!Gd(e)&&getComputedStyle(e).display==="inline"},af=function(){function e(t,n){this.target=t,this.observedBox=n||un.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=Hs(this.target,this.observedBox,!0);return rf(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),uf=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),_n=new WeakMap,Hr=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},kn=function(){function e(){}return e.connect=function(t,n){var r=new uf(t,n);_n.set(t,r)},e.observe=function(t,n,r){var o=_n.get(t),i=o.observationTargets.length===0;Hr(o.observationTargets,n)<0&&(i&&Ft.push(o),o.observationTargets.push(new af(n,r&&r.box)),Nr(1),wo.schedule())},e.unobserve=function(t,n){var r=_n.get(t),o=Hr(r.observationTargets,n),i=r.observationTargets.length===1;o>=0&&(i&&Ft.splice(Ft.indexOf(r),1),r.observationTargets.splice(o,1),Nr(-1))},e.disconnect=function(t){var n=this,r=_n.get(t);r.observationTargets.slice().forEach(function(o){return n.unobserve(t,o.target)}),r.activeTargets.splice(0,r.activeTargets.length)},e}(),sf=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");kn.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!jr(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");kn.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!jr(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");kn.unobserve(this,t)},e.prototype.disconnect=function(){kn.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const qs=typeof document<"u"&&typeof window<"u"&&window.ResizeObserver?window.ResizeObserver:sf,lf=df();function cf(){return{subscribe(e,t){const n=new qs(r=>{let[o]=r;t({_contentRect:o.contentRect,border:{width:o.borderBoxSize[0].inlineSize,height:o.borderBoxSize[0].blockSize},content:{width:o.contentRect.width,height:o.contentRect.height}})});return n.observe(e),()=>{n.unobserve(e),n.disconnect()}}}}function df(){const e=new WeakMap,t=new WeakMap;return{subscribe(n,r){const o=t.get(n)||[];let i=e.get(n);return t.has(n)||(t.set(n,o),i=cf().subscribe(n,u=>{for(const l of o)l(u)})),o.push(r),()=>{const a=o.indexOf(r);a>-1&&o.splice(a,1),o.length===0&&i&&i()}}}}function Xs(e){const[t,n]=s.useState(null);return s.useEffect(()=>{if(e)return lf.subscribe(e,n)},[e]),t}function Ks(e){return s.useEffect(()=>(addEventListener("keydown",e),()=>removeEventListener("keydown",e)),[e])}function ff(){if(typeof globalThis<"u")return globalThis;if(typeof window<"u")return window;if(typeof self<"u")return self;if(typeof global<"u")return global;throw new Error("@sanity/ui: could not locate global scope")}const pe=ff(),Eo=Symbol.for("@sanity/ui/context/theme");pe[Eo]=pe[Eo]||s.createContext(null);const _o=pe[Eo];function pf(e){const t=s.useContext(_o),{children:n,scheme:r=(t==null?void 0:t.scheme)||"light",theme:o=(t==null?void 0:t.theme)||null,tone:i=(t==null?void 0:t.tone)||"default"}=e,a=s.useMemo(()=>o?{version:0,theme:o,scheme:r,tone:i}:null,[o,r,i]),u=s.useMemo(()=>o?Fd(o,r,i):null,[r,o,i]);return u?c.jsx(_o.Provider,{value:a,children:c.jsx(Jl,{theme:u,children:n})}):c.jsx("pre",{children:'ThemeProvider: no "theme" property provided'})}function pn(){const e=s.useContext(_o);if(!e)throw new Error("useRootTheme(): missing context value");return e}function hf(e){const{children:t,scheme:n,tone:r}=e,o=pn();return c.jsx(pf,{scheme:n||o.scheme,theme:o.theme,tone:r,children:t})}function gf(){return Es()}function bt(){return $(Es())}const Gr=new WeakMap;function bf(e,t){return t===0?"screen and (max-width: ".concat(e[t]-1,"px)"):t===e.length?"screen and (min-width: ".concat(e[t-1],"px)"):"screen and (min-width: ".concat(e[t-1],"px) and (max-width: ").concat(e[t]-1,"px)")}function mf(e){const t=e.length;let n;const r=()=>{if(!n){n=[];for(let a=t;a>-1;a-=1){const u=bf(e,a);n.push({index:a,mq:window.matchMedia(u)})}}return n};return{getSnapshot:()=>{for(const{index:a,mq:u}of r())if(u.matches)return a;return 0},subscribe:a=>{const u=[];for(const{mq:l}of r()){const d=()=>{l.matches&&a()};l.addEventListener("change",d),u.push(()=>l.removeEventListener("change",d))}return()=>{for(const l of u)l()}}}}function vf(){return 0}function Ys(){const{media:e}=bt();let t=Gr.get(e);return t||(t=mf(e),Gr.set(e,t)),s.useSyncExternalStore(t.subscribe,t.getSnapshot,vf)}const Df=typeof window<"u"?s.useLayoutEffect:s.useEffect;function Te(e){const t=s.useRef(null);return Df(()=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)}),t}function hn(e,t){s.useEffect(()=>{e.current&&e.current.setCustomValidity(t||"")},[t,e])}function yf(){return[Cf,Sf,xf,wf,Ef]}function Cf(e){var t,n;const{card:r,media:o}=$(e.theme),i="".concat((n=(t=r.border)==null?void 0:t.width)!=null?n:1,"px solid var(--card-border-color)");return ee(o,e.$border,a=>a?{"&&":{border:i}}:{"&&":{border:0}})}function Sf(e){var t,n;const{card:r,media:o}=$(e.theme),i="".concat((n=(t=r.border)==null?void 0:t.width)!=null?n:1,"px solid var(--card-border-color)");return ee(o,e.$borderTop,a=>a?{"&&":{borderTop:i}}:{"&&":{borderTop:0}})}function xf(e){var t,n;const{card:r,media:o}=$(e.theme),i="".concat((n=(t=r.border)==null?void 0:t.width)!=null?n:1,"px solid var(--card-border-color)");return ee(o,e.$borderRight,a=>a?{"&&":{borderRight:i}}:{"&&":{borderRight:0}})}function wf(e){var t,n;const{card:r,media:o}=$(e.theme),i="".concat((n=(t=r.border)==null?void 0:t.width)!=null?n:1,"px solid var(--card-border-color)");return ee(o,e.$borderBottom,a=>a?{"&&":{borderBottom:i}}:{"&&":{borderBottom:0}})}function Ef(e){var t,n;const{card:r,media:o}=$(e.theme),i="".concat((n=(t=r.border)==null?void 0:t.width)!=null?n:1,"px solid var(--card-border-color)");return ee(o,e.$borderLeft,a=>a?{"&&":{borderLeft:i}}:{"&&":{borderLeft:0}})}const _f={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},kf={content:"content-box",border:"border-box"},Bf={stretch:"stretch",fill:"100%"};function Mf(){return _f}function Af(){return[zf,Of,Rf,Ff]}function Ff(e){const{media:t}=$(e.theme);return ee(t,e.$display,n=>({"&:not([hidden])":{display:n}}))}function zf(e){const{media:t}=$(e.theme);return ee(t,e.$sizing,n=>({boxSizing:kf[n]}))}function Of(e){const{media:t}=$(e.theme);return ee(t,e.$height,n=>({height:Bf[n]}))}function Rf(e){const{media:t}=$(e.theme);return ee(t,e.$overflow,n=>({overflow:n}))}const Pf={"&&:not([hidden])":{display:"flex"}};function Tf(){return[Pf,jf,$f,Wf,If,Lf]}function jf(e){const{media:t}=$(e.theme);return ee(t,e.$align,n=>({alignItems:n}))}function $f(e){const{media:t,space:n}=$(e.theme);return ee(t,e.$gap,r=>({gap:r?j(n[r]):void 0}))}function Wf(e){const{media:t}=$(e.theme);return ee(t,e.$wrap,n=>({flexWrap:n}))}function If(e){const{media:t}=$(e.theme);return ee(t,e.$justify,n=>({justifyContent:n}))}function Lf(e){const{media:t}=$(e.theme);return ee(t,e.$direction,n=>({flexDirection:n}))}const Vf={minWidth:0,minHeight:0};function Qs(){return[Vf,Nf]}function Nf(e){const{media:t}=$(e.theme);return e.$flex?ee(t,e.$flex,n=>({flex:n})):fn}function Me(e){return"inset 0 0 0 ".concat(e.width,"px ").concat(e.color)}function Ze(e){const{base:t,border:n,focusRing:r}=e,o=r.offset+r.width,i=0-r.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&"inset 0 0 0 ".concat(i,"px var(--card-focus-ring-color)"),n&&Me(n),i<0&&"0 0 0 ".concat(0-i,"px ").concat(a),o>0&&"0 0 0 ".concat(o,"px var(--card-focus-ring-color)")].filter(Boolean).join(",")}const Hf={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},Gf={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},Uf={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function qf(){return[Hf,Xf,Kf,Yf,Qf,Jf,Zf,e0,t0]}function Xf(e){const{media:t}=$(e.theme);return ee(t,e.$autoFlow,n=>({gridAutoFlow:n}))}function Kf(e){const{media:t}=$(e.theme);return ee(t,e.$autoRows,n=>({gridAutoRows:n&&Uf[n]}))}function Yf(e){const{media:t}=$(e.theme);return ee(t,e.$autoCols,n=>({gridAutoColumns:n&&Gf[n]}))}function Qf(e){const{media:t}=$(e.theme);return ee(t,e.$columns,n=>({gridTemplateColumns:n&&"repeat(".concat(n,",minmax(0,1fr));")}))}function Jf(e){const{media:t}=$(e.theme);return ee(t,e.$rows,n=>({gridTemplateRows:n&&"repeat(".concat(n,",minmax(0,1fr));")}))}function Zf(e){const{media:t,space:n}=$(e.theme);return ee(t,e.$gap,r=>({gridGap:r?j(n[r]):void 0}))}function e0(e){const{media:t,space:n}=$(e.theme);return ee(t,e.$gapX,r=>({columnGap:r?j(n[r]):void 0}))}function t0(e){const{media:t,space:n}=$(e.theme);return ee(t,e.$gapY,r=>({rowGap:r?j(n[r]):void 0}))}function n0(){return[i0,a0,u0,s0,l0,c0]}const o0={auto:"auto",full:"1 / -1"},r0={auto:"auto",full:"1 / -1"};function i0(e){const{media:t}=$(e.theme);return ee(t,e.$row,n=>typeof n=="number"?{gridRow:"span ".concat(n," / span ").concat(n)}:{gridRow:o0[n]})}function a0(e){const{media:t}=$(e.theme);return ee(t,e.$rowStart,n=>({gridRowStart:n}))}function u0(e){const{media:t}=$(e.theme);return ee(t,e.$rowEnd,n=>({gridRowEnd:n}))}function s0(e){const{media:t}=$(e.theme);return ee(t,e.$column,n=>typeof n=="number"?{gridColumn:"span ".concat(n," / span ").concat(n)}:{gridColumn:r0[n]})}function l0(e){const{media:t}=$(e.theme);return ee(t,e.$columnStart,n=>({gridColumnStart:n}))}function c0(e){const{media:t}=$(e.theme);return ee(t,e.$columnEnd,n=>({gridColumnEnd:n}))}function Jo(e){const{$fontSize:t,$iconLeft:n,$iconRight:r,$padding:o,$space:i}=e,{font:a,media:u,space:l}=$(e.theme),d=Math.max(o.length,i.length,t.length),f=[],h=[],b=[];for(let v=0;v<d;v+=1)b[v]=t[v]===void 0?b[v-1]:t[v],f[v]=o[v]===void 0?f[v-1]:o[v],h[v]=i[v]===void 0?h[v-1]:i[v];return ee(u,f,(v,x)=>{const g=a.text.sizes[b[x]]||a.text.sizes[2],D=g.lineHeight-g.ascenderHeight-g.descenderHeight,p=l[f[x]],w=l[h[x]],m={paddingTop:j(p-g.ascenderHeight),paddingRight:j(p),paddingBottom:j(p-g.descenderHeight),paddingLeft:j(p)};return r&&(m.paddingRight=j(p+D+w)),n&&(m.paddingLeft=j(p+D+w)),m})}function d0(e){return Jo({...e,$iconRight:!0})}var Ur=Object.freeze,f0=Object.defineProperty,Zo=(e,t)=>Ur(f0(e,"raw",{value:Ur(t||e.slice())})),qr,Xr,Kr;const p0=K(qr||(qr=Zo([`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`])));function Js(){return p0}function Zs(e){const{$scheme:t,$tone:n,$weight:r}=e,{color:o,font:i}=$(e.theme);return K(Xr||(Xr=Zo([`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: `,`;
    font-weight: `,`;
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='`,"'][data-tone='",`'] {
      --input-fg-color: `,`;
      --input-placeholder-color: `,`;

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: `,`;
        --input-placeholder-color: `,`;
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: `,`;
        --input-placeholder-color: `,`;
      }

      /* invalid */
      &:invalid {
        --input-fg-color: `,`;
        --input-placeholder-color: `,`;
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: `,`;
        --input-placeholder-color: `,`;
      }
    }
  `])),i.text.family,r&&i.text.weights[r]||i.text.weights.regular,t,n,o.input.default.enabled.fg,o.input.default.enabled.placeholder,o.input.default.enabled.fg,o.input.default.enabled.placeholder,o.input.default.disabled.fg,o.input.default.disabled.placeholder,o.input.invalid.enabled.fg,o.input.invalid.enabled.placeholder,o.input.default.readOnly.fg,o.input.default.readOnly.placeholder)}function el(e){const{font:t,media:n}=$(e.theme);return ee(n,e.$fontSize,r=>{const o=t.text.sizes[r]||t.text.sizes[2];return{fontSize:j(o.fontSize),lineHeight:o.lineHeight/o.fontSize}})}function tl(e){const{$hasPrefix:t,$hasSuffix:n,$scheme:r,$tone:o,$unstableDisableFocusRing:i}=e,{color:a,input:u}=$(e.theme);return K(Kr||(Kr=Zo([`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: `,`;
    border-bottom-left-radius: `,`;
    border-top-right-radius: `,`;
    border-bottom-right-radius: `,`;

    &[data-scheme='`,"'][data-tone='",`'] {
      --card-bg-color: `,`;
      --card-fg-color: `,`;

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: `,`;
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: `,`;
        --card-fg-color: `,`;

        &[data-border] {
          --input-box-shadow: `,`;
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: `,`;
        }

        &:not([data-border]) {
          --input-box-shadow: `,`;
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: `,` !important;
        --card-fg-color: `,` !important;
        --card-icon-color: `,` !important;

        &[data-border] {
          --input-box-shadow: `,`;
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: `,` !important;
        --card-fg-color: `,` !important;
        --card-icon-color: `,` !important;

        &[data-border] {
          --input-box-shadow: `,`;
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: `,` !important;
        --card-fg-color: `,` !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: `,` !important;
        --card-fg-color: `,` !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: `,`;
          --card-fg-color: `,`;
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: `,`;
          --card-fg-color: `,`;
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: `,`;
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: `,`;
        }
      }
    }
  `])),t?0:void 0,t?0:void 0,n?0:void 0,n?0:void 0,r,o,a.input.default.enabled.bg,a.input.default.enabled.fg,Me({color:a.input.default.enabled.border,width:u.border.width}),a.input.invalid.enabled.bg,a.input.invalid.enabled.fg,Me({color:a.input.invalid.enabled.border,width:u.border.width}),i?void 0:Ze({border:{color:a.input.default.enabled.border,width:u.border.width},focusRing:u.text.focusRing}),i?void 0:Ze({focusRing:u.text.focusRing}),a.input.default.disabled.bg,a.input.default.disabled.fg,a.input.default.disabled.fg,Me({color:a.input.default.disabled.border,width:u.border.width}),a.input.invalid.disabled.bg,a.input.invalid.disabled.fg,a.input.invalid.disabled.fg,Me({color:a.input.invalid.disabled.border,width:u.border.width}),a.input.default.readOnly.bg,a.input.default.readOnly.fg,a.input.invalid.readOnly.bg,a.input.invalid.readOnly.fg,a.input.default.hovered.bg,a.input.default.hovered.fg,a.input.invalid.hovered.bg,a.input.invalid.hovered.fg,Me({color:a.input.default.hovered.border,width:u.border.width}),Me({color:a.input.invalid.hovered.border,width:u.border.width}))}function h0(e){const{theme:t}=e;return[Ge(t,["margin"],e.$margin),Ge(t,["marginLeft","marginRight"],e.$marginX),Ge(t,["marginTop","marginBottom"],e.$marginY),Ge(t,["marginTop"],e.$marginTop),Ge(t,["marginRight"],e.$marginRight),Ge(t,["marginBottom"],e.$marginBottom),Ge(t,["marginLeft"],e.$marginLeft)].filter(Boolean)}function nl(e){const{theme:t}=e;return[Ge(t,["padding"],e.$padding),Ge(t,["paddingLeft","paddingRight"],e.$paddingX),Ge(t,["paddingTop","paddingBottom"],e.$paddingY),Ge(t,["paddingTop"],e.$paddingTop),Ge(t,["paddingRight"],e.$paddingRight),Ge(t,["paddingBottom"],e.$paddingBottom),Ge(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function mt(e){const{media:t,radius:n}=$(e.theme);return ee(t,e.$radius,r=>{let o=0;return typeof r=="number"&&(o=j(n[r])),r==="full"&&(o="9999px"),{borderRadius:o}})}function ho(e,t){return"".concat(e.map(j).join(" ")," ").concat(t)}function g0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;if(!e)return Ct;const n="0 0 0 ".concat(j(t)," var(--card-shadow-outline-color)"),r=ho(e.umbra,"var(--card-shadow-umbra-color)"),o=ho(e.penumbra,"var(--card-shadow-penumbra-color)"),i=ho(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:"".concat(n,", ").concat(r,", ").concat(o,", ").concat(i)}}function b0(e){const{card:t,media:n,shadow:r}=$(e.theme);return ee(n,e.$shadow,o=>g0(r[o],t.shadow.outline))}var Yr=Object.freeze,m0=Object.defineProperty,go=(e,t)=>Yr(m0(e,"raw",{value:Yr(t||e.slice())})),Qr,Jr,Zr;function v0(e){const{$accent:t,$muted:n}=e,{font:r}=$(e.theme);return K(Zr||(Zr=go([`
    text-transform: uppercase;

    `,`

    `,`

    & code {
      font-family: `,`;
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `])),t&&K(Qr||(Qr=go([`
      color: var(--card-accent-fg-color);
    `]))),n&&K(Jr||(Jr=go([`
      color: var(--card-muted-fg-color);
    `]))),r.code.family)}var ei=Object.freeze,D0=Object.defineProperty,y0=(e,t)=>ei(D0(e,"raw",{value:ei(t||e.slice())})),ti;const C0=_.div(Wd,Yo,v0),S0=_.span(ti||(ti=y0([`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`]))),er=s.forwardRef(function(t,n){const{accent:r,align:o,children:i,muted:a=!1,size:u=2,textOverflow:l,weight:d,...f}=t;let h=i;return l==="ellipsis"?h=c.jsx(S0,{children:h}):h=c.jsx("span",{children:h}),c.jsx(C0,{"data-ui":"Label",...f,$accent:r,$align:B(o),$muted:a,$size:B(u),$weight:d,ref:n,children:h})}),Ht={root:w0,arrow:x0,bgStroke:B0,stroke:M0,initials:k0,image:_0};function x0(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}}function w0(e){const{$color:t}=e,{avatar:n}=$(e.theme);return{"--avatar-bg-color":"var(--card-avatar-".concat(t,"-bg-color)"),"--avatar-fg-color":"var(--card-avatar-".concat(t,"-fg-color)"),backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:Ze({focusRing:n.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}function E0(e){const{avatar:t,media:n}=$(e.theme);return ee(n,e.$size,r=>{const o=t.sizes[r]||t.sizes[0];return{width:j(o.size),height:j(o.size),borderRadius:j(o.size/2),"&>svg":{width:j(o.size),height:j(o.size),borderRadius:j(o.size/2)}}})}function _0(){return{position:"relative"}}function k0(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}function B0(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}function M0(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}const A0=_.div(E0,Ht.root),F0=_.div(Ht.arrow),z0=_.ellipse(Ht.bgStroke),O0=_.ellipse(Ht.stroke),R0=_.div(Ht.initials),P0=_(er)({color:"inherit"}),T0=_.svg(Ht.image);s.forwardRef(function(t,n){const{__unstable_hideInnerStroke:r,as:o,color:i="gray",src:a,title:u,initials:l,onImageLoadError:d,arrowPosition:f,animateArrowFrom:h,status:b="online",size:v=1,...x}=t,{avatar:g}=bt(),D=Ul.isValidElementType(o)?o:"div",p=B(v),m=(g.sizes[p[0]]||g.sizes[0]).size,C=m/2,y=s.useId(),[S,P]=s.useState(h||f||"inside"),[E,M]=s.useState(!1),F="avatar-image-".concat(y);s.useEffect(()=>{if(S===f)return;const O=requestAnimationFrame(()=>P(f));return()=>cancelAnimationFrame(O)},[S,f]),s.useEffect(()=>{a&&M(!1)},[a]);const R=s.useCallback(()=>{M(!0),d&&d(new Error("Avatar: the image failed to load"))},[d]),T=s.useMemo(()=>p.map(O=>O===1?1:O===2?3:O===3?5:0),[p]);return c.jsxs(A0,{as:D,"data-as":typeof D=="string"?D:void 0,"data-ui":"Avatar",...x,$color:i,$size:p,"aria-label":u,"data-arrow-position":S,"data-status":b,ref:n,title:u,children:[c.jsx(F0,{children:c.jsx("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:c.jsx("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:i})})}),!E&&a&&c.jsxs(T0,{viewBox:"0 0 ".concat(m," ").concat(m),fill:"none",children:[c.jsx("defs",{children:c.jsx("pattern",{id:F,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:c.jsx("image",{href:a,width:"1",height:"1",onError:R})})}),c.jsx("circle",{cx:C,cy:C,r:C,fill:"url(#".concat(F,")")}),!r&&c.jsx(z0,{cx:C,cy:C,rx:C,ry:C,vectorEffect:"non-scaling-stroke"}),c.jsx(O0,{cx:C,cy:C,rx:C,ry:C,vectorEffect:"non-scaling-stroke"})]}),(E||!a)&&l&&c.jsx(c.Fragment,{children:c.jsx(R0,{children:c.jsx(P0,{forwardedAs:"span",size:T,weight:"medium",children:l})})})]})});var ni=Object.freeze,j0=Object.defineProperty,$0=(e,t)=>ni(j0(e,"raw",{value:ni(t||e.slice())})),oi;function W0(e){const{avatar:t,media:n}=$(e.theme);return ee(n,e.$size,r=>{const o=t.sizes[r];return o?{borderRadius:j(o.size/2),minWidth:j(o.size),height:j(o.size)}:Ct})}function I0(e){const{space:t}=$(e.theme);return K(oi||(oi=$0([`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 `,`;

    &:not([hidden]) {
      display: flex;
    }
  `])),j(t[2]))}const L0=_.div(W0,I0),ri=s.forwardRef(function(t,n){const{count:r,size:o=1}=t,i=B(o),a=s.useMemo(()=>i.map(u=>u===1?1:u===2?3:u===3?5:0),[i]);return c.jsx(L0,{$size:i,"data-ui":"AvatarCounter",ref:n,children:c.jsx(er,{as:"span",size:a,weight:"medium",children:r})})});function ol(e){return(Array.isArray(e)?e:[e]).filter(n=>nt.isElement(n)||nt.isFragment(n)||typeof n=="string")}var ii=Object.freeze,V0=Object.defineProperty,N0=(e,t)=>ii(V0(e,"raw",{value:ii(t||e.slice())})),ai;const H0=K(ai||(ai=N0([`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`])));function G0(){return H0}function U0(e){const{avatar:t,media:n}=$(e.theme);return ee(n,e.$size,r=>{const o=t.sizes[r];return o?{"& > div + div":{marginLeft:j(o.distance)}}:Ct})}const q0=_.div(U0,G0);s.forwardRef(function(t,n){const{children:r,maxLength:o=4,size:i=1,...a}=t,u=ol(r).filter(x=>typeof x!="string"),l=Math.max(o,0),d=B(i),f=u.length,h=l-1,b=f-h,v=b>1?u.slice(b,f):u;return c.jsxs(q0,{"data-ui":"AvatarStack",...a,ref:n,$size:d,children:[f===0&&c.jsx("div",{children:c.jsx(ri,{count:f,size:d})}),f!==0&&b>1&&c.jsx("div",{children:c.jsx(ri,{count:b,size:d})}),v.map((x,g)=>c.jsx("div",{children:s.cloneElement(x,{size:d})},String(g)))]})});const X0=_.div(Mf,Qs,Af,n0,h0,nl),L=s.forwardRef(function(t,n){const{as:r="div",column:o,columnStart:i,columnEnd:a,display:u="block",flex:l,height:d,margin:f=0,marginX:h,marginY:b,marginTop:v,marginRight:x,marginBottom:g,marginLeft:D,overflow:p,padding:w=0,paddingX:m,paddingY:C,paddingTop:y,paddingRight:S,paddingBottom:P,paddingLeft:E,row:M,rowStart:F,rowEnd:R,sizing:T,...O}=t;return c.jsx(X0,{"data-as":typeof r=="string"?r:void 0,"data-ui":"Box",...O,$column:B(o),$columnStart:B(i),$columnEnd:B(a),$display:B(u),$flex:B(l),$height:B(d),$margin:B(f),$marginX:B(h),$marginY:B(b),$marginTop:B(v),$marginRight:B(x),$marginBottom:B(g),$marginLeft:B(D),$overflow:B(p),$padding:B(w),$paddingX:B(m),$paddingY:B(C),$paddingTop:B(y),$paddingRight:B(S),$paddingBottom:B(P),$paddingLeft:B(E),$row:B(M),$rowStart:B(F),$rowEnd:B(R),$sizing:B(T),as:r,ref:n,children:t.children})});var ui=Object.freeze,K0=Object.defineProperty,bo=(e,t)=>ui(K0(e,"raw",{value:ui(t||e.slice())})),si,li,ci;function Y0(e){const{$accent:t,$muted:n}=e,{font:r}=$(e.theme);return K(ci||(ci=bo([`
    color: var(--card-fg-color);

    `,`

    `,`

    & code {
      font-family: `,`;
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: `,`;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `])),t&&K(si||(si=bo([`
      color: var(--card-accent-fg-color);
    `]))),n&&K(li||(li=bo([`
      color: var(--card-muted-fg-color);
    `]))),r.code.family,r.text.weights.bold)}var di=Object.freeze,Q0=Object.defineProperty,J0=(e,t)=>di(Q0(e,"raw",{value:di(t||e.slice())})),fi;const Z0=_.div(Id,Yo,Y0),ep=_.span(fi||(fi=J0([`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`]))),ke=s.forwardRef(function(t,n){const{accent:r=!1,align:o,children:i,muted:a=!1,size:u=2,textOverflow:l,weight:d,...f}=t;let h=i;return l==="ellipsis"&&(h=c.jsx(ep,{children:h})),c.jsx(Z0,{"data-ui":"Text",...f,$accent:r,$align:B(o),$muted:a,ref:n,$size:B(u),$weight:d,children:c.jsx("span",{children:h})})});function tp(e){const{$tone:t}=e;return{"--card-bg-color":"var(--card-badge-".concat(t,"-bg-color)"),"--card-fg-color":"var(--card-badge-".concat(t,"-fg-color)"),backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}const np=_(L)(mt,tp),op=s.forwardRef(function(t,n){const{children:r,fontSize:o=1,mode:i,padding:a=1,radius:u="full",tone:l="default",...d}=t;return c.jsx(np,{"data-ui":"Badge",...d,$tone:l,$radius:B(u),padding:B(a),ref:n,children:c.jsx(ke,{size:o,children:r})})}),rp=_(L)(Qs,Tf),Ne=s.forwardRef(function(t,n){const{align:r,as:o,direction:i="row",gap:a,justify:u,wrap:l,...d}=t;return c.jsx(rp,{"data-ui":"Flex",...d,$align:B(r),$direction:B(i),$gap:B(a),$justify:B(u),$wrap:B(l),forwardedAs:o,ref:n})});var pi=Object.freeze,ip=Object.defineProperty,rl=(e,t)=>pi(ip(e,"raw",{value:pi(t||e.slice())})),hi,gi;const ap=qo(hi||(hi=rl([`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`]))),up=_(ke)(gi||(gi=rl([`
  & > span > svg {
    animation: `,` 500ms linear infinite;
  }
`])),ap),il=s.forwardRef(function(t,n){return c.jsx(up,{"data-ui":"Spinner",...t,ref:n,children:c.jsx(ms,{})})});function fe(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":n?"repeating-conic-gradient(".concat(t.bg," 0% 25%, ").concat(t.muted.bg," 0% 50%)"):void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}var bi=Object.freeze,sp=Object.defineProperty,mi=(e,t)=>bi(sp(e,"raw",{value:bi(t||e.slice())})),vi,Di;function lp(e){const{$width:t}=e,{style:n}=$(e.theme);return K(Di||(Di=mi([`
    `,`;

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    `,`

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `])),n==null?void 0:n.button,t==="fill"&&K(vi||(vi=mi([`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `]))))}function yi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(",")}function cp(e){var t;const{$mode:n}=e,{button:r,color:o,style:i}=$(e.theme),a=e.$mode==="ghost",u=o.button[n]||o.button.default,l=u[e.$tone]||u.default,d={width:r.border.width,color:"var(--card-border-color)"},f=void 0;return[fe(o,l.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:Me(d),'&:disabled, &[data-disabled="true"]':fe(o,l.disabled),"&:not([data-disabled='true'])":{boxShadow:yi(Me(d),a?f:void 0),"&:focus":{boxShadow:Ze({base:o,border:{width:2,color:o.bg},focusRing:r.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:yi(Me(d),a?f:void 0)},"@media (hover: hover)":{"&:hover":fe(o,l.hovered),"&:active":fe(o,l.pressed),"&[data-hovered]":fe(o,l.hovered)},"&[data-selected]":fe(o,l.pressed)}},(t=i==null?void 0:i.button)==null?void 0:t.root].filter(Boolean)}var Ci=Object.freeze,dp=Object.defineProperty,fp=(e,t)=>Ci(dp(e,"raw",{value:Ci(t||e.slice())})),Si;const pp=_.button(mt,lp,cp),hp=_.div(Si||(Si=fp([`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg-color);
  border-radius: inherit;
  z-index: 1;
  box-shadow: inherit;
`]))),ht=s.forwardRef(function(t,n){const{children:r,disabled:o,fontSize:i=1,icon:a,iconRight:u,justify:l="center",loading:d,mode:f="ghost",padding:h=3,paddingX:b,paddingY:v,paddingTop:x,paddingBottom:g,paddingLeft:D,paddingRight:p,radius:w=2,selected:m,space:C=3,text:y,textAlign:S,tone:P="default",type:E="button",muted:M=!1,width:F,...R}=t,{button:T}=bt(),O=B(l),W=B(h),oe=B(b),I=B(v),H=B(x),Y=B(g),G=B(D),X=B(p),J=B(w),Z=B(C),ue=s.useMemo(()=>({padding:W,paddingX:oe,paddingY:I,paddingTop:H,paddingBottom:Y,paddingLeft:G,paddingRight:X}),[W,oe,I,H,Y,G,X]);return c.jsxs(pp,{"data-ui":"Button",...R,$mode:f,$radius:J,$tone:P,"data-disabled":!!(d||o),"data-selected":m?"":void 0,disabled:!!(d||o),ref:n,type:E,$width:F,children:[!!d&&c.jsx(hp,{children:c.jsx(il,{})}),(a||y||u)&&c.jsx(L,{as:"span",...ue,children:c.jsxs(Ne,{as:"span",justify:O,gap:Z,children:[a&&c.jsxs(ke,{size:i,children:[s.isValidElement(a)&&a,nt.isValidElementType(a)&&s.createElement(a)]}),y&&c.jsx(ke,{muted:M,align:S,size:i,textOverflow:"ellipsis",weight:T.textWeight,children:y}),u&&c.jsxs(ke,{size:i,children:[s.isValidElement(u)&&u,nt.isValidElementType(u)&&s.createElement(u)]})]})}),r&&c.jsx(L,{as:"span",...ue,children:r})]})});var xi=Object.freeze,gp=Object.defineProperty,ko=(e,t)=>xi(gp(e,"raw",{value:xi(t||e.slice())})),wi,Ei,_i;function bp(e){return[mp(e),vp(e)]}function mp(e){const{$checkered:t}=e,{space:n}=$(e.theme);return K(Ei||(Ei=ko([`
    `,`

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `])),t&&K(wi||(wi=ko([`
      background-size: `,"px ",`px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `])),n[3],n[3]))}function vp(e){var t;const{$checkered:n,$focusRing:r}=e,{card:o,color:i,style:a}=$(e.theme),u={width:o.border.width,color:"var(--card-border-color)"};return K(_i||(_i=ko([`
    color-scheme: `,`;

    `,`

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        `,`
      }

      &:not(:disabled) {
        &[data-pressed] {
          `,`
        }

        &[data-selected] {
          `,`
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              `,`
            }

            &:active {
              `,`
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: `,`;
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        `,`
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          `,`
        }

        &[data-selected] {
          `,`
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              `,`
            }

            &:active {
              `,`
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: `,`;
        }
      }
    }

    `,`
  `])),i._dark?"dark":"light",fe(i,i,n),fe(i,i.selectable.default.disabled,n),fe(i,i.selectable.default.pressed,n),fe(i,i.selectable.default.selected,n),fe(i,i.selectable.default.hovered,n),fe(i,i.selectable.default.pressed,n),r?Ze({base:i,border:u,focusRing:o.focusRing}):void 0,fe(i,i.selectable.default.disabled,n),fe(i,i.selectable.default.pressed,n),fe(i,i.selectable.default.selected,n),fe(i,i.selectable.default.hovered,n),fe(i,i.selectable.default.pressed,n),r?Ze({base:i,border:u,focusRing:o.focusRing}):void 0,(t=a==null?void 0:a.card)==null?void 0:t.root)}const Dp=_(L)(yf,mt,b0,bp),Be=s.forwardRef(function(t,n){const{__unstable_checkered:r=!1,__unstable_focusRing:o=!1,as:i,border:a,borderTop:u,borderRight:l,borderBottom:d,borderLeft:f,pressed:h,radius:b=0,scheme:v,selected:x,shadow:g,tone:D="default",...p}=t,w=nt.isValidElementType(i)?i:"div",m=pn(),C=D==="inherit"?m.tone:D;return c.jsx(hf,{scheme:v,tone:C,children:c.jsx(Dp,{"data-as":typeof w=="string"?w:void 0,"data-scheme":m.scheme,"data-ui":"Card","data-tone":C,...p,$border:B(a),$borderTop:B(u),$borderRight:B(l),$borderBottom:B(d),$borderLeft:B(f),$checkered:r,$focusRing:o,$radius:B(b),$shadow:B(g),$tone:C,"data-checkered":r?"":void 0,"data-pressed":h?"":void 0,"data-selected":x?"":void 0,forwardedAs:w,ref:n,selected:x})})});var ki=Object.freeze,yp=Object.defineProperty,al=(e,t)=>ki(yp(e,"raw",{value:ki(t||e.slice())})),Bi,Mi;function Cp(){return K(Bi||(Bi=al([`
    position: relative;
    display: inline-block;
  `])))}function Sp(e){const{color:t,input:n,radius:r}=$(e.theme),{focusRing:o}=n.checkbox;return K(Mi||(Mi=al([`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: `,`;
      width: `,`;
      box-sizing: border-box;
      box-shadow: `,`;
      border-radius: `,`;
      line-height: 1;
      background-color: `,`;

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: `,`;
      box-shadow: `,`;
      color: `,`;
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: `,`;
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: `,`;
    }

    &[data-error] + span {
      background-color: `,`;
      box-shadow: `,`;
      color: `,`;
    }
    &[data-error]&:checked + span {
      background-color: `,`;
      color: `,`;
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: `,`;
    }

    &:disabled + span {
      background-color: `,`;
      box-shadow: `,`;
      color: `,`;
    }
    &:disabled&:checked + span {
      background-color: `,`;
    }

    &[data-read-only] + span {
      background-color: `,`;
      box-shadow: `,`;
      color: `,`;
    }

    &[data-read-only]&:checked + span {
      background-color: `,`;
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `])),j(n.checkbox.size),j(n.checkbox.size),Me({color:t.input.default.enabled.border,width:n.border.width}),j(r[2]),t.input.default.enabled.bg,t.input.default.enabled.fg,Me({color:t.input.default.enabled.fg,width:n.border.width}),t.input.default.enabled.bg,Ze({focusRing:o}),Ze({focusRing:{width:1,offset:1}}),t.input.invalid.enabled.border,Me({width:n.border.width,color:t.input.invalid.enabled.muted.bg}),t.input.default.disabled.fg,t.input.invalid.enabled.muted.bg,t.input.default.enabled.bg,Ze({border:{width:n.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}}),t.input.default.disabled.bg,Me({width:n.border.width,color:t.input.default.disabled.border}),t.input.default.disabled.fg,t.input.default.disabled.muted.bg,t.input.default.readOnly.bg,Me({width:n.border.width,color:t.input.default.readOnly.border}),t.input.default.readOnly.fg,t.input.default.readOnly.muted.bg)}const xp=_.div(Cp),wp=_.input(Sp);s.forwardRef(function(t,n){const{checked:r,className:o,disabled:i,indeterminate:a,customValidity:u,readOnly:l,style:d,...f}=t,h=Te(n);return hn(h,u),s.useEffect(()=>{h.current&&(h.current.indeterminate=a||!1)},[a,h]),c.jsxs(xp,{className:o,"data-ui":"Checkbox",style:d,children:[c.jsx(wp,{"data-read-only":!i&&l?"":void 0,"data-error":u?"":void 0,...f,checked:r,disabled:i||l,type:"checkbox",readOnly:l,ref:h}),c.jsxs("span",{children:[c.jsx(ql,{}),c.jsx(Xl,{})]})]})});var Ai=Object.freeze,Ep=Object.defineProperty,_p=(e,t)=>Ai(Ep(e,"raw",{value:Ai(t||e.slice())})),Fi;function kp(e){let{theme:t}=e;const{color:{syntax:n}}=$(t);return{"&.atrule":{color:n.atrule},"&.attr-name":{color:n.attrName},"&.attr-value":{color:n.attrValue},"&.attribute":{color:n.attribute},"&.boolean":{color:n.boolean},"&.builtin":{color:n.builtin},"&.cdata":{color:n.cdata},"&.char":{color:n.char},"&.class":{color:n.class},"&.class-name":{color:n.className},"&.comment":{color:n.comment},"&.constant":{color:n.constant},"&.deleted":{color:n.deleted},"&.doctype":{color:n.doctype},"&.entity":{color:n.entity},"&.function":{color:n.function},"&.hexcode":{color:n.hexcode},"&.id":{color:n.id},"&.important":{color:n.important},"&.inserted":{color:n.inserted},"&.keyword":{color:n.keyword},"&.number":{color:n.number},"&.operator":{color:n.operator},"&.prolog":{color:n.prolog},"&.property":{color:n.property},"&.pseudo-class":{color:n.pseudoClass},"&.pseudo-element":{color:n.pseudoElement},"&.punctuation":{color:n.punctuation},"&.regex":{color:n.regex},"&.selector":{color:n.selector},"&.string":{color:n.string},"&.symbol":{color:n.symbol},"&.tag":{color:n.tag},"&.unit":{color:n.unit},"&.url":{color:n.url},"&.variable":{color:n.variable}}}function Bp(){return K(Fi||(Fi=_p([`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        `,`
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `])),kp)}const Mp=_.pre(Bp,jd),ul=s.forwardRef(function(t,n){const{children:r,language:o,size:i=2,weight:a,...u}=t,l=typeof o=="string"?o:void 0,d=l?br.hasLanguage(l):!1;return c.jsxs(Mp,{"data-ui":"Code",...u,$size:B(i),$weight:a,ref:n,children:[!(l&&d)&&c.jsx("code",{children:r}),l&&d&&c.jsx(br,{inline:!0,language:l,value:String(r)})]})}),Ap={width:"100%",margin:"0 auto"};function Fp(){return Ap}function zp(e){const{container:t,media:n}=$(e.theme);return ee(n,e.$width,r=>({maxWidth:r==="auto"?"none":j(t[r])}))}const Op=_(L)(Fp,zp),Rp=s.forwardRef(function(t,n){const{as:r,width:o=2,...i}=t;return c.jsx(Op,{"data-ui":"Container",...i,$width:B(o),forwardedAs:r,ref:n})}),Pp=_(L)(qf),Tp=s.forwardRef(function(t,n){const{as:r,autoRows:o,autoCols:i,autoFlow:a,columns:u,gap:l,gapX:d,gapY:f,rows:h,children:b,...v}=t;return c.jsx(Pp,{"data-as":typeof r=="string"?r:void 0,"data-ui":"Grid",...v,$autoRows:B(o),$autoCols:B(i),$autoFlow:B(a),$columns:B(u),$gap:B(l),$gapX:B(d),$gapY:B(f),$rows:B(h),forwardedAs:r,ref:n,children:b})});var zi=Object.freeze,jp=Object.defineProperty,mo=(e,t)=>zi(jp(e,"raw",{value:zi(t||e.slice())})),Oi,Ri,Pi;function $p(e){const{$accent:t,$muted:n}=e,{font:r}=$(e.theme);return K(Pi||(Pi=mo([`
    `,`

    `,`

    & code {
      font-family: `,`;
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `])),t&&K(Oi||(Oi=mo([`
      color: var(--card-accent-fg-color);
    `]))),n&&K(Ri||(Ri=mo([`
      color: var(--card-muted-fg-color);
    `]))),r.code.family)}var Ti=Object.freeze,Wp=Object.defineProperty,Ip=(e,t)=>Ti(Wp(e,"raw",{value:Ti(t||e.slice())})),ji;const Lp=_.div($p,Yo,$d),Vp=_.span(ji||(ji=Ip([`
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
`])));s.forwardRef(function(t,n){const{accent:r=!1,align:o,children:i,muted:a=!1,size:u=2,textOverflow:l,weight:d,...f}=t;let h=i;return l==="ellipsis"&&(h=c.jsx(Vp,{children:h})),c.jsx(Lp,{"data-ui":"Heading",...f,$accent:r,$align:B(o),$muted:a,$size:B(u),$weight:d,ref:n,children:c.jsx("span",{children:h})})});function Np(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}}function Hp(e){const{media:t,space:n}=$(e.theme);return ee(t,e.$space,r=>{const o=j(r===.5?n[1]/2:n[r]);return{margin:"-".concat(o," 0 0 -").concat(o),"& > div":{padding:"".concat(o," 0 0 ").concat(o)}}})}const Gp=_(L)(Np,Hp),Un=s.forwardRef(function(t,n){const{as:r,children:o,space:i,...a}=t,u=s.useMemo(()=>ol(o).filter(Boolean).map((l,d)=>c.jsx("div",{children:l},d)),[o]);return c.jsx(Gp,{"data-ui":"Inline",...a,$space:B(i),forwardedAs:r,ref:n,children:u})});var $i=Object.freeze,Up=Object.defineProperty,qp=(e,t)=>$i(Up(e,"raw",{value:$i(t||e.slice())})),Wi;function Xp(){return K(Wi||(Wi=qp([`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `])))}const Kp=_.kbd(mt,Xp),Yp=s.forwardRef(function(t,n){const{children:r,fontSize:o=0,padding:i=1,radius:a=2,...u}=t;return c.jsx(Kp,{"data-ui":"KBD",...u,$radius:B(a),ref:n,children:c.jsx(L,{as:"span",padding:i,children:c.jsx(ke,{as:"span",size:o,weight:"semibold",children:r})})})}),sl={name:"@sanity/ui/origin",fn(e){let{middlewareData:t,placement:n,rects:r}=e;var o,i;const[a]=n.split("-"),u=r.floating.width,l=r.floating.height,d=((o=t.shift)==null?void 0:o.x)||0,f=((i=t.shift)==null?void 0:i.y)||0;if(u<=0||l<=0)return{};const h=["bottom","top"].includes(a),{originX:b,originY:v}=h?{originX:Ii(.5-d/u,0,1),originY:a==="bottom"?0:1}:{originX:a==="left"?1:0,originY:Ii(.5-f/l,0,1)};return{data:{originX:b,originY:v}}}};function Ii(e,t,n){return Math.min(Math.max(e,t),n)}function Li(e,t,n){const r=t.x-e.x,o=t.y-e.y,i=Math.sqrt(r*r+o*o);return Bo(e,t,Math.min(1,n/i))}function Bo(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n}}function Qp(e){const t=e.length,n=[];for(let r=0;r<t;r+=1){const o=e[r],i=e[r-1],a=e[r+1];if(i&&o.radius){const u=Li(o,i,o.radius),l=Li(o,a,o.radius),d=Bo(u,o,.5),f=Bo(o,l,.5);n.push({type:"point",...u}),n.push({type:"curve",curveEnd:l,startControl:d,endControl:f})}else n.push({type:"point",...o})}return n}function Jp(e){return e.map((t,n)=>t.type==="point"?"".concat(n===0?"M":"L"," ").concat(t.x," ").concat(t.y):t.type==="curve"?"C ".concat(t.startControl.x," ").concat(t.startControl.y," ").concat(t.endControl.x," ").concat(t.endControl.y," ").concat(t.curveEnd.x," ").concat(t.curveEnd.y):"").join(" ")}var Vi=Object.freeze,Zp=Object.defineProperty,tr=(e,t)=>Vi(Zp(e,"raw",{value:Vi(t||e.slice())})),Ni,Hi,Gi;const eh=_.div(e=>{let{$w:t}=e;return K(Ni||(Ni=tr([`
    position: absolute;
    width: `,`px;
    height: `,`px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: `,"px ",`px;
    }

    [data-placement^='top'] > & {
      bottom: -`,`px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -`,`px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -`,`px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -`,`px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `])),t,t,t/2,t/2,t,t,t,t)}),th=_.path(Hi||(Hi=tr([`
  stroke: var(--card-shadow-outline-color);
`]))),nh=_.path(Gi||(Gi=tr([`
  fill: var(--card-bg-color);
`]))),ll=s.forwardRef(function(t,n){const{width:r,height:o,radius:i=0,...a}=t,{card:u}=bt(),l=u.shadow.outline,d=r/2,f=[{x:0,y:0},{x:i,y:0,radius:i},{x:d,y:o-1,radius:i},{x:r-i,y:0,radius:i},{x:r,y:0}],h=Qp(f),b=Jp(h),v="".concat(b),x="".concat(b," M ").concat(r," -1 M 0 -1 Z");return c.jsx(eh,{...a,$w:r,ref:n,children:c.jsxs("svg",{width:r,height:r,viewBox:"0 0 ".concat(r," ").concat(r),children:[c.jsx("mask",{id:"stroke-mask",children:c.jsx("rect",{x:0,y:l,width:r,height:r,fill:"white"})}),c.jsx(th,{d:v,mask:"url(#stroke-mask)",strokeWidth:l*2}),c.jsx(nh,{d:x})]})})}),Mo=Symbol.for("@sanity/ui/context/boundaryElement");pe[Mo]=pe[Mo]||s.createContext(null);const oh=pe[Mo];function gn(e){return!!(e&&typeof e=="object"&&!Array.isArray(e))}const rh={version:0,element:null};function qn(){const e=s.useContext(oh);if(e&&(!gn(e)||e.version!==0))throw new Error("useBoundaryElement(): the context value is not compatible");return e||rh}function Tn(e){let{children:t,condition:n,wrapper:r}=e;return n?r(t):t}function ih(e,t){const n=[];for(let r=0;r<e.length;r+=1)e[r]>t&&n.push(r);return n}function ah(e,t){const n=[];for(let r=0;r<e.length;r+=1)e[r]<=t&&n.push(r);return n}s.forwardRef(function(t,n){const r=bt(),{children:o,media:i=r.media,...a}=t,u=Te(n),[l,d]=s.useState(null),f=Xs(l),h=s.useMemo(()=>{var g;return(g=f==null?void 0:f.border.width)!=null?g:window.innerWidth},[f]),b=s.useMemo(()=>ih(i,h),[i,h]),v=s.useMemo(()=>ah(i,h),[i,h]),x=s.useCallback(g=>{u.current=g,d(g)},[u]);return c.jsx("div",{"data-ui":"ElementQuery",...a,"data-eq-max":b.length?b.join(" "):void 0,"data-eq-min":v.length?v.join(" "):void 0,ref:x,children:o})});function cl(e){if(!gn(e)||e.version!==0)throw new Error("the context value is not compatible");if(!e)throw new Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(e.version===0)return e;throw new Error("could not get layer context")}const Ao=Symbol.for("@sanity/ui/context/layer");pe[Ao]=pe[Ao]||s.createContext(null);const Fo=pe[Ao];function Xn(){const e=s.useContext(Fo);if(!e)throw new Error("useLayer(): missing context value");try{return cl(e)}catch(t){throw t instanceof Error?new Error("useLayer(): ".concat(t.message)):new Error("useLayer(): ".concat(t))}}function uh(e){const t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}}function sh(e){return nr(e)||or(e)}function vt(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function nr(e){return vt(e)&&e.nodeName==="A"}function lh(e){return vt(e)&&e.nodeName==="INPUT"}function or(e){return vt(e)&&e.nodeName==="BUTTON"}function ch(e){return vt(e)&&e.nodeName==="SELECT"}function dh(e){return vt(e)&&e.nodeName==="TEXTAREA"}function zo(e,t){return e.contains(t)||e===t}function fh(e){return!!document.activeElement&&e.contains(document.activeElement)}function ph(e){return e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null?!0:nr(e)?!!e.href&&e.rel!=="ignore":lh(e)?e.type!=="hidden"&&e.type!=="file"&&!e.disabled:or(e)||ch(e)||dh(e)?!e.disabled:!1}function dl(e){if(!ph(e))return!1;try{e.focus()}catch{}return document.activeElement===e}function sn(e){for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(vt(n)&&(dl(n)||sn(n)))return!0}return!1}function fl(e){for(let t=e.childNodes.length-1;t>=0;t--){const n=e.childNodes[t];if(vt(n)&&(dl(n)||fl(n)))return!0}return!1}function hh(e){if(!(e instanceof Element))return!1;const t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}function pl(e){var t;const{children:n,zOffset:r=0}=e,o=s.useContext(Fo),i=o&&cl(o),a=i==null?void 0:i.registerChild,l=((t=i==null?void 0:i.level)!=null?t:0)+1,d=B(r),f=d.length-1,h=Math.min(Ys(),f),b=i?i.zIndex+d[h]:d[h],[,v]=s.useState({}),[x,g]=s.useState(0),D=x===0,p=s.useCallback(m=>{const C=a==null?void 0:a(m);return m!==void 0?v(y=>{var S;const P=(S=y[m])!=null?S:0,E={...y,[m]:P+1};return g(Object.keys(E).length),E}):g(y=>y+1),()=>{m!==void 0?v(y=>{const S={...y};return S[m]===1?(delete S[m],g(Object.keys(S).length)):S[m]-=1,S}):g(y=>y-1),C==null||C()}},[a]);s.useEffect(()=>a==null?void 0:a(l),[l,a]);const w=s.useMemo(()=>({version:0,isTopLayer:D,level:l,registerChild:p,size:x,zIndex:b}),[D,l,p,x,b]);return c.jsx(Fo.Provider,{value:w,children:n})}const gh=_.div({position:"relative"}),bh=s.forwardRef(function(t,n){const{children:r,onActivate:o,onFocus:i,style:a=Ct,...u}=t,{zIndex:l,isTopLayer:d}=Xn(),f=s.useRef(null),h=Te(n),b=s.useRef(d);s.useEffect(()=>{b.current!==d&&d&&(o==null||o({activeElement:f.current})),b.current=d},[d,o]);const v=s.useCallback(x=>{i==null||i(x);const g=h.current,D=document.activeElement;!d||!g||!D||vt(D)&&zo(g,D)&&(f.current=D)},[h,d,i]);return c.jsx(gh,{...u,"data-ui":"Layer",onFocus:v,ref:h,style:{...a,zIndex:l},children:r})}),rr=s.forwardRef(function(t,n){const{children:r,zOffset:o=1,...i}=t;return c.jsx(pl,{zOffset:o,children:c.jsx(bh,{...i,ref:n,children:r})})}),Oo=Symbol.for("@sanity/ui/context/portal"),Mt=Symbol.for("@sanity/ui/context/portal/element");pe[Mt]=null;const mh={version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(pe[Mt]||(pe[Mt]=document.createElement("div"),pe[Mt].setAttribute("data-portal",""),document.body.appendChild(pe[Mt])),pe[Mt])}};pe[Oo]=pe[Oo]||s.createContext(mh);const vh=pe[Oo];function Kn(){const e=s.useContext(vh);if(!e)throw new Error("usePortal(): missing context value");if(!gn(e)||e.version!==0)throw new Error("usePortal(): the context value is not compatible");return e}function ir(e){var t;const{children:n,__unstable_name:r}=e,o=Kn(),i=(r?o.elements&&o.elements[r]:o.element)||((t=o.elements)==null?void 0:t.default);return i?bs.createPortal(n,i):null}var Ui=Object.freeze,Dh=Object.defineProperty,yh=(e,t)=>Ui(Dh(e,"raw",{value:Ui(t||e.slice())})),qi;const Ch=_.div(qi||(qi=yh([`
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  overflow: clip;
`])));s.forwardRef(function(t,n){const{as:r,children:o}=t;return c.jsx(Ch,{"aria-hidden":!0,as:r,"data-ui":"SrOnly",ref:n,children:o})});var Xi=Object.freeze,Sh=Object.defineProperty,hl=(e,t)=>Xi(Sh(e,"raw",{value:Xi(t||e.slice())})),Ki,Yi;const xh=_.div(Ki||(Ki=hl([`
  position: relative;
`]))),Qi=_.div(Yi||(Yi=hl([`
  position: absolute;
  left: 0;
  right: 0;
`])));s.forwardRef(function(t,n){const{as:r="div",gap:o=0,getItemKey:i,items:a=[],onChange:u,renderItem:l,...d}=t,{space:f}=bt(),h=Te(n),b=s.useRef(null),[v,x]=s.useState(0),[g,D]=s.useState(0),[p,w]=s.useState(-1);s.useEffect(()=>{if(!b.current)return;const M=b.current.firstChild;M instanceof HTMLElement&&w(M.offsetHeight)},[l]),s.useEffect(()=>{if(!h.current)return;let M=h.current.parentNode;for(;M&&!hh(M);)M=M.parentNode;if(M){const T=M;if(!(T instanceof HTMLElement))return;const O=()=>{x(T.scrollTop)};T.addEventListener("scroll",O,{passive:!0});const W=new qs(oe=>{D(oe[0].contentRect.height)});return W.observe(T),O(),()=>{T.removeEventListener("scroll",O),W.unobserve(T),W.disconnect()}}const F=()=>{x(window.scrollY)},R=()=>{D(window.innerHeight)};return window.addEventListener("scroll",F,{passive:!0}),window.addEventListener("resize",R),D(window.innerHeight),F(),()=>{window.removeEventListener("scroll",F),window.removeEventListener("resize",R)}},[h]);const m=a.length,C=p?m*(p+f[o])-f[o]:0,y=C?Math.max(Math.floor(v/C*m)-2,0):0,S=C?Math.ceil((v+g)/C*m)+1:0;s.useEffect(()=>{u&&u({fromIndex:y,gap:f[o],itemHeight:p,scrollHeight:g,scrollTop:v,toIndex:S})},[y,o,p,u,g,v,f,S]);const P=s.useMemo(()=>!l||a.length===0?null:p===-1?[c.jsx(Qi,{children:l(a[0])},0)]:a.slice(y,S).map((M,F)=>{const R=y+F,T=l(M),O=i?i(M,R):R;return c.jsx(Qi,{style:{top:R*(p+f[o])},children:T},O)}),[y,o,i,p,a,l,f,S]),E=s.useMemo(()=>({height:C}),[C]);return c.jsx(xh,{as:r,"data-ui":"VirtualList",...d,ref:h,children:c.jsx("div",{ref:b,style:E,children:P})})});const wh=4,It=4,Eh=19,_h=8,kh=2,gl=[0,0,0,0],Bh={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]};function Mh(e){const{apply:t,margins:n,padding:r=0}=e;return{name:"@sanity/ui/size",async fn(o){const{elements:i,placement:a,platform:u,rects:l}=o,{floating:d,reference:f}=l,h=await Ql(o,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:r,rootBoundary:"viewport"});let b=1/0,v=1/0;const x=d.width,g=d.height;a.includes("top")&&(b=x-(h.left+h.right),v=g-h.top),a.includes("right")&&(b=x-h.right,v=g-(h.top+h.bottom)),a.includes("bottom")&&(b=x-(h.left+h.right),v=g-h.bottom),a.includes("left")&&(b=x-h.left,v=g-(h.top+h.bottom)),t({availableWidth:b-n[1]-n[3],availableHeight:v-n[0]-n[2],elements:i,referenceWidth:f.width-n[1]-n[3]});const D=await u.getDimensions(i.floating),p=D.height,w=D.width;return x!==w||g!==p?{reset:{rects:!0}}:{}}}}function Ah(e){const{container:t,mediaIndex:n,width:r}=e,o=r[n],i=o===void 0?r[r.length-1]:o;return typeof i=="number"?t[i]:void 0}function Fh(e){const{boundaryWidth:t,currentWidth:n}=e;if(!(n===void 0&&t===void 0))return Math.min(n??1/0,(t||1/0)-It*2)}var Ji=Object.freeze,zh=Object.defineProperty,Oh=(e,t)=>Ji(zh(e,"raw",{value:Ji(t||e.slice())})),Zi;const Rh=_(vs(Be))(Zi||(Zi=Oh([`
  &:not([hidden]) {
    display: flex;
  }
  flex-direction: column;
  width: max-content;
  min-width: min-content;
`]))),bl=s.memo(s.forwardRef(function(t,n){const{__unstable_margins:r,animate:o,arrow:i,arrowRef:a,arrowX:u,arrowY:l,children:d,padding:f,placement:h,originX:b,originY:v,overflow:x,radius:g,scheme:D,shadow:p,strategy:w,style:m,tone:C,width:y,x:S,y:P,...E}=t,{zIndex:M}=Xn(),F=s.useMemo(()=>r||gl,[r]),R=(S??0)+F[3],T=(P??0)+F[0],O=s.useMemo(()=>({left:R,originX:b,originY:v,position:w,top:T,width:y,zIndex:M,...m}),[b,v,w,m,y,R,T,M]),W=s.useMemo(()=>({left:u!==null?u:void 0,top:l!==null?l:void 0,right:void 0,bottom:void 0}),[u,l]);return c.jsxs(Rh,{"data-ui":"Popover",...E,"data-placement":h,radius:g,ref:n,scheme:D,shadow:p,sizing:"border",style:O,tone:C,...o?Is:{},children:[c.jsx(Ne,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:x,children:c.jsx(Ne,{direction:"column",flex:1,padding:f,children:d})}),i&&c.jsx(ll,{ref:a,style:W,width:Eh,height:_h,radius:kh})]})}));bl.displayName="PopoverCard";const bn=s.memo(s.forwardRef(function(t,n){var r,o,i,a,u,l,d,f,h,b;const{container:v,layer:x}=bt(),g=qn(),{__unstable_margins:D=gl,animate:p=!1,arrow:w=!1,boundaryElement:m=g.element,children:C,constrainSize:y=!1,content:S,disabled:P,fallbackPlacements:E=(o=t.fallbackPlacements)!=null?o:Bh[(r=t.placement)!=null?r:"bottom"],matchReferenceWidth:M,floatingBoundary:F=(i=t.boundaryElement)!=null?i:g.element,onActivate:R,open:T,overflow:O="hidden",padding:W,placement:oe="bottom",portal:I,preventOverflow:H=!0,radius:Y=3,referenceBoundary:G=(a=t.boundaryElement)!=null?a:g.element,referenceElement:X,scheme:J,shadow:Z=3,tone:ue="inherit",width:se="auto",zOffset:ae=x.popover.zOffset,updateRef:ye,...be}=t,N=(u=Xs(m))==null?void 0:u.border,Ce=B(W),Pe=B(Y),He=B(Z),je=B(se),Ue=B(ae),xe=Te(n),U=s.useRef(null),ze="viewport",qe=Ys(),Ae=y||H?N==null?void 0:N.width:void 0,we=Ah({container:v,mediaIndex:qe,width:je}),re=s.useRef(we);s.useEffect(()=>{re.current=we},[we]);const le=Fh({boundaryWidth:Ae,currentWidth:we}),xt=s.useRef(le);s.useEffect(()=>{xt.current=le},[le]);const Dt=s.useRef();s.useEffect(()=>{const me=xe.current;if(!T||!me)return;const et=Dt.current;M?et!==void 0&&(me.style.width="".concat(et,"px")):we!==void 0&&(me.style.width="".concat(we,"px")),typeof le=="number"&&(me.style.maxWidth="".concat(le,"px"))},[we,xe,M,le,T]);const wt=s.useMemo(()=>{const me=[];return(y||H)&&me.push(Ds({boundary:F||void 0,fallbackPlacements:E,padding:It,rootBoundary:ze})),me.push(ys({mainAxis:wh})),(y||M)&&me.push(Mh({apply(et){let{availableWidth:V,availableHeight:ve,elements:$e,referenceWidth:We}=et;Dt.current=We;const jt=re.current,yt=xt.current;M?$e.floating.style.width="".concat(We,"px"):jt!==void 0&&($e.floating.style.width="".concat(jt,"px")),y&&($e.floating.style.maxWidth="".concat(Math.min(V,yt??1/0),"px"),$e.floating.style.maxHeight="".concat(ve,"px"))},boundaryElement:F||void 0,constrainSize:y,margins:D,matchReferenceWidth:M,padding:It})),H&&me.push(Cs({boundary:F||void 0,rootBoundary:ze,padding:It})),w&&me.push(js({element:U,padding:It})),p&&me.push(sl),me.push(Kl({boundary:G||void 0,padding:It,strategy:"referenceHidden"})),me},[p,w,y,E,F,D,M,H,G]),{x:Rt,y:Pt,middlewareData:ot,placement:Et,refs:Xe,strategy:at,update:ut}=Ws({middleware:wt,placement:oe,whileElementsMounted:_s}),_t=(l=ot.hide)==null?void 0:l.referenceHidden,qt=(d=ot.arrow)==null?void 0:d.x,q=(f=ot.arrow)==null?void 0:f.y,ce=(h=ot["@sanity/ui/origin"])==null?void 0:h.originX,ge=(b=ot["@sanity/ui/origin"])==null?void 0:b.originY,Tt=s.useCallback(me=>{U.current=me},[]),Zn=s.useCallback(me=>{xe.current=me,Xe.setFloating(me)},[xe,Xe]),mn=s.useCallback(me=>{Xe.setReference(me);const et=C==null?void 0:C.ref;typeof et=="function"?et(me):et&&(et.current=me)},[C,Xe]),eo=s.useMemo(()=>!C||X?null:s.cloneElement(C,{ref:mn}),[C,X,mn]);if(s.useEffect(()=>{ye&&(typeof ye=="function"?ye(ut):ye&&(ye.current=ut))},[ut,ye]),s.useEffect(()=>{Xe.setReference(X||null)},[X,Xe]),P)return C||c.jsx(c.Fragment,{});const vn=c.jsx(pl,{zOffset:Ue,children:c.jsx(bl,{...be,__unstable_margins:D,animate:p,arrow:w,arrowRef:Tt,arrowX:qt,arrowY:q,hidden:_t,overflow:O,padding:Ce,placement:Et,radius:Pe,ref:Zn,scheme:J,shadow:He,originX:ce,originY:ge,strategy:at,tone:ue,width:M?Dt.current:we,x:Rt,y:Pt,children:S})});return c.jsxs(c.Fragment,{children:[c.jsx(Tn,{condition:p,wrapper:me=>c.jsx(Ss,{children:me}),children:T&&c.jsx(Tn,{condition:!!I,wrapper:me=>c.jsx(ir,{__unstable_name:typeof I=="string"?I:void 0,children:me}),children:vn})}),eo]})}));bn.displayName="Popover";var ea=Object.freeze,Ph=Object.defineProperty,ml=(e,t)=>ea(Ph(e,"raw",{value:ea(t||e.slice())})),ta,na;function Th(){return K(ta||(ta=ml([`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `])))}function jh(e){const{color:t,input:n}=$(e.theme),r=(n.radio.size-n.radio.markSize)/2;return K(na||(na=ml([`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: `,`;
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: `,`;
      width: `,`;
      border-radius: `,`;
      background: `,`;
      box-shadow: `,`;

      &::after {
        content: '';
        position: absolute;
        top: `,`;
        left: `,`;
        height: `,`;
        width: `,`;
        border-radius: `,`;
        background: `,`;
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: `,`;
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: `,`;
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: `,`;
      box-shadow: `,`;
      &::after {
        background: `,`;
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px `,`;
      background: `,`;

      &::after {
        background: `,`;
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px `,`;
      background: `,`;

      &::after {
        background: `,`;
      }
    }
  `])),j(n.radio.size/2),j(n.radio.size),j(n.radio.size),j(n.radio.size/2),t.input.default.enabled.bg,Me({color:t.input.default.enabled.border,width:n.border.width}),j(r),j(r),j(n.radio.markSize),j(n.radio.markSize),j(n.radio.markSize/2),t.input.default.enabled.fg,Ze({border:{width:n.border.width,color:t.input.default.enabled.border},focusRing:n.radio.focusRing}),Me({color:t.input.default.enabled.border,width:n.border.width}),t.input.invalid.enabled.border,Me({width:n.border.width,color:t.input.invalid.enabled.muted.bg}),t.input.invalid.enabled.muted.bg,t.input.default.readOnly.border,t.input.default.readOnly.bg,t.input.default.readOnly.border,t.input.default.disabled.border,t.input.default.disabled.bg,t.input.default.disabled.border)}const $h=_.div(Th),Wh=_.input(jh);s.forwardRef(function(t,n){const{className:r,disabled:o,style:i,customValidity:a,readOnly:u,...l}=t,d=Te(n);return hn(d,a),c.jsxs($h,{className:r,"data-ui":"Radio",style:i,children:[c.jsx(Wh,{"data-read-only":!o&&u?"":void 0,"data-error":a?"":void 0,...l,disabled:o||u,readOnly:u,ref:d,type:"radio"}),c.jsx("span",{})]})});var oa=Object.freeze,Ih=Object.defineProperty,Yn=(e,t)=>oa(Ih(e,"raw",{value:oa(t||e.slice())})),ra,ia,aa,ua;function Lh(){return K(ra||(ra=Yn([`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `])))}function Vh(e){const{font:t}=$(e.theme);return K(ia||(ia=Yn([`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: `,`;
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `])),t.text.family)}function Nh(e){const{color:t,input:n}=$(e.theme);return K(aa||(aa=Yn([`
    /* enabled */
    background-color: `,`;
    color: `,`;
    box-shadow: `,`;

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: `,`;
        color: `,`;
        box-shadow: `,`;
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: `,`;
    }

    /* read-only */
    &[data-read-only] {
      background-color: `,`;
      color: `,`;
      box-shadow: `,`;
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: `,`;
      color: `,`;
      box-shadow: `,`;
    }
  `])),t.input.default.enabled.bg,t.input.default.enabled.fg,Me({color:t.input.default.enabled.border,width:n.border.width}),t.input.default.hovered.bg,t.input.default.hovered.fg,Me({color:t.input.default.hovered.border,width:n.border.width}),Ze({border:{width:n.border.width,color:t.input.default.enabled.border},focusRing:n.select.focusRing}),t.input.default.readOnly.bg,t.input.default.readOnly.fg,Me({color:t.input.default.readOnly.border,width:n.border.width}),t.input.default.disabled.bg,t.input.default.disabled.fg,Me({color:t.input.default.disabled.border,width:n.border.width}))}function Hh(e){return{fontSize:j(e.fontSize),lineHeight:j(e.lineHeight)}}function Gh(e){const{$fontSize:t}=e,{font:n,media:r}=$(e.theme);return ee(r,t,o=>Hh(n.text.sizes[o]||n.text.sizes[2]))}function Uh(){return[mt,Vh,Nh,Gh,d0]}function qh(e){const{color:t}=$(e.theme);return K(ua||(ua=Yn([`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: `,`;

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: `,`;
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: `,`;
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: `,`;
    }
  `])),t.input.default.enabled.fg,t.input.default.hovered.fg,t.input.default.disabled.fg,t.input.default.readOnly.fg)}const ar={root:Lh,input:Uh,iconBox:qh},Xh=_.div(ar.root),Kh=_.select(ar.input),Yh=_(L)(ar.iconBox),vo=s.forwardRef(function(t,n){const{children:r,customValidity:o,disabled:i,fontSize:a=2,padding:u=3,radius:l=2,readOnly:d,space:f=3,...h}=t,b=Te(n);return hn(b,o),c.jsxs(Xh,{"data-ui":"Select",children:[c.jsx(Kh,{"data-read-only":!i&&d?"":void 0,"data-ui":"Select",...h,$fontSize:B(a),$padding:B(u),$radius:B(l),$space:B(f),disabled:i||d,ref:b,children:r}),c.jsx(Yh,{padding:u,children:c.jsx(ke,{size:a,children:c.jsx(xs,{})})})]})}),Qh={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"};function Jh(){return Qh}function Zh(e){const{media:t,space:n}=$(e.theme);return ee(t,e.$space,r=>({gridGap:j(n[r])}))}const eg=_(L)(Jh,Zh),Je=s.forwardRef(function(t,n){const{as:r,space:o,...i}=t;return c.jsx(eg,{"data-as":typeof r=="string"?r:void 0,"data-ui":"Stack",...i,$space:B(o),forwardedAs:r,ref:n})});var sa=Object.freeze,tg=Object.defineProperty,Ot=(e,t)=>sa(tg(e,"raw",{value:sa(t||e.slice())})),la,ca,da,fa,pa,ha,ga;function ng(){return K(la||(la=Ot([`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `])))}function og(){return K(ca||(ca=Ot([`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `])))}function rg(e){const{color:t,input:n}=$(e.theme);return K(da||(da=Ot([`
    --switch-bg-color: `,`;
    --switch-fg-color: `,`;
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: `,`;
    height: `,`;
    border-radius: `,`;

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: `,`;
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: `,`;
      --switch-fg-color: `,`;
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: `,`;
        --switch-fg-color: `,`;
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: `,`;
        --switch-fg-color: `,`;
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: `,`;
      --switch-fg-color: `,`;
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: `,`;
      --switch-fg-color: `,`;
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: `,`;
      --switch-fg-color: `,`;
    }
  `])),t.input.default.enabled.border,t.input.default.enabled.bg,j(n.switch.width),j(n.switch.height),j(n.switch.height/2),Ze({focusRing:n.switch.focusRing}),t.input.default.enabled.fg,t.input.default.enabled.bg,t.input.default.hovered.border,t.input.default.hovered.bg,t.input.default.enabled.fg,t.input.default.enabled.bg,t.input.default.disabled.border,t.input.default.disabled.bg,t.input.default.readOnly.border,t.input.default.readOnly.bg,t.input.default.readOnly.fg,t.input.default.readOnly.bg)}function ig(e){const{input:t}=$(e.theme);return K(fa||(fa=Ot([`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: `,`;
    height: `,`;
    border-radius: `,`;
  `])),j(t.switch.width),j(t.switch.height),j(t.switch.height/2))}function ag(e){const{$indeterminate:t}=e,{input:n}=$(e.theme),r=n.switch.width,o=n.switch.height,i=n.switch.padding,a=o-n.switch.padding*2,u=r-i*2-a,l=r/2-a/2-i,d=t!==!0&&e.$checked===!0;return K(ga||(ga=Ot([`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: `,`;
    top: `,`;
    height: `,`;
    width: `,`;
    border-radius: `,`;
    transition-property: transform;
    transition-duration: `,`ms;
    transition-timing-function: `,`;
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    `,`

    `,`
  `])),j(i),j(i),j(a),j(a),j(a/2),n.switch.transitionDurationMs,n.switch.transitionTimingFunction,d&&K(pa||(pa=Ot([`
      transform: translate3d(`,`px, 0, 0);
    `])),u),t&&K(ha||(ha=Ot([`
      transform: translate3d(`,`px, 0, 0);
    `])),l))}const ug=_.span(ng),sg=_.input(og),lg=_.span(rg),cg=_.span(ig),dg=_.span(ag);s.forwardRef(function(t,n){const{checked:r,className:o,disabled:i,indeterminate:a,readOnly:u,style:l,...d}=t,f=Te(n);return s.useEffect(()=>{f.current&&(f.current.indeterminate=a||!1)},[a,f]),c.jsxs(ug,{className:o,"data-ui":"Switch",style:l,children:[c.jsx(sg,{"data-read-only":!i&&u?"":void 0,...d,checked:a!==!0&&r,disabled:i||u,type:"checkbox",ref:f}),c.jsxs(lg,{"aria-hidden":!0,"data-name":"representation",children:[c.jsx(cg,{}),c.jsx(dg,{$checked:r,$indeterminate:a})]})]})});var ba=Object.freeze,fg=Object.defineProperty,pg=(e,t)=>ba(fg(e,"raw",{value:ba(t||e.slice())})),ma;const hg=_.span(Js),gg=_.span(ma||(ma=pg([`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`]))),bg=_.textarea(Jo,Zs,el),mg=_.div(mt,tl);s.forwardRef(function(t,n){const{border:r=!0,customValidity:o,disabled:i=!1,fontSize:a=2,padding:u=3,radius:l=2,weight:d,...f}=t,h=Te(n),b=pn();return hn(h,o),c.jsx(hg,{"data-ui":"TextArea",children:c.jsxs(gg,{children:[c.jsx(bg,{"data-as":"textarea","data-scheme":b.scheme,"data-tone":b.tone,...f,$fontSize:B(a),$padding:B(u),$scheme:b.scheme,$space:B(0),$tone:b.tone,$weight:d,disabled:i,ref:h}),c.jsx(mg,{$radius:B(l),$scheme:b.scheme,$tone:b.tone,"data-border":r?"":void 0,"data-scheme":b.scheme,"data-tone":b.tone})]})})});var va=Object.freeze,vg=Object.defineProperty,Gt=(e,t)=>va(vg(e,"raw",{value:va(t||e.slice())})),Da,ya,Ca,Sa,xa,wa;const Dg={zIndex:2},yg=_(Be).attrs({forwardedAs:"span"})(Js),Cg=_.span(Da||(Da=Gt([`
  flex: 1;
  min-width: 0;
  display: block;
  position: relative;
`]))),Sg=_(Be).attrs({forwardedAs:"span"})(ya||(ya=Gt([`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`]))),xg=_(Be).attrs({forwardedAs:"span"})(Ca||(Ca=Gt([`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & > span {
    display: block;
    margin: -1px;
  }
`]))),wg=_.input(Jo,Zs,el),Eg=_.span(mt,tl),_g=_(L)(Sa||(Sa=Gt([`
  position: absolute;
  top: 0;
  left: 0;
`]))),kg=_(L)(xa||(xa=Gt([`
  position: absolute;
  top: 0;
  right: 0;
`]))),Bg=_(Be)(wa||(wa=Gt([`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
`]))),Mg=_(ht)({"&:not([hidden])":{display:"block"}}),Ro=s.forwardRef(function(t,n){const{__unstable_disableFocusRing:r,border:o=!0,clearButton:i,disabled:a=!1,fontSize:u=2,icon:l,iconRight:d,onClear:f,padding:h=3,prefix:b,radius:v=2,readOnly:x,space:g=3,suffix:D,customValidity:p,type:w="text",weight:m,...C}=t,y=Te(n),S=pn(),P=B(u),E=B(h),M=B(v),F=B(g),R=!!i,T=!!l,O=!!d,W=!!D,oe=!!b;hn(y,p);const I=s.useCallback(ae=>{ae.preventDefault(),ae.stopPropagation()},[]),H=s.useCallback(ae=>{var ye;ae.preventDefault(),ae.stopPropagation(),f&&f(),(ye=y.current)==null||ye.focus()},[f,y]),Y=s.useMemo(()=>b&&c.jsx(Sg,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:M,sizing:"border",tone:"inherit",children:c.jsx("span",{children:b})}),[b,M]),G=s.useMemo(()=>c.jsxs(Eg,{$hasPrefix:oe,$unstableDisableFocusRing:r,$hasSuffix:W,$radius:M,$scheme:S.scheme,$tone:S.tone,"data-border":o?"":void 0,"data-scheme":S.scheme,"data-tone":S.tone,children:[l&&c.jsx(_g,{padding:E,children:c.jsxs(ke,{size:P,children:[s.isValidElement(l)&&l,nt.isValidElementType(l)&&s.createElement(l)]})}),!R&&d&&c.jsx(kg,{padding:E,children:c.jsxs(ke,{size:P,children:[s.isValidElement(d)&&d,nt.isValidElementType(d)&&s.createElement(d)]})})]}),[r,o,P,l,d,E,M,S,R,oe,W]),X=s.useMemo(()=>E.map(ae=>ae===0?0:ae===1||ae===2?1:ae-2),[E]),J=s.useMemo(()=>E.map(ae=>ae===0||ae===1?0:ae===2?1:ae-1),[E]),Z=s.useMemo(()=>typeof i=="object"?i:Ct,[i]),ue=s.useMemo(()=>!a&&!x&&i&&c.jsx(Bg,{forwardedAs:"span",padding:X,style:Dg,tone:p?"critical":"inherit",children:c.jsx(Mg,{"aria-label":"Clear","data-qa":"clear-button",fontSize:P,icon:ws,mode:"bleed",padding:J,radius:M,...Z,onClick:H,onMouseDown:I})}),[i,X,J,Z,p,a,P,H,I,M,x]),se=s.useMemo(()=>D&&c.jsx(xg,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:M,sizing:"border",tone:"inherit",children:c.jsx("span",{children:D})}),[M,D]);return c.jsxs(yg,{"data-ui":"TextInput",tone:S.tone,children:[Y,c.jsxs(Cg,{children:[c.jsx(wg,{"data-as":"input","data-scheme":S.scheme,"data-tone":S.tone,...C,$fontSize:P,$iconLeft:T,$iconRight:O||R,$padding:E,$scheme:S.scheme,$space:F,$tone:S.tone,$weight:m,disabled:a,readOnly:x,ref:y,type:w}),G,ue]}),se]})});function Ag(e){const[t,n]=s.useState(e),r=s.useRef(),o=s.useCallback((i,a)=>{const u=()=>{n(i)};if(r.current&&(clearTimeout(r.current),r.current=void 0),!a)return u();r.current=setTimeout(u,a)},[]);return[t,o]}const Fg=15,zg=6,Og=2,Rg=4,Bn=4,Pg={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]};var Ea=Object.freeze,Tg=Object.defineProperty,jg=(e,t)=>Ea(Tg(e,"raw",{value:Ea(t||e.slice())})),_a;const $g=_(vs(Be))(_a||(_a=jg([""]))),vl=s.memo(s.forwardRef(function(t,n){const{animate:r,arrow:o,arrowRef:i,arrowX:a,arrowY:u,children:l,originX:d,originY:f,padding:h,placement:b,radius:v,scheme:x,shadow:g,style:D,...p}=t,w=s.useMemo(()=>({originX:d,originY:f,...D}),[d,f,D]),m=s.useMemo(()=>({left:a!==null?a:void 0,top:u!==null?u:void 0,right:void 0,bottom:void 0}),[a,u]);return c.jsxs($g,{"data-ui":"Tooltip__card",...p,"data-placement":b,padding:h,radius:v,ref:n,scheme:x,shadow:g,style:w,...r?Is:{},children:[l,o&&c.jsx(ll,{ref:i,style:m,width:Fg,height:zg,radius:Og})]})}));vl.displayName="TooltipCard";const Po=Symbol.for("@sanity/ui/context/tooltipDelayGroup");pe[Po]=pe[Po]||s.createContext(null);const Wg=pe[Po];function Ig(){return s.useContext(Wg)}var ka=Object.freeze,Lg=Object.defineProperty,Vg=(e,t)=>ka(Lg(e,"raw",{value:ka(t||e.slice())})),Ba;const Ng=_(rr)(Ba||(Ba=Vg([`
  pointer-events: none;
  max-width: `,`px;
`])),e=>{let{$maxWidth:t}=e;return t}),Mn=s.forwardRef(function(t,n){var r,o,i,a,u,l,d;const f=qn(),{layer:h}=bt(),{animate:b=!1,arrow:v=!1,boundaryElement:x=f==null?void 0:f.element,children:g,content:D,disabled:p,fallbackPlacements:w=(o=t.fallbackPlacements)!=null?o:Pg[(r=t.placement)!=null?r:"bottom"],padding:m=2,placement:C="bottom",portal:y,radius:S=2,scheme:P,shadow:E=2,zOffset:M=h.tooltip.zOffset,delay:F,...R}=t,T=B(w),O=Te(n),[W,oe]=s.useState(null),I=s.useRef(null),H="viewport",Y=Kn(),G=typeof y=="string"?((i=Y.elements)==null?void 0:i[y])||null:Y.element,X=s.useMemo(()=>{const q=[...x?[x.offsetWidth]:[],(G==null?void 0:G.offsetWidth)||document.body.offsetWidth];return Math.min(...q)-Bn*2},[x,G==null?void 0:G.offsetWidth]),J=s.useMemo(()=>{const q=[];return q.push(Ds({boundary:x||void 0,fallbackPlacements:T,padding:Bn,rootBoundary:H})),q.push(ys({mainAxis:Rg})),q.push(Cs({boundary:x||void 0,rootBoundary:H,padding:Bn})),v&&q.push(js({element:I,padding:Bn})),b&&q.push(sl),q},[b,v,x,T]),{floatingStyles:Z,placement:ue,middlewareData:se,refs:ae,update:ye}=Ws({middleware:J,placement:C,whileElementsMounted:_s}),be=(a=se.arrow)==null?void 0:a.x,N=(u=se.arrow)==null?void 0:u.y,Ce=(l=se["@sanity/ui/origin"])==null?void 0:l.originX,Pe=(d=se["@sanity/ui/origin"])==null?void 0:d.originY,He=s.useId(),[je,Ue]=Ag(!1),xe=Ig(),U=je||(xe==null?void 0:xe.openTooltipId)===He,ze=xe!==null,qe=typeof F=="number"?F:(F==null?void 0:F.open)||0,Ae=typeof F=="number"?F:(F==null?void 0:F.close)||0,we=ze?xe.openDelay:qe,re=ze?xe.closeDelay:Ae,le=s.useCallback((q,ce)=>{if(ze)if(q){const ge=ce?0:we;xe.setIsGroupActive(q,ge),xe.setOpenTooltipId(He,ge)}else{const Tt=re>200?re:200;xe.setIsGroupActive(q,Tt),xe.setOpenTooltipId(null,ce?0:re)}else Ue(q,ce?0:q?we:re)},[ze,xe,we,He,re,Ue]),xt=s.useCallback(q=>{var ce,ge;le(!1),(ge=(ce=g==null?void 0:g.props)==null?void 0:ce.onBlur)==null||ge.call(ce,q)},[g==null?void 0:g.props,le]),Dt=s.useCallback(q=>{var ce,ge;le(!1,!0),(ge=g==null?void 0:(ce=g.props).onClick)==null||ge.call(ce,q)},[g==null?void 0:g.props,le]),wt=s.useCallback(q=>{var ce,ge;le(!1,!0),(ge=g==null?void 0:(ce=g.props).onContextMenu)==null||ge.call(ce,q)},[g==null?void 0:g.props,le]),Rt=s.useCallback(q=>{var ce,ge;le(!0),(ge=(ce=g==null?void 0:g.props)==null?void 0:ce.onFocus)==null||ge.call(ce,q)},[g==null?void 0:g.props,le]),Pt=s.useCallback(q=>{var ce,ge;le(!0),(ge=(ce=g==null?void 0:g.props)==null?void 0:ce.onMouseEnter)==null||ge.call(ce,q)},[g==null?void 0:g.props,le]),ot=s.useCallback(q=>{var ce,ge;le(!1),(ge=(ce=g==null?void 0:g.props)==null?void 0:ce.onMouseLeave)==null||ge.call(ce,q)},[g==null?void 0:g.props,le]);s.useEffect(()=>{if(!U)return;function q(ce){if(!W)return;W===ce.target||ce.target instanceof Node&&W.contains(ce.target)||(le(!1),window.removeEventListener("mousemove",q))}return window.addEventListener("mousemove",q),()=>{window.removeEventListener("mousemove",q)}},[U,W,le]),s.useEffect(()=>{p&&U&&le(!1)},[p,le,U]),s.useEffect(()=>{!D&&U&&le(!1)},[D,le,U]),s.useEffect(()=>ae.setReference(W),[W,ae]),s.useEffect(()=>{if(!U)return;function q(ce){ce.key==="Escape"&&le(!1,!0)}return window.addEventListener("keydown",q),()=>{window.removeEventListener("keydown",q)}},[le,U]);const Et=s.useCallback(q=>{I.current=q,ye()},[ye]),Xe=s.useCallback(q=>{O.current=q,ae.setFloating(q)},[O,ae]),at=g==null?void 0:g.ref,ut=s.useCallback(q=>{typeof at=="function"?at(q):at&&(at.current=q),oe(q)},[at]),_t=s.useMemo(()=>g?s.cloneElement(g,{onBlur:xt,onFocus:Rt,onMouseEnter:Pt,onMouseLeave:ot,onClick:Dt,onContextMenu:wt,ref:ut}):null,[g,xt,Dt,wt,Rt,Pt,ot,ut]);if(!_t)return c.jsx(c.Fragment,{});if(p)return _t;const qt=c.jsx(Ng,{"data-ui":"Tooltip",...R,ref:Xe,style:Z,zOffset:M,$maxWidth:X,children:c.jsx(vl,{...R,animate:b,arrow:v,arrowRef:Et,arrowX:be,arrowY:N,originX:Ce,originY:Pe,padding:m,placement:ue,radius:S,ref:Xe,scheme:P,shadow:E,children:D})});return c.jsxs(c.Fragment,{children:[c.jsx(Tn,{condition:b,wrapper:q=>c.jsx(Ss,{children:q}),children:U&&c.jsx(Tn,{condition:!!y,wrapper:q=>c.jsx(ir,{__unstable_name:typeof y=="string"?y:void 0,children:q}),children:qt})}),_t]})});var Ma=Object.freeze,Hg=Object.defineProperty,Qn=(e,t)=>Ma(Hg(e,"raw",{value:Ma(t||e.slice())})),Aa,Fa,za,Oa;const Gg=_.div(Aa||(Aa=Qn([`
  line-height: 0;
`]))),Ug=_(L)(Fa||(Fa=Qn([`
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`]))),qg=qo(za||(za=Qn([`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`]))),Xg=_(ms)(Oa||(Oa=Qn([`
  animation: `,` 500ms linear infinite;
`])),qg);function Kg(e){const{children:t,id:n,onSelect:r,selected:o,value:i}=e,a=s.useCallback(()=>{setTimeout(()=>{r(i)},0)},[r,i]),u=s.useCallback(l=>{l.key==="Enter"&&!sh(l.currentTarget)&&a()},[a]);return c.jsx("li",{"aria-selected":o,"data-ui":"AutocompleteOption",id:n,role:"option",onClick:a,onKeyDown:u,children:t})}function Yg(e,t){return t.type==="input/change"?{...e,activeValue:null,focused:!0,query:t.query}:t.type==="input/focus"?{...e,focused:!0}:t.type==="root/blur"?{...e,focused:!1,query:null}:t.type==="root/clear"?{...e,activeValue:null,query:null,value:null}:t.type==="root/escape"?{...e,focused:!1,query:null}:t.type==="root/open"?{...e,query:e.query||t.query}:t.type==="root/setActiveValue"?{...e,activeValue:t.value,listFocused:t.listFocused||e.listFocused}:t.type==="root/setListFocused"?{...e,listFocused:t.listFocused}:t.type==="value/change"?{...e,activeValue:t.value,query:null,value:t.value}:e}const Qg=["Control","Shift","Alt","Enter","Home","End","PageUp","PageDown","Meta","Tab","CapsLock"],Jg="bottom-start",Zg=["bottom-start","top-start"],eb=(e,t)=>t?t.value:e,tb=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>-1;s.forwardRef(function(t,n){const{border:r=!0,customValidity:o,disabled:i,filterOption:a,fontSize:u=2,icon:l,id:d,listBox:f=Ct,loading:h,onBlur:b,onChange:v,onFocus:x,onQueryChange:g,onSelect:D,openButton:p,options:w,padding:m=3,popover:C=Ct,prefix:y,radius:S=2,readOnly:P,relatedElements:E,renderOption:M,renderPopover:F,renderValue:R=eb,suffix:T,value:O,...W}=t,[oe,I]=s.useReducer(Yg,{activeValue:O||null,focused:!1,listFocused:!1,query:null,value:O||null}),{activeValue:H,focused:Y,listFocused:G,query:X,value:J}=oe,Z=s.useCallback(V=>{let{value:ve}=V;return c.jsx(Be,{"data-as":"button",padding:m,radius:2,tone:"inherit",children:c.jsx(ke,{size:u,textOverflow:"ellipsis",children:ve})})},[u,m]),ue=typeof M=="function"?M:Z,se=typeof a=="function"?a:tb,ae=s.useRef(null),ye=s.useRef(null),be=s.useRef(null),N=s.useRef(null),Ce=s.useRef(!1),Pe=s.useRef(J),He=s.useRef(O),je=s.useRef(!1),Ue=Te(n),xe="".concat(d,"-listbox"),U=Array.isArray(w)?w:fn,ze=B(m),qe=s.useMemo(()=>J!==null?U.find(V=>V.value===J):void 0,[U,J]),Ae=s.useMemo(()=>U.filter(V=>X?se(X,V):!0),[se,U,X]),we=Ae.length,re=H?"".concat(d,"-option-").concat(H):void 0,le=X!==null&&h||Y&&X!==null,xt=s.useCallback(V=>{setTimeout(()=>{if(je.current)return;const ve=(E||[]).concat(ae.current?[ae.current]:[],ye.current?[ye.current]:[]);let $e=!1;if(document.activeElement){for(const We of ve)if(We===document.activeElement||We.contains(document.activeElement)){$e=!0;break}}$e===!1&&(I({type:"root/blur"}),je.current=!1,g&&g(null),b&&b(V))},0)},[b,g,E]),Dt=s.useCallback(V=>{const ve=N.current,$e=V.target instanceof HTMLElement?V.target:null,We=(ve==null?void 0:ve.contains($e))||!1;We!==Ce.current&&(Ce.current=We,I({type:"root/setListFocused",listFocused:We}))},[]),wt=s.useCallback(V=>{var ve;I({type:"value/change",value:V}),je.current=!1,D&&D(V),Pe.current=V,v&&v(V),g&&g(null),(ve=be.current)==null||ve.focus()},[v,D,g]),Rt=s.useCallback(V=>{var ve,$e;if(V.key==="ArrowDown"){if(V.preventDefault(),!we)return;const yt=Ae.find(to=>to.value===H),Dn=yt?Ae.indexOf(yt):-1,Xt=Ae[(Dn+1)%we];Xt&&I({type:"root/setActiveValue",value:Xt.value,listFocused:!0});return}if(V.key==="ArrowUp"){if(V.preventDefault(),!we)return;const yt=Ae.find(to=>to.value===H),Dn=yt?Ae.indexOf(yt):-1,Xt=Ae[Dn===-1?we-1:(we+Dn-1)%we];Xt&&I({type:"root/setActiveValue",value:Xt.value,listFocused:!0});return}if(V.key==="Escape"){I({type:"root/escape"}),je.current=!1,g&&g(null),(ve=be.current)==null||ve.focus();return}const We=V.target,jt=N.current;if((jt===We||jt!=null&&jt.contains(We))&&!Qg.includes(V.key)){($e=be.current)==null||$e.focus();return}},[H,Ae,we,g]),Pt=s.useCallback(V=>{const ve=V.currentTarget.value;I({type:"input/change",query:ve}),g&&g(ve)},[g]),ot=s.useCallback(V=>{Y||(I({type:"input/focus"}),x&&x(V))},[Y,x]),Et=s.useCallback(()=>{je.current=!0},[]),Xe=s.useCallback(()=>{je.current=!1},[]),at=s.useCallback(()=>{var V;I({type:"root/clear"}),Pe.current="",v&&v(""),g&&g(null),(V=be.current)==null||V.focus()},[v,g]),ut=s.useCallback(()=>{I({type:"input/focus"})},[]);s.useEffect(()=>{if(O!==He.current){He.current=O,O!==void 0&&(I({type:"value/change",value:O}),Pe.current=O);return}O!==Pe.current&&(Pe.current=O||null,I({type:"value/change",value:O||null}))},[O]),s.useEffect(()=>{!Y&&Pe.current&&I({type:"root/setActiveValue",value:Pe.current})},[Y]),s.useEffect(()=>{const V=N.current;if(!V)return;const ve=Ae.find($e=>$e.value===H);if(ve){const $e=Ae.indexOf(ve),We=V.childNodes[$e];if(We){if(fh(We))return;sn(We)}}},[H,Ae]);const _t=s.useCallback(V=>{be.current=V,Ue.current=V},[Ue]),qt=s.useMemo(()=>{if(!h&&!i&&J)return{"aria-label":"Clear",onFocus:ut}},[i,ut,h,J]),q=s.useMemo(()=>ze.map(V=>V===0?0:V===1||V===2?1:V-2),[ze]),ce=s.useMemo(()=>ze.map(V=>Math.max(V-1,0)),[ze]),ge=s.useMemo(()=>typeof p=="object"?p:Ct,[p]),Tt=s.useCallback(V=>{I({type:"root/open",query:J?R(J,qe):""}),ge.onClick&&ge.onClick(V),uh(()=>{var ve;return(ve=be.current)==null?void 0:ve.focus()})},[qe,ge,R,J]),Zn=s.useMemo(()=>!i&&!P&&p?c.jsx(L,{"aria-hidden":le,padding:q,children:c.jsx(ht,{"aria-label":"Open",disabled:le,fontSize:u,icon:xs,mode:"bleed",padding:ce,...ge,onClick:Tt})}):void 0,[i,le,u,Tt,p,q,ce,ge,P]),mn=s.useMemo(()=>X===null?J!==null?R(J,qe):"":X,[qe,X,R,J]),eo=c.jsx(Ro,{...W,"aria-activedescendant":re,"aria-autocomplete":"list","aria-expanded":le,"aria-owns":xe,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",border:r,clearButton:qt,customValidity:o,disabled:i,fontSize:u,icon:l,iconRight:h&&Xg,id:d,inputMode:"search",onChange:Pt,onClear:at,onFocus:ot,padding:ze,prefix:y,radius:S,readOnly:P,ref:_t,role:"combobox",spellCheck:!1,suffix:T||Zn,value:mn}),vn=s.useCallback(V=>{var ve;V.key==="Tab"&&G&&((ve=be.current)==null||ve.focus())},[G]),me=s.useMemo(()=>Ae.length===0?null:c.jsx(Ug,{"data-ui":"AutoComplete__results",onKeyDown:vn,padding:1,...f,tabIndex:-1,children:c.jsx(Je,{as:"ul","aria-multiselectable":!1,"data-ui":"AutoComplete__resultsList",id:xe,ref:N,role:"listbox",space:1,children:Ae.map(V=>{const ve=H!==null?V.value===H:qe===V;return c.jsx(Kg,{id:"".concat(d,"-option-").concat(V.value),onSelect:wt,selected:ve,value:V.value,children:s.cloneElement(ue(V),{disabled:h,selected:ve,tabIndex:G&&ve?0:-1})},V.value)})})}),[H,qe,Ae,wt,vn,d,f,xe,G,h,ue]),et=s.useMemo(()=>F?F({content:me,hidden:!le,inputElement:be.current,onMouseEnter:Et,onMouseLeave:Xe},ye):we===0?null:c.jsx(bn,{arrow:!1,constrainSize:!0,content:me,fallbackPlacements:Zg,matchReferenceWidth:!0,onMouseEnter:Et,onMouseLeave:Xe,open:le,overflow:"auto",placement:Jg,portal:!0,radius:S,ref:ye,referenceElement:be.current,...C}),[me,le,we,Et,Xe,C,S,F]);return c.jsxs(Gg,{"data-ui":"Autocomplete",onBlur:xt,onFocus:Dt,onKeyDown:Rt,ref:ae,children:[eo,et]})});var Ra=Object.freeze,nb=Object.defineProperty,Dl=(e,t)=>Ra(nb(e,"raw",{value:Ra(t||e.slice())})),Pa,Ta;const ob=_.ol(Pa||(Pa=Dl([`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  white-space: nowrap;
  line-height: 0;
`]))),rb=_(ht)(Ta||(Ta=Dl([`
  appearance: none;
  margin: -4px;
`])));s.forwardRef(function(t,n){const{children:r,maxLength:o,separator:i,space:a=2,...u}=t,l=B(a),[d,f]=s.useState(!1),[h,b]=s.useState(null),[v,x]=s.useState(null),g=s.useCallback(()=>f(!1),[]),D=s.useCallback(()=>f(!0),[]);Gn(g,[h,v]);const p=s.useMemo(()=>s.Children.toArray(r).filter(m=>s.isValidElement(m)),[r]),w=s.useMemo(()=>{const m=p.length;if(o&&m>o){const C=Math.ceil(o/2),y=Math.floor(o/2);return[...p.slice(0,C-1),c.jsx(bn,{constrainSize:!0,content:c.jsx(Je,{as:"ol",overflow:"auto",padding:l,space:l,children:p.slice(C-1,m-y)}),open:d,placement:"top",portal:!0,ref:x,children:c.jsx(rb,{fontSize:1,mode:"bleed",onClick:d?g:D,padding:1,ref:b,selected:d,text:"…"})},"button"),...p.slice(m-y)]}return p},[g,D,o,d,p,l]);return c.jsx(ob,{"data-ui":"Breadcrumbs",...u,ref:n,children:w.map((m,C)=>c.jsxs(s.Fragment,{children:[C>0&&c.jsx(L,{"aria-hidden":!0,as:"li",paddingX:l,children:i||c.jsx(ke,{muted:!0,children:"/"})}),c.jsx(L,{as:"li",children:m})]},C))})});var ja=Object.freeze,ib=Object.defineProperty,$a=(e,t)=>ja(ib(e,"raw",{value:ja(t||e.slice())})),Wa,Ia;function ab(e){let{theme:t}=e;const{color:n}=$(t);return{"&:not([hidden])":{display:"flex"},top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",outline:"none",background:n.backdrop}}function ub(e){const{media:t}=$(e.theme);return ee(t,e.$position,n=>({"&&":{position:n}}))}function sb(e){return e.animate?K(Ia||(Ia=$a([`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  `]))):K(Wa||(Wa=$a([""])))}const To=Symbol.for("@sanity/ui/context/dialog");pe[To]=pe[To]||s.createContext({version:0});const lb=pe[To];function cb(){return s.useContext(lb)}var La=Object.freeze,db=Object.defineProperty,Ut=(e,t)=>La(db(e,"raw",{value:La(t||e.slice())})),Va,Na,Ha,Ga,Ua,qa;function jo(e,t,n){return!e||!t?!0:zo(e,n)||zo(t,n)}const fb=_(rr)(nl,ab,ub,sb),pb=_(Rp)(Va||(Va=Ut([`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`]))),hb=_(Be)(Na||(Na=Ut([`
  &:not([hidden]) {
    display: flex;
  }
  width: 100%;
  min-height: 0;
  max-height: 100%;
  overflow: hidden;
  overflow: clip;
`]))),gb=_(Ne)(Ha||(Ha=Ut([`
  flex: 1;
  min-height: 0;
  width: 100%;
`]))),bb=_(L)(Ga||(Ga=Ut([`
  position: relative;
  z-index: 2;
`]))),mb=_(L)(Ua||(Ua=Ut([`
  position: relative;
  z-index: 1;
  overflow: auto;
  outline: none;
`]))),vb=_(L)(qa||(qa=Ut([`
  position: relative;
  z-index: 3;
`]))),Db=s.forwardRef(function(t,n){var r;const{__unstable_autoFocus:o,__unstable_hideCloseButton:i,children:a,contentRef:u,footer:l,header:d,id:f,onClickOutside:h,onClose:b,portal:v,radius:x,scheme:g,shadow:D,width:p}=t,w=Kn(),m=v?((r=w.elements)==null?void 0:r[v])||null:w.element,C=qn().element,y=B(x),S=B(D),P=B(p),E=Te(n),[M,F]=s.useState(null),R=s.useRef(null),T=Xn(),{isTopLayer:O}=T,W="".concat(f,"_label"),oe=!!b&&i===!1,I=!!d||oe;s.useEffect(()=>{o&&E.current&&sn(E.current)},[o,E]),Ks(s.useCallback(G=>{if(!O||!b)return;const X=document.activeElement;X&&!jo(C,m,X)||G.key==="Escape"&&(G.preventDefault(),G.stopPropagation(),b())},[C,O,b,m])),Gn(s.useCallback(G=>{if(!O||!h)return;const X=G.target;X&&!jo(C,m,X)||h()},[C,O,h,m]),[M]);const H=s.useCallback(G=>{F(G),E.current=G},[E]),Y=s.useCallback(G=>{R.current=G,typeof u=="function"?u(G):u&&(u.current=G)},[u]);return c.jsx(pb,{"data-ui":"DialogCard",width:P,children:c.jsx(hb,{radius:y,ref:H,scheme:g,shadow:S,children:c.jsxs(gb,{direction:"column",children:[I&&c.jsx(bb,{children:c.jsxs(Ne,{align:"center",padding:3,children:[c.jsx(L,{flex:1,padding:2,children:d&&c.jsx(ke,{id:W,size:1,weight:"semibold",children:d})}),oe&&c.jsx(L,{flex:"none",children:c.jsx(ht,{"aria-label":"Close dialog",disabled:!b,icon:ws,mode:"bleed",onClick:b,padding:2})})]})}),c.jsx(mb,{flex:1,ref:Y,tabIndex:-1,children:a}),l&&c.jsx(vb,{children:l})]})})})});s.forwardRef(function(t,n){var r;const o=cb(),{layer:i}=bt(),{__unstable_autoFocus:a=!0,__unstable_hideCloseButton:u=!1,cardRadius:l=4,cardShadow:d=3,children:f,contentRef:h,footer:b,header:v,id:x,onActivate:g,onClickOutside:D,onClose:p,onFocus:w,padding:m=3,portal:C,position:y=o.position||"fixed",scheme:S,width:P=0,zOffset:E=o.zOffset||i.dialog.zOffset,animate:M=!1,...F}=t,R=Kn(),T=C?((r=R.elements)==null?void 0:r[C])||null:R.element,O=qn().element,W=B(l),oe=B(m),I=B(y),H=B(P),Y=B(E),G=s.useRef(null),X=s.useRef(null),J=s.useRef(null),Z=s.useRef(null),ue=s.useCallback(be=>{w==null||w(be);const N=be.target,Ce=J.current;if(Ce&&N===G.current){fl(Ce);return}if(Ce&&N===X.current){sn(Ce);return}vt(be.target)&&(Z.current=be.target)},[w]),se="".concat(x,"_label"),ae=s.useRef(),ye=s.useCallback(()=>{ae.current&&clearTimeout(ae.current),ae.current=setTimeout(()=>{const be=document.activeElement;if(be&&!jo(O,T,be)){const N=Z.current;if(!N||!document.body.contains(N)){const Ce=J.current;Ce&&sn(Ce);return}N.focus()}},0)},[O,T]);return c.jsx(ir,{__unstable_name:C,children:c.jsxs(fb,{...F,$padding:oe,$position:I,"aria-labelledby":se,"aria-modal":!0,"data-ui":"Dialog",id:x,onActivate:g,onClick:ye,onFocus:ue,ref:n,role:"dialog",zOffset:Y,animate:M,children:[c.jsx("div",{ref:G,tabIndex:0}),c.jsx(Db,{__unstable_autoFocus:a,__unstable_hideCloseButton:u,contentRef:h,footer:b,header:v,id:x,onClickOutside:D,onClose:p,portal:C,radius:W,ref:J,scheme:S,shadow:d,width:H,children:f}),c.jsx("div",{ref:X,tabIndex:0})]})})});var Xa=Object.freeze,yb=Object.defineProperty,yl=(e,t)=>Xa(yb(e,"raw",{value:Xa(t||e.slice())})),Ka,Ya;const Cb=_.kbd(Ka||(Ka=yl([`
  font: inherit;
  padding: 1px;

  &:not([hidden]) {
    display: block;
  }
`]))),Sb=_(Yp)(Ya||(Ya=yl([`
  &:not([hidden]) {
    display: block;
  }
`]))),Cl=s.forwardRef(function(t,n){const{fontSize:r,keys:o,padding:i,radius:a,space:u=.5,...l}=t,d=B(u);return!o||o.length===0?c.jsx(c.Fragment,{}):c.jsx(Cb,{"data-ui":"Hotkeys",...l,ref:n,children:c.jsx(Un,{as:"span",space:d,children:o.map((f,h)=>c.jsx(Sb,{fontSize:r,padding:i,radius:a,children:f},h))})})}),$o=Symbol.for("@sanity/ui/context/menu");pe[$o]=pe[$o]||s.createContext(null);const Sl=pe[$o];function xb(e){return nr(e)&&e.getAttribute("data-disabled")!=="true"||or(e)&&!e.disabled}function Wt(e){return e.filter(xb)}function wb(e,t){const n=[];let r=t;for(;r!==e;){const o=r.parentElement;if(!o)return n;const a=Array.from(o.childNodes).indexOf(r);if(n.unshift(a),o===e)return n;r=o}return n}const Qa=[];function Eb(e,t){if(!e)return;const n=new WeakMap;for(const o of t)n.set(o,wb(e,o));const r=(o,i)=>{const a=n.get(o)||Qa,u=n.get(i)||Qa,l=Math.max(a.length,u.length);for(let d=0;d<l;d+=1){const f=a[d]||-1,h=u[d]||-1;if(f!==h)return f-h}return 0};t.sort(r)}function _b(e){const{onKeyDown:t,originElement:n,shouldFocus:r}=e,o=s.useRef([]),[i,a]=s.useState(null),[u,l]=s.useState(-1),d=s.useRef(u),f=o.current[u]||null,h=!!i,b=s.useCallback(p=>{l(p),d.current=p},[]),v=s.useCallback((p,w)=>{if(!p)return()=>{};if(o.current.indexOf(p)===-1&&(o.current.push(p),Eb(i,o.current)),w){const m=o.current.indexOf(p);b(m)}return()=>{const m=o.current.indexOf(p);m>-1&&o.current.splice(m,1)}},[i,b]),x=s.useCallback(p=>{if(p.key==="Tab"){n&&n.focus();return}if(p.key==="Home"){p.preventDefault(),p.stopPropagation();const m=Wt(o.current)[0];if(!m)return;const C=o.current.indexOf(m);b(C);return}if(p.key==="End"){p.preventDefault(),p.stopPropagation();const w=Wt(o.current),m=w[w.length-1];if(!m)return;const C=o.current.indexOf(m);b(C);return}if(p.key==="ArrowUp"){p.preventDefault(),p.stopPropagation();const w=Wt(o.current),m=w.length;if(m===0)return;const C=o.current[d.current];let y=w.indexOf(C);y=(y-1+m)%m;const S=w[y],P=o.current.indexOf(S);b(P);return}if(p.key==="ArrowDown"){p.preventDefault(),p.stopPropagation();const w=Wt(o.current),m=w.length;if(m===0)return;const C=o.current[d.current];let y=w.indexOf(C);y=(y+1)%m;const S=w[y],P=o.current.indexOf(S);b(P);return}t&&t(p)},[t,n,b]),g=s.useCallback(p=>{const w=p.currentTarget,m=o.current.indexOf(w);b(m)},[b]),D=s.useCallback(()=>{b(-2),i==null||i.focus()},[b,i]);return s.useEffect(()=>{if(!h)return;const p=window.requestAnimationFrame(()=>{const w=d.current;if(w===-1){if(r==="first"){const y=Wt(o.current)[0];if(y){const S=o.current.indexOf(y);b(S),d.current=S}}if(r==="last"){const C=Wt(o.current),y=C[C.length-1];if(y){const S=o.current.indexOf(y);b(S),d.current=S}}return}const m=o.current[w]||null;m==null||m.focus()});return()=>{window.cancelAnimationFrame(p)}},[u,h,b,r]),{activeElement:f,activeIndex:u,handleItemMouseEnter:g,handleItemMouseLeave:D,handleKeyDown:x,mount:v,rootElement:i,setRootElement:a}}var Ja=Object.freeze,kb=Object.defineProperty,Bb=(e,t)=>Ja(kb(e,"raw",{value:Ja(t||e.slice())})),Za;const Mb=_(L)(Za||(Za=Bb([`
  outline: none;
  overflow: auto;
`])));s.forwardRef(function(t,n){const{children:r,focusFirst:o,focusLast:i,onClickOutside:a,onEscape:u,onItemClick:l,onItemSelect:d,onKeyDown:f,originElement:h,padding:b=1,registerElement:v,shouldFocus:x=t.focusFirst&&"first"||t.focusLast&&"last"||null,space:g=1,...D}=t,p=Te(n),{isTopLayer:w}=Xn(),{activeElement:m,activeIndex:C,handleItemMouseEnter:y,handleItemMouseLeave:S,handleKeyDown:P,mount:E,rootElement:M,setRootElement:F}=_b({onKeyDown:f,originElement:h,shouldFocus:x}),R=s.useCallback(O=>{F(O),p.current=O},[p,F]);s.useEffect(()=>{d&&d(C)},[C,d]),Gn(s.useCallback(O=>w&&a&&a(O),[w,a]),[M]),Ks(s.useCallback(O=>{w&&O.key==="Escape"&&(O.stopPropagation(),u&&u())},[w,u])),s.useEffect(()=>{if(!(!M||!v))return v(M)},[v,M]);const T=s.useMemo(()=>({version:0,activeElement:m,activeIndex:C,mount:E,onClickOutside:a,onEscape:u,onItemClick:l,onItemMouseEnter:y,onItemMouseLeave:S,registerElement:v,onMouseEnter:y,onMouseLeave:S}),[m,C,E,y,S,a,u,l,v]);return c.jsx(Sl.Provider,{value:T,children:c.jsx(Mb,{"data-ui":"Menu",...D,onKeyDown:P,padding:b,ref:R,role:"menu",tabIndex:-1,children:c.jsx(Je,{space:g,children:r})})})});s.forwardRef(function(t,n){const{__unstable_disableRestoreFocusOnClose:r=!1,boundaryElement:o,button:i,id:a,menu:u,onClose:l,onOpen:d,placement:f,popoverScheme:h,portal:b=!0,popover:v,popoverRadius:x,preventOverflow:g}=t,[D,p]=s.useState(!1),[w,m]=s.useState(null),[C,y]=s.useState(null),[S,P]=s.useState([]),E=s.useRef(D);s.useEffect(()=>{d&&D&&!E.current&&d()},[d,D]),s.useEffect(()=>{l&&!D&&E.current&&l()},[l,D]),s.useEffect(()=>{E.current=D},[D]);const M=s.useCallback(()=>{p(Z=>!Z),m(null)},[]),F=s.useCallback(Z=>{D&&Z.preventDefault()},[D]),R=s.useCallback(Z=>{if(Z.key==="ArrowDown"||Z.key==="Enter"||Z.key===" "){Z.preventDefault(),p(!0),m("first");return}if(Z.key==="ArrowUp"){Z.preventDefault(),p(!0),m("last");return}},[]),T=s.useCallback(Z=>{const ue=Z.target;if(ue instanceof Node&&!(C&&(ue===C||C.contains(ue)))){for(const se of S)if(ue===se||se.contains(ue))return;p(!1)}},[C,S]),O=s.useCallback(()=>{p(!1),!r&&C&&C.focus()},[C,r]),W=s.useCallback(Z=>{const ue=Z.relatedTarget;if(ue instanceof Node){for(const se of S)if(se===ue||se.contains(ue))return;p(!1)}},[S]),oe=s.useCallback(()=>{p(!1),!r&&C&&C.focus()},[C,r]),I=s.useCallback(Z=>(P(ue=>ue.concat([Z])),()=>{P(ue=>ue.filter(se=>se!==Z))}),[]),H=s.useMemo(()=>({"aria-labelledby":a,onBlurCapture:W,onClickOutside:T,onEscape:O,onItemClick:oe,originElement:C,registerElement:I,shouldFocus:w}),[C,T,O,oe,a,W,I,w]),Y=nt.isElement(u)?s.cloneElement(u,H):null,G=s.useCallback(Z=>{typeof n=="function"?n(Z):n&&(n.current=Z),y(Z)},[n]),X=s.useMemo(()=>nt.isElement(i)?s.cloneElement(i,{"data-ui":"MenuButton",id:a,onClick:M,onKeyDown:R,onMouseDown:F,"aria-haspopup":!0,"aria-expanded":D,ref:G,selected:D}):null,[i,M,R,F,a,D,G]),J=s.useMemo(()=>({boundaryElement:o,overflow:"auto",placement:f,portal:b,preventOverflow:g,radius:x,scheme:h,...v||{}}),[o,f,x,h,b,g,v]);return c.jsx(bn,{"data-ui":"MenuButton__popover",...J,content:Y,open:D,children:X||c.jsx(c.Fragment,{})})});var eu=Object.freeze,Ab=Object.defineProperty,Fb=(e,t)=>eu(Ab(e,"raw",{value:eu(t||e.slice())})),tu;_.hr(tu||(tu=Fb([`
  height: 1px;
  border: 0;
  background: var(--card-hairline-soft-color);
  margin: 0;
`])));var nu=Object.freeze,zb=Object.defineProperty,xl=(e,t)=>nu(zb(e,"raw",{value:nu(t||e.slice())})),ou,ru;function Ob(){return K(ou||(ou=xl([`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `])))}function Rb(e){var t;const{$tone:n}=e,{color:r,style:o}=$(e.theme),i=r.selectable[n];return K(ru||(ru=xl([`
    `,`

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        `,`
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          `,`
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          `,`
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              `,`
            }

            &:active {
              `,`
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        `,`
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          `,`
        }

        &[data-selected] {
          `,`
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              `,`
            }
            &:active {
              `,`
            }
          }
        }
      }
    }

    `,`
  `])),fe(r,i.enabled),fe(r,i.disabled),fe(r,i.pressed),fe(r,i.selected),fe(r,i.hovered),fe(r,i.pressed),fe(r,i.disabled),fe(r,i.pressed),fe(r,i.selected),fe(r,i.hovered),fe(r,i.pressed),(t=o==null?void 0:o.card)==null?void 0:t.root)}const Pb=_(L)(mt,Ob,Rb);function Tb(){const e=s.useContext(Sl);if(!e)throw new Error("useMenu(): missing context value");if(!gn(e)||e.version!==0)throw new Error("useMenu(): the context value is not compatible");return e}s.forwardRef(function(t,n){const{as:r="button",children:o,disabled:i,fontSize:a=1,hotkeys:u,icon:l,iconRight:d,onClick:f,padding:h=3,paddingX:b,paddingY:v,paddingTop:x,paddingRight:g,paddingBottom:D,paddingLeft:p,pressed:w,radius:m=2,selected:C,space:y=3,text:S,tone:P="default",...E}=t,{scheme:M}=pn(),F=Tb(),{activeElement:R,mount:T,onItemClick:O,onItemMouseEnter:W=F.onMouseEnter,onItemMouseLeave:oe=F.onMouseLeave}=F,[I,H]=s.useState(null),Y=!!R&&R===I;s.useEffect(()=>T(I,C),[T,I,C]);const G=Te(n),X=s.useCallback(se=>{i||(f&&f(se),O&&O())},[i,f,O]),J=s.useMemo(()=>({padding:h,paddingX:b,paddingY:v,paddingTop:x,paddingRight:g,paddingBottom:D,paddingLeft:p}),[h,b,v,x,g,D,p]),Z=B(a).map(se=>se-1),ue=s.useCallback(se=>{G.current=se,H(se)},[G]);return c.jsxs(Pb,{"data-ui":"MenuItem",...E,"aria-pressed":r==="button"&&w,"data-pressed":r!=="button"&&w?"":void 0,"data-selected":Y?"":void 0,"data-disabled":i?"":void 0,forwardedAs:r,$radius:B(m),$padding:B(0),$tone:i?"default":P,$scheme:M,disabled:i,onClick:X,onMouseEnter:W,onMouseLeave:oe,ref:ue,role:"menuitem",tabIndex:-1,type:r==="button"?"button":void 0,children:[(l||S||d)&&c.jsxs(Ne,{as:"span",gap:y,align:"center",...J,children:[l&&c.jsxs(ke,{size:a,children:[s.isValidElement(l)&&l,nt.isValidElementType(l)&&s.createElement(l)]}),S&&c.jsx(L,{flex:1,children:c.jsx(ke,{size:a,textOverflow:"ellipsis",weight:"medium",children:S})}),u&&c.jsx(Cl,{fontSize:Z,keys:u,style:{marginTop:-4,marginBottom:-4}}),d&&c.jsxs(ke,{size:a,children:[s.isValidElement(d)&&d,nt.isValidElementType(d)&&s.createElement(d)]})]}),o&&c.jsx(L,{as:"span",...J,children:o})]})});var iu=Object.freeze,jb=Object.defineProperty,jn=(e,t)=>iu(jb(e,"raw",{value:iu(t||e.slice())})),au,uu,su,lu;const $b=qo(au||(au=jn([`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`]))),Wb=K(uu||(uu=jn([`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: `,`;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`])),$b),Ib=K(lu||(lu=jn([`
  opacity: `,`;
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    `,`
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`])),e=>{let{$visible:t}=e;return t?1:0},e=>{let{$animated:t}=e;return t?Wb:K(su||(su=jn([`
            background-color: var(--card-skeleton-color-from);
          `])))}),Lb=_(L)(mt,Ib),Vb=s.forwardRef(function(t,n){const{animated:r=!1,delay:o,radius:i,...a}=t,[u,l]=s.useState(!o);return s.useEffect(()=>{if(!o)return l(!0);const d=setTimeout(()=>{l(!0)},o);return()=>{clearTimeout(d)}},[o]),c.jsx(Lb,{...a,$animated:r,$radius:B(i),$visible:u,ref:n})}),Jn=_(Vb)(e=>{const{$size:t,$style:n}=e,{font:r,media:o}=$(e.theme),i=r[n];return ee(o,t,u=>{const l=i.sizes[u];return{height:l.lineHeight-l.ascenderHeight-l.descenderHeight}})});s.forwardRef(function(t,n){const{size:r=2,...o}=t,i=B(r);return c.jsx(Jn,{...o,$size:i,ref:n,$style:"text"})});s.forwardRef(function(t,n){const{size:r=2,...o}=t,i=B(r);return c.jsx(Jn,{...o,$size:i,ref:n,$style:"label"})});s.forwardRef(function(t,n){const{size:r=2,...o}=t,i=B(r);return c.jsx(Jn,{...o,$size:i,ref:n,$style:"heading"})});s.forwardRef(function(t,n){const{size:r=2,...o}=t,i=B(r);return c.jsx(Jn,{...o,$size:i,ref:n,$style:"code"})});var cu=Object.freeze,Nb=Object.defineProperty,Hb=(e,t)=>cu(Nb(e,"raw",{value:cu(t||e.slice())})),du;const Gb=_(ht)(du||(du=Hb([`
  max-width: 100%;
`])));s.forwardRef(function(t,n){const{icon:r,id:o,focused:i,fontSize:a=1,label:u,onClick:l,onFocus:d,padding:f=2,selected:h,...b}=t,v=s.useRef(null),x=s.useRef(!1),g=s.useCallback(()=>{x.current=!1},[]),D=s.useCallback(m=>{x.current=!0,d&&d(m)},[d]),p=Te(n);s.useEffect(()=>{i&&!x.current&&(v.current&&v.current.focus(),x.current=!0)},[i]);const w=m=>{v.current=m,p.current=m};return c.jsx(Gb,{"data-ui":"Tab",...b,"aria-selected":h?"true":"false",fontSize:a,icon:r,id:o,mode:"bleed",onClick:l,onBlur:g,onFocus:D,padding:f,ref:w,role:"tab",selected:h,tabIndex:h?0:-1,text:u,type:"button"})});var fu=Object.freeze,Ub=Object.defineProperty,qb=(e,t)=>fu(Ub(e,"raw",{value:fu(t||e.slice())})),pu;function Xb(e){return!!e}const Kb=_(Un)(pu||(pu=qb([`
  & > div {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }
`])));s.forwardRef(function(t,n){const{children:r,...o}=t,[i,a]=s.useState(-1),l=s.useMemo(()=>r.filter(Xb),[r]).map((b,v)=>s.cloneElement(b,{focused:i===v,key:v,onFocus:()=>f(v)})),d=l.length,f=s.useCallback(b=>{a(b)},[]),h=s.useCallback(b=>{b.key==="ArrowLeft"&&a(v=>(v+d-1)%d),b.key==="ArrowRight"&&a(v=>(v+1)%d)},[d]);return c.jsx(Kb,{"data-ui":"TabList",...o,onKeyDown:h,ref:n,role:"tablist",children:l})});s.forwardRef(function(t,n){const{flex:r,...o}=t;return c.jsx(L,{"data-ui":"TabPanel",...o,flex:r,ref:n,role:"tabpanel",tabIndex:t.tabIndex===void 0?0:t.tabIndex,children:t.children})});var hu=Object.freeze,Yb=Object.defineProperty,wl=(e,t)=>hu(Yb(e,"raw",{value:hu(t||e.slice())})),gu,bu;_(Be)(gu||(gu=wl([`
  pointer-events: all;
`])));_(Ne)(bu||(bu=wl([`
  overflow-x: auto;
`])));const Wo=Symbol.for("@sanity/ui/context/toast");pe[Wo]=pe[Wo]||s.createContext(null);const Qb=pe[Wo];var mu=Object.freeze,Jb=Object.defineProperty,El=(e,t)=>mu(Jb(e,"raw",{value:mu(t||e.slice())})),vu,Du;_(rr)(vu||(vu=El([`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`])));_.div(Du||(Du=El([`
  box-sizing: border-box;
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 420px;
  width: 100%;
`])));function Zb(){const e=s.useContext(Qb);if(!e)throw new Error("useToast(): missing context value");if(!gn(e)||e.version!==0)throw new Error("useToast(): the context value is not compatible");return e}function em(e,t,n){var r;const o=t.indexOf(n),i=t.slice(0,o),a=i.length;for(let u=a-1;u>=0;u-=1){const l=i[u].getAttribute("data-tree-key");if(!l)continue;const d=l.split("/");d.pop();const f=[];let h=!0;for(let b=0;b<d.length;b+=1){f.push(d[b]);const v=f.join("/");if(!((r=e[v])!=null&&r.expanded)){h=!1;break}}if(h)return i[u]}return null}function tm(e,t,n){var r;const o=t.indexOf(n),i=t.slice(o),a=t.length;for(let u=1;u<a;u+=1){if(!i[u])continue;const l=i[u].getAttribute("data-tree-key");if(!l)continue;const d=l.split("/");d.pop();const f=[];let h=!0;for(let b=0;b<d.length;b+=1){f.push(d[b]);const v=f.join("/");if(!((r=e[v])!=null&&r.expanded)){h=!1;break}}if(h)return i[u]}return null}function yu(e){if(e.getAttribute("role")==="treeitem"&&e.focus(),e.getAttribute("role")==="none"){const t=e.firstChild;t&&t instanceof HTMLElement&&t.focus()}}const Io=Symbol.for("@sanity/ui/context/tree");pe[Io]=pe[Io]||s.createContext(null);const $n=pe[Io],nm=s.memo(s.forwardRef(function(t,n){const{children:r,space:o=1,onFocus:i,...a}=t,u=Te(n),[l,d]=s.useState(null),f=s.useRef(l),h=s.useMemo(()=>[],[]),[b,v]=s.useState([]),[x,g]=s.useState({}),D=s.useRef(x);s.useEffect(()=>{f.current=l},[l]),s.useEffect(()=>{D.current=x},[x]);const p=s.useCallback((S,P,E,M)=>(g(F=>({...F,[P]:{element:S,expanded:E}})),M&&d(S),()=>{g(F=>{const R={...F};return delete R[P],R})}),[]),w=s.useCallback((S,P)=>{g(E=>{const M=E[S];return M?{...E,[S]:{...M,expanded:P}}:E})},[]),m=s.useMemo(()=>({version:0,focusedElement:l||b[0]||null,level:0,path:h,registerItem:p,setExpanded:w,setFocusedElement:d,space:o,state:x}),[l,b,h,p,w,o,x]),C=s.useCallback(S=>{var P;if(f.current){if(S.key==="ArrowDown"){S.preventDefault();const E=tm(D.current,b,f.current);E&&(yu(E),d(E));return}if(S.key==="ArrowUp"){S.preventDefault();const E=em(D.current,b,f.current);E&&(yu(E),d(E));return}if(S.key==="ArrowLeft"){S.preventDefault();const E=f.current.getAttribute("data-tree-key");if(!E)return;const M=D.current[E];if(!M)return;if(M.expanded)g(F=>{const R=F[E];return R?{...F,[E]:{...R,expanded:!1}}:F});else{const F=E.split("/");F.pop();const R=F.join("/"),T=R&&D.current[R];T&&(T.element.focus(),d(T.element))}return}if(S.key==="ArrowRight"){S.preventDefault();const E=f.current.getAttribute("data-tree-key");if(!E)return;(P=D.current[E])!=null&&P.expanded||g(M=>{const F=M[E];return F?{...M,[E]:{...F,expanded:!0}}:M});return}}},[b]),y=s.useCallback(S=>{d(S.target),i==null||i(S)},[i]);return s.useEffect(()=>{if(!u.current)return;const S=Array.from(u.current.querySelectorAll('[data-ui="TreeItem"]'));v(S)},[r,u]),c.jsx($n.Provider,{value:m,children:c.jsx(Je,{as:"ul","data-ui":"Tree",...a,onFocus:y,onKeyDown:C,ref:u,role:"tree",space:o,children:r})})}));nm.displayName="Tree";var Cu=Object.freeze,om=Object.defineProperty,ur=(e,t)=>Cu(om(e,"raw",{value:Cu(t||e.slice())})),Su,xu,wu;function rm(){return K(Su||(Su=ur([`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `])))}function im(e){const t="default",{color:n}=$(e.theme),r=n.selectable[t];return K(xu||(xu=ur([`
    &[role='none'] {
      & > [role='treeitem'] {
        `,`
      }

      &[data-selected] > [role='treeitem'] {
        `,`
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          `,`
        }

        & > [role='treeitem']:focus {
          `,`
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        `,`
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        `,`
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          `,`
        }

        &:focus > [data-ui='TreeItem__box'] {
          `,`
        }
      }
    }
  `])),fe(n,r.enabled),fe(n,r.pressed),fe(n,r.hovered),fe(n,r.selected),fe(n,r.enabled),fe(n,r.pressed),fe(n,r.hovered),fe(n,r.selected))}function am(e){const{$level:t}=e,{space:n}=$(e.theme);return K(wu||(wu=ur([`
    padding-left: `,`;

    &[data-as='a'] {
      text-decoration: none;
    }
  `])),j(n[2]*t))}function _l(){const e=s.useContext($n);if(!e)throw new Error("Tree: missing context value");return e}const Eu=s.memo(function(t){const{children:n,expanded:r=!1,...o}=t,i=_l();return c.jsx(Je,{as:"ul","data-ui":"TreeGroup",...o,hidden:!r,marginTop:i.space,role:"group",space:i.space,children:n})});var _u=Object.freeze,um=Object.defineProperty,sm=(e,t)=>_u(um(e,"raw",{value:_u(t||e.slice())})),ku;const Bu=s.memo(_.li(rm,im)),Mu=_(L).attrs({forwardedAs:"a"})(am),lm=_(ke)(ku||(ku=sm([`
  & > svg {
    transition: transform 100ms;
  }
`])));s.memo(function(t){const{children:n,expanded:r=!1,fontSize:o=1,href:i,icon:a,id:u,linkAs:l,muted:d,onClick:f,padding:h=2,selected:b=!1,space:v=2,text:x,weight:g,...D}=t,p=s.useRef(null),w=s.useRef(null),m=_l(),{path:C,registerItem:y,setExpanded:S,setFocusedElement:P}=m,E=s.useId(),M=u||E,F=s.useMemo(()=>C.concat([M||""]),[M,C]),R=F.join("/"),T=m.state[R],O=m.focusedElement===p.current,W=(T==null?void 0:T.expanded)===void 0?r:(T==null?void 0:T.expanded)||!1,oe=m.focusedElement&&m.focusedElement===p.current?0:-1,I=s.useMemo(()=>({...m,level:m.level+1,path:F}),[F,m]),H=s.useCallback(X=>{f&&f(X);const J=X.target;J instanceof HTMLElement&&(J.getAttribute("data-ui")==="TreeItem"||J.closest('[data-ui="TreeItem__box"]'))&&(X.stopPropagation(),S(R,!W),P(p.current))},[W,R,f,S,P]),Y=s.useCallback(X=>{if(O&&X.key==="Enter"){const J=w.current||p.current;J==null||J.click()}},[O]);s.useEffect(()=>{if(p.current)return y(p.current,F.join("/"),W,b)},[W,F,y,b]);const G=c.jsxs(Ne,{padding:h,children:[c.jsxs(L,{marginRight:v,style:{visibility:a||n?"visible":"hidden",pointerEvents:"none"},children:[a&&c.jsx(ke,{muted:d,size:o,weight:g,children:s.createElement(a)}),!a&&c.jsx(lm,{muted:d,size:o,weight:g,children:c.jsx(Yl,{style:{transform:W?"rotate(90deg)":void 0}})})]}),c.jsx(L,{flex:1,children:c.jsx(ke,{muted:d,size:o,textOverflow:"ellipsis",weight:g,children:x})})]});return i?c.jsxs(Bu,{"data-selected":b?"":void 0,"data-tree-id":M,"data-tree-key":R,"data-ui":"TreeItem",...D,onClick:H,ref:p,role:"none",children:[c.jsx(Mu,{$level:m.level,"aria-expanded":W,as:l,"data-ui":"TreeItem__box",href:i,ref:w,role:"treeitem",tabIndex:oe,children:G}),c.jsx($n.Provider,{value:I,children:n&&c.jsx(Eu,{hidden:!W,children:n})})]}):c.jsxs(Bu,{"data-selected":b?"":void 0,"data-ui":"TreeItem","data-tree-id":M,"data-tree-key":R,...D,"aria-expanded":W,onClick:H,onKeyDown:Y,ref:p,role:"treeitem",tabIndex:oe,children:[c.jsx(Mu,{$level:m.level,as:"div","data-ui":"TreeItem__box",children:G}),c.jsx($n.Provider,{value:I,children:n&&c.jsx(Eu,{expanded:W,children:n})})]})});var sr={exports:{}},cm=["alignContent","MozAlignContent","WebkitAlignContent","MSAlignContent","OAlignContent","alignItems","MozAlignItems","WebkitAlignItems","MSAlignItems","OAlignItems","alignSelf","MozAlignSelf","WebkitAlignSelf","MSAlignSelf","OAlignSelf","all","MozAll","WebkitAll","MSAll","OAll","animation","MozAnimation","WebkitAnimation","MSAnimation","OAnimation","animationDelay","MozAnimationDelay","WebkitAnimationDelay","MSAnimationDelay","OAnimationDelay","animationDirection","MozAnimationDirection","WebkitAnimationDirection","MSAnimationDirection","OAnimationDirection","animationDuration","MozAnimationDuration","WebkitAnimationDuration","MSAnimationDuration","OAnimationDuration","animationFillMode","MozAnimationFillMode","WebkitAnimationFillMode","MSAnimationFillMode","OAnimationFillMode","animationIterationCount","MozAnimationIterationCount","WebkitAnimationIterationCount","MSAnimationIterationCount","OAnimationIterationCount","animationName","MozAnimationName","WebkitAnimationName","MSAnimationName","OAnimationName","animationPlayState","MozAnimationPlayState","WebkitAnimationPlayState","MSAnimationPlayState","OAnimationPlayState","animationTimingFunction","MozAnimationTimingFunction","WebkitAnimationTimingFunction","MSAnimationTimingFunction","OAnimationTimingFunction","backfaceVisibility","MozBackfaceVisibility","WebkitBackfaceVisibility","MSBackfaceVisibility","OBackfaceVisibility","background","MozBackground","WebkitBackground","MSBackground","OBackground","backgroundAttachment","MozBackgroundAttachment","WebkitBackgroundAttachment","MSBackgroundAttachment","OBackgroundAttachment","backgroundBlendMode","MozBackgroundBlendMode","WebkitBackgroundBlendMode","MSBackgroundBlendMode","OBackgroundBlendMode","backgroundClip","MozBackgroundClip","WebkitBackgroundClip","MSBackgroundClip","OBackgroundClip","backgroundColor","MozBackgroundColor","WebkitBackgroundColor","MSBackgroundColor","OBackgroundColor","backgroundImage","MozBackgroundImage","WebkitBackgroundImage","MSBackgroundImage","OBackgroundImage","backgroundOrigin","MozBackgroundOrigin","WebkitBackgroundOrigin","MSBackgroundOrigin","OBackgroundOrigin","backgroundPosition","MozBackgroundPosition","WebkitBackgroundPosition","MSBackgroundPosition","OBackgroundPosition","backgroundRepeat","MozBackgroundRepeat","WebkitBackgroundRepeat","MSBackgroundRepeat","OBackgroundRepeat","backgroundSize","MozBackgroundSize","WebkitBackgroundSize","MSBackgroundSize","OBackgroundSize","blockSize","MozBlockSize","WebkitBlockSize","MSBlockSize","OBlockSize","border","MozBorder","WebkitBorder","MSBorder","OBorder","borderBlockEnd","MozBorderBlockEnd","WebkitBorderBlockEnd","MSBorderBlockEnd","OBorderBlockEnd","borderBlockEndColor","MozBorderBlockEndColor","WebkitBorderBlockEndColor","MSBorderBlockEndColor","OBorderBlockEndColor","borderBlockEndStyle","MozBorderBlockEndStyle","WebkitBorderBlockEndStyle","MSBorderBlockEndStyle","OBorderBlockEndStyle","borderBlockEndWidth","MozBorderBlockEndWidth","WebkitBorderBlockEndWidth","MSBorderBlockEndWidth","OBorderBlockEndWidth","borderBlockStart","MozBorderBlockStart","WebkitBorderBlockStart","MSBorderBlockStart","OBorderBlockStart","borderBlockStartColor","MozBorderBlockStartColor","WebkitBorderBlockStartColor","MSBorderBlockStartColor","OBorderBlockStartColor","borderBlockStartStyle","MozBorderBlockStartStyle","WebkitBorderBlockStartStyle","MSBorderBlockStartStyle","OBorderBlockStartStyle","borderBlockStartWidth","MozBorderBlockStartWidth","WebkitBorderBlockStartWidth","MSBorderBlockStartWidth","OBorderBlockStartWidth","borderBottom","MozBorderBottom","WebkitBorderBottom","MSBorderBottom","OBorderBottom","borderBottomColor","MozBorderBottomColor","WebkitBorderBottomColor","MSBorderBottomColor","OBorderBottomColor","borderBottomLeftRadius","MozBorderBottomLeftRadius","WebkitBorderBottomLeftRadius","MSBorderBottomLeftRadius","OBorderBottomLeftRadius","borderBottomRightRadius","MozBorderBottomRightRadius","WebkitBorderBottomRightRadius","MSBorderBottomRightRadius","OBorderBottomRightRadius","borderBottomStyle","MozBorderBottomStyle","WebkitBorderBottomStyle","MSBorderBottomStyle","OBorderBottomStyle","borderBottomWidth","MozBorderBottomWidth","WebkitBorderBottomWidth","MSBorderBottomWidth","OBorderBottomWidth","borderCollapse","MozBorderCollapse","WebkitBorderCollapse","MSBorderCollapse","OBorderCollapse","borderColor","MozBorderColor","WebkitBorderColor","MSBorderColor","OBorderColor","borderImage","MozBorderImage","WebkitBorderImage","MSBorderImage","OBorderImage","borderImageOutset","MozBorderImageOutset","WebkitBorderImageOutset","MSBorderImageOutset","OBorderImageOutset","borderImageRepeat","MozBorderImageRepeat","WebkitBorderImageRepeat","MSBorderImageRepeat","OBorderImageRepeat","borderImageSlice","MozBorderImageSlice","WebkitBorderImageSlice","MSBorderImageSlice","OBorderImageSlice","borderImageSource","MozBorderImageSource","WebkitBorderImageSource","MSBorderImageSource","OBorderImageSource","borderImageWidth","MozBorderImageWidth","WebkitBorderImageWidth","MSBorderImageWidth","OBorderImageWidth","borderInlineEnd","MozBorderInlineEnd","WebkitBorderInlineEnd","MSBorderInlineEnd","OBorderInlineEnd","borderInlineEndColor","MozBorderInlineEndColor","WebkitBorderInlineEndColor","MSBorderInlineEndColor","OBorderInlineEndColor","borderInlineEndStyle","MozBorderInlineEndStyle","WebkitBorderInlineEndStyle","MSBorderInlineEndStyle","OBorderInlineEndStyle","borderInlineEndWidth","MozBorderInlineEndWidth","WebkitBorderInlineEndWidth","MSBorderInlineEndWidth","OBorderInlineEndWidth","borderInlineStart","MozBorderInlineStart","WebkitBorderInlineStart","MSBorderInlineStart","OBorderInlineStart","borderInlineStartColor","MozBorderInlineStartColor","WebkitBorderInlineStartColor","MSBorderInlineStartColor","OBorderInlineStartColor","borderInlineStartStyle","MozBorderInlineStartStyle","WebkitBorderInlineStartStyle","MSBorderInlineStartStyle","OBorderInlineStartStyle","borderInlineStartWidth","MozBorderInlineStartWidth","WebkitBorderInlineStartWidth","MSBorderInlineStartWidth","OBorderInlineStartWidth","borderLeft","MozBorderLeft","WebkitBorderLeft","MSBorderLeft","OBorderLeft","borderLeftColor","MozBorderLeftColor","WebkitBorderLeftColor","MSBorderLeftColor","OBorderLeftColor","borderLeftStyle","MozBorderLeftStyle","WebkitBorderLeftStyle","MSBorderLeftStyle","OBorderLeftStyle","borderLeftWidth","MozBorderLeftWidth","WebkitBorderLeftWidth","MSBorderLeftWidth","OBorderLeftWidth","borderRadius","MozBorderRadius","WebkitBorderRadius","MSBorderRadius","OBorderRadius","borderRight","MozBorderRight","WebkitBorderRight","MSBorderRight","OBorderRight","borderRightColor","MozBorderRightColor","WebkitBorderRightColor","MSBorderRightColor","OBorderRightColor","borderRightStyle","MozBorderRightStyle","WebkitBorderRightStyle","MSBorderRightStyle","OBorderRightStyle","borderRightWidth","MozBorderRightWidth","WebkitBorderRightWidth","MSBorderRightWidth","OBorderRightWidth","borderSpacing","MozBorderSpacing","WebkitBorderSpacing","MSBorderSpacing","OBorderSpacing","borderStyle","MozBorderStyle","WebkitBorderStyle","MSBorderStyle","OBorderStyle","borderTop","MozBorderTop","WebkitBorderTop","MSBorderTop","OBorderTop","borderTopColor","MozBorderTopColor","WebkitBorderTopColor","MSBorderTopColor","OBorderTopColor","borderTopLeftRadius","MozBorderTopLeftRadius","WebkitBorderTopLeftRadius","MSBorderTopLeftRadius","OBorderTopLeftRadius","borderTopRightRadius","MozBorderTopRightRadius","WebkitBorderTopRightRadius","MSBorderTopRightRadius","OBorderTopRightRadius","borderTopStyle","MozBorderTopStyle","WebkitBorderTopStyle","MSBorderTopStyle","OBorderTopStyle","borderTopWidth","MozBorderTopWidth","WebkitBorderTopWidth","MSBorderTopWidth","OBorderTopWidth","borderWidth","MozBorderWidth","WebkitBorderWidth","MSBorderWidth","OBorderWidth","bottom","MozBottom","WebkitBottom","MSBottom","OBottom","boxDecorationBreak","MozBoxDecorationBreak","WebkitBoxDecorationBreak","MSBoxDecorationBreak","OBoxDecorationBreak","boxShadow","MozBoxShadow","WebkitBoxShadow","MSBoxShadow","OBoxShadow","boxSizing","MozBoxSizing","WebkitBoxSizing","MSBoxSizing","OBoxSizing","breakAfter","MozBreakAfter","WebkitBreakAfter","MSBreakAfter","OBreakAfter","breakBefore","MozBreakBefore","WebkitBreakBefore","MSBreakBefore","OBreakBefore","breakInside","MozBreakInside","WebkitBreakInside","MSBreakInside","OBreakInside","captionSide","MozCaptionSide","WebkitCaptionSide","MSCaptionSide","OCaptionSide","caretColor","MozCaretColor","WebkitCaretColor","MSCaretColor","OCaretColor","ch","MozCh","WebkitCh","MSCh","OCh","clear","MozClear","WebkitClear","MSClear","OClear","clip","MozClip","WebkitClip","MSClip","OClip","clipPath","MozClipPath","WebkitClipPath","MSClipPath","OClipPath","cm","MozCm","WebkitCm","MSCm","OCm","color","MozColor","WebkitColor","MSColor","OColor","columnCount","MozColumnCount","WebkitColumnCount","MSColumnCount","OColumnCount","columnFill","MozColumnFill","WebkitColumnFill","MSColumnFill","OColumnFill","columnGap","MozColumnGap","WebkitColumnGap","MSColumnGap","OColumnGap","columnRule","MozColumnRule","WebkitColumnRule","MSColumnRule","OColumnRule","columnRuleColor","MozColumnRuleColor","WebkitColumnRuleColor","MSColumnRuleColor","OColumnRuleColor","columnRuleStyle","MozColumnRuleStyle","WebkitColumnRuleStyle","MSColumnRuleStyle","OColumnRuleStyle","columnRuleWidth","MozColumnRuleWidth","WebkitColumnRuleWidth","MSColumnRuleWidth","OColumnRuleWidth","columnSpan","MozColumnSpan","WebkitColumnSpan","MSColumnSpan","OColumnSpan","columnWidth","MozColumnWidth","WebkitColumnWidth","MSColumnWidth","OColumnWidth","columns","MozColumns","WebkitColumns","MSColumns","OColumns","content","MozContent","WebkitContent","MSContent","OContent","counterIncrement","MozCounterIncrement","WebkitCounterIncrement","MSCounterIncrement","OCounterIncrement","counterReset","MozCounterReset","WebkitCounterReset","MSCounterReset","OCounterReset","cursor","MozCursor","WebkitCursor","MSCursor","OCursor","deg","MozDeg","WebkitDeg","MSDeg","ODeg","direction","MozDirection","WebkitDirection","MSDirection","ODirection","display","MozDisplay","WebkitDisplay","MSDisplay","ODisplay","dpcm","MozDpcm","WebkitDpcm","MSDpcm","ODpcm","dpi","MozDpi","WebkitDpi","MSDpi","ODpi","dppx","MozDppx","WebkitDppx","MSDppx","ODppx","em","MozEm","WebkitEm","MSEm","OEm","emptyCells","MozEmptyCells","WebkitEmptyCells","MSEmptyCells","OEmptyCells","ex","MozEx","WebkitEx","MSEx","OEx","filter","MozFilter","WebkitFilter","MSFilter","OFilter","flexBasis","MozFlexBasis","WebkitFlexBasis","MSFlexBasis","OFlexBasis","flexDirection","MozFlexDirection","WebkitFlexDirection","MSFlexDirection","OFlexDirection","flexFlow","MozFlexFlow","WebkitFlexFlow","MSFlexFlow","OFlexFlow","flexGrow","MozFlexGrow","WebkitFlexGrow","MSFlexGrow","OFlexGrow","flexShrink","MozFlexShrink","WebkitFlexShrink","MSFlexShrink","OFlexShrink","flexWrap","MozFlexWrap","WebkitFlexWrap","MSFlexWrap","OFlexWrap","float","MozFloat","WebkitFloat","MSFloat","OFloat","font","MozFont","WebkitFont","MSFont","OFont","fontFamily","MozFontFamily","WebkitFontFamily","MSFontFamily","OFontFamily","fontFeatureSettings","MozFontFeatureSettings","WebkitFontFeatureSettings","MSFontFeatureSettings","OFontFeatureSettings","fontKerning","MozFontKerning","WebkitFontKerning","MSFontKerning","OFontKerning","fontLanguageOverride","MozFontLanguageOverride","WebkitFontLanguageOverride","MSFontLanguageOverride","OFontLanguageOverride","fontSize","MozFontSize","WebkitFontSize","MSFontSize","OFontSize","fontSizeAdjust","MozFontSizeAdjust","WebkitFontSizeAdjust","MSFontSizeAdjust","OFontSizeAdjust","fontStretch","MozFontStretch","WebkitFontStretch","MSFontStretch","OFontStretch","fontStyle","MozFontStyle","WebkitFontStyle","MSFontStyle","OFontStyle","fontSynthesis","MozFontSynthesis","WebkitFontSynthesis","MSFontSynthesis","OFontSynthesis","fontVariant","MozFontVariant","WebkitFontVariant","MSFontVariant","OFontVariant","fontVariantAlternates","MozFontVariantAlternates","WebkitFontVariantAlternates","MSFontVariantAlternates","OFontVariantAlternates","fontVariantCaps","MozFontVariantCaps","WebkitFontVariantCaps","MSFontVariantCaps","OFontVariantCaps","fontVariantEastAsian","MozFontVariantEastAsian","WebkitFontVariantEastAsian","MSFontVariantEastAsian","OFontVariantEastAsian","fontVariantLigatures","MozFontVariantLigatures","WebkitFontVariantLigatures","MSFontVariantLigatures","OFontVariantLigatures","fontVariantNumeric","MozFontVariantNumeric","WebkitFontVariantNumeric","MSFontVariantNumeric","OFontVariantNumeric","fontVariantPosition","MozFontVariantPosition","WebkitFontVariantPosition","MSFontVariantPosition","OFontVariantPosition","fontWeight","MozFontWeight","WebkitFontWeight","MSFontWeight","OFontWeight","fr","MozFr","WebkitFr","MSFr","OFr","grad","MozGrad","WebkitGrad","MSGrad","OGrad","grid","MozGrid","WebkitGrid","MSGrid","OGrid","gridArea","MozGridArea","WebkitGridArea","MSGridArea","OGridArea","gridAutoColumns","MozGridAutoColumns","WebkitGridAutoColumns","MSGridAutoColumns","OGridAutoColumns","gridAutoFlow","MozGridAutoFlow","WebkitGridAutoFlow","MSGridAutoFlow","OGridAutoFlow","gridAutoRows","MozGridAutoRows","WebkitGridAutoRows","MSGridAutoRows","OGridAutoRows","gridColumn","MozGridColumn","WebkitGridColumn","MSGridColumn","OGridColumn","gridColumnEnd","MozGridColumnEnd","WebkitGridColumnEnd","MSGridColumnEnd","OGridColumnEnd","gridColumnGap","MozGridColumnGap","WebkitGridColumnGap","MSGridColumnGap","OGridColumnGap","gridColumnStart","MozGridColumnStart","WebkitGridColumnStart","MSGridColumnStart","OGridColumnStart","gridGap","MozGridGap","WebkitGridGap","MSGridGap","OGridGap","gridRow","MozGridRow","WebkitGridRow","MSGridRow","OGridRow","gridRowEnd","MozGridRowEnd","WebkitGridRowEnd","MSGridRowEnd","OGridRowEnd","gridRowGap","MozGridRowGap","WebkitGridRowGap","MSGridRowGap","OGridRowGap","gridRowStart","MozGridRowStart","WebkitGridRowStart","MSGridRowStart","OGridRowStart","gridTemplate","MozGridTemplate","WebkitGridTemplate","MSGridTemplate","OGridTemplate","gridTemplateAreas","MozGridTemplateAreas","WebkitGridTemplateAreas","MSGridTemplateAreas","OGridTemplateAreas","gridTemplateColumns","MozGridTemplateColumns","WebkitGridTemplateColumns","MSGridTemplateColumns","OGridTemplateColumns","gridTemplateRows","MozGridTemplateRows","WebkitGridTemplateRows","MSGridTemplateRows","OGridTemplateRows","height","MozHeight","WebkitHeight","MSHeight","OHeight","hyphens","MozHyphens","WebkitHyphens","MSHyphens","OHyphens","hz","MozHz","WebkitHz","MSHz","OHz","imageOrientation","MozImageOrientation","WebkitImageOrientation","MSImageOrientation","OImageOrientation","imageRendering","MozImageRendering","WebkitImageRendering","MSImageRendering","OImageRendering","imageResolution","MozImageResolution","WebkitImageResolution","MSImageResolution","OImageResolution","imeMode","MozImeMode","WebkitImeMode","MSImeMode","OImeMode","in","MozIn","WebkitIn","MSIn","OIn","inherit","MozInherit","WebkitInherit","MSInherit","OInherit","initial","MozInitial","WebkitInitial","MSInitial","OInitial","inlineSize","MozInlineSize","WebkitInlineSize","MSInlineSize","OInlineSize","isolation","MozIsolation","WebkitIsolation","MSIsolation","OIsolation","justifyContent","MozJustifyContent","WebkitJustifyContent","MSJustifyContent","OJustifyContent","khz","MozKhz","WebkitKhz","MSKhz","OKhz","left","MozLeft","WebkitLeft","MSLeft","OLeft","letterSpacing","MozLetterSpacing","WebkitLetterSpacing","MSLetterSpacing","OLetterSpacing","lineBreak","MozLineBreak","WebkitLineBreak","MSLineBreak","OLineBreak","lineHeight","MozLineHeight","WebkitLineHeight","MSLineHeight","OLineHeight","listStyle","MozListStyle","WebkitListStyle","MSListStyle","OListStyle","listStyleImage","MozListStyleImage","WebkitListStyleImage","MSListStyleImage","OListStyleImage","listStylePosition","MozListStylePosition","WebkitListStylePosition","MSListStylePosition","OListStylePosition","listStyleType","MozListStyleType","WebkitListStyleType","MSListStyleType","OListStyleType","margin","MozMargin","WebkitMargin","MSMargin","OMargin","marginBlockEnd","MozMarginBlockEnd","WebkitMarginBlockEnd","MSMarginBlockEnd","OMarginBlockEnd","marginBlockStart","MozMarginBlockStart","WebkitMarginBlockStart","MSMarginBlockStart","OMarginBlockStart","marginBottom","MozMarginBottom","WebkitMarginBottom","MSMarginBottom","OMarginBottom","marginInlineEnd","MozMarginInlineEnd","WebkitMarginInlineEnd","MSMarginInlineEnd","OMarginInlineEnd","marginInlineStart","MozMarginInlineStart","WebkitMarginInlineStart","MSMarginInlineStart","OMarginInlineStart","marginLeft","MozMarginLeft","WebkitMarginLeft","MSMarginLeft","OMarginLeft","marginRight","MozMarginRight","WebkitMarginRight","MSMarginRight","OMarginRight","marginTop","MozMarginTop","WebkitMarginTop","MSMarginTop","OMarginTop","mask","MozMask","WebkitMask","MSMask","OMask","maskClip","MozMaskClip","WebkitMaskClip","MSMaskClip","OMaskClip","maskComposite","MozMaskComposite","WebkitMaskComposite","MSMaskComposite","OMaskComposite","maskImage","MozMaskImage","WebkitMaskImage","MSMaskImage","OMaskImage","maskMode","MozMaskMode","WebkitMaskMode","MSMaskMode","OMaskMode","maskOrigin","MozMaskOrigin","WebkitMaskOrigin","MSMaskOrigin","OMaskOrigin","maskPosition","MozMaskPosition","WebkitMaskPosition","MSMaskPosition","OMaskPosition","maskRepeat","MozMaskRepeat","WebkitMaskRepeat","MSMaskRepeat","OMaskRepeat","maskSize","MozMaskSize","WebkitMaskSize","MSMaskSize","OMaskSize","maskType","MozMaskType","WebkitMaskType","MSMaskType","OMaskType","maxHeight","MozMaxHeight","WebkitMaxHeight","MSMaxHeight","OMaxHeight","maxWidth","MozMaxWidth","WebkitMaxWidth","MSMaxWidth","OMaxWidth","minBlockSize","MozMinBlockSize","WebkitMinBlockSize","MSMinBlockSize","OMinBlockSize","minHeight","MozMinHeight","WebkitMinHeight","MSMinHeight","OMinHeight","minInlineSize","MozMinInlineSize","WebkitMinInlineSize","MSMinInlineSize","OMinInlineSize","minWidth","MozMinWidth","WebkitMinWidth","MSMinWidth","OMinWidth","mixBlendMode","MozMixBlendMode","WebkitMixBlendMode","MSMixBlendMode","OMixBlendMode","mm","MozMm","WebkitMm","MSMm","OMm","ms","MozMs","WebkitMs","MSMs","OMs","objectFit","MozObjectFit","WebkitObjectFit","MSObjectFit","OObjectFit","objectPosition","MozObjectPosition","WebkitObjectPosition","MSObjectPosition","OObjectPosition","offsetBlockEnd","MozOffsetBlockEnd","WebkitOffsetBlockEnd","MSOffsetBlockEnd","OOffsetBlockEnd","offsetBlockStart","MozOffsetBlockStart","WebkitOffsetBlockStart","MSOffsetBlockStart","OOffsetBlockStart","offsetInlineEnd","MozOffsetInlineEnd","WebkitOffsetInlineEnd","MSOffsetInlineEnd","OOffsetInlineEnd","offsetInlineStart","MozOffsetInlineStart","WebkitOffsetInlineStart","MSOffsetInlineStart","OOffsetInlineStart","opacity","MozOpacity","WebkitOpacity","MSOpacity","OOpacity","order","MozOrder","WebkitOrder","MSOrder","OOrder","orphans","MozOrphans","WebkitOrphans","MSOrphans","OOrphans","outline","MozOutline","WebkitOutline","MSOutline","OOutline","outlineColor","MozOutlineColor","WebkitOutlineColor","MSOutlineColor","OOutlineColor","outlineOffset","MozOutlineOffset","WebkitOutlineOffset","MSOutlineOffset","OOutlineOffset","outlineStyle","MozOutlineStyle","WebkitOutlineStyle","MSOutlineStyle","OOutlineStyle","outlineWidth","MozOutlineWidth","WebkitOutlineWidth","MSOutlineWidth","OOutlineWidth","overflow","MozOverflow","WebkitOverflow","MSOverflow","OOverflow","overflowWrap","MozOverflowWrap","WebkitOverflowWrap","MSOverflowWrap","OOverflowWrap","overflowX","MozOverflowX","WebkitOverflowX","MSOverflowX","OOverflowX","overflowY","MozOverflowY","WebkitOverflowY","MSOverflowY","OOverflowY","padding","MozPadding","WebkitPadding","MSPadding","OPadding","paddingBlockEnd","MozPaddingBlockEnd","WebkitPaddingBlockEnd","MSPaddingBlockEnd","OPaddingBlockEnd","paddingBlockStart","MozPaddingBlockStart","WebkitPaddingBlockStart","MSPaddingBlockStart","OPaddingBlockStart","paddingBottom","MozPaddingBottom","WebkitPaddingBottom","MSPaddingBottom","OPaddingBottom","paddingInlineEnd","MozPaddingInlineEnd","WebkitPaddingInlineEnd","MSPaddingInlineEnd","OPaddingInlineEnd","paddingInlineStart","MozPaddingInlineStart","WebkitPaddingInlineStart","MSPaddingInlineStart","OPaddingInlineStart","paddingLeft","MozPaddingLeft","WebkitPaddingLeft","MSPaddingLeft","OPaddingLeft","paddingRight","MozPaddingRight","WebkitPaddingRight","MSPaddingRight","OPaddingRight","paddingTop","MozPaddingTop","WebkitPaddingTop","MSPaddingTop","OPaddingTop","pageBreakAfter","MozPageBreakAfter","WebkitPageBreakAfter","MSPageBreakAfter","OPageBreakAfter","pageBreakBefore","MozPageBreakBefore","WebkitPageBreakBefore","MSPageBreakBefore","OPageBreakBefore","pageBreakInside","MozPageBreakInside","WebkitPageBreakInside","MSPageBreakInside","OPageBreakInside","pc","MozPc","WebkitPc","MSPc","OPc","perspective","MozPerspective","WebkitPerspective","MSPerspective","OPerspective","perspectiveOrigin","MozPerspectiveOrigin","WebkitPerspectiveOrigin","MSPerspectiveOrigin","OPerspectiveOrigin","pointerEvents","MozPointerEvents","WebkitPointerEvents","MSPointerEvents","OPointerEvents","position","MozPosition","WebkitPosition","MSPosition","OPosition","pt","MozPt","WebkitPt","MSPt","OPt","px","MozPx","WebkitPx","MSPx","OPx","q","MozQ","WebkitQ","MSQ","OQ","quotes","MozQuotes","WebkitQuotes","MSQuotes","OQuotes","rad","MozRad","WebkitRad","MSRad","ORad","rem","MozRem","WebkitRem","MSRem","ORem","resize","MozResize","WebkitResize","MSResize","OResize","revert","MozRevert","WebkitRevert","MSRevert","ORevert","right","MozRight","WebkitRight","MSRight","ORight","rubyAlign","MozRubyAlign","WebkitRubyAlign","MSRubyAlign","ORubyAlign","rubyMerge","MozRubyMerge","WebkitRubyMerge","MSRubyMerge","ORubyMerge","rubyPosition","MozRubyPosition","WebkitRubyPosition","MSRubyPosition","ORubyPosition","s","MozS","WebkitS","MSS","OS","scrollBehavior","MozScrollBehavior","WebkitScrollBehavior","MSScrollBehavior","OScrollBehavior","scrollSnapCoordinate","MozScrollSnapCoordinate","WebkitScrollSnapCoordinate","MSScrollSnapCoordinate","OScrollSnapCoordinate","scrollSnapDestination","MozScrollSnapDestination","WebkitScrollSnapDestination","MSScrollSnapDestination","OScrollSnapDestination","scrollSnapType","MozScrollSnapType","WebkitScrollSnapType","MSScrollSnapType","OScrollSnapType","shapeImageThreshold","MozShapeImageThreshold","WebkitShapeImageThreshold","MSShapeImageThreshold","OShapeImageThreshold","shapeMargin","MozShapeMargin","WebkitShapeMargin","MSShapeMargin","OShapeMargin","shapeOutside","MozShapeOutside","WebkitShapeOutside","MSShapeOutside","OShapeOutside","tabSize","MozTabSize","WebkitTabSize","MSTabSize","OTabSize","tableLayout","MozTableLayout","WebkitTableLayout","MSTableLayout","OTableLayout","textAlign","MozTextAlign","WebkitTextAlign","MSTextAlign","OTextAlign","textAlignLast","MozTextAlignLast","WebkitTextAlignLast","MSTextAlignLast","OTextAlignLast","textCombineUpright","MozTextCombineUpright","WebkitTextCombineUpright","MSTextCombineUpright","OTextCombineUpright","textDecoration","MozTextDecoration","WebkitTextDecoration","MSTextDecoration","OTextDecoration","textDecorationColor","MozTextDecorationColor","WebkitTextDecorationColor","MSTextDecorationColor","OTextDecorationColor","textDecorationLine","MozTextDecorationLine","WebkitTextDecorationLine","MSTextDecorationLine","OTextDecorationLine","textDecorationStyle","MozTextDecorationStyle","WebkitTextDecorationStyle","MSTextDecorationStyle","OTextDecorationStyle","textEmphasis","MozTextEmphasis","WebkitTextEmphasis","MSTextEmphasis","OTextEmphasis","textEmphasisColor","MozTextEmphasisColor","WebkitTextEmphasisColor","MSTextEmphasisColor","OTextEmphasisColor","textEmphasisPosition","MozTextEmphasisPosition","WebkitTextEmphasisPosition","MSTextEmphasisPosition","OTextEmphasisPosition","textEmphasisStyle","MozTextEmphasisStyle","WebkitTextEmphasisStyle","MSTextEmphasisStyle","OTextEmphasisStyle","textIndent","MozTextIndent","WebkitTextIndent","MSTextIndent","OTextIndent","textOrientation","MozTextOrientation","WebkitTextOrientation","MSTextOrientation","OTextOrientation","textOverflow","MozTextOverflow","WebkitTextOverflow","MSTextOverflow","OTextOverflow","textRendering","MozTextRendering","WebkitTextRendering","MSTextRendering","OTextRendering","textShadow","MozTextShadow","WebkitTextShadow","MSTextShadow","OTextShadow","textTransform","MozTextTransform","WebkitTextTransform","MSTextTransform","OTextTransform","textUnderlinePosition","MozTextUnderlinePosition","WebkitTextUnderlinePosition","MSTextUnderlinePosition","OTextUnderlinePosition","top","MozTop","WebkitTop","MSTop","OTop","touchAction","MozTouchAction","WebkitTouchAction","MSTouchAction","OTouchAction","transform","MozTransform","WebkitTransform","msTransform","OTransform","transformBox","MozTransformBox","WebkitTransformBox","MSTransformBox","OTransformBox","transformOrigin","MozTransformOrigin","WebkitTransformOrigin","MSTransformOrigin","OTransformOrigin","transformStyle","MozTransformStyle","WebkitTransformStyle","MSTransformStyle","OTransformStyle","transition","MozTransition","WebkitTransition","MSTransition","OTransition","transitionDelay","MozTransitionDelay","WebkitTransitionDelay","MSTransitionDelay","OTransitionDelay","transitionDuration","MozTransitionDuration","WebkitTransitionDuration","MSTransitionDuration","OTransitionDuration","transitionProperty","MozTransitionProperty","WebkitTransitionProperty","MSTransitionProperty","OTransitionProperty","transitionTimingFunction","MozTransitionTimingFunction","WebkitTransitionTimingFunction","MSTransitionTimingFunction","OTransitionTimingFunction","turn","MozTurn","WebkitTurn","MSTurn","OTurn","unicodeBidi","MozUnicodeBidi","WebkitUnicodeBidi","MSUnicodeBidi","OUnicodeBidi","unset","MozUnset","WebkitUnset","MSUnset","OUnset","verticalAlign","MozVerticalAlign","WebkitVerticalAlign","MSVerticalAlign","OVerticalAlign","vh","MozVh","WebkitVh","MSVh","OVh","visibility","MozVisibility","WebkitVisibility","MSVisibility","OVisibility","vmax","MozVmax","WebkitVmax","MSVmax","OVmax","vmin","MozVmin","WebkitVmin","MSVmin","OVmin","vw","MozVw","WebkitVw","MSVw","OVw","whiteSpace","MozWhiteSpace","WebkitWhiteSpace","MSWhiteSpace","OWhiteSpace","widows","MozWidows","WebkitWidows","MSWidows","OWidows","width","MozWidth","WebkitWidth","MSWidth","OWidth","willChange","MozWillChange","WebkitWillChange","MSWillChange","OWillChange","wordBreak","MozWordBreak","WebkitWordBreak","MSWordBreak","OWordBreak","wordSpacing","MozWordSpacing","WebkitWordSpacing","MSWordSpacing","OWordSpacing","wordWrap","MozWordWrap","WebkitWordWrap","MSWordWrap","OWordWrap","writingMode","MozWritingMode","WebkitWritingMode","MSWritingMode","OWritingMode","zIndex","MozZIndex","WebkitZIndex","MSZIndex","OZIndex","fontSize","MozFontSize","WebkitFontSize","MSFontSize","OFontSize","flex","MozFlex","WebkitFlex","MSFlex","OFlex","fr","MozFr","WebkitFr","MSFr","OFr","overflowScrolling","MozOverflowScrolling","WebkitOverflowScrolling","MSOverflowScrolling","OOverflowScrolling","userSelect","MozUserSelect","WebkitUserSelect","MSUserSelect","OUserSelect"];sr.exports;(function(e){var t=cm,n=ec;e.exports=function(r,o,i){var a=r[o];if(a){var u=[];if(Object.keys(a).forEach(function(l){t.indexOf(l)===-1&&u.push(l)}),u.length)throw new Error("Prop "+o+" passed to "+i+". Has invalid keys "+u.join(", "))}},e.exports.isRequired=function(r,o,i){if(!r[o])throw new Error("Prop "+o+" passed to "+i+" is required");return e.exports(r,o,i)},e.exports.supportingArrays=n.oneOfType([n.arrayOf(e.exports),e.exports])})(sr);var dm=sr.exports;const At=Zl(dm);function kl(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Bl(e){function t(n){var r=this.constructor.getDerivedStateFromProps(e,n);return r??null}this.setState(t.bind(this))}function Ml(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}kl.__suppressDeprecationWarning=!0;Bl.__suppressDeprecationWarning=!0;Ml.__suppressDeprecationWarning=!0;function fm(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,r=null,o=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),n!==null||r!==null||o!==null){var i=e.displayName||e.name,a=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+a+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(r!==null?`
  `+r:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=kl,t.componentWillReceiveProps=Bl),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ml;var u=t.componentDidUpdate;t.componentDidUpdate=function(d,f,h){var b=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;u.call(this,d,f,b)}}return e}function lr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Au(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cr(e,t,n){return t&&Au(e.prototype,t),n&&Au(e,n),e}function Al(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Do(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fu(Object(n),!0).forEach(function(r){Al(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function dr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Lo(e,t)}function Wn(e){return Wn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Wn(e)}function Lo(e,t){return Lo=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Lo(e,t)}function pm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Lt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function hm(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Lt(e)}function fr(e){return function(){var t=Wn(e),n;if(pm()){var r=Wn(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return hm(this,n)}}var In=function(e){dr(n,e);var t=fr(n);function n(){return lr(this,n),t.apply(this,arguments)}return cr(n,[{key:"render",value:function(){var o=this.props,i=o.children,a=o.className,u=o.split,l=o.style,d=o.size,f=o.eleRef,h=["Pane",u,a],b={flex:1,position:"relative",outline:"none"};return d!==void 0&&(u==="vertical"?b.width=d:(b.height=d,b.display="flex"),b.flex="none"),b=Object.assign({},b,l||{}),Ie.createElement("div",{ref:f,className:h.join(" "),style:b},i)}}]),n}(Ie.PureComponent);In.propTypes={className:ne.string.isRequired,children:ne.node.isRequired,size:ne.oneOfType([ne.string,ne.number]),split:ne.oneOf(["vertical","horizontal"]),style:At,eleRef:ne.func};In.defaultProps={};var Fl="Resizer",pr=function(e){dr(n,e);var t=fr(n);function n(){return lr(this,n),t.apply(this,arguments)}return cr(n,[{key:"render",value:function(){var o=this.props,i=o.className,a=o.onClick,u=o.onDoubleClick,l=o.onMouseDown,d=o.onTouchEnd,f=o.onTouchStart,h=o.resizerClassName,b=o.split,v=o.style,x=[h,b,i];return Ie.createElement("span",{role:"presentation",className:x.join(" "),style:v,onMouseDown:function(D){return l(D)},onTouchStart:function(D){D.preventDefault(),f(D)},onTouchEnd:function(D){D.preventDefault(),d(D)},onClick:function(D){a&&(D.preventDefault(),a(D))},onDoubleClick:function(D){u&&(D.preventDefault(),u(D))}})}}]),n}(Ie.Component);pr.propTypes={className:ne.string.isRequired,onClick:ne.func,onDoubleClick:ne.func,onMouseDown:ne.func.isRequired,onTouchStart:ne.func.isRequired,onTouchEnd:ne.func.isRequired,split:ne.oneOf(["vertical","horizontal"]),style:At,resizerClassName:ne.string.isRequired};pr.defaultProps={resizerClassName:Fl};function zu(e,t){if(e.selection)e.selection.empty();else try{t.getSelection().removeAllRanges()}catch{}}function Ou(e,t,n,r){if(typeof r=="number"){var o=typeof t=="number"?t:0,i=typeof n=="number"&&n>=0?n:1/0;return Math.max(o,Math.min(i,r))}return e!==void 0?e:t}function gm(e){return Ie.Children.toArray(e).filter(function(t){return t})}var ln=function(e){dr(n,e);var t=fr(n);function n(r){var o;lr(this,n),o=t.call(this,r),o.onMouseDown=o.onMouseDown.bind(Lt(o)),o.onTouchStart=o.onTouchStart.bind(Lt(o)),o.onMouseMove=o.onMouseMove.bind(Lt(o)),o.onTouchMove=o.onTouchMove.bind(Lt(o)),o.onMouseUp=o.onMouseUp.bind(Lt(o));var i=r.size,a=r.defaultSize,u=r.minSize,l=r.maxSize,d=r.primary,f=i!==void 0?i:Ou(a,u,l,null);return o.state={active:!1,resized:!1,pane1Size:d==="first"?f:void 0,pane2Size:d==="second"?f:void 0,instanceProps:{size:i}},o}return cr(n,[{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("touchmove",this.onTouchMove),this.setState(n.getSizeUpdate(this.props,this.state))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("touchmove",this.onTouchMove)}},{key:"onMouseDown",value:function(o){var i=Object.assign({},o,{touches:[{clientX:o.clientX,clientY:o.clientY}]});this.onTouchStart(i)}},{key:"onTouchStart",value:function(o){var i=this.props,a=i.allowResize,u=i.onDragStarted,l=i.split;if(a){zu(document,window);var d=l==="vertical"?o.touches[0].clientX:o.touches[0].clientY;typeof u=="function"&&u(),this.setState({active:!0,position:d})}}},{key:"onMouseMove",value:function(o){var i=Object.assign({},o,{touches:[{clientX:o.clientX,clientY:o.clientY}]});this.onTouchMove(i)}},{key:"onTouchMove",value:function(o){var i=this.props,a=i.allowResize,u=i.maxSize,l=i.minSize,d=i.onChange,f=i.split,h=i.step,b=this.state,v=b.active,x=b.position;if(a&&v){zu(document,window);var g=this.props.primary==="first",D=g?this.pane1:this.pane2,p=g?this.pane2:this.pane1;if(D){var w=D,m=p;if(w.getBoundingClientRect){var C=w.getBoundingClientRect().width,y=w.getBoundingClientRect().height,S=f==="vertical"?o.touches[0].clientX:o.touches[0].clientY,P=f==="vertical"?C:y,E=x-S;if(h){if(Math.abs(E)<h)return;E=~~(E/h)*h}var M=g?E:-E,F=parseInt(window.getComputedStyle(w).order),R=parseInt(window.getComputedStyle(m).order);F>R&&(M=-M);var T=u;if(u!==void 0&&u<=0){var O=this.splitPane;f==="vertical"?T=O.getBoundingClientRect().width+u:T=O.getBoundingClientRect().height+u}var W=P-M,oe=x-E;W<l?W=l:u!==void 0&&W>T?W=T:this.setState({position:oe,resized:!0}),d&&d(W),this.setState(Al({draggedSize:W},g?"pane1Size":"pane2Size",W))}}}}},{key:"onMouseUp",value:function(){var o=this.props,i=o.allowResize,a=o.onDragFinished,u=this.state,l=u.active,d=u.draggedSize;i&&l&&(typeof a=="function"&&a(d),this.setState({active:!1}))}},{key:"render",value:function(){var o=this,i=this.props,a=i.allowResize,u=i.children,l=i.className,d=i.onResizerClick,f=i.onResizerDoubleClick,h=i.paneClassName,b=i.pane1ClassName,v=i.pane2ClassName,x=i.paneStyle,g=i.pane1Style,D=i.pane2Style,p=i.resizerClassName,w=i.resizerStyle,m=i.split,C=i.style,y=this.state,S=y.pane1Size,P=y.pane2Size,E=a?"":"disabled",M=p&&"".concat(p," ").concat(Fl),F=gm(u),R=Do({display:"flex",flex:1,height:"100%",position:"absolute",outline:"none",overflow:"hidden",MozUserSelect:"text",WebkitUserSelect:"text",msUserSelect:"text",userSelect:"text"},C);m==="vertical"?Object.assign(R,{flexDirection:"row",left:0,right:0}):Object.assign(R,{bottom:0,flexDirection:"column",minHeight:"100%",top:0,width:"100%"});var T=["SplitPane",l,m,E],O=Do({},x,{},g),W=Do({},x,{},D),oe=["Pane1",h,b].join(" "),I=["Pane2",h,v].join(" ");return Ie.createElement("div",{className:T.join(" "),ref:function(Y){o.splitPane=Y},style:R},Ie.createElement(In,{className:oe,key:"pane1",eleRef:function(Y){o.pane1=Y},size:S,split:m,style:O},F[0]),Ie.createElement(pr,{className:E,onClick:d,onDoubleClick:f,onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onTouchEnd:this.onMouseUp,key:"resizer",resizerClassName:M,split:m,style:w||{}}),Ie.createElement(In,{className:I,key:"pane2",eleRef:function(Y){o.pane2=Y},size:P,split:m,style:W},F[1]))}}],[{key:"getDerivedStateFromProps",value:function(o,i){return n.getSizeUpdate(o,i)}},{key:"getSizeUpdate",value:function(o,i){var a={},u=i.instanceProps;if(u.size===o.size&&o.size!==void 0)return{};var l=o.size!==void 0?o.size:Ou(o.defaultSize,o.minSize,o.maxSize,i.draggedSize);o.size!==void 0&&(a.draggedSize=l);var d=o.primary==="first";return a[d?"pane1Size":"pane2Size"]=l,a[d?"pane2Size":"pane1Size"]=void 0,a.instanceProps={size:o.size},a}}]),n}(Ie.Component);ln.propTypes={allowResize:ne.bool,children:ne.arrayOf(ne.node).isRequired,className:ne.string,primary:ne.oneOf(["first","second"]),minSize:ne.oneOfType([ne.string,ne.number]),maxSize:ne.oneOfType([ne.string,ne.number]),defaultSize:ne.oneOfType([ne.string,ne.number]),size:ne.oneOfType([ne.string,ne.number]),split:ne.oneOf(["vertical","horizontal"]),onDragStarted:ne.func,onDragFinished:ne.func,onChange:ne.func,onResizerClick:ne.func,onResizerDoubleClick:ne.func,style:At,resizerStyle:At,paneClassName:ne.string,pane1ClassName:ne.string,pane2ClassName:ne.string,paneStyle:At,pane1Style:At,pane2Style:At,resizerClassName:ne.string,step:ne.number};ln.defaultProps={allowResize:!0,minSize:50,primary:"first",split:"vertical",paneClassName:"",pane1ClassName:"",pane2ClassName:""};fm(ln);var bm=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,mm=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,vm=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,yo={Space_Separator:bm,ID_Start:mm,ID_Continue:vm},Fe={isSpaceSeparator(e){return typeof e=="string"&&yo.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||yo.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||yo.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let Vo,Ve,pt,Ln,St,tt,Oe,hr,rn;var Dm=function(t,n){Vo=String(t),Ve="start",pt=[],Ln=0,St=1,tt=0,Oe=void 0,hr=void 0,rn=void 0;do Oe=ym(),xm[Ve]();while(Oe.type!=="eof");return typeof n=="function"?No({"":rn},"",n):rn};function No(e,t,n){const r=e[t];if(r!=null&&typeof r=="object")if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=String(o),a=No(r,i,n);a===void 0?delete r[i]:Object.defineProperty(r,i,{value:a,writable:!0,enumerable:!0,configurable:!0})}else for(const o in r){const i=No(r,o,n);i===void 0?delete r[o]:Object.defineProperty(r,o,{value:i,writable:!0,enumerable:!0,configurable:!0})}return n.call(e,t,r)}let ie,te,tn,dt,de;function ym(){for(ie="default",te="",tn=!1,dt=1;;){de=gt();const e=zl[ie]();if(e)return e}}function gt(){if(Vo[Ln])return String.fromCodePoint(Vo.codePointAt(Ln))}function k(){const e=gt();return e===`
`?(St++,tt=0):e?tt+=e.length:tt++,e&&(Ln+=e.length),e}const zl={default(){switch(de){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":k();return;case"/":k(),ie="comment";return;case void 0:return k(),Ee("eof")}if(Fe.isSpaceSeparator(de)){k();return}return zl[Ve]()},comment(){switch(de){case"*":k(),ie="multiLineComment";return;case"/":k(),ie="singleLineComment";return}throw _e(k())},multiLineComment(){switch(de){case"*":k(),ie="multiLineCommentAsterisk";return;case void 0:throw _e(k())}k()},multiLineCommentAsterisk(){switch(de){case"*":k();return;case"/":k(),ie="default";return;case void 0:throw _e(k())}k(),ie="multiLineComment"},singleLineComment(){switch(de){case`
`:case"\r":case"\u2028":case"\u2029":k(),ie="default";return;case void 0:return k(),Ee("eof")}k()},value(){switch(de){case"{":case"[":return Ee("punctuator",k());case"n":return k(),kt("ull"),Ee("null",null);case"t":return k(),kt("rue"),Ee("boolean",!0);case"f":return k(),kt("alse"),Ee("boolean",!1);case"-":case"+":k()==="-"&&(dt=-1),ie="sign";return;case".":te=k(),ie="decimalPointLeading";return;case"0":te=k(),ie="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":te=k(),ie="decimalInteger";return;case"I":return k(),kt("nfinity"),Ee("numeric",1/0);case"N":return k(),kt("aN"),Ee("numeric",NaN);case'"':case"'":tn=k()==='"',te="",ie="string";return}throw _e(k())},identifierNameStartEscape(){if(de!=="u")throw _e(k());k();const e=Ho();switch(e){case"$":case"_":break;default:if(!Fe.isIdStartChar(e))throw Ru();break}te+=e,ie="identifierName"},identifierName(){switch(de){case"$":case"_":case"‌":case"‍":te+=k();return;case"\\":k(),ie="identifierNameEscape";return}if(Fe.isIdContinueChar(de)){te+=k();return}return Ee("identifier",te)},identifierNameEscape(){if(de!=="u")throw _e(k());k();const e=Ho();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!Fe.isIdContinueChar(e))throw Ru();break}te+=e,ie="identifierName"},sign(){switch(de){case".":te=k(),ie="decimalPointLeading";return;case"0":te=k(),ie="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":te=k(),ie="decimalInteger";return;case"I":return k(),kt("nfinity"),Ee("numeric",dt*(1/0));case"N":return k(),kt("aN"),Ee("numeric",NaN)}throw _e(k())},zero(){switch(de){case".":te+=k(),ie="decimalPoint";return;case"e":case"E":te+=k(),ie="decimalExponent";return;case"x":case"X":te+=k(),ie="hexadecimal";return}return Ee("numeric",dt*0)},decimalInteger(){switch(de){case".":te+=k(),ie="decimalPoint";return;case"e":case"E":te+=k(),ie="decimalExponent";return}if(Fe.isDigit(de)){te+=k();return}return Ee("numeric",dt*Number(te))},decimalPointLeading(){if(Fe.isDigit(de)){te+=k(),ie="decimalFraction";return}throw _e(k())},decimalPoint(){switch(de){case"e":case"E":te+=k(),ie="decimalExponent";return}if(Fe.isDigit(de)){te+=k(),ie="decimalFraction";return}return Ee("numeric",dt*Number(te))},decimalFraction(){switch(de){case"e":case"E":te+=k(),ie="decimalExponent";return}if(Fe.isDigit(de)){te+=k();return}return Ee("numeric",dt*Number(te))},decimalExponent(){switch(de){case"+":case"-":te+=k(),ie="decimalExponentSign";return}if(Fe.isDigit(de)){te+=k(),ie="decimalExponentInteger";return}throw _e(k())},decimalExponentSign(){if(Fe.isDigit(de)){te+=k(),ie="decimalExponentInteger";return}throw _e(k())},decimalExponentInteger(){if(Fe.isDigit(de)){te+=k();return}return Ee("numeric",dt*Number(te))},hexadecimal(){if(Fe.isHexDigit(de)){te+=k(),ie="hexadecimalInteger";return}throw _e(k())},hexadecimalInteger(){if(Fe.isHexDigit(de)){te+=k();return}return Ee("numeric",dt*Number(te))},string(){switch(de){case"\\":k(),te+=Cm();return;case'"':if(tn)return k(),Ee("string",te);te+=k();return;case"'":if(!tn)return k(),Ee("string",te);te+=k();return;case`
`:case"\r":throw _e(k());case"\u2028":case"\u2029":wm(de);break;case void 0:throw _e(k())}te+=k()},start(){switch(de){case"{":case"[":return Ee("punctuator",k())}ie="value"},beforePropertyName(){switch(de){case"$":case"_":te=k(),ie="identifierName";return;case"\\":k(),ie="identifierNameStartEscape";return;case"}":return Ee("punctuator",k());case'"':case"'":tn=k()==='"',ie="string";return}if(Fe.isIdStartChar(de)){te+=k(),ie="identifierName";return}throw _e(k())},afterPropertyName(){if(de===":")return Ee("punctuator",k());throw _e(k())},beforePropertyValue(){ie="value"},afterPropertyValue(){switch(de){case",":case"}":return Ee("punctuator",k())}throw _e(k())},beforeArrayValue(){if(de==="]")return Ee("punctuator",k());ie="value"},afterArrayValue(){switch(de){case",":case"]":return Ee("punctuator",k())}throw _e(k())},end(){throw _e(k())}};function Ee(e,t){return{type:e,value:t,line:St,column:tt}}function kt(e){for(const t of e){if(gt()!==t)throw _e(k());k()}}function Cm(){switch(gt()){case"b":return k(),"\b";case"f":return k(),"\f";case"n":return k(),`
`;case"r":return k(),"\r";case"t":return k(),"	";case"v":return k(),"\v";case"0":if(k(),Fe.isDigit(gt()))throw _e(k());return"\0";case"x":return k(),Sm();case"u":return k(),Ho();case`
`:case"\u2028":case"\u2029":return k(),"";case"\r":return k(),gt()===`
`&&k(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw _e(k());case void 0:throw _e(k())}return k()}function Sm(){let e="",t=gt();if(!Fe.isHexDigit(t)||(e+=k(),t=gt(),!Fe.isHexDigit(t)))throw _e(k());return e+=k(),String.fromCodePoint(parseInt(e,16))}function Ho(){let e="",t=4;for(;t-- >0;){const n=gt();if(!Fe.isHexDigit(n))throw _e(k());e+=k()}return String.fromCodePoint(parseInt(e,16))}const xm={start(){if(Oe.type==="eof")throw Bt();Co()},beforePropertyName(){switch(Oe.type){case"identifier":case"string":hr=Oe.value,Ve="afterPropertyName";return;case"punctuator":An();return;case"eof":throw Bt()}},afterPropertyName(){if(Oe.type==="eof")throw Bt();Ve="beforePropertyValue"},beforePropertyValue(){if(Oe.type==="eof")throw Bt();Co()},beforeArrayValue(){if(Oe.type==="eof")throw Bt();if(Oe.type==="punctuator"&&Oe.value==="]"){An();return}Co()},afterPropertyValue(){if(Oe.type==="eof")throw Bt();switch(Oe.value){case",":Ve="beforePropertyName";return;case"}":An()}},afterArrayValue(){if(Oe.type==="eof")throw Bt();switch(Oe.value){case",":Ve="beforeArrayValue";return;case"]":An()}},end(){}};function Co(){let e;switch(Oe.type){case"punctuator":switch(Oe.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=Oe.value;break}if(rn===void 0)rn=e;else{const t=pt[pt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,hr,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")pt.push(e),Array.isArray(e)?Ve="beforeArrayValue":Ve="beforePropertyName";else{const t=pt[pt.length-1];t==null?Ve="end":Array.isArray(t)?Ve="afterArrayValue":Ve="afterPropertyValue"}}function An(){pt.pop();const e=pt[pt.length-1];e==null?Ve="end":Array.isArray(e)?Ve="afterArrayValue":Ve="afterPropertyValue"}function _e(e){return Vn(e===void 0?`JSON5: invalid end of input at ${St}:${tt}`:`JSON5: invalid character '${Ol(e)}' at ${St}:${tt}`)}function Bt(){return Vn(`JSON5: invalid end of input at ${St}:${tt}`)}function Ru(){return tt-=5,Vn(`JSON5: invalid identifier character at ${St}:${tt}`)}function wm(e){console.warn(`JSON5: '${Ol(e)}' in strings is not valid ECMAScript; consider escaping`)}function Ol(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const n=e.charCodeAt(0).toString(16);return"\\x"+("00"+n).substring(n.length)}return e}function Vn(e){const t=new SyntaxError(e);return t.lineNumber=St,t.columnNumber=tt,t}var Em=function(t,n,r){const o=[];let i="",a,u,l="",d;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,d=n.quote,n=n.replacer),typeof n=="function")u=n;else if(Array.isArray(n)){a=[];for(const g of n){let D;typeof g=="string"?D=g:(typeof g=="number"||g instanceof String||g instanceof Number)&&(D=String(g)),D!==void 0&&a.indexOf(D)<0&&a.push(D)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),l="          ".substr(0,r)):typeof r=="string"&&(l=r.substr(0,10)),f("",{"":t});function f(g,D){let p=D[g];switch(p!=null&&(typeof p.toJSON5=="function"?p=p.toJSON5(g):typeof p.toJSON=="function"&&(p=p.toJSON(g))),u&&(p=u.call(D,g,p)),p instanceof Number?p=Number(p):p instanceof String?p=String(p):p instanceof Boolean&&(p=p.valueOf()),p){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof p=="string")return h(p);if(typeof p=="number")return String(p);if(typeof p=="object")return Array.isArray(p)?x(p):b(p)}function h(g){const D={"'":.1,'"':.2},p={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let w="";for(let C=0;C<g.length;C++){const y=g[C];switch(y){case"'":case'"':D[y]++,w+=y;continue;case"\0":if(Fe.isDigit(g[C+1])){w+="\\x00";continue}}if(p[y]){w+=p[y];continue}if(y<" "){let S=y.charCodeAt(0).toString(16);w+="\\x"+("00"+S).substring(S.length);continue}w+=y}const m=d||Object.keys(D).reduce((C,y)=>D[C]<D[y]?C:y);return w=w.replace(new RegExp(m,"g"),p[m]),m+w+m}function b(g){if(o.indexOf(g)>=0)throw TypeError("Converting circular structure to JSON5");o.push(g);let D=i;i=i+l;let p=a||Object.keys(g),w=[];for(const C of p){const y=f(C,g);if(y!==void 0){let S=v(C)+":";l!==""&&(S+=" "),S+=y,w.push(S)}}let m;if(w.length===0)m="{}";else{let C;if(l==="")C=w.join(","),m="{"+C+"}";else{let y=`,
`+i;C=w.join(y),m=`{
`+i+C+`,
`+D+"}"}}return o.pop(),i=D,m}function v(g){if(g.length===0)return h(g);const D=String.fromCodePoint(g.codePointAt(0));if(!Fe.isIdStartChar(D))return h(g);for(let p=D.length;p<g.length;p++)if(!Fe.isIdContinueChar(String.fromCodePoint(g.codePointAt(p))))return h(g);return g}function x(g){if(o.indexOf(g)>=0)throw TypeError("Converting circular structure to JSON5");o.push(g);let D=i;i=i+l;let p=[];for(let m=0;m<g.length;m++){const C=f(String(m),g);p.push(C!==void 0?C:"null")}let w;if(p.length===0)w="[]";else if(l==="")w="["+p.join(",")+"]";else{let m=`,
`+i,C=p.join(m);w=`[
`+i+C+`,
`+D+"]"}return o.pop(),i=D,w}};const _m={parse:Dm,stringify:Em};var km=_m;const nn=["v1","vX","v2021-03-25","v2021-10-21","v2022-03-07"],[Rl]=nn.slice(-1);function Pl(e){const[t,n]=s.useState(!1);return s.useEffect(()=>{const r=setTimeout(()=>n(!0),e.delay||500);return()=>clearTimeout(r)},[e.delay]),t?c.jsx(il,{muted:!0,size:4}):null}const Bm=[[_c],lc(),cc(),dc(),fc(),pc(),hc(),gc(),bc(),mc(),vc(),ks(Sc,{fallback:!0}),Dc.of([yc,Cc].flat().filter(Boolean))];function Mm(e){const t=s.useMemo(()=>Am(e),[e]),n=s.useMemo(()=>ks(Fm(e)),[e]);return[t,n]}function Am(e){const{color:t,fonts:n}=e.sanity,r=t.card.enabled,o=yr.blue[t.dark?400:500].hex,i=yr.gray[e.sanity.color.dark?900:100].hex;return wc.theme({"&":{color:r.fg,backgroundColor:r.bg},".cm-content":{caretColor:o},".cm-editor":{fontFamily:n.code.family,fontSize:j(n.code.sizes[1].fontSize),lineHeight:"inherit"},".cm-cursor, .cm-dropCursor":{borderLeftColor:o},"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:i},".cm-panels":{backgroundColor:r.bg,color:r.fg},".cm-panels.cm-panels-top":{borderBottom:"2px solid ".concat(r.border)},".cm-panels.cm-panels-bottom":{borderTop:"2px solid ".concat(r.border)}},{dark:t.dark})}function Fm(e){const t=e.sanity.color.base,n=e.sanity.color.syntax;return Ec.define([{tag:Q.keyword,color:n.keyword},{tag:[Q.propertyName,Q.name,Q.deleted,Q.character,Q.macroName],color:n.property},{tag:[Q.function(Q.variableName),Q.labelName],color:n.function},{tag:[Q.color,Q.constant(Q.name),Q.standard(Q.name)],color:n.variable},{tag:[Q.definition(Q.name),Q.separator],color:n.constant},{tag:[Q.typeName,Q.className,Q.number,Q.changed,Q.annotation,Q.modifier,Q.self,Q.namespace],color:n.number},{tag:[Q.operator,Q.operatorKeyword,Q.url,Q.escape,Q.regexp,Q.link,Q.special(Q.string)],color:n.operator},{tag:[Q.meta,Q.comment],color:n.comment},{tag:Q.strong,fontWeight:"bold"},{tag:Q.emphasis,fontStyle:"italic"},{tag:Q.strikethrough,textDecoration:"line-through"},{tag:Q.heading,fontWeight:"bold",color:n.property},{tag:[Q.atom,Q.bool,Q.special(Q.variableName)],color:n.boolean},{tag:[Q.processingInstruction,Q.string,Q.inserted],color:n.string},{tag:Q.invalid,color:t.fg}])}var Pu=Object.freeze,zm=Object.defineProperty,Om=(e,t)=>Pu(zm(e,"raw",{value:Pu(t||e.slice())})),Tu;const Rm=_.div(Tu||(Tu=Om([`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  overflow: clip;
  position: relative;
  display: flex;

  & .cm-theme {
    width: 100%;
  }

  & .cm-editor {
    height: 100%;

    font-size: 16px;
    line-height: 21px;
  }

  & .cm-line {
    padding-left: `,`;
  }

  & .cm-content {
    border-right-width: `,` !important;
    padding-top: `,`;
  }
`])),e=>{let{theme:t}=e;return j(t.sanity.space[3])},e=>{let{theme:t}=e;return j(t.sanity.space[4])},e=>{let{theme:t}=e;return j(t.sanity.space[5])});function Tl(e){const t=gf(),n=Mm(t);return c.jsx(Rm,{children:c.jsx(xc,{basicSetup:!1,theme:n,extensions:Bm,...e})})}function Pm(e){return!!e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"}const Tm=$m();function jm(e){const t="sanityVision:".concat(e);let n=null;return{get:r,set:o,merge:i};function r(l,d){const f=a();return typeof f[l]>"u"?d:f[l]}function o(l,d){const f=a();return f[l]=d,localStorage.setItem(t,JSON.stringify(n)),d}function i(l){const d={...a(),...l};return localStorage.setItem(t,JSON.stringify(d)),d}function a(){return n===null&&(n=u()),n}function u(){if(!Tm)return{};try{const l=JSON.parse(localStorage.getItem(t)||"{}");return Pm(l)?l:{}}catch{return{}}}}function $m(){const e="lsCheck";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}function Wm(e){const t={},n={};for(const[r,o]of e.entries()){if(r[0]==="$"){t[r.slice(1)]=JSON.parse(o);continue}if(r==="perspective"){n[r]=o;continue}}return{query:e.get("query")||"",params:t,options:n}}function So(e){const t=e.replace(/^v/,"").trim().toUpperCase();return t.length>0&&(t==="X"||/^\d{4}-\d{2}-\d{2}$/.test(t)&&!isNaN(Date.parse(t)))}function Im(e){return e[0]!=="v"&&e!=="other"?"v".concat(e):e}function jl(e,t){try{const n=e?km.parse(e):{};return typeof n=="object"&&n&&!Array.isArray(n)?n:{}}catch(n){return n.message="".concat(t("params.error.params-invalid-json"),`:

`).concat(n.message.replace("JSON5:","")),n}}function ju(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=new URLSearchParams;r.set("query",e);for(const[o,i]of Object.entries(t))r.set("$".concat(o),JSON.stringify(i));for(const[o,i]of Object.entries(n))i&&r.set(o,"".concat(i));return"?".concat(r)}const an=["raw","previewDrafts","published"],$u=an[0];function Lm(e){return an.includes(e)}const Vm=typeof document>"u"?ic:window.ResizeObserver,Nm=`{
  
}`;function Hm(e){const{onChange:t}=e,{t:n}=Nn(Hn),{raw:r,error:o,parsed:i,valid:a}=Wu(e.value,n),[u,l]=s.useState(a),[d,f]=s.useState(!1);s.useEffect(()=>{d||(t({parsed:i,raw:r,valid:u,error:o}),f(!0))},[o,d,u,t,i,r]);const h=s.useCallback(v=>{const x=Wu(v,n);l(x.valid),t(x)},[t,n]),b=s.useMemo(()=>ac(h,333),[h]);return c.jsx(Tl,{value:e.value||Nm,onChange:b})}function Wu(e,t){const n=jl(e,t),r=n instanceof Error?{}:n,o=n instanceof Error?n.message:void 0;return{parsed:r,raw:e,valid:!o,error:o}}var Iu=Object.freeze,Gm=Object.defineProperty,Um=(e,t)=>Iu(Gm(e,"raw",{value:Iu(t||e.slice())})),Lu;const qm=_.div(e=>{let{theme:t}=e;const{color:n,fonts:r,space:o}=t.sanity;return K(Lu||(Lu=Um([`
    & .json-inspector,
    & .json-inspector .json-inspector__selection {
      font-family: `,`;
      font-size: `,`px;
      line-height: `,`px;
      color: var(--card-code-fg-color);
    }

    & .json-inspector .json-inspector__leaf {
      padding-left: `,`;
    }

    & .json-inspector .json-inspector__leaf.json-inspector__leaf_root {
      padding-top: `,`;
      padding-left: 0;
    }

    & .json-inspector > .json-inspector__leaf_root > .json-inspector__line > .json-inspector__key {
      display: none;
    }

    & .json-inspector .json-inspector__line {
      display: block;
      position: relative;
      cursor: default;
    }

    & .json-inspector .json-inspector__line::after {
      content: '';
      position: absolute;
      top: 0;
      left: -200px;
      right: -50px;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }

    & .json-inspector .json-inspector__line:hover::after {
      background: var(--card-code-bg-color);
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line {
      cursor: pointer;
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line::before {
      content: '▸ ';
      margin-left: calc(0px - `,`);
      font-size: `,`px;
      line-height: `,`px;
    }

    &
      .json-inspector
      .json-inspector__leaf_expanded.json-inspector__leaf_composite
      > .json-inspector__line::before {
      content: '▾ ';
      font-size: `,`px;
      line-height: `,`px;
    }

    & .json-inspector .json-inspector__radio,
    & .json-inspector .json-inspector__flatpath {
      display: none;
    }

    & .json-inspector .json-inspector__value {
      margin-left: `,`;
    }

    &
      .json-inspector
      > .json-inspector__leaf_root
      > .json-inspector__line
      > .json-inspector__key
      + .json-inspector__value {
      margin: 0;
    }

    & .json-inspector .json-inspector__key {
      color: `,`;
    }

    & .json-inspector .json-inspector__value_helper,
    & .json-inspector .json-inspector__value_null {
      color: `,`;
    }

    & .json-inspector .json-inspector__not-found {
      padding-top: `,`;
    }

    & .json-inspector .json-inspector__value_string {
      color: `,`;
      word-break: break-word;
    }

    & .json-inspector .json-inspector__value_boolean {
      color: `,`;
    }

    & .json-inspector .json-inspector__value_number {
      color: `,`;
    }

    & .json-inspector .json-inspector__show-original {
      display: inline-block;
      padding: 0 6px;
      cursor: pointer;
    }

    & .json-inspector .json-inspector__show-original:hover {
      color: inherit;
    }

    & .json-inspector .json-inspector__show-original::before {
      content: '↔';
    }

    & .json-inspector .json-inspector__show-original:hover::after {
      content: ' expand';
    }
  `])),r.code.family,r.code.sizes[2].fontSize,r.code.sizes[2].lineHeight,j(o[4]),j(o[0]),j(o[4]),r.code.sizes[2].fontSize,r.code.sizes[2].lineHeight,r.code.sizes[2].fontSize,r.code.sizes[2].lineHeight,j(o[4]/2),n.syntax.property,n.syntax.constant,j(o[2]),n.syntax.string,n.syntax.boolean,n.syntax.number)}),Go=tc(5e4);function Vu(e){const{data:t}=e;return $l(t)||Array.isArray(t)?c.jsx(qm,{children:c.jsx(uc,{data:t,search:!1,isExpanded:Xm,onClick:Km})}):c.jsx(ul,{language:"json",children:JSON.stringify(t)})}function Xm(e,t){const r=Go.get(e);if(typeof r=="boolean")return r;const o=e.split(".",4);return o.length===4?!1:Array.isArray(t)?!0:$l(t)&&!o.some(i=>Qm(i))}function Km(e){const{path:t}=e,n=Go.get(t);n!==void 0&&Go.set(t,!n)}function $l(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}const Ym=/^\d+$/;function Qm(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10;return Ym.test(e)&&parseInt(e,10)>t}var Nu=Object.freeze,Jm=Object.defineProperty,Zm=(e,t)=>Nu(Jm(e,"raw",{value:Nu(t||e.slice())})),Hu;const Uo=_(ul)(Hu||(Hu=Zm([`
  color: `,`;
`])),e=>{let{theme:t}=e;return t.sanity.color.muted.critical.enabled.fg});function ev(e){let{error:t}=e;const{t:n}=Nn(Hn);if(!("details"in t))return null;const r={...t.details,...tv(t.details)};return r.line?c.jsxs("div",{children:[c.jsx(Uo,{size:1,children:"".concat(r.line,`
`).concat(nv(r.column,r.columnEnd))}),c.jsx(L,{marginTop:4,children:c.jsx(Uo,{size:1,children:"".concat(n("query.error.line"),":   ").concat(r.lineNumber,`
`).concat(n("query.error.column"),": ").concat(r.column)})})]}):null}function tv(e){if(!e||typeof e.query!="string"||typeof e.start!="number")return{};const{query:t,start:n,end:r}=e,o=t.slice(0,n).lastIndexOf(`
`)+1,i=(t.slice(0,o).match(/\n/g)||[]).length,a=t.slice(o,t.indexOf(`
`,o)),u=n-o,l=typeof r=="number"?r-o:void 0;return{line:a,lineNumber:i,column:u,columnEnd:l}}function nv(e,t){const n="-".repeat(e),r="^".repeat(t?t-e:1);return"".concat(n).concat(r)}function ov(e){return c.jsxs(Je,{space:5,marginTop:2,children:[c.jsx(Uo,{size:1,children:e.error.message}),c.jsx(ev,{error:e.error})]})}var Gu=Object.freeze,rv=Object.defineProperty,Wl=(e,t)=>Gu(rv(e,"raw",{value:Gu(t||e.slice())})),Uu,qu;const iv=_(L)(Uu||(Uu=Wl([`
  /* This limits the width of the popover content */
  max-width: 240px;
`]))),av=_.a(qu||(qu=Wl([`
  cursor: pointer;
  margin-right: auto;
`])));function uv(){const[e,t]=s.useState(!1),[n,r]=s.useState(null),[o,i]=s.useState(null),a=s.useCallback(()=>t(d=>!d),[]),u=s.useCallback(()=>t(!1),[]),{t:l}=Nn(Hn);return Gn(u,[n,o]),c.jsx(bn,{content:c.jsx(iv,{children:c.jsxs(Je,{space:4,children:[c.jsxs(Un,{space:2,children:[c.jsx(ke,{weight:"medium",children:l("settings.perspectives.title")}),c.jsx(op,{tone:"primary",children:l("label.new")})]}),c.jsx(Be,{children:c.jsx(ke,{muted:!0,children:l("settings.perspectives.description")})}),c.jsx(Be,{children:c.jsx(ke,{children:c.jsxs(av,{href:"https://sanity.io/docs/perspectives",target:"_blank",children:[l("settings.perspectives.action.docs-link")," →"]})})})]})}),placement:"bottom-start",portal:!0,padding:3,ref:i,open:e,children:c.jsx(ht,{icon:sc,mode:"bleed",padding:2,tone:"primary",fontSize:1,ref:r,onClick:a,selected:e})})}var Xu=Object.freeze,sv=Object.defineProperty,Re=(e,t)=>Xu(sv(e,"raw",{value:Xu(t||e.slice())})),Ku,Yu,Qu,Ju,Zu,es,ts,ns,os,rs,is,as,us,ss,ls,cs,ds,fs;const Il=_(Ne)(Ku||(Ku=Re([`
  .sidebarPanes .Pane {
    overflow-y: auto;
    overflow-x: hidden;
  }

  & .Resizer {
    background: var(--card-border-color);
    opacity: 1;
    z-index: 1;
    box-sizing: border-box;
    background-clip: padding-box;
    border: solid transparent;
  }

  & .Resizer:hover {
    border-color: var(--card-shadow-ambient-color);
  }

  & .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-width: 5px 0;
    cursor: row-resize;
    width: 100%;
    z-index: 4;
  }

  & .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-width: 0 5px;
    cursor: col-resize;
    z-index: 2; /* To prevent the resizer from being hidden behind CodeMirror scroll area */
  }

  .Resizer.disabled {
    cursor: not-allowed;
  }

  .Resizer.disabled:hover {
    border-color: transparent;
  }
`])));Il.displayName="Root";const lv=_(Be)(Yu||(Yu=Re([`
  border-bottom: 1px solid var(--card-border-color);
`]))),ft=_(er)(Qu||(Qu=Re([`
  flex: 1;
`]))),cv=_(L)(Ju||(Ju=Re([`
  position: relative;
`]))),dv=_.a(Zu||(Zu=Re([`
  cursor: pointer;
  margin-right: auto;
`]))),Ll=_(L)(es||(es=Re([`
  position: absolute;
  top: 1rem;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 10;
  right: 0;

  `,` {
    user-select: none;
  }
`])),ft),ps=_(Ll)(ts||(ts=Re([`
  // This is so its aligned with the gutters of CodeMirror
  left: 33px;
`]))),hs=_(Be)(ns||(ns=Re([`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
`]))),fv=_(Ne)(os||(os=Re([`
  height: 100%;
`]))),pv=_(L)(rs||(rs=Re([`
  position: relative;
`]))),hv=_(Be)(as||(as=Re([`
  height: 100%;
  width: 100%;
  position: absolute;
  max-width: 100%;

  `,`
`])),e=>{let{$isInvalid:t}=e;return t&&K(is||(is=Re([`
      &:after {
        background-color: var(--card-bg-color);
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    `])))}),gv=_(L)(us||(us=Re([`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 20;
`]))),bv=_(L)(ss||(ss=Re([`
  border-top: 1px solid var(--card-border-color);
`]))),mv=_(Be)(ls||(ls=Re([`
  position: relative;
`])));_(L)(cs||(cs=Re([`
  width: 100%;
  height: 100%;
`])));const vv=_(Ne)(ds||(ds=Re([`
  height: 100%;
  min-height: `,`;
`])),e=>{let{theme:t}=e;return j(t.sanity.space[3]*2+t.sanity.fonts.text.sizes[2].lineHeight-t.sanity.fonts.text.sizes[2].ascenderHeight-t.sanity.fonts.text.sizes[2].descenderHeight)}),Dv=_(L)(fs||(fs=Re([`
  border-top: 1px solid var(--card-border-color);
`])));function yv(e,t){return!e||!t?!1:e===t||!!(e.compareDocumentPosition(t)&16)}const Cv=/\.(?:api|apicdn)\.sanity\.io\/(vX|v1|v\d{4}-\d\d-\d\d)\/.*?(?:query|listen)\/(.*?)\?(.*)/,Sv=e=>Dr("ctrl+enter",e)||Dr("mod+enter",e);function Rn(){return typeof window<"u"&&window.innerWidth>600}function gs(e){return{defaultSize:e/(Rn()?2:1),size:e>550?void 0:e*.4,allowResize:e>550,minSize:Math.min(170,Math.max(170,e/2)),maxSize:e>650?e*.7:e*.6}}class xv extends Ie.PureComponent{constructor(t){super(t);const{client:n,datasets:r,config:o}=t;this._localStorage=jm(n.config().projectId||"default");const i=this._localStorage.get("query",""),a=this._localStorage.get("params",`{
  
}`),u=o.defaultDataset||n.config().dataset||r[0],l=Im("".concat(o.defaultApiVersion)),d=$u;let f=this._localStorage.get("dataset",u),h=this._localStorage.get("apiVersion",l);const b=nn.includes(h)?!1:h;let v=this._localStorage.get("perspective",d);r.includes(f)||(f=r.includes(u)?u:r[0]),nn.includes(h)||(h=Rl),an.includes(v)||(v=$u),this._visionRoot=Ie.createRef(),this._operationUrlElement=Ie.createRef(),this._queryEditorContainer=Ie.createRef(),this._paramsEditorContainer=Ie.createRef(),this._customApiVersionElement=Ie.createRef(),this._client=t.client.withConfig({apiVersion:b||h,dataset:f,perspective:v,allowReconfigure:!0});const x=typeof window<"u"&&typeof document<"u"?document.body.getBoundingClientRect().height-60:0,g=a?jl(a,this.props.t):void 0;this.state={dataset:f,apiVersion:h,customApiVersion:b,perspective:v,isValidApiVersion:b?So(b):!1,query:i,rawParams:a,params:g,hasValidParams:!(g instanceof Error),listenMutations:[],queryInProgress:!1,listenInProgress:!1,paneSizeOptions:gs(x)},this.handleChangeDataset=this.handleChangeDataset.bind(this),this.handleChangeApiVersion=this.handleChangeApiVersion.bind(this),this.handleCustomApiVersionChange=this.handleCustomApiVersionChange.bind(this),this.handleChangePerspective=this.handleChangePerspective.bind(this),this.handleListenExecution=this.handleListenExecution.bind(this),this.handleListenerEvent=this.handleListenerEvent.bind(this),this.handleQueryExecution=this.handleQueryExecution.bind(this),this.handleQueryChange=this.handleQueryChange.bind(this),this.handleParamsChange=this.handleParamsChange.bind(this),this.handleCopyUrl=this.handleCopyUrl.bind(this),this.handlePaste=this.handlePaste.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleResize=this.handleResize.bind(this)}componentDidMount(){window.document.addEventListener("paste",this.handlePaste),window.document.addEventListener("keydown",this.handleKeyDown),this.handleResizeListen()}componentWillUnmount(){this.cancelQuery(),this.cancelListener(),this.cancelEventListener(),this.cancelResizeListener()}handleResizeListen(){this._visionRoot.current&&(this._resizeListener=new Vm(this.handleResize),this._resizeListener.observe(this._visionRoot.current))}handleResize(t){const n=t==null?void 0:t[0];this.setState(r=>({...r,paneSizeOptions:gs(n.contentRect.height)}))}cancelResizeListener(){this._resizeListener&&this._resizeListener.disconnect()}handlePaste(t){if(!t.clipboardData)return;const r=t.clipboardData.getData("text/plain").match(Cv);if(!r)return;const[,o,i,a]=r;let u;try{const h=new URLSearchParams(a);u=Wm(h)}catch(h){console.warn("Error while trying to parse API URL: ",h.message);return}let l,d;So(o)&&(nn.includes(o)?(l=o,d=!1):d=o);const f=an.includes(u.options.perspective)?u.options.perspective:void 0;t.preventDefault(),this.setState(h=>({dataset:this.props.datasets.includes(i)?i:h.dataset,query:u.query,params:u.params,rawParams:JSON.stringify(u.params,null,2),apiVersion:typeof l>"u"?h.apiVersion:l,customApiVersion:typeof d>"u"?h.customApiVersion:d,perspective:typeof f>"u"?h.perspective:f}),()=>{this._localStorage.merge({query:this.state.query,params:this.state.params,dataset:this.state.dataset,apiVersion:d||l,perspective:this.state.perspective}),this._client.config({dataset:this.state.dataset,apiVersion:d||l,perspective:this.state.perspective}),this.handleQueryExecution(),this.props.toast.push({closable:!0,id:"vision-paste",status:"info",title:"Parsed URL to query"})})}cancelQuery(){this._querySubscription&&(this._querySubscription.unsubscribe(),this._querySubscription=void 0)}cancelListener(){this._listenSubscription&&(this._listenSubscription.unsubscribe(),this._listenSubscription=void 0)}cancelEventListener(){window.removeEventListener("keydown",this.handleKeyDown)}handleChangeDataset(t){const n=t.target.value;this._localStorage.set("dataset",n),this.setState({dataset:n}),this._client.config({dataset:n}),this.handleQueryExecution()}handleChangeApiVersion(t){const n=t.target.value;if((n==null?void 0:n.toLowerCase())==="other"){this.setState({customApiVersion:"v"},()=>{var r;(r=this._customApiVersionElement.current)==null||r.focus()});return}this.setState({apiVersion:n,customApiVersion:!1},()=>{this._localStorage.set("apiVersion",this.state.apiVersion),this._client.config({apiVersion:this.state.apiVersion}),this.handleQueryExecution()})}handleCustomApiVersionChange(t){const n=t.target.value||"",r=So(n);this.setState(o=>({apiVersion:r?n:o.apiVersion,customApiVersion:n||"v",isValidApiVersion:r}),()=>{!this.state.isValidApiVersion||typeof this.state.customApiVersion!="string"||(this._localStorage.set("apiVersion",this.state.customApiVersion),this._client.config({apiVersion:this.state.customApiVersion}))})}handleChangePerspective(t){const n=t.target.value;Lm(n)&&this.setState({perspective:n},()=>{this._localStorage.set("perspective",this.state.perspective),this._client.config({perspective:this.state.perspective}),this.handleQueryExecution()})}handleListenerEvent(t){if(t.type!=="mutation"){this.props.toast.push({closable:!0,id:"vision-listen",status:"success",title:"Listening for mutations…"});return}this.setState(n=>{let{listenMutations:r}=n;return{listenMutations:r.length===50?[t,...r.slice(0,49)]:[t,...r]}})}handleKeyDown(t){const{hasValidParams:n}=this.state,r=this._visionRoot.current&&yv(this._visionRoot.current,t.target);Sv(t)&&r&&n&&(this.handleQueryExecution(),t.preventDefault(),t.stopPropagation())}ensureSelectedApiVersion(){const{apiVersion:t,customApiVersion:n}=this.state,r=n||t;this._client.config().apiVersion!==r&&this._client.config({apiVersion:r})}handleListenExecution(){const{query:t,params:n,rawParams:r,listenInProgress:o}=this.state;if(o){this.cancelListener(),this.setState({listenInProgress:!1});return}this.ensureSelectedApiVersion();const i=n instanceof Error?n:void 0,a=n instanceof Error?{}:n||{},u=this._client.getDataUrl("listen",ju(t,a,{})),l=!i&&t.trim().length>0;this._localStorage.set("query",t),this._localStorage.set("params",r),this.cancelQuery(),this.setState({url:u,listenMutations:[],queryInProgress:!1,queryResult:void 0,listenInProgress:l,error:i,queryTime:void 0,e2eTime:void 0}),l&&(this._listenSubscription=this._client.listen(t,n,{events:["mutation","welcome"]}).subscribe({next:this.handleListenerEvent,error:d=>this.setState({error:d,query:t,listenInProgress:!1})}))}handleQueryExecution(){const{query:t,params:n,rawParams:r,queryInProgress:o}=this.state;if(o)return this.cancelQuery(),this.cancelListener(),this.setState({queryInProgress:!1}),!0;const i=n instanceof Error&&n;if(this._localStorage.set("query",t),this._localStorage.set("params",r),this.cancelListener(),this.setState({queryInProgress:!i&&!!t,listenInProgress:!1,listenMutations:[],error:i||void 0,queryResult:void 0,queryTime:void 0,e2eTime:void 0}),!t||i)return!0;this.ensureSelectedApiVersion();const a={};this.state.perspective!=="raw"&&(a.perspective=this.state.perspective);const u=this._client.getUrl(this._client.getDataUrl("query",ju(t,n,a)));this.setState({url:u});const l=Date.now();return this._querySubscription=this._client.observable.fetch(t,n,{filterResponse:!1,tag:"vision"}).subscribe({next:d=>this.setState({queryTime:d.ms,e2eTime:Date.now()-l,queryResult:d.result,queryInProgress:!1,error:void 0}),error:d=>this.setState({error:d,query:t,queryInProgress:!1})}),!0}handleQueryChange(t){this.setState({query:t})}handleParamsChange(t){let{raw:n,parsed:r,valid:o,error:i}=t;this.setState({rawParams:n,params:r,hasValidParams:o,paramsError:i},()=>this._localStorage.set("params",n))}handleCopyUrl(){const t=this._operationUrlElement.current;if(t)try{t.select(),document.execCommand("copy"),this.props.toast.push({closable:!0,title:"Copied to clipboard",status:"info",id:"vision-copy"})}catch{console.error("Unable to copy to clipboard :(")}}render(){const{datasets:t,t:n}=this.props,{error:r,queryResult:o,url:i,queryInProgress:a,listenInProgress:u,paneSizeOptions:l,queryTime:d,e2eTime:f,listenMutations:h,apiVersion:b,dataset:v,customApiVersion:x,isValidApiVersion:g,hasValidParams:D,paramsError:p,perspective:w}=this.state,m=!r&&!a&&typeof o<"u";return c.jsxs(Il,{direction:"column",height:"fill",ref:this._visionRoot,sizing:"border",overflow:"hidden",children:[c.jsx(lv,{paddingX:3,paddingY:2,children:c.jsxs(Tp,{columns:[1,4,8,12],children:[c.jsx(L,{padding:1,column:2,children:c.jsxs(Je,{children:[c.jsx(Be,{paddingTop:2,paddingBottom:3,children:c.jsx(ft,{children:n("settings.dataset-label")})}),c.jsx(vo,{value:v,onChange:this.handleChangeDataset,children:t.map(C=>c.jsx("option",{children:C},C))})]})}),c.jsx(L,{padding:1,column:2,children:c.jsxs(Je,{children:[c.jsx(Be,{paddingTop:2,paddingBottom:3,children:c.jsx(ft,{children:n("settings.api-version-label")})}),c.jsxs(vo,{value:x===!1?b:n("settings.other-api-version-label"),onChange:this.handleChangeApiVersion,children:[nn.map(C=>c.jsx("option",{children:C},C)),c.jsx("option",{value:n("settings.other-api-version-label"),children:n("settings.other-api-version-label")},"other")]})]})}),x!==!1&&c.jsx(L,{padding:1,column:2,children:c.jsxs(Je,{children:[c.jsx(Be,{paddingTop:2,paddingBottom:3,children:c.jsx(ft,{textOverflow:"ellipsis",children:n("settings.custom-api-version-label")})}),c.jsx(Ro,{ref:this._customApiVersionElement,value:x,onChange:this.handleCustomApiVersionChange,customValidity:g?void 0:n("settings.error.invalid-api-version"),maxLength:11})]})}),c.jsx(L,{padding:1,column:2,children:c.jsxs(Je,{children:[c.jsx(Be,{paddingBottom:1,children:c.jsxs(Un,{space:1,children:[c.jsx(L,{children:c.jsx(ft,{children:n("settings.perspective-label")})}),c.jsx(L,{children:c.jsx(uv,{})})]})}),c.jsx(vo,{value:w,onChange:this.handleChangePerspective,children:an.map(C=>c.jsx("option",{children:C},C))})]})}),typeof i=="string"?c.jsx(L,{padding:1,flex:1,column:x===!1?6:4,children:c.jsxs(Je,{children:[c.jsx(Be,{paddingTop:2,paddingBottom:3,children:c.jsxs(ft,{children:[n("query.url")," ",c.jsxs(dv,{onClick:this.handleCopyUrl,children:["[",n("action.copy-url-to-clipboard"),"]"]})]})}),c.jsxs(Ne,{flex:1,gap:1,children:[c.jsx(L,{flex:1,children:c.jsx(Ro,{readOnly:!0,type:"url",ref:this._operationUrlElement,value:i})}),c.jsx(Mn,{content:n("action.copy-url-to-clipboard"),children:c.jsx(ht,{"aria-label":n("action.copy-url-to-clipboard"),type:"button",mode:"ghost",icon:nc,onClick:this.handleCopyUrl})})]})]})}):c.jsx(L,{flex:1})]})}),c.jsx(cv,{flex:"auto",children:c.jsxs(ln,{split:Rn()?"vertical":"horizontal",minSize:280,defaultSize:400,maxSize:-400,children:[c.jsx(L,{height:"stretch",flex:1,children:c.jsxs(ln,{className:"sidebarPanes",split:"horizontal",defaultSize:Rn()?l.defaultSize:l.minSize,size:l.size,allowResize:l.allowResize,minSize:Rn()?l.minSize:100,maxSize:l.maxSize,primary:"first",children:[c.jsx(hs,{display:"flex",ref:this._queryEditorContainer,children:c.jsxs(L,{flex:1,children:[c.jsx(ps,{children:c.jsx(Ne,{children:c.jsx(ft,{muted:!0,children:n("query.label")})})}),c.jsx(Tl,{value:this.state.query,onChange:this.handleQueryChange})]})}),c.jsxs(hs,{display:"flex",ref:this._paramsEditorContainer,children:[c.jsxs(Be,{flex:1,tone:D?"default":"critical",children:[c.jsx(ps,{children:c.jsxs(Ne,{children:[c.jsx(ft,{muted:!0,children:n("params.label")}),p&&c.jsx(Mn,{placement:"top-end",portal:!0,content:p,children:c.jsx(L,{padding:1,marginX:2,children:c.jsx(ke,{children:c.jsx(oc,{})})})})]})}),c.jsx(Hm,{value:this.state.rawParams,onChange:this.handleParamsChange})]}),c.jsx(Dv,{children:c.jsx(Be,{padding:3,paddingX:3,children:c.jsx(Mn,{content:c.jsx(Be,{radius:4,children:c.jsx(ke,{size:1,muted:!0,children:n("params.error.params-invalid-json")})}),placement:"top",disabled:D,portal:!0,children:c.jsxs(Ne,{justify:"space-evenly",children:[c.jsx(L,{flex:1,children:c.jsx(Mn,{content:c.jsx(Be,{radius:4,children:c.jsx(Cl,{keys:["Ctrl","Enter"]})}),placement:"top",portal:!0,children:c.jsx(ht,{width:"fill",onClick:this.handleQueryExecution,type:"button",icon:a?mr:vr,disabled:u||!D,tone:a?"positive":"primary",text:n(a?"action.query-cancel":"action.query-execute")})})}),c.jsx(L,{flex:1,marginLeft:3,children:c.jsx(ht,{width:"fill",onClick:this.handleListenExecution,type:"button",icon:u?mr:vr,text:n(u?"action.listen-cancel":"action.listen-execute"),mode:"ghost",disabled:!D,tone:u?"positive":"default"})})]})})})})]})]})}),c.jsxs(fv,{direction:"column",children:[c.jsx(pv,{flex:1,children:c.jsx(hv,{flex:1,overflow:"hidden",tone:r?"critical":"default",$isInvalid:!!r,children:c.jsxs(gv,{overflow:"auto",children:[c.jsx(Ll,{children:c.jsx(L,{marginLeft:3,children:c.jsx(ft,{muted:!0,children:n("result.label")})})}),c.jsxs(L,{padding:3,paddingTop:5,children:[(a||u&&h.length===0)&&c.jsx(L,{marginTop:3,children:c.jsx(Pl,{})}),r&&c.jsx(ov,{error:r}),m&&c.jsx(Vu,{data:o}),u&&h.length>0&&c.jsx(Vu,{data:h})]})]})})}),c.jsx(bv,{children:c.jsx(mv,{paddingX:4,paddingY:3,sizing:"border",children:c.jsxs(vv,{align:"center",children:[c.jsx(L,{children:c.jsxs(ke,{muted:!0,children:[n("result.execution-time-label"),":"," ",typeof d=="number"?"".concat(d,"ms"):n("result.timing-not-applicable")]})}),c.jsx(L,{marginLeft:4,children:c.jsxs(ke,{muted:!0,children:[n("result.end-to-end-time-label"),":"," ",typeof f=="number"?"".concat(f,"ms"):n("result.timing-not-applicable")]})})]})})})]})]})})]})}}function wv(e){const t=e.config().projectId,[n,r]=s.useState();return s.useEffect(()=>{const o=e.observable.datasets.list().subscribe({next:i=>r(i.map(a=>a.name)),error:i=>r(i)});return()=>o.unsubscribe()},[e,t]),n||void 0}function Ev(e){const t=Zb(),n=wv(e.client),{t:r}=Nn(Hn);if(!n)return c.jsx(Pl,{});const o=n instanceof Error?[e.client.config().dataset||"production"]:n;return c.jsx(xv,{...e,datasets:o,toast:t,t:r})}function Av(e){const t=rc({apiVersion:"1"}),n={defaultApiVersion:Rl,...e.tool.options};return c.jsx(Ev,{client:t,config:n})}export{Av as default};
