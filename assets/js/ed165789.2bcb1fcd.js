"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3456],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5277:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"index",title:"Introduction"},p=void 0,s={unversionedId:"datatypes/index",id:"datatypes/index",isDocsHomePage:!1,title:"Introduction",description:"ZIO contains a few data types that can help you solve complex problems in asynchronous and concurrent programming. ZIO data types categorize into these sections:",source:"@site/docs/datatypes/index.md",sourceDirName:"datatypes",slug:"/datatypes/index",permalink:"/datatypes/index",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",next:{title:"Summary",permalink:"/datatypes/core/index"}},m=[{value:"Core Data Types",id:"core-data-types",children:[]},{value:"Fiber Primitives",id:"fiber-primitives",children:[]},{value:"Concurrency Primitives",id:"concurrency-primitives",children:[]},{value:"STM",id:"stm",children:[]},{value:"Streaming",id:"streaming",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO contains a few data types that can help you solve complex problems in asynchronous and concurrent programming. ZIO data types categorize into these sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#core-data-types"},"Core Data Types")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#fiber-primitives"},"Fiber Primitives")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#concurrency-primitives"},"Concurrency Primitives")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#stm"},"STM")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#resource-safety"},"Resource Safety")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#streaming"},"Streaming")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#miscellaneous"},"Miscellaneous"))),(0,i.kt)("h2",{id:"core-data-types"},"Core Data Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/zio"},"ZIO"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO")," is a value that models an effectful program, which might fail or succeed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/uio"},"UIO"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"UIO[A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Nothing, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/urio"},"URIO"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"URIO[R, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[R, Nothing, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/task"},"Task"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Task[A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Throwable, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/rio"},"RIO"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"RIO[R, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[R, Throwable, A]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/io"},"IO"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"IO[E, A]")," is a type alias for ",(0,i.kt)("inlineCode",{parentName:"li"},"ZIO[Any, E, A]"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/exit"},"Exit"))," \u2014 An ",(0,i.kt)("inlineCode",{parentName:"li"},"Exit[E, A]")," describes the result of executing an ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/cause"},"Cause"))," - ",(0,i.kt)("inlineCode",{parentName:"li"},"Cause[E]")," is a description of a full story of a fiber failure. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/core/runtime"},"Runtime"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime[R]")," is capable of executing tasks within an environment ",(0,i.kt)("inlineCode",{parentName:"li"},"R"),".")),(0,i.kt)("h2",{id:"fiber-primitives"},"Fiber Primitives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/fiber/fiber"},"Fiber"))," \u2014 A fiber value models an ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," value that has started running, and is the moral equivalent of a green thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/fiber/fiberref"},"FiberRef"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberRef[A]")," models a mutable reference to a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". As opposed to ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref[A]"),", a value is bound to an executing ",(0,i.kt)("inlineCode",{parentName:"li"},"Fiber")," only.  You can think of it as Java's ",(0,i.kt)("inlineCode",{parentName:"li"},"ThreadLocal")," on steroids."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/fiber/fiberstatus"},"Fiber.Status"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Fiber.Status")," describe the current status of a Fiber."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/fiber/fiberid"},"FiberId"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"FiberId")," describe the unique identity of a Fiber.")),(0,i.kt)("h2",{id:"concurrency-primitives"},"Concurrency Primitives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/hub"},"Hub"))," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"Hub")," is an asynchronous message hub that allows publishers to efficiently broadcast values to many subscribers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/promise"},"Promise"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Promise")," is a model of a variable that may be set a single time, and awaited on by many fibers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/semaphore"},"Semaphore"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Semaphore")," is an asynchronous (non-blocking) semaphore that plays well with ZIO's interruption."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/zref"},"ZRef"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZRef[EA, EB, A, B]")," is a polymorphic, purely functional description of a mutable reference. The fundamental operations of a ",(0,i.kt)("inlineCode",{parentName:"li"},"ZRef")," are ",(0,i.kt)("inlineCode",{parentName:"li"},"set")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"get"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/ref"},"Ref"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref[A]")," models a mutable reference to a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A"),". The two basic operations are ",(0,i.kt)("inlineCode",{parentName:"li"},"set"),", which fills the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref")," with a new value, and ",(0,i.kt)("inlineCode",{parentName:"li"},"get"),", which retrieves its current content. All operations on a ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref")," are atomic and thread-safe, providing a reliable foundation for synchronizing concurrent programs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/zrefsynchronized"},"ZRef.Synchronized"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZRef.Synchronized[RA, RB, EA, EB, A, B]")," is a polymorphic, purely functional description of a mutable reference. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/refsynchronized"},"Ref.Synchronized"))," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"Ref.Synchronized[A]")," models a ",(0,i.kt)("strong",{parentName:"li"},"mutable reference")," to a value of type ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," in which we can store ",(0,i.kt)("strong",{parentName:"li"},"immutable")," data, and update it atomically ",(0,i.kt)("strong",{parentName:"li"},"and")," effectfully."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/concurrency/queue"},"Queue"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Queue")," is an asynchronous queue that never blocks, which is safe for multiple concurrent producers and consumers.")),(0,i.kt)("h2",{id:"stm"},"STM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/stm"},"STM"))," - An ",(0,i.kt)("inlineCode",{parentName:"p"},"STM")," represents an effect that can be performed transactionally resulting in a failure or success.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tarray"},"TArray"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TArray[A]")," is an array of mutable references that can participate in transactions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tset"},"TSet"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TSet")," is a mutable set that can participate in transactions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tmap"},"TMap"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TMap[A]")," is a mutable map that can participate in transactions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tref"},"TRef"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TRef")," is a mutable reference to an immutable value that can participate in transactions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tpriorityqueue"},"TPriorityQueue"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue[A]")," is a mutable priority queue that can participate in transactions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tpromise"},"TPromise"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TPromise")," is a mutable reference that can be set exactly once and can participate in transactions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tqueue"},"TQueue"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TQueue")," is a mutable queue that can participate in transactions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/treentrantlock"},"TReentrantLock"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TReentrantLock")," is a reentrant read / write lock that can be composed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stm/tsemaphore"},"TSemaphore"))," - A ",(0,i.kt)("inlineCode",{parentName:"p"},"TSemaphore")," is a semaphore that can participate in transactions."),(0,i.kt)("h2",{parentName:"li",id:"resource-safety"},"Resource Safety")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/resource/managed"},"Managed"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"p"},"Managed")," is a value that describes a perishable resource that may be consumed only once inside a given scope."))),(0,i.kt)("h2",{id:"streaming"},"Streaming"),(0,i.kt)("p",null,"The following datatypes can be found in ZIO streams library:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stream/zstream"},"ZStream"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream")," is a lazy, concurrent, asynchronous source of values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/stream/zsink"},"ZSink"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZSink")," is a consumer of values from a ",(0,i.kt)("inlineCode",{parentName:"li"},"ZStream"),", which may produces a value when it has consumed enough.")),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/misc/chunk"},"Chunk"))," \u2014 ZIO ",(0,i.kt)("inlineCode",{parentName:"li"},"Chunk"),": Fast, Pure Alternative to Arrays"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/datatypes/misc/schedule"},"Schedule"))," \u2014 A ",(0,i.kt)("inlineCode",{parentName:"li"},"Schedule")," is a model of a recurring schedule, which can be used for repeating successful ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," values, or retrying failed ",(0,i.kt)("inlineCode",{parentName:"li"},"IO")," values.")),(0,i.kt)("p",null,"To learn more about these data types, please explore the pages above, or check out the Scaladoc documentation."))}u.isMDXComponent=!0}}]);