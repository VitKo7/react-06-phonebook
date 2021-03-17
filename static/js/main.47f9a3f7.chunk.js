(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"App_container__w4DnA",contacts:"App_contacts__xo3vi",contactsTitle:"App_contactsTitle__ay-9i"}},17:function(t,e,n){t.exports={btnDelete:"ContactListItem_btnDelete__1xqAj"}},18:function(t,e,n){t.exports={list:"ContactList_list__1onB1",contactListItem:"ContactList_contactListItem__peSS3"}},21:function(t,e,n){t.exports={input:"Filter_input__3lw9u"}},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),s=n(3),i=n(7),l=n(8),u=n(11),b=n(10),d=n(9),j=n(23),m=n(5),h=n.n(m),p=n(1),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInput=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.contacts.find((function(t){return t.name===a||t.number===c}));if(r)alert("Either '".concat(r.name,"' or '").concat(r.number,"' already exists"));else if(0===a.length||0===c.length)alert("Please, fill in all the fields");else{var o={id:Object(j.a)(),name:a,number:c};t.props.createContact(o)}t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.addContactForm,children:[Object(p.jsx)("label",{className:h.a.label,children:"Name:"}),Object(p.jsx)("input",{name:"name",type:"text",placeholder:"Name Surname",className:h.a.input,onChange:this.handleInput,value:e}),Object(p.jsx)("label",{className:h.a.label,children:"Number:"}),Object(p.jsx)("input",{name:"number",type:"tel",placeholder:"123-456",pattern:"[0-9]{3}-[0-9]{3}",className:h.a.input,onChange:this.handleInput,value:n}),Object(p.jsxs)("span",{className:h.a.text,children:[Object(p.jsx)("i",{children:"Use this format only:"})," xxx-xxx"]}),Object(p.jsx)("button",{type:"submit",className:h.a.btnAdd,children:"Add contact"})]})})}}]),n}(a.Component),O={createContact:function(t){return{type:"contacts/createContact",payload:t}}},x=Object(s.b)((function(t){return{contacts:t.contacts}}),O)(f),v=n(4),_=n(17),C=n.n(_),y={handleRemove:function(t){return{type:"contacts/handleRemove",payload:t}}},N=Object(s.b)((function(t){return{}}),y)((function(t){var e=t.id,n=t.name,a=t.number,c=t.handleRemove;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{className:C.a.contact,children:[n,": ",a]}),Object(p.jsx)("button",{"data-id":e,onClick:function(t){return c(e)},type:"button",className:C.a.btnDelete,children:"Delete"})]})})),g=n(18),F=n.n(g),A=function(t){var e=t.filter;return t.contacts.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},w=Object(s.b)((function(t){return{contacts:A(t)}}),{})((function(t){var e=t.contacts;return Object(p.jsx)("div",{className:"contactsList",children:0===e.length?Object(p.jsx)("p",{children:"There are no contacts here yet ..."}):Object(p.jsx)("ul",{className:F.a.list,children:e.map((function(t){return Object(p.jsx)("li",{className:F.a.contactListItem,children:Object(p.jsx)(N,Object(v.a)({},t))},t.id)}))})})})),I=n(21),S=n.n(I),k={handleInput:function(t){return{type:"contacts/handleInput",payload:t}}},L=Object(s.b)((function(t){return{filter:t.filter,contacts:t.contacts}}),k)((function(t){var e=t.contacts,n=t.filter,a=t.handleInput;return Object(p.jsx)(p.Fragment,{children:e.length<2?Object(p.jsx)("span",{children:" "}):Object(p.jsxs)("div",{className:"contactsFilter",children:[Object(p.jsx)("p",{children:"Find contacts by name:"}),Object(p.jsx)("input",{name:"filter",type:"text",autoComplete:"off",className:S.a.input,onChange:function(t){return a(t.target.value)},value:n})]})})})),D=n(12),R=n.n(D),T=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:R.a.container,children:[Object(p.jsx)("h2",{children:"Phonebook"}),Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:R.a.contacts,children:[Object(p.jsx)("h3",{className:R.a.contactsTitle,children:"Contacts"}),Object(p.jsx)(L,{}),Object(p.jsx)(w,{})]})]})}}]),n}(a.Component),B=Object(s.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),{})(T),E=n(19),q=n(2),J=n(22),P={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},W=Object(q.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"contacts/handleInput":return Object(v.a)(Object(v.a)({},t),{},{filter:a});case"contacts/createContact":return Object(v.a)(Object(v.a)({},t),{},{contacts:[].concat(Object(E.a)(t.contacts),[a])});case"contacts/handleRemove":return Object(v.a)(Object(v.a)({},t),{},{contacts:Object(E.a)(t.contacts.filter((function(t){return t.id!==a})))});default:return t}}),Object(J.composeWithDevTools)());n(35),n(36);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{store:W,children:Object(p.jsx)(B,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={addContactForm:"ContactForm_addContactForm__3NBuZ",label:"ContactForm_label__2CmAu",input:"ContactForm_input__2kpWq",text:"ContactForm_text__2w0C_",btnAdd:"ContactForm_btnAdd__2vADF"}}},[[37,1,2]]]);
//# sourceMappingURL=main.47f9a3f7.chunk.js.map