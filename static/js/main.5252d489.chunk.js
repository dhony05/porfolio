(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(14),o=t.n(c),l=(t(49),t(50),t(5)),i=t(6),s=t(8),m=t(7),d=t(9),h=t(42),u=t.n(h),p=t(1),f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{width:"100%",margin:"50%"}},n.a.createElement(p.Grid,{className:"landing-grid"},n.a.createElement(p.Cell,{col:12},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",null,"Software Engineer"),n.a.createElement("img",{src:"https://github.com/dhony05/first-page/blob/master/imgs/IMG_2797%202.jpg?raw=true",alt:"avatar",className:"avatar-img"}),n.a.createElement("h2",null,"Donelys Familia"),n.a.createElement("hr",null),n.a.createElement("div",{className:"social-links"},n.a.createElement("a",{href:"https://www.linkedin.com/in/donelysfa/",ref:"noopener noreferrer",target:"_black"},n.a.createElement("i",{className:"ani1 except bouci1 fab fa-linkedin-square ","aria-hidden":"true"})),n.a.createElement("a",{href:"https://github.com/dhony05",ref:"noopener noreferrer",target:"_black"},n.a.createElement("i",{className:"ani1 bouci1 fab fa-github-square","aria-hidden":"true"})),n.a.createElement("a",{href:"https://www.hackerrank.com/donelys05",ref:"noopener noreferrer",target:"_black"},n.a.createElement("i",{className:"ani1 bouci1 fab fa-hackerrank"})),n.a.createElement("a",{href:"https://www.codewars.com/users/dhony05",ref:"noopener noreferrer",target:"_black"},n.a.createElement("img",{src:u.a,className:"ani1 bouci1 codewars",alt:"code"})),n.a.createElement("a",{href:"http://dhonylearning.home.blog/",ref:"noopener noreferrer",target:"_black"},n.a.createElement("i",{className:"ani1 bouci1 fa fa-youtube-square","aria-hidden":"true"})),n.a.createElement("a",{href:"https://www.youtube.com/channel/UCYsrJPbVtQRvCfeBWY1IrvQ",ref:"noopener noreferrer",target:"_black"},n.a.createElement("i",{className:"ani1 bouci1 fa fa-youtube-square","aria-hidden":"true"})))))))}}]),a}(r.Component),g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(p.Grid,{className:"aboutme-body"},n.a.createElement(p.Cell,{col:12,style:{background:"rbga(,0,0,04)"}},n.a.createElement("div",{className:"box-container1"},n.a.createElement("div",{className:"box"},n.a.createElement("img",{src:"https://github.com/dhony05/first-page/blob/master/imgs/img/profile.jpg?raw=true",alt:"profile",className:"box-img"}),n.a.createElement("h1",null,"About Me"),n.a.createElement("p",null,"Hey! Welcome, my name is Donelys Familia."),n.a.createElement("p",null,"I graduated with a bachelor degree in computer science at CUNY Lehman College in 2018."),n.a.createElement("p",null,"In college I joined great clubs/organizations like NSBE, SHPE, and GDG which helped me to be more involved in the technology field and also to make connections.\xa0"),n.a.createElement("p",null,"Since I was a kid I was fascinated for technology and sciences, I wanted to know how everything works, fix it and create my own and that's why I decided to become part of this awesome field.")))))}}]),a}(r.Component),b=(t(40),function(e){return n.a.createElement("div",{className:"c-card"},n.a.createElement("a",{href:e.valueRef,target:"_black"},n.a.createElement("i",{className:e.icon})),n.a.createElement("p",null,e.value))}),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={contacts:[{id:"012",platform:"gmail",value:"donelysprivate@gmail.com",icon:"ani1 bouci1 c-card-icon far fa-envelope",valueRef:"mailto:donelysprivate@gmail.com"},{id:"013",platform:"phone",value:"(347) 549-8652",icon:"ani1 bouci1  c-card-icon fas fa-mobile",valueRef:"tel:3455498652"},{id:"014",platform:"skype",value:"donelys05",icon:"ani1 bouci1 c-card-icon fab fa-skype",valueRef:"skype:donelys05?chat"}]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.state.contacts.map((function(e){return n.a.createElement(b,{icon:e.icon,platform:e.platform,value:e.value,key:e.id,valueRef:e.valueRef})}))}}]),a}(r.Component),y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={showPlatforms:!1},t.tooglePlatforms=function(){console.log("clicked");var e=t.state.showPlatforms;t.setState({showPlatforms:!e})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact-body"},n.a.createElement("div",{className:"contact-info"},n.a.createElement(E,null)))}}]),a}(r.Component),v=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={activeTab:0},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"toggleCategories",value:function(){return 1===this.state.activeTab?n.a.createElement("div",null,n.a.createElement("div",{className:"projects-grid"},n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"afff",height:"176px",background:"url(https://cloud.githubusercontent.com/assets/23525836/23680700/28d4d366-035a-11e7-98fb-b9284c1b93ba.png) center / cover"}}," The Paint Project"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"This is a project similar to paint which you can use some of the functions to make your drawings ."),n.a.createElement(p.CardText,{style:{color:"white"}},"Japplet"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/The-paint-project",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github"))))),n.a.createElement(p.Card,{className:"card",classname:"content-wrap",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"white",height:"176px",background:"url(https://github.com/dhony05/Game/blob/master/dragonfiring.png?raw=true) center / cover"}}," Dragon firing"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"This project is a game developed using Japplet library. In this game users are able to earn point by firing/houses."),n.a.createElement(p.CardText,{style:{color:"white"}},"Japplet"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/Game",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github"))))),n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"White",height:"176px",background:"url(https://cloud.githubusercontent.com/assets/23525836/23681263/5d8b892c-035c-11e7-90b8-30125389d220.png) center / cover"}}," Asteroid"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},'This was my first project, back in 2015. A game based on one of the famous 90\'s games " Asteroid"'),n.a.createElement(p.CardText,{style:{color:"white"}},"Japplet"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/Asteroid-game",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github")))))),n.a.createElement("div",{className:"projects-grid",style:{paddingTop:"3em"}},n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"",height:"176px",background:"url(https://cloud.githubusercontent.com/assets/23525836/23682434/cc61b574-0361-11e7-969b-4436dbcc72b4.png) center / cover"}}," Mini Calculator"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"This project allows the users to use the four basic aritmethic properties."),n.a.createElement(p.CardText,{style:{color:"white"}},"Java"),n.a.createElement(p.CardActions,{className:"link",border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/Mini-Calculator",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github"))))))):0===this.state.activeTab?n.a.createElement("div",null,n.a.createElement("div",{className:"projects-grid"},n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"afff",height:"176px",background:"url(https://github.com/dhony05/first-page/blob/master/Screen%20Shot%202020-01-14%20at%203.50.19%20PM.png?raw=true) center / cover"}}," Medicinal herbs"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"This project provides the user a search of medicial herbs."),n.a.createElement(p.CardText,{style:{color:"white"}},"HTML | CSS | JavaScript"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/first-page",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github")),n.a.createElement("a",{href:"https://dhony05.github.io/first-page/HTML/projectDonelys.html",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Live Demo"))))),n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"afff",height:"176px",background:"url(https://github.com/dhony05/chefProject/blob/master/Screen%20Shot%202020-01-14%20at%205.08.17%20PM.png?raw=true) center / cover"}}," ChefUP"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"This project was developed in colaboration with a team of 4 developer. Fullstack implementation of a Direct-to-Kitchen Business using Angular and Spring Boot Rest API"),n.a.createElement(p.CardText,{style:{color:"white"}},"Java | SpringBoot | MySQL | Angular 7"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/chefProject",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github"))))),n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"afff",height:"176px",background:"url(https://github.com/dhony05/ArrayFreeLibrary-Angular/blob/master/Screen%20Shot%202020-01-14%20at%205.00.33%20PM.png?raw=true) center / cover"}}," Link Library"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"This application keep track of awesome links from around the internet."),n.a.createElement(p.CardText,{style:{color:"white"}},"Java | SpringBoot | MySQL | Angular 7"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/RestAPI-ArrayFreeLibrary",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github")))))),n.a.createElement("div",{className:"projects-grid"},n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"afff",height:"176px",background:"url(https://github.com/dhony05/4giving/blob/master/Screen%20Shot%202020-01-14%20at%2010.03.30%20PM.png?raw=true) center / cover"}}," 4giving"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"4giving is an application that allows you to search item donators around or be an item donator. It provides you a excelent RESTful API along with MongoDB functionality."),n.a.createElement(p.CardText,{style:{color:"white"}},"SpringBoot | React | MongoDB"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/4giving",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github"))))),n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"afff",height:"176px",background:"url(https://github.com/dhony05/Home-Recipes-ReactAPP/blob/master/Screen%20Shot%202020-01-14%20at%204.37.33%20PM.png?raw=true) center / cover"}}," Home recipe app"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"This project was created following Dev ed's videos on youtube. This application is build in React and consume edamam.com free API                        "),n.a.createElement(p.CardText,{style:{color:"white"}},"React"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/Home-Recipes-ReactAPP",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github"))))))):2===this.state.activeTab?n.a.createElement("div",null,n.a.createElement("div",{className:"projects-grid"},n.a.createElement(p.Card,{className:"card",shadow:5,style:{minWidth:"450",margin:"auto"}},n.a.createElement(p.CardTitle,{className:"face-face1",style:{color:"afff",height:"176px",background:"url(https://user-images.githubusercontent.com/23525836/32195508-d1b3d010-bd93-11e7-89fb-a269ac3438e1.png) center / cover"}}," Slot-machine"),n.a.createElement("div",{className:"face-face2"},n.a.createElement(p.CardText,{style:{color:"white"}},"Based on slot machine original game but using random numbers instead. There is two levels , one slot machine with 3 digits and another with 5 digits."),n.a.createElement(p.CardText,{style:{color:"white"}},"SWIFT | iOS"),n.a.createElement(p.CardActions,{border:!0},n.a.createElement("a",{href:"https://github.com/dhony05/Slot-machine",ref:"noopener noreferrer",target:"_black"},n.a.createElement(p.Button,{colored:!0},"Github"))))))):void 0}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"category-tabs projects-big-grid"},n.a.createElement(p.Tabs,{activeTab:this.state.activeTab,onChange:function(a){return e.setState({activeTab:a})},ripple:!0},n.a.createElement(p.Tab,{style:{color:"white"}},"JUMP/Collabera"),n.a.createElement(p.Tab,{style:{color:"white"}},"Java"),n.a.createElement(p.Tab,{style:{color:"white"}},"More")),n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:"12"},n.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),a}(r.Component),w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:12},n.a.createElement("div",{style:{display:"flex",marginLeft:"1rem"}}," ",this.props.skill,n.a.createElement("i",{style:{fontSize:"50px"},class:this.props.icon}),n.a.createElement(p.ProgressBar,{className:"progress",style:{marginLeft:"auto"},progress:this.props.progress,buffer:85}))))}}]),a}(r.Component),k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={skills:[{skillName:"Java",iconClass:"devicon-java-plain-wordmark colored",progress:"68"},{skillName:"JavaScript",iconClass:"devicon-javascript-plain colored",progress:"62"},{skillName:"Spring Boot",iconClass:"fa far fa-power-off iconGreen",progress:"59"},{skillName:"MySQL",iconClass:"devicon-mysql-plain-wordmark colored",progress:"56"},{skillName:"HTML",iconClass:"devicon-html5-plain-wordmark colored",progress:"55"},{skillName:"CSS",iconClass:"devicon-css3-plain-wordmark colored",progress:"50"},{skillName:"Boostrap",iconClass:"devicon-bootstrap-plain-wordmark colored",progress:"50"},{skillName:"React",iconClass:"devicon-react-original-wordmark colored",progress:"45"},{skillName:"MongoDB",iconClass:"devicon-mongodb-plain-wordmark colored",progress:"38"},{skillName:"Python",iconClass:"devicon-python-plain-wordmark colored",progress:"29"},{skillName:"Angular",iconClass:"devicon-angularjs-plain colored",progress:"20"},{skillName:"Graphql",iconClass:"icons8-graphql",progress:"20"},{skillName:"AWS",iconClass:"devicon-amazonwebservices-plain-wordmark colored",progress:"10"}]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.state.skills.map((function(e,a){return n.a.createElement(w,{skill:e.skillName,icon:e.iconClass,progress:e.progress})}))}}]),a}(r.Component),C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"skills-grid"},n.a.createElement("h1",null," Skills"),n.a.createElement("hr",null),n.a.createElement(p.Grid,null,n.a.createElement(p.Cell,{col:12},n.a.createElement(k,null))))}}]),a}(r.Component),N=t(4),j=function(){return n.a.createElement(N.c,null,n.a.createElement(N.a,{exact:!0,path:"/",component:f}),n.a.createElement(N.a,{exact:!0,path:"/aboutme",component:g}),n.a.createElement(N.a,{exact:!0,path:"/projects",component:v}),n.a.createElement(N.a,{exact:!0,path:"/myskills",component:C}),n.a.createElement(N.a,{exact:!0,path:"/contactme",component:y}))},T=t(10),x=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return window.innerWidth>700?n.a.createElement("div",{className:"demo-big-content"},n.a.createElement(p.Layout,null,n.a.createElement(p.Header,{className:"header-color",title:n.a.createElement(T.c,{style:{textDecoration:"none",color:"white"},to:"/"},"Profile"," "),scroll:!0},n.a.createElement(p.Navigation,null,n.a.createElement(T.c,{to:"/aboutme"},"About me"),n.a.createElement("a",{href:"https://drive.google.com/file/d/1jYPWM_KJPWZPA6_PBAHp1siSUQeBIiJE/view?usp=sharing",target:"_black"},"Resume"),n.a.createElement(T.c,{to:"/myskills"},"Skills"),n.a.createElement(T.c,{to:"/projects"},"Projects"),n.a.createElement(T.c,{to:"/contactme"},"Contact me"))),n.a.createElement(p.Content,null,n.a.createElement("div",{className:"page-content"}),n.a.createElement(j,null)))):n.a.createElement("div",{className:"demo-big-content"},n.a.createElement(p.Layout,null,n.a.createElement(p.Drawer,{style:{styles:{background:"white",color:"white"}},title:n.a.createElement(T.c,{style:{textDecoration:"none",color:"red"},to:"/"},"Profile"," ")},n.a.createElement(p.Navigation,null,n.a.createElement(T.c,{to:"/aboutme"},"About me"),n.a.createElement("a",{href:"https://drive.google.com/file/d/1jYPWM_KJPWZPA6_PBAHp1siSUQeBIiJE/view?usp=sharing",target:"_black"},"Resume"),n.a.createElement(T.c,{to:"/myskills"},"Skills"),n.a.createElement(T.c,{to:"/projects"},"Projects"),n.a.createElement(T.c,{to:"/contactme"},"Contact me"))),n.a.createElement(p.Content,null,n.a.createElement("div",{className:"page-content"}),n.a.createElement(j,null))))}}]),a}(r.Component);var O=function(){return n.a.createElement(T.b,{basename:"/"},n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(101),t(102);o.a.render(n.a.createElement(T.a,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},40:function(e,a,t){},42:function(e,a,t){e.exports=t.p+"static/media/codewars.a58eeebd.svg"},44:function(e,a,t){e.exports=t(103)},49:function(e,a,t){},50:function(e,a,t){}},[[44,1,2]]]);
//# sourceMappingURL=main.5252d489.chunk.js.map