(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var i=a(7),n=a.n(i),s=a(2),c=a(3),l=a(5),r=a(4),p=a(1),m=a.n(p),o=(a(12),a(13),a(0)),u=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={position:0},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props,a=e.images,i=e.step,n=e.frameSize,s=e.itemWidth,c=e.animationDuration,l=e.infinite,r=this.state.position;return Object(o.jsxs)("div",{className:"Carousel",children:[Object(o.jsx)("button",{className:"buttons__prev",type:"button",onClick:function(){0===r&&l?t.setState({position:a.length-n}):t.setState({position:Math.max(r-i,0)})},disabled:0===r&&!l,"aria-label":"Prev"}),Object(o.jsx)("div",{className:"Carousel__container",style:{width:"".concat(n*s,"px")},children:Object(o.jsx)("ul",{className:"Carousel__container--list",style:{transform:"translateX(".concat(-r*s,"px)"),transition:"".concat(c,"ms")},children:a.map((function(t,e){return Object(o.jsx)("li",{className:"Carousel__item",style:{maxWidth:"".concat(s,"px"),minWidth:"".concat(s,"px")},children:Object(o.jsx)("img",{className:"Carousel__image",src:t,alt:"Emoji ".concat(e.toString())})},t)}))})}),Object(o.jsx)("button",{className:"buttons__next",type:"button","data-cy":"next",onClick:function(){r===a.length-n&&l?t.setState({position:0}):t.setState({position:Math.min(r+i,a.length-n)})},disabled:r+n>=a.length&&!l,"aria-label":"Next"})]})}}]),a}(m.a.Component),h=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.setStep=function(e){t.setState({step:+e.target.value})},t.setFrameSize=function(e){t.setState({frameSize:+e.target.value})},t.setItemWidth=function(e){t.setState({itemWidth:+e.target.value})},t.setAnimationDuration=function(e){t.setState({animationDuration:+e.target.value})},t.setInfinite=function(e){t.setState({infinite:e.target.checked})},t}return Object(c.a)(a,[{key:"render",value:function(){var t=this.state,e=t.images,a=t.step,i=t.frameSize,n=t.itemWidth,s=t.animationDuration,c=t.infinite;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{"data-cy":"title",className:"App__title",children:["Carousel with"," ",e.length," ","images"]}),Object(o.jsxs)("form",{className:"App__form",children:[Object(o.jsxs)("label",{htmlFor:"step",className:"App__label",children:[Object(o.jsx)("h3",{className:"App__title",children:"Step:"}),Object(o.jsx)("input",{type:"number",className:"App__input",defaultValue:a,onChange:this.setStep,min:"1",max:e.length})]}),Object(o.jsxs)("label",{htmlFor:"frameSize",className:"App__label",children:[Object(o.jsx)("h3",{className:"App__title",children:"Frame Size:"}),Object(o.jsx)("input",{type:"number",className:"App__input",defaultValue:i,min:"1",max:e.length,onChange:this.setFrameSize})]}),Object(o.jsxs)("label",{htmlFor:"itemWidth",className:"App__label",children:[Object(o.jsx)("h3",{className:"App__title",children:"Item Width:"}),Object(o.jsx)("input",{type:"number",className:"App__input App__input--itemWidth",defaultValue:n,min:"50",max:"250",onChange:this.setItemWidth})]}),Object(o.jsxs)("label",{htmlFor:"animationDuration",className:"App__label",children:[Object(o.jsx)("h3",{className:"App__title",children:"Animation Duration:"}),Object(o.jsx)("input",{type:"number",className:"App__input App__input--animDurat",defaultValue:s,min:"0",onChange:this.setAnimationDuration})]}),Object(o.jsxs)("label",{htmlFor:"infinite",className:"App__label",children:[Object(o.jsx)("h3",{className:"App__title",children:"Infinite:"}),Object(o.jsx)("input",{type:"checkbox",className:"App__input App__input--infinite",onChange:this.setInfinite})]})]}),Object(o.jsx)(u,{images:e,step:a,frameSize:i,itemWidth:n,animationDuration:s,infinite:c})]})}}]),a}(m.a.Component);n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a39f8622.chunk.js.map