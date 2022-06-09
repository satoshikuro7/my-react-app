(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(14),a(1));a(15);function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mb-2 mb-lg-0 "},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"})),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control mx-1",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Search"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label me-5",htmlFor:"flexSwitchCheckDefault"},"Blue Mode")))))}function m(e){var t=Object(n.useState)("Enter Text here"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h2",{className:"my-2  mt-5",style:{color:"dark"===e.mode?"white":"black"}},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{style:{backgroundColor:"light"===e.mode?"white":"rgb(19 21 46 / 25%)",color:"dark"===e.mode?"white":"black"},className:"form-control",value:r,onChange:function(e){console.log("On change"),c(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary upperCase mx-1",onClick:function(){console.log("Uppercase was clicked");var t=r.toUpperCase();c(t),e.showAlert("Converted to Upper-Case","success")}},"Captial"),l.a.createElement("button",{className:"btn btn-primary lowerCase mx-1",onClick:function(){console.log("Lowercase was clicked");var t=r.toLowerCase();c(t),e.showAlert("Converted to Lower-Case","success")}},"Small"),l.a.createElement("button",{className:"btn btn-primary lowerCase mx-1",onClick:function(){console.log("Text has been removed");c(""),e.showAlert("Text has been removed","danger")}},"Remove"),l.a.createElement("button",{className:"btn btn-primary lowerCase mx-1 bg-primary",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=r,window.speechSynthesis.speak(e)},type:"submit"},"Speak"),l.a.createElement("button",{className:"btn btn-primary lowerCase mx-1",onClick:function(){var e=r.split(" ");e.forEach(function(e){e=e.charAt(0).toUpperCase()+e.slice(1)});var t=e.join(" ");c(t)},type:"submit"},"First Letter Capital"),l.a.createElement("button",{className:"btn btn-primary lowerCase mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is Copied","success")},type:"submit"},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary lowerCase mx-1",onClick:function(){var e=r.split(/[ ]+/);c(e.join(" "))},type:"submit"},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",toggleMode:e.toggleMode,style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,"Your text Summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes Read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Please Enter something above to see the Preview")))}var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),b=u[0],d=u[1],p=function(e,t){d({msg:e,type:t})};return setTimeout(function(){d(null)},5e3),l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#13224a",p("Dark Mode has been Enabled","success"),document.title="TextUtils - Dark Mode"):(r("light"),document.body.style.backgroundColor="white",p("Light Mode has been Enabled","success"),document.title="TextUtitls - Light Mode")},about:"About"}),l.a.createElement(i,{alert:b}),l.a.createElement("div",{className:"container mt-4"},l.a.createElement(m,{heading:"Enter the Text to analyze",mode:a,showAlert:p})))},b=a(4),d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b.a,null,l.a.createElement(u,null)))),d()},5:function(e,t,a){e.exports=a(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.5cd58857.chunk.js.map