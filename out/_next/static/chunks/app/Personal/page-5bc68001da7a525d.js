(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32642,58106,1975,47408,43782],{88061:function(e,t,n){Promise.resolve().then(n.bind(n,1308)),Promise.resolve().then(n.bind(n,18286)),Promise.resolve().then(n.bind(n,58887)),Promise.resolve().then(n.bind(n,13265)),Promise.resolve().then(n.bind(n,19721))},1308:function(e,t,n){"use strict";n.r(t);var r=n(3827),a=n(64090),l=n(46802),i=n.n(l),o=n(14297),s=n(23349),c=n(70975);t.default=()=>{let[e,t]=(0,a.useState)(),[n,l]=(0,a.useState)(),d=(0,o.M)(),[u,m]=(0,a.useState)("EN"),_=async e=>{let n=await (0,s.RA)(e.ETHAddress,c.B),r=await n.getDeposits(d.address),a=0,i=0;for(let e=0;e<r.length;e++)a+=Number((0,s.rE)(r[e].principal))-Number((0,s.rE)(r[e].frozenPrincipal)),i+=Number((0,s.rE)(r[e].interest))-Number((0,s.rE)(r[e].frozenInterest));l(a),t(Number(i).toFixed(3))};return(0,a.useEffect)(()=>{let e=localStorage.getItem("language");e&&m(e),d&&_(JSON.parse(localStorage.getItem("Nodestorage")||""))},[d]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:i().Content,children:[(0,r.jsx)("span",{className:i().ContentText,children:"EN"===u?" My Account":"我的账户"}),(0,r.jsxs)("div",{className:i().currencycontainer,children:[(0,r.jsxs)("div",{className:i().currencyrow,children:[(0,r.jsx)("div",{className:i().USDTnuber,children:n}),(0,r.jsx)("div",{className:i().USDTstyle,children:"EN"===u?"capital（USDT）":"本金（USDT）"})]}),(0,r.jsxs)("div",{className:i().currencyrow,children:[(0,r.jsx)("div",{className:i().USDTnuber,children:e}),(0,r.jsx)("div",{className:i().USDTstyle,children:"EN"===u?"Interest（USDT）":"利息(USDT)）"})]})]})]})})}},18286:function(e,t,n){"use strict";n.r(t),n.d(t,{MenuContext:function(){return l},MenuProvider:function(){return i}});var r=n(3827),a=n(64090);let l=(0,a.createContext)({isRightMenuVisible:!1,toggleRightMenu:()=>{},hideRightMenu:()=>{}}),i=e=>{let{children:t}=e,[n,i]=(0,a.useState)(!1);return(0,r.jsx)(l.Provider,{value:{isRightMenuVisible:n,toggleRightMenu:()=>{i(e=>!e)},hideRightMenu:()=>{i(!1)}},children:t})}},58887:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(3827),a=n(64090),l=n(99484),i=n.n(l),o=n(42434),s=n(65823),c=n(16480),d=n.n(c),u=n(72480),m=n(57499),_=n(10534),v=e=>{let t;let{value:n,formatter:r,precision:l,decimalSeparator:i,groupSeparator:o="",prefixCls:s}=e;if("function"==typeof r)t=r(n);else{let e=String(n),r=e.match(/^(-?)(\d*)(\.(\d+))?$/);if(r&&"-"!==e){let e=r[1],n=r[2]||"0",c=r[4]||"";n=n.replace(/\B(?=(\d{3})+(?!\d))/g,o),"number"==typeof l&&(c=c.padEnd(l,"0").slice(0,l>0?l:0)),c&&(c="".concat(i).concat(c)),t=[a.createElement("span",{key:"int",className:"".concat(s,"-content-value-int")},e,n),c&&a.createElement("span",{key:"decimal",className:"".concat(s,"-content-value-decimal")},c)]}else t=e}return a.createElement("span",{className:"".concat(s,"-content-value")},t)},p=n(11303),f=n(64872),y=n(80316);let g=e=>{let{componentCls:t,marginXXS:n,padding:r,colorTextDescription:a,titleFontSize:l,colorTextHeading:i,contentFontSize:o,fontFamily:s}=e;return{["".concat(t)]:Object.assign(Object.assign({},(0,p.Wf)(e)),{["".concat(t,"-title")]:{marginBottom:n,color:a,fontSize:l},["".concat(t,"-skeleton")]:{paddingTop:r},["".concat(t,"-content")]:{color:i,fontSize:o,fontFamily:s,["".concat(t,"-content-value")]:{display:"inline-block",direction:"ltr"},["".concat(t,"-content-prefix, ").concat(t,"-content-suffix")]:{display:"inline-block"},["".concat(t,"-content-prefix")]:{marginInlineEnd:n},["".concat(t,"-content-suffix")]:{marginInlineStart:n}}})}};var C=(0,f.I$)("Statistic",e=>[g((0,y.TS)(e,{}))],e=>{let{fontSizeHeading3:t,fontSize:n}=e;return{titleFontSize:n,contentFontSize:t}}),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},x=e=>{let{prefixCls:t,className:n,rootClassName:r,style:l,valueStyle:i,value:o=0,title:s,valueRender:c,prefix:p,suffix:f,loading:y=!1,formatter:g,precision:x,decimalSeparator:N=".",groupSeparator:b=",",onMouseEnter:j,onMouseLeave:T}=e,S=h(e,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:w,direction:I,statistic:E}=a.useContext(m.E_),R=w("statistic",t),[P,O,F]=C(R),D=a.createElement(v,{decimalSeparator:N,groupSeparator:b,prefixCls:R,formatter:g,precision:x,value:o}),M=d()(R,{["".concat(R,"-rtl")]:"rtl"===I},null==E?void 0:E.className,n,r,O,F),A=(0,u.Z)(S,{aria:!0,data:!0});return P(a.createElement("div",Object.assign({},A,{className:M,style:Object.assign(Object.assign({},null==E?void 0:E.style),l),onMouseEnter:j,onMouseLeave:T}),s&&a.createElement("div",{className:"".concat(R,"-title")},s),a.createElement(_.Z,{paragraph:!1,loading:y,className:"".concat(R,"-skeleton")},a.createElement("div",{style:i,className:"".concat(R,"-content")},p&&a.createElement("span",{className:"".concat(R,"-content-prefix")},p),c?c(D):D,f&&a.createElement("span",{className:"".concat(R,"-content-suffix")},f)))))};let N=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];var b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let j=1e3/30;var T=a.memo(e=>{let{value:t,format:n="HH:mm:ss",onChange:r,onFinish:l}=e,i=b(e,["value","format","onChange","onFinish"]),c=(0,o.Z)(),d=a.useRef(null),u=()=>{null==l||l(),d.current&&(clearInterval(d.current),d.current=null)},m=()=>{let e=new Date(t).getTime();e>=Date.now()&&(d.current=setInterval(()=>{c(),null==r||r(e-Date.now()),e<Date.now()&&u()},j))};return a.useEffect(()=>(m(),()=>{d.current&&(clearInterval(d.current),d.current=null)}),[t]),a.createElement(x,Object.assign({},i,{value:t,valueRender:e=>(0,s.Tm)(e,{title:void 0}),formatter:(e,t)=>(function(e,t){let{format:n=""}=t;return function(e,t){let n=e,r=/\[[^\]]*]/g,a=(t.match(r)||[]).map(e=>e.slice(1,-1)),l=t.replace(r,"[]"),i=N.reduce((e,t)=>{let[r,a]=t;if(e.includes(r)){let t=Math.floor(n/a);return n-=t*a,e.replace(RegExp("".concat(r,"+"),"g"),e=>{let n=e.length;return t.toString().padStart(n,"0")})}return e},l),o=0;return i.replace(r,()=>{let e=a[o];return o+=1,e})}(Math.max(new Date(e).getTime()-Date.now(),0),n)})(e,Object.assign(Object.assign({},t),{format:n}))}))});x.Countdown=T;var S=n(96477),w=n(28807),I=n(13365),E=n.n(I),R=n(23349),P=e=>{let{Data:t}=e,[n,l]=(0,a.useState)("EN"),i=t||[],{Countdown:o}=x;return(0,a.useEffect)(()=>{let e=localStorage.getItem("language");e&&l(e)},[]),(0,r.jsx)("div",{className:E().Content,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:E().ComputingPower,children:[(0,r.jsx)("div",{style:{width:"40%"},className:E().AmountReceived,children:"EN"===n?"quantities":"数量"}),(0,r.jsx)("div",{style:{width:"35%"},className:E().AmountReceived,children:"EN"===n?"Interest":"利息"}),(0,r.jsx)("div",{style:{width:"25%"},className:E().AmountReceived,children:"EN"===n?"Unlocking time":"解锁时间"})]}),(0,r.jsx)("div",{className:E().CustomerInformation,children:i.length>0?(0,r.jsx)("div",{id:"scrollableDiv",style:{height:250,overflow:"auto",padding:"0 5px",fontSize:"18px",color:"#FFFFFF"},children:(0,r.jsx)(S.Z,{dataSource:i,renderItem:(e,t)=>(0,r.jsx)(S.Z.Item,{children:(0,r.jsxs)("div",{className:E().ComputingPowercont,children:[(0,r.jsx)("div",{style:{width:"40%"},children:(0,R.rE)(e.principal)}),(0,r.jsx)("div",{style:{width:"35%"},children:(Number((0,R.rE)(e.interest))-Number((0,R.rE)(e.frozenInterest))).toFixed(3)}),(0,r.jsx)("div",{style:{width:"25%"},children:(0,r.jsx)(o,{value:1e3*e.timestamp.toString()+2592e6})})]})},t)})}):(0,r.jsx)(w.Z,{description:(0,r.jsx)("span",{style:{color:"#FFFFFF"},children:"EN"===n?"No data available":"暂无数据"})})})]})})},O=n(2523),F=n.n(O),D=e=>{let{Data:t}=e,n=t||[],[l,i]=(0,a.useState)("EN");return(0,a.useEffect)(()=>{let e=localStorage.getItem("language");e&&i(e)},[]),(0,r.jsx)("div",{className:F().Content,children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:F().ComputingPower,children:[(0,r.jsx)("div",{style:{width:"25%"},className:F().AmountReceived,children:"EN"===l?"typology":"类型"}),(0,r.jsx)("div",{style:{width:"30%"},className:F().AmountReceived,children:"EN"===l?"quantities":"数量"}),(0,r.jsx)("div",{style:{width:"30%"},className:F().AmountReceived,children:"EN"===l?"status":"状态"})]}),(0,r.jsx)("div",{className:F().CustomerInformation,children:n.length>0?(0,r.jsx)("div",{id:"scrollableDiv",style:{height:250,overflow:"auto",padding:"0 5px",fontSize:"18px",color:"#FFFFFF"},children:(0,r.jsx)(S.Z,{dataSource:n,renderItem:(e,t)=>(0,r.jsx)(S.Z.Item,{children:(0,r.jsxs)("div",{className:F().ComputingPowercont,children:[(0,r.jsx)("div",{style:{width:"25%"},children:e.isPrincipal?"EN"===l?"capital":"本金":"EN"===l?"Interest":"利息"}),(0,r.jsx)("div",{style:{width:"30%"},children:Number((0,R.rE)(e.amount)).toFixed(3)}),(0,r.jsx)("div",{style:{width:"30%"},children:e.approved?(0,r.jsx)("span",{style:{color:"#0dbd8b"},children:"EN"===l?"Withdrawal Successful":"提现成功"}):e.rejected?(0,r.jsx)("span",{style:{color:"#dc362e"},children:"EN"===l?" Rejected":"已拒绝"}):(0,r.jsx)("span",{style:{color:"#cf8f30"},children:"EN"===l?"Pending approval":"待批准"})})]})},t)})}):(0,r.jsx)(w.Z,{description:(0,r.jsx)("span",{style:{color:"#FFFFFF"},children:"EN"===l?"No data available":"暂无数据"})})})]})})},M=n(70975),A=n(14297),U=()=>{let[e,t]=(0,a.useState)("team"),[n,l]=(0,a.useState)("#e89e2c"),[o,s]=(0,a.useState)([]),[c,d]=(0,a.useState)([]),u=(0,A.M)(),[m,_]=(0,a.useState)("EN"),v=async e=>{let t=await (0,R.RA)(e.ETHAddress,M.B);s(await t.getDeposits(u.address))},p=async e=>{let t=await (0,R.RA)(e.ETHAddress,M.B);d(await t.getWithdrawalRequests(u.address))},f=e=>{"team"==e?v(JSON.parse(localStorage.getItem("Nodestorage")||"")):p(JSON.parse(localStorage.getItem("Nodestorage")||"")),t(e),l("team"===e||"transaction"===e?"#e89e2c":"#ffffff")};return(0,a.useEffect)(()=>{let e=localStorage.getItem("language");e&&_(e),u&&v(JSON.parse(localStorage.getItem("Nodestorage")||""))},[u]),(0,r.jsxs)("div",{className:i().Content,children:[(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:i().ContentText,style:{color:"team"===e?n:"#ffffff",borderBottomColor:"team"===e?"#e89e2c":"transparent",marginRight:"30px"},onClick:()=>f("team"),children:"EN"===m?"Recharge Record":"充值记录"}),(0,r.jsx)("span",{className:i().ContentText,style:{color:"transaction"===e?n:"#ffffff",borderBottomColor:"transaction"===e?"#e89e2c":"transparent"},onClick:()=>f("transaction"),children:"EN"===m?"Withdrawal":"提现记录"})]})}),"team"===e?(0,r.jsx)(P,{Data:o}):(0,r.jsx)(D,{Data:c})]})}},47907:function(e,t,n){"use strict";var r=n(15313);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},46802:function(e){e.exports={Content:"IndividualCenter_Content___wjvr",inputstyle2:"IndividualCenter_inputstyle2__2i3kU",inputstyle3:"IndividualCenter_inputstyle3__zGc4c",inputstyle:"IndividualCenter_inputstyle__AcblX",buttonstyle:"IndividualCenter_buttonstyle__Wde1P",buttonstyleflg:"IndividualCenter_buttonstyleflg__18Sjb",buttonHelpFriendstyle:"IndividualCenter_buttonHelpFriendstyle__1sxJA",ContentText:"IndividualCenter_ContentText__fjVfp",ContentInstructions:"IndividualCenter_ContentInstructions__DnXFI",Contentlabel:"IndividualCenter_Contentlabel__ieI3e",labelContainer:"IndividualCenter_labelContainer__FWyom",labelLeft:"IndividualCenter_labelLeft__o1rVM",labelLeftZSD:"IndividualCenter_labelLeftZSD__oECkw",labelLeftone:"IndividualCenter_labelLeftone__pRmNf",labelRight:"IndividualCenter_labelRight__OCH3M",cost:"IndividualCenter_cost__4UJFY",CalculatedValue:"IndividualCenter_CalculatedValue__v0Tdv",Ustyle:"IndividualCenter_Ustyle__C9Ndz",currencycontainer:"IndividualCenter_currencycontainer__Yq8YW",currencyrow:"IndividualCenter_currencyrow__kuwEE",USDTstyle:"IndividualCenter_USDTstyle__AqPUb",USDTnuber:"IndividualCenter_USDTnuber__gY5Nt",NumberPeoplestyle:"IndividualCenter_NumberPeoplestyle__fNiXR",NumberPeople:"IndividualCenter_NumberPeople__pf1sL",Tabsstyle:"IndividualCenter_Tabsstyle__mFk7W",teamstyle:"IndividualCenter_teamstyle__zLpj9",ComputingPower:"IndividualCenter_ComputingPower__69TgK",power:"IndividualCenter_power__hFUDX",AmountReceived:"IndividualCenter_AmountReceived__rXDB4",ArrivalTime:"IndividualCenter_ArrivalTime__2GUaE",ComputingPowercont:"IndividualCenter_ComputingPowercont__Oyr35",conters:"IndividualCenter_conters__Nwpd_",contersone:"IndividualCenter_contersone__OZHd7",Cancelstyle:"IndividualCenter_Cancelstyle__zGNSa"}},13365:function(e){e.exports={Content:"MyTeam_Content__IKtll",ContentText:"MyTeam_ContentText__1mM9h",Tabsstyle:"MyTeam_Tabsstyle__TUl7a",teamstyle:"MyTeam_teamstyle__6HpOS",ComputingPower:"MyTeam_ComputingPower__N3oLX",Contentlabel:"MyTeam_Contentlabel__EOifP",power:"MyTeam_power__Nzlx_",AmountReceived:"MyTeam_AmountReceived__joQlH",ArrivalTime:"MyTeam_ArrivalTime__m_8uD",ComputingPowercont:"MyTeam_ComputingPowercont__Nvi2l","demo-loadmore-list":"MyTeam_demo-loadmore-list__exADH"}},99484:function(e){e.exports={Content:"TeamsSwitchTransactionRecords_Content__4HVqP",ContentText:"TeamsSwitchTransactionRecords_ContentText__ZplOX"}},2523:function(e){e.exports={Content:"TransactionRecord_Content__c2tcv",ContentText:"TransactionRecord_ContentText__PPxWC",Tabsstyle:"TransactionRecord_Tabsstyle__6UheX",teamstyle:"TransactionRecord_teamstyle__UGPem",ComputingPower:"TransactionRecord_ComputingPower__V712B",Contentlabel:"TransactionRecord_Contentlabel__ujDoi",power:"TransactionRecord_power__DOomv",AmountReceived:"TransactionRecord_AmountReceived__rRegs",ArrivalTime:"TransactionRecord_ArrivalTime__cETIz",ComputingPowercont:"TransactionRecord_ComputingPowercont__yT5Z7","demo-loadmore-list":"TransactionRecord_demo-loadmore-list__kMV5R"}}},function(e){e.O(0,[8310,75178,3883,20703,37867,46344,86114,92792,23663,14297,52879,73107,9481,96477,37745,33425,14292,92971,8069,1744],function(){return e(e.s=88061)}),_N_E=e.O()}]);