(this.webpackJsonpportfolio2=this.webpackJsonpportfolio2||[]).push([[0],{33:function(e,n,t){},56:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var c,i,o,r,a,s,b,j,d,l,u,p,m,O,f,x,h=t(2),g=t.n(h),y=t(22),w=t.n(y),v=(t(33),t(3)),k=t(5),S=t(12),z=t(23),P=t(24),M=t(4),T=t(1);var q=M.c.div(c||(c=Object(v.a)(["\n  background: white;\n  position: fixed;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 5;\n\n  ","\n\n  ","\n"])),(function(e){return"isMobile"===e.mode&&Object(M.b)(i||(i=Object(v.a)(["\n      padding: 10px 0 10px 0;\n    "])))}),(function(e){return e.pos&&Object(M.b)(o||(o=Object(v.a)(["\n      box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);\n      transition: box-shadow 0.3s ease-in;\n    "])))})),H=M.c.h1(r||(r=Object(v.a)(["\n  font-size: 24px;\n  z-index: 1;\n  margin-left: ",";\n"])),(function(e){return"isMobile"===e.mode?"25px":"50px"})),_=M.c.h1(a||(a=Object(v.a)(["\n  display: inline;\n  font-size: 24px;\n  z-index: 1;\n  color: #000080;\n  text-decoration: underline;\n  text-decoration-color: #000080;\n  font-weight: bold;\n"]))),A=M.c.ul(s||(s=Object(v.a)(["\n  ",";\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(b||(b=Object(v.a)(["\n          display: flex;\n          align-items: center;\n          list-style: none;\n          margin: 0 1rem 0 0;\n        "]))):Object(M.b)(j||(j=Object(v.a)(["\n          padding-left: 0;\n          text-align: center;\n          display: block;\n          position: absolute;\n          top: ",";\n          transition: top 0.3s ease-in;\n\n          width: 100%;\n          background: white;\n          text-align: -webkit-center;\n          z-index: -1;\n        "])),(function(e){return e.open?"100% ":"-820%"}))})),E=M.c.button(d||(d=Object(v.a)(["\n  display: none;\n\n  ","\n"])),(function(e){return"isMobile"===e.mode&&Object(M.b)(l||(l=Object(v.a)(["\n      display: flex;\n      border-radius: 8px;\n      background: white;\n      margin-right: 1rem;\n      z-index: 1;\n      border: none;\n\n      &:active {\n        filter: brightness(80%);\n      }\n    "])))})),N=M.c.li(u||(u=Object(v.a)(["\n  list-style: none;\n  cursor: pointer;\n  padding: 1rem;\n\n  font-size: 20px;\n  ","\n\n  ","\n"])),(function(e){return"isPc"===e.mode&&Object(M.b)(p||(p=Object(v.a)(["\n      & + & {\n        margin-left: 20px;\n      }\n      border-bottom: 3px solid\n        ",";\n\n      transition: border-bottom 0.2s ease-in;\n    "])),(function(e){return e.current?"#000080":"white"}))}),(function(e){return"isMobile"===e.mode&&Object(M.b)(m||(m=Object(v.a)(["\n      background: white;\n      margin: 1rem 0 1rem 0;\n\n      width: 75%;\n      border-radius: 1rem;\n\n      &:active {\n        filter: brightness(80%);\n      }\n    "])))})),F=M.c.a(O||(O=Object(v.a)(["\n  color: black;\n  display: block;\n\n  &:hover {\n    color: black;\n    text-decoration: none;\n  }\n"]))),Q=M.c.div(f||(f=Object(v.a)(["\n  ","\n"])),(function(e){return"isMobile"===e.mode&&Object(M.b)(x||(x=Object(v.a)(["\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background-color: white;\n      z-index: 0;\n    "])))})),B=function(e){var n=e.Home,t=e.About,c=e.Skills,i=e.Project,o=e.pos,r=e.mode,a=e.open,s=e.toggleHamburger;return e.sidebar,e.setSidebar,Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(q,{pos:o,mode:r,children:[Object(T.jsxs)(H,{mode:r,children:["Wooram & Minji ",Object(T.jsx)(_,{children:"1000"})," Day ",Object(T.jsx)(S.b,{})]}),Object(T.jsx)(E,{mode:r,onClick:s,children:a?Object(T.jsx)(P.a,{size:"24"}):Object(T.jsx)(z.a,{size:"24"})}),Object(T.jsx)(Q,{mode:r}),Object(T.jsxs)(A,{mode:r,open:a,children:[Object(T.jsx)(N,{mode:r,current:o<=n.bottom,children:Object(T.jsx)(F,{href:"#Home",children:"Home"})}),Object(T.jsx)(N,{mode:r,current:o>=t.top&&o<=t.bottom,children:Object(T.jsx)(F,{href:"#About",children:"About Us"})}),Object(T.jsx)(N,{mode:r,current:o>=c.top&&o<=c.bottom,children:Object(T.jsx)(F,{href:"#Skills",children:"Favorite"})}),Object(T.jsx)(N,{mode:r,current:o>=i.top,children:Object(T.jsx)(F,{href:"#Project",children:"Love Diary"})})]})]})})},L=t(6);var C,D=function(e){var n=e.sidebar,t=e.setSidebar,c=Object(L.useMediaQuery)({query:"(min-width:768px)"}),i=Object(L.useMediaQuery)({query:"(max-width:767px)"}),o=Object(h.useState)(-1),r=Object(k.a)(o,2),a=r[0],s=r[1],b=Object(h.useState)({Home:{top:0,bottom:0},About:{top:0,bottom:0},Skills:{top:0,bottom:0},Project:{top:0,bottom:0}}),j=Object(k.a)(b,2),d=j[0],l=j[1],u=Object(h.useState)(""),p=Object(k.a)(u,2),m=p[0],O=p[1],f=Object(h.useState)(!1),x=Object(k.a)(f,2),g=x[0],y=x[1];return Object(h.useEffect)((function(){c?O("isPc"):i&&O("isMobile")}),[i,c]),Object(h.useEffect)((function(){return window.addEventListener("scroll",(function(){return s(window.scrollY)})),function(){window.removeEventListener("scroll",(function(){return s}))}}),[]),Object(h.useEffect)((function(){window.addEventListener("resize",(function(){var e=document.querySelector("#Home"),n=document.querySelector("#About"),t=document.querySelector("#Skills"),c=document.querySelector("#Project"),i=d;i.Home={top:e.offsetTop,bottom:e.offsetTop+e.offsetHeight},i.About={top:n.offsetTop-56,bottom:n.offsetTop+n.offsetHeight},i.Skills={top:t.offsetTop-56,bottom:t.offsetTop+t.offsetHeight},i.Project={top:c.offsetTop-56,bottom:c.offsetTop+c.offsetHeight},l(i)}))}),[d]),Object(h.useEffect)((function(){var e=document.querySelector("#Home"),n=document.querySelector("#About"),t=document.querySelector("#Skills"),c=document.querySelector("#Project"),i=d;i.Home={top:e.offsetTop,bottom:e.offsetTop+e.offsetHeight},i.About={top:n.offsetTop-56,bottom:n.offsetTop+n.offsetHeight},i.Skills={top:t.offsetTop-56,bottom:t.offsetTop+t.offsetHeight},i.Project={top:c.offsetTop-56,bottom:c.offsetTop+c.offsetHeight},l(i)}),[d]),Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(B,{Home:d.Home,About:d.About,Skills:d.Skills,Project:d.Project,pos:a,mode:m,open:g,toggleHamburger:function(){y(!g)},sidebar:n,setSidebar:t})})},I=M.c.div(C||(C=Object(v.a)(["\n  background: #212529;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  font-size: 17px;\n"])));var W,G,J,U,R,Y,K,V,X,Z,$=function(){return Object(T.jsx)(I,{children:"\xa9 2023 Copyright Wooram & Minji"})},ee=t.p+"static/media/japan_01.90e7a902.jpg";var ne,te,ce,ie,oe,re,ae,se,be,je,de,le,ue,pe=M.c.div(W||(W=Object(v.a)(["\n  position: relative;\n  z-index: auto;\n"]))),me=M.c.div(G||(G=Object(v.a)(["\n  width: 100%;\n  height: 100vh;\n\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n\n  background-attachment: fixed;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n"])),ee),Oe=M.c.h1(J||(J=Object(v.a)(["\n  font-size: ",";\n  color: white;\n  text-align: ",";\n\n  ",";\n  ",";\n\n  ",";\n  ",";\n\n  display: inline-flex;\n  justify-content: ",";\n"])),(function(e){return"isPc"===e.mode?"48px":"36px"}),(function(e){return"rightBot"===e.pos?"right":""}),(function(e){return"isPc"===e.mode&&"leftTop"===e.pos?Object(M.b)(U||(U=Object(v.a)(["\n          margin: 205px 0 0 265px;\n        "]))):null}),(function(e){return"isPc"===e.mode&&"rightBot"===e.pos?Object(M.b)(R||(R=Object(v.a)(["\n          margin: 0 265px 150px 0;\n        "]))):null}),(function(e){return"isMobile"===e.mode&&"leftTop"===e.pos?Object(M.b)(Y||(Y=Object(v.a)(["\n          margin: 165px 0 0 2rem;\n        "]))):null}),(function(e){return"isMobile"===e.mode&&"rightBot"===e.pos?Object(M.b)(K||(K=Object(v.a)(["\n          margin: 0 2rem 110px 0;\n        "]))):null}),(function(e){return"rightBot"===e.pos?"end":""})),fe=M.c.h1(V||(V=Object(v.a)(["\n  font-size: ",";\n  white-space: pre-line;\n  text-align: center;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  margin: 0;\n\n  margin-top: 25px;\n\n  transition: opacity 0.5s ease-out;\n\n  ","\n"])),(function(e){return"isPc"===e.mode?"40px":"28px"}),(function(e){return"active"===e.stat?Object(M.b)(X||(X=Object(v.a)(["\n          display: inline-block;\n          opacity: 1;\n        "]))):Object(M.b)(Z||(Z=Object(v.a)(["\n          opacity: 0;\n        "])))})),xe=function(){var e=Object(h.useState)(""),n=Object(k.a)(e,2),t=n[0],c=n[1],i=Object(h.useState)(0),o=Object(k.a)(i,2),r=o[0],a=o[1],s=["\ud56d\uc0c1 \uc7ac\ubc0c\ub294","\ud589\ubcf5\ud55c","\ub54c\ub85c\ub294 \ud568\uaed8 \uc6b8\uc5b4\uc904 \uc218 \uc788\ub294","\uc5b8\uc81c\ub098 \ud568\uaed8\ud558\ub294","\uc774\uc820 \ubbf8\ub798\ub97c \uc57d\uc18d\ud558\ub294"],b=Object(L.useMediaQuery)({query:"(min-width:768px)"}),j=Object(L.useMediaQuery)({query:"(max-width:767px)"});return Object(h.useEffect)((function(){b?c("isPc"):j&&c("isMobile")}),[j,b]),Object(h.useEffect)((function(){var e=setInterval((function(){a((function(e){return(e+1)%s.length}))}),3e3);return function(){clearInterval(e)}}),[s.length]),Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(pe,{id:"Home",children:Object(T.jsxs)(me,{children:[Object(T.jsx)(Oe,{pos:"leftTop",mode:t,children:"1000\uc77c \ub3d9\uc548, \uadf8\ub9ac\uace0"}),"isPc"===t?s.map((function(e,n){return Object(T.jsxs)(fe,{stat:n===r?"active":"hide",mode:t,children:["'",e,"'"]})})):["\ud56d\uc0c1 \uc7ac\ubc0c\ub294","\ud589\ubcf5\ud55c","\ub54c\ub85c\ub294 \ud568\uaed8 \uc6b8\uc5b4\uc904 \uc218 \uc788\ub294","\uc5b8\uc81c\ub098 \ud568\uaed8\ud558\ub294","\uc774\uc820 \ubbf8\ub798\ub97c \uc57d\uc18d\ud558\ub294"].map((function(e,n){return Object(T.jsxs)(fe,{stat:n===r?"active":"hide",mode:t,children:["'",e,"'"]})})),Object(T.jsx)(Oe,{pos:"rightBot",mode:t,children:"\uc6b0\ub9ac\ub9cc\uc758 \ub7ec\ube0c\uc2a4\ud1a0\ub9ac"})]})})})},he=t(61),ge=t(62),ye=t(63),we=t.p+"static/media/japan_05.417f01c0.jpg";var ve,ke,Se,ze,Pe,Me,Te,qe=Object(M.c)(ye.a)(ne||(ne=Object(v.a)(["\n  padding-top: 90px;\n  margin-top: 30px;\n  padding-bottom: 70px;\n"]))),He=M.c.h1(te||(te=Object(v.a)(["\n  font-size: 45px;\n  ","\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(ce||(ce=Object(v.a)([""]))):Object(M.b)(ie||(ie=Object(v.a)(["\n          text-align: center;\n        "])))})),_e=M.c.img(oe||(oe=Object(v.a)(["\n  object-fit: cover;\n  border-radius: 50%;\n  ",";\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(re||(re=Object(v.a)(["\n          width: 500px;\n        "]))):Object(M.b)(ae||(ae=Object(v.a)(["\n          width: 350px;\n        "])))})),Ae=M.c.ul(se||(se=Object(v.a)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 20px;\n"]))),Ee=M.c.span(be||(be=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ne=M.c.div(je||(je=Object(v.a)(["\n  text-align: center;\n  align-self: center;\n"]))),Fe=M.c.p(de||(de=Object(v.a)(["\n  text-align: center;\n  font-size: 20px;\n"]))),Qe=(M.c.h1(le||(le=Object(v.a)(["\n  font-weight: bold;\n  color: #000080;\n  display: inline;\n  font-size: 45px;\n  text-decoration: underline;\n  text-decoration-color: #000080;\n"]))),M.c.a(ue||(ue=Object(v.a)(["\n  margin: 0;\n  font-size: 17px;\n  color: black;\n\n  &:hover {\n    color: black;\n  }\n"]))),function(){var e=Object(L.useMediaQuery)({query:"(min-width:768px)"}),n=Object(L.useMediaQuery)({query:"(max-width:767px)"}),t=Object(h.useState)(""),c=Object(k.a)(t,2),i=c[0],o=c[1];return Object(h.useEffect)((function(){e?o("isPc"):n&&o("isMobile")}),[n,e]),Object(T.jsxs)(qe,{id:"About",children:[Object(T.jsx)(he.a,{className:"mt-5 title",children:Object(T.jsx)(ge.a,{children:Object(T.jsx)(He,{"data-aos":"fade-right",mode:i,children:"About Us"})})}),Object(T.jsxs)(he.a,{className:"content mt-5",children:[Object(T.jsx)(Ne,{className:"col",children:Object(T.jsx)(_e,{src:we,mode:i})}),Object(T.jsxs)(ge.a,{children:[Object(T.jsx)("h2",{style:{fontWeight:"bold"},children:"\uc6b0\ub9ac \ucee4\ud50c\uc740\uc694"}),Object(T.jsx)("h4",{children:"\ub9cc\ub09c\uc9c0 1000\uc77c\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4 !"}),Object(T.jsx)(Ae,{children:Object(T.jsxs)("li",{className:"Birth",style:{display:"flex"},children:[Object(T.jsx)(Ee,{children:Object(T.jsx)(S.a,{size:"30"})}),Object(T.jsxs)("div",{style:{marginLeft:"24px"},children:[Object(T.jsx)("h5",{style:{margin:"0"},children:"\uc6b0\ub9ac\uac00 \ub9cc\ub09c \ub0a0 :"}),Object(T.jsx)("p",{style:{margin:"0",fontSize:"17px"},children:"2020.09.26"})]})]})})]})]}),Object(T.jsx)(he.a,{className:"mt-5 mb-5",children:Object(T.jsxs)(ge.a,{style:{textAlign:"center"},children:[Object(T.jsx)("h4",{style:{fontWeight:"bold",marginBottom:"1rem"}}),Object(T.jsxs)(Fe,{children:["\uc548\ub155 \ubbfc\uc9c0\uc57c? \uc6b0\ub9ac\uac00 \ub9cc\ub09c\uc9c0 \uc774\uc81c 1000\uc77c\uc9f8\uc57c",Object(T.jsx)("br",{}),"\uac00\ub054 \ud45c\ud604\uc774 \uc11c\ud22c\ub974\uace0 \ub9d0\ub3c4 \uc798 \ubabb\ud574\uc11c \ub2f5\ub2f5\ud55c \ub098\ub97c",Object(T.jsx)("br",{}),"\uc0ac\ub791\ud574\uc8fc\uace0 \uc544\uaef4\uc918\uc11c \uace0\ub9d9\uace0 \ubbf8\uc548\ud574",Object(T.jsx)("br",{}),"1000\uc77c\ub3d9\uc548 \ub098\ub97c \uacaa\uc73c\ub2c8 \uc774\uc81c\ub294 \uc880 \uc775\uc219\ud574\uc9c0\ub294 \ubaa8\uc2b5\uc5d0",Object(T.jsx)("br",{}),"\ub0b4\uac00 \ucc38 \ub2e4\ud589\uc774\ub77c \ub290\uaef4 \u314b\u314b",Object(T.jsx)("br",{}),"\uc55e\uc73c\ub85c \ub354 \uc798\ud574\ubcfc\uac8c ..",Object(T.jsx)("br",{}),"\uac70\ucc3d\ud55c \uc774\ubca4\ud2b8\ub791 \uc120\ubb3c\uc740 \uc900\ube44\ubabb\ud588\uc9c0\ub9cc,",Object(T.jsx)("br",{}),"\uc5ec\uae30 \uc6b0\ub9ac\ub9cc\uc758 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc55e\uc73c\ub85c \uc0dd\uae38 \ucd94\uc5b5\ub4e4 \ub9ce\uc774 \uc800\uc7a5\ud558\uc790",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),"- 1000\uc77c\uc744 \uae30\ub150\ud558\uba70 \ubbfc\uc9c0\ub97c \uc0ac\ub791\ud558\ub294 \uc6b0\ub78c\uc774\uac00",Object(T.jsx)("br",{})]})]})})]})});var Be=Object(M.c)(ye.a)(ve||(ve=Object(v.a)(["\n  padding-top: 90px;\n  margin-top: 30px;\n  padding-bottom: 70px;\n"]))),Le=M.c.h1(ke||(ke=Object(v.a)(["\n  font-size:45px;\n  ","\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(Se||(Se=Object(v.a)([""]))):Object(M.b)(ze||(ze=Object(v.a)(["text-align:center"])))})),Ce=M.c.div(Pe||(Pe=Object(v.a)(["\n  width: 86px;\n  height: auto;\n"]))),De=(M.c.h1(Me||(Me=Object(v.a)(["\n  color: #000080;\n  display: inline;\n  font-size: 45px;\n  text-decoration: underline;\n  text-decoration-color: #000080;\n  font-weight: bold;\n"]))),M.c.div(Te||(Te=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n"])))),Ie=function(e){var n=e.skills,t=Object(L.useMediaQuery)({query:"(min-width:768px)"}),c=Object(L.useMediaQuery)({query:"(max-width:767px)"}),i=Object(h.useState)(""),o=Object(k.a)(i,2),r=o[0],a=o[1];return Object(h.useEffect)((function(){t?a("isPc"):c&&a("isMobile")}),[c,t]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("hr",{}),Object(T.jsxs)(Be,{id:"Skills",children:[Object(T.jsx)(he.a,{className:"mt-5 title",children:Object(T.jsx)(ge.a,{children:Object(T.jsx)(Le,{"data-aos":"fade-right",mode:r,children:"Favorite"})})}),Object(T.jsx)(he.a,{className:"mt-5 mb-5",children:n.map((function(e,t){return Object(T.jsx)(ge.a,{md:2,sm:3,xs:4,children:Object(T.jsxs)(Ce,{children:[Object(T.jsx)("img",{src:n[t].icon,alt:n[t].name,width:"100%"}),Object(T.jsx)(De,{children:Object(T.jsx)("h5",{className:"mt-2",style:{textAlign:"center"},children:n[t].name})})]})},t)}))}),Object(T.jsx)("br",{}),Object(T.jsx)("h5",{children:"\uc6b0\ub9ac\uac00 \uc88b\uc544\ud558\ub294 \uac83\ub4e4!  \uc55e\uc73c\ub85c \uc5b4\ub5a4 \uac83\ub4e4\uc744 \ub354 \uac19\uc774 \uc88b\uc544\ud558\uac8c \ub420\uae4c?"})]})]})},We=t.p+"static/media/lol-icon.f5838284.png",Ge=t.p+"static/media/netflix-icon.9613962d.png",Je=t.p+"static/media/puppy-icon.05243cf0.png",Ue=t.p+"static/media/restaurant-icon.75ad7c0b.png",Re=t.p+"static/media/travel-icon.08eb947d.png",Ye=t.p+"static/media/camera-icon.f2c288c6.png";var Ke,Ve,Xe,Ze,$e,en,nn,tn,cn,on,rn,an,sn,bn,jn,dn,ln,un,pn,mn,On,fn,xn,hn,gn,yn,wn,vn,kn,Sn,zn,Pn,Mn=function(){var e=[{name:"\uac8c\uc784",icon:We},{name:"\ub137\ud50c\ub9ad\uc2a4",icon:Ge},{name:"\uac15\uc544\uc9c0",icon:Je},{name:"\ub9db\uc9d1",icon:Ue},{name:"\uc5ec\ud589",icon:Re},{name:"\uc0ac\uc9c4",icon:Ye}];return Object(T.jsx)(Ie,{skills:e})},Tn=t(18),qn=t(28),Hn=t.n(qn);t(54),t(55);var _n=Object(M.c)(ye.a)(Ke||(Ke=Object(v.a)(["\n  padding-top: 90px;\n  margin-top: 30px;\n"]))),An=M.c.h1(Ve||(Ve=Object(v.a)(["\n  font-size: 45px;\n  ","\n"])),(function(e){return"isPc"===e.screen?Object(M.b)(Xe||(Xe=Object(v.a)([""]))):Object(M.b)(Ze||(Ze=Object(v.a)(["\n          text-align: center;\n        "])))})),En=M.c.div($e||($e=Object(v.a)(["\n  text-align: center;\n  background: white;\n  border-radius: 1rem;\n\n  border: 1px solid #ced4da;\n"]))),Nn=M.c.div(en||(en=Object(v.a)(["\n  text-align: -webkit-center;\n"]))),Fn=M.c.div(nn||(nn=Object(v.a)([""]))),Qn=M.c.img(tn||(tn=Object(v.a)(["\n  ","\n"])),(function(e){return"app"===e.mode?Object(M.b)(cn||(cn=Object(v.a)(["\n          height: 500px;\n        "]))):Object(M.b)(on||(on=Object(v.a)(["\n          width: 100%;\n        "])))})),Bn=M.c.div(rn||(rn=Object(v.a)(["\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 2rem;\n  padding: 12px;\n"]))),Ln=M.c.h1(an||(an=Object(v.a)(["\n  ","\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(sn||(sn=Object(v.a)(["\n          font-size: 26px;\n          font-weight: bold;\n        "]))):Object(M.b)(bn||(bn=Object(v.a)(["\n          font-size: 20px;\n        "])))})),Cn=M.c.pre(jn||(jn=Object(v.a)(["\n  overflow: hidden;\n  ","\n  white-space: pre-wrap;\n  margin-bottom: 2.5rem;\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(dn||(dn=Object(v.a)(["\n          font-size: 20px;\n        "]))):Object(M.b)(ln||(ln=Object(v.a)(["\n          font-size: 15px;\n        "])))})),Dn=(M.c.div(un||(un=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2.5rem;\n\n  &::before {\n    ","\n    content:'Role :';\n    margin-right: 0.5rem;\n    font-weight: bold;\n  }\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(pn||(pn=Object(v.a)(["\n            font-size: 20px;\n          "]))):Object(M.b)(mn||(mn=Object(v.a)(["\n            font-size: 15px;\n          "])))})),M.c.p(On||(On=Object(v.a)(["\n  ","\n  background:#e9ecef;\n  border-radius: 0.5rem;\n  padding: 0 0.5rem 0 0.5rem;\n  white-space: nowrap;\n  display: inline-block;\n  margin-bottom: 0;\n\n  & + & {\n    margin-left: 1rem;\n  }\n\n  font-weight: bold;\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(fn||(fn=Object(v.a)(["\n          font-size: 20px;\n        "]))):Object(M.b)(xn||(xn=Object(v.a)(["\n          font-size: 15px;\n        "])))})),M.c.div(hn||(hn=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 2.5rem;\n  align-items: center;\n\n  &::before {\n    ","\n    content:'Tag :';\n    margin-right: 0.5rem;\n    font-weight: bold;\n  }\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(gn||(gn=Object(v.a)(["\n            font-size: 20px;\n          "]))):Object(M.b)(yn||(yn=Object(v.a)(["\n            font-size: 15px;\n          "])))}))),In=M.c.p(wn||(wn=Object(v.a)(["\n  ","\n  background:#e9ecef;\n  border-radius: 0.5rem;\n  padding: 0 0.5rem 0 0.5rem;\n  white-space: nowrap;\n  display: inline-block;\n  margin: 0.5rem;\n  font-weight: bold;\n"])),(function(e){return"isPc"===e.mode?Object(M.b)(vn||(vn=Object(v.a)(["\n          font-size: 20px;\n        "]))):Object(M.b)(kn||(kn=Object(v.a)(["\n          font-size: 15px;\n        "])))})),Wn=(M.c.h1(Sn||(Sn=Object(v.a)(["\n  font-weight: bold;\n  color: #000080;\n  display: inline;\n  font-size: 45px;\n  text-decoration: underline;\n  text-decoration-color: #000080;\n"]))),M.c.div(zn||(zn=Object(v.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),M.c.button(Pn||(Pn=Object(v.a)(["\n  color: black;\n  background: white;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  border-radius: 1rem;\n\n  &:active {\n    filter: brightness(80%);\n  }\n"]))),function(e){var n=e.projects,t=e.mode,c=Object(L.useMediaQuery)({query:"(min-width:768px)"}),i=Object(L.useMediaQuery)({query:"(max-width:767px)"}),o=Object(h.useState)(""),r=Object(k.a)(o,2),a=r[0],s=r[1];Object(h.useEffect)((function(){c?s("isPc"):i&&s("isMobile")}),[i,c]);var b={dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,arrows:!1};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("hr",{}),Object(T.jsxs)(_n,{id:"Project",children:[Object(T.jsx)(he.a,{className:"mt-5 title",children:Object(T.jsx)(ge.a,{children:Object(T.jsx)(An,{"data-aos":"fade-right",screen:a,children:"Love Diary"})})}),n.map((function(e,n){return Object(T.jsx)(he.a,{className:"mt-5 mb-5",children:Object(T.jsx)(ge.a,{children:Object(T.jsxs)(En,{mode:t,children:[Object(T.jsx)(Nn,{className:"mb-3 ",children:Object(T.jsx)(Hn.a,Object(Tn.a)(Object(Tn.a)({},b),{},{children:e.image.map((function(n,t){return Object(T.jsx)(Fn,{className:"mt-3",children:Object(T.jsx)(Qn,{src:n,mode:e.mode})},t)}))}))}),Object(T.jsxs)(Bn,{children:[Object(T.jsx)(Ln,{mode:t,children:e.name}),Object(T.jsx)(Cn,{mode:t,children:e.info}),Object(T.jsx)(Dn,{mode:t,children:e.tag.map((function(e,n){return Object(T.jsx)(In,{mode:t,children:e},n)}))})]})]})})},n)}))]})]})}),Gn=t.p+"static/media/jeju_01.18a26386.jpg",Jn=t.p+"static/media/jeju_02.52b19ade.jpg",Un=t.p+"static/media/jeju_03.d3d0e4e0.jpg",Rn=t.p+"static/media/jeju_04.7431d4b4.jpg",Yn=t.p+"static/media/jeju_05.4f7b3490.jpg",Kn=t.p+"static/media/jeju_06.6b670fef.jpg",Vn=t.p+"static/media/Gumi_01.7f62ac15.jpg",Xn=t.p+"static/media/Gumi_02.6ce12c4f.jpg",Zn=t.p+"static/media/cb_01.1e4756f1.jpg",$n=t.p+"static/media/cb_02.23456507.jpg",et=t.p+"static/media/japan_03.e790dbd5.jpg",nt=t.p+"static/media/japan_04.5aca977a.jpg",tt=t.p+"static/media/seoul_01.d3d417a4.jpg",ct=t.p+"static/media/seoul_02.44d9aaf3.jpg",it=t.p+"static/media/wedding_01.80d6fa13.jpg",ot=t.p+"static/media/wedding_02.c34b0982.jpg",rt=t.p+"static/media/wedding_03.4eb819fb.jpg",at=t.p+"static/media/wedding_04.acc80dec.jpg";var st,bt,jt,dt=function(){var e=[{id:1,name:"\uc81c\uc8fc\ub3c4 \uc5ec\ud589",info:"\uc6b0\ub9ac\uc758 \uccab\ubc88\uc9f8 \uc5ec\ud589!\n      \uc81c\uc8fc\ub3c4 \ubc24\ubc14\ub2e4 \ubcf4\uba74\uc11c \uc11c\ub85c \uaf2d \uc548\uc544\uc8fc\uc5c8\ub358 \uc18c\uc911\ud55c \ucd94\uc5b5\uc744 \ub9cc\ub4e4\uc5c8\uc5b4\n      \uc6b0\ub9ac\uac00 \uc88b\uc544\ud558\ub294 \ub9db\uc9d1\ub4e4\ub3c4 \ub9ce\uc774 \uac14\uc5c8\uace0\n      \ud2b9\ud788, \uc11d\uc591\uc774 \uc798 \ubcf4\uc774\ub294 \uce74\ud398\uc5d0\uc11c \ub108\ubb34 \ud589\ubcf5\ud588\uc5b4\n      \n      \ud0dc\ud48d\ucc98\ub7fc \ube44\ubc14\ub78c \ubd80\ub294\ub370 \ud3b8\uc758\uc810\uc5d0\uc11c \ub77c\uba74\uc744 \ucc38 \ub9db\uc788\uac8c\ub3c4 \uba39\uc5c8\uc9c0 \u314b\u314b",tag:["#\uccab\uc5ec\ud589","#\ub9db\uc9d1","#\uce74\ud398","#\uc11d\uc591","#\ud3b8\uc758\uc810"],image:[Gn,Jn,Un,Rn,Yn,Kn],mode:"web"},{id:2,name:"\uc11c\uc6b8, \uad6c\ubbf8\uc5d0\uc11c\uc758 \uc77c\uc0c1",info:"\ubc18\uc9c0\ud558 \ubc29\uc5d0\uc11c\ub3c4 \ud589\ubcf5\ud588\uc5c8\ub358 \uc6b0\ub9ac,\n      \uc774\uc81c\ub294 \ubc18\uc9c0\ud558\ub85c \ub4e4\uc5b4\uac00\uc9c0 \ub9d0\uc790~\n      \uc11c\uc6b8\uc5d0\uc11c \uc6b0\ub9ac \ucd98\ubc30\ub97c \ucc98\uc74c \ub9cc\ub0ac\uc5c8\uc9c0 \n      \ucc98\uc74c\uc5d4 \ucc38 \ubb34\uc11c\uc6e0\ub294\ub370, \uc774\uc820 \uc774\ub807\uac8c \uadc0\uc5ec\uc6b8 \uc904\uc774\uc57c\n      \uc0c8\ub85c \uc774\uc0ac\uc628 \uad6c\ubbf8\uc758 \ube4c\ub77c\ub294 \uc6b0\ub9ac\uc5d0\uac90 \ucd95\ubcf5\uc774\uc5c8\uc5b4",tag:["#\uc11c\uc6b8","#\ubc18\uc9c0\ud558","#\ucd98\ubc30\uc640\uc758 \uccab\ub9cc\ub0a8"],image:[tt,ct,Zn,$n,Vn,Xn],mode:"web"},{id:3,name:"\uc77c\ubcf8 \ud6c4\ucfe0\uc624\uce74 \uc5ec\ud589",info:"\uc6b0\ub9ac\uc758 \uccab \ud574\uc678\uc5ec\ud589!\n      \uc5ec\ub7ec \ub9db\uc9d1\ub4e4\ub3c4 \ub2e4\ub2c8\uace0, \uc720\ub9ac\uacf5 \ub3cc\ub9ac\ub294 \uacf5\uc5f0\ub3c4 \ubcf4\uace0\n      \uc81c\uc77c \uae30\uc5b5\uc5d0 \ub0a8\uc558\ub358\uac74 \ub9c8\uc9c0\ub9c9\ub0a0 \ubc24\uc5d0 \uc989\ud765\uc73c\ub85c \uac14\ub358 \uc774\uc790\uce74\uc57c!\n      \uc6b0\ub9ac\ub294 \uc5ed\uc2dc \uc989\ud765\uc5ec\ud589\uc744 \ud574\uc57c\ud574 \u314b\u314b \n      \ud638\ud154 \uc548\uc5d0 \uc628\ucc9c\ub3c4 \ub108\ubb34 \uc88b\uc558\uc5b4 \uadf8\uce58?",tag:["#\ud6c4\ucfe0\uc624\uce74","#\uc0ac\uc2e4\uc0c1 \uc628\ucc9c\uc5ec\ud589","#\uc2a4\uc2dc","#\uc18c\uace0\uae30","#\uc774\uc790\uce74\uc57c","#\ub2e4\ub9ac\uac1c\uc544\ud514"],image:[ee,et,nt,we],mode:"app"},{id:4,name:"\uc6e8\ub529\ucd2c\uc601",info:"\ub300\ub9dd\uc758 \uc6e8\ub529\ucd2c\uc601!\n      \ud639\uc5ec\ub098 \ub2a6\uc744\uae4c\ubd10, \ub2ec\ub824\uc11c \uc654\ub4dc\ub9cc \ub2a6\ub294\ub2e4\uace0 \uc804\ud654\uc628 \uc2e4\uc7a5\ub2d8\u314b\u314b\n      \uadf8\ub798\uc11c \ubbf8\ub9ac \uc544\uce68\uc5d0 \uce74\ud398\uc5d0\uc11c \ucee4\ud53c\uc0ac\uc11c \uc2a4\ud29c\ub514\uc624 \uc785\uc7a5\n      \uc6e8\ub529 \ub4dc\ub808\uc2a4 \uc785\uc740 \ubbfc\uc9c0\uac00 \ub118 \uc608\ubee4\ub358 \ud558\ub8e8\n      \uc9c4\uc9dc \ub108\ubb34 \ud798\ub4e4\uc5c8\uc9c0\ub9cc \uacb0\uacfc\uac00 \uc88b\uc544\uc11c \ub2e4\ud589\uc774\uc57c \n      \ucd2c\uc601\uae4c\uc9c0 \ud558\ub2c8 \ub4dc\ub514\uc5b4 \uc2e4\uac10\uc774 \uc880 \ub09c\ub2e4\uace0 \ub9d0\ud558\ub358 \ubbfc\uc9c0\n      \uc55e\uc73c\ub85c \uc798 \uc0b4\uc790 !!\u314e\u314e ",tag:["#\ubc30\uace0\ud30c","#\uc785\uaf2c\ub9ac\uc544\ud30c","#\ubbfc\uc9c0\ub2e4\ub9ac\uc544\ud30c","#\uc2e0\ubd80\uac00\uc544\uae5d\uae34\ud558\ub124","#\uc625\uc0c1\ucd2c\uc601\uac1c\uc624\ubc14"],image:[it,ot,rt,at],mode:"app"}],n=Object(h.useState)(""),t=Object(k.a)(n,2),c=t[0],i=t[1],o=Object(L.useMediaQuery)({query:"(min-width:768px)"}),r=Object(L.useMediaQuery)({query:"(max-width:767px)"});return Object(h.useEffect)((function(){o?i("isPc"):r&&i("isMobile")}),[r,o]),Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(Wn,{projects:e,mode:c})})},lt=(t(56),t(16)),ut=t.n(lt);t(57);var pt=Object(M.a)(st||(st=Object(v.a)(["\n\nbody{\n  font-family: 'NanumSquare'\n}\npre{\n  font-family: 'NanumSquare'\n}\n\nhtml{\n  scroll-behavior: smooth;\n  ","\n}\n\nbody{\n  -ms-overflow-style: none; \n  background: #e9ecef;\n  ","\n}\n\nbody::-webkit-scrollbar{\n  display:none;\n}\n"])),(function(e){return e.sidebar&&Object(M.b)(bt||(bt=Object(v.a)(["\n      overflow-y: hidden;\n    "])))}),(function(e){return e.sidebar&&Object(M.b)(jt||(jt=Object(v.a)(["\n      overflow-y: hidden;\n    "])))})),mt=function(){var e=Object(h.useState)(!1),n=Object(k.a)(e,2),t=n[0],c=n[1];return Object(h.useEffect)((function(){ut.a.init({duration:1e3}),ut.a.refresh()}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(pt,{sidebar:t}),Object(T.jsx)(D,{sidebar:t,setSidebar:c}),Object(T.jsx)(xe,{id:"Home"}),Object(T.jsx)(Qe,{id:"About"}),Object(T.jsx)(Mn,{id:"Skills"}),Object(T.jsx)(dt,{id:"Project"}),Object(T.jsx)($,{})]})},Ot=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),o(e),r(e)}))};w.a.render(Object(T.jsx)(g.a.StrictMode,{children:Object(T.jsx)(mt,{})}),document.getElementById("root")),Ot()}},[[58,1,2]]]);
//# sourceMappingURL=main.c4bd3201.chunk.js.map