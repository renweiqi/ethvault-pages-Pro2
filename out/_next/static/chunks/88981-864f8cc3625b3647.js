"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88981],{3858:function(e,t,n){n.d(t,{p:function(){return A}});var a=n(3827),i=n(64090),o=n(20568),l=n(27180),r=n(10080),s=n(71551),c=n(94646),d=n(45823),u=n(73303),p=n(37228);async function x(e,t){try{let n=await (0,r.N)({transaction:e,from:t}),a=n.wei/10n,i=await (0,c.q)(e.value);return n.wei+a+(i||0n)}catch(i){if(t)return await x(e);let n=await (0,c.q)(e.value),a=2000000n*await (0,l.o)({client:e.client,chain:e.chain});if(!n)return 0n+a;return n+a}}var h=n(26311),m=n(24292),y=n(57146),v=n(73667),f=n(52632),g=n(4966),E=n(47013),T=n(48762),b=n(99263),j=n(89288),k=n(4654),w=n(11724);function C(e){let t=(0,E.M)(),n=(0,h.r)();return(0,v.useQuery)({queryKey:["transaction-modal-event"],queryFn:()=>{t&&n&&(0,f.V)({client:e.client,walletAddress:t.address,walletType:n.id,event:"open_pay_transaction_modal"})},enabled:!!n}),(0,a.jsx)(g.CustomThemeProvider,{theme:e.theme,children:(0,a.jsx)(k.Modal,{open:!0,size:"compact",setOpen:t=>{t||e.onClose()},children:(0,a.jsx)(S,{...e})})})}function S(e){let t=(0,b.q)(e.localeId),[n,o]=(0,i.useState)("buy");return t.data?"execute-tx"===n?(0,a.jsx)(w.H,{tx:e.tx,closeModal:e.onClose,onTxSent:e.onTxSent}):(0,a.jsx)(j.I,{title:e.title,isEmbed:!1,client:e.client,onBack:e.onBack,supportedTokens:e.supportedTokens,connectLocale:t.data,theme:"string"==typeof e.theme?e.theme:e.theme.type,payOptions:e.payOptions,onDone:()=>{o("execute-tx")},connectOptions:void 0}):(0,a.jsx)(T.a,{})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,m.l)(),n=(0,h.r)(),l=(0,i.useContext)(y.SetRootElementContext),r=e.payModal,v=!0;return(!1===r||e.gasless)&&(v=!1),function(e){let{showPayModal:t,gasless:n,wallet:a,switchChain:i}=e,l=null==a?void 0:a.getAccount();return(0,o.useMutation)({mutationFn:async e=>{var o;a&&e.chain.id!==(null===(o=a.getChain())||void 0===o?void 0:o.id)&&(await i(e.chain),l=a.getAccount());let r=l;if(!r)throw Error("No active account");return t?new Promise((i,o)=>{let l=async()=>{try{let t=await (0,s.sendTransaction)({transaction:e,account:r,gasless:n});i(t)}catch(e){o(e)}};(async()=>{try{let[n,s]=await Promise.all([(0,c.q)(e.value),(0,c.q)(e.erc20Value)]),h=(null==s?void 0:s.amountWei)||0n,[m,y,v]=await Promise.all([(0,u.p)({client:e.client,address:r.address,chain:e.chain}),(null==s?void 0:s.tokenAddress)?(0,d.y)({client:e.client,account:r,chain:e.chain,tokenAddress:s.tokenAddress}):void 0,x(e,r.address)]),f=(0,p.GS)(a),g=(n||0n)+(f?0n:v);h>0n&&y&&y.value<h||g>0n&&m.value<g?t({tx:e,sendTx:l,rejectTx:o,resolveTx:i}):l()}catch(e){console.error("Failed to estimate cost",e),l()}})()}):(0,s.sendTransaction)({transaction:e,account:r,gasless:n})}})}({showPayModal:v&&!1!==r?e=>{var t;!1!==r&&l((0,a.jsx)(C,{title:(null==r?void 0:null===(t=r.metadata)||void 0===t?void 0:t.name)||"Transaction",tx:e.tx,onComplete:e.sendTx,onClose:()=>{l(null),e.rejectTx(Error("User rejected transaction by closing modal"))},onTxSent:e.resolveTx,client:e.tx.client,localeId:(null==r?void 0:r.locale)||"en_US",supportedTokens:null==r?void 0:r.supportedTokens,theme:(null==r?void 0:r.theme)||"dark",payOptions:{buyWithCrypto:null==r?void 0:r.buyWithCrypto,buyWithFiat:null==r?void 0:r.buyWithFiat,purchaseData:null==r?void 0:r.purchaseData,mode:"transaction",transaction:e.tx,metadata:null==r?void 0:r.metadata,onPurchaseSuccess:null==r?void 0:r.onPurchaseSuccess}}))}:void 0,gasless:e.gasless,switchChain:t,wallet:n})}},11724:function(e,t,n){n.d(t,{H:function(){return m}});var a=n(3827),i=n(62177),o=n(64090),l=n(72568),r=n(51102),s=n(3858),c=n(37697),d=n(972),u=n(53326),p=n(31137),x=n(3702),h=n(32788);function m(e){var t;let n=(0,s.p)({payModal:!1}),[m,y]=(0,o.useState)(),v=(0,r.ND)(e.tx.chain),[f,g]=(0,o.useState)("loading"),E=(0,o.useCallback)(async()=>{g("loading");try{let t=await n.mutateAsync(e.tx);y(t.transactionHash),e.onTxSent(t),g("sent")}catch(e){console.error(e),g("failed")}},[n,e.tx,e.onTxSent]),T=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{T.current||(T.current=!0,E())},[E]),(0,a.jsxs)(p.Container,{p:"lg",children:[(0,a.jsx)(p.ModalHeader,{title:"Transaction",onBack:e.onBack}),(0,a.jsx)(d.L,{y:"xxl"}),(0,a.jsx)(d.L,{y:"xxl"}),(0,a.jsxs)(p.Container,{flex:"row",center:"x",children:["loading"===f&&(0,a.jsx)(u.Spinner,{size:"xxl",color:"accentText"}),"failed"===f&&(0,a.jsx)(c.E,{size:l.EA["3xl"]}),"sent"===f&&(0,a.jsx)(p.Container,{color:"success",flex:"row",center:"both",children:(0,a.jsx)(i.NhS,{width:l.EA["3xl"],height:l.EA["3xl"]})})]}),(0,a.jsx)(d.L,{y:"lg"}),(0,a.jsxs)(h.Text,{color:"primaryText",center:!0,size:"lg",children:["loading"===f&&"Sending transaction","failed"===f&&"Transaction failed","sent"===f&&"Transaction sent"]}),(0,a.jsx)(d.L,{y:"sm"}),(0,a.jsx)(h.Text,{color:"danger",center:!0,size:"sm",children:"failed"===f&&n.error?n.error.message:""}),(0,a.jsx)(d.L,{y:"xxl"}),(0,a.jsx)(d.L,{y:"xxl"}),"failed"===f&&(0,a.jsx)(x.Button,{variant:"accent",fullWidth:!0,onClick:E,children:"Try Again"}),"sent"===f&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Button,{variant:"accent",fullWidth:!0,onClick:e.closeModal,children:"Done"}),m&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.L,{y:"sm"}),(0,a.jsxs)(x.ButtonLink,{fullWidth:!0,variant:"outline",href:"".concat(null===(t=v.explorers[0])||void 0===t?void 0:t.url,"/tx/").concat(m),target:"_blank",as:"a",gap:"xs",style:{textDecoration:"none",color:"inherit"},children:["View on Explorer"," ",(0,a.jsx)(i.h0n,{width:l.EA.sm,height:l.EA.sm})]})]})]})]})}},10080:function(e,t,n){n.d(t,{N:function(){return m}});var a=n(85738);let i=(0,a.ax)({id:84532,name:"Base Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Basescan",url:"https://sepolia.basescan.org",apiUrl:"https://api-sepolia.basescan.org/api"}],testnet:!0}),o=(0,a.ax)({id:8453,name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Basescan",url:"https://basescan.org",apiUrl:"https://api.basescan.org/api"}]}),l=(0,a.ax)({id:11155420,name:"OP Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Blockscout",url:"https://optimism-sepolia.blockscout.com",apiUrl:"https://optimism-sepolia.blockscout.com/api"}],testnet:!0}),r=(0,a.ax)({id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io"}]}),s=(0,a.ax)({id:999999999,name:"Zora Sepolia",nativeCurrency:{decimals:18,name:"Zora Sepolia",symbol:"ETH"},blockExplorers:[{name:"Zora Sepolia Explorer",url:"https://sepolia.explorer.zora.energy/",apiUrl:"https://sepolia.explorer.zora.energy/api"}],testnet:!0}),c=(0,a.ax)({id:7777777,name:"Zora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},blockExplorers:[{name:"Explorer",url:"https://explorer.zora.energy",apiUrl:"https://explorer.zora.energy/api"}]}),d=[o.id,i.id,r.id,l.id,c.id,s.id,34443,919,42220,44787,204,5611];var u=n(27180),p=n(94646),x=n(45890),h=n(16084);async function m(e){var t,a,i,o;let l;let{transaction:r}=e,s=null!==(i=null!==(a=e.from)&&void 0!==a?a:null===(t=e.account)||void 0===t?void 0:t.address)&&void 0!==i?i:void 0,c=await (0,p.q)(r.gas)||await (0,h.Q)({transaction:r,from:s}),m=await (0,u.o)({client:r.client,chain:r.chain});if(o=r.chain,d.includes(o.id)){let{estimateL1Fee:e}=await n.e(74140).then(n.bind(n,74140));l=await e({transaction:r})}else l=0n;let y=c*m+l;return{ether:(0,x.n9)(y),wei:y}}}}]);