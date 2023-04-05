"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[63390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={id:"clock",title:"Clock"},a=void 0,c={unversionedId:"services/clock",id:"version-1.x/services/clock",title:"Clock",description:"Clock service contains some functionality related to time and scheduling.",source:"@site/versioned_docs/version-1.x/services/clock.md",sourceDirName:"services",slug:"/services/clock",permalink:"/version-1.x/services/clock",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/services/clock.md",tags:[],version:"1.x",frontMatter:{id:"clock",title:"Clock"},sidebar:"services-sidebar",previous:{title:"Console",permalink:"/version-1.x/services/console"},next:{title:"Random",permalink:"/version-1.x/services/random"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Clock service contains some functionality related to time and scheduling. "),(0,i.kt)("p",null,"To get the current time in a specific time unit, the ",(0,i.kt)("inlineCode",{parentName:"p"},"currentTime")," function takes a unit as ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeUnit")," and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"UIO[Long]"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val inMiliseconds: URIO[Clock, Long] = currentTime(TimeUnit.MILLISECONDS)\nval inDays: URIO[Clock, Long] = currentTime(TimeUnit.DAYS)\n")),(0,i.kt)("p",null,"To get current data time in the current timezone the ",(0,i.kt)("inlineCode",{parentName:"p"},"currentDateTime")," function returns a ZIO effect containing ",(0,i.kt)("inlineCode",{parentName:"p"},"OffsetDateTime"),"."),(0,i.kt)("p",null,"Also, the Clock service has a very useful functionality for sleeping and creating a delay between jobs. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep")," takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration")," and sleep for the specified duration. It is analogous to ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.Thread.sleep")," function, but it doesn't block any underlying thread. It's completely non-blocking."),(0,i.kt)("p",null,"In following example we are going to print the current time periodically by placing a one second",(0,i.kt)("inlineCode",{parentName:"p"},"sleep")," between each print call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def printTimeForever: ZIO[Console with Clock, Throwable, Nothing] =\n  currentDateTime.flatMap(time => putStrLn(time.toString)) *>\n    sleep(1.seconds) *> printTimeForever\n")),(0,i.kt)("p",null,"For scheduling purposes like retry and repeats, ZIO has a great data type called ",(0,i.kt)("a",{parentName:"p",href:"/version-1.x/datatypes/misc/schedule"},"Schedule"),"."))}d.isMDXComponent=!0}}]);