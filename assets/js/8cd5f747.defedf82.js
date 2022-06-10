"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8109],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return v}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=i(r),v=n,u=c["".concat(l,".").concat(v)]||c[v]||h[v]||o;return r?a.createElement(u,p(p({ref:t},d),{},{components:r})):a.createElement(u,p({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2208:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return h}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),p=["components"],s={sidebar_position:0},l="Networks",i={unversionedId:"develop/api-tools/api-sdk/api/networks",id:"develop/api-tools/api-sdk/api/networks",title:"Networks",description:"Referenced repository//docs.everos.dev/ever-sdk/reference/ever-os-api/networks#networks",source:"@site/../../src/develop/api-tools/api-sdk/api/networks.md",sourceDirName:"develop/api-tools/api-sdk/api",slug:"/develop/api-tools/api-sdk/api/networks",permalink:"/develop/api-tools/api-sdk/api/networks",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/api-sdk/api/networks.md",tags:[],version:"current",lastUpdatedAt:1654876115,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/api-sdk/api"},next:{title:"Schema",permalink:"/develop/api-tools/api-sdk/api/schema"}},d={},h=[{value:"Networks",id:"networks-1",level:2},{value:"Connect your application to EVER OS",id:"connect-your-application-to-ever-os",level:2},{value:"Connect TONOS-CLI to EVER OS",id:"connect-tonos-cli-to-ever-os",level:2},{value:"Other Clients",id:"other-clients",level:2}],c={toc:h};function v(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"networks"},"Networks"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Referenced repository: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/reference/ever-os-api/networks#networks"},"https://docs.everos.dev/ever-sdk/reference/ever-os-api/networks#networks"))),(0,o.kt)("p",null,"Each Everscale Operating System (EVER OS) instance has a single GraphQL API endpoint. Each Cloud has several EVER OS instances running for reliability."),(0,o.kt)("h2",{id:"networks-1"},"Networks"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Attention!")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"You need to specify ALL the endpoints in your configuration, not just one from the list. We do not guarantee availability of each endpoint all the time, but we guarantee that at least 1 endpoint is operational at the moment."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"EVER OS"),(0,o.kt)("th",{parentName:"tr",align:null},"Discription"),(0,o.kt)("th",{parentName:"tr",align:null},"Web Playground URLs"),(0,o.kt)("th",{parentName:"tr",align:null},"HTTP Endpoints"),(0,o.kt)("th",{parentName:"tr",align:null},"Websocket Endpoints"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EVER OS Cloud for Everscale"),(0,o.kt)("td",{parentName:"tr",align:null},"Access to Everscale network"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eri01.main.everos.dev/graphql"},"https://eri01.main.everos.dev/graphql"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://gra01.main.everos.dev/graphql"},"https://gra01.main.everos.dev/graphql"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://gra02.main.everos.dev/graphql"},"https://gra02.main.everos.dev/graphql"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://lim01.main.everos.dev/graphql"},"https://lim01.main.everos.dev/graphql"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://rbx01.main.everos.dev/graphql"},"https://rbx01.main.everos.dev/graphql")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eri01.main.everos.dev/"},"https://eri01.main.everos.dev/"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://gra01.main.everos.dev/"},"https://gra01.main.everos.dev/"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://gra02.main.everos.dev/"},"https://gra02.main.everos.dev/"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://lim01.main.everos.dev/"},"https://lim01.main.everos.dev/"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://rbx01.main.everos.dev/"},"https://rbx01.main.everos.dev/")),(0,o.kt)("td",{parentName:"tr",align:null},"wss://eri01.main.everos.dev/graphql    wss://gra01.main.everos.dev/graphql    wss://gra02.main.everos.dev/graphql    wss://lim01.main.everos.dev/graphql    wss://rbx01.main.everos.dev/graphql")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EVER OS Cloud for Developer network"),(0,o.kt)("td",{parentName:"tr",align:null},"Access to TON Labs Development Network"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eri01.net.everos.dev/graphql"},"https://eri01.net.everos.dev/graphql"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://rbx01.net.everos.dev/graphql"},"https://rbx01.net.everos.dev/graphql"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://gra01.net.everos.dev/graphql"},"https://gra01.net.everos.dev/graphql")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://eri01.net.everos.dev/"},"https://eri01.net.everos.dev/"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://rbx01.net.everos.dev/"},"https://rbx01.net.everos.dev/"),"  ",(0,o.kt)("a",{parentName:"td",href:"https://gra01.net.everos.dev/"},"https://gra01.net.everos.dev/")),(0,o.kt)("td",{parentName:"tr",align:null},"wss://eri01.net.everos.dev/graphql   wss://rbx01.net.everos.dev/graphql    wss://gra01.net.everos.dev/graphql")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/tonlabs/evernode-se"},"Evernode Startup Edition")),(0,o.kt)("td",{parentName:"tr",align:null},"Access to Evernode SE for local testing"),(0,o.kt)("td",{parentName:"tr",align:null},"http://localhost/graphql  ",(0,o.kt)("a",{parentName:"td",href:"http://127.0.0.1/graphql"},"http://127.0.0.1/graphql"),"  ",(0,o.kt)("a",{parentName:"td",href:"http://0.0.0.0/graphql"},"http://0.0.0.0/graphql"),"  (*nix only)"),(0,o.kt)("td",{parentName:"tr",align:null},"http://localhost/  ",(0,o.kt)("a",{parentName:"td",href:"http://127.0.0.1/"},"http://127.0.0.1/"),"  ",(0,o.kt)("a",{parentName:"td",href:"http://0.0.0.0/"},"http://0.0.0.0/")),(0,o.kt)("td",{parentName:"tr",align:null},"wss://localhost")))),(0,o.kt)("h2",{id:"connect-your-application-to-ever-os"},"Connect your application to EVER OS"),(0,o.kt)("p",null,"Find out how to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/installation/configure_sdk"},"connect your JS application to EVER OS"),"."),(0,o.kt)("h2",{id:"connect-tonos-cli-to-ever-os"},"Connect TONOS-CLI to EVER OS"),(0,o.kt)("p",null,"Find out how to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli#21-set-the-network-and-parameter-values"},"connect TONOS-CLI to EVER OS"),"."),(0,o.kt)("h2",{id:"other-clients"},"Other Clients"),(0,o.kt)("p",null,"If you use another language check the official GraphQL documentation how to connect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"via ",(0,o.kt)("a",{parentName:"li",href:"https://graphql.org/code/"},"other GraphQL Clients")),(0,o.kt)("li",{parentName:"ul"},"via ",(0,o.kt)("a",{parentName:"li",href:"https://graphql.org/learn/serving-over-http/"},"HTTP requests")),(0,o.kt)("li",{parentName:"ul"},"via websocket protocol ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"))),(0,o.kt)("p",null,"In the next section find out how to work with GraphQL Web playground and easily explore blockchain data with it."))}v.isMDXComponent=!0}}]);