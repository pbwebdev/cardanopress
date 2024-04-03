(self.webpackChunkcardanopress=self.webpackChunkcardanopress||[]).push([[968],{442:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=442,t.exports=e},347:function(t,e,n){"use strict";n.a(t,(async function(t){n.r(e);var s=n(733),i=t([s]);s=(i.then?await i:i)[0];let r=null;const o={setProtocolParameters:(t,e,n,s)=>{r={minUTxO:t,minFeeA:e,minFeeB:n,maxTxSize:s}},randomImprove:async(t,e,n)=>{if(!r)throw new Error("Protocol parameters not set. Use setProtocolParameters().");const i=BigInt(e.len())*BigInt(r.minUTxO);let o={selection:[],remaining:[...t],subset:[],amount:s.B4R.new(s.WbW.from_str("0"))},a=function(t){let e=s.B4R.new(s.WbW.from_str("0"));for(let n=0;n<t.len();n++)e=l(t.get(n).amount(),e);return e}(e),g=function(t){let e=[];if(t.multiasset()){let n=t.multiasset();for(let t=0;t<n.keys().len();t++){let i=n.keys().get(t);for(let t=0;t<n.get(i).keys().len();t++){let r=s.deM.new(),o=n.get(i).keys().get(t);r.insert(s.JfL.from_bytes(o.to_bytes()),s.WbW.from_bytes(n.get(i).get(o).to_bytes()));let u=s.MLF.new();u.insert(s.nJe.from_bytes(i.to_bytes()),r);let a=s.B4R.new(s.WbW.from_str("0"));a.set_multiasset(u),e.push(a)}}}return e=c(e,"DESC"),e.push(s.B4R.new(s.WbW.from_bytes(t.coin().to_bytes()))),e}(a);for(let t=0;t<g.length;t++)_(o,g[t]),o=u(o,g[t],n,i);g=c(g);for(let t=0;t<g.length;t++){_(o,g[t]);let e={};e.ideal=s.B4R.new(s.WbW.from_str("0")).checked_add(g[t]).checked_add(g[t]),e.maximum=s.B4R.new(s.WbW.from_str("0")).checked_add(e.ideal).checked_add(g[t]),m(o,g[t],n-o.selection.length,e)}if(o.remaining.length>0){const t=o.amount.checked_sub(a);let e=s.B4R.new(s.Ajc(t,s.WbW.from_str(r.minUTxO))),m=BigInt(r.minFeeA)*BigInt(r.maxTxSize)+BigInt(r.minFeeB);if(m=s.B4R.new(s.WbW.from_str(m.toString())),e=e.checked_add(m),p(t,e)<0){const r=e.checked_sub(s.B4R.new(t.coin())).checked_add(s.B4R.new(o.amount.coin()));_(o,r),o=u(o,r,n,i)}}return{input:o.selection,output:e,remaining:o.remaining,amount:o.amount,change:o.amount.checked_sub(a)}}};function u(t,e,n,s){try{t=a(function(t){return{selection:b(t.selection),remaining:b(t.remaining),subset:b(t.subset),amount:h(t.amount)}}(t),e,n-t.selection.length,s)}catch(n){if("INPUT_LIMIT_EXCEEDED"!==n.message)throw n;t=function(t,e,n){t.subset=t.subset.sort(((t,n)=>Number(f(e,n.output().amount())-f(e,t.output().amount()))));do{if(t.subset.length<=0){if(d(e,t.amount,0,0))throw new Error("MIN_UTXO_ERROR");throw new Error("INPUTS_EXHAUSTED")}let n=t.subset.splice(0,1).pop();t.selection.push(n),t.amount=l(n.output().amount(),t.amount)}while(!d(e,t.amount,n,t.subset.length-1));return t.remaining=[...t.remaining,...t.subset],t.subset=[],t}(t,e,s)}return t}function a(t,e,n,s){let i=t.subset.length;if(d(e,t.amount,s,i))return t.remaining=[...t.remaining,...t.subset],t.subset=[],t;if(n<=0)throw new Error("INPUT_LIMIT_EXCEEDED");if(i<=0){if(d(e,t.amount,0,0))throw new Error("MIN_UTXO_ERROR");throw new Error("INPUTS_EXHAUSTED")}let r=t.subset.splice(Math.floor(Math.random()*i),1).pop();return t.selection.push(r),t.amount=l(r.output().amount(),t.amount),a(t,e,n-1,s)}function m(t,e,n,i){let r=t.subset.length;if(p(t.amount,i.ideal)>=0||r<=0||n<=0)return t.remaining=[...t.remaining,...t.subset],void(t.subset=[]);const o=t.subset.splice(Math.floor(Math.random()*r),1).pop(),u=s.B4R.new(s.WbW.from_str("0")).checked_add(o.output().amount()).checked_add(e);return B(g(i.ideal)-g(u))<B(g(i.ideal)-g(e))&&p(u,i.maximum)<=0?(t.selection.push(o),t.amount=l(o.output().amount(),t.amount),n--):t.remaining.push(o),m(t,e,n,i)}function l(t,e){return e.checked_add(t)}function c(t,e="ASC"){return t.sort(((t,n)=>{let s="DESC"===e?BigInt(-1):BigInt(1);return Number((g(t)-g(n))*s)}))}function g(t){let e=BigInt(0),n=BigInt(t.coin().to_str());if(n>0)e=n;else if(t.multiasset()&&t.multiasset().len()>0){let n=t.multiasset().keys().get(0),s=t.multiasset().get(n).keys().get(0);e=BigInt(t.multiasset().get(n).get(s).to_str())}return e}function f(t,e){let n=BigInt(0);if(BigInt(t.coin().to_str())>0)n=BigInt(e.coin().to_str());else if(t.multiasset()&&e.multiasset()&&t.multiasset().len()>0&&e.multiasset().len()>0){let s=t.multiasset().keys().get(0),i=t.multiasset().get(s).keys().get(0);n=BigInt(e.multiasset().get(s).get(i).to_str())}return n}function _(t,e){if(BigInt(e.coin().to_str())<BigInt(1)){let n=[],s=[];for(let i=0;i<t.remaining.length;i++)void 0!==p(t.remaining[i].output().amount(),e)?n.push(t.remaining[i]):s.push(t.remaining[i]);t.subset=n,t.remaining=s}else t.subset=t.remaining.splice(0,t.remaining.length)}function d(t,e,n,i){let o=t;if(n&&BigInt(t.coin().to_str())>0){let u=s.B4R.new(s.Ajc(e,s.WbW.from_str(n.toString())));if(p(e,u)<0)return!1;if(p(t,u)<0&&(o=u.checked_add(s.B4R.new(s.WbW.from_str(r.minUTxO)))),i>0){let t=BigInt(r.minFeeA)*BigInt(r.maxTxSize)+BigInt(r.minFeeB);t=s.B4R.new(s.WbW.from_str(t.toString())),o=o.checked_add(t)}}return p(e,o)>=0}const b=t=>t.map((t=>s.ZAD.from_bytes(t.to_bytes()))),h=t=>s.B4R.from_bytes(t.to_bytes());function B(t){return t<0?t*BigInt(-1):t}function p(t,e){let n=BigInt(t.coin().to_str()),s=BigInt(e.coin().to_str());if(e.multiasset()){let i=e.multiasset().keys().get(0),r=e.multiasset().get(i).keys().get(0);if(!t.multiasset()||!t.multiasset().len())return;if(!t.multiasset().get(i)||!t.multiasset().get(i).get(r))return;n=BigInt(t.multiasset().get(i).get(r).to_str()),s=BigInt(e.multiasset().get(i).get(r).to_str())}return n>=s?n===s?0:1:-1}e.default=o}))}}]);