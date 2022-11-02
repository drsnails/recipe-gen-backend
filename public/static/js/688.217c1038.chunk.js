"use strict";(self.webpackChunkrecipe_gen=self.webpackChunkrecipe_gen||[]).push([[688],{7590:function(e,n,t){t.d(n,{_:function(){return i}});var r=t(2791),i=function(e,n){var t=(0,r.useRef)(!0);(0,r.useEffect)((function(){t.current?t.current=!1:e()}),n)}},2688:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(2982),i=t(4942),a=t(1413),c=t(5861),s=t(885),o=t(7757),u=t.n(o),l=t(2791),d=t(364),p=t(6871),f=t(184);function h(e){var n=e.value,t=e.onChange,r=e.txt,i=e.id;return(0,f.jsxs)("div",{className:"input-switch",children:[(0,f.jsx)("input",{checked:n,onChange:t,type:"checkbox",name:"switch",id:i,className:"tgl tgl-light"}),(0,f.jsx)("label",{htmlFor:i,className:"tgl-btn"}),(0,f.jsx)("h4",{children:r})]})}var g=t(9258),m=t(4483);function v(e){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"recipe-gen",t="https://api.cloudinary.com/v1_1/".concat("recipe-gen","/image/upload"),(r=new FormData).append("file",n.target.files[0]),r.append("upload_preset","recipe-gen"),e.abrupt("return",fetch(t,{method:"POST",body:r}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(6801);var b=t(5190),j=t(3174);function Z(e){var n=e.imgUrl,t=e.onChangeImg,r=(e.isEdited,(0,d.I0)()),i=(0,l.useState)(),a=(0,s.Z)(i,2),o=a[0],p=a[1],h=(0,l.useRef)(),g=function(){var e=(0,c.Z)(u().mark((function e(n){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=function(){var e=(0,c.Z)(u().mark((function e(){var i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files[0]){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r((0,b.K)(!0)),e.next=6,v(n);case 6:i=e.sent,t(i.url),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[2,10,13,15]])})));return function(){return e.apply(this,arguments)}}(),i(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=o?"expand":"",Z=n?"img-class":"";return(0,f.jsx)("section",{className:"recipe-img-container",children:(0,f.jsxs)("section",{className:"recipe-img ".concat(x," ").concat(Z),children:[n?(0,f.jsx)("section",{onClick:function(){return p((function(e){return!e}))},className:"img-container",style:{backgroundImage:"url(".concat(n,")")},children:(0,f.jsxs)("section",{className:"img-actions ".concat(x),children:[(0,f.jsxs)("button",{onClick:function(e){e.stopPropagation(),h.current.click()},children:[(0,f.jsx)(m.G,{icon:j.VmB})," ",(0,f.jsx)("span",{children:"Change"})]}),(0,f.jsxs)("button",{onClick:function(e){e.stopPropagation(),t(null,!0),p(!1)},children:[(0,f.jsx)(m.G,{icon:j.$aW})," ",(0,f.jsx)("span",{children:"Remove"})]})]})}):(0,f.jsx)("section",{className:"img-upload",children:(0,f.jsx)("label",{htmlFor:"imgUploader",children:(0,f.jsx)(m.G,{className:"upload-icon",icon:j.r6c})})}),(0,f.jsx)("input",{ref:h,type:"file",id:"imgUploader",onChange:g,hidden:!0})]})})}var y=t(6971),k=t(2709),w=t(9846),C=t(3127),R=t(8414),I=t(8685),N=t(6549),S=t(9326),T=function(e){switch(e.type){case"whatsapp":return(0,f.jsx)(y.Z,(0,a.Z)((0,a.Z)({},e),{},{children:(0,f.jsx)(k.Z,{})}));case"facebook":return(0,f.jsx)(w.Z,(0,a.Z)((0,a.Z)({},e),{},{children:(0,f.jsx)(C.Z,{})}));case"telegram":return(0,f.jsx)(R.Z,(0,a.Z)((0,a.Z)({},e),{},{children:(0,f.jsx)(I.Z,{})}));case"email":return(0,f.jsx)(N.Z,(0,a.Z)((0,a.Z)({},e),{},{children:(0,f.jsx)(S.Z,{})}));default:return(0,f.jsx)(f.Fragment,{})}};function O(e){return(0,f.jsx)("section",{className:"share-btn",children:(0,f.jsx)(T,(0,a.Z)({},e))})}var E=t(7590),F=(t(3741),t(1731)),D=t(1945),_=(t(2901),t(9275)),P=t(8225);function U(e){var n=e.ingredient,t=e.ingToScale,r=e.isFixedRatio,i=e.isWeightRatio,o=e.onChangeRecipeData,d=e.ingredientsLength,p=e.handleIngChange,h=e.removeIngredient,g=e.providedRef,v=e.dragHandleProp,x=e.dragProp,b=e.numOfDishes,Z=e.handleRecipeAmounts,y=e.amountToScaleFixed,k=(e.focusRef,(0,l.useState)("")),w=(0,s.Z)(k,2),C=w[0],R=w[1],I=function(){var e=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=2;break}return e.abrupt("return");case 2:if(1!==d){e.next=5;break}return(0,F.oc)({txt:"Sorry, for now you need to have at least 1 ingredient"}),e.abrupt("return");case 5:return R("equal"),e.next=8,(0,_._v)(350);case 8:h(n.id);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){return r?"amount"===e?function(e){return Z(e,n)}:function(){}:function(e){return p(e,n)}},S=function(e){var n;13!==(null===(n=e.nativeEvent)||void 0===n?void 0:n.keyCode)&&13!==e.keyCode&&13!==e.which&&13!==e.charCode&&"Enter"!==e.code||(e.target.blur(),window.getSelection().empty(),e.stopPropagation())},T=function(e){e.stopPropagation(),document.activeElement.blur(),(0,_.eO)(e,!0)};var O=t?(0,_.ze)(n,t):"",E=(0,l.useMemo)((function(){if(b||(b=1),!r)return n.amount*b%1===0?n.amount*b:(n.amount*b).toFixed(2);if(console.log("ingredient",n),"units"===n.units)return n.amount;var e=(i?y*O:y/t.amount*n.amount)*b;return e%1===0?e:e.toFixed(2)}),[b,y,O,r,i]),D=n.id===(null===t||void 0===t?void 0:t.id)?"chosen":"",P=n.units.length+4,U=!r||n.id===t.id,L=r?"not-allowed":"";return(0,f.jsxs)("article",(0,a.Z)((0,a.Z)((0,a.Z)({onClick:function(e){document.body.focus(),(0,_.eO)(e,!0),document.activeElement.blur()},ref:g},x),v),{},{className:"ing-preview ".concat(C),children:[(0,f.jsx)("span",{tabIndex:"-1",className:"remove-icon ".concat(L),children:(0,f.jsx)(m.G,{onClick:I,icon:j.$aW})}),(0,f.jsx)("section",{onClick:T,className:"editable ing-name",children:(0,f.jsx)("span",{tabIndex:"0",className:L,onKeyPress:S,onFocus:_.eO,title:n.name,"data-name":"name",onBlur:N(),contentEditable:!r,suppressContentEditableWarning:!0,children:n.name})}),(0,f.jsxs)("section",{onClick:T,className:"amount-unit",children:[(0,f.jsx)("span",{tabIndex:"0",onKeyPress:S,onFocus:_.eO,inputMode:"numeric","data-name":"amount",onBlur:N("amount"),className:"editable ".concat(!U&&"not-allowed"),contentEditable:U,suppressContentEditableWarning:!0,children:E}),(0,f.jsxs)("select",{onClick:function(e){return e.stopPropagation()},disabled:r,className:L,tabIndex:"0",style:{width:"".concat(P,"ch")},onChange:N(),value:function(){var e=i?"g":n.units;return"units"===n.units&&(e="units"),e}(),name:"units",id:"units",children:[(0,f.jsx)("option",{value:"g",children:"g"}),(0,f.jsx)("option",{value:"Kg",children:"Kg"}),(0,f.jsx)("option",{value:"mL",children:"mL"}),(0,f.jsx)("option",{value:"L",children:"L"}),(0,f.jsx)("option",{value:"oz",children:"oz"}),(0,f.jsx)("option",{value:"cup",children:"Cup"}),(0,f.jsx)("option",{value:"tableSpoon",children:"Table spoon"}),(0,f.jsx)("option",{value:"teaSpoon",children:"Tea spoon"}),(0,f.jsx)("option",{value:"units",children:"Units"})]})]}),(0,f.jsx)("p",{title:O,onClick:function(){"units"!==n.units?o("ingToScaleId",n.id):(0,F.oc)({txt:"Can't set 'Units' as a main relative quantity"})},className:"".concat(D," ").concat(L),children:O||"-"})]}))}function L(e){var n=e.ingredients,t=e.ingToScale,r=e.onChangeRecipeData,i=e.handleIngChange,c=e.handleEditable,o=e.addIngredient,u=e.removeIngredient,d=e.ingToRemoveIdx,p=e.onReOrderIngs,h=e.numOfDishes,g=e.isFixedRatio,v=e.isWeightRatio,x=e.handleRecipeAmounts,b=e.amountToScaleFixed,Z=(0,l.useRef)(),y=(0,l.useState)(!1),k=(0,s.Z)(y,2),w=(k[0],k[1]);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(P.Z5,{onDragStart:function(){w(!0)},onDragEnd:function(e){w(!1),p(e)},children:(0,f.jsx)(P.bK,{droppableId:"droppable",children:function(e,s){return(0,f.jsx)("div",(0,a.Z)((0,a.Z)({},e.droppableProps),{},{ref:e.innerRef,style:(s.isDraggingOver,{}),children:(0,f.jsxs)("section",{ref:Z,className:"ing-list",children:[n.map((function(e,a){return(0,f.jsx)(P._l,{draggableId:e.id,index:a,children:function(s){return(0,f.jsx)(U,{providedRef:s.innerRef,dragProp:s.draggableProps,dragHandleProp:s.dragHandleProps,removeIngredient:u,handleEditable:c,handleIngChange:i,ingredient:e,ingToScale:t,isFixedRatio:g,isWeightRatio:v,onChangeRecipeData:r,numOfDishes:h,isRemovedClass:(0,_.Gm)(a,d),ingredientsLength:n.length,handleRecipeAmounts:x,amountToScaleFixed:b,focusRef:Z},e.id)}},e.id)})),e.placeholder,(0,f.jsx)("button",{className:"add-btn",onClick:o,children:(0,f.jsx)(m.G,{icon:j.r8p})})]})}))}})})})}var W=t(1016);function B(){var e=(0,l.useState)(),n=(0,s.Z)(e,2),t=n[0],o=n[1],m=(0,l.useState)(null),v=(0,s.Z)(m,2),x=v[0],j=(v[1],(0,l.useState)("")),y=(0,s.Z)(j,2),k=y[0],w=y[1],C=(0,l.useState)(!1),R=(0,s.Z)(C,2),I=R[0],N=R[1],S=(0,l.useState)(!1),T=(0,s.Z)(S,2),P=T[0],U=T[1],B=(0,l.useState)(""),K=(0,s.Z)(B,2),A=K[0],G=K[1],q=((0,l.useRef)(null),(0,l.useState)(!1)),z=(0,s.Z)(q,2),M=z[0],H=z[1],$=(0,l.useState)(!1),Q=(0,s.Z)($,2),V=Q[0],Y=Q[1],J=(0,l.useState)(),X=(0,s.Z)(J,2),ee=X[0],ne=X[1],te=(0,d.I0)(),re=(0,p.UO)();(0,l.useEffect)((function(){ie()}),[re.id]),(0,l.useEffect)((function(){if(t){var e=ce(t);ne(e.amount)}}),[null===t||void 0===t?void 0:t.ingToScaleId]);var ie=function(){var e=(0,c.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!re.id){e.next=7;break}return e.next=4,D.O.getById(re.id);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=D.O.getEmptyRecipe();case 8:n=e.t0,o(n),e.next=16;break;case 12:e.prev=12,e.t1=e.catch(0),console.log("failing"),G("Sorry,  can't find this recipe at the moment");case 16:return e.prev=16,e.finish(16);case 18:case"end":return e.stop()}}),e,null,[[0,12,16,18]])})));return function(){return e.apply(this,arguments)}}();(0,E._)((function(){if(!M){var e=ce(t);ne(e.amount),Y(!1)}}),[M]);var ae=function(){var e=(0,c.Z)(u().mark((function e(n,t){var r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.recipe,i=W(r),!M){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,o(r),e.next=8,D.O.save(n,t);case 8:return e.abrupt("return","res");case 11:throw e.prev=11,e.t0=e.catch(4),console.log("cant save recipe: ",e.t0),o(i),e.t0;case 16:return e.prev=16,te((0,b.K)(!1)),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,11,16,19]])})));return function(n,t){return e.apply(this,arguments)}}(),ce=(0,l.useCallback)((function(e){return e.ingredients.find((function(n){return n.id===e.ingToScaleId}))}),[t]),se=function(){var e=(0,c.Z)(u().mark((function e(n,r){var c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=(0,a.Z)((0,a.Z)({},t),{},(0,i.Z)({},n,r)),"ingToScaleId"===n||"imgUrl"===n?ae({recipe:c,field:n,value:r},"updateRecipe"):le(c);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),oe=function(){var e=(0,c.Z)(u().mark((function e(n,r){var c,s,o,l,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.target,s=c.name,o=c.value,"SELECT"===c.nodeName||"INPUT"===c.nodeName){e.next=12;break}if(s=c.dataset.name,o=c.innerText,"amount"!==s){e.next=12;break}if(o=+o){e.next=12;break}return o=r.amount,c.innerText=o,e.abrupt("return");case 12:if(o!==r[s]){e.next=14;break}return e.abrupt("return");case 14:if(l=(0,a.Z)((0,a.Z)({},r),{},(0,i.Z)({},s,o)),d=(0,a.Z)((0,a.Z)({},t),{},{ingredients:t.ingredients.map((function(e){return e.id===r.id?l:e}))}),"units"!==s||"units"!==o||d.ingToScaleId!==l.id){e.next=18;break}return e.abrupt("return",(0,F.oc)({txt:"Can't change main relative quantity to 'Units'"}));case 18:le(d);case 19:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),ue=function(){var e=(0,c.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!1),e.next=4,ae({recipe:t},"general");case 4:(0,F.CB)({txt:"Recipe saved",time:2e3}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,F.oc)({txt:"Saving recipe failed",time:2e3});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),le=function(e){o(e),I||(N(!0),U(!0))},de=function(){var e=(0,c.Z)(u().mark((function e(){var n,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=D.O.getEmptyIngredient()).isNew=!0,i=(0,a.Z)((0,a.Z)({},t),{},{ingredients:[].concat((0,r.Z)(t.ingredients),[n])}),le(i);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,c.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,a.Z)((0,a.Z)({},t),{},{ingredients:t.ingredients.filter((function(e){return e.id!==n}))}),t.ingToScaleId===n&&(t.ingToScaleId=""),le(r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),fe=function(){var e=(0,c.Z)(u().mark((function e(n,t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n||t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,se("imgUrl",n);case 4:te((0,b.K)(!1));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();if(!t)return(0,f.jsx)("div",{children:A||(0,f.jsx)(g.a,{_isLoading:!0})});var he=ce(t),ge=I?"animate-in":"animate-out",me=D.O.getRecipeTxt(t);return ee?(console.log("isFixedRatio:",M),(0,f.jsxs)("div",{className:"recipe-editor",children:[(0,f.jsx)("div",{className:"focus-div"}),(0,f.jsxs)("section",{className:"title-container",children:[(0,f.jsx)("h2",{onFocus:_.eO,onBlur:function(e){var n=e.target;return se("name",n.innerText)},contentEditable:!0,suppressContentEditableWarning:!0,children:t.name}),(0,f.jsx)("button",{className:"btn copy",onClick:function(){var e=D.O.getRecipeTxt(t);(0,_.vQ)(e),(0,F.CB)({txt:"Copied to clipboard"})},children:"Copy To Clipboard"})]}),(0,f.jsx)(Z,{imgUrl:t.imgUrl,isEdited:I,onChangeImg:fe}),(0,f.jsxs)("section",{className:"share-btns",children:[(0,f.jsx)(O,{url:" ",type:"whatsapp",title:me}),(0,f.jsx)(O,{url:"facebook.com",type:"facebook",quote:me}),(0,f.jsx)(O,{url:"telegram.com",type:"telegram",title:me}),(0,f.jsx)(O,{url:"",type:"email",subject:t.name,body:me})]}),(0,f.jsxs)("section",{className:"title-edit",children:[(0,f.jsxs)("section",{className:"input-check-container",children:[(0,f.jsx)(h,{id:"fixedMode",txt:"Fixed Mode",value:M,onChange:function(){return H((function(e){return!e}))}}),M&&(0,f.jsx)(h,{id:"weightMode",txt:"Weight Ratio",value:V,onChange:function(){return Y((function(e){return!e}))}})]}),(0,f.jsx)("form",{onSubmit:function(e){return e.preventDefault()},className:"nice-form",children:(0,f.jsxs)("div",{className:"form__group field dishes-form",children:[(0,f.jsx)("input",{value:k,onChange:function(e){var n=+e.target.value;(!n||n<0)&&(n=""),w(n)},type:"number",id:"numOfDishes",name:"numOfDishes",className:"form__field",placeholder:"Search by recipe or ingredient"}),(0,f.jsx)("label",{htmlFor:"numOfDishes",className:"form__label",children:"Number Of Dishes"})]})})]}),(0,f.jsx)(L,{removeIngredient:pe,addIngredient:de,handleIngChange:oe,ingredients:t.ingredients,ingToScale:he,onChangeRecipeData:se,ingToRemoveIdx:x,onReOrderIngs:function(e){var n=e.destination.index,i=e.source.index,c=(0,r.Z)(t.ingredients);c=(0,_.th)(c,n,i);var s=(0,a.Z)((0,a.Z)({},t),{},{ingredients:c});I?o(s):ae({recipe:s},"general")},numOfDishes:k,isFixedRatio:M,isWeightRatio:V,handleRecipeAmounts:function(e,n){var t=+e.target.innerText;t||(t=he.amount),ne(t)},amountToScaleFixed:ee}),(0,f.jsxs)("section",{className:"instructions",children:[(0,f.jsx)("strong",{className:"instructions-title",children:"Instructions"}),(0,f.jsx)("textarea",{onClick:function(e){return e.stopPropagation()},className:"instructions-area",onChange:function(e){var n=e.target;return se("instructions",n.value)},value:t.instructions,name:"instructions",id:"",cols:"30",rows:"30"})]}),P&&(0,f.jsx)("button",{onClick:ue,className:"edit-btn save-changes ".concat(ge),children:"Save Changes"})]})):(0,f.jsx)(g.a,{_isLoading:!0})}},1945:function(e,n,t){t.d(n,{O:function(){return l}});var r=t(7762),i=t(5861),a=t(7757),c=t.n(a),s=t(763),o=t(1732);var u=t(9275),l={query:function(e,n){return p.apply(this,arguments)},getEmptyRecipe:function(){var e=v();return{name:"New Recipe",createdAt:Date.now(),ingToScaleId:e.id,ingredients:[e],imgUrl:"",instructions:""}},getEmptyIngredient:v,getById:function(e){return f.apply(this,arguments)},remove:function(e){return h.apply(this,arguments)},update:function(e){return m.apply(this,arguments)},save:function(e,n){return g.apply(this,arguments)},getRecipeTxt:function(e){var n="";n+=(0,u.YA)(e.name)+"\n\n\n";var t=e.ingredients.find((function(n){return n.id===e.ingToScaleId}));n+="--Ingredients--\n";var i,a=(0,r.Z)(e.ingredients);try{for(a.s();!(i=a.n()).done;){var c=i.value,o=t&&(0,u.ze)(c,t);n+=(0,s.capitalize)(c.name)+"\t\t ",n+=c.amount+" "+c.units+"\t\t ",n+=o||"",n+="\n\n"}}catch(l){a.e(l)}finally{a.f()}return n+="\n\n",n+="--Instructions--\n",n+=e.instructions}},d="recipe";function p(){return(p=(0,i.Z)(c().mark((function e(n,t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",o.R.get(d,{userId:n,filterBy:t}));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function f(){return(f=(0,i.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.R.get("recipe/"+n);case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=(0,i.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",o.R.delete("".concat(d,"/").concat(n)));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function g(){return(g=(0,i.Z)(c().mark((function e(n,t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",null!==n&&void 0!==n&&n.recipe._id?o.R.put(d,{data:n,type:t}):o.R.post(d,n.recipe));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function m(){return(m=(0,i.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",o.R.put(d,n));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return");case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function v(){return{id:(0,u.qR)(),name:"ingredient",amount:1,units:"g"}}},6801:function(e,n,t){t.d(n,{z:function(){return c}});var r=t(5861),i=t(7757),a=t.n(i);function c(e){var n=e.txt,t=e.title,i=e.successCb,c=void 0===i?function(){}:i,s=e.failCb,o=void 0===s?function(){}:s;return function(){var e=(0,r.Z)(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",r({type:"SET_DIALOG_OPEN",txt:n,title:t,successCb:c,failCb:o}));case 4:throw e.prev=4,e.t0=e.catch(0),console.log("err:",e.t0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(n){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=688.217c1038.chunk.js.map