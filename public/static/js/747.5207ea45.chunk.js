"use strict";(self.webpackChunkrecipe_gen=self.webpackChunkrecipe_gen||[]).push([[747],{7590:function(e,n,r){r.d(n,{_:function(){return c}});var t=r(2791),c=function(e,n){var r=(0,t.useRef)(!0);(0,t.useEffect)((function(){r.current?r.current=!1:e()}),n)}},2747:function(e,n,r){r.r(n),r.d(n,{default:function(){return C}});var t=r(1413),c=r(2982),i=r(5861),a=r(885),u=r(7757),s=r.n(u),o=r(2791),p=r(364),l=r(1016),f=r.n(l),d=r(1945),v=r(2901);function h(e,n){return function(){var r=(0,i.Z)(s().mark((function r(t,c){var i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d.O.query(e,n);case 3:return i=r.sent,r.abrupt("return",i);case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,n){return r.apply(this,arguments)}}()}var m=r(6871),y=r(4483),g=r(3174),x=r(184);function b(e){var n=e.recipe,t=e.removeRecipe,c=e.copyRecipe,i=(0,m.s0)(),a=r(4179),u=n.imgUrl?"":"no-img";return(0,x.jsxs)("section",{onClick:function(){return i("recipe/".concat(n._id))},className:"recipe-preview",children:[(0,x.jsx)("section",{style:{backgroundImage:"url(".concat(n.imgUrl||a,")")},className:"img-container ".concat(u),children:(0,x.jsx)("section",{className:"title-container",children:(0,x.jsx)("span",{className:"title",children:n.name})})}),(0,x.jsxs)("section",{onClick:function(e){return e.stopPropagation()},className:"actions",children:[(0,x.jsx)("button",{onClick:function(){return c(n)},className:"copy-recipe-icon",children:(0,x.jsx)(y.G,{icon:g.kZ_})}),(0,x.jsx)("button",{onClick:function(){return t(n._id,n.name)},className:"remove-recipe-icon",children:(0,x.jsx)(y.G,{icon:g.$aW})})]})]},n._id)}function w(e){var n=e.recipes,r=e.removeRecipe,t=e.addRecipe,c=e.copyRecipe;return(0,x.jsxs)("section",{className:"recipe-list simple-cards-grid",children:[(0,x.jsx)("button",{className:"nice-btn blue",onClick:t,children:"Add New Recipe"}),n&&n.map((function(e){return(0,x.jsx)(b,{recipe:e,removeRecipe:r,copyRecipe:c},e._id)}))]})}var j=r(7590),_=r(3741);function k(e){var n=e.filterBy,r=e.onChangeFilterBy,c=(0,_.c)(n,r),i=(0,a.Z)(c,3),u=(i[0],i[1]),s=i[2];return(0,j._)((function(){u(n)}),[n]),(0,x.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"recipe-filter nice-form",children:[(0,x.jsxs)("section",{className:"form__group field search",children:[(0,x.jsx)("input",(0,t.Z)((0,t.Z)({},s("term")),{},{className:"form__field",placeholder:"Search by recipe or ingredient"})),(0,x.jsx)("label",{htmlFor:"term",className:"form__label",children:"Search by recipe or ingredient"})]}),(0,x.jsx)("section",{className:"form__group field sort",children:(0,x.jsxs)("select",(0,t.Z)((0,t.Z)({},s("sortBy")),{},{children:[(0,x.jsx)("option",{value:"",children:"Sort by"}),(0,x.jsx)("option",{value:"createdAt",children:"Date"}),(0,x.jsx)("option",{value:"name",children:"Alphabetically"})]}))})]})}var R=r(6801),Z=r(1731),N=r(9275);function C(){var e=(0,p.I0)(),n=(0,o.useState)(null),r=(0,a.Z)(n,2),u=r[0],l=r[1],m=(0,o.useState)({term:"",sortBy:"",sortDir:1}),y=(0,a.Z)(m,2),g=y[0],b=y[1],_=(0,p.v9)((function(e){return e.userModule})).loggedInUser;(0,o.useEffect)((function(){_=_||v.W.getLoggedInUser(),C()}),[]),(0,j._)((function(){_&&C()}),[g]);var C=function(){var n=(0,i.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(h(_._id,g));case 2:r=n.sent,l(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),I=function(){var e=(0,i.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.O.save({recipe:n});case 3:r=e.sent,l([r].concat((0,c.Z)(u))),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("err:",e.t0),(0,Z.oc)({txt:"Couldn't add recipe"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=(0,i.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=d.O.getEmptyRecipe()).userId=_._id,r=(0,t.Z)((0,t.Z)({},g),{},{sortBy:""}),b(r),I(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,i.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.O.remove(n);case 2:r=u.filter((function(e){return e._id!==n})),l(r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:"home",children:[_&&(0,x.jsxs)("h2",{className:"greet",children:["Welcome, ",_.username]}),(0,x.jsx)(k,{filterBy:g,onChangeFilterBy:function(e){console.log("onChangeFilterBy -> filterBy",e),b(e)}}),(0,x.jsx)(w,{copyRecipe:function(e){var n=f()(e);delete n._id;var r=n.name.replace(/ \(\d+\)$/,""),t=u.filter((function(e){return e.name.slice(0,r.length)===r})).length+1;n.name=r+" (".concat(t,")"),I(n),(0,N.W2)()},recipes:u,removeRecipe:function(n,r){e((0,R.z)({txt:"This recipe will be permanently deleted",title:'Are you sure you want to delete "'.concat(r,'"?'),successCb:function(){return S(n)}}))},addRecipe:B})]})}},1945:function(e,n,r){r.d(n,{O:function(){return p}});var t=r(7762),c=r(5861),i=r(7757),a=r.n(i),u=r(763),s=r(1732);var o=r(9275),p={query:function(e,n){return f.apply(this,arguments)},getEmptyRecipe:function(){var e=y();return{name:"New Recipe",createdAt:Date.now(),ingToScaleId:e.id,ingredients:[e],imgUrl:"",instructions:""}},getEmptyIngredient:y,getById:function(e){return d.apply(this,arguments)},remove:function(e){return v.apply(this,arguments)},update:function(e){return m.apply(this,arguments)},save:function(e,n){return h.apply(this,arguments)},getRecipeTxt:function(e){var n="";n+=(0,o.YA)(e.name)+"\n\n\n";var r=e.ingredients.find((function(n){return n.id===e.ingToScaleId}));n+="--Ingredients--\n";var c,i=(0,t.Z)(e.ingredients);try{for(i.s();!(c=i.n()).done;){var a=c.value,s=r&&(0,o.ze)(a,r);n+=(0,u.capitalize)(a.name)+"\t\t ",n+=a.amount+" "+a.units+"\t\t ",n+=s,n+="\n\n"}}catch(p){i.e(p)}finally{i.f()}return n+="\n\n",n+="--Instructions--\n",n+=e.instructions}},l="recipe";function f(){return(f=(0,c.Z)(a().mark((function e(n,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",s.R.get(l,{userId:n,filterBy:r}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function d(){return(d=(0,c.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.R.get("recipe/"+n);case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=(0,c.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",s.R.delete("".concat(l,"/").concat(n)));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function h(){return(h=(0,c.Z)(a().mark((function e(n,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",null!==n&&void 0!==n&&n.recipe._id?s.R.put(l,{data:n,type:r}):s.R.post(l,n.recipe));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function m(){return(m=(0,c.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",s.R.put(l,n));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function y(){return{id:(0,o.qR)(),name:"ingredient",amount:1,units:"g"}}},6801:function(e,n,r){r.d(n,{z:function(){return a}});var t=r(5861),c=r(7757),i=r.n(c);function a(e){var n=e.txt,r=e.title,c=e.successCb,a=void 0===c?function(){}:c,u=e.failCb,s=void 0===u?function(){}:u;return function(){var e=(0,t.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t({type:"SET_DIALOG_OPEN",txt:n,title:r,successCb:a,failCb:s}));case 4:throw e.prev=4,e.t0=e.catch(0),console.log("err:",e.t0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(n){return e.apply(this,arguments)}}()}},4179:function(e,n,r){e.exports=r.p+"static/media/pepper-logo.90a6ca64421512472063.png"}}]);
//# sourceMappingURL=747.5207ea45.chunk.js.map