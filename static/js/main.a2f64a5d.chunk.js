(window["webpackJsonptodo-app"]=window["webpackJsonptodo-app"]||[]).push([[0],[,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a(20)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=Object(n.createContext)(),s=Object(n.createContext)(),i=function(){var e=Object(n.useContext)(c),t=Object(n.useContext)(s),a=e.clearCurrentBoardId,o=e.currentBoardId,l=e.setModal,i=t.getBoard,d={background:i(o)&&i(o).color},u={color:i(o)?i(o).color:"#388d6a"};return r.a.createElement("div",{className:"trello-navbar",style:d},r.a.createElement("div",null,r.a.createElement("div",{className:"btn btn-square btn-transparent rounded",onClick:function(){a()}},r.a.createElement("i",{className:"fa fa-home"})),r.a.createElement("div",{className:"btn btn-narrow btn-transparent rounded"},r.a.createElement("i",{className:"mr-1 fa fa-notes-medical"}),"boards"),r.a.createElement("div",{className:"d-i-b rounded"},r.a.createElement("input",{type:"text",className:"m-0 bg-light op-8 border-0 rounded",id:"search-input"}))),r.a.createElement("div",{className:"mr-5"},r.a.createElement("div",{className:"text-white text-bold cursor-p border border-white border-bottom-0"},r.a.createElement("div",{className:"mr"},"trello"),r.a.createElement("div",{className:"bg-white d-i-b border-0 pl",style:u},"clone"))),r.a.createElement("div",null,r.a.createElement("div",{className:"btn btn-square btn-transparent rounded",onClick:function(){l("on","addBoardModal")}},r.a.createElement("i",{className:"fa fa-plus"}))))},d=a(2),u=function(e){var t=e.board,a=Object(n.useContext)(c).setCurrentBoardId,o=Object(n.useState)(!1),l=Object(d.a)(o,2),s=l[0],i=l[1],u=s?{background:t.color,color:"#f4f4f4",opacity:"0.7"}:{opacity:"1"};return r.a.createElement("div",{onMouseEnter:function(){i(!0)},onMouseLeave:function(){i(!1)},onClick:function(){a(t.id)},className:"card pl-1 cursor-p p border-0 rounded-lg text-dark transition text-bold",style:u},t.title.charAt(0).toUpperCase()+t.title.slice(1),r.a.createElement("i",{className:"fa fa-check m-0 float-right"}))},m=function(){var e=Object(n.useContext)(s).boards;return r.a.createElement("aside",null,r.a.createElement("button",{className:"btn btn-block btn-primary text-left rounded-lg"},r.a.createElement("i",{className:"fa fa-notes-medical mr-1"}),r.a.createElement("div",{className:"text-bold d-i-b"},"Boards")),e.map(function(e){return r.a.createElement(u,{key:e.id,board:e})}))},b=a(1),f=a.n(b),p=Object(n.createContext)(),E=function(e){var t=e.board,a=Object(n.useContext)(c),o=Object(n.useContext)(s),l=Object(n.useContext)(p),i=a.setCurrentBoardId,d=o.setStar,u=l.setAlert,m={background:t.color};return r.a.createElement("div",{className:"trello-home-main-item mt-1 mr-1",style:m,onClick:function(e){e.target.classList.contains("fa-star")||i(t.id)}},r.a.createElement("div",{className:"text-white func-title"},t.title.charAt(0).toUpperCase()+t.title.slice(1)),r.a.createElement("div",{className:"trello-home-main-item-star",onClick:function(){d(t.id),u("".concat(t.starred?"board added to favorites":"board removed from favorites"),"".concat(t.starred?"success":"dark"),2500)}},r.a.createElement("i",{className:"fa-star ".concat(t.starred?"fas text-warning":"far")})))},v=function(){var e=Object(n.useContext)(s),t=Object(n.useContext)(c),a=e.getRecentBoards,o=t.recentIds;return r.a.createElement(n.Fragment,null,0!==a(o).length&&r.a.createElement("div",{className:"card border-top-0 border-right-0 border-left-0 pb-2"},r.a.createElement("i",{className:"fa fa-clock mr-1"}),"Recent borads",r.a.createElement("div",{className:""},a(o).map(function(e){return r.a.createElement(E,{key:f.a.v4(),board:e})}))))},g=function(){var e=Object(n.useContext)(s).getStarredBoards;return r.a.createElement(n.Fragment,null,0!==e().length&&r.a.createElement("div",{className:"card border-top-0 border-right-0 border-left-0 pb-2"},r.a.createElement("i",{className:"fa fa-star mr-1"}),"favorite borads",r.a.createElement("div",{className:""},e().map(function(e){return r.a.createElement(E,{key:e.id,board:e})}))))},O=function(){var e=Object(n.useContext)(c).setModal;return r.a.createElement("main",{className:"text-bold"},r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement("div",{className:"card border-0"},r.a.createElement("div",{className:"trello-home-main-item hover",onClick:function(){e("on","addBoardModal")}},"Add Board")))},y=function(){return r.a.createElement("div",{className:"container grid-1-3 mt-3"},r.a.createElement(m,null),r.a.createElement(O,null))},C=function(e){var t=e.boardId,a=e.title,o=e.setTitle,l=Object(n.useContext)(c),s=Object(n.useContext)(p),i=l.currentBoardId,u=s.setAlert,m=Object(n.useState)(""),b=Object(d.a)(m,2),f=b[0],E=b[1],v=Object(n.useState)(!1),g=Object(d.a)(v,2),O=g[0],y=g[1],C=Object(n.useState)(!1),h=Object(d.a)(C,2),j=h[0],N=h[1];Object(n.useEffect)(function(){E(a),document.querySelector("#board-title-".concat(t)).focus()},[O]);var S=function(){j?""!==f?(o(f,i),u("board title changed","success"),y(!1)):(y(!1),u("board title can not be empty","danger")):(y(!1),N(!1))};return r.a.createElement("div",{className:"d-i-b"},r.a.createElement("div",{className:"text-white m-0 ml-1 ".concat(O&&"d-n"),onClick:function(){y(!0)}},a.charAt(0).toUpperCase()+a.slice(1)),r.a.createElement("input",{type:"text",id:"board-title-".concat(t),className:"m-0 rounded ".concat(!O&&"d-n"),onChange:function(e){E(e.target.value),N(!0)},onBlur:function(){S()},value:f,onKeyUp:function(e){13===e.keyCode&&S()}}))},h=function(e){var t=e.board,a=e.setStar,o=e.setDescribtion,l=e.setTitle,c=Object(n.useContext)(p).setAlert,s=Object(n.useState)(""),i=Object(d.a)(s,2),u=i[0],m=i[1],b=Object(n.useState)(!1),f=Object(d.a)(b,2),E=f[0],v=f[1],g=function(){o(u,t.id),c("board describtion changed successfully","success"),v(!1)},O={background:t&&t.color};return r.a.createElement("div",{className:"trello-board-navbar trello-navbar lighten-20",style:O},r.a.createElement("div",{className:"card border-0 m-0 p-0"},t&&r.a.createElement(C,{boardId:t.id,title:t.title,setTitle:l}),r.a.createElement("div",{className:"btn btn-transparent btn-square rounded ml-1",onClick:function(){a(t.id),c("".concat(t.starred?"board added to favorites":"board removed from favorites"),"".concat(t.starred?"success":"dark"),2e3)}},r.a.createElement("i",{className:"fa-star ".concat(t&&t.starred?"fas text-warning":"far")})),r.a.createElement("div",{className:"ml-1 d-i-b text-white"},t&&!E&&(t.describtion?t.describtion:"no describtion"),r.a.createElement("input",{type:"text",id:"describtion-input",className:"m-0 rounded ".concat(!E&&"d-n"),value:u,onChange:function(e){e.target.value.length<51?m(e.target.value):c("describtion can not be longer than 50 chars!!!","warning",4e3)},onBlur:g,onKeyUp:function(e){13===e.keyCode&&g()}})),r.a.createElement("div",{className:"btn btn-transparent btn-square rounded ml-1",onClick:function(){v(!0),m(t.describtion),document.querySelector("#describtion-input").focus()}},r.a.createElement("i",{className:"fas fa-pen"}))),r.a.createElement("div",{className:"btn text-sm btn-narrow btn-transparent"},r.a.createElement("i",{className:"fas fa-ellipsis-h mr"}),"Show Menu"))},j=function(e){var t=e.listId,a=e.title,o=e.setListTitle,l=Object(n.useContext)(c),s=Object(n.useContext)(p),i=l.currentBoardId,u=l.currentListId,m=s.setAlert,b=Object(n.useState)(""),f=Object(d.a)(b,2),E=f[0],v=f[1],g=Object(n.useState)(!1),O=Object(d.a)(g,2),y=O[0],C=O[1],h=Object(n.useState)(!1),j=Object(d.a)(h,2),N=j[0],S=j[1];Object(n.useEffect)(function(){v(a),document.querySelector("#list-title-".concat(t)).focus()},[y]);var T=function(){N?""!==E?(o(i,u,E),m("list title changed","success"),C(!1)):(C(!1),m("list title can not be empty","warning")):(C(!1),S(!1))};return r.a.createElement("div",{className:"d-i-b m-0"},r.a.createElement("div",{className:"pt-1 mb pl m-0 ".concat(y&&"d-n"),onClick:function(){C(!0)}},a),r.a.createElement("input",{type:"text",id:"list-title-".concat(t),value:E,className:"m-0 mt p-0 pt pb pl text-bold text-80 border-0 rounded ".concat(!y&&"d-n"),onChange:function(e){v(e.target.value),S(!0)},onBlur:function(){T()},onKeyUp:function(e){13===e.keyCode&&T()}}))},N=function(e){var t,a=e.item,o=Object(n.useContext)(c),l=o.setCurrentCard,s=o.setModal,i=o.setFastEditModalPos,d=function(e){i({top:e.target.parentElement.getBoundingClientRect().top,left:e.target.parentElement.getBoundingClientRect().left,width:e.target.parentElement.getBoundingClientRect().width}),s("on","fastEditModal")};return r.a.createElement("div",{className:"trello-board-list-item",onClick:function(e){e.target.classList.contains("func-e-btn")||e.target.parentElement.classList.contains("func-e-btn")||s("on","detailsModal"),l(a)},onTouchStart:function(){t=setTimeout(d,500)},onTouchEnd:function(){t&&clearTimeout(t)}},r.a.createElement("div",null,a.text,r.a.createElement("div",{className:"text-sm"},a.desc&&a.desc)),r.a.createElement("div",{className:"func-e-btn trello-board-list-item-edit-btn mobile-d-n",onClick:function(e){console.log("use useRef here for setFastEditModalPos"),e.target.classList.contains("func-e-btn")?i({top:e.target.parentElement.getBoundingClientRect().top,left:e.target.parentElement.getBoundingClientRect().left,width:e.target.parentElement.getBoundingClientRect().width}):i({top:e.target.parentElement.parentElement.getBoundingClientRect().top,left:e.target.parentElement.parentElement.getBoundingClientRect().left,width:e.target.parentElement.parentElement.getBoundingClientRect().width}),s("on","fastEditModal")}},r.a.createElement("i",{className:"fas fa-pen"})))},S=function(e){var t=e.list,a=e.boardFuncs,o=Object(n.useContext)(c),l=Object(n.useContext)(p),s=o.setCurrentListId,i=o.currentBoardId,u=o.setOptionsModal,m=l.setAlert,b=Object(n.useState)(!1),f=Object(d.a)(b,2),E=f[0],v=f[1],g=Object(n.useState)(""),O=Object(d.a)(g,2),y=O[0],C=O[1],h=function(){""!==y&&(a.addCard(y,t.id,i),m("card added","success"),C(""))},S=function(){v(!1),C("")};return r.a.createElement("div",{className:"trello-board-list",onClick:function(){s(t.id)}},r.a.createElement("div",{className:"trello-board-list-header"},r.a.createElement(j,{listId:t.id,title:t.title,setListTitle:a.setListTitle}),r.a.createElement("div",{className:"btn bg-transparent-with-hover btn-square float-right mt",onClick:function(){u("on","listActions")}},r.a.createElement("i",{className:"fas fa-ellipsis-h"}))),r.a.createElement("div",{className:"trello-board-list-items"},t.items.map(function(e,t){return r.a.createElement(N,{key:e.id,item:e})}),r.a.createElement("div",{className:"trello-board-list-item trello-board-card-compose  ".concat(!E&&"d-n")},r.a.createElement("textarea",{className:"trello-board-card-compose-textarea",autoFocus:!0,placeholder:"Enter a title for this card",onBlur:function(){""!==y?h():S()},onKeyUp:function(e){13===e.keyCode&&y.length>1?h():13===e.keyCode&&1===y.length&&C("")},onChange:function(e){C(e.target.value)},value:y}))),r.a.createElement("div",{className:"trello-board-footer ".concat(!E&&"hover cursor-p"),onClick:function(){!E&&v(!0)}},E?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"btn btn-success",onClick:h},"Add Card"),r.a.createElement("div",{className:"d-i-b cursor-p ml-1 text-lg lighten-60 hover",onClick:S},"\xd7")):r.a.createElement("div",null,0===t.items.length?"+ Add a card":"+ Add another card")))},T=function(e){var t=e.board,a=e.setScrollIflonger,o=Object(n.useContext)(s),l=Object(n.useContext)(p),c=o.addList,i=l.setAlert,u=Object(n.useState)(!1),m=Object(d.a)(u,2),b=m[0],f=m[1],E=Object(n.useState)(""),v=Object(d.a)(E,2),g=v[0],O=v[1],y=function(){""!==g?(c(g,t.id),i("list ".concat(g," added"),"success"),O(""),a()):i("list title can not be empty","warning")},C=function(){f(!1),O("")};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"trello-board-add-list-btn btn-light op-8 darken-20 text-dark ".concat(b&&"d-n"),onClick:function(){f(!0)}},t&&0===t.lists.length?"+ Add a list":"+ Add another list"),r.a.createElement("div",{className:"trello-board-add-list-form btn-light op-9 darken-20 text-dark ".concat(!b&&"d-n")},r.a.createElement("input",{type:"text",className:"m-0 rounded-lg mb-1",placeholder:"Enter list name",value:g,onChange:function(e){O(e.target.value)},onBlur:function(){""!==g?y():C()},onKeyUp:function(e){13===e.keyCode&&y()}}),r.a.createElement("div",{className:"btn btn-success",onClick:y},"Add List"),r.a.createElement("div",{className:"d-i-b cursor-p ml-1 text-lg lighten-60 hover",onClick:C},"\xd7")))},x=function(e){var t=e.board,a=e.boardFuncs,o=Object(n.useState)({}),l=Object(d.a)(o,2),c=l[0],s=l[1];Object(n.useEffect)(function(){i()},[t]);var i=function(){16+270*(t.lists.length+1)>window.innerWidth&&s({display:"grid",gridTemplateRows:"1fr",gridTemplateColumns:"repeat(".concat(t&&t.lists.length+1,", 1fr)")})};return r.a.createElement("div",{className:"trello-board-main",style:c},t.lists.map(function(e){return r.a.createElement("div",{key:e.id,className:"trello-board-list-wrapper"},r.a.createElement(S,{list:e,boardFuncs:a}))}),r.a.createElement("div",{className:"trello-board-list-wrapper"},r.a.createElement(T,{board:t,setScrollIflonger:i})))},I=(a(17),function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(c),i=Object(n.useContext)(s),u=l.currentBoardId,m=i.getBoard,b=i.setStar,f=i.setDescribtion,p=i.setTitle;Object(n.useEffect)(function(){o(m(u))},[]);var E={background:a&&a.color};return r.a.createElement(n.Fragment,null,r.a.createElement(h,{board:a,setStar:b,setDescribtion:f,setTitle:p}),r.a.createElement("div",{className:"trello-board-main-wrapper lighten-20 p",style:E},a&&r.a.createElement(x,{boardFuncs:i,board:a})))}),w=(a(4),function(){var e=Object(n.useContext)(c),t=e.setModal,a=e.clearCurrentBoardId,o=Object(n.useContext)(s).addBoard,l=Object(n.useContext)(p).setAlert,i=Object(n.useState)("#ee3a59"),u=Object(d.a)(i,2),m=u[0],b=u[1],f=Object(n.useState)(""),E=Object(d.a)(f,2),v=E[0],g=E[1],O=function(){t("off")},y=function(){""!==v&&(o(v,m),O(),l("board ".concat(v.charAt(0).toUpperCase()+v.slice(1)," was created"),"success",4e3),a())},C={backgroundColor:m};return r.a.createElement("div",{className:"modal-content add-board-modal-content"},r.a.createElement("div",{className:"grid-3-1"},r.a.createElement("div",{className:"p-1 grid-3-1 rounded-lg",style:C},r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Add board title",value:v,onChange:function(e){g(e.target.value)},onKeyUp:function(e){13===e.keyCode&&y()},className:"m-0 border-0 text-bold text-light pl-1 rounded"})),r.a.createElement("div",null,r.a.createElement("div",{className:"close",onClick:O},"\xd7"))),r.a.createElement("div",{className:"func-colors grid-3 gap-half",onClick:function(e){e.target.classList.contains("func-no-click")||e.target.classList.contains("func-colors")||b(e.target.id)}},r.a.createElement("div",{id:"#ee3a59",className:"rounded-lg p-1 background-red cursor-p"}),r.a.createElement("div",{id:"#e27b47",className:"rounded-lg p-1 background-orange cursor-p"}),r.a.createElement("div",{id:"#efca58",className:"rounded-lg p-1 background-yellow cursor-p"}),r.a.createElement("div",{id:"#46b29e",className:"rounded-lg p-1 background-blue-l cursor-p"}),r.a.createElement("div",{id:"#344e5c",className:"rounded-lg p-1 background-blue-d cursor-p"}),r.a.createElement("div",{className:"func-no-click"}),r.a.createElement("div",{id:"custom",className:"rounded-lg p-1 bg-light cursor-p"}))),r.a.createElement("div",{onClick:y,className:"btn btn-narrow m text-bold ".concat(""!==v?"btn-success":"cursor-not-allowed")},"Create Board"))}),_=function(){var e=Object(n.useContext)(c),t=e.setModal,a=e.currentCard;return r.a.createElement("div",{className:"details-modal-container"},r.a.createElement("div",{className:"details-modal-header"},r.a.createElement("div",{className:"close text-lg",onClick:function(){t("off")}},"\xd7"),r.a.createElement("i",{className:"fas fa-th-list mr-1"}),a.text),r.a.createElement("div",{className:"details-modal-body"}))},D=a(3);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var A=function(){var e=Object(n.useRef)(null),t=Object(n.useContext)(c),a=t.currentBoardId,o=t.currentListId,l=t.fastEditModalPos,i=t.currentCard,u=t.clearCurrentCard,m=t.setOptionsModal,b=t.setModal,f=Object(n.useContext)(s).updateCard,p=Object(n.useState)(""),E=Object(d.a)(p,2),v=E[0],g=E[1];Object(n.useEffect)(function(){g(i.text),e.current.focus()},[]);var O={position:"absolute",top:l.top+"px",left:l.left+"px"},y={width:l.width+"px"},C=function(){var e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(D.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},i,{text:v});f(a,o,i.id,e),u(),b("off")};return r.a.createElement("div",{style:O,className:"modal-content grid-2 gap-half"},r.a.createElement("div",{style:y,className:"fast-edit-modal-right"},r.a.createElement("textarea",{ref:e,className:"m-0 border-0",value:v,onChange:function(e){g(e.target.value)},onKeyUp:function(e){13===e.keyCode&&C()}}),r.a.createElement("div",{className:"btn btn-success mt-1",onClick:C},"Save")),r.a.createElement("div",{className:"fast-edit-modal-action-container",onClick:function(e){e.target.classList.contains("fas")?m("on",e.target.parentElement.id):e.target.classList.contains("func-action-btn")&&m("on",e.target.id)}},r.a.createElement("div",{className:"fast-edit-modal-action"},r.a.createElement("div",{className:"func-action-btn fast-edit-modal-action-btn",id:"editLabels"},r.a.createElement("i",{className:"fas fa-tag mr"}),"Edit labels")),r.a.createElement("div",{className:"fast-edit-modal-action"},r.a.createElement("div",{className:"func-action-btn fast-edit-modal-action-btn",id:"members"},r.a.createElement("i",{className:"fas fa-user mr"}),"Change members")),r.a.createElement("div",{className:"fast-edit-modal-action"},r.a.createElement("div",{className:"func-action-btn fast-edit-modal-action-btn",id:"move"},r.a.createElement("i",{className:"fas fa-arrow-right mr"}),"Move")),r.a.createElement("div",{className:"fast-edit-modal-action"},r.a.createElement("div",{className:"func-action-btn fast-edit-modal-action-btn",id:"deleteCard"},r.a.createElement("i",{className:"fas fa-trash mr"}),"Delete card"))))},L=function(){var e=Object(n.useContext)(c),t=e.modalStatus,a=e.modalType,o=e.setModal,l=Object(n.useState)("off"),s=Object(d.a)(l,2),i=s[0],u=s[1];Object(n.useEffect)(function(){u(t)},[t]);var m=function(){o("off")},b={display:"on"===i?"block":"none"};return r.a.createElement("div",{style:b,className:"modal",onClick:function(e){e.target.classList.contains("modal")&&m()}},"addBoardModal"===a&&r.a.createElement(w,null),"detailsModal"===a&&r.a.createElement(_,null),"fastEditModal"===a&&r.a.createElement(A,null))},R=function(){var e=Object(n.useContext)(c),t=e.currentBoardId,a=e.currentListId,o=e.currentCard,l=e.setModal,i=e.setOptionsModal,d=Object(n.useContext)(s).deleteCard;return r.a.createElement("div",null,r.a.createElement("div",{className:"text-85 m mb-1"},"are you sure you want to delete this card? its permanent"),r.a.createElement("div",{className:"btn btn-danger btn-block hover-op-10 hover-lighten",onClick:function(){d(t,a,o.id),l("off"),i("off")}},"Delete"))},B=function(){var e=Object(n.useContext)(c);e.currentBoardId,e.currentListId,e.currentCard,e.setModal,e.setOptionsModal,Object(n.useContext)(s).updateCard;return r.a.createElement("div",null,"search labels add labels create label")},P=function(){var e=Object(n.useRef)(null),t=Object(n.useContext)(c),a=t.optionsModalStatus,o=t.optionsModalType,l=t.mousePos,s=t.setOptionsModal,i=Object(n.useState)("off"),u=Object(d.a)(i,2),m=u[0],b=u[1],f=Object(n.useState)({}),p=Object(d.a)(f,2),E=p[0],v=p[1];Object(n.useEffect)(function(){b(a),setTimeout(function(){},0),y()},[a,l]);var g=function(){s("off")},O={display:"on"===m?"block":"none"},y=function(){setTimeout(function(){var t;l&&(t=e.current.getBoundingClientRect(),window.innerWidth-l.x<t.width&&window.innerHeight-l.y>t.height?v({right:10,top:l.y+10+"px"}):window.innerHeight-l.y<t.height&&window.innerWidth-l.x>t.width?v({left:l.x+10+"px",bottom:10}):window.innerHeight-l.y<t.height&&window.innerWidth-l.x<t.width?v({right:10,bottom:10}):v({left:l.x+10+"px",top:l.y+10+"px"}))},0)};return r.a.createElement("div",{style:O,id:"options-modal",onClick:function(e){"options-modal"===e.target.id&&g()}},r.a.createElement("div",{ref:e,className:"options-modal-container",style:E},r.a.createElement("div",{className:"options-modal-header"},r.a.createElement("div",{className:"close",onClick:g},"\xd7"),"editLabels"===o&&"Labels","move"===o&&"Move card","members"===o&&"Members","deleteCard"===o&&"Delete card","deleteList"===o&&"Delete list?","listActions"===o&&"List actions"),r.a.createElement("div",{className:"options-modal-body"},"deleteCard"===o&&r.a.createElement(R,null),"editLabels"===o&&r.a.createElement(B,null))))},M=function(e){var t=e.alert,a=e.deleteAlert;return r.a.createElement("div",{onClick:function(){a(t.id)},className:"trello-alert-item alert rounded-lg alert-".concat(t.type)},r.a.createElement("div",{className:"trello-alert-item-msg"},t.msg.charAt(0).toUpperCase()+t.msg.slice(1)))},U=function(){var e=Object(n.useContext)(p),t=e.alerts,a=e.deleteAlert;return r.a.createElement("div",{className:"trello-alerts-wrapper"},t.map(function(e){return r.a.createElement(M,{key:e.id,alert:e,deleteAlert:a})}))},F=(a(18),a(19),function(){var e=Object(n.useContext)(c),t=e.setCurrentBoardId,a=e.currentBoardId,o=e.setMousePos,l=e.optionsModalStatus;Object(n.useEffect)(function(){t(1)},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(e){"off"===l&&o(e.clientX,e.clientY)},id:"all-wrapper"},r.a.createElement(i,null),r.a.createElement(L,null),r.a.createElement(P,null),r.a.createElement(U,null),a?r.a.createElement(I,null):r.a.createElement(y,null)))}),q=a(9);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach(function(t){Object(D.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var W=function(e,t){switch(t.type){case"ADD_BOARD":return Y({},e,{boards:[].concat(Object(q.a)(e.boards),[t.payload])});case"SET_TITLE":return Y({},e,{baords:e.boards.map(function(e){return e.id===t.payload.id&&(e.title=t.payload.text),e})});case"SET_STAR":return Y({},e,{boards:e.boards.map(function(e){return e.id===t.payload.id&&(e.starred=!e.starred),e}),listOfStarredBoardsIds:t.payload.newListOfStarredBoardsIds});case"SET_DESCRIBTION":return Y({},e,{boards:e.boards.map(function(e){return e.id===t.payload.id&&(e.describtion=t.payload.text),e})});case"ADD_LIST":return Y({},e,{boards:e.boards.map(function(e){return e.id===t.payload.id&&e.lists.push(t.payload.newList),e})});case"ADD_CARD":return Y({},e,{boards:e.boards.map(function(e){return e.id===t.payload.boardId&&(e.lists=e.lists.map(function(e){return e.id===t.payload.listId&&e.items.push(t.payload.newCard),e})),e})});case"SET_LIST_TITLE":return Y({},e,{boards:e.boards.map(function(e){return e.id===t.payload.boardId&&(e.lists=e.lists.map(function(e){return e.id===t.payload.listId&&(e.title=t.payload.newTitle),e})),e})});case"UPDATE_CARD":return Y({},e,{boards:e.boards.map(function(e){return e.id===t.payload.boardId&&(e.lists=e.lists.map(function(e){return e.id===t.payload.listId&&(e.items=e.items.map(function(e){return e.id===t.payload.cardId?t.payload.newCard:e})),e})),e})});case"DELETE_CARD":return Y({},e,{boards:e.boards.map(function(e){return e.id===t.payload.boardId&&(e.lists=e.lists.map(function(e){return e.id===t.payload.listId&&(e.items=e.items.filter(function(e){return e.id!==t.payload.cardId})),e})),e})});default:return e}},H=function(e){var t={boards:[{title:"my nice board",id:1,color:"#ee3a59",starred:!1,describtion:"board describtion goes here",lists:[{title:"todos",id:f.a.v4(),items:[{text:"todo 1",desc:"one describtion",id:f.a.v4(),labels:["label 1","label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]},{text:"todo 2",id:f.a.v4(),labels:["label 2"]}]},{title:"doing",id:f.a.v4(),items:[{text:"doing 1",id:f.a.v4(),labels:["label 3","label 2"]},{text:"doing 2",id:f.a.v4(),labels:["label 3","label 4"]},{text:"doing 3",id:f.a.v4(),labels:["label 4","label 2"]}]},{title:"new list",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]},{title:"test for long",id:f.a.v4(),items:[]}]},{title:"test empty",id:2,starred:!1,color:"#4759a3",describtion:"",lists:[{title:"test for one",id:f.a.v4(),items:[]}]}],labels:[{id:1,color:"#61bd4f",name:""},{id:1,color:"#f2d600",name:""},{id:1,color:"#ff9f1a",name:""},{id:1,color:"#eb5a46",name:""},{id:1,color:"#c377e0",name:""},{id:1,color:"#0079bf",name:""}],colors:[],listOfStarredBoardsIds:[]},a=Object(n.useReducer)(W,t),o=Object(d.a)(a,2),l=o[0],c=o[1];console.log("use colors for just colors"),console.log("add options like add label delete label edit label( name and color )"),console.log(l.colors);var i=function(e){return l.boards.filter(function(t){return t.id===e})[0]};return r.a.createElement(s.Provider,{value:{boards:l.boards,addBoard:function(e,t){var a={title:e,id:f.a.v4(),color:t,starred:!1,describtion:"",lists:[]};c({type:"ADD_BOARD",payload:a})},getBoardsNames:function(){return l.boards.map(function(e){return e.title})},getRecentBoards:function(e){var t=[];return e&&e.forEach(function(e){return t.push(i(e))}),t},getStarredBoards:function(){var e=[];return l.listOfStarredBoardsIds.forEach(function(t){return e.push(i(t))}),e},getBoard:i,setTitle:function(e,t){c({type:"SET_TITLE",payload:{id:t,text:e}})},setStar:function(e){var t=l.listOfStarredBoardsIds;-1!==l.listOfStarredBoardsIds.indexOf(e)?t.splice(l.listOfStarredBoardsIds.indexOf(e),1):t.push(e),c({type:"SET_STAR",payload:{id:e,newListOfStarredBoardsIds:t}})},setDescribtion:function(e,t){c({type:"SET_DESCRIBTION",payload:{id:t,text:e}})},addList:function(e,t){var a={title:e,id:f.a.v4(),items:[]};c({type:"ADD_LIST",payload:{id:t,newList:a}})},setListTitle:function(e,t,a){c({type:"SET_LIST_TITLE",payload:{boardId:e,listId:t,newTitle:a}})},addCard:function(e,t,a){var n={text:e,id:f.a.v4(),labels:[]};c({type:"ADD_CARD",payload:{newCard:n,listId:t,boardId:a}})},updateCard:function(e,t,a,n){c({type:"UPDATE_CARD",payload:{boardId:e,listId:t,cardId:a,newCard:n}})},deleteCard:function(e,t,a){c({type:"DELETE_CARD",payload:{boardId:e,listId:t,cardId:a}})}}},e.children)};function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach(function(t){Object(D.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var z=function(e,t){switch(t.type){case"SET_ALERT":return X({},e,{alerts:[t.payload]});case"DELETE_ALERT":return X({},e,{alerts:e.alerts.filter(function(e){return e.id!==t.payload})});default:return e}},G=function(e){var t=Object(n.useReducer)(z,{alerts:[]}),a=Object(d.a)(t,2),o=a[0],l=a[1],c=function(e){l({type:"DELETE_ALERT",payload:e})};return r.a.createElement(p.Provider,{value:{alerts:o.alerts,setAlert:function(e,t,a){if(-1===o.alerts.map(function(e){return e.msg}).indexOf(e)){var n={msg:e,id:f.a.v4(),type:t};l({type:"SET_ALERT",payload:n}),setTimeout(function(){c(n.id)},a||3e3)}},deleteAlert:c}},e.children)};function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(D.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Z=function(e,t){switch(t.type){case"SET_CURRENT_BOARD_ID":return V({},e,{currentBoardId:t.payload});case"CLEAR_CURRENT_BOARD_ID":return V({},e,{currentBoardId:null});case"SET_CURRENT_LIST_ID":return V({},e,{currentListId:t.payload});case"CLEAR_CURRENT_LIST_ID":return V({},e,{currentListId:null});case"SET_CURRENT_CARD":return V({},e,{currentCard:t.payload});case"CLEAR_CURRENT_CARD":return V({},e,{currentCard:null});case"SET_RECENT_IDS":return V({},e,{recentIds:t.payload});case"SET_MODAL":return V({},e,{modalStatus:t.payload});case"SET_MODAL_TYPE":return V({},e,{modalType:t.payload});case"SET_OPTIONS_MODAL":return V({},e,{optionsModalStatus:t.payload});case"SET_OPTIONS_MODAL_TYPE":return V({},e,{optionsModalType:t.payload});case"SET_FAST_EDIT_MODAL_POS":return V({},e,{fastEditModalPos:t.payload});case"SET_MOUSE_POS":return V({},e,{mousePos:t.payload});default:return e}},$=function(e){var t=Object(n.useReducer)(Z,{currentBoardId:null,currentListId:null,currentCard:null,recentIds:[],ModalStatus:"off",modalType:null,optionsModalStatus:"off",optionsModaltype:null,fastEditModalPos:null,mosuePos:{}}),a=Object(d.a)(t,2),o=a[0],l=a[1],s=function(e){var t=o.recentIds;3===t.length&&null!==e?(t.shift(),t.push(e)):null!==e&&t.push(e),l({type:"SET_RECENT_IDS",payload:t})},i=function(e){l({type:"SET_MODAL_TYPE",payload:e})},u=function(){l({type:"SET_MODAL_TYPE",payload:null})},m=function(e){l({type:"SET_OPTIONS_MODAL_TYPE",payload:e})},b=function(){l({type:"SET_OPTIONS_MODAL_TYPE",payload:null})};return r.a.createElement(c.Provider,{value:{currentBoardId:o.currentBoardId,currentListId:o.currentListId,currentCard:o.currentCard,recentIds:o.recentIds,modalStatus:o.modalStatus,modalType:o.modalType,optionsModalStatus:o.optionsModalStatus,optionsModalType:o.optionsModalType,fastEditModalPos:o.fastEditModalPos,mousePos:o.mousePos,setCurrentBoardId:function(e){l({type:"SET_CURRENT_BOARD_ID",payload:e}),s(e)},clearCurrentBoardId:function(){l({type:"CLEAR_CURRENT_BOARD_ID"})},setCurrentListId:function(e){l({type:"SET_CURRENT_LIST_ID",payload:e})},clearCurrentListId:function(){l({type:"CLEAR_CURRENT_LIST_ID"})},setCurrentCard:function(e){l({type:"SET_CURRENT_CARD",payload:e})},clearCurrentCard:function(){l({type:"CLEAR_CURRENT_CARD"})},setModal:function(e,t){l({type:"SET_MODAL",payload:e}),"off"===e?u():"on"===e&&i(t)},setOptionsModal:function(e,t){l({type:"SET_OPTIONS_MODAL",payload:e}),"off"===e?b():"on"===e&&m(t)},setFastEditModalPos:function(e){l({type:"SET_FAST_EDIT_MODAL_POS",payload:e})},setMousePos:function(e,t){l({type:"SET_MOUSE_POS",payload:{x:e,y:t}})}}},e.children)};l.a.render(r.a.createElement(function(){return r.a.createElement(H,null,r.a.createElement(G,null,r.a.createElement($,null,r.a.createElement(F,null))))},null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a2f64a5d.chunk.js.map