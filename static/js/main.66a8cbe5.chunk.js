(this.webpackJsonpvisit_southampton=this.webpackJsonpvisit_southampton||[]).push([[0],{10:function(e,i,t){},37:function(e,i,t){"use strict";t.r(i);var s=t(1),u=t.n(s),a=t(11),n=t.n(a),l=t(8),r=t(3),c=(t(10),t.p+"static/media/souton.646e5a34.png"),o=t(0);function m(){var e={width:"50%",marginBottom:"10px"};return window.matchMedia("(max-width: 769px)").matches&&(e.width="100%"),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Southampton"})," is a city and port in Hampshire, South East England. It is located on the southern coast of Great Britain, approximately 70 miles (110 km) south-west of London and 15 miles (24 km) west of Portsmouth."]}),Object(o.jsx)("p",{children:"A major port, and close to the New Forest, it lies at the northernmost point of Southampton Water, at the confluence of the River Test and Itchen, with the River Hamble joining to the south."}),Object(o.jsx)("p",{children:"Southampton is noted for its as being the departure point for the RMS Titanic, and home to 500 of the people who perished onboard. The Spitfire was built in the city, and Southampton has a strong association with the Mayflower, being the departure point before the vessel was forced to return to Plymouth. More recently, Southampton is known the home port of some of the largest cruise ships in the world. Southampton is also one of the largest retail destinations in the South of England."}),Object(o.jsx)("p",{children:"The city was heavily bombed during the Second World War and was one of the major embarkation points for D-Day. It was also where troops left England for the Battle of Agincourt and was itself victim of a number of raids from French pirates in the Middle Ages, leading to the construction of the fortified town walls, many of which still stand today. Jane Austen also lived in Southampton for a number of years."}),Object(o.jsx)("p",{children:"Some notable employers in the city include the University of Southampton, Ordnance Survey, BBC South, Associated British Ports and Carnival UK."}),Object(o.jsx)("p",{children:"The unitary authority area of Southampton had a population of 253,651 at the 2011 census, making it one of the most populous cities in Southern England. Southampton forms part of the larger South Hampshire conurbation."}),Object(o.jsx)("img",{src:c,style:e,alt:"flag of southampton"})]})}var d=t(5);function p(){var e=Object(s.useState)(0),i=Object(d.a)(e,2),t=i[0],u=i[1],a=Object(s.useState)(0),n=Object(d.a)(a,2),l=n[0],r=n[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{id:"filterWrapper",children:[Object(o.jsxs)("details",{children:[Object(o.jsx)("summary",{children:"Filters"}),Object(o.jsx)("label",{htmlFor:"restFilter",className:"filter",children:"Food type: "}),Object(o.jsx)("div",{children:Object(o.jsxs)("select",{name:"restFilter",id:"restFilter",defaultValue:"default",onChange:function(e){u({value:e.target.value}),console.log("User filtered Food type by: "+e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"None"}),Object(o.jsxs)("optgroup",{label:"Restaurants",children:[Object(o.jsx)("option",{value:"Dolly Dimples",children:"Dolly Dimples"}),Object(o.jsx)("option",{value:"Peppes Pizza",children:"Peppes Pizza"}),Object(o.jsx)("option",{value:"Egon",children:"Egon"})]}),Object(o.jsxs)("optgroup",{label:"Fast Foods",children:[Object(o.jsx)("option",{value:"McDonalds",children:"McDonalds"}),Object(o.jsx)("option",{value:"Dominos",children:"Dominos"}),Object(o.jsx)("option",{value:"KFC",children:"KFC"})]})]})}),Object(o.jsx)("label",{htmlFor:"eventFilter",className:"filter",children:"Event type: "}),Object(o.jsx)("div",{children:Object(o.jsxs)("select",{name:"eventFilter",id:"eventFilter",defaultValue:"default",onChange:function(e){r({value:e.target.value}),console.log("User filtered Event by: "+e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"None"}),Object(o.jsx)("option",{value:"Fiesta",children:"Fiesta"}),Object(o.jsx)("option",{value:"Party",children:"Party"}),Object(o.jsx)("option",{value:"LAN",children:"LAN"})]})})]}),Object(o.jsx)("div",{id:"filterSumWrapper",children:Object(o.jsxs)("p",{id:"filterSum",children:["Filters applied: ",Object(o.jsx)("b",{children:t.value}),", ",Object(o.jsx)("b",{children:l.value})]})})]})})}function h(){return Object(o.jsxs)("div",{id:"placesWrapper",children:[Object(o.jsx)(p,{}),Object(o.jsxs)("div",{id:"placesContent",children:[Object(o.jsx)("h2",{children:"Places and Events to visit and try out!"}),Object(o.jsx)("p",{children:"proof that the filter isnt pushing content"})]})]})}var v=t(20),b=t.n(v);function j(){var e=Object(s.useRef)(null),i=Object(s.useRef)(null),t=Object(s.useState)(-1.4072),u=Object(d.a)(t,2),a=u[0],n=u[1],l=Object(s.useState)(50.901),r=Object(d.a)(l,2),c=r[0],m=r[1],p=Object(s.useState)(12.95),h=Object(d.a)(p,2),v=h[0],j=h[1];return Object(s.useEffect)((function(){i.current||(i.current=new b.a.Map({container:e.current,style:"mapbox://styles/anarchytrex/ckrqwu646627y19o1yailgj6z",center:[a,c],zoom:v}))})),Object(s.useEffect)((function(){i.current&&i.current.on("move",(function(){n(i.current.getCenter().lng.toFixed(4)),m(i.current.getCenter().lat.toFixed(4)),j(i.current.getZoom().toFixed(2))}))})),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"sidebar",children:["Longitude: ",a," | Latitude: ",c," | Zoom: ",v]}),Object(o.jsx)("div",{ref:e,className:"map-container"})]})}b.a.accessToken="pk.eyJ1IjoiYW5hcmNoeXRyZXgiLCJhIjoiY2tzZWcxbXRkMGdveTMwb2Y5emJiYWIzayJ9.TLf8xLuGslSixuDMhQd_rQ";var g=t(12),f=t(14);function q(){var e=u.a.useState(!1),i=Object(d.a)(e,2),t=i[0],s=i[1],a=u.a.useState(f.a),n=Object(d.a)(a,2),r=n[0],c=n[1],m=u.a.useState(!1),p=Object(d.a)(m,2),h=p[0],v=p[1],b=["menu"];t&&b.push("toggled");var j=function(){if(window.matchMedia("(min-width: 769px)").matches){var e=window.scrollY;e>150&&v(!0),e<=150&&v(!1)}if(window.matchMedia("(max-width: 425px)").matches){var i=window.scrollY;i>100&&v(!0),i<=100&&v(!1)}if(window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches){var t=window.scrollY;t>100&&v(!0),t<=100&&v(!1)}};function q(){!0===t&&(c(f.a),s(!1)),!1===t&&(c(f.c),s(!0))}return u.a.useEffect((function(){window.addEventListener("scroll",j)})),h&&b.push("scrolledBurg"),Object(o.jsxs)("div",{children:[Object(o.jsx)(g.a,{icon:r,onClick:q}),Object(o.jsxs)("div",{className:b.join(" "),children:[Object(o.jsx)("h2",{className:"About",children:Object(o.jsx)(l.b,{to:"About",onClick:q,children:"About"})}),Object(o.jsx)("h2",{className:"PlacesPhone",children:Object(o.jsx)(l.b,{to:"PlacesToVisit",onClick:q,children:"Places To Visit"})}),Object(o.jsx)("h2",{className:"Map",children:Object(o.jsx)(l.b,{to:"Map",onClick:q,children:"Map"})})]})]})}function x(){var e=u.a.useState(!1),i=Object(d.a)(e,2),t=i[0],a=i[1],n=function(){if(window.matchMedia("(min-width: 769px)").matches){var e=window.scrollY;e>150&&a(!0),e<=150&&a(!1)}if(window.matchMedia("(max-width: 425px)").matches){var i=window.scrollY;i>100&&a(!0),i<=100&&a(!1)}if(window.matchMedia("(min-width: 426px) and (max-width: 768px)").matches){var t=window.scrollY;t>100&&a(!0),t<=100&&a(!1)}};Object(s.useEffect)((function(){window.addEventListener("scroll",n)}));var r=["navbar"];return t&&r.push("scrolled"),Object(o.jsxs)("div",{className:r.join(" "),children:[Object(o.jsx)("div",{id:"Hamburger",children:Object(o.jsx)(q,{})}),Object(o.jsx)("div",{className:"navleft",children:Object(o.jsx)("h1",{id:"Title",children:Object(o.jsx)(l.b,{to:"/",children:"Visit Southampton"})})}),Object(o.jsxs)("div",{className:"navright",children:[Object(o.jsx)("h2",{id:"Home",children:Object(o.jsx)(l.b,{to:"/",children:"Home"})}),Object(o.jsx)("h2",{id:"About",children:Object(o.jsx)(l.b,{to:"About",children:"About"})}),Object(o.jsx)("h2",{id:"Places",children:Object(o.jsx)(l.b,{to:"PlacesToVisit",children:"Places To Visit"})}),Object(o.jsx)("h2",{id:"Map",children:Object(o.jsx)(l.b,{to:"Map",children:"Map"})}),Object(o.jsx)("div",{id:"Search",children:Object(o.jsxs)("form",{action:"https://visitsouthampton.co.uk/search-results",target:"_blank",children:[Object(o.jsx)("input",{className:"searchfield",type:"form",placeholder:"Search...",name:"q"}),Object(o.jsx)("button",{className:"searchbutton",type:"submit",children:Object(o.jsx)(g.a,{icon:f.b})})]})})]})]})}var O=t.p+"static/media/demo.32647d13.mp4",S=t.p+"static/media/hero.86469438.jpg";function M(){var e=Object(s.useRef)(null);var i=Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,width:"100%",height:"auto",poster:"https://dc-southampton.s3.amazonaws.com/videos/southampton-hero-video-poster.jpg?mtime=20190926112353&focal=none",children:Object(o.jsx)("source",{src:O,type:"video/mp4"})})}),Object(o.jsx)("div",{ref:e,children:Object(o.jsx)("span",{onClick:function(){e.current.scrollIntoView({block:"start",behavior:"smooth"})},className:"material-icons",id:"arrowdown",children:"south"})}),Object(o.jsxs)("div",{id:"mainContent",children:[Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."})]})]}),t=Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:S,alt:"Hero",style:{width:"100%"}})}),Object(o.jsxs)("div",{id:"mainContent",children:[Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci. Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci. Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa. Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem. Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed."})]})]});return window.matchMedia("(min-width: 769px)").matches?i:t}var P=t(16);function w(){return Object(o.jsxs)("div",{id:"footer",children:[Object(o.jsx)("div",{id:"Creator",children:Object(o.jsx)("h2",{children:"\xa9 Copyright 2021 Andre Hagen"})}),Object(o.jsxs)("div",{id:"Info",children:[Object(o.jsx)("h3",{children:"Our Socials"}),Object(o.jsxs)("div",{id:"socials",children:[Object(o.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(g.a,{icon:P.c,style:{fontSize:"24px"}})}),Object(o.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(g.a,{icon:P.a,style:{fontSize:"24px"}})}),Object(o.jsx)("a",{href:"https://github.com/KodeAndre",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(g.a,{icon:P.b,style:{fontSize:"24px"}})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(g.a,{icon:P.d,style:{fontSize:"24px"}})})]})]})]})}function N(){return Object(o.jsx)(s.Suspense,{fallback:"loading",children:Object(o.jsx)("div",{id:"appBody",children:Object(o.jsxs)(l.a,{basename:"/visit_southampton",children:[Object(o.jsxs)("div",{id:"main",children:[Object(o.jsx)("div",{className:"nav-wrapper",children:Object(o.jsx)(x,{})}),Object(o.jsx)("div",{id:"content",children:Object(o.jsx)(r.c,{children:Object(o.jsx)(r.a,{exact:!0,path:"/",component:M})})}),Object(o.jsx)("div",{id:"about",children:Object(o.jsx)(r.c,{children:Object(o.jsx)(r.a,{path:"/About",component:m})})}),Object(o.jsx)("div",{id:"areamap",children:Object(o.jsx)(r.c,{children:Object(o.jsx)(r.a,{path:"/Map",component:j})})}),Object(o.jsx)("div",{id:"places",children:Object(o.jsx)(r.c,{children:Object(o.jsx)(r.a,{path:"/PlacesToVisit",component:h})})})]}),Object(o.jsx)("div",{id:"footer-wrapper",style:{height:"50px"},children:Object(o.jsx)(w,{})})]})})})}n.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.66a8cbe5.chunk.js.map