(window["webpackJsonptodo-app"]=window["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(7),o=a.n(l),c=function(){return n.a.createElement("div",{className:"trello-navbar"},n.a.createElement("div",null,n.a.createElement("div",{className:"btn btn-square btn-primary rounded-lg"},n.a.createElement("i",{className:"fa fa-home"})),n.a.createElement("div",{className:"btn btn-narrow btn-primary rounded-lg"},n.a.createElement("i",{className:"mr-1 fa fa-notes-medical"}),"boards"),n.a.createElement("div",{className:"d-i-b rounded-lg"},n.a.createElement("input",{type:"text",className:"m-0 bg-primary border-0 rounded-lg",id:"search-input"}))),n.a.createElement("div",{className:"mr-5"},n.a.createElement("div",{className:"text-white text-bold cursor-p"},"trello clone")),n.a.createElement("div",null,n.a.createElement("div",{className:"btn btn-square btn-primary rounded-lg"},n.a.createElement("i",{className:"fa fa-plus"}))))},i=a(2),s=Object(r.createContext)(),d=Object(r.createContext)(),u=function(e){var t=e.title,a=e.setTitle,l=Object(r.useState)(""),o=Object(i.a)(l,2),c=o[0],s=o[1],d=Object(r.useState)(!1),u=Object(i.a)(d,2),b=u[0],m=u[1],p=function(){""!==c?(a(c,1),m(!1)):m(!1),console.log("id must be setted ( from user State )")};return n.a.createElement("div",{className:"d-i-b"},n.a.createElement("div",{className:"btn btn-primary btn-narrow m-0 ".concat(b&&"d-n"),onClick:function(){m(!0),s(t),console.log("text filed must be filled with title")}},t),n.a.createElement("input",{type:"text",className:"m-0 rounded ".concat(!b&&"d-n"),onChange:function(e){s(e.target.value)},onBlur:p,onKeyUp:function(e){13===e.keyCode&&p()}}))},b=function(e){var t=e.board,a=e.setStar,l=e.setDescription,o=e.setTitle,c=Object(r.useState)(""),s=Object(i.a)(c,2),d=s[0],b=s[1],m=Object(r.useState)(!1),p=Object(i.a)(m,2),f=p[0],v=p[1],y=function(){l(d,t.id),v(!1)};return n.a.createElement("div",{className:"trello-board-navbar trello-navbar lighten-20"},n.a.createElement("div",{className:"card border-0 m-0 p-0"},t&&n.a.createElement(u,{title:t.title,setTitle:o}),n.a.createElement("div",{className:"btn btn-primary btn-square rounded-lg lighten-20 ml-1",onClick:function(){a(t.id)}},n.a.createElement("i",{className:"fa-star ".concat(t&&t.starred?"fas text-warning":"far")})),n.a.createElement("div",{className:"ml-1 d-i-b text-white"},t&&!f&&(t.description?t.description:"no description"),n.a.createElement("input",{type:"text",id:"description-input",className:"m-0 rounded ".concat(!f&&"d-n"),value:d,onChange:function(e){e.target.value.length<51&&b(e.target.value),console.log("set alert for maximum length")},onBlur:y,onKeyUp:function(e){13===e.keyCode&&y()}})),n.a.createElement("div",{className:"btn btn-primary btn-square rounded-lg lighten-20 ml-1",onClick:function(){v(!0),b(t.description),document.querySelector("#description-input").focus()}},n.a.createElement("i",{className:"fas fa-pen"}))))},m=function(e){var t=e.item;return n.a.createElement("div",{className:"trello-board-list-item"},t.text)},p=function(e){var t=e.list,a=e.boardFuncs,l=Object(r.useState)(!1),o=Object(i.a)(l,2),c=o[0],s=o[1],d=Object(r.useState)(""),u=Object(i.a)(d,2),b=u[0],p=u[1],f=function(){""!==b?(a.addCard(b,t.id,1),p("")):s(!1),console.log("get third id from user state")};return n.a.createElement("div",{className:"trello-board-list"},n.a.createElement("div",{className:"trello-board-list-header"},t.title),n.a.createElement("div",{className:"trello-board-list-items"},t.items.map(function(e,t){return n.a.createElement(m,{key:e.id,item:e})}),n.a.createElement("div",{className:"trello-board-list-item trello-board-card-compose  ".concat(!c&&"d-n")},n.a.createElement("textarea",{className:"trello-board-card-compose-textarea",id:"card-compose-textarea",placeholder:"Enter a title for this card",onBlur:f,onKeyUp:function(e){13===e.keyCode&&f()},onChange:function(e){p(e.target.value)},value:b}))),n.a.createElement("div",{className:"trello-board-add-card",onClick:function(){s(!0),setTimeout(function(){document.querySelector("#card-compose-textarea").focus()},100)}},c?"adding panel and stuff":0===t.items.length?"+ Add a card":"+ Add another card"))},f=function(e){var t=e.board,a=e.boardFuncs;return n.a.createElement("div",{className:"trello-board-main"},t&&t.lists.map(function(e){return n.a.createElement("div",{key:e.id,className:"trello-board-list-wrapper"},n.a.createElement(p,{list:e,boardFuncs:a}))}),n.a.createElement("div",{className:"trello-board-list"},n.a.createElement("div",{className:"trello-board-add-list"},t&&0===t.lists.length?"+ Add a list":"+ Add another list")))},v=(a(13),function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(r.useContext)(s),c=Object(r.useContext)(d),u=(o.currentBoardId,c.getBoard),m=c.setStar,p=c.setDescription,v=c.setTitle;return Object(r.useEffect)(function(){l(u(1)[0])},[]),n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"trello-board-row trello-board-row-1"},n.a.createElement(b,{board:a,setStar:m,setDescription:p,setTitle:v})),n.a.createElement("div",{className:"trello-board-main-wrapper bg-primary lighten-20 p"},n.a.createElement(f,{boardFuncs:c,board:a})))}),y=(a(14),function(){return n.a.createElement(r.Fragment,null,n.a.createElement(c,null),n.a.createElement(v,null))}),E=a(1),O=a.n(E),g=a(3);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var x=function(e,t){switch(t.type){case"SET_TITLE":return h({},e,{baords:e.boards.map(function(e){return e.id===t.payload.id&&(e.title=t.payload.text),e})});case"SET_STAR":return h({},e,{boards:e.boards.map(function(e){return e.id===t.payload&&(e.starred=!e.starred),e})});case"SET_DESCRIPTION":return h({},e,{boards:e.boards.map(function(e){return e.id===t.payload.id&&(e.description=t.payload.text),e})});case"ADD_CARD":return h({},e,{boards:e.boards.map(function(e){return e.id===t.payload.boardId&&(e.lists=e.lists.map(function(e){return e.id===t.payload.listId&&e.items.push(t.payload.newCard),e})),e})});default:return e}},w=function(e){var t={boards:[{title:"my nice board",id:1,color:"#e27b47",starred:!1,description:"board description goes here",lists:[{title:"todos",id:O.a.v4(),items:[{text:"todo 1",id:O.a.v4(),labels:["label 1","label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]},{text:"todo 2",id:O.a.v4(),labels:["label 2"]}]},{title:"doing",id:O.a.v4(),items:[{text:"doing 1",id:O.a.v4(),labels:["label 3","label 2"]},{text:"doing 2",id:O.a.v4(),labels:["label 3","label 4"]},{text:"doing 3",id:O.a.v4(),labels:["label 4","label 2"]}]},{title:"new list",id:O.a.v4(),items:[]},{title:"test for long",id:O.a.v4(),items:[]},{title:"test for long",id:O.a.v4(),items:[]},{title:"test for long",id:O.a.v4(),items:[]}]},{title:"test empty",id:2,color:"#ccc",lists:[]}]},a=Object(r.useReducer)(x,t),l=Object(i.a)(a,2),o=l[0],c=l[1];return n.a.createElement(d.Provider,{value:{boards:o.boards,getBoardsNames:function(){return o.boards.map(function(e){return e.title})},getBoard:function(e){return o.boards.filter(function(t){return t.id===e})},setTitle:function(e,t){c({type:"SET_TITLE",payload:{id:t,text:e}})},setStar:function(e){c({type:"SET_STAR",payload:e})},setDescription:function(e,t){c({type:"SET_DESCRIPTION",payload:{id:t,text:e}})},addCard:function(e,t,a){var r={text:e,id:O.a.v4(),labels:[]};c({type:"ADD_CARD",payload:{newCard:r,listId:t,boardId:a}})}}},e.children)},N=Object(r.createContext)();function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var T=function(e,t){switch(t.type){case"TEST":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{test:t.payload});default:return e}},D=function(e){var t=Object(r.useReducer)(T,{test:"test"}),a=Object(i.a)(t,2),l=a[0],o=a[1];return n.a.createElement(N.Provider,{value:{test:l.test,getData:function(){o({type:"TEST",payload:"new test"})}}},e.children)};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach(function(t){Object(g.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I=function(e,t){switch(t.type){case"TEST":return C({},e,{test:t.payload});case"SET_CURRENT_BOARD_ID":return C({},e,{currentBoardId:t.payload});default:return e}},B=function(e){var t=Object(r.useReducer)(I,{currentBoardId:null}),a=Object(i.a)(t,2),l=a[0],o=a[1];return n.a.createElement(s.Provider,{value:{currentBoardId:l.currentBoardId,setCurrentBoardId:function(e){o({type:"SET_CURRENT_BOARD_ID",payload:e})}}},e.children)};o.a.render(n.a.createElement(function(){return n.a.createElement(w,null,n.a.createElement(D,null,n.a.createElement(B,null,n.a.createElement(y,null))))},null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.75529684.chunk.js.map