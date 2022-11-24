"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[18025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={id:"index",title:"Introduction to ZIO Interop Monix",sidebar_label:"ZIO Interop Monix"},a=void 0,s={unversionedId:"index",id:"index",title:"Introduction to ZIO Interop Monix",description:"This library provides interoperability between Monix 3.4 and ZIO 1 and ZIO 2. Both JVM and Scala.js are supported.",source:"@site/node_modules/@zio.dev/interop-monix/index.md",sourceDirName:".",slug:"/",permalink:"/interop-monix/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Interop Monix",sidebar_label:"ZIO Interop Monix"},sidebar:"sidebar"},l={},c=[{value:"Tasks",id:"tasks",level:2},{value:"Monix Scheduler",id:"monix-scheduler",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This library provides interoperability between ",(0,i.kt)("strong",{parentName:"p"},"Monix 3.4")," and ",(0,i.kt)("strong",{parentName:"p"},"ZIO 1 and ZIO 2"),". Both JVM and Scala.js are supported."),(0,i.kt)("h2",{id:"tasks"},"Tasks"),(0,i.kt)("p",null,"Monix tasks can be converted to ZIO tasks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.interop.monix._\nimport monix.eval\n\nval monixTask: eval.Task[String] = ???\n\nval zioTask: Task[String] = ZIO.fromMonixTask(monixTask)\n")),(0,i.kt)("p",null,"The conversion is lazy: the Monix task will only be executed if the returned ZIO task is executed."),(0,i.kt)("p",null,"ZIO tasks can be converted to Monix tasks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.interop.monix._\nimport monix.eval\nimport monix.execution.Scheduler.Implicits.global\n\nval zioTask: Task[String] = ???\n\nval createMonixTask: UIO[eval.Task[String]] = zioTask.toMonixTask()\n\n// illustrative, you wouldn't usually do things this way\nval monixTask: eval.Task[String] = Runtime.default.unsafeRun(createMonixTask)\nval stringResult = monixTask.runSyncUnsafe\n")),(0,i.kt)("p",null,"The conversion is lazy: the ZIO effect so converted will only be executed if the returned Monix task is executed."),(0,i.kt)("p",null,"Sometimes you need to provide a Monix task in a context where using a ZIO effect is difficult. For example, when an API requires you to provide a function that returns a Monix task. In these situations, the ",(0,i.kt)("inlineCode",{parentName:"p"},"toMonixTaskUsingRuntime")," method can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.interop.monix._\nimport monix.eval\n\ndef monixBasedApi(f: String => eval.Task[Unit]): eval.Task[Unit] = ???\n\ndef zioBasedProcessor(s: String): Task[Unit] = ???\n\nval zioEffects = for {\n    zioRuntime <- ZIO.runtime[Any]\n    _ <- ZIO.fromMonixTask {\n        monixBasedApi(s =>\n            zioBasedProcessor(s).toMonixTaskUsingRuntime(zioRuntime)\n        )\n    }\n} yield ()\n")),(0,i.kt)("p",null,"Cancellation/Interruption is propagated between the effect systems. Interrupting a ZIO task based on a Monix task will cancel the underlying Monix task and vice-versa. Be aware that ZIO interruption does not return until cancellation effects have completed, whereas Monix cancellation returns as soon as the signal is sent, without waiting for the cancellation effects to complete."),(0,i.kt)("h2",{id:"monix-scheduler"},"Monix Scheduler"),(0,i.kt)("p",null,"Sometimes it is useful to have a Monix ",(0,i.kt)("inlineCode",{parentName:"p"},"Scheduler")," available for interop purposes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime#monixScheduler")," method will create a scheduler that shares its execution context with the ZIO runtime:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.interop.monix._\nimport monix.execution.Scheduler\n\nZIO.runtime[Any].flatMap { runtime =>\n    implicit val monixScheduler: Scheduler = runtime.monixScheduler()\n\n    // do Monixy things\n}\n")))}p.isMDXComponent=!0}}]);