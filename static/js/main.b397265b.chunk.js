(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){e.exports=a.p+"static/media/neboolar.06384dcb.png"},122:function(e,t,a){e.exports=a.p+"static/media/earthquakes.3084a24b.png"},123:function(e,t,a){e.exports=a.p+"static/media/promokey.ab297753.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/web_template.79c49baa.jpg"},125:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c),i=(a(102),a(2)),o=a(3),l=a(5),m=a(4),u=a(6),d=a(9),p=a(27),h=a(22),b=a.n(h),v=(a(113),a(54)),f=(a(114),v.a.ul({open:{x:"-50%",y:"-50%",delayChildren:600,staggerChildren:200},closed:{x:"-500%",delay:300}})),g=v.a.li({open:{y:0,opacity:1},closed:{y:20,opacity:0}}),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen}),document.querySelector(".hamburger").classList.toggle("is-active"),this.state.isOpen?document.body.style.overflowY="auto":document.body.style.overflowY="hidden",this.props.toggleOverlay()}},{key:"render",value:function(){var e=this,t=this.state.isOpen,a=["About","Resume","Projects","Contact"].map(function(t,a){return r.a.createElement(p.Link,{onClick:e.toggle.bind(e),key:a,to:t,spy:!0,smooth:!0,duration:1e3},r.a.createElement(g,{className:"item"},r.a.createElement("span",null,t)))});return[r.a.createElement("div",{key:"Nav",className:"Nav"},r.a.createElement("div",{className:"nav-button",onClick:this.toggle.bind(this)},r.a.createElement("button",{className:"hamburger hamburger--spin",type:"button"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"}))))),r.a.createElement(f,{key:"Sidebar",className:"sidebar",pose:t?"open":"closed"},a)]}}]),t}(n.Component),y=(a(115),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Hero"},r.a.createElement("div",{className:"gradient"}),r.a.createElement("div",{className:"mountains"}),r.a.createElement(b.a,{delay:500,top:!0},r.a.createElement("div",{className:"row-banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Hello, I'm ",r.a.createElement("span",null,"Nacho Cort\xe9s")," and I'm Front End developer")),r.a.createElement(p.Link,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},r.a.createElement("button",{className:"button"},"View my work",r.a.createElement("i",{className:"fas fa-arrow-right"}))))))}}]),t}(n.Component)),N=(a(116),a(83)),j=a.n(N),O=(a(117),a(84)),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={social:O.a},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.social.map(function(e,t){return r.a.createElement("li",{className:"social-item",key:t},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon fab fa-"+e.icon})))});return r.a.createElement("div",{className:"Social"},r.a.createElement("ul",{className:"social-list"},e))}}]),t}(n.Component),w=(a(118),a(85)),S=a(23),C=a.n(S),A=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={bars:w.a},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.bars.map(function(e,t){return r.a.createElement("div",{className:"bar-flex",key:t},r.a.createElement(C.a,{left:!0,cascade:!0},r.a.createElement("div",{className:"bar-fill",style:{width:e.percent+"%"}}),r.a.createElement("div",{className:"tag"},e.name)),r.a.createElement("span",{className:"percent"},e.percent,"%"))});return r.a.createElement("div",{className:"Bars"},e)}}]),t}(n.Component),x=a(37),I=a.n(x),M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-section row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(I.a,{left:!0,cascade:!0},r.a.createElement("div",{className:"placeholder-box"},r.a.createElement("div",{className:"placeholder gradient-box"},r.a.createElement("img",{src:j.a,alt:"Nacorga"})))),r.a.createElement("div",{className:"row-text"},r.a.createElement("h3",null,"Who's this guy?"),r.a.createElement("p",null,"I'm a Madrid based ",r.a.createElement("span",null,"Front End developer "),"who creates powerful ",r.a.createElement("span",null,"applications")," and ",r.a.createElement("span",null,"websites"),". I could define myself as a detailist, committed and lover of nature, sport and photography.")),r.a.createElement(k,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(A,null)))}}]),t}(n.Component),q=(a(119),a(86)),F=a(87),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={education:q.a,works:F.a},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.education.map(function(e,t){return r.a.createElement("li",{className:"list-item",key:t},r.a.createElement("h3",{className:"item-title"},e.school),r.a.createElement("p",{className:"item-info"},r.a.createElement("span",{className:"work-role"},e.certificate),r.a.createElement("span",{className:"ball-separator"},"\u2022"),r.a.createElement("span",{className:"item-dates"},e.dates)))}),t=this.state.works.map(function(e,t){return r.a.createElement("li",{className:"list-item",key:t},r.a.createElement("h3",{className:"item-title"},e.title),r.a.createElement("p",{className:"item-info"},r.a.createElement("span",{className:"work-role"},e.role),r.a.createElement("span",{className:"ball-separator"},"\u2022"),r.a.createElement("span",{className:"item-dates"},e.dates)),r.a.createElement("p",{className:"item-description"},e.description),r.a.createElement("div",{className:"pills"},e.technologies.map(function(e,t){return r.a.createElement("span",{className:"badge badge-pill",key:t},e)})))});return r.a.createElement("div",{className:"resume-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(C.a,{left:!0},r.a.createElement("h2",{className:"resume-title"},r.a.createElement("span",null,"Education")))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("ul",{className:"education-list"},r.a.createElement(C.a,{right:!0},e)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(C.a,{left:!0},r.a.createElement("h2",{className:"resume-title"},r.a.createElement("span",null,"Works")))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("ul",{className:"works-list"},r.a.createElement(C.a,{right:!0},t))))))}}]),t}(n.Component),J=(a(120),[{title:"Neboolar",technology:"Next.js",img:a(121),description:"Recruitment platform for digital profiles that aims to facilitate the selection process.",url:"https://www.neboolar.com/"},{title:"Earthquakes Map Visualizer",technology:"React.js",img:a(122),description:"Web app where you can view earthquakes worldwide filtered by date or date range.",url:"https://nacorga.github.io/earthquakes-map-visualizer/"},{title:"Promokey",technology:"MEAN",img:a(123),description:"Web tool to manage the information of companies dedicated to promotional gifts.",url:"https://www.promokey.io"},{title:"Web template",technology:"HTML / CSS / Jquery",img:a(124),description:"A template for a service company.",url:"https://nacorga.github.io/service-web-template/"}]),L=(a(125),a(88)),R=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{open:this.props.open,lockScroll:!0,contentStyle:{maxWidth:"850px",width:"90%"},onClose:this.props.closeFromChild},function(t){return r.a.createElement("div",{className:"react-modal"},r.a.createElement("div",{onClick:t,className:"close-box"},r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("div",{className:"react-modal-body"},r.a.createElement("div",{className:"modal-text"},r.a.createElement("h3",{className:"react-modal-title"},e.props.data.title),r.a.createElement("p",{className:"react-modal-subtitle"},e.props.data.technology),r.a.createElement("p",{className:"react-modal-description"},e.props.data.description),r.a.createElement("a",{className:"react-modal-link",href:e.props.data.url,target:"_blank",rel:"noopener noreferrer"},"Go to this project")),r.a.createElement("div",{className:"image-box"},r.a.createElement("img",{src:e.props.data.img,alt:e.props.data.title}))))}))}}]),t}(n.Component),G=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projects:J,project:void 0,open:!1},e.openModal=e.openModal.bind(Object(d.a)(Object(d.a)(e))),e.closeModal=e.closeModal.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"openModal",value:function(e){this.setState({project:e,open:!0})}},{key:"closeModal",value:function(){this.setState({project:void 0,open:!1})}},{key:"render",value:function(){var e=this,t=this.state.projects.map(function(t,a){return r.a.createElement("div",{className:"project",style:{backgroundImage:"url("+t.img+")"},key:a},r.a.createElement("div",{className:"text"},r.a.createElement("h3",{className:"project-title"},t.title),r.a.createElement("p",{className:"project-type"},t.technology)),r.a.createElement("div",{className:"button",onClick:e.openModal.bind(e,t)},"Learn more"))});return[r.a.createElement(I.a,{bottom:!0,cascade:!0,key:"flip"},r.a.createElement("div",{className:"projects-section"},t)),r.a.createElement(R,{key:"popup",data:this.state.project,open:this.state.open,closeFromChild:this.closeModal})]}}]),t}(n.Component),W=a(89),H=a(38),P=a(39),_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.errorMessages,t.validators,t.requiredError,t.validatorListener,Object(P.a)(t,["errorMessages","validators","requiredError","validatorListener"]));return r.a.createElement("div",{className:"form-group"},r.a.createElement(this.props.type,Object.assign({className:"form-control",placeholder:this.props.name},a,{ref:function(t){e.input=t}})),this.errorText())}},{key:"errorText",value:function(){return this.state.isValid?null:r.a.createElement("div",{className:"text-validator"},this.getErrorMessage())}}]),t}(H.ValidatorComponent),V=a(95),z=a.n(V),B=a(53),D=a.n(B),Y=a(91),K=a.n(Y),U=a(93),X=a.n(U),$=a(15),Q=a.n($),Z=a(94),ee={success:K.a};var te=Object(Z.withStyles)(function(e){return{success:{backgroundColor:X.a[600]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,a=e.className,n=e.message,c=(e.onClose,e.variant),s=Object(P.a)(e,["classes","className","message","onClose","variant"]),i=ee[c];return r.a.createElement(D.a,Object.assign({className:Q()(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(i,{className:Q()(t.icon,t.iconVariant)}),n)},s))}),ae=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:this.props.open,autoHideDuration:6e3,onClose:this.props.closeFromChild},r.a.createElement(te,{onClose:this.props.closeFromChild,variant:"success",message:"Your message have been sent"})))}}]),t}(n.Component),ne=a(96),re=(a(218),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={open:!1,name:"",email:"",message:""},e.handleInput=e.handleInput.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.closeSnackbar=e.closeSnackbar.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleInput",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(W.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.persist();var a={from_name:this.state.name,from_email:this.state.email,message:this.state.message};Object(ne.send)("service_cxkhhf4","template_fzjj2ys",a,"user_k4vl8k8WRcivwKWzwcPtc").then(function(){t.setState({open:!0}),t.setState({name:"",email:"",message:""})}).catch(function(){alert("An error occurred, Please try again")})}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return[r.a.createElement(ae,{key:"Sanckbar",open:this.state.open,closeFromChild:this.closeSnackbar}),r.a.createElement("div",{key:"Contact",className:"contact-section"},r.a.createElement("div",{className:"container"},r.a.createElement(b.a,{bottom:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"contact-title"},this.props.title))))),r.a.createElement(H.ValidatorForm,{id:"contact-form",className:"contact-form",ref:"form",onSubmit:this.handleSubmit,debounceTime:250},r.a.createElement(b.a,{bottom:!0},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(_,{onChange:this.handleInput,name:"name",type:"input",value:this.state.name,validators:["required","maxStringLength:25"],errorMessages:["This field is required","This field cannot be more than 25 characters long"]})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(_,{onChange:this.handleInput,name:"email",type:"input",value:this.state.email,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(_,{onChange:this.handleInput,name:"message",type:"textarea",value:this.state.message,validators:["required","maxStringLength:255"],errorMessages:["This field is required","This field cannot be more than 255 characters long"]}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"submit",className:"submit-btn float-right"},"Submit")))))))]}}]),t}(n.Component)),ce=(a(219),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(k,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",{className:"credits"},"NaCorGa ",r.a.createElement("span",null,"\xa92019")))))}}]),t}(n.Component)),se=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={show:!1},e.toggleOverlay=e.toggleOverlay.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggleOverlay",value:function(){document.querySelector(".overlay").classList.toggle("active"),this.setState({show:!this.state.show})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,{left:!0,when:this.state.show},r.a.createElement("div",{className:"overlay"})),r.a.createElement(E,{toggleOverlay:this.toggleOverlay}),r.a.createElement("div",{className:"Home"},r.a.createElement(y,null)),r.a.createElement("div",{className:"About bkg blue-dark vp"},r.a.createElement("div",{className:"container"},r.a.createElement(M,{title:"About me"}))),r.a.createElement("div",{className:"Resume bkg light vp"},r.a.createElement(T,{title:"Resume"})),r.a.createElement("div",{className:"Projects"},r.a.createElement(G,{title:"Projects"})),r.a.createElement("div",{className:"Contact bkg blue-light vp"},r.a.createElement(re,{title:"Have a question or want to work together?"})),r.a.createElement("div",{className:"bkg blue-dark"},r.a.createElement(p.Link,{activeClass:"active",to:"Home",spy:!0,smooth:!0,duration:1500},r.a.createElement("div",{className:"arrow-box"},r.a.createElement("i",{className:"fas fa-arrow-up"}))),r.a.createElement(ce,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a.p+"static/media/nacorga.93633836.png"},84:function(e){e.exports={a:[{name:"Linkedin",url:"https://www.linkedin.com/in/ignacio-cort%C3%A9s-72940b96/",icon:"linkedin"},{name:"Github",url:"https://github.com/Nacorga",icon:"github"},{name:"Stackoverflow",url:"https://stackoverflow.com/users/9490169/nacorga",icon:"stack-overflow"},{name:"Codepen",url:"https://codepen.io/Nacorga/",icon:"codepen"},{name:"Instagram",url:"https://www.instagram.com/wild_nach/",icon:"instagram"}]}},85:function(e){e.exports={a:[{name:"Angular",percent:90},{name:"Ionic",percent:85},{name:"React",percent:75},{name:"Typescript",percent:85},{name:"Javascript",percent:90},{name:"AWS",percent:65},{name:"Node.js",percent:75},{name:"Git",percent:90},{name:"HTML & CSS",percent:95}]}},86:function(e){e.exports={a:[{school:"Fictizia",certificate:"Angular 7",dates:"November 2018 - January 2019"},{school:"AEPI",certificate:"Javascript ES6",dates:"November 2017 - February 2018"},{school:"Discovery Formaci\xf3n",certificate:"Web and graphic design",dates:"October 2013 - March 2014"},{school:"Universidad Complutense de Madrid",certificate:"Geography university degree",dates:"September 2011 - June 2016"}]}},87:function(e){e.exports={a:[{title:"Ribera Salud",dates:"May 2020 - Present",description:"International project with an American multinational company for the development of its Health Platform using Angular as a framework and microfrontend architecture. In my position, I act as one of the leaders of the front end when it comes to decision making and team coordination.",role:"Senior Front End developer",technologies:["Angular","Typescript","Javascript","Git","Agile"]},{title:"Sopra Steria",dates:"February 2020 - April 2020",description:"Different projects within the company according to the client's needs such as the development from scratch of a hybrid application with Ionic for Banco Santander. I also participated in a training process with LitElement.",role:"Senior Front End developer",technologies:["Ionic 5","LitElement","Typescript","Javascript","Git","Agile"]},{title:"The Key Talent",dates:"April 2019 - February 2020",description:"Maintenance and development with Angular of new functionalities in applications related to the management of candidates for HR. All of this is done using agile methodologies, clean code and the use of Git.",role:"Front End developer",technologies:["Angular","Typescript","Javascript","Jquery","Git","Agile"]},{title:"Amaris",dates:"August 2018 - April 2019",description:"International project for the client AXA Seguros in collaboration with the United Arab Emirates and Saudi Arabia in which he was one of the people responsible for the renovation of its public portal via Liferay and Angular. All this using Agile methodologies and the use of Git.",role:"Front End developer",technologies:["Angular","Typescript","Javascript","Jquery","Git","Liferay DXP","Gulp","Agile"]},{title:"Hiberus Tecnolog\xeda",dates:"January 2018 to August 2018",description:"Project with the client RTVE in which he was one of the maintainers and developers of public apps and web portals using Angular, Ionic and React.",role:"Front End developer",technologies:["Angular","Ionic","React","Typescript","Javascript","Jquery"]},{title:"Grupo Octilus S.L.",dates:"March 2017 - January 2018",description:"Responsible for the design and layout of ecommerce about mobile accessories. I was also managing the content of the portal.",role:"Web master",technologies:["Javascript","Jquery","HTML5","CSS3","Illustrator","Photoshop"]}]}},97:function(e,t,a){e.exports=a(220)}},[[97,1,2]]]);
//# sourceMappingURL=main.b397265b.chunk.js.map