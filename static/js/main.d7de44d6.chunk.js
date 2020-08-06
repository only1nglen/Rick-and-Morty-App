(this["webpackJsonprm-app"]=this["webpackJsonprm-app"]||[]).push([[0],{43:function(e,t,a){e.exports=a(75)},48:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),o=(a(48),a(12)),s=a(13),l=a(15),u=a(14),m=a(3),p=a(30),d=a(25),h=function(){return r.a.createElement(p.a,{bg:"dark",variant:"dark",expand:"md"},r.a.createElement(p.a.Brand,{href:"#"},"Rick And Morty"),r.a.createElement(d.a,null,r.a.createElement(d.a.Link,{href:"#maincast"},"Main Cast"),r.a.createElement(d.a.Link,{href:"#episodelisting"},"Episode Guide")))},E=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"home-bg",src:"https://i.imgur.com/T7zWFIw.jpg",alt:"home-bg"}))},f=a(9),v=a.n(f),b=a(11),j="https://rickandmortyapi.com/api/",g="http://localhost:3000",O="localhost"===window.location.hostname?g:j,k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={characters:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat(O,"character/1,2,3,4,5")).then((function(t){return e.setState({characters:t.data})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.characters.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(b.b,{to:"/characterbio/".concat(e.id)},e.name))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"The Family "),r.a.createElement("div",null,e))}}]),a}(n.Component),y=a(17),x=a.n(y),w=a(21),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={name:"",status:"",img:"",episodes:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(x.a.mark((function e(){var t,a,n,r,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(O,"character/").concat(this.props.match.params.bro));case 2:return t=e.sent,a=t.data,n=a.episode.map((function(e){return e.substring(e.lastIndexOf("/")+1)})),r=n.join(","),e.next=8,v.a.get("".concat(O,"episode/").concat(r));case 8:c=e.sent,i=c.data,this.setState({name:a.name,status:a.status,img:a.image,episodes:i});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.status,n=e.img,c=e.episodes,i=c.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(b.b,{to:"/episode/".concat(e.id)},r.a.createElement("li",null,e.name)))})),o=c.length;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:n,alt:"pic of character"})),r.a.createElement("div",null,"Name: ",t,r.a.createElement("br",null),"Status: ",a,r.a.createElement("br",null),"Number of Episodes Appeared in: ",o),r.a.createElement("hr",null),r.a.createElement("div",null,"List of Episode Appearance:",r.a.createElement("ul",null,i)))}}]),a}(n.Component),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={name:"",airdate:"",episode:"",characters:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(x.a.mark((function e(){var t,a,n,r,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(O,"episode/").concat(this.props.match.params.sis));case 2:return t=e.sent,a=t.data,n=a.characters.map((function(e){return e.substring(e.lastIndexOf("/")+1)})),r=n.join(","),e.next=8,v.a.get("".concat(O,"character/").concat(r));case 8:c=e.sent,i=c.data,this.setState({name:a.name,airdate:a.air_date,episode:a.episode,characters:i});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.airdate,n=e.episode,c=e.characters.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(b.b,{to:"/characterbio/".concat(e.id)},r.a.createElement("li",null,e.name)))}));return r.a.createElement("div",null,"Episode name : ",t,r.a.createElement("br",null),n,r.a.createElement("br",null),"Air Date: ",a,r.a.createElement("br",null),r.a.createElement("ul",null,"Character Appearances: ",c))}}]),a}(n.Component),M=a(42),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={allEpisodes:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(x.a.mark((function e(){var t,a,n,r,c,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.all([v.a.get("".concat(O,"/episode/?page=1")),v.a.get("".concat(O,"/episode/?page=2"))]);case 2:t=e.sent,a=Object(M.a)(t,2),n=a[0],r=a[1],c=n.data.results,i=r.data.results,o=c.concat(i),this.setState({allEpisodes:o});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.allEpisodes.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(b.b,{to:"/episode/".concat(e.id)},e.name))}));return r.a.createElement("div",null,e)}}]),a}(n.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement("hr",null),r.a.createElement(m.a,{exact:!0,path:"/",component:E}),r.a.createElement(m.a,{path:"/maincast",component:k}),r.a.createElement(m.a,{path:"/characterbio/:bro",component:C}),r.a.createElement(m.a,{path:"/episodelisting",component:D}),r.a.createElement(m.a,{path:"/episode/:sis",component:A}))}}]),a}(n.Component);i.a.render(r.a.createElement(b.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d7de44d6.chunk.js.map