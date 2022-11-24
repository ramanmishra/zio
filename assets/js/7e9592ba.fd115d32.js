"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[86806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={id:"index",title:"Introduction to ZIO Test"},o=void 0,i={unversionedId:"reference/test/index",id:"reference/test/index",title:"Introduction to ZIO Test",description:"ZIO Test is a zero dependency testing library that makes it easy to test effectual programs. In ZIO Test, all tests are immutable values and tests are tightly integrated with ZIO, so testing effectual programs is as natural as testing pure ones.",source:"@site/docs/reference/test/index.md",sourceDirName:"reference/test",slug:"/reference/test/",permalink:"/reference/test/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Test"},sidebar:"reference-sidebar",previous:{title:"Supervisor",permalink:"/reference/observability/supervisor"},next:{title:"Why ZIO Test?",permalink:"/reference/test/why-zio-test"}},l={},c=[{value:"Motivation",id:"motivation",level:2},{value:"How ZIO Test was designed",id:"how-zio-test-was-designed",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIO Test")," is a zero dependency testing library that makes it easy to test effectual programs. In ",(0,r.kt)("strong",{parentName:"p"},"ZIO Test"),", all tests are immutable values and tests are tightly integrated with ZIO, so testing effectual programs is as natural as testing pure ones. "),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"We can easily assert ordinary values and data types to test them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import scala.Predef.assert\n\nassert(1 + 2 == 2 + 1)\nassert("Hi" == "H" + "i")\n\ncase class Point(x: Long, y: Long)\nassert(Point(5L, 10L) == Point.apply(5L, 10L))\n')),(0,r.kt)("p",null,"What about functional effects? Can we assert two effects using ordinary scala assertion to test whether they have the same functionality? As we know, a functional effect, like ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO"),", describes a series of computations. Unfortunately, we can't assert functional effects without executing them. If we assert two ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effects, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"assert(expectedEffect == actualEffect)"),", the result says nothing about whether these two effects behave similarly and produce the same result or not. Instead, we should ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafeRun")," each one and assert their results."),(0,r.kt)("p",null,"Let's say we have a random generator effect, and we want to ensure that the output is bigger than zero, so we should ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafeRun")," the effect and assert the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import scala.Predef.assert\n\nval random = Unsafe.unsafe { implicit unsafe =>\n  Runtime.default.unsafe.run(\n    Random.nextIntBounded(10)\n  ).getOrThrowFiberFailure()\n}\n\nassert(random >= 0)\n")),(0,r.kt)("p",null,"Testing effectful programs is difficult since we should use many ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafeRun")," methods. Also, we might need to make sure that the test is non-flaky. In these cases, running ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafeRun")," multiple times is not straightforward. We need a testing framework that treats effects as ",(0,r.kt)("em",{parentName:"p"},"first-class values"),". So this is the primary motivation for creating the ZIO Test library."),(0,r.kt)("h2",{id:"how-zio-test-was-designed"},"How ZIO Test was designed"),(0,r.kt)("p",null,"We designed ZIO Test around the idea of ",(0,r.kt)("em",{parentName:"p"},"making tests first-class objects"),". This means that tests (and other concepts, like assertions) become ordinary values that can be passed around, transformed, and composed."),(0,r.kt)("p",null,"This approach allows for greater flexibility compared to some other testing frameworks, where tests and additional logic around tests had to be put into callbacks so that framework could make use of them."),(0,r.kt)("p",null,"As a result, this approach is also better suited to other ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," concepts like ",(0,r.kt)("inlineCode",{parentName:"p"},"Scope"),", which can only be used within a scoped block of code. This also created a mismatch between ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeAll"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AfterAll")," callback-like methods when there were resources that should be opened and closed during test suite execution."),(0,r.kt)("p",null,"Another thing worth pointing out is that tests being values are also effects. Implications of this design are far-reaching:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'First, the well-known problem of testing asynchronous value is gone. Whereas in other frameworks we have to somehow "run" our effects and at best wrap them in ',(0,r.kt)("inlineCode",{parentName:"p"},"scala.util.Future")," because blocking would eliminate running on ScalaJS, ZIO Test expects us to create ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," objects. There is no need for indirect transformations from one wrapping object to another.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Second, because our tests are ordinary ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," values, we don't need to turn to a testing framework for things like retries, timeouts, and resource management. We can solve all those problems with the full richness of functions that ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," exposes."))))}p.isMDXComponent=!0}}]);