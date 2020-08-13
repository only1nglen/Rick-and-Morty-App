(this["webpackJsonprm-app"]=this["webpackJsonprm-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(77)},50:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),s=(a(50),a(12)),o=a(13),u=a(15),l=a(14),m=a(3),p=a(30),d=a(23),h=function(){return r.a.createElement(p.a,{bg:"dark",variant:"dark",expand:"md"},r.a.createElement(p.a.Brand,{href:"#"},"Rick And Morty"),r.a.createElement(d.a,null,r.a.createElement(d.a.Link,{href:"#maincast"},"Main Cast"),r.a.createElement(d.a.Link,{href:"#episodelisting"},"Episode Guide"),r.a.createElement(d.a.Link,{href:"#search"},"Character Search")))},v=a(41),f=function(){return r.a.createElement("div",null,r.a.createElement(v.a,{className:"home-bg",src:"https://i.imgur.com/T7zWFIw.jpg",alt:"home-bg",fluid:!0}))},E=a(7),b=a.n(E),g=a(18),j=a(8),y=a.n(j),O=a(10),k="https://rickandmortyapi.com/api/",x="http://localhost:3000",C="localhost"===window.location.hostname?x:k,S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={characters:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(C,"character/1,2,3,4,5"));case 2:t=e.sent,a=t.data,this.setState({characters:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.characters.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(O.b,{to:"/characterbio/".concat(e.id)},e.name))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"The Family "),r.a.createElement("div",null,e))}}]),a}(n.Component);var w=function(e){return r.a.createElement("div",{className:"character-card"},r.a.createElement("img",{src:e.img,alt:e.name}),r.a.createElement("div",null,"Name: ",e.name),r.a.createElement("div",null,"Status: ",e.status),r.a.createElement("div",null,"Appeared in ",e.epCount," ",e.epCount>1?"Episodes":"Episode"),r.a.createElement("hr",null),r.a.createElement("div",null,"Appeared in :",r.a.createElement("ul",null,e.epList)))},N=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={name:"",status:"",img:"",episodes:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,a,n,r,c,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(C,"character/").concat(this.props.match.params.bro));case 2:return t=e.sent,a=t.data,n=a.episode.map((function(e){return e.substring(e.lastIndexOf("/")+1)})),r=n.join(","),e.next=8,y.a.get("".concat(C,"episode/").concat(r));case 8:c=e.sent,i=c.data,s=function(e){var t=[];return Array.isArray(e)?e:(t.push(e),t)}(i),this.setState({name:a.name,status:a.status,img:a.image,episodes:s});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.status,n=e.img,c=e.episodes,i=c.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(O.b,{to:"/episode/".concat(e.id)},r.a.createElement("li",null,e.name)))})),s=c.length;return r.a.createElement("div",null,r.a.createElement(w,{img:n,name:t,status:a,epCount:s,epList:i}))}}]),a}(n.Component);var A=function(e){return r.a.createElement("div",{className:"episode-card"},r.a.createElement("div",null,"Name: ",e.name),r.a.createElement("div",null,e.episode),r.a.createElement("div",null,"Air Date: ",e.airdate),r.a.createElement("div",null,"Character Appearances: ",r.a.createElement("ul",null,e.charList)))},L=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={name:"",airdate:"",episode:"",characters:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,a,n,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat(C,"episode/").concat(this.props.match.params.sis));case 2:return t=e.sent,a=t.data,n=a.characters.map((function(e){return e.substring(e.lastIndexOf("/")+1)})),r=n.join(","),e.next=8,y.a.get("".concat(C,"character/").concat(r));case 8:c=e.sent,i=c.data,this.setState({name:a.name,airdate:a.air_date,episode:a.episode,characters:i});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.airdate,n=e.episode,c=e.characters.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(O.b,{to:"/characterbio/".concat(e.id)},r.a.createElement("li",null,e.name)))}));return r.a.createElement("div",null,r.a.createElement(A,{name:t,episode:n,airdate:a,charList:c}))}}]),a}(n.Component),D=a(44),M=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={allEpisodes:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,a,n,r,c,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.all([y.a.get("".concat(C,"/episode/?page=1")),y.a.get("".concat(C,"/episode/?page=2"))]);case 2:t=e.sent,a=Object(D.a)(t,2),n=a[0],r=a[1],c=n.data.results,i=r.data.results,s=c.concat(i),this.setState({allEpisodes:s});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.allEpisodes.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(O.b,{to:"/episode/".concat(e.id)},e.name))}));return r.a.createElement("div",null,e)}}]),a}(n.Component),q=a(43),I=function(e){return r.a.createElement("form",{className:"form",onSubmit:e.onSubmit},r.a.createElement("label",{className:"search-label",htmlFor:"query"},"Search by Name "),r.a.createElement("input",{className:"input",type:"text",name:"query",placeholder:"enter name..",value:e.query,onChange:e.onChange}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search"))},F=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=function(t){var a=Object(q.a)({},t.target.name,t.target.value),n=Object.assign(e.state.searched,a);e.setState({search:n})},e.onSubmit=function(){var t=Object(g.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,y.a.get("".concat(C,"character/?page=1&name=").concat(e.state.searched.query));case 3:n=t.sent,e.setState({character:n.data.results,info:n.data.info});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={searched:{query:""},character:[],info:[]},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{character:this.state.character,onChange:this.onChange,onSubmit:this.onSubmit}),r.a.createElement("div",null,this.state.character.map((function(e){return r.a.createElement("div",{className:"result-card",key:e.id},r.a.createElement(O.b,{to:"/characterbio/".concat(e.id)},r.a.createElement("img",{className:"img-result",src:e.image,alt:e.name})),r.a.createElement("div",null,"Name: ",e.name),r.a.createElement("div",null,"Status: ",e.status))}))))}}]),a}(n.Component),B=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("hr",null),r.a.createElement(m.a,{exact:!0,path:"/",component:f}),r.a.createElement(m.a,{path:"/maincast",component:S}),r.a.createElement(m.a,{path:"/characterbio/:bro",component:N}),r.a.createElement(m.a,{path:"/episodelisting",component:M}),r.a.createElement(m.a,{path:"/episode/:sis",component:L}),r.a.createElement(m.a,{path:"/search",component:F}))}}]),a}(n.Component);i.a.render(r.a.createElement(O.a,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.41ac8b40.chunk.js.map