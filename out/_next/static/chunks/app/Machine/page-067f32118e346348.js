(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91290],{89593:function(e,t,n){Promise.resolve().then(n.bind(n,70759))},18286:function(e,t,n){"use strict";n.r(t),n.d(t,{MenuContext:function(){return r},MenuProvider:function(){return o}});var a=n(3827),i=n(64090);let r=(0,i.createContext)({isRightMenuVisible:!1,toggleRightMenu:()=>{},hideRightMenu:()=>{}}),o=e=>{let{children:t}=e,[n,o]=(0,i.useState)(!1);return(0,a.jsx)(r.Provider,{value:{isRightMenuVisible:n,toggleRightMenu:()=>{o(e=>!e)},hideRightMenu:()=>{o(!1)}},children:t})}},93800:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(3827);n(64090);var i=n(20703),r=n(72338),o=n.n(r),c={src:"/_next/static/media/leftarraw.9fdb1a6b.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXH////////////////////////+/v6xnI00AAAACHRSTlMAoZQCBDUGP+fyt9kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicRYpBDgAgCMMKTPn/j800xFObdQDsllFkmBDDpK5MsL3ln9ESBwjAADyD9g/8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},l=n(47907),s=e=>{let{title:t,backUrl:n}=e,r=(0,l.useRouter)(),s=()=>{r.push(n)};return(0,a.jsx)("div",{className:o().nativeBar,children:(0,a.jsxs)("div",{className:o().leftarraw,children:[(0,a.jsx)(i.default,{onClick:()=>s(),className:o().m1,src:c,alt:"coin",width:50,height:50}),(0,a.jsx)("div",{className:o().t1,children:t})]})})}},28683:function(e,t,n){"use strict";var a=n(90791);t.Z=a.Z},38302:function(e,t,n){"use strict";var a=n(97814);t.Z=a.Z},24232:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var a=n(24930),i=n.n(a)},24930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let a=n(86921);n(3827),n(64090);let i=a._(n(84795));function r(e,t){let n={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};return"function"==typeof e&&(n.loader=e),(0,i.default)({...n,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},84795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let a=n(3827),i=n(64090),r=n(19721);function o(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let c={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},l=function(e){let t={...c,...e},n=(0,i.lazy)(()=>t.loader().then(o)),l=t.loading;function s(e){let o=l?(0,a.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,c=t.ssr?(0,a.jsx)(n,{...e}):(0,a.jsx)(r.BailoutToCSR,{reason:"next/dynamic",children:(0,a.jsx)(n,{...e})});return(0,a.jsx)(i.Suspense,{fallback:o,children:c})}return s.displayName="LoadableComponent",s}},70759:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var a=n(3827),i=n(64090),r=n(24232),o=n(18286),c=n(38245),l=n.n(c),s=n(38302),d=n(28683),A=n(16480),u=n.n(A),g=n(35704),p=n(57499),b=n(10693),h=n(10534),m=n(84855),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)0>t.indexOf(a[i])&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n},S=e=>{var{prefixCls:t,className:n,hoverable:a=!0}=e,r=f(e,["prefixCls","className","hoverable"]);let{getPrefixCls:o}=i.useContext(p.E_),c=o("card",t),l=u()("".concat(c,"-grid"),n,{["".concat(c,"-grid-hoverable")]:a});return i.createElement("div",Object.assign({},r,{className:l}))},v=n(11875),E=n(11303),C=n(64872),y=n(80316);let x=e=>{let{antCls:t,componentCls:n,headerHeight:a,cardPaddingBase:i,tabsMarginBottom:r}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:"0 ".concat((0,v.bf)(i)),color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:"".concat((0,v.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorderSecondary),borderRadius:"".concat((0,v.bf)(e.borderRadiusLG)," ").concat((0,v.bf)(e.borderRadiusLG)," 0 0")},(0,E.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},E.vS),{["\n          > ".concat(n,"-typography,\n          > ").concat(n,"-typography-edit-content\n        ")]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),["".concat(t,"-tabs-top")]:{clear:"both",marginBottom:r,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:"".concat((0,v.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorBorderSecondary)}}})},M=e=>{let{cardPaddingBase:t,colorBorderSecondary:n,cardShadow:a,lineWidth:i}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:"\n      ".concat((0,v.bf)(i)," 0 0 0 ").concat(n,",\n      0 ").concat((0,v.bf)(i)," 0 0 ").concat(n,",\n      ").concat((0,v.bf)(i)," ").concat((0,v.bf)(i)," 0 0 ").concat(n,",\n      ").concat((0,v.bf)(i)," 0 0 0 ").concat(n," inset,\n      0 ").concat((0,v.bf)(i)," 0 0 ").concat(n," inset;\n    "),transition:"all ".concat(e.motionDurationMid),"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},N=e=>{let{componentCls:t,iconCls:n,actionsLiMargin:a,cardActionsIconSize:i,colorBorderSecondary:r,actionsBg:o}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:o,borderTop:"".concat((0,v.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(r),display:"flex",borderRadius:"0 0 ".concat((0,v.bf)(e.borderRadiusLG)," ").concat((0,v.bf)(e.borderRadiusLG))},(0,E.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:"color ".concat(e.motionDurationMid)},["a:not(".concat(t,"-btn), > ").concat(n)]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,v.bf)(e.fontHeight),transition:"color ".concat(e.motionDurationMid),"&:hover":{color:e.colorPrimary}},["> ".concat(n)]:{fontSize:i,lineHeight:(0,v.bf)(e.calc(i).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:"".concat((0,v.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(r)}}})},O=e=>Object.assign(Object.assign({margin:"".concat((0,v.bf)(e.calc(e.marginXXS).mul(-1).equal())," 0"),display:"flex"},(0,E.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},E.vS),"&-description":{color:e.colorTextDescription}}),B=e=>{let{componentCls:t,cardPaddingBase:n,colorFillAlter:a}=e;return{["".concat(t,"-head")]:{padding:"0 ".concat((0,v.bf)(n)),background:a,"&-title":{fontSize:e.fontSize}},["".concat(t,"-body")]:{padding:"".concat((0,v.bf)(e.padding)," ").concat((0,v.bf)(n))}}},U=e=>{let{componentCls:t}=e;return{overflow:"hidden",["".concat(t,"-body")]:{userSelect:"none"}}},j=e=>{let{componentCls:t,cardShadow:n,cardHeadPadding:a,colorBorderSecondary:i,boxShadowTertiary:r,cardPaddingBase:o,extraColor:c}=e;return{[t]:Object.assign(Object.assign({},(0,E.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,["&:not(".concat(t,"-bordered)")]:{boxShadow:r},["".concat(t,"-head")]:x(e),["".concat(t,"-extra")]:{marginInlineStart:"auto",color:c,fontWeight:"normal",fontSize:e.fontSize},["".concat(t,"-body")]:Object.assign({padding:o,borderRadius:"0 0 ".concat((0,v.bf)(e.borderRadiusLG)," ").concat((0,v.bf)(e.borderRadiusLG))},(0,E.dF)()),["".concat(t,"-grid")]:M(e),["".concat(t,"-cover")]:{"> *":{display:"block",width:"100%",borderRadius:"".concat((0,v.bf)(e.borderRadiusLG)," ").concat((0,v.bf)(e.borderRadiusLG)," 0 0")}},["".concat(t,"-actions")]:N(e),["".concat(t,"-meta")]:O(e)}),["".concat(t,"-bordered")]:{border:"".concat((0,v.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(i),["".concat(t,"-cover")]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},["".concat(t,"-hoverable")]:{cursor:"pointer",transition:"box-shadow ".concat(e.motionDurationMid,", border-color ").concat(e.motionDurationMid),"&:hover":{borderColor:"transparent",boxShadow:n}},["".concat(t,"-contain-grid")]:{borderRadius:"".concat((0,v.bf)(e.borderRadiusLG)," ").concat((0,v.bf)(e.borderRadiusLG)," 0 0 "),["".concat(t,"-body")]:{display:"flex",flexWrap:"wrap"},["&:not(".concat(t,"-loading) ").concat(t,"-body")]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},["".concat(t,"-contain-tabs")]:{["> div".concat(t,"-head")]:{minHeight:0,["".concat(t,"-head-title, ").concat(t,"-extra")]:{paddingTop:a}}},["".concat(t,"-type-inner")]:B(e),["".concat(t,"-loading")]:U(e),["".concat(t,"-rtl")]:{direction:"rtl"}}},P=e=>{let{componentCls:t,cardPaddingSM:n,headerHeightSM:a,headerFontSizeSM:i}=e;return{["".concat(t,"-small")]:{["> ".concat(t,"-head")]:{minHeight:a,padding:"0 ".concat((0,v.bf)(n)),fontSize:i,["> ".concat(t,"-head-wrapper")]:{["> ".concat(t,"-extra")]:{fontSize:e.fontSize}}},["> ".concat(t,"-body")]:{padding:n}},["".concat(t,"-small").concat(t,"-contain-tabs")]:{["> ".concat(t,"-head")]:{["".concat(t,"-head-title, ").concat(t,"-extra")]:{paddingTop:0,display:"flex",alignItems:"center"}}}}};var R=(0,C.I$)("Card",e=>{let t=(0,y.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[j(t),P(t)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+2*e.padding,headerHeightSM:e.fontSize*e.lineHeight+2*e.paddingXS,actionsBg:e.colorBgContainer,actionsLiMargin:"".concat(e.paddingSM,"px 0"),tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText})),T=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)0>t.indexOf(a[i])&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n};let w=e=>{let{actionClasses:t,actions:n=[],actionStyle:a}=e;return i.createElement("ul",{className:t,style:a},n.map((e,t)=>i.createElement("li",{style:{width:"".concat(100/n.length,"%")},key:"action-".concat(t)},i.createElement("span",null,e))))},_=i.forwardRef((e,t)=>{let n;let{prefixCls:a,className:r,rootClassName:o,style:c,extra:l,headStyle:s={},bodyStyle:d={},title:A,loading:f,bordered:v=!0,size:E,type:C,cover:y,actions:x,tabList:M,children:N,activeTabKey:O,defaultActiveTabKey:B,tabBarExtraContent:U,hoverable:j,tabProps:P={},classNames:_,styles:V}=e,I=T(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:k,direction:D,card:L}=i.useContext(p.E_),W=e=>{var t;return u()(null===(t=null==L?void 0:L.classNames)||void 0===t?void 0:t[e],null==_?void 0:_[e])},H=e=>{var t;return Object.assign(Object.assign({},null===(t=null==L?void 0:L.styles)||void 0===t?void 0:t[e]),null==V?void 0:V[e])},G=i.useMemo(()=>{let e=!1;return i.Children.forEach(N,t=>{(null==t?void 0:t.type)===S&&(e=!0)}),e},[N]),z=k("card",a),[Z,Q,J]=R(z),X=i.createElement(h.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},N),F=void 0!==O,K=Object.assign(Object.assign({},P),{[F?"activeKey":"defaultActiveKey"]:F?O:B,tabBarExtraContent:U}),q=(0,b.Z)(E),Y=q&&"default"!==q?q:"large",$=M?i.createElement(m.Z,Object.assign({size:Y},K,{className:"".concat(z,"-head-tabs"),onChange:t=>{var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)},items:M.map(e=>{var{tab:t}=e;return Object.assign({label:t},T(e,["tab"]))})})):null;if(A||l||$){let e=u()("".concat(z,"-head"),W("header")),t=u()("".concat(z,"-head-title"),W("title")),a=u()("".concat(z,"-extra"),W("extra")),r=Object.assign(Object.assign({},s),H("header"));n=i.createElement("div",{className:e,style:r},i.createElement("div",{className:"".concat(z,"-head-wrapper")},A&&i.createElement("div",{className:t,style:H("title")},A),l&&i.createElement("div",{className:a,style:H("extra")},l)),$)}let ee=u()("".concat(z,"-cover"),W("cover")),et=y?i.createElement("div",{className:ee,style:H("cover")},y):null,en=u()("".concat(z,"-body"),W("body")),ea=Object.assign(Object.assign({},d),H("body")),ei=i.createElement("div",{className:en,style:ea},f?X:N),er=u()("".concat(z,"-actions"),W("actions")),eo=(null==x?void 0:x.length)?i.createElement(w,{actionClasses:er,actionStyle:H("actions"),actions:x}):null,ec=(0,g.Z)(I,["onTabChange"]),el=u()(z,null==L?void 0:L.className,{["".concat(z,"-loading")]:f,["".concat(z,"-bordered")]:v,["".concat(z,"-hoverable")]:j,["".concat(z,"-contain-grid")]:G,["".concat(z,"-contain-tabs")]:null==M?void 0:M.length,["".concat(z,"-").concat(q)]:q,["".concat(z,"-type-").concat(C)]:!!C,["".concat(z,"-rtl")]:"rtl"===D},r,o,Q,J),es=Object.assign(Object.assign({},null==L?void 0:L.style),c);return Z(i.createElement("div",Object.assign({ref:t},ec,{className:el,style:es}),n,et,ei,eo))});var V=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)0>t.indexOf(a[i])&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]]);return n};_.Grid=S,_.Meta=e=>{let{prefixCls:t,className:n,avatar:a,title:r,description:o}=e,c=V(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:l}=i.useContext(p.E_),s=l("card",t),d=u()("".concat(s,"-meta"),n),A=a?i.createElement("div",{className:"".concat(s,"-meta-avatar")},a):null,g=r?i.createElement("div",{className:"".concat(s,"-meta-title")},r):null,b=o?i.createElement("div",{className:"".concat(s,"-meta-description")},o):null,h=g||b?i.createElement("div",{className:"".concat(s,"-meta-detail")},g,b):null;return i.createElement("div",Object.assign({},c,{className:d}),A,h)};var I=n(47907),k=n(20703),D={src:"/_next/static/media/A1066Pro.07f38be6.png",height:314,width:202,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAOVBMVEVPUE9QUVGhnJZHSEg+PjxbXFy2tK9EREM1NjWTkZBmZ2ZbW1qxsrGiloSloqBMaXFdXl1dW1lpZl7uLRnsAAAAEXRSTlPb/tvI/tzH/v3clKfw8ecA7kHRRjQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicFcTJEQAgCACxVVDwPvov1jGPkPscmRTCjaB6Cpj/3U8Es1tIprvSROp6HKQBOlqCtlAAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},L={src:"/_next/static/media/A1266.850f7c94.png",height:328,width:214,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAP1BMVEVPUE9paWeNjIuxsrFSU1O4trOdm5s+Pj02NzdcXVykl4Sqo5imoqBSUlJfYWBMaXGAgIBVVVNhX11FRERraWFH9BGlAAAAEnRSTlPGaMnn/azI/PzH58namN4AcZWEOkYBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nB3Exw0AIAwAsaOG3sL+syLhhwmulUD2/lYQORY0nQjpr3otWWUszO5mPiCnAX1FSfW6AAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},W={src:"/_next/static/media/A1366-130T.0b83a737.png",height:318,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAP1BMVEU/PkedoLM4OD+jn6tIRU6ioa1YVWBUVV9JSVJPSlR1b3dCQ05hXWcxMz1AP0fP0+WUlqO5usp+gZBpaXSQkZvfLFCVAAAAC3RSTlPxVP381+e2/v7++lLBHpMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicBcEJAoAgCADBtSxEQDz6/1ub4fn6nagNX6g3nYiZL4g4Ce2SCTJkU+EtPygtAXuEpOg3AAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},H={src:"/_next/static/media/A1466-150T_.0b83a737.png",height:318,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAP1BMVEU/PkedoLM4OD+jn6tIRU6ioa1YVWBUVV9JSVJPSlR1b3dCQ05hXWcxMz1AP0fP0+WUlqO5usp+gZBpaXSQkZvfLFCVAAAAC3RSTlPxVP381+e2/v7++lLBHpMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicBcEJAoAgCADBtSxEQDz6/1ub4fn6nagNX6g3nYiZL4g4Ce2SCTJkU+EtPygtAXuEpOg3AAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},G={src:"/_next/static/media/A1566Pro180T.791f50a1.png",height:318,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAP1BMVEU/PkedoLM4OD+jn6tIRU6ioa1YVWBUVV9JSVJPSlR1b3dCQ05hXWcxMz1AP0fP0+WUlqO5usp+gZBpaXSQkZvfLFCVAAAAC3RSTlPxVP381+e2/v7++lLBHpMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicBcEJAoAgCADBtSxEQDz6/1ub4fn6nagNX6g3nYiZL4g4Ce2SCTJkU+EtPygtAXuEpOg3AAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},z={src:"/_next/static/media/A1676Pro367T.791f50a1.png",height:318,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAP1BMVEU/PkedoLM4OD+jn6tIRU6ioa1YVWBUVV9JSVJPSlR1b3dCQ05hXWcxMz1AP0fP0+WUlqO5usp+gZBpaXSQkZvfLFCVAAAAC3RSTlPxVP381+e2/v7++lLBHpMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicBcEJAoAgCADBtSxEQDz6/1ub4fn6nagNX6g3nYiZL4g4Ce2SCTJkU+EtPygtAXuEpOg3AAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},Z={src:"/_next/static/media/A1166Pro-S-75T_.07f38be6.png",height:314,width:202,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAOVBMVEVPUE9QUVGhnJZHSEg+PjxbXFy2tK9EREM1NjWTkZBmZ2ZbW1qxsrGiloSloqBMaXFdXl1dW1lpZl7uLRnsAAAAEXRSTlPb/tvI/tzH/v3clKfw8ecA7kHRRjQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicFcTJEQAgCACxVVDwPvov1jGPkPscmRTCjaB6Cpj/3U8Es1tIprvSROp6HKQBOlqCtlAAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},Q=n(23349),J=n(70975),X=n(14297),F=()=>{let e=(0,I.useRouter)(),t=(0,X.M)(),[n,r]=(0,i.useState)(),[o,c]=(0,i.useState)("EN"),A=(t,n)=>{let a=encodeURIComponent(JSON.stringify({id:n.id,link:n.link,name:n.name,topup:n.topup,topupNum:n.topupNum,interest:n.interest,interestname:n.interestname}));e.push("".concat(t,"?MinerData=").concat(a))},u=async e=>{let n=await (0,Q.RA)(e.ETHAddress,J.B),a=await n.getDeposits(t.address),i=0;for(let e=0;e<a.length;e++)i+=Number((0,Q.rE)(a[e].principal));r(i)};return(0,i.useEffect)(()=>{let e=localStorage.getItem("language");e&&c(e)},[]),(0,i.useEffect)(()=>{t&&u(JSON.parse(localStorage.getItem("Nodestorage")||""))},[t]),(0,a.jsxs)("div",{className:l().Content,children:[(0,a.jsx)("div",{className:l().MiningMachinestyle,children:"EN"==o?"Mining machine":"矿机"}),(0,a.jsx)(s.Z,{gutter:[16,16],className:l().Cardstyle,children:[{id:1,link:"/MinerDetails",src:D,name:"A1066Pro",topup:"EN"==o?"TopUp":"充值",topupNum:"0-999USDT",interest:"EN"==o?"Interest":"利息",interestname:"EN"==o?"0.5%/day":"0.5%/天"},{id:2,link:"/MinerDetails",src:L,name:"A1166Pro-S-75T",topup:"EN"==o?"TopUp":"充值",topupNum:"1000-5999USDT",interest:"EN"==o?"Interest":"利息",interestname:"EN"==o?"1%/day":"1%/天"},{id:3,link:"/MinerDetails",src:W,name:"A1266",topup:"EN"==o?"TopUp":"充值",topupNum:"6000-14999USDT",interest:"EN"==o?"Interest":"利息",interestname:"EN"==o?"3%/day":"3%/天"},{id:4,link:"/MinerDetails",src:H,name:"A1366-130T",topup:"EN"==o?"TopUp":"充值",topupNum:"15000-29999USDT",interest:"EN"==o?"Interest":"利息",interestname:"EN"==o?"5%/day":"5%/天"},{id:5,link:"/MinerDetails",src:G,name:"A1466-150T",topup:"EN"==o?"TopUp":"充值",topupNum:"30000-59999USDT",interest:"EN"==o?"Interest":"利息",interestname:"EN"==o?"8%/day":"8%/天"},{id:6,link:"/MinerDetails",src:z,name:"A1566Pro180T",topup:"EN"==o?"TopUp":"充值",topupNum:"60000-99999USDT",interest:"EN"==o?"Interest":"利息",interestname:"EN"==o?"12%/day":"12%/天"},{id:7,link:"/MinerDetails",src:Z,name:"A1676Pro367T",topup:"EN"==o?"TopUp":"充值",topupNum:"EN"==o?"Uncapped %/ day":"100000以上USDT",interest:"EN"==o?"Interest":"利息",interestname:"EN"==o?"Uncapped %/ day":"上不封顶%/天"}].map((e,t)=>(0,a.jsx)(d.Z,{span:12,className:l().Cardstyleone,onClick:()=>A("/MinerDetails",e),children:(0,a.jsxs)(_,{hoverable:!0,className:l().Card,bodyStyle:{padding:0},children:[(0,a.jsx)("div",{className:l().CardImageWrapper,children:(0,a.jsx)(k.default,{src:e.src,alt:e.name,width:122,height:90,className:l().CardImage})}),(0,a.jsxs)("div",{className:l().BGconter,children:[(0,a.jsx)("div",{className:l().CardTitle,children:e.name}),(0,a.jsxs)("div",{className:l().Cardcenter,children:[(0,a.jsx)("div",{children:e.topup}),(0,a.jsx)("div",{children:e.topupNum})]}),(0,a.jsxs)("div",{className:l().Cardcenter,children:[(0,a.jsx)("div",{children:e.interest}),(0,a.jsx)("div",{children:e.interestname})]})]})]})},t))})]})},K=n(93800);(0,r.default)(()=>Promise.all([n.e(8310),n.e(27508),n.e(23663),n.e(86114),n.e(92792),n.e(73107),n.e(3003),n.e(98268),n.e(17123)]).then(n.bind(n,37996)),{loadableGenerated:{webpack:()=>[37996]},ssr:!0});var q=()=>{let[e,t]=(0,i.useState)("EN");return(0,i.useEffect)(()=>{let e=localStorage.getItem("language");e&&t(e)},[]),(0,a.jsxs)(o.MenuProvider,{children:[(0,a.jsx)(K.Z,{title:"EN"==e?"Mine":"挖矿",backUrl:"/HomeLess"}),(0,a.jsx)(F,{})]})}},38245:function(e){e.exports={Content:"MiningMachine_Content__5O6fi",MiningMachinestyle:"MiningMachine_MiningMachinestyle__n0P_s",Cardstyle:"MiningMachine_Cardstyle__pRUJk",Cardstyleone:"MiningMachine_Cardstyleone__vWh9Q",Card:"MiningMachine_Card__FrtNx",CardImageWrapper:"MiningMachine_CardImageWrapper__Hh0js",CardImage:"MiningMachine_CardImage__kn2mg",BGconter:"MiningMachine_BGconter__teWrN",CardTitle:"MiningMachine_CardTitle__PmPon",Cardcenter:"MiningMachine_Cardcenter__lm7xN"}},72338:function(e){e.exports={nativeBar:"NativeBar_nativeBar__KKFtY",leftarraw:"NativeBar_leftarraw__qCP0h",m1:"NativeBar_m1__tIBI3",t1:"NativeBar_t1__6IyQ1"}}},function(e){e.O(0,[38726,20703,5207,46344,14297,81011,37745,69146,92971,8069,1744],function(){return e(e.s=89593)}),_N_E=e.O()}]);