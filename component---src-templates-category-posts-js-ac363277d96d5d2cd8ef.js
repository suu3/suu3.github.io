"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[928],{4446:function(A,e,a){a.d(e,{h:function(){return r}});var t,n=a(758);function l(){return l=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)({}).hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A},l.apply(null,arguments)}var r=function(A){return n.createElement("svg",l({width:9,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},A),t||(t=n.createElement("path",{d:"M8 15L0.999998 8L8 1",stroke:"var(--color-bg-surface-02, #000000)",strokeLinecap:"round",strokeLinejoin:"round"})))}},7046:function(A,e,a){var t=a(758);e.A=A=>{let{children:e,className:a}=A;return t.createElement("main",{className:a},e)}},5368:function(A,e,a){a.d(e,{A:function(){return F}});var t={};a.r(t),a.d(t,{qS:function(){return c},p5:function(){return o},aP:function(){return m},Vf:function(){return s},_8:function(){return g},vW:function(){return d},fr:function(){return u}});var n={};a.r(n),a.d(n,{vu:function(){return j},wx:function(){return k},iE:function(){return K}});var l=a(758),r=a(6448),i=a(1572),c="post-list-item-module--badge--43d5b",o="post-list-item-module--badges-cls--c2d46",m="post-list-item-module--box--87286",s="post-list-item-module--description-cls--e9c06",g="post-list-item-module--img--09dcb",d="post-list-item-module--inner--aea56",u="post-list-item-module--thumbnail-cls--c3027",p=a(6911);var E,f=A=>{let{title:e,date:n,description:r,category:i,tag:E=[],thumbnail:f}=A;const w=(0,p.c)(f),C=null==E?void 0:E.map((A=>l.createElement("span",{className:c,key:A},"#",A)));return l.createElement("article",{className:m,itemScope:!0,itemType:"http://schema.org/Article"},i&&l.createElement("header",null,i),l.createElement("div",{className:d},l.createElement("div",{className:u},l.createElement("span",null,i),w?l.createElement(p.G,{className:g,image:w,alt:"",objectFit:"cover"}):l.createElement(p.S,{className:g,formats:["auto","webp","avif"],placeholder:"blurred",src:"../../static/images/dummy.jpg",width:256,height:157,quality:95,alt:"",__imageData:a(6595)})),C&&l.createElement("div",{className:o},C),l.createElement("div",{className:t.item},l.createElement("h2",null,l.createElement("span",{itemProp:"headline"},e)),l.createElement("section",null,l.createElement("p",{className:s,dangerouslySetInnerHTML:{__html:r},itemProp:"description"})))),l.createElement("small",null,n))},w=a(508),C=a(3526),h="pagination-module--active--e84c6",B="pagination-module--btn--5d112",b="pagination-module--disabled--d0f45",I="pagination-module--ellipsis--1d312",Q="pagination-module--prev-btn--4436f",v=a(4446);function y(){return y=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)({}).hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A},y.apply(null,arguments)}var N=function(A){return l.createElement("svg",y({width:9,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},A),E||(E=l.createElement("path",{d:"M1 1L8 8L0.999999 15",stroke:"var(--color-bg-surface-02, #000000)",strokeLinecap:"round",strokeLinejoin:"round"})))};var D=A=>{let{pagesToShow:e=10,currentPage:a,totalPages:t,onPageChange:n}=A;const r=1===a,i=a===t,c="...",o=Math.floor(e/2),m=(t<=e?Array.from({length:t},((A,e)=>e+1)):a<=o?[].concat((0,w.A)(Array.from({length:e},((A,e)=>e+1))),[c,t]):a>t-o?[1,c].concat((0,w.A)(Array.from({length:e},((A,a)=>t-e+a+1)))):[1,c].concat((0,w.A)(Array.from({length:e},((A,e)=>a-o+e))),[c,t])).map(((A,e)=>{const t=A===a,r=A===c;return l.createElement("span",{key:A+" + "+e,onClick:()=>{r||n(Number(A))},className:(0,C.A)("pagination-module--page--ead35",{[h]:t,[I]:r})},A)}));return l.createElement("div",{className:"pagination-module--wrapper--3ea89"},l.createElement("button",{onClick:()=>{a>1&&n(a-1)},className:(0,C.A)(B,{[Q]:!0,[b]:r})},l.createElement(v.h,null)),l.createElement("ol",{className:"pagination-module--pages--bbcaf"},m),l.createElement("button",{className:(0,C.A)(B,"pagination-module--next-btn--4e11f",{[b]:i}),onClick:()=>{a<t&&n(a+1)}},l.createElement(N,null)))},j="category-menu-module--active--d3701",k="category-menu-module--header--862c6",K="category-menu-module--wrapper--377cc",R=a(9);const L=A=>"/"+decodeURI(A).split("/")[1];var M=A=>{let{categories:e={},pathname:a=""}=A;const{0:t,1:i}=(0,l.useState)(L(a)),{totalCount:c,group:o}=e,m=A=>t===A?j:n.inactive,s=A=>{i(A)};return l.createElement("div",{className:K},l.createElement("header",{className:k},l.createElement("p",null,"Category")),l.createElement("ul",null,l.createElement(r.Link,{to:R.C,onClick:()=>s("/home")},l.createElement("li",{className:m("/home")},"전체 보기 (",c,")")),o.map((A=>{let{fieldValue:e,totalCount:a}=A;return l.createElement(r.Link,{key:e,to:"/"+e+"/1",onClick:()=>s("/"+e)},l.createElement("li",{className:m("/"+e)},e," (",a,")"))}))))},U=a(7046);var x=()=>{var A;const e=null===(A=(0,r.useStaticQuery)("2785349746").site.siteMetadata)||void 0===A?void 0:A.author;return l.createElement("div",{className:"bio-module--profile--8f90a"},l.createElement("header",null,l.createElement("img",{src:"data:image/gif;base64,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",width:64,height:64,alt:"profile image"}),l.createElement("div",null,l.createElement("span",null,"@",null==e?void 0:e.name),l.createElement("span",null,"Developer"))),l.createElement("p",null,"그림과 음악이 좋은 프론트엔드 개발자"))};var F=A=>{let{data:e,location:a,pageContext:t}=A;const{currentPage:n,totalCount:c}=t,o=e.allCategoriesInfo,m=e.allMarkdownRemark.nodes,s=(e.allTagsInfo,L(a.pathname)),g=0===m.length?l.createElement("p",null,"게시물이 없습니다."):m.map((A=>{var e,a;const t=A.frontmatter.title||A.fields.slug;return l.createElement("li",{key:A.fields.slug},l.createElement(r.Link,{to:A.fields.slug,itemProp:"url"},l.createElement(f,{title:t,date:A.frontmatter.date,category:null===(e=A.frontmatter)||void 0===e?void 0:e.category,tag:A.frontmatter.tag,description:A.frontmatter.description||A.excerpt,thumbnail:null===(a=A.frontmatter)||void 0===a?void 0:a.thumbnail})))}));return l.createElement(i.A,{location:a},l.createElement("div",{className:"post-list-template-module--main-wrapper--99ca4"},l.createElement("aside",{className:"post-list-template-module--side-menu--484bf"},l.createElement(x,null),o&&l.createElement(M,{pathname:a.pathname,categories:o})),l.createElement(U.A,{className:"post-list-template-module--main--3e062"},l.createElement("h1",null,"Latest"),l.createElement("ol",{className:"post-list-template-module--ol--7083e"},g),l.createElement("hr",null),l.createElement(D,{onPageChange:A=>{(0,r.navigate)(s+"/"+A+"/")},currentPage:n,totalPages:Math.ceil(c/6)}))))}},7166:function(A,e,a){a.r(e),a.d(e,{Head:function(){return r}});var t=a(758),n=a(8e3),l=a(5368);e.default=A=>{let{data:e,location:a,pageContext:n}=A;return t.createElement(l.A,{data:e,location:a,pageContext:n})};const r=()=>t.createElement(n.A,{title:"All posts"})},6595:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUGBwj/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/aAAwDAQACEAMQAAAB6MimrdjJiiJ6P//EABsQAAICAwEAAAAAAAAAAAAAAAMEBQYBAhUW/9oACAEBAAEFAg1qWZWNX/ByZLQvnfHQkFJCoQsUI6Cu5f/EABcRAAMBAAAAAAAAAAAAAAAAAAABEgL/2gAIAQMBAT8BWnRDP//EABoRAAICAwAAAAAAAAAAAAAAAAABAgMRE0H/2gAIAQIBAT8BdalVnhtZ/8QAKBAAAQMDAgMJAAAAAAAAAAAAAQIDBAAFEhEUEyFBIiUyUVJhhJHh/9oACAEBAAY/Ag1Nv7CNR4W/2n7m3DuEzcRceK0gKxOXPy6Ue7pg+EqpyHrzIG20wLaWwTqevZoCMh7NQyL24UF8/caUS6lTh9TjhUfs1//EAB0QAAIDAAIDAAAAAAAAAAAAAAERACExQWGBkaH/2gAIAQEAAT8hIEFUE/YiUajc3ACg6NuIhI4TL05mAqBQFh34UtgoyhtrGYMk6+Qmf//aAAwDAQACAAMAAAAQhw//xAAcEQABAwUAAAAAAAAAAAAAAAABABEhMXGh4fH/2gAIAQMBAT8QBaTNuIN1xtf/xAAbEQADAAIDAAAAAAAAAAAAAAABESEAMVFxof/aAAgBAgEBPxAzAVNoxd84qL3P/8QAHRABAQADAAIDAAAAAAAAAAAAAREAITFBUWGRof/aAAgBAQABPxBdUwyZpB476w5HHqmrcSBSrwNrhylx8Kx+3GFmdEXWFiwQIRvSyjIeNX2vcEZGDw5Vn3n/2Q=="},"images":{"fallback":{"src":"/static/c3a5be17b5aa4afde022abfe24daa4d6/89358/dummy.jpg","srcSet":"/static/c3a5be17b5aa4afde022abfe24daa4d6/f4c5a/dummy.jpg 64w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/232cf/dummy.jpg 128w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/89358/dummy.jpg 256w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/8225e/dummy.jpg 512w","sizes":"(min-width: 256px) 256px, 100vw"},"sources":[{"srcSet":"/static/c3a5be17b5aa4afde022abfe24daa4d6/b156b/dummy.avif 64w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/5e22d/dummy.avif 128w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/3fe20/dummy.avif 256w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/79417/dummy.avif 512w","type":"image/avif","sizes":"(min-width: 256px) 256px, 100vw"},{"srcSet":"/static/c3a5be17b5aa4afde022abfe24daa4d6/798f6/dummy.webp 64w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/4a95e/dummy.webp 128w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/18a0c/dummy.webp 256w,\\n/static/c3a5be17b5aa4afde022abfe24daa4d6/d2a69/dummy.webp 512w","type":"image/webp","sizes":"(min-width: 256px) 256px, 100vw"}]},"width":256,"height":157}')}}]);
//# sourceMappingURL=component---src-templates-category-posts-js-ac363277d96d5d2cd8ef.js.map