(this.webpackJsonptodolists=this.webpackJsonptodolists||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var s=n(2),i=n.n(s),a=n(5),c=n.n(a),r=(n(20),n(13)),d=n(8),u=n(9),o=n(3),l=n(15),h=n(14),j=(n.p,n(21),n(22),n(10)),m=n(11),b=n(1);var p=function(t){var e=t.items.map((function(e){return Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(b.jsx)("span",{children:Object(b.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(b.jsx)("div",{children:Object(b.jsx)(m.a,{duration:300,easing:"ease-in-out",children:e})})},O=n(4),x=n(12);O.b.add(x.a);var f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},s.addItem=s.addItem.bind(Object(o.a)(s)),s.handleInput=s.handleInput.bind(Object(o.a)(s)),s.deleteItem=s.deleteItem.bind(Object(o.a)(s)),s.setUpdate=s.setUpdate.bind(Object(o.a)(s)),s}return Object(u.a)(n,[{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){console.log("items:"+this.state.items);var n=this.state.items;n.map((function(n){n.key===e&&(console.log(n.key+"    "+e),n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"TODO LIST"}),Object(b.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter Your task",value:this.state.currentItem.text,onChange:this.handleInput}),Object(b.jsx)("button",{type:"submit",children:"Add"})]}),Object(b.jsx)("p",{children:this.state.items.text}),Object(b.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})})}}]),n}(i.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),i(t),a(t),c(t)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.cb6a55ef.chunk.js.map