(this["webpackJsonprm-app"]=this["webpackJsonprm-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=(a(38),a(9)),i=a(10),s=a(12),u=a(11),m=a(3),p=a(1),d=function(){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("p",null,"Rick and Morty"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/maincast"},"Main Characters")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/episodelisting"},"List of all Episodes")))))},h=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Home"),r.a.createElement("p",null,"content"))},E=a(7),v=a.n(E),f="https://rickandmortyapi.com/api/",b="http://localhost:3000",j="localhost"===window.location.hostname?b:f,O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={characters:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat(j,"/character/1,2,3,4,5")).then((function(t){return e.setState({characters:t.data})})).catch(console.error)}},{key:"render",value:function(){var e=this.state.characters.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(m.b,{to:"/characterbio/".concat(e.id)},e.name))}));return r.a.createElement("div",null,r.a.createElement("h4",null,"The Family "),r.a.createElement("div",null,e))}}]),a}(n.Component),g=a(13),k=a.n(g),y=a(15),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={name:"",status:"",img:"",episodes:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,a,n,r,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(j,"character/").concat(this.props.match.params.bro));case 2:return t=e.sent,a=t.data,n=a.episode.map((function(e){return e.substring(e.lastIndexOf("/")+1)})),r=n.join(),e.next=8,v.a.get("".concat(j,"/episode/").concat(r));case 8:c=e.sent,o=c.data,this.setState({name:a.name,status:a.status,img:a.image,episodes:o});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.status,n=e.img,c=e.episodes,o=c.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(m.b,{to:"/episode/".concat(e.id)},r.a.createElement("li",null,e.name)))})),l=c.length;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:n,alt:"pic of character"})),r.a.createElement("div",null,"Name: ",t),r.a.createElement("div",null,"Status: ",a),r.a.createElement("div",null,"Number of Episodes Appeared in: ",l),r.a.createElement("hr",null),r.a.createElement("div",null,"List of Episode Appearance:",r.a.createElement("ul",null,o)))}}]),a}(n.Component),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={name:"",airdate:"",episode:"",characters:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,a,n,r,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(j,"episode/").concat(this.props.match.params.sis));case 2:return t=e.sent,a=t.data,n=a.characters.map((function(e){return e.substring(e.lastIndexOf("/")+1)})),r=n.join(","),e.next=8,v.a.get("".concat(j,"/character/").concat(r));case 8:c=e.sent,o=c.data,this.setState({name:a.name,airdate:a.air_date,episode:a.episode,characters:o});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.airdate,n=e.episode,c=e.characters.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(m.b,{to:"/characterbio/".concat(e.id)},r.a.createElement("li",null,e.name)))}));return r.a.createElement("div",null,"Episode name : ",t,r.a.createElement("br",null),n,r.a.createElement("br",null),"Air Date: ",a,r.a.createElement("br",null),r.a.createElement("ul",null,"Character Appearances: ",c))}}]),a}(n.Component),C=a(32),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={allEpisodes:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(k.a.mark((function e(){var t,a,n,r,c,o,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.all([v.a.get("".concat(j,"/episode/?page=1")),v.a.get("".concat(j,"/episode/?page=2"))]);case 2:t=e.sent,a=Object(C.a)(t,2),n=a[0],r=a[1],c=n.data.results,o=r.data.results,l=c.concat(o),this.setState({allEpisodes:l});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.allEpisodes.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(m.b,{to:"/episode/".concat(e.id)},e.name))}));return r.a.createElement("div",null,e)}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("hr",null),r.a.createElement(p.a,{exact:!0,path:"/",component:h}),r.a.createElement(p.a,{path:"/maincast",component:O}),r.a.createElement(p.a,{path:"/characterbio/:bro",component:w}),r.a.createElement(p.a,{path:"/episodelisting",component:M}),r.a.createElement(p.a,{path:"/episode/:sis",component:x})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.cfce64b1.chunk.js.map