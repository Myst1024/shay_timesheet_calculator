(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,t){e.exports=t(59)},44:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(6),r=t.n(c),u=(t(44),t(24)),o=t(15),i=t(29),l=t(25),m=t(28),h=t(86),d=function(e){function a(){return Object(u.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(h.a,{type:"time",value:this.props.time,onChange:function(a){e.props.updatePunch(e.props.dayIndex,e.props.punchIndex,a.target.value)}}))}}]),a}(s.a.Component);var p=function(e){return s.a.createElement("div",{className:"dayContainer"},s.a.createElement("h3",null,e.name,":"),s.a.createElement("h3",null,e.hours,"H ",e.minutes,"M"),s.a.createElement("div",{className:"punchContainer"},e.punches.map(function(a,t){return s.a.createElement(d,{key:t,day:e.name,time:a,dayIndex:e.dayIndex,punchIndex:t,updatePunch:e.updatePunch})})))};var y=function(e){return s.a.createElement("div",{className:"totals"},"totals")},v=(t(58),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(i.a)(this,Object(l.a)(a).call(this,e))).setTotals=function(e,a,n){var s=t.state.days;s[e].hours=a,s[e].minutes=n,t.setState({days:s})},t.totalDay=function(e,a){function n(e){return Date.parse("01 Jan 2000 "+e+" GMT")}for(var s=0,c=0;c<e.length;){if(c%2===0){var r=n(e[c]);s+=(n(e[c+1])-r)/6e4}c+=2}var u=Math.floor(s/60),o=s%60;t.setTotals(a,u,o),console.log(u,o)},t.updatePunch=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"00:00",s=t.state.days;s[e],s[e].punches[a]=n,t.totalDay(s[e].punches,e),t.setState({days:s})},t.state={days:[{name:"Sunday",punches:["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],hours:0,minutes:0},{name:"Monday",punches:["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],hours:0,minutes:0},{name:"Tuesday",punches:["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],hours:0,minutes:0},{name:"Wednesday",punches:["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],hours:0,minutes:0},{name:"Thursday",punches:["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],hours:0,minutes:0},{name:"Friday",punches:["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],hours:0,minutes:0},{name:"Saturday",punches:["00:00","00:00","00:00","00:00","00:00","00:00","00:00","00:00"],hours:0,minutes:0}]},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state.days.map(function(a,t){return s.a.createElement(p,{key:a.name,name:a.name,dayIndex:t,punches:a.punches,updatePunch:e.updatePunch.bind(e),setTotals:e.setTotals.bind(e),hours:a.hours,minutes:a.minutes})});return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{className:"cat",alt:"Cat.",src:"https://cataas.com/cat"}),s.a.createElement("div",{className:"headerText"},s.a.createElement("h1",null,"Shay's Fancy Timesheet Calculator"),s.a.createElement("span",null,"\u23f2")),s.a.createElement("img",{className:"cat",alt:"Cat.",src:"https://cataas.com/cat?type=or"})),s.a.createElement("div",{className:"calculator"},a),s.a.createElement(y,{days:this.state.days}))}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.ebb156db.chunk.js.map