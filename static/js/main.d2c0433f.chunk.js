(this["webpackJsonphtml5-qrcode-react"]=this["webpackJsonphtml5-qrcode-react"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(26),a=n.n(c),i=(n(88),n(34)),s=n(35),l=n(36),d=n(51),u=n(49),b=(n(89),n(75)),p=n(2),h="html5qr-code-full-region",j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{id:h})}},{key:"componentWillUnmount",value:function(){this.html5QrcodeScanner.clear().catch((function(e){console.error("Failed to clear html5QrcodeScanner. ",e)}))}},{key:"componentDidMount",value:function(){var e=function(e){var t={};return e.fps&&(t.fps=e.fps),e.qrbox&&(t.qrbox=e.qrbox),e.aspectRatio&&(t.aspectRatio=e.aspectRatio),void 0!==e.disableFlip&&(t.disableFlip=e.disableFlip),e.formatsToSupport&&(t.formatsToSupport=e.formatsToSupport),t}(this.props),t=!0===this.props.verbose;if(!this.props.qrCodeSuccessCallback)throw"qrCodeSuccessCallback is required callback.";this.html5QrcodeScanner=new b.a(h,e,t),this.html5QrcodeScanner.render(this.props.qrCodeSuccessCallback,this.props.qrCodeErrorCallback)}}]),n}(r.a.Component),f=j,x=n(158),O=n(159);var m=function(e){var t=e.title;return Object(p.jsx)(o.Fragment,{children:Object(p.jsx)(x.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(p.jsx)(O.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,sx:{flex:1},children:t})})})},v=n(13),g=n(28),S=n(8),w=n(161),C=n(72),y=n(160),k=n(155),R=n(162),q=n(156),T=n(154),F=n(163),N=n(164),P=n(165),M=Object(S.a)("div")((function(e){var t=e.theme;return{height:"100%",backgroundColor:"light"===t.palette.mode?C.a[100]:t.palette.background.default}})),z=Object(S.a)(y.a)((function(e){return{backgroundColor:"light"===e.theme.palette.mode?"#fff":C.a[800]}})),A=Object(S.a)(y.a)((function(e){return{width:30,height:6,backgroundColor:"light"===e.theme.palette.mode?C.a[300]:C.a[900],borderRadius:3,position:"absolute",top:8,left:"calc(50% - 15px)"}}));function Q(e){var t=e.window,n=e.results,r=o.useState(!1),c=Object(v.a)(r,2),a=c[0],i=c[1],s=function(e){return function(){i(e)}},l=void 0!==t?function(){return t().document.body}:void 0;return Object(p.jsxs)(M,{children:[Object(p.jsx)(w.a,{}),Object(p.jsx)(g.a,{styles:{".MuiDrawer-root > .MuiPaper-root":{height:"calc(50% - ".concat(56,"px)"),overflow:"visible"}}}),Object(p.jsxs)(k.a,{container:l,anchor:"bottom",open:a,onClose:s(!1),onOpen:s(!0),swipeAreaWidth:56,disableSwipeToOpen:!1,ModalProps:{keepMounted:!0},children:[Object(p.jsxs)(z,{sx:{position:"absolute",top:-56,borderTopLeftRadius:8,borderTopRightRadius:8,visibility:"visible",right:0,left:0},children:[Object(p.jsx)(A,{}),Object(p.jsxs)(O.a,{sx:{p:2,color:"text.secondary"},children:[n.size," items"]})]}),Object(p.jsx)(z,{sx:{px:2,pb:2,height:"100%",overflow:"auto"},children:Object(p.jsx)(R.a,{children:Array.from(n).map((function(e,t){return Object(p.jsx)(W,{decodedText:e,index:t})}))})})]})]})}function W(e){var t=e.decodedText,n=e.index,r=o.useState("Not Registered"),c=Object(v.a)(r,2),a=c[0],i=c[1],s=o.useState(1),l=Object(v.a)(s,2),d=l[0],u=l[1];return o.useEffect((function(){fetch("https://payit.pythonanywhere.com/products/".concat(t)).then((function(e){return e.json().then((function(e){e.nama_item&&i(e.nama_item)}))}))}),[]),Object(p.jsxs)(q.a,{disablePadding:!0,children:[Object(p.jsx)(T.a,{children:Object(p.jsx)(F.a,{sx:{maxWidth:200},primary:a,primaryTypographyProps:{variant:"subtitle2",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}})}),Object(p.jsxs)(N.a,{children:[Object(p.jsx)(P.a,{size:"small",onClick:function(){return u(d-1)},children:"-"}),Object(p.jsx)(P.a,{disabled:!0,size:"small",children:d}),Object(p.jsx)(P.a,{size:"small",onClick:function(){return u(d+1)},children:"+"})]})]},n)}var B=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={decodedResults:new Set},o.onNewScanResult=o.onNewScanResult.bind(Object(l.a)(o)),o}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{title:"Pay!t"}),Object(p.jsxs)("section",{className:"App-section",children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{fps:30,qrbox:250,disableFlip:!1,qrCodeSuccessCallback:this.onNewScanResult,formatsToSupport:[9]})]}),Object(p.jsx)(Q,{results:this.state.decodedResults})]})}},{key:"onNewScanResult",value:function(e,t){this.setState((function(t,n){t.decodedResults.push(e)}))}}]),n}(r.a.Component),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),c(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),D()},88:function(e,t,n){},89:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.d2c0433f.chunk.js.map