(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{72372:function(e,t,l){Promise.resolve().then(l.bind(l,46476))},93800:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o}});var n=l(3827);l(64090);var i=l(20703),a=l(72338),s=l.n(a),r={src:"/_next/static/media/leftarraw.9fdb1a6b.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEVMaXH////////////////////////+/v6xnI00AAAACHRSTlMAoZQCBDUGP+fyt9kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicRYpBDgAgCMMKTPn/j800xFObdQDsllFkmBDDpK5MsL3ln9ESBwjAADyD9g/8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},c=l(47907),o=e=>{let{title:t,backUrl:l}=e,a=(0,c.useRouter)(),o=()=>{a.push(l)};return(0,n.jsx)("div",{className:s().nativeBar,children:(0,n.jsxs)("div",{className:s().leftarraw,children:[(0,n.jsx)(i.default,{onClick:()=>o(),className:s().m1,src:r,alt:"coin",width:50,height:50}),(0,n.jsx)("div",{className:s().t1,children:t})]})})}},46476:function(e,t,l){"use strict";l.r(t);var n=l(3827),i=l(64090),a=l(88549),s=l(35573),r=l(31254),c=l(38302),o=l(28683),u=l(83012),d=l(1073),m=l(54201),_=l(20383),h=l(13931),x=l(66403),v=l(93800),A=l(23349),j=l(47907),p=l(70975),C=l(80219),D=l.n(C),f=l(52805);let{Option:M}=a.default,N=()=>{let e;let[t]=s.Z.useForm(),[l,C]=(0,i.useState)(!1),N=(0,j.useSearchParams)(),y=(null==N?void 0:N.get("MinerData"))||null;try{e=y?JSON.parse(y):null}catch(t){console.error("解析 MinerData 时出错:",t),e=null}let b=()=>{C(!l)},g=()=>{if(!e||!e.id)return{min:1,max:1/0};switch(e.id){case 1:return{min:1,max:999};case 2:return{min:1e3,max:5999};case 3:return{min:6e3,max:14999};case 4:return{min:15e3,max:29999};case 5:return{min:3e4,max:59999};case 6:return{min:6e4,max:99999};case 7:return{min:1e5,max:1/0};default:return{min:1,max:1/0}}},w=async e=>{try{let l=f.vz(e.USDTnum.toString(),18),n=await (0,A.RA)(x.c.ETHAddress,p.B);await n.deposit(l),r.ZP.success("充值成功！"),t.resetFields()}catch(e){r.ZP.error("充值失败，请稍后再试")}};return(0,n.jsxs)("div",{className:D().rewardcontainer,children:[(0,n.jsx)(v.default,{title:"充值与奖励",backUrl:"/Machine"}),(0,n.jsxs)("div",{className:D().conter,children:[(0,n.jsxs)("div",{style:{height:l?"400px":"300px",overflow:"hidden"},children:[(0,n.jsx)("div",{className:D().contertitle,children:null==e?void 0:e.name}),(0,n.jsxs)("div",{className:D().topup,children:[(0,n.jsx)("span",{children:"充值"}),(0,n.jsx)("span",{children:null==e?void 0:e.topupNum})]}),(0,n.jsxs)("div",{className:D().topup,children:[(0,n.jsx)("span",{children:"利息"}),(0,n.jsx)("span",{children:null==e?void 0:e.interestname})]}),(0,n.jsx)("div",{children:[{title:"额定算力",value:"180TH/s, -9%~+9%"},{title:"能效比",value:"23.5J/TH, -7%~+7%"},{title:"功耗",value:"3259W, -10%~+10%"},{title:"连接方式",value:"RJ45 1G Ethernet"},{title:"风扇",value:"4 x 12050 FAN"},{title:"风量，CFM",value:"420 MAX"},{title:"运行温度",value:"-7\xb0C ~ 39\xb0C"},{title:"裸机尺寸",value:"L271mm x W198mm x H290mm"},{title:"外箱尺寸",value:"L420mm x W325mm x H430mm"},{title:"净重",value:"14.5 kg"},{title:"毛重",value:"14.6 kg"},{title:"交流电压输入范围，Volt",value:"200 ~ 300 V"},{title:"交流电源输入频率范围，Hz",value:"50 ~ 70 Hz"},{title:"交流电流输入范围，Amp",value:"16 A"}].map((e,t)=>(0,n.jsxs)("div",{className:D().ComputingPower,children:[(0,n.jsx)("div",{children:e.title}),(0,n.jsx)("div",{children:e.value})]},t))})]}),(0,n.jsx)("div",{className:D().arrows,children:l?(0,n.jsx)(m.Z,{className:"".concat(D().lconstyle," ").concat(l?"rotate-up":""),onClick:b}):(0,n.jsx)(_.Z,{className:"".concat(D().lconstyle," ").concat(l?"":"rotate-down"),onClick:b})})]}),(0,n.jsx)("div",{className:D().Content,children:(0,n.jsxs)(s.Z,{name:"amount",form:t,onFinish:w,layout:"vertical",style:{color:"white"},children:[(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(o.Z,{span:24,children:(0,n.jsxs)("div",{className:D().Contentinterest,children:[(0,n.jsx)("span",{className:D().Contentlabel,children:"充值(USDT)"}),(0,n.jsx)("div",{className:"tikuan",children:(0,n.jsxs)(a.default,{defaultValue:"TRC20USDT",suffixIcon:(0,n.jsx)(h.Z,{style:{color:"#E89E2C"}}),children:[(0,n.jsx)(M,{value:"TRC20USDT",children:"TRC20 USDT"}),(0,n.jsx)(M,{value:"ERC20USDT",children:"ERC20 USDT"}),(0,n.jsx)(M,{value:"BEP20USDT",children:"BEP20 USDT"})]})})]})}),(0,n.jsx)(o.Z,{span:24,style:{marginTop:12,marginBottom:12},children:(0,n.jsx)(s.Z.Item,{colon:!1,name:"USDTnum",rules:[{required:!0,message:"请输入数量"},{validator:(e,t)=>{if(null==t||""===t)return Promise.reject("请输入数量");let l=Number(t);if(isNaN(l)||l<=0||!Number.isInteger(l))return Promise.reject("请输入有效的正整数金额");let{min:n,max:i}=g();return l<n||l>i?Promise.reject("输入值超出范围，请输入有效的金额"):Promise.resolve()}}],children:(0,n.jsx)(u.Z,{placeholder:"请输入数量",className:D().inputstyle,style:{width:"100%"},min:g().min,max:g().max!==1/0?g().max:void 0,step:1,parser:e=>Math.floor(Number(e||"0")),formatter:e=>"".concat(e),stringMode:!0})})})]}),(0,n.jsx)(c.Z,{style:{marginTop:24},children:(0,n.jsx)(o.Z,{span:24,children:(0,n.jsx)(s.Z.Item,{children:(0,n.jsx)(d.ZP,{type:"primary",htmlType:"submit",className:D().buttonstyle,children:"充值"})})})})]})})]})};t.default=()=>(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)("div",{children:"Loading..."}),children:(0,n.jsx)(N,{})})},72338:function(e){e.exports={nativeBar:"NativeBar_nativeBar__KKFtY",leftarraw:"NativeBar_leftarraw__qCP0h",m1:"NativeBar_m1__tIBI3",t1:"NativeBar_t1__6IyQ1"}},80219:function(e){e.exports={rewardcontainer:"MinerDetails_rewardcontainer__hG_rC",arrows:"MinerDetails_arrows__0UTWa",lconstyle:"MinerDetails_lconstyle__UlNRM",Content:"MinerDetails_Content__z3NEj",inputstyle:"MinerDetails_inputstyle__B04gf",buttonstyle:"MinerDetails_buttonstyle__rRHDJ",buttonstyleflg:"MinerDetails_buttonstyleflg__ysWfU",buttonHelpFriendstyle:"MinerDetails_buttonHelpFriendstyle__Omda_",ContentText:"MinerDetails_ContentText__PqI0R",ContentInstructions:"MinerDetails_ContentInstructions__j9Pvq",Contentinterest:"MinerDetails_Contentinterest__09YZQ",Contentlabel:"MinerDetails_Contentlabel__naPNI",interest:"MinerDetails_interest__CAJbj",labelContainer:"MinerDetails_labelContainer__29WrK",labelLeft:"MinerDetails_labelLeft__vkfMF",labelRight:"MinerDetails_labelRight__bhhjI",CalculatedValue:"MinerDetails_CalculatedValue__1ezxI",Ustyle:"MinerDetails_Ustyle__hQ_sy",Colstyle:"MinerDetails_Colstyle__5cfVC",conter:"MinerDetails_conter__4rvP0",contertitle:"MinerDetails_contertitle__iLGuX",topup:"MinerDetails_topup__io55x",ComputingPower:"MinerDetails_ComputingPower__KqGTU"}}},function(e){e.O(0,[86164,87520,22202,35573,6624,16816,59156,85321,69146,92971,8069,1744],function(){return e(e.s=72372)}),_N_E=e.O()}]);