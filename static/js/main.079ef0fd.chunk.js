(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(41),a(16)),s=a(17),i=(a(42),a(43),a(44),a(5)),m=a(6),u=a(8),d=a(7),h=a(9),p=(a(45),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-item"},r.a.createElement(l.b,{to:"/BOBO"},"Student List")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(l.b,{to:"/BOBO/classRecord"},"Class Record")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(l.b,{to:"/BOBO/notice"},"Notice")),r.a.createElement("div",{className:"menu-item"},r.a.createElement(l.b,{to:"/BOBO/settings"},"Settings")))}}]),t}(n.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},"StudentList")}}]),t}(n.Component),f=a(3),E=(a(98),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Row,null,r.a.createElement(f.Col,{s:12},r.a.createElement("div",{id:"topbar-container"},r.a.createElement("span",{id:"topbar"},this.props.name),this.props.showBack?r.a.createElement(f.Button,{id:"topbar-back-btn",node:"a",floating:!0,small:!0,className:"red",waves:"light",icon:"arrow_back",href:this.props.backTo}):r.a.createElement("span",null))))}}]),t}(n.Component)),O=(a(99),a(35)),v=function(){return r.a.createElement(O.a,{trigger:r.a.createElement(f.Button,null,"Cancel"),position:"top left"},function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Are you sure to cancel?",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(f.Button,{className:"close",onClick:e},"No"),r.a.createElement(l.b,{to:"/BOBO"},r.a.createElement(f.Button,{className:"close",style:{float:"right"},onClick:B.doneonClick},"Yes")))})},B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={textname:"",textcontent:"",file:null},a.handlenameChange=function(e){a.setState({textname:e.target.value})},a.handlecontentChange=function(e){a.setState({textcontent:e.target.value})},a.doneonClick=function(){console.log("E"),null!=a.state.file?alert("Student : "+a.state.textname+"  Content : "+a.state.textcontent+"  file_name :"+a.state.file.name+"  file_modified_date : "+a.state.file.LastModifiedDate+" file_size : "+a.state.file.size):alert("Student : "+a.state.textname+"  Content : "+a.state.textcontent)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handlefileChange",value:function(e){this.setState({file:e.target.files[0]})}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(E,{name:"Upload Class Record",showBack:!0,backTo:"/BOBO"}),r.a.createElement("div",null,"Students :",r.a.createElement("textarea",{name:"name",id:"upload_studentsname",value:this.state.textname,placeholder:"Write students' name..",style:{width:400},className:"materialize-textarea",onChange:this.handlenameChange})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("form",{action:"#"},r.a.createElement("div",{className:"btn"},r.a.createElement("input",{type:"file",onChange:this.handlefileChange.bind(this)}),r.a.createElement("input",{type:"file",accept:"image/*;capture=camera"}),r.a.createElement("input",{type:"file",accept:"image/*",capture:"camera"})))),r.a.createElement("hr",{className:"bottommargin",color:"#d3d3d3"}),r.a.createElement("div",{className:"bottommargin"},r.a.createElement(f.Textarea,{placeholder:"Write class records..\r #classs #amy",style:{height:200},onChange:this.handlecontentChange,value:this.state.textcontent}),r.a.createElement("div",{className:"row"},r.a.createElement(v,null),r.a.createElement(f.Button,{waves:"light",onClick:this.doneonClick.bind(this),className:"buttonright"},"Done"))))}}]),t}(n.Component),C=B,j=a(22),g=a(27),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(f.CollectionItem,{href:"#"},this.props.data.name)}}]),t}(n.Component),k=(a(100),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){var e=a.state.BoardUserMap.filter(function(e){return e.userId===a.state.CurrentUser.id}).map(function(e){return e.boardId}),t=a.state.Boards.filter(function(t){return e.indexOf(t.id)>-1}),n=t.reduce(function(e,t){return Object(g.a)({},e,Object(j.a)({},t.name,null))},{});a.setState(Object(g.a)({},a.state,{validBoards:t,autocompleteData:n,showAutocomplete:!0}))},a.renderBoardList=function(){return a.state.validBoards.map(function(e){return r.a.createElement(w,{data:e})})},a.state={Boards:[{id:1,name:"Class A"},{id:2,name:"Class B"},{id:3,name:"Class C"},{id:4,name:"Class D"},{id:5,name:"Class E"},{id:6,name:"Class F"}],BoardUserMap:[{userId:1,boardId:1},{userId:1,boardId:2},{userId:2,boardId:1},{userId:1,boardId:4}],CurrentUser:{id:1,name:"\uc548\uc2b9\ubbfc"},UnreadPosts:[{userId:1,postId:34,boardId:1},{userId:1,postId:35,boardId:2},{userId:1,postId:36,boardId:1}],validBoards:[],autocompleteData:{Test:null,Test2:null}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(E,{name:"Notice Boards",showBack:!0,backTo:"/BOBO"}),r.a.createElement(f.Row,{id:"notice-list-search-row"},r.a.createElement(f.Col,{s:12},this.state.showAutocomplete?r.a.createElement(f.Autocomplete,{options:{data:this.state.autocompleteData},placeholder:"Search notice board name",icon:"search",s:12}):r.a.createElement("span",null))),r.a.createElement(f.Row,null,r.a.createElement(f.Col,{s:12},r.a.createElement(f.Collection,null,this.renderBoardList()))))}}]),t}(n.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},"Settings")}}]),t}(n.Component);var N=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{exact:!0,path:"/BOBO",component:b}),r.a.createElement(s.a,{exact:!0,path:"/BOBO/classRecord",component:C}),r.a.createElement(s.a,{exact:!0,path:"/BOBO/notice",component:k}),r.a.createElement(s.a,{exact:!0,path:"/BOBO/settings",component:y}),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,a){e.exports=a(101)},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[36,1,2]]]);
//# sourceMappingURL=main.079ef0fd.chunk.js.map