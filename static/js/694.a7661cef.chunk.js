"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[694],{694:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(885),a=n(48),s=n(791),c=function(e){return e.filter},i=n(273),u=n(861),o=n(757),l=n.n(o),p=n(44).ZP.create({baseURL:"https://6363c7828a3337d9a2e7a4e3.mockapi.io/api/contacts",params:{_limit:12}}),d=function(){var e=(0,u.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,u.Z)(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.post("/",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,u.Z)(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete("/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(299),v=n(620),x=(0,v.hg)("contacts/fetch",function(){var e=(0,u.Z)(l().mark((function e(t,n){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,d();case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),b=((0,v.hg)("contacts/add",function(){var e=(0,u.Z)(l().mark((function e(t,n){var r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,m(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),{condition:function(e,t){if(function(e,t){var n=e.name,r=e.number;return t.find((function(e){return e.name===n&&e.number===r}))}(e,(0,t.getState)().contacts.items))return f.Report.warning("Warning","User is already in the contact list.")}}),(0,v.hg)("contacts/remove",function(){var e=(0,u.Z)(l().mark((function e(t,n){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,h(t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),n(350)),j=n(942),g=n(413),_=n(984),w="ContactForm_title__agZmt",C="ContactForm_inputForm__Ug5Wb",y="ContactForm_addBtn__-sK18",k=n(184),Z={name:"",number:""};function N(e){var t=e.onSubmit,n=(0,s.useState)(Z),a=(0,r.Z)(n,2),c=a[0],i=a[1],u=(0,_.x0)(),o=(0,_.x0)(),l=function(e){var t=e.target,n=t.name,r=t.value;i((function(e){return(0,g.Z)((0,g.Z)({},e),{},(0,j.Z)({},n,r))}))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h1",{children:"Phonebook"}),(0,k.jsx)("fieldset",{children:(0,k.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=c.name,r=c.number;t({name:n,number:r}),i(Z)},children:[(0,k.jsxs)("label",{children:[(0,k.jsx)("h2",{className:w,children:"Name"}),(0,k.jsx)("input",{className:C,id:u,type:"text",value:c.name,name:"name",onChange:l,placeholder:"Please enter your full name ",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)("label",{children:[(0,k.jsx)("h2",{className:w,children:"Number"}),(0,k.jsx)("input",{className:C,id:o,type:"tel",name:"number",onChange:l,value:c.number,placeholder:"Please enter your number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)("button",{className:y,children:"Add Contact"})]})})]})}var F=n(7),q=n.n(F),R={remoteBtn:"ContactList_remoteBtn__B9W9v"};function S(e){var t=e.items,n=(0,b.MG)(),a=(0,r.Z)(n,1)[0],s=t.map((function(e){var t=e.name,n=e.number,r=e.id;return(0,k.jsxs)("li",{className:R.contactListItem,children:[t," : ",n," ",(0,k.jsx)("button",{className:R.remoteBtn,onClick:function(){return a(r)},children:"x"})]},r)}));return(0,k.jsx)("div",{children:(0,k.jsx)("ol",{children:s})})}function L(e){var t=e.filter,n=e.onChangeFilter;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h1",{children:"Contacts"}),(0,k.jsx)("p",{children:"Find contact by name:"}),(0,k.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})}S.prototype={items:q().arrayOf(q().shape({id:q().string.isRequired,name:q().string.isRequired,number:q().string.isRequired})).isRequired,removeContact:q().func.isRequired},L.prototype={filter:q().string.isRequired,changeFilter:q().func.isRequired};var A="Section_section__HDZEH",B="Section_container__-QgOu",W="Section_title__kp0vp",P=function(e){var t=e.children,n="Task - 2 Contact book";return(0,k.jsx)("section",{className:A,children:(0,k.jsxs)("div",{className:B,children:[(0,k.jsx)("h2",{className:W,children:n}),t]})})};P.prototype={title:q().string};var z=P;function E(){var e=(0,b.Tn)(),t=(0,r.Z)(e,1)[0],n=(0,b.wY)(),u=n.data,o=void 0===u?[]:u,l=n.isLoading,p=n.isSuccess,d=n.isError,m=(0,a.v9)(c),h=(0,a.I0)();(0,s.useEffect)((function(){h(x())}),[h]);var f=o.length;return(0,k.jsxs)(z,{children:[(0,k.jsx)(N,{onSubmit:function(e){t(e)}}),(0,k.jsx)(L,{onChangeFilter:function(e){var t=e.target.value;h((0,i.T)(t))},filter:m}),p&&f>0?(0,k.jsx)(S,{items:o.filter((function(e){var t=e.name,n=e.number;return t.toLocaleLowerCase().includes(m.toLocaleLowerCase())||n.includes(m)})).sort((function(e,t){return e.name.localeCompare(t.name)}))}):(0,k.jsx)("p",{children:"Contact list is empty."}),l&&(0,k.jsx)("p",{children:"...loading"}),d&&(0,k.jsx)("p",{children:"oops, something went wrong"})]})}var T=function(){return(0,k.jsx)("div",{className:"container",children:(0,k.jsx)(E,{})})}}}]);
//# sourceMappingURL=694.a7661cef.chunk.js.map