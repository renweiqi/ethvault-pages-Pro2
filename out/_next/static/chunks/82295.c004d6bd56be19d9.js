"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82295],{717:function(e,t,n){n.d(t,{VR:function(){return s},bc:function(){return o},l3:function(){return a}});var r=n(34374),i=n(57200);let o=(e,t,n)=>e&t^~e&n,a=(e,t,n)=>e&t^e&n^t&n;class s extends i.kb{update(e){(0,r.Gg)(this);let{view:t,buffer:n,blockLen:o}=this,a=(e=(0,i.O0)(e)).length;for(let r=0;r<a;){let s=Math.min(o-this.pos,a-r);if(s===o){let t=(0,i.GL)(e);for(;o<=a-r;r+=o)this.process(t,r);continue}n.set(e.subarray(r,r+s),this.pos),this.pos+=s,r+=s,this.pos===o&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){(0,r.Gg)(this),(0,r.J8)(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:o,isLE:a}=this,{pos:s}=this;t[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(n,0),s=0);for(let e=s;e<o;e++)t[e]=0;!function(e,t,n,r){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,n,r);let i=BigInt(32),o=BigInt(4294967295),a=Number(n>>i&o),s=Number(n&o),l=r?4:0,c=r?0:4;e.setUint32(t+l,a,r),e.setUint32(t+c,s,r)}(n,o-8,BigInt(8*this.length),a),this.process(n,0);let l=(0,i.GL)(e),c=this.outputLen;if(c%4)throw Error("_sha2: outputLen should be aligned to 32bit");let u=c/4,h=this.get();if(u>h.length)throw Error("_sha2: outputLen bigger than state");for(let e=0;e<u;e++)l.setUint32(4*e,h[e],a)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:n,length:r,finished:i,destroyed:o,pos:a}=this;return e.length=r,e.pos=a,e.finished=i,e.destroyed=o,r%t&&e.buffer.set(n),e}constructor(e,t,n,r){super(),this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,i.GL)(this.buffer)}}},53940:function(e,t,n){n.d(t,{J:function(){return c}});var r=n(717),i=n(57200);let o=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),a=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),s=new Uint32Array(64);class l extends r.VR{get(){let{A:e,B:t,C:n,D:r,E:i,F:o,G:a,H:s}=this;return[e,t,n,r,i,o,a,s]}set(e,t,n,r,i,o,a,s){this.A=0|e,this.B=0|t,this.C=0|n,this.D=0|r,this.E=0|i,this.F=0|o,this.G=0|a,this.H=0|s}process(e,t){for(let n=0;n<16;n++,t+=4)s[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=s[e-15],n=s[e-2],r=(0,i.np)(t,7)^(0,i.np)(t,18)^t>>>3,o=(0,i.np)(n,17)^(0,i.np)(n,19)^n>>>10;s[e]=o+s[e-7]+r+s[e-16]|0}let{A:n,B:a,C:l,D:c,E:u,F:h,G:f,H:b}=this;for(let e=0;e<64;e++){let t=b+((0,i.np)(u,6)^(0,i.np)(u,11)^(0,i.np)(u,25))+(0,r.bc)(u,h,f)+o[e]+s[e]|0,d=((0,i.np)(n,2)^(0,i.np)(n,13)^(0,i.np)(n,22))+(0,r.l3)(n,a,l)|0;b=f,f=h,h=u,u=c+t|0,c=l,l=a,a=n,n=t+d|0}n=n+this.A|0,a=a+this.B|0,l=l+this.C|0,c=c+this.D|0,u=u+this.E|0,h=h+this.F|0,f=f+this.G|0,b=b+this.H|0,this.set(n,a,l,c,u,h,f,b)}roundClean(){s.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}constructor(){super(64,32,8,!1),this.A=0|a[0],this.B=0|a[1],this.C=0|a[2],this.D=0|a[3],this.E=0|a[4],this.F=0|a[5],this.G=0|a[6],this.H=0|a[7]}}let c=(0,i.hE)(()=>new l)},82295:function(e,t,n){n.d(t,{estimateL1Fee:function(){return J}});var r=n(80230);class i extends r.G{constructor({v:e}){super('Invalid `v` value "'.concat(e,'". Expected 27 or 28.')),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class o extends r.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",function(e){let t=Object.entries(e).map(e=>{let[t,n]=e;return void 0===n||!1===n?null:[t,n]}).filter(Boolean),n=t.reduce((e,t)=>{let[n]=t;return Math.max(e,n.length)},0);return t.map(e=>{let[t,r]=e;return"  ".concat("".concat(t,":").padEnd(n+1),"  ").concat(r)}).join("\n")}(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class a extends r.G{constructor({storageKey:e}){super('Size for storage key "'.concat(e,'" is invalid. Expected 32 bytes. Got ').concat(Math.floor((e.length-2)/2)," bytes.")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}var s=n(73596),l=n(15578);function c(e){var t;let{kzg:n}=e,r=null!==(t=e.to)&&void 0!==t?t:"string"==typeof e.blobs[0]?"hex":"bytes",i="string"==typeof e.blobs[0]?e.blobs.map(e=>(0,s.nr)(e)):e.blobs,o=[];for(let e of i)o.push(Uint8Array.from(n.blobToKzgCommitment(e)));return"bytes"===r?o:o.map(e=>(0,l.ci)(e))}function u(e){var t;let{kzg:n}=e,r=null!==(t=e.to)&&void 0!==t?t:"string"==typeof e.blobs[0]?"hex":"bytes",i="string"==typeof e.blobs[0]?e.blobs.map(e=>(0,s.nr)(e)):e.blobs,o="string"==typeof e.commitments[0]?e.commitments.map(e=>(0,s.nr)(e)):e.commitments,a=[];for(let e=0;e<i.length;e++){let t=i[e],r=o[e];a.push(Uint8Array.from(n.computeBlobKzgProof(t,r)))}return"bytes"===r?a:a.map(e=>(0,l.ci)(e))}var h=n(53940),f=n(21230);class b extends r.G{constructor({maxSize:e,size:t}){super("Blob size is too large.",{metaMessages:["Max: ".concat(e," bytes"),"Given: ".concat(t," bytes")]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class d extends r.G{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class p extends r.G{constructor({hash:e,size:t}){super('Versioned hash "'.concat(e,'" size is invalid.'),{metaMessages:["Expected: 32","Received: ".concat(t)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashSizeError"})}}class g extends r.G{constructor({hash:e,version:t}){super('Versioned hash "'.concat(e,'" version is invalid.'),{metaMessages:["Expected: ".concat(1),"Received: ".concat(t)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashVersionError"})}}var m=n(3425),v=n(95305),y=n(3556),w=n(71264),x=n(68725),P=n(44898);class G extends r.G{constructor({chainId:e}){super("number"==typeof e?'Chain ID "'.concat(e,'" is invalid.'):"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}let C={ether:-9,wei:9};function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wei";return function(e,t){let n=e.toString(),r=n.startsWith("-");r&&(n=n.slice(1));let[i,o]=[(n=n.padStart(t,"0")).slice(0,n.length-t),n.slice(n.length-t)];return o=o.replace(/(0+)$/,""),"".concat(r?"-":"").concat(i||"0").concat(o?".".concat(o):"")}(e,C[t])}class E extends r.G{constructor({cause:e,message:t}={}){var n;let r=null==t?void 0:null===(n=t.replace("execution reverted: ",""))||void 0===n?void 0:n.replace("execution reverted","");super("Execution reverted ".concat(r?"with reason: ".concat(r):"for an unknown reason","."),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(E,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class O extends r.G{constructor({cause:e,maxFeePerGas:t}={}){super("The fee cap (`maxFeePerGas`".concat(t?" = ".concat(N(t)," gwei"):"",") cannot be higher than the maximum allowed value (2^256-1)."),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(O,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class j extends r.G{constructor({cause:e,maxFeePerGas:t}={}){super("The fee cap (`maxFeePerGas`".concat(t?" = ".concat(N(t)):""," gwei) cannot be lower than the block base fee."),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(j,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class T extends r.G{constructor({cause:e,nonce:t}={}){super("Nonce provided for the transaction ".concat(t?"(".concat(t,") "):"","is higher than the next one expected."),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(T,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class L extends r.G{constructor({cause:e,nonce:t}={}){super(["Nonce provided for the transaction ".concat(t?"(".concat(t,") "):"","is lower than the current nonce of the account."),"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(L,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class U extends r.G{constructor({cause:e,nonce:t}={}){super("Nonce provided for the transaction ".concat(t?"(".concat(t,") "):"","exceeds the maximum allowed nonce."),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(U,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class B extends r.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(B,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class I extends r.G{constructor({cause:e,gas:t}={}){super("The amount of gas ".concat(t?"(".concat(t,") "):"","provided for the transaction exceeds the limit allowed for the block."),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(I,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class F extends r.G{constructor({cause:e,gas:t}={}){super("The amount of gas ".concat(t?"(".concat(t,") "):"","provided for the transaction is too low."),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(F,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class M extends r.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(M,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class V extends r.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:n}={}){super(["The provided tip (`maxPriorityFeePerGas`".concat(t?" = ".concat(N(t)," gwei"):"",") cannot be higher than the fee cap (`maxFeePerGas`").concat(n?" = ".concat(N(n)," gwei"):"",").")].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(V,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});var k=n(14433),z=n(23090),A=n(55936);function S(e){let{chainId:t,maxPriorityFeePerGas:n,maxFeePerGas:r,to:i}=e;if(t<=0)throw new G({chainId:t});if(i&&!(0,k.U)(i))throw new P.b({address:i});if(r&&r>2n**256n-1n)throw new O({maxFeePerGas:r});if(n&&r&&n>r)throw new V({maxFeePerGas:r,maxPriorityFeePerGas:n})}function H(e){if(!e||0===e.length)return[];let t=[];for(let n=0;n<e.length;n++){let{address:r,storageKeys:i}=e[n];for(let e=0;e<i.length;e++)if(i[e].length-2!=64)throw new a({storageKey:i[e]});if(!(0,k.U)(r,{strict:!1}))throw new P.b({address:r});t.push([r,i])}return t}function _(e,t){let n=null!=t?t:e,{v:r,yParity:i}=n;if(void 0===n.r||void 0===n.s||void 0===r&&void 0===i)return[];let o=(0,w.f)(n.r),a=(0,w.f)(n.s);return["number"==typeof i?i?(0,l.NC)(1):"0x":0n===r?"0x":1n===r?(0,l.NC)(1):27n===r?"0x":(0,l.NC)(1),"0x00"===o?"0x":o,"0x00"===a?"0x":a]}var D=n(47275),R=n(73256),K=n(94293);async function J(e){let{transaction:t,gasPriceOracleAddress:n}=e,a=(0,D.u)({client:t.client,address:n||"0x420000000000000000000000000000000000000F",chain:t.chain}),{gasPrice:w,...C}=await (0,R.n)({transaction:t}),N=function(e,t){let n=function(e){if(e.type)return e.type;if(void 0!==e.blobs||void 0!==e.blobVersionedHashes||void 0!==e.maxFeePerBlobGas||void 0!==e.sidecars)return"eip4844";if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new o({transaction:e})}(e);return"eip1559"===n?function(e,t){let{chainId:n,gas:r,nonce:i,to:o,value:a,maxFeePerGas:s,maxPriorityFeePerGas:c,accessList:u,data:h}=e;S(e);let f=H(u),b=[(0,l.NC)(n),i?(0,l.NC)(i):"0x",c?(0,l.NC)(c):"0x",s?(0,l.NC)(s):"0x",r?(0,l.NC)(r):"0x",null!=o?o:"0x",a?(0,l.NC)(a):"0x",null!=h?h:"0x",f,..._(e,t)];return(0,y.SM)(["0x02",(0,x.LV)(b)])}(e,t):"eip2930"===n?function(e,t){let{chainId:n,gas:i,data:o,nonce:a,to:s,value:c,accessList:u,gasPrice:h}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:n,gasPrice:i,maxFeePerGas:o,to:a}=e;if(t<=0)throw new G({chainId:t});if(a&&!(0,k.U)(a))throw new P.b({address:a});if(n||o)throw new r.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(i&&i>2n**256n-1n)throw new O({maxFeePerGas:i})}(e);let f=H(u),b=[(0,l.NC)(n),a?(0,l.NC)(a):"0x",h?(0,l.NC)(h):"0x",i?(0,l.NC)(i):"0x",null!=s?s:"0x",c?(0,l.NC)(c):"0x",null!=o?o:"0x",f,..._(e,t)];return(0,y.SM)(["0x01",(0,x.LV)(b)])}(e,t):"eip4844"===n?function(e,t){let{chainId:n,gas:r,nonce:i,to:o,value:a,maxFeePerBlobGas:w,maxFeePerGas:P,maxPriorityFeePerGas:G,accessList:C,data:N}=e;!function(e){let{blobVersionedHashes:t}=e;if(t){if(0===t.length)throw new d;for(let e of t){let t=(0,v.d)(e),n=(0,A.ly)((0,z.tP)(e,0,1));if(32!==t)throw new p({hash:e,size:t});if(1!==n)throw new g({hash:e,version:n})}}S(e)}(e);let E=e.blobVersionedHashes,O=e.sidecars;if(e.blobs&&(void 0===E||void 0===O)){let t="string"==typeof e.blobs[0]?e.blobs:e.blobs.map(e=>(0,l.ci)(e)),n=e.kzg,r=c({blobs:t,kzg:n});if(void 0===E&&(E=function(e){var t;let{commitments:n,version:r}=e,i=null!==(t=e.to)&&void 0!==t?t:"string"==typeof n[0]?"hex":"bytes",o=[];for(let e of n)o.push(function(e){var t;let{commitment:n,version:r=1}=e,i=null!==(t=e.to)&&void 0!==t?t:"string"==typeof n?"hex":"bytes",o=function(e,t){let n=(0,h.J)((0,f.v)(e,{strict:!1})?(0,s.O0)(e):e);return"bytes"===(t||"hex")?n:(0,l.NC)(n)}(n,"bytes");return o.set([r],0),"bytes"===i?o:(0,l.ci)(o)}({commitment:e,to:i,version:r}));return o}({commitments:r})),void 0===O){let e=u({blobs:t,commitments:r,kzg:n});O=function(e){var t,n,r;let{data:i,kzg:o,to:a}=e,h=null!==(t=e.blobs)&&void 0!==t?t:function(e){var t;let n=null!==(t=e.to)&&void 0!==t?t:"string"==typeof e.data?"hex":"bytes",r="string"==typeof e.data?(0,s.nr)(e.data):e.data,i=(0,v.d)(r);if(!i)throw new d;if(i>761855)throw new b({maxSize:761855,size:i});let o=[],a=!0,c=0;for(;a;){let e=(0,m.q)(new Uint8Array(131072)),t=0;for(;t<4096;){let n=r.slice(c,c+31);if(e.pushByte(0),e.pushBytes(n),n.length<31){e.pushByte(128),a=!1;break}t++,c+=31}o.push(e)}return"bytes"===n?o.map(e=>e.bytes):o.map(e=>(0,l.ci)(e.bytes))}({data:i,to:a}),f=null!==(n=e.commitments)&&void 0!==n?n:c({blobs:h,kzg:o,to:a}),p=null!==(r=e.proofs)&&void 0!==r?r:u({blobs:h,commitments:f,kzg:o,to:a}),g=[];for(let e=0;e<h.length;e++)g.push({blob:h[e],commitment:f[e],proof:p[e]});return g}({blobs:t,commitments:r,proofs:e})}}let j=H(C),T=[(0,l.NC)(n),i?(0,l.NC)(i):"0x",G?(0,l.NC)(G):"0x",P?(0,l.NC)(P):"0x",r?(0,l.NC)(r):"0x",null!=o?o:"0x",a?(0,l.NC)(a):"0x",null!=N?N:"0x",j,w?(0,l.NC)(w):"0x",null!=E?E:[],..._(e,t)],L=[],U=[],B=[];if(O)for(let e=0;e<O.length;e++){let{blob:t,commitment:n,proof:r}=O[e];L.push(t),U.push(n),B.push(r)}return(0,y.SM)(["0x03",O?(0,x.LV)([T,L,U,B]):(0,x.LV)(T)])}(e,t):function(e,t){let{chainId:n=0,gas:o,data:a,nonce:s,to:c,value:u,gasPrice:h}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:n,gasPrice:i,maxFeePerGas:o,to:a,accessList:s}=e;if(a&&!(0,k.U)(a))throw new P.b({address:a});if(void 0!==t&&t<=0)throw new G({chainId:t});if(n||o)throw new r.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(i&&i>2n**256n-1n)throw new O({maxFeePerGas:i});if(s)throw new r.G("`accessList` is not a valid Legacy Transaction attribute.")}(e);let f=[s?(0,l.NC)(s):"0x",h?(0,l.NC)(h):"0x",o?(0,l.NC)(o):"0x",null!=c?c:"0x",u?(0,l.NC)(u):"0x",null!=a?a:"0x"];if(t){let e=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n);if(n>0)return BigInt(2*n)+BigInt(35n+t.v-27n);let e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new i({v:t.v});return e})();f=[...f,(0,l.NC)(e),t.r,t.s]}else n>0&&(f=[...f,(0,l.NC)(n),"0x","0x"]);return(0,x.LV)(f)}(e,t)}({...C,type:"eip1559"});return(0,K.readContract)({contract:a,method:"function getL1Fee(bytes memory _data) view returns (uint256)",params:[N]})}},68725:function(e,t,n){n.d(t,{LV:function(){return s}});var r=n(80230),i=n(3425),o=n(73596),a=n(15578);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex",n=function e(t){return Array.isArray(t)?function(e){let t=e.reduce((e,t)=>e+t.length,0),n=l(t);return{length:t<=55?1+t:1+n+t,encode(r){for(let{encode:i}of(t<=55?r.pushByte(192+t):(r.pushByte(247+n),1===n?r.pushUint8(t):2===n?r.pushUint16(t):3===n?r.pushUint24(t):r.pushUint32(t)),e))i(r)}}}(t.map(t=>e(t))):function(e){let t="string"==typeof e?(0,o.nr)(e):e,n=l(t.length);return{length:1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){1===t.length&&t[0]<128||(t.length<=55?e.pushByte(128+t.length):(e.pushByte(183+n),1===n?e.pushUint8(t.length):2===n?e.pushUint16(t.length):3===n?e.pushUint24(t.length):e.pushUint32(t.length))),e.pushBytes(t)}}}(t)}(e),r=(0,i.q)(new Uint8Array(n.length));return(n.encode(r),"hex"===t)?(0,a.ci)(r.bytes):r.bytes}function l(e){if(e<256)return 1;if(e<65536)return 2;if(e<16777216)return 3;if(e<4294967296)return 4;throw new r.G("Length is too large.")}}}]);