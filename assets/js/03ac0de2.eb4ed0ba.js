"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2698],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>p,MDXProvider:()=>h,mdx:()=>_,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},i.apply(this,arguments)}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){return function(e){var a=c(e.components);return r.createElement(t,i({},e,{components:a}))}},c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},h=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(m,l(l({ref:e},p),{},{components:a})):r.createElement(m,l({ref:e},p))}));function _(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},29366:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={},o="get_paths_without_materialization",l={unversionedId:"generated/bxl/get_paths_without_materialization",id:"generated/bxl/get_paths_without_materialization",title:"get_paths_without_materialization",description:"getpathswithout_materialization",source:"@site/../docs/generated/bxl/get_paths_without_materialization.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/get_paths_without_materialization",permalink:"/docs/generated/bxl/get_paths_without_materialization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"get_path_without_materialization",permalink:"/docs/generated/bxl/get_path_without_materialization"},next:{title:"instant",permalink:"/docs/generated/bxl/instant"}},s={},p=[{value:"get_paths_without_materialization",id:"get_paths_without_materialization-1",level:2},{value:"Details",id:"details",level:3}],u={toc:p};function c(t){let{components:e,...a}=t;return(0,n.mdx)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"get_paths_without_materialization"},"get_paths_without_materialization"),(0,n.mdx)("h2",{id:"get_paths_without_materialization-1"},"get_paths_without_materialization"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'def get_paths_without_materialization(this: "", ctx: "bxl_ctx", *, abs: bool.type = None) -> ""\n')),(0,n.mdx)("p",null,"The output paths of a ",(0,n.mdx)("inlineCode",{parentName:"p"},"cmd_args()")," inputs. The output paths will be returned as a list. Takes an optional boolean to print the absolute or relative path. Note that this method returns an artifact path without asking for the artifact to be materialized, (i.e. it may not actually exist on the disk yet)."),(0,n.mdx)("h3",{id:"details"},"Details"),(0,n.mdx)("p",null,"This is a risky function to call because you may accidentally pass this path to further BXL actions\nthat expect the artifact to be materialized. If this happens, the BXL script will error out.\nIf you want the path without materialization for other uses that don\u2019t involve passing them into\nfurther actions, then it\u2019s safe."),(0,n.mdx)("p",null,"Sample usage:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_get_paths_without_materialization(ctx):\n    node = ctx.configured_targets("root//bin:the_binary")\n    providers = ctx.analysis(node).providers()\n    path = get_paths_without_materialization(providers[RunInfo], abs=True) # Note this artifact is NOT ensured or materialized\n    ctx.output.print(path)\n')))}c.isMDXComponent=!0}}]);