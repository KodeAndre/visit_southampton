(this.webpackJsonpvisit_southampton=this.webpackJsonpvisit_southampton||[]).push([[0],{37:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),n=i(9),c=i.n(n),r=i(10),u=i(3),o=(i(8),i.p+"static/media/souton.646e5a34.png"),l=i(0);function d(){var e={width:"50%",marginBottom:"10px"};return window.matchMedia("(max-width: 769px)").matches&&(e.width="100%"),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Southampton"})," is a city and port in Hampshire, South East England. It is located on the southern coast of Great Britain, approximately 70 miles (110 km) south-west of London and 15 miles (24 km) west of Portsmouth."]}),Object(l.jsx)("p",{children:"A major port, and close to the New Forest, it lies at the northernmost point of Southampton Water, at the confluence of the River Test and Itchen, with the River Hamble joining to the south."}),Object(l.jsx)("p",{children:"Southampton is noted for its as being the departure point for the RMS Titanic, and home to 500 of the people who perished onboard. The Spitfire was built in the city, and Southampton has a strong association with the Mayflower, being the departure point before the vessel was forced to return to Plymouth. More recently, Southampton is known the home port of some of the largest cruise ships in the world. Southampton is also one of the largest retail destinations in the South of England."}),Object(l.jsx)("p",{children:"The city was heavily bombed during the Second World War and was one of the major embarkation points for D-Day. It was also where troops left England for the Battle of Agincourt and was itself victim of a number of raids from French pirates in the Middle Ages, leading to the construction of the fortified town walls, many of which still stand today. Jane Austen also lived in Southampton for a number of years."}),Object(l.jsx)("p",{children:"Some notable employers in the city include the University of Southampton, Ordnance Survey, BBC South, Associated British Ports and Carnival UK."}),Object(l.jsx)("p",{children:"The unitary authority area of Southampton had a population of 253,651 at the 2011 census, making it one of the most populous cities in Southern England. Southampton forms part of the larger South Hampshire conurbation."}),Object(l.jsx)("img",{src:o,style:e,alt:"flag of southampton"})]})}var m=i(5);function h(){var e=Object(s.useState)(0),t=Object(m.a)(e,2),i=t[0],a=t[1],n=Object(s.useState)(0),c=Object(m.a)(n,2),r=c[0],u=c[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{id:"filterWrapper",children:[Object(l.jsxs)("details",{children:[Object(l.jsx)("summary",{children:"Filters"}),Object(l.jsx)("label",{htmlFor:"restFilter",className:"filter",children:"Food type: "}),Object(l.jsx)("div",{children:Object(l.jsxs)("select",{name:"restFilter",id:"restFilter",defaultValue:"default",onChange:function(e){a({value:e.target.value}),console.log("User filtered Food type by: "+e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"None"}),Object(l.jsxs)("optgroup",{label:"Restaurants",children:[Object(l.jsx)("option",{value:"Dolly Dimples",children:"Dolly Dimples"}),Object(l.jsx)("option",{value:"Peppes Pizza",children:"Peppes Pizza"}),Object(l.jsx)("option",{value:"Egon",children:"Egon"})]}),Object(l.jsxs)("optgroup",{label:"Fast Foods",children:[Object(l.jsx)("option",{value:"McDonalds",children:"McDonalds"}),Object(l.jsx)("option",{value:"Dominos",children:"Dominos"}),Object(l.jsx)("option",{value:"KFC",children:"KFC"})]})]})}),Object(l.jsx)("label",{htmlFor:"eventFilter",className:"filter",children:"Event type: "}),Object(l.jsx)("div",{children:Object(l.jsxs)("select",{name:"eventFilter",id:"eventFilter",defaultValue:"default",onChange:function(e){u({value:e.target.value}),console.log("User filtered Event by: "+e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"None"}),Object(l.jsx)("option",{value:"Fiesta",children:"Fiesta"}),Object(l.jsx)("option",{value:"Party",children:"Party"}),Object(l.jsx)("option",{value:"LAN",children:"LAN"})]})})]}),Object(l.jsxs)("div",{id:"filterSumWrapper",children:[Object(l.jsx)("p",{style:{color:"#fafafa"},children:"(this is just an example filter picker)"}),Object(l.jsxs)("p",{id:"filterSum",children:["Filters applied: ",Object(l.jsx)("b",{children:i.value}),", ",Object(l.jsx)("b",{children:r.value})]})]})]})})}var p=[{id:"1",name:"Festival",info:"Fun festival for the family",category:"Events",image:"https://picsum.photos/0/0"},{id:"2",name:"Gallery",info:"Gallery of art",category:"Places",image:"https://picsum.photos/0/0"},{id:"3",name:"Statue of the lord",info:"The holy emperor",category:"Sightseeing",image:"https://picsum.photos/0/0"},{id:"4",name:"Egon",info:"Doesn't really exist there",category:"Restaurants",image:"https://picsum.photos/0/0"},{id:"5",name:"WcRonalds",info:"Fast food place",category:"Fast foods",image:"https://picsum.photos/0/0"},{id:"6",name:"Great Event",info:"Amazing and fun event",category:"Events",image:"https://picsum.photos/0/0"},{id:"7",name:"Great Event",info:"Amazing and fun event",category:"Events",image:"https://picsum.photos/0/0"},{id:"8",name:"Great Event",info:"Amazing and fun event",category:"Events",image:"https://picsum.photos/0/0"}];function j(e){var t=e.card;return Object(l.jsxs)("div",{id:"cardStyle",children:[Object(l.jsx)("img",{className:"cardImage",src:t.image,alt:t.name}),Object(l.jsxs)("div",{id:"cardTextContainer",children:[Object(l.jsx)("h2",{className:"cardName",children:t.name}),Object(l.jsx)("p",{className:"cardInfo",children:t.info})]})]})}function b(e){var t=Object(l.jsx)("div",{id:"cards",children:p.slice(0,3).map((function(e){return Object(l.jsx)(j,{card:e},e.id)}))}),i=Object(l.jsx)("div",{id:"cards",children:p.map((function(e){return Object(l.jsx)(j,{card:e},e.id)}))});return window.location.href.indexOf("PlacesToVisit")>-1?i:t}function v(){var e=Object(l.jsxs)("div",{id:"placesWrapper",children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{id:"placesContent",children:[Object(l.jsx)("h2",{children:"Places and Events to visit and try out!"}),Object(l.jsx)(b,{})]})]}),t=Object(l.jsxs)("div",{id:"placesContent",children:[Object(l.jsx)("h2",{children:"Places and Events to visit and try out!"}),Object(l.jsx)(b,{})]});return window.matchMedia("(min-width: 769px)").matches?e:t}var x=i(20),f=i.n(x);function O(){f.a.accessToken="pk.eyJ1IjoiYW5hcmNoeXRyZXgiLCJhIjoiY2tzZWcxbXRkMGdveTMwb2Y5emJiYWIzayJ9.TLf8xLuGslSixuDMhQd_rQ";var e=Object(s.useRef)(null),t=Object(s.useRef)(null),i=Object(s.useState)(-1.4072),a=Object(m.a)(i,2),n=a[0],c=a[1],r=Object(s.useState)(50.901),u=Object(m.a)(r,2),o=u[0],d=u[1],h=Object(s.useState)(12.95),p=Object(m.a)(h,2),j=p[0],b=p[1];return Object(s.useEffect)((function(){t.current||(t.current=new f.a.Map({container:e.current,style:"mapbox://styles/anarchytrex/ckrqwu646627y19o1yailgj6z",center:[n,o],zoom:j}))})),Object(s.useEffect)((function(){t.current&&t.current.on("move",(function(){c(t.current.getCenter().lng.toFixed(4)),d(t.current.getCenter().lat.toFixed(4)),b(t.current.getZoom().toFixed(2))}))})),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"sidebar",children:["Longitude: ",n," | Latitude: ",o," | Zoom: ",j]}),Object(l.jsx)("div",{ref:e,className:"map-container"})]})}var g=i(12),w=i(14);function y(){var e=a.a.useState(!1),t=Object(m.a)(e,2),i=t[0],s=t[1],n=a.a.useState(w.a),c=Object(m.a)(n,2),u=c[0],o=c[1],d=a.a.useState(!1),h=Object(m.a)(d,2),p=h[0],j=h[1],b=["menu"];i&&b.push("toggled");var v=function(){if(window.matchMedia("(min-width: 769px)").matches){var e=window.scrollY;e>150&&j(!0),e<=150&&j(!1)}if(window.matchMedia("(max-width: 425px)").matches){var t=window.scrollY;t>100&&j(!0),t<=100&&j(!1)}if(window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches){var i=window.scrollY;i>100&&j(!0),i<=100&&j(!1)}};function x(){!0===i&&(o(w.a),s(!1)),!1===i&&(o(w.c),s(!0))}return a.a.useEffect((function(){window.addEventListener("scroll",v)})),p&&b.push("scrolledBurg"),Object(l.jsxs)("div",{children:[Object(l.jsx)(g.a,{icon:u,onClick:x}),Object(l.jsxs)("div",{className:b.join(" "),children:[Object(l.jsx)("h2",{className:"About",children:Object(l.jsx)(r.b,{to:"About",onClick:x,children:"About"})}),Object(l.jsx)("h2",{className:"PlacesPhone",children:Object(l.jsx)(r.b,{to:"PlacesToVisit",onClick:x,children:"Places To Visit"})}),Object(l.jsx)("h2",{className:"Map",children:Object(l.jsx)(r.b,{to:"Map",onClick:x,children:"Map"})})]})]})}function q(){var e=a.a.useState(!1),t=Object(m.a)(e,2),i=t[0],n=t[1],c=function(){if(window.matchMedia("(min-width: 769px)").matches){var e=window.scrollY;e>150&&n(!0),e<=150&&n(!1)}if(window.matchMedia("(max-width: 425px)").matches){var t=window.scrollY;t>100&&n(!0),t<=100&&n(!1)}if(window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches){var i=window.scrollY;i>100&&n(!0),i<=100&&n(!1)}};Object(s.useEffect)((function(){window.addEventListener("scroll",c)}));var u=["navbar"];return i&&u.push("scrolled"),Object(l.jsxs)("div",{className:u.join(" "),children:[Object(l.jsx)("div",{id:"Hamburger",children:Object(l.jsx)(y,{})}),Object(l.jsx)("div",{className:"navleft",children:Object(l.jsx)("h1",{id:"Title",children:Object(l.jsx)(r.b,{to:"/",children:"Visit Southampton"})})}),Object(l.jsxs)("div",{className:"navright",children:[Object(l.jsx)("h2",{id:"Home",children:Object(l.jsx)(r.b,{to:"/",children:"Home"})}),Object(l.jsx)("h2",{id:"About",children:Object(l.jsx)(r.b,{to:"About",children:"About"})}),Object(l.jsx)("h2",{id:"Places",children:Object(l.jsx)(r.b,{to:"PlacesToVisit",children:"Places To Visit"})}),Object(l.jsx)("h2",{id:"Map",children:Object(l.jsx)(r.b,{to:"Map",children:"Map"})}),Object(l.jsx)("div",{id:"Search",children:Object(l.jsxs)("form",{action:"https://visitsouthampton.co.uk/search-results",target:"_blank",children:[Object(l.jsx)("input",{className:"searchfield",type:"form",placeholder:"Search...",name:"q"}),Object(l.jsx)("button",{className:"searchbutton",type:"submit",children:Object(l.jsx)(g.a,{icon:w.b})})]})})]})]})}var S=i.p+"static/media/demo.32647d13.mp4",M=i.p+"static/media/hero.86469438.jpg";function N(){var e=Object(s.useRef)(null);var t=Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,width:"100%",height:"auto",poster:"https://dc-southampton.s3.amazonaws.com/videos/southampton-hero-video-poster.jpg?mtime=20190926112353&focal=none",children:Object(l.jsx)("source",{src:S,type:"video/mp4"})})}),Object(l.jsx)("div",{ref:e,children:Object(l.jsx)("span",{onClick:function(){e.current.scrollIntoView({block:"start",behavior:"smooth"})},className:"material-icons",id:"arrowdown",children:"south"})}),Object(l.jsxs)("div",{id:"mainContent",children:[Object(l.jsx)(b,{}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."})]})]}),i=Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:M,alt:"Hero",style:{width:"100%"}})}),Object(l.jsxs)("div",{id:"mainContent",children:[Object(l.jsx)(b,{}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."})]})]});return window.matchMedia("(min-width: 769px)").matches?t:i}var P=i(16);function E(){return Object(l.jsxs)("div",{id:"footer",children:[Object(l.jsx)("div",{id:"Creator",children:Object(l.jsx)("h2",{children:"\xa9 Copyright 2021 Andre Hagen"})}),Object(l.jsxs)("div",{id:"Info",children:[Object(l.jsx)("h3",{children:"Our Socials"}),Object(l.jsxs)("div",{id:"socials",children:[Object(l.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(g.a,{icon:P.c,style:{fontSize:"24px"}})}),Object(l.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(g.a,{icon:P.a,style:{fontSize:"24px"}})}),Object(l.jsx)("a",{href:"https://github.com/KodeAndre",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(g.a,{icon:P.b,style:{fontSize:"24px"}})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(g.a,{icon:P.d,style:{fontSize:"24px"}})})]})]})]})}function A(){return Object(l.jsx)(s.Suspense,{fallback:"loading",children:Object(l.jsx)("div",{id:"appBody",children:Object(l.jsxs)(r.a,{basename:"/visit_southampton",children:[Object(l.jsxs)("div",{id:"main",children:[Object(l.jsx)("div",{className:"nav-wrapper",children:Object(l.jsx)(q,{})}),Object(l.jsx)("div",{id:"content",children:Object(l.jsx)(u.c,{children:Object(l.jsx)(u.a,{exact:!0,path:"/",component:N})})}),Object(l.jsx)("div",{id:"about",children:Object(l.jsx)(u.c,{children:Object(l.jsx)(u.a,{path:"/About",component:d})})}),Object(l.jsx)("div",{id:"areamap",children:Object(l.jsx)(u.c,{children:Object(l.jsx)(u.a,{path:"/Map",component:O})})}),Object(l.jsx)("div",{id:"places",children:Object(l.jsx)(u.c,{children:Object(l.jsx)(u.a,{path:"/PlacesToVisit",component:v})})})]}),Object(l.jsx)("div",{id:"footer-wrapper",style:{height:"50px"},children:Object(l.jsx)(E,{})})]})})})}c.a.render(Object(l.jsx)(A,{}),document.getElementById("root"))},8:function(e,t,i){}},[[37,1,2]]]);
//# sourceMappingURL=main.8292558b.chunk.js.map