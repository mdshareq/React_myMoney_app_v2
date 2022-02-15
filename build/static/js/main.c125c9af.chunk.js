(this["webpackJsonpmy-money"]=this["webpackJsonpmy-money"]||[]).push([[0],{18:function(e,t,n){e.exports={container:"Home_container__2lDpo",content:"Home_content__1dO_-",sidebar:"Home_sidebar__TLpaU",transactions:"Home_transactions__2-UhT",name:"Home_name__1kjvE",amount:"Home_amount__2j6xl"}},29:function(e,t,n){e.exports={navbar:"Navbar_navbar__3gkqs",title:"Navbar_title__1pNMA"}},33:function(e,t,n){e.exports={"login-form":"Login_login-form__1o4IZ"}},34:function(e,t,n){e.exports={"signup-form":"Signup_signup-form__ya9jz"}},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(32),s=n.n(r),u=n(16),i=n(17),o=n(5),l=n(9),j=n(23);n(54),n(43);j.a.initializeApp({apiKey:"AIzaSyA_SiRmb60NmDWVcX15FyvzxuSi5pX4Fgw",authDomain:"mymoney1-554b9.firebaseapp.com",projectId:"mymoney1-554b9",storageBucket:"mymoney1-554b9.appspot.com",messagingSenderId:"674929409639",appId:"1:674929409639:web:3da666161d6953c0a8dec2"});var b=j.a.firestore(),d=j.a.auth(),O=j.a.firestore.Timestamp,p=n(1),h=Object(c.createContext)(),m=function(e,t){switch(t.type){case"LOGIN":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case"AUTH_IS_READY":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload,authIsReady:!0});case"LOGOUT":return Object(l.a)(Object(l.a)({},e),{},{user:null});default:return e}};function f(e){var t=e.children,n=Object(c.useReducer)(m,{user:null,authIsReady:!1}),a=Object(o.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=d.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log(r),Object(p.jsx)(h.Provider,{value:Object(l.a)(Object(l.a)({},r),{},{dispatch:s}),children:t})}var x=function(){var e=Object(c.useContext)(h);if(!e)throw new Error("Out of scope AuthContext/ trying to use outside of scope");return e},g=n(37),v=n(10),y=n.n(v),_=n(15),N={document:null,isPending:!1,error:null,success:null},S=function(e,t){switch(t.type){case"IS_PENDING":return{document:null,isPending:!0,error:null,success:null};case"ERROR":return{document:null,isPending:!1,error:t.payload,success:!1};case"ADDED_DOCUMENT":return{document:t.payload,isPending:!1,error:null,success:!0};case"DELETED_DOCUMENT":return{document:null,isPending:!1,error:null,success:!0};default:return e}},E=function(e){var t=Object(c.useReducer)(S,N),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),u=Object(o.a)(s,2),i=u[0],j=u[1],d=b.collection(e),p=function(e){i||r(e)},h=function(){var e=Object(_.a)(y.a.mark((function e(t){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({type:"IS_PENDING"}),e.prev=1,n=O.fromDate(new Date),e.next=5,d.add(Object(l.a)(Object(l.a)({},t),{},{createdAt:n}));case 5:c=e.sent,p({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(_.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({type:"IS_PENDING"}),e.prev=1,e.next=4,d.doc(t).delete();case 4:p({type:"DELETE_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){j(!0)}}),[]),{addDocument:h,delDocument:m,response:a}};function w(e){var t=e.uid,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),i=Object(o.a)(u,2),l=i[0],j=i[1],b=E("transactions"),d=b.addDocument,O=b.response;return Object(c.useEffect)((function(){O.success&&(s(""),j(""))}),[O.success]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"Add a Transaction"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({uid:t,name:r,amount:l})},children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Transaction name:"}),Object(p.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)},value:r})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Amount (\u20b9):"}),Object(p.jsx)("input",{type:"number",required:!0,onChange:function(e){return j(e.target.value)},value:l})]}),Object(p.jsx)("button",{children:"Add Transaction"})]})]})}var D=n(18),k=n.n(D);function I(e){var t=e.transactions,n=E("transactions").delDocument;return Object(p.jsx)("ul",{className:k.a.transactions,children:t.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("p",{className:k.a.name,children:e.name}),Object(p.jsxs)("p",{className:k.a.amount,children:["\u20b9",e.amount]}),Object(p.jsx)("button",{onClick:function(){return n(e.id)},children:"x"})]},e.id)}))})}function A(){var e=x().user,t=function(e,t){var n=Object(c.useState)(null),a=Object(o.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(null),i=Object(o.a)(u,2),j=i[0],d=i[1],O=Object(c.useRef)(t).current;return Object(c.useEffect)((function(){var t,n=b.collection(e);O&&(n=(t=n).where.apply(t,Object(g.a)(O)));var c=n.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id}))})),s(t),d(null)}),(function(e){console.log(e),d("Data Fetch Failed")}));return function(){return c()}}),[e,O]),{documents:r,error:j}}("transactions",["uid","==",e.uid]),n=t.documents,a=t.error;return Object(p.jsxs)("div",{className:k.a.container,children:[Object(p.jsxs)("div",{className:k.a.content,children:[a&&Object(p.jsx)("p",{children:a}),n&&Object(p.jsx)(I,{transactions:n})]}),Object(p.jsx)("div",{className:k.a.sidebar,children:Object(p.jsx)(w,{uid:e.uid})})]})}var C=n(33),P=n.n(C);function R(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),u=s[0],i=s[1],l=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],i=s[1],l=x().dispatch,j=Object(c.useState)(!1),b=Object(o.a)(j,2),O=b[0],p=b[1],h=function(){var e=Object(_.a)(y.a.mark((function e(t,n){var c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),a(null),e.prev=2,e.next=5,d.signInWithEmailAndPassword(t,n);case 5:if(c=e.sent){e.next=8;break}throw new Error("Login-Failed!");case 8:l({type:"LOGIN",payload:c.user}),O||(i(!1),a(null)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0.message),O||(a(e.t0.message),i(!1));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){p(!0)}}),[]),{error:n,isPending:u,login:h}}(),j=l.error,b=l.isPending,O=l.login;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(n,u)},className:P.a["login-form"],children:[Object(p.jsx)("h2",{children:"login"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"password:"}),Object(p.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),!b&&Object(p.jsx)("button",{className:"btn",onClick:O,children:"Login"}),b&&Object(p.jsx)("button",{className:"btn",disabled:!0,children:"Loading"}),j&&Object(p.jsx)("p",{children:j})]})}var T=n(34),L=n.n(T);function U(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),u=s[0],i=s[1],l=Object(c.useState)(""),j=Object(o.a)(l,2),b=j[0],O=j[1],h=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],i=s[1],l=x().dispatch,j=Object(c.useState)(!1),b=Object(o.a)(j,2),O=b[0],p=b[1],h=function(){var e=Object(_.a)(y.a.mark((function e(t,n,c){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),a(null),e.prev=2,e.next=5,d.createUserWithEmailAndPassword(t,n);case 5:if(r=e.sent){e.next=8;break}throw new Error("Signup-Failed!");case 8:return e.next=10,r.user.updateProfile({displayName:c});case 10:l({type:"LOGIN",payload:r.user}),O||(i(!1),a(null)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0.message),O||(a(e.t0.message),i(!1));case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){p(!0)}}),[]),{error:n,isPending:u,signup:h}}(),m=h.error,f=h.isPending,g=h.signup;return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(n,u,b)},className:L.a["signup-form"],children:[Object(p.jsx)("h2",{children:"sign up"}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"email:"}),Object(p.jsx)("input",{type:"email",onChange:function(e){return a(e.target.value)},value:n})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"password:"}),Object(p.jsx)("input",{type:"password",onChange:function(e){return i(e.target.value)},value:u})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"username:"}),Object(p.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)},value:b})]}),!f&&Object(p.jsx)("button",{className:"btn",children:"Sign up"}),f&&Object(p.jsx)("button",{className:"btn",disabled:!0,children:"Loading..."}),m&&Object(p.jsx)("p",{children:m})]})}var F=n(29),H=n.n(F);function G(){var e=x().user,t=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],i=s[1],l=x().dispatch,j=Object(c.useState)(!1),b=Object(o.a)(j,2),O=b[0],p=b[1],h=function(){var e=Object(_.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),a(null),e.prev=2,e.next=5,d.signOut();case 5:l({type:"LOGOUT"}),O||(i(!1),a(null)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),O||(console.log(e.t0.message),a(e.t0.message),i(!1));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){p(!0)}}),[]),{error:n,isPending:u,logout:h}}().logout;return Object(p.jsx)("nav",{className:H.a.navbar,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:H.a.title,children:Object(p.jsx)(u.b,{to:"/home",children:"\ud83e\udd16 myMoney"})}),!e&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/login",children:"Login"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/signup",children:"Signup"})})]}),e&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("li",{children:["Hello, ",e.displayName]}),Object(p.jsx)("li",{children:Object(p.jsx)("button",{onClick:t,className:"btn",children:"Logout"})})]})]})})}n(51);function M(){return Object(p.jsxs)("div",{className:"base-home",children:[Object(p.jsx)("h1",{className:"base-brand",children:"\ud83e\udd16 myMoney"}),Object(p.jsx)("h1",{className:"base-welcome",children:"Welcome User!"}),Object(p.jsx)("h2",{className:"base-head",children:"This App lets you keep track of your transactions!!"}),Object(p.jsxs)("p",{className:"base-body",children:["Please"," ",Object(p.jsx)(u.b,{to:"/signup",className:"link",children:"Sign-up"})," ","or"," ",Object(p.jsx)(u.b,{to:"/login",className:"link",children:"Login"})," ","to get the expericence."," "]})]})}var z=function(){var e=x(),t=e.authIsReady,n=e.user;return Object(p.jsx)("div",{className:"App",children:t&&Object(p.jsxs)(u.a,{children:[Object(p.jsx)(G,{}),Object(p.jsxs)(i.d,{children:[Object(p.jsxs)(i.b,{exact:!0,path:"/",children:[!n&&Object(p.jsx)(i.a,{to:"/home"}),n&&Object(p.jsx)(A,{})]}),Object(p.jsxs)(i.b,{path:"/home",children:[n&&Object(p.jsx)(i.a,{to:"/"}),!n&&Object(p.jsx)(M,{})]}),Object(p.jsxs)(i.b,{path:"/login",children:[n&&Object(p.jsx)(i.a,{to:"/"}),!n&&Object(p.jsx)(R,{})]}),Object(p.jsxs)(i.b,{path:"/signup",children:[n&&Object(p.jsx)(i.a,{to:"/"}),!n&&Object(p.jsx)(U,{})]})]})]})})};n(52);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(f,{children:Object(p.jsx)(z,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.c125c9af.chunk.js.map