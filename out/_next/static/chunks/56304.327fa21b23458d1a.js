(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56304],{35883:function(){},46601:function(){},89214:function(){},10080:function(e,a,i){"use strict";i.d(a,{N:function(){return E}});var r=i(85738);let t=(0,r.ax)({id:84532,name:"Base Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Basescan",url:"https://sepolia.basescan.org",apiUrl:"https://api-sepolia.basescan.org/api"}],testnet:!0}),n=(0,r.ax)({id:8453,name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Basescan",url:"https://basescan.org",apiUrl:"https://api.basescan.org/api"}]}),o=(0,r.ax)({id:11155420,name:"OP Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Blockscout",url:"https://optimism-sepolia.blockscout.com",apiUrl:"https://optimism-sepolia.blockscout.com/api"}],testnet:!0}),l=(0,r.ax)({id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockExplorers:[{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io"}]}),s=(0,r.ax)({id:999999999,name:"Zora Sepolia",nativeCurrency:{decimals:18,name:"Zora Sepolia",symbol:"ETH"},blockExplorers:[{name:"Zora Sepolia Explorer",url:"https://sepolia.explorer.zora.energy/",apiUrl:"https://sepolia.explorer.zora.energy/api"}],testnet:!0}),p=(0,r.ax)({id:7777777,name:"Zora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},blockExplorers:[{name:"Explorer",url:"https://explorer.zora.energy",apiUrl:"https://explorer.zora.energy/api"}]}),c=[n.id,t.id,l.id,o.id,p.id,s.id,34443,919,42220,44787,204,5611];var m=i(27180),u=i(94646),d=i(45890),h=i(16084);async function E(e){var a,r,t,n;let o;let{transaction:l}=e,s=null!==(t=null!==(r=e.from)&&void 0!==r?r:null===(a=e.account)||void 0===a?void 0:a.address)&&void 0!==t?t:void 0,p=await (0,u.q)(l.gas)||await (0,h.Q)({transaction:l,from:s}),E=await (0,m.o)({client:l.client,chain:l.chain});if(n=l.chain,c.includes(n.id)){let{estimateL1Fee:e}=await i.e(74140).then(i.bind(i,74140));o=await e({transaction:l})}else o=0n;let b=p*E+o;return{ether:(0,d.n9)(b),wei:b}}}}]);