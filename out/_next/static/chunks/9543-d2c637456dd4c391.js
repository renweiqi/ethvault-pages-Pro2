(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9543],{35883:function(){},19950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a=n(3827),i=n(64090),s=n(14297),p=n(20703),u=n(44600),d=n.n(u),r=n(61996),l=n.n(r),y=n(22665),o=n(80588),m=n(77171),c=n(1861),A=n(38302),T=n(28683),b=n(4779),h=n(28928),g=n(63805);n(81604);var f=n(47822),_=n(37321),x=n(24362),w=n(3726),M=n.n(w),v=n(47275);n(14698),n(46188);var C=n(66403);let j=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],k=[(0,h.E)("io.metamask"),(0,h.E)("pro.tokenpocket"),(0,h.E)("im.token"),(0,h.E)("com.binance"),(0,h.E)("com.coinbase.wallet"),(0,h.a)()];(0,v.u)({client:x.L,address:C.c.USDTaddress,chain:f.e,abi:j}),(0,v.u)({client:x.L,address:C.c.ZSDaddress,abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"allowance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientAllowance",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC20InvalidApprover",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC20InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC20InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"spender",type:"address"}],name:"ERC20InvalidSpender",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],chain:f.e}),(0,v.u)({client:x.L,address:C.c.ZSDPROJECTAddress,chain:f.e,abi:[{inputs:[{internalType:"address",name:"swapAddress",type:"address"},{internalType:"address",name:"zsdAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"zsdAmount",type:"uint256"}],name:"DepositUSDTANDZSDFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"DepositUSDTFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"}],name:"Registered",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"WithdraZSDFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"zsdAmount",type:"uint256"}],name:"addusdtlog",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"index",type:"uint256"},{indexed:!1,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint256",name:"referralCount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"withdrawUSDTBalances",type:"uint256"},{indexed:!1,internalType:"uint256",name:"withdrawZSDBalances",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lastActionTime",type:"uint256"}],name:"importUserslog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"index",type:"uint256"},{indexed:!0,internalType:"address",name:"useraddress",type:"address"}],name:"importdepositListlog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"index",type:"uint256"},{indexed:!0,internalType:"address",name:"useraddress",type:"address"}],name:"importholderslog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"index",type:"uint256"},{indexed:!0,internalType:"address",name:"useraddress",type:"address"}],name:"importtotalRegisterslog",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"refer",type:"address"},{indexed:!0,internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"refereWared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"uAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"zAmount",type:"uint256"},{indexed:!0,internalType:"uint256",name:"yAmount",type:"uint256"}],name:"withdraZSDFundsLog",type:"event"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"addToWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"useraddress",type:"address"},{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"addusdt",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"depositList",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"depositUSDTANDZSDFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"usdtAmount",type:"uint256"}],name:"depositUSDTFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getReferralCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getReferrer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddress",type:"address"}],name:"getWithdraZSDDayFunds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"holders",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"importOldDATA",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"minnerUserPower",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"projectAdminTPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"projectDropPool",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"referrer",type:"address"}],name:"register",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registered",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"registers",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"removeFromWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_swapAddress",type:"address"}],name:"setSwap",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swap",outputs:[{internalType:"contract ZSDSWap",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDeposits",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalHolders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalRegisters",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"usdtToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"address",name:"referrer",type:"address"},{internalType:"uint256",name:"referralCount",type:"uint256"},{internalType:"uint256",name:"withdrawUSDTBalances",type:"uint256"},{internalType:"uint256",name:"lastActionTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraZSDFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address",name:"userAddress",type:"address"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],name:"withdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"zsdtToken",outputs:[{internalType:"contract ZSD",name:"",type:"address"}],stateMutability:"view",type:"function"}]});var D=()=>{let[e,t]=(0,i.useState)(!1),[n]=y.Z.useForm();(0,s.M)();let p=async()=>{try{k.forEach(e=>{e.disconnect&&e.disconnect(e)}),o.ZP.error("未填写邀请码，钱包已登出"),t(!1)}catch(e){o.ZP.error("登出钱包失败，请重试。")}};return(0,a.jsxs)("div",{children:[(0,a.jsx)(g.ConnectButton,{theme:"dark",client:x.L,wallets:k,connectModal:{size:"compact"},chain:_.d}),(0,a.jsx)(m.Z,{title:"",open:e,onOk:()=>{t(!1)},onCancel:p,destroyOnClose:!0,width:"90%",style:{margin:"auto",top:"20%"},footer:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(c.ZP,{onClick:p,className:M().Cancelstyle,children:"取消"}),(0,a.jsx)(c.ZP,{className:M().verifystyle,htmlType:"submit",children:"确认"})]}),children:(0,a.jsx)(y.Z,{form:n,name:"friendRechargeForm",children:(0,a.jsxs)(A.Z,{children:[(0,a.jsx)("div",{className:M().Topmodel,children:"邀请人地址"}),(0,a.jsx)(T.Z,{span:24,children:(0,a.jsx)(y.Z.Item,{name:"Invitelink",children:(0,a.jsx)(b.Z,{className:M().inputstyle,placeholder:"请填写/粘帖邀请链地址"})})})]})})})]})},R={src:"/_next/static/media/logo.ee83181c.jpg",height:1024,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAghU//8QAHRAAAQMFAQAAAAAAAAAAAAAAAQIDBAAFERMhI//aAAgBAQABPwAOwk2tTOyKHSnvoMk1/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q==",blurWidth:8,blurHeight:8},E=n(23349),N=e=>{let{onToggleRightMenu:t}=e,n=async()=>{let e=await (0,E.RA)(C.c.BUSDaddress,j);console.log("授权\xb7",e);try{let t=await e.approve(C.c.ETHAddress,"1000000000000000000000000000000000000",{gasLimit:5e5});await t.wait(),o.ZP.success("授权成功")}catch(e){console.log(e,"error"),o.ZP.success("授权失败，请重试")}};return(0,a.jsxs)("div",{className:l().pagetop,children:[(0,a.jsx)(p.default,{className:l().m1,src:R,alt:"coin",width:50,height:50}),(0,a.jsx)(D,{}),(0,a.jsx)("div",{style:{color:"#fff",fontSize:"14px"},onClick:n,children:"代币授权"}),(0,a.jsx)(p.default,{onClick:t,className:l().m3,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/menu.png",alt:"menu",width:50,height:50})]})},B=n(47907),S=n(60809),I=n.n(S);let Z=()=>"clipboard"in navigator,Q=async e=>{try{if(Z()){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),o.ZP.success("复制成功")}else{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")?o.ZP.success("复制成功"):o.ZP.error("复制失败，请稍后重试")}catch(e){o.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(t)}}}catch(n){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),o.ZP.error("复制失败，请稍后重试")}};var W=()=>{let e=(0,B.useRouter)();return(0,a.jsxs)("div",{className:I().rightMenu,"data-id":"RightMenu",children:[(0,a.jsxs)("div",{"data-id":"RightMenu",className:I().row,onClick:()=>e.push("/HomeLess"),children:[(0,a.jsx)(p.default,{"data-id":"RightMenu",className:I().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/HomePage.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:I().text,children:"首页"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:I().row,onClick:()=>e.push("/Machine"),children:[(0,a.jsx)(p.default,{"data-id":"RightMenu",className:I().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/MiningMachine.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:I().text,children:"矿机"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:I().row,onClick:()=>e.push("/Flash"),children:[(0,a.jsx)(p.default,{"data-id":"RightMenu",className:I().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/flash.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:I().text,children:"提款"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:I().row,onClick:()=>e.push("/Community"),children:[(0,a.jsx)(p.default,{"data-id":"RightMenu",className:I().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/community.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:I().text,children:"联系我们"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:I().row,onClick:()=>e.push("/Personal"),children:[(0,a.jsx)(p.default,{"data-id":"RightMenu",className:I().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Individualcenter.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:I().text,children:"个人中心"})]})]})},P=n(18286),L={src:"/_next/static/media/beijing.d082cf54.png",height:2007,width:2250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAjElEQVR42g3I2xLBMBAA0L0mlZpeDGPwYPz/11FTqSS7nMeDzMcUz4Aowl5XhzXXAiQEDgDbPJZty4YKRDGkoMqHcajf6pZQJpYOGwumaR5JVYH5lVfVuEtDay5x/1wEY7yEKOZiJVv1lE5I/snbv5qZd4Eqova9Mi3vImb8uN8IkVmDem0MehVi0eUHk6g65lpHmfgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7};let F=[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"矿机",en:"MINING MACHINE"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"个人中心",en:"PERSONAL CENTER"},{link:"/Community",url:"../../images/ContactUs.png",name:"联系我们",en:"Contact Us"},{link:"/HomeLess",url:"../../images/homepage.png",name:"首 页",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"取 款",en:"withdraw money"}];var U=()=>{let e=(0,B.useRouter)(),t=(0,s.M)(),n=t=>{e.push(t.link)},u=()=>{Q("https://m.zsdcoin.com?ref=".concat(t?t.address:""))},{isRightMenuVisible:r,toggleRightMenu:l,hideRightMenu:y}=(0,i.useContext)(P.MenuContext),o=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=e=>{o.current&&"RightMenu"!==e.target.dataset.id&&y()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[y]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:d().pageMenu,children:[r&&(0,a.jsx)(W,{}),(0,a.jsx)(N,{onToggleRightMenu:l}),(0,a.jsx)("div",{className:d().videoBackground,id:"nav",children:(0,a.jsx)(p.default,{className:d().imageGif,src:L,alt:""})}),(0,a.jsx)("div",{className:d().top,ref:o,children:F.map((e,t)=>"/InCode"===e.link?(0,a.jsxs)("div",{className:"".concat(d()["menyBtn"+t]," ").concat(d().menyBtn),onClick:u,children:[(0,a.jsx)(p.default,{className:"".concat(d()["img"+t]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:d()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:d()["menyBtn-e"],children:e.en})]},t):(0,a.jsxs)("div",{className:"".concat(d()["menyBtn"+t]," ").concat(d().menyBtn),onClick:()=>n(e),children:[(0,a.jsx)(p.default,{className:"".concat(d()["img"+t]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:d()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:d()["menyBtn-e"],children:e.en})]},t))})]})})}},3726:function(e){e.exports={Content:"CallWallet_Content__VZGXB",inputstyle:"CallWallet_inputstyle__LHCrR",buttonstyle:"CallWallet_buttonstyle__SyHTQ",buttonHelpFriendstyle:"CallWallet_buttonHelpFriendstyle__ODMLq",ContentText:"CallWallet_ContentText__IDVTv",ContentInstructions:"CallWallet_ContentInstructions__ENJFV",Contentlabel:"CallWallet_Contentlabel__qhJjI",labelContainer:"CallWallet_labelContainer__C9S6y",labelLeft:"CallWallet_labelLeft__Wxi2I",labelRight:"CallWallet_labelRight__GI3Yg",CalculatedValue:"CallWallet_CalculatedValue__wVHD9",Ustyle:"CallWallet_Ustyle__mvYTw",Topmodel:"CallWallet_Topmodel__KVhWO",Cancelstyle:"CallWallet_Cancelstyle__KKA_f",verifystyle:"CallWallet_verifystyle__TpKJE"}},60809:function(e){e.exports={rightMenu:"RightMenu_rightMenu__4Vdi0",row:"RightMenu_row__vVKio",img:"RightMenu_img__LvhXL",text:"RightMenu_text__kgeAO","video-background":"RightMenu_video-background__VO7sD",content:"RightMenu_content__zza7R"}},44600:function(e){e.exports={pageMenu:"TopMenu_pageMenu__tgFwW",top:"TopMenu_top__CE9fR",menyBtn0:"TopMenu_menyBtn0__OU6ht",menyBtn1:"TopMenu_menyBtn1__wpmzY",menyBtn2:"TopMenu_menyBtn2__9YB4v",menyBtn3:"TopMenu_menyBtn3__42O5W",menyBtn4:"TopMenu_menyBtn4__jMDkX",menyBtn5:"TopMenu_menyBtn5__YwPul",menyBtn:"TopMenu_menyBtn__5Rl_B","menyBtn-n":"TopMenu_menyBtn-n___3oET","menyBtn-e":"TopMenu_menyBtn-e__o7RuC",img0:"TopMenu_img0__EwxhJ",img1:"TopMenu_img1__U8byq",img2:"TopMenu_img2__Ixg5G",img3:"TopMenu_img3__sypae",img4:"TopMenu_img4__IL4yF",img5:"TopMenu_img5__ZAun1","video-background":"TopMenu_video-background__40Bxp",content:"TopMenu_content__s8Xj1",imageGif:"TopMenu_imageGif__f0WuQ"}},61996:function(e){e.exports={pagetop:"Top_pagetop__5k2y2",m1:"Top_m1__eJ96o",m2:"Top_m2__Leibv",m3:"Top_m3__8JExu",ljqb:"Top_ljqb__ktoyc","css-bedeeg":"Top_css-bedeeg__caJQv",deep:"Top_deep__7n1oN"}}}]);