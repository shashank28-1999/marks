(this.webpackJsonpmarks=this.webpackJsonpmarks||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(1),c=s.n(n),r=s(3),i=s.n(r),u=(s(13),s(4)),l=s(5),o=s(7),j=s(6),b=(s(14),function(t){Object(o.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(u.a)(this,s),(a=e.call(this,t)).calculate=function(t){var e=15*a.state.ass/100+15*a.state.mtt/64+70*a.state.mpt/70;e<50?a.setState({score:"0",status:"Fail"}):e>49&&e<60?a.setState({score:"1",status:"Fail"}):e>59&&e<70?a.setState({score:"2",status:"Pass"}):e>69&&e<80?a.setState({score:"3",status:"Pass"}):e>79&&e<90?a.setState({score:"4",status:"Pass"}):a.setState({score:"5",status:"Pass"}),t.preventDefault()},a.state={ass:0,mtt:0,mpt:0,status:"",score:""},a}return Object(l.a)(s,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Enter Your Marks"}),Object(a.jsxs)("form",{onSubmit:this.calculate,className:"ui form",class:"center",children:[Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("lable",{children:"Enter Assignment Marks : "}),Object(a.jsx)("input",{type:"number",placeholder:"Assignment marks",min:"0",max:"100",onChange:function(e){t.setState({ass:e.target.value})}}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("lable",{children:"Enter MTT Marks : "}),Object(a.jsx)("input",{type:"number",placeholder:"MTT Marks",min:"0",max:"64",onChange:function(e){t.setState({mtt:e.target.value})}}),Object(a.jsx)("br",{})]}),Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("lable",{children:"Enter MPT Marks : "}),Object(a.jsx)("input",{type:"number",placeholder:"MPT Marks",min:"0",max:"70",onChange:function(e){t.setState({mpt:e.target.value})}}),Object(a.jsx)("br",{})]}),Object(a.jsx)("button",{className:"ui button",type:"submit",children:"submit"})]}),Object(a.jsxs)("h2",{children:["Your Score : ",this.state.score]}),Object(a.jsxs)("h2",{children:["Your Status : ",this.state.status]})]})}}]),s}(c.a.Component)),h=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,r=e.getTTFB;s(t),a(t),n(t),c(t),r(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.932eb91e.chunk.js.map