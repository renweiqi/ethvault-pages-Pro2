"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88110],{88110:function(t,n,e){e.d(n,{getActiveClaimCondition:function(){return p}});var a=e(94293);let i=[],r=[{type:"uint256"}];async function c(t){return(0,a.readContract)({contract:t.contract,method:["0xc68907de",i,r],params:[]})}let o=[{type:"uint256",name:"_conditionId"}],u=[{type:"tuple",name:"condition",components:[{type:"uint256",name:"startTimestamp"},{type:"uint256",name:"maxClaimableSupply"},{type:"uint256",name:"supplyClaimed"},{type:"uint256",name:"quantityLimitPerWallet"},{type:"bytes32",name:"merkleRoot"},{type:"uint256",name:"pricePerToken"},{type:"address",name:"currency"},{type:"string",name:"metadata"}]}];async function m(t){return(0,a.readContract)({contract:t.contract,method:["0x6f8934f4",o,u],params:[t.conditionId]})}async function p(t){try{let n=await c(t);return m({...t,conditionId:n})}catch(t){throw Error("Claim condition not found")}}}}]);