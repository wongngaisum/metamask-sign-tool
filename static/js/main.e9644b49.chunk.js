(this["webpackJsonprock-paper-scissors-game"]=this["webpackJsonprock-paper-scissors-game"]||[]).push([[0],{202:function(t,e,n){},216:function(t,e){},239:function(t,e){},241:function(t,e){},317:function(t,e){},319:function(t,e){},351:function(t,e){},356:function(t,e){},358:function(t,e){},365:function(t,e){},378:function(t,e){},457:function(t,e,n){},460:function(t,e,n){"use strict";n.r(e);var r=n(48),i=n.n(r),c=n(192),s=n.n(c),o=(n(202),n(25)),a=n.n(o),u=n(193),g=n(6),h=n(7),d=n(11),l=n(10),f=n(194),b=n.n(f),p=(n(457),n(21)),j=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(g.a)(this,n),(r=e.call(this,t)).hexToString=function(t){if(!t.match(/^[0-9a-fA-F]+$/))throw new Error("is not a hex string.");t.length%2!==0&&(t="0"+t);for(var e=[],n=0;n<t.length;n+=2){var r=parseInt(t.substr(n,2),16);e.push(r)}return e},r.arrayOfBytesToString=function(t){return t.map((function(t){return 1===t.toString(16).length?"0"+t.toString(16):t.toString(16)})).join("")},r.sign=function(){return r.state.web3.eth.personal.sign(r.state.web3.utils.toHex(r.state.signStr),r.state.account,(function(t,e){r.setState({signedStr:e})}))},r.updateSignStr=function(t){r.setState({signStr:t.target.value})},r.state={signStr:"",signedStr:""},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=18;break}return e=new b.a(window.ethereum),console.log(window.ethereum),t.t0=console,t.next=6,e.eth.net.getId();case 6:return t.t1=t.sent,t.t0.log.call(t.t0,t.t1),t.prev=8,t.next=11,window.ethereum.enable();case 11:t.next=16;break;case 13:t.prev=13,t.t2=t.catch(8),console.error(t.t2);case 16:t.next=19;break;case 18:window.web3&&(e=window.web3,console.log("Injected web3 detected."));case 19:return t.next=21,e.eth.getAccounts();case 21:n=t.sent,console.log(e.eth.accounts),this.setState({web3:e,account:n[0]});case 24:case"end":return t.stop()}}),t,this,[[8,13]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:'Input data to be signed:  Will be prepended by "\\x19Ethereum Signed Message:\\n \u2016 len(message)"'}),Object(p.jsx)("input",{value:this.state.signStr,onChange:this.updateSignStr}),Object(p.jsx)("button",{onClick:this.sign,children:"GENERATE"})]}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:["Signature: ",this.state.signedStr]})})]})}}]),n}(i.a.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,463)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),r(t),i(t),c(t),s(t)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),w()}},[[460,1,2]]]);
//# sourceMappingURL=main.e9644b49.chunk.js.map