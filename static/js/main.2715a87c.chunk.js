(this["webpackJsonpren-js-example"]=this["webpackJsonpren-js-example"]||[]).push([[0],{1e3:function(e,t){},1182:function(e,t){},1408:function(e,t,a){"use strict";a.r(t);a(667);var n,s=a(0),r=a(223),l=a(25),o=a(1),c=a.n(o),m=a(4),i=a(13),u=a(105),p=a(27),E=a(181),d=a.n(E),k=a(291),b=a(104),y=a(9),f=a(6),g=a.n(f),N=a(652),v={getWallet:function(){var e=Object(m.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum||!window.web3){e.next=14;break}return e.next=3,window.ethereum.enable();case 3:return a=new d.a(window.web3.currentProvider),e.next=6,a.eth.net.getId();case 6:if(n=e.sent,!t||4===n){e.next=11;break}throw new Error("Please change your Web3 wallet to Rinkeby");case 11:if(t||1===n){e.next=13;break}throw new Error("Please change your Web3 wallet to Mainnet");case 13:return e.abrupt("return",a);case 14:throw new Error("Please use a Web3 browser.");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getBalance:function(){var e=Object(m.a)(c.a.mark((function e(t,a){var n,s,r,l,o,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.eth.getAccounts();case 2:return n=e.sent[0],e.next=5,Object(k.a)(t.currentProvider,void 0,b.c).initialize(y.RenNetwork.Testnet).getTokenContractAddress(a);case 5:return s=e.sent,r=new t.eth.Contract(N,s),e.next=9,r.methods.decimals().call();case 9:return l=e.sent,e.next=12,r.methods.balanceOf(n).call();case 12:return o=e.sent,m=new g.a(o).div(new g.a(10).exponentiatedBy(new g.a(l).toNumber())).toFixed(),e.abrupt("return",m);case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},x=a(52),w=({asset:e,renJS:t,web3:a,network:n,balance:r})=>{var l="testnet"===n||"devnet"===n,o=s.useState(null),u=Object(i.a)(o,2),p=u[0],E=u[1],d=s.useState(""),k=Object(i.a)(d,2),b=k[0],y=k[1],f=s.useState(""),N=Object(i.a)(f,2),v=N[0],x=N[1],w=s.useMemo(()=>!b||""===b,[b]),h=s.useCallback(function(){var e=Object(m.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a){e.next=4;break}return E("Please use a Web3 browser"),e.abrupt("return");case 4:if(v){e.next=7;break}return E("Please enter a valid amount."),e.abrupt("return");case 7:if(!new g.a(v).lte(5e-5)){e.next=10;break}return E("Amount must be greater than 0.00005"),e.abrupt("return");case 10:E(null);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[v,a]),O=s.useCallback(()=>{null!==r&&x(r)},[r]);return s.createElement("form",{onSubmit:h},s.createElement("div",{className:"send"},s.createElement("input",{value:b,onChange:e=>{y(e.target.value)},placeholder:"Recipient (".concat(l?"Testnet":""," ").concat((S.get(e)||{name:e.toUpperCase()}).name," address)")})),s.createElement("div",{className:"send"},s.createElement("div",{className:"send"},s.createElement("input",{className:"no-right-border",value:v,onChange:e=>{x(e.target.value)},placeholder:"Amount"}),w?s.createElement(s.Fragment,null):s.createElement("div",{role:"button",className:"box box-action box-blue ".concat(r?"":"disabled"),onClick:r?O:void 0},"max"),s.createElement("div",{className:"box"},e.toUpperCase()))),s.createElement("div",{className:"send"},s.createElement("button",{type:"submit",className:"blue ".concat(v?"":"disabled")},"Burn")),p?s.createElement("p",{className:"box red"},p):s.createElement(s.Fragment,null))},h=a(93),O=e=>{var t=e.children,a=Object(h.a)(e,["children"]);return s.createElement("a",Object.assign({},a,{target:"_blank",rel:"noopener noreferrer"}),t)},j=({txHash:e,deposit:t,status:a,updateStatus:n})=>{var r=t._params,l=r.asset,o=r.from,p=r.to,E=t.depositDetails.amount,d=s.useState(null),k=Object(i.a)(d,2),b=k[0],y=k[1],f=s.useState(!1),N=Object(i.a)(f,2),v=N[0],w=N[1],h=s.useCallback(()=>w(!0),[w]),j=s.useState(null),C=Object(i.a)(j,2),S=C[0],D=C[1],M=s.useCallback(t=>{n(e,t)},[n,e]),F=s.useState(null),R=Object(i.a)(F,2),B=R[0],T=R[1],P=s.useState(null),A=Object(i.a)(P,2),I=A[0],L=A[1],_=s.useCallback((e,t)=>{T(e),L(t)},[]),W=s.useState(null),H=Object(i.a)(W,2),J=H[0],V=H[1],G=s.useState(null),U=Object(i.a)(G,2),$=U[0],z=U[1],Y=s.useCallback(()=>{M(x.a.DETECTED),Object(x.b)(t,M,_,V,z).catch(e=>{y(String(e.message||e)),M(x.a.ERROR)})},[_,y,M,t,V,z]);s.useEffect(()=>{Object(m.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(),e.next=3,o.assetDecimals(l);case 3:t=e.sent,D(new g.a(E).div(new g.a(10).exponentiatedBy(t)).toFixed());case 5:case"end":return e.stop()}}),e)})))().catch(console.error)},[]);var q=s.useState(!1),K=Object(i.a)(q,2),Q=K[0],X=K[1],Z=s.useCallback(Object(m.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),y(null),e.prev=2,e.next=5,Object(x.e)(t,M,z);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),y(String(e.t0.message||e.t0));case 10:X(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])}))),[X,t,M]);return s.createElement("div",{className:"deposit ".concat(a===x.a.DONE?"done":"")},s.createElement("p",null,s.createElement("b",null,"Received"," ",S||s.createElement(u.a,{style:{display:"inline-block"}})," ",l)),s.createElement("p",null,s.createElement("b",null,"RenVM Hash:")," ",e),s.createElement("p",null,s.createElement("b",null,"Status:")," ",a===x.a.CONFIRMED?s.createElement(s.Fragment,null,"Submitting to RenVM..."," ",s.createElement(u.a,{style:{display:"inline-block"}})):a),t.depositDetails.transaction?s.createElement("p",null,s.createElement("b",null,o.name," tx:")," ",o.transactionExplorerLink?s.createElement(O,{href:o.transactionExplorerLink(t.depositDetails.transaction)},o.transactionID(t.depositDetails.transaction)):t.depositDetails.transaction):null,a===x.a.CONFIRMED&&J?s.createElement("p",null,s.createElement("b",null,"RenVM status:")," ",J):null,a===x.a.DETECTED&&null!==B?s.createElement("p",null,s.createElement("b",null,"Confirmations:")," ",B,"/",I):null,a===x.a.SIGNED?s.createElement("button",{disabled:Q,onClick:Z,className:"blue"},Q?s.createElement(u.a,null):s.createElement(s.Fragment,null,"Submit to ",p.name)):null,a===x.a.ERROR?s.createElement("button",{disabled:Q,onClick:Y,className:"blue"},"Retry"):null,$?s.createElement("p",null,s.createElement("b",null,p.name," tx:")," ",p.transactionExplorerLink?s.createElement(O,{href:p.transactionExplorerLink($)},$):$):null,b?s.createElement("div",{className:"red",onClick:h},b.length>100&&!v?s.createElement(s.Fragment,null,b.slice(0,74),"..."," ",s.createElement("span",{style:{color:"darkgray",cursor:"pointer"}},"(click for full error)")):b):null)},C=a(661),S=(new Map).set("FIL",{symbol:"FIL",name:"Filecoin"}).set("BTC",{symbol:"BTC",name:"Bitcoin"});!function(e){e.Mint="Mint",e.Burn="Burn"}(n||(n={}));var D;D=()=>{var e=s.useState("FIL"),t=Object(i.a)(e,2),a=t[0],r=t[1],o=s.useState(null),E=Object(i.a)(o,2),d=E[0],k=E[1];s.useEffect(()=>{Object(m.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=k,e.next=3,v.getWallet(!0);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))().catch(e=>N(e.message))},[!0]);var b=s.useMemo(()=>Object(x.c)(),[]),y=s.useState(null),f=Object(i.a)(y,2),g=f[0],N=f[1],h=s.useState(null),O=Object(i.a)(h,2),D=O[0],M=O[1],F=s.useCallback(e=>{r(e)},[r]);s.useEffect(()=>{Object(m.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(null),d?v.getBalance(d,a).then(M).catch(console.error):M("?");case 2:case"end":return e.stop()}}),e)})))().catch(console.error)},[d,a,M]);var R=s.useState(n.Mint),B=Object(i.a)(R,2),T=B[0],P=B[1],A=s.useState(Object(p.OrderedMap)()),I=Object(i.a)(A,2),L=I[0],_=I[1],W=s.useCallback((e,t)=>{_(a=>a.get(e)?a:a.set(e,{deposit:t,status:x.a.DETECTED}))},[_]),H=s.useCallback((e,t)=>{_(a=>a.set(e,Object(l.a)(Object(l.a)({},a.get(e)),{},{status:t})))},[_]);return s.createElement(s.Fragment,null,s.createElement("div",{className:"box testnet-warning"},"TESTNET"),s.createElement("div",{className:"test-environment"},s.createElement(u.b,{top:!0,thisToken:a,otherToken:"",allTokens:S,key:"top",onMarketChange:F,getMarket:()=>{}}),s.createElement("div",{className:"box"},"Your ren",a," balance: ",D||s.createElement(u.a,null)," ","ren",a),s.createElement("div",null,s.createElement("div",{className:"tab ".concat(T===n.Mint?"tab--selected":""),onClick:()=>P(n.Mint)},"Mint"),s.createElement("div",{className:"tab disabled ".concat(T===n.Burn?"tab--selected":"")},"Burn")),s.createElement("div",{className:"form-outer"},T===n.Mint?s.createElement(C.a,{key:a,asset:a,web3:d,renJS:b,network:"testnet",addDeposit:W}):s.createElement(w,{key:a,asset:a,web3:d,renJS:b,network:"testnet",balance:D})),g?s.createElement("p",{className:"box red"},g):s.createElement(s.Fragment,null)),s.createElement("div",{className:"deposits"},Array.from(L.keys()).map(e=>{var t=L.get(e),a=t.deposit,n=t.status;return s.createElement(j,{key:e,txHash:e,deposit:a,status:n,updateStatus:H})})))},r.render(s.createElement("div",{className:"test-background"},s.createElement(D,null)),document.getElementById("root"))},52:function(e,t,a){"use strict";a.d(t,"c",(function(){return y})),a.d(t,"d",(function(){return f})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return g})),a.d(t,"e",(function(){return N}));var n,s=a(1),r=a.n(s),l=a(4),o=a(653),c=a(291),m=a(665),i=a(9),u=a(104),p=a(140),E=a(657),d=a(660),k=a(3),b=i.LogLevel.Log,y=()=>{var e=new p.HttpProvider("http://34.239.188.210:18515"),t=new p.OverwriteProvider(e),a=new d.RenVMProvider("testnet",t);return new E.a(a,{logLevel:b})},f=function(){var e=Object(l.a)(r.a.mark((function e(t,a,n,s,i,p){var E,d,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=i,e.next="FIL"===e.t0?3:"BTC"===e.t0?5:7;break;case 3:return E=Object(o.a)(),e.abrupt("break",8);case 5:return E=Object(m.a)(),e.abrupt("break",8);case 7:throw new Error("Unsupported asset ".concat(i,"."));case 8:return d=Object(c.a)(t.currentProvider,void 0,u.c),e.next=11,a.lockAndMint({asset:i,from:E,to:d.Account({address:n}),nonce:Object(k.Ox)("00".repeat(32))});case 11:(b=e.sent).gatewayAddress&&s(b.gatewayAddress),b.on("deposit",function(){var e=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.txHash();case 2:a=e.sent,p(a,t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 14:case"end":return e.stop()}}),e)})));return function(t,a,n,s,r,l){return e.apply(this,arguments)}}();!function(e){e.DETECTED="Detected",e.CONFIRMED="Confirmed",e.SIGNED="Signed",e.DONE="Done",e.ERROR="Error"}(n||(n={}));var g=function(){var e=Object(l.a)(r.a.mark((function e(t,a,s,l,o){var c,m,u,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.txHash();case 2:return c=e.sent,t._logger=new i.SimpleLogger(b,"[".concat(c.slice(0,6),"] ")),e.next=6,t.confirmed().on("target",s).on("confirmation",s);case 6:a(n.CONFIRMED),m=1;case 8:if(!m){e.next=25;break}return e.prev=9,e.next=12,t.signed().on("status",l);case 12:return e.abrupt("break",25);case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0),u=e.t0;case 19:if(!--m){e.next=23;break}return e.next=23,Object(k.sleep)(10);case 23:e.next=8;break;case 25:if(0!==m){e.next=27;break}throw new Error(u);case 27:return e.next=29,t.findTransaction();case 29:if(!(p=e.sent)){e.next=34;break}return o(p),a(n.DONE),e.abrupt("return");case 34:a(n.SIGNED);case 35:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t,a,n,s,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(r.a.mark((function e(t,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.mint().on("transactionHash",s);case 2:a(n.DONE);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},652:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},661:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return d}));var n=a(1),s=a.n(n),r=a(4),l=a(13),o=a(0),c=a(662),m=a.n(c),i=a(105),u=a(52),p=a(663),E=({text:e})=>{var t=o.useState(!1),a=Object(l.a)(t,2),n=a[0],s=a[1],r=o.useCallback(()=>{n||(s(!0),setTimeout(()=>s(!1),2e3))},[s,n]);return o.createElement(m.a,{text:e,onClick:r},o.createElement("span",{onClick:r,className:"copy ".concat(n?"copied":"")},n?"Copied":e))},d=({asset:t,renJS:a,web3:n,network:c,addDeposit:m})=>{var d="testnet"===c||"devnet"===c,k=o.useState(null),b=Object(l.a)(k,2),y=b[0],f=b[1],g=o.useState(null),N=Object(l.a)(g,2),v=N[0],x=N[1],w=o.useState(!1),h=Object(l.a)(w,2),O=h[0],j=h[1],C=o.useState(null),S=Object(l.a)(C,2),D=S[0],M=S[1],F=o.useCallback(function(){var e=Object(r.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),j(!0),M(null),n){e.next=6;break}return f("Please use a Web3 browser"),e.abrupt("return");case 6:if(v){e.next=9;break}return f("Please enter a valid Ethereum address."),e.abrupt("return");case 9:return f(null),e.prev=10,e.next=13,Object(u.d)(n,a,v,M,t,m);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(10),console.error(e.t0),f(String(e.t0.message||e.t0.error||JSON.stringify(e.t0)));case 19:j(!1);case 20:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t){return e.apply(this,arguments)}}(),[t,a,v,n,m]),R=o.useCallback(Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return f("Please use a Web3 browser"),e.abrupt("return");case 3:return e.prev=3,e.t0=x,e.next=7,n.eth.getAccounts();case 7:e.t1=e.sent[0],(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(3),console.error(e.t2);case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),[n,x]),B=o.useMemo(()=>!(!v||!v.match(/(^0x[A-Fa-f0-9]{40}$)|(^.*\.eth$)/)),[v]);return o.createElement("form",{onSubmit:F,className:O?"disabled":""},o.createElement("div",{className:"send"},o.createElement("input",{className:"no-right-border",value:v||"",onChange:e=>{x(e.target.value)},placeholder:"Recipient (".concat(d?"Rinkeby":"Ethereum"," address)")}),o.createElement("div",{role:"button",className:"box box-action no-left-border",onClick:R},o.createElement(p.a,null))),o.createElement("div",{className:"send"},o.createElement("button",{disabled:O||!B,type:"submit",className:"blue ".concat(O||!B?"disabled":"")},O?o.createElement(i.a,{alt:!0}):o.createElement(o.Fragment,null,"Mint"))),D?o.createElement(o.Fragment,null,o.createElement("div",{className:"deposit-address"},"Deposit ",o.createElement("b",null,t)," to","string"===typeof D?o.createElement("p",null,o.createElement("b",null,"Address:")," ",o.createElement(E,{text:D})):o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement("b",null,"Address:")," ",o.createElement(E,{text:D.address})),D.params?o.createElement("div",null,o.createElement("b",null,"Params:"),o.createElement("p",null,"Base64:"," ",o.createElement(E,{text:D.params})),o.createElement("p",null,"Hex:"," ",o.createElement(E,{text:e.from(D.params,"base64").toString("hex")}))):null)),o.createElement("div",{className:"deposit-loading"},"Watching for deposits..."," ",o.createElement(i.a,{style:{display:"inline-block"}}))):null,y?o.createElement("p",{className:"box red"},y):o.createElement(o.Fragment,null))}}).call(this,a(2).Buffer)},663:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),s=a.n(n);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=s.a.createElement("style",{type:"text/css"},"\n\t.metamask-st0{fill:#161616;stroke:#161616;}\n\t.metamask-st1{fill:#E4761B;stroke:#E4761B;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st2{fill:#763D16;stroke:#763D16;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st3{fill:#F6851B;stroke:#F6851B;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st4{fill:#E2761B;stroke:#E2761B;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st5{fill:#CD6116;stroke:#CD6116;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st6{fill:#C0AD9E;stroke:#C0AD9E;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st7{fill:#D7C1B3;stroke:#D7C1B3;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st8{fill:#E4751F;stroke:#E4751F;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st9{fill:#233447;stroke:#233447;stroke-linecap:round;stroke-linejoin:round;}\n\t.metamask-st10{fill:#161616;stroke:#161616;stroke-linecap:round;stroke-linejoin:round;}\n"),c=s.a.createElement("polygon",{className:"metamask-st0",points:"277.3,145.6 272.3,142 280.3,134.7 274.2,129.9 282.2,123.8 276.9,119.8 285.3,79 272.7,41.1  191.6,71.4 124.1,71.4 43,41.1 30.4,79 38.9,119.8 33.5,123.8 41.5,129.9 35.4,134.7 43.4,142 38.4,145.6 49.9,159.1 32.5,213.3  48.6,268.6 105.3,253 116.3,262 138.7,277.5 177,277.5 199.4,262 210.4,253 267.1,268.6 283.3,213.3 265.8,159.1 "}),m=s.a.createElement("g",null,s.a.createElement("polygon",{className:"metamask-st1",points:"105.3,253 48.6,268.6 32.5,213.3  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"283.3,213.3 267.1,268.6 210.4,253  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"265.8,159.1 213.5,143.8 231.8,139  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"49.9,159.1 84,139 102.2,143.8  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"43.4,142 41.5,129.9 84,139  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"272.3,142 231.8,139 274.2,129.9  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"272.3,142 265.8,159.1 231.8,139  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"43.4,142 84,139 49.9,159.1  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"231.8,139 276.9,119.8 274.2,129.9  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"84,139 41.5,129.9 38.9,119.8  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"124.1,71.4 191.6,71.4 176.5,112.5  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"176.5,112.5 139.2,112.5 124.1,71.4  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"276.9,119.8 231.8,139 231,87.4  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"102.2,143.8 84,139 84.7,87.4  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"84.7,87.4 84,139 38.9,119.8  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"231,87.4 231.8,139 213.5,143.8  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"139.2,112.5 43,41.1 124.1,71.4  "}),s.a.createElement("polygon",{className:"metamask-st4",points:"272.7,41.1 176.5,112.5 191.6,71.4  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"210.4,253 236.9,213.3 283.3,213.3  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"32.5,213.3 78.9,213.3 105.3,253  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"229.3,167.7 283.3,213.3 236.9,213.3  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"86.4,167.7 32.5,213.3 49.9,159.1  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"78.9,213.3 32.5,213.3 86.4,167.7  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"229.3,167.7 265.8,159.1 283.3,213.3  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"84.7,87.4 139.2,112.5 102.2,143.8  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"213.5,143.8 176.5,112.5 231,87.4  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"265.8,159.1 272.3,142 277.3,145.6  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"49.9,159.1 38.4,145.6 43.4,142  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"272.3,142 274.2,129.9 280.3,134.7  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"43.4,142 35.4,134.7 41.5,129.9  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"33.5,123.8 38.9,119.8 41.5,129.9  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"282.2,123.8 274.2,129.9 276.9,119.8  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"49.9,159.1 102.2,143.8 86.4,167.7  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"265.8,159.1 229.3,167.7 213.5,143.8  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"38.9,119.8 30.4,79 84.7,87.4  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"231,87.4 285.3,79 276.9,119.8  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"102.2,143.8 139.2,112.5 142.6,170.2  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"213.5,143.8 229.3,167.7 173.1,170.2  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"173.1,170.2 176.5,112.5 213.5,143.8  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"142.6,170.2 86.4,167.7 102.2,143.8  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"272.7,41.1 285.3,79 231,87.4  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"43,41.1 139.2,112.5 84.7,87.4  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"231,87.4 176.5,112.5 272.7,41.1  "}),s.a.createElement("polygon",{className:"metamask-st2",points:"84.7,87.4 30.4,79 43,41.1  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"105.3,253 78.9,213.3 110,213.7  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"210.4,253 205.7,213.7 236.9,213.3  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"173.1,170.2 142.6,170.2 139.2,112.5  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"139.2,112.5 176.5,112.5 173.1,170.2  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"116.3,262 105.3,253 136.8,267.9  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"178.9,267.9 210.4,253 199.4,262  "}),s.a.createElement("polygon",{className:"metamask-st7",points:"136.6,258.6 136.8,267.9 105.3,253  "}),s.a.createElement("polygon",{className:"metamask-st7",points:"179.2,258.6 210.4,253 178.9,267.9  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"86.4,167.7 110,213.7 78.9,213.3  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"236.9,213.3 205.7,213.7 229.3,167.7  "}),s.a.createElement("polygon",{className:"metamask-st8",points:"86.4,167.7 109.2,190.8 110,213.7  "}),s.a.createElement("polygon",{className:"metamask-st8",points:"229.3,167.7 205.7,213.7 206.6,190.8  "}),s.a.createElement("polygon",{className:"metamask-st7",points:"105.3,253 139.2,236.5 136.6,258.6  "}),s.a.createElement("polygon",{className:"metamask-st7",points:"210.4,253 179.2,258.6 176.5,236.5  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"139.2,236.5 105.3,253 110,213.7  "}),s.a.createElement("polygon",{className:"metamask-st1",points:"176.5,236.5 205.7,213.7 210.4,253  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"173.1,170.2 229.3,167.7 206.6,190.8  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"109.2,190.8 86.4,167.7 142.6,170.2  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"142.6,170.2 129.1,181.7 109.2,190.8  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"206.6,190.8 186.6,181.7 173.1,170.2  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"205.7,213.7 178.3,199.1 206.6,190.8  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"110,213.7 109.2,190.8 137.4,199.1  "}),s.a.createElement("polygon",{className:"metamask-st9",points:"137.4,199.1 109.2,190.8 129.1,181.7  "}),s.a.createElement("polygon",{className:"metamask-st9",points:"178.3,199.1 186.6,181.7 206.6,190.8  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"186.6,181.7 178.3,199.1 173.1,170.2  "}),s.a.createElement("polygon",{className:"metamask-st5",points:"129.1,181.7 142.6,170.2 137.4,199.1  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"199.4,262 177,277.5 178.9,267.9  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"136.8,267.9 138.7,277.5 116.3,262  "}),s.a.createElement("polygon",{className:"metamask-st4",points:"178.3,199.1 171.8,188.4 173.1,170.2  "}),s.a.createElement("polygon",{className:"metamask-st8",points:"137.4,199.1 142.6,170.2 143.9,188.4  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"173.1,170.2 171.8,188.4 143.9,188.4  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"143.9,188.4 142.6,170.2 173.1,170.2  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"178.3,199.1 205.7,213.7 176.5,236.5  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"139.2,236.5 110,213.7 137.4,199.1  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"137.4,199.1 144,233.2 139.2,236.5  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"176.5,236.5 171.7,233.2 178.3,199.1  "}),s.a.createElement("polygon",{className:"metamask-st8",points:"171.8,188.4 178.3,199.1 171.7,233.2  "}),s.a.createElement("polygon",{className:"metamask-st8",points:"143.9,188.4 144,233.2 137.4,199.1  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"143.9,188.4 171.8,188.4 171.7,233.2  "}),s.a.createElement("polygon",{className:"metamask-st3",points:"171.7,233.2 144,233.2 143.9,188.4  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"179.2,258.6 178.9,267.9 177,277.5  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"138.7,277.5 136.8,267.9 136.6,258.6  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"136.6,258.6 139,256.4 138.7,277.5  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"177,277.5 176.7,256.4 179.2,258.6  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"138.7,277.5 139,256.4 176.7,256.4  "}),s.a.createElement("polygon",{className:"metamask-st6",points:"176.7,256.4 177,277.5 138.7,277.5  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"176.5,236.5 179.2,258.6 176.7,256.4  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"139,256.4 136.6,258.6 139.2,236.5  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"139.2,236.5 140.7,241.2 139,256.4  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"176.7,256.4 175,241.2 176.5,236.5  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"143.7,237.7 140.7,241.2 139.2,236.5  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"176.5,236.5 175,241.2 172,237.7  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"172,237.7 171.7,233.2 176.5,236.5  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"139.2,236.5 144,233.2 143.7,237.7  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"171.7,233.2 172,237.7 143.7,237.7  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"143.7,237.7 144,233.2 171.7,233.2  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"140.7,241.2 175,241.2 176.7,256.4  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"176.7,256.4 139,256.4 140.7,241.2  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"140.7,241.2 143.7,237.7 172,237.7  "}),s.a.createElement("polygon",{className:"metamask-st10",points:"172,237.7 175,241.2 140.7,241.2  "})),i=e=>{var t=e.svgRef,a=e.title,n=l(e,["svgRef","title"]);return s.a.createElement("svg",r({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 318.6 318.6",style:{enableBackground:"new 0 0 318.6 318.6"},xmlSpace:"preserve",ref:t},n),a?s.a.createElement("title",null,a):null,o,c,m)},u=s.a.forwardRef((e,t)=>s.a.createElement(i,r({svgRef:t},e)));a.p},666:function(e,t,a){e.exports=a(1408)},667:function(e,t,a){},688:function(e,t){},690:function(e,t){},804:function(e,t){},932:function(e,t){},934:function(e,t){},935:function(e,t){},940:function(e,t){},942:function(e,t){},949:function(e,t){},951:function(e,t){},968:function(e,t){},970:function(e,t){},985:function(e,t){},997:function(e,t){}},[[666,1,2]]]);
//# sourceMappingURL=main.2715a87c.chunk.js.map