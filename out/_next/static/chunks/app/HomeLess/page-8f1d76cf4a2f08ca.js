(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15579,41931],{62912:function(e,t,n){Promise.resolve().then(n.t.bind(n,51228,23)),Promise.resolve().then(n.bind(n,6634)),Promise.resolve().then(n.bind(n,18286)),Promise.resolve().then(n.bind(n,54221)),Promise.resolve().then(n.bind(n,19721))},6634:function(e,t,n){"use strict";n.r(t),n.d(t,{client:function(){return m},default:function(){return f}});var a=n(3827),i=n(64090),s=n(30781),u=n.n(s),r=n(73107),o=n(86591),p=n(20703),c=n(87741),l=n(47275),y=n(66403),d=n(47822);let m=(0,c.P)({clientId:"1283d713ed4b644af8c26898225cd1ca"});(0,l.u)({client:m,address:y.c.ZSDSwapAddress,abi:[{inputs:[{internalType:"address",name:"zsdAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"amountusdtToken",type:"uint256"},{internalType:"uint256",name:"amountzsdtToken",type:"uint256"}],name:"addLiquidity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"addToWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"addUSDT",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"zsdAmount",type:"uint256"}],name:"getAmountUSDTOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"getAmountZSDOut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"projectUSDTPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"removeFromWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_usdtReserve",type:"uint256"}],name:"setUsdtReserve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_ZsdReserve",type:"uint256"}],name:"setZsdReserve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"usdtReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountusdtToken",type:"uint256"}],name:"usdtTokenTozsdtTokenSwap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"zsdReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"zsdtToken",outputs:[{internalType:"contract ZSD",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountzsdtToken",type:"uint256"}],name:"zsdtTokenTousdtTokenSwap",outputs:[],stateMutability:"nonpayable",type:"function"}],chain:d.e});var f=()=>{let[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(!0);(0,i.useEffect)(()=>{let e=setInterval(()=>{t([]),c()},3e4);return()=>clearInterval(e)},[]),(0,i.useEffect)(()=>{c()},[]);let c=async()=>{try{s(!0);let e=await r.Z.get("https://api.coinranking.com/v2/coins?referenceCurrencyUuid=5k-_VTxqtCEI",{params:{category:"onekey-gainers",sparkline:!0,sparklinePoints:100,ids:"bitcoin,ethereum,binancecoin,ripple,solana,dogecoin"},headers:{"X-Onekey-Request-Currency":"usd"}});t(e.data.data.coins),s(!1)}catch(e){console.error("请求错误:",e),s(!1),t([])}};return(0,a.jsxs)("div",{className:u().container,children:[(0,a.jsx)("div",{className:u().marketstyle,children:"行        情"}),(0,a.jsxs)("div",{className:u().titleContent,children:[(0,a.jsx)("div",{className:u().marketInfo,children:(0,a.jsx)("span",{children:"市值"})}),(0,a.jsx)("div",{className:u().priceInfo,children:(0,a.jsx)("span",{className:u().newtext,children:"最近价"})}),(0,a.jsx)("div",{className:u().fluctuateInfo,children:(0,a.jsx)("span",{className:u().newtext,children:"24H波动"})})]}),(0,a.jsx)(o.Z,{spinning:n,tip:"请稍等，数据实时刷新中...",children:e.slice(0,8).map((e,t)=>(0,a.jsxs)("div",{className:u().currencyItem,children:[(0,a.jsxs)("div",{className:u().currencyInfo,children:[(0,a.jsx)(p.default,{src:"Zsd"==e.name?"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Zsd.png":e.iconUrl,alt:e.name,className:u().btnIcon,width:48,height:48}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:u().currencyName,children:e.symbol}),(0,a.jsxs)("div",{className:u().currencyMarketCap,children:["$",("Zsd"==e.name?504e4:e.marketCap/1e9).toFixed(2),"B"]})]})]}),(0,a.jsxs)("div",{className:u().currencyPrice,children:["$","Zsd"==e.name?e.price:Number(e.price).toFixed(2)]}),(0,a.jsxs)("div",{className:u().currencyChange,style:{marginTop:20,color:e.change>=0?"#52B05AFF":"#EF2517"},children:[e.change>=0?"+":" ","Zsd"==e.name?.05:e.change,"%"]})]},t))})]})}},30781:function(e){e.exports={container:"Market_container__AKxV9",marketstyle:"Market_marketstyle__GP__s",titleContent:"Market_titleContent__vqwyy",marketInfo:"Market_marketInfo__orAV5",priceInfo:"Market_priceInfo__44uCX",fluctuateInfo:"Market_fluctuateInfo__uiAun",currencyItem:"Market_currencyItem__M6fhQ",currencyPrice:"Market_currencyPrice__QWC1f",currencyInfo:"Market_currencyInfo__4fYEE",btnIcon:"Market_btnIcon__NclTM",currencyName:"Market_currencyName__6f_bG",newtext:"Market_newtext__3FHtF",sortStyle:"Market_sortStyle__uPKNM",sortIcon:"Market_sortIcon__HBEv2"}}},function(e){e.O(0,[8310,27508,86164,87520,92792,23663,22202,3003,35573,73107,14297,86591,18338,72848,92971,8069,1744],function(){return e(e.s=62912)}),_N_E=e.O()}]);