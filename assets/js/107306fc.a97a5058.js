"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1553],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>x,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){return function(t){var r=p(t.components);return n.createElement(e,a({},t,{components:r}))}},p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),d=l,f=c["".concat(i,".").concat(d)]||c[d]||b[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function x(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[f]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const a={},i="bxl_build_result",o={unversionedId:"generated/bxl/bxl_build_result",id:"generated/bxl/bxl_build_result",title:"bxl_build_result",description:"The result of building in bxl.",source:"@site/../docs/generated/bxl/bxl_build_result.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/bxl_build_result",permalink:"/docs/generated/bxl/bxl_build_result",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"bxl_actions",permalink:"/docs/generated/bxl/bxl_actions"},next:{title:"bxl_ctx",permalink:"/docs/generated/bxl/bxl_ctx"}},u={},s=[{value:"artifacts",id:"artifacts",level:2},{value:"Details",id:"details",level:3},{value:"failures",id:"failures",level:2},{value:"Details",id:"details-1",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"bxl_build_result"},"bxl_build_result"),(0,l.mdx)("p",null,"The result of building in bxl."),(0,l.mdx)("h2",{id:"artifacts"},"artifacts"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def artifacts() -> [None, "bxl_built_artifacts_iterable"]\n')),(0,l.mdx)("p",null,"Returns an optional iterable of artifacts that was successfully built."),(0,l.mdx)("h3",{id:"details"},"Details"),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n        ctx.output.print(value.artifacts())\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"failures"},"failures"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def failures() -> [None, "bxl_failed_artifacts_iterable"]\n')),(0,l.mdx)("p",null,"Returns an optional of iterable of artifacts that failed to be built."),(0,l.mdx)("h3",{id:"details-1"},"Details"),(0,l.mdx)("p",null,"Sample usage:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n        ctx.output.print(value.failures())\n")))}p.isMDXComponent=!0}}]);