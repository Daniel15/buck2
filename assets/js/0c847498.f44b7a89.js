"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8816],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>x,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){return function(t){var n=c(t.components);return r.createElement(e,i({},t,{components:n}))}},c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||f[m]||i;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="instant",s={unversionedId:"generated/bxl/instant",id:"generated/bxl/instant",title:"instant",description:"Instant methods, to aid in debugging/timing individual pieces of the bxl script.",source:"@site/../docs/generated/bxl/instant.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/instant",permalink:"/docs/generated/bxl/instant",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"get_paths_without_materialization",permalink:"/docs/generated/bxl/get_paths_without_materialization"},next:{title:"lazy_attrs",permalink:"/docs/generated/bxl/lazy_attrs"}},o={},p=[{value:"elapsed_millis",id:"elapsed_millis",level:2},{value:"Details",id:"details",level:3},{value:"elapsed_secs",id:"elapsed_secs",level:2},{value:"Details",id:"details-1",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"instant"},"instant"),(0,a.mdx)("p",null,"Instant methods, to aid in debugging/timing individual pieces of the bxl script."),(0,a.mdx)("h2",{id:"elapsed_millis"},"elapsed_millis"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def elapsed_millis() -> ""\n')),(0,a.mdx)("p",null,"Elapsed time in millis as a float"),(0,a.mdx)("h3",{id:"details"},"Details"),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl_elapsed_millis(ctx):\n    now = now()\n    time_a = now.elapsed_millis()\n    # do something that takes a long time\n    time_b = now.elapsed_millis()\n\n    ctx.output.print(time_a)\n    ctx.output.print(time_b)\n")),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"elapsed_secs"},"elapsed_secs"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def elapsed_secs() -> ""\n')),(0,a.mdx)("p",null,"Elapsed time in secs as a float"),(0,a.mdx)("h3",{id:"details-1"},"Details"),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl_elapsed_secs(ctx):\n    now = now()\n    time_a = now.elapsed_secs()\n    # do something that takes a long time\n    time_b = now.elapsed_secs()\n\n    ctx.output.print(time_a)\n    ctx.output.print(time_b)\n")))}c.isMDXComponent=!0}}]);