"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9233],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(k,i(i({ref:r},c),{},{components:t})):n.createElement(k,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4125:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:4},p="Error API",s={unversionedId:"develop/api-tools/api-sdk/api/errors",id:"develop/api-tools/api-sdk/api/errors",title:"Error API",description:"Referenced repository//docs.everos.dev/ever-sdk/reference/errorapi",source:"@site/../../src/develop/api-tools/api-sdk/api/errors.md",sourceDirName:"develop/api-tools/api-sdk/api",slug:"/develop/api-tools/api-sdk/api/errors",permalink:"/develop/api-tools/api-sdk/api/errors",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/api-sdk/api/errors.md",tags:[],version:"current",lastUpdatedAt:1654876115,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Field Descriptions",permalink:"/develop/api-tools/api-sdk/api/field-description"},next:{title:"Samples",permalink:"/api/samples"}},c={},d=[{value:"TONClientError",id:"tonclienterror",level:2},{value:"Properties",id:"properties",level:3},{value:"Types",id:"types",level:2},{value:"ErrorData",id:"errordata",level:3},{value:"Error example",id:"error-example",level:2}],u={toc:d};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-api"},"Error API"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Referenced repository: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/reference/error_api"},"https://docs.everos.dev/ever-sdk/reference/error_api"))),(0,o.kt)("p",null,"SDK Error API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tonclienterror"},"TONClientError"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#properties"},"Properties")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#types"},"Types"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#errordata"},"ErrorData")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#error-example"},"Error example"))),(0,o.kt)("h2",{id:"tonclienterror"},"TONClientError"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"code: number")),(0,o.kt)("p",null,"Unique error code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"message: string")),(0,o.kt)("p",null,"Error description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"data: ErrorData")),(0,o.kt)("p",null,"Additional data provided with error. All the fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorData")," are optional and their presence depends on the error code."),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("h3",{id:"errordata"},"ErrorData"),(0,o.kt)("p",null,"All the fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorData")," are optional and their presence depends on the error code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"{\n    message_id?: string,\n    shard_block_id?: string\n    core_version?: string,\n    waiting_expiration_time?:string,\n    block_time?: string,\n    phase?: string\n    exit_code\n    exit_arg\n    account_address?: string\n    local_error: ErrorData\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"message","_","id")),(0,o.kt)("p",null,"Message id"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"shard","_","block","_","id")),(0,o.kt)("p",null,"The last shardchain block of the account received before the error occurred."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"core","_","version")),(0,o.kt)("p",null,"Core library binary version used"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"waiting","_","expiration","_","time")),(0,o.kt)("p",null,"Message expiration time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"block","_","time")),(0,o.kt)("p",null,"Creation time of the last shardchain block of the account received before the error occurred."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"phase")),(0,o.kt)("p",null,"Transaction execution phase when contract execution was aborted"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"exit","_","code")),(0,o.kt)("p",null,"Exit code of exception thrown by the aborted contract execution"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"exit","_","arg")),(0,o.kt)("p",null,"Exit args provided along with exit code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"account","_","address")),(0,o.kt)("p",null,"Address of the account"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"local","_","error: ErrorData")),(0,o.kt)("p",null,"Result of local transaction emulation performed after the message was not successfully delivered."),(0,o.kt)("h2",{id:"error-example"},"Error example"),(0,o.kt)("p",null,"Here you can see an error returned by process","_","message function when message was not delivered to the blockchain and got expired ","(","code 507",")","."),(0,o.kt)("p",null,"In such cases SDK emulated the same transaction locally and here it got a local","_","error with possible reason - wrong signature - exit code = 40."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{\n  "code": 507,\n  "message": "Message expired. Possible reason: Contract execution was terminated with error: Contract did not accept message, exit code: 40 (Invalid signature). Check sign keys. For more information about exit code check the contract source code or ask the contract developer",\n  "data": {\n    "message_id": "31ed01a8c91d06e526cef015b406273377c41710216cc160af9428e1bb263671",\n    "shard_block_id": "c8c8020c4404b099ec3af2a38373875c1fb8128ff0e61ed3186e8d822533a99f",\n    "core_version": "1.6.1",\n    "waiting_expiration_time": "Thu, 04 Feb 2021 00:49:29 +0300 (1612388969)",\n    "block_time": "Thu, 04 Feb 2021 00:49:30 +0300 (1612388970)",\n    "local_error": {\n      "code": 414,\n      "message": "Contract execution was terminated with error: Contract did not accept message, exit code: 40 (Invalid signature). Check sign keys. For more information about exit code check the contract source code or ask the contract developer",\n      "data": {\n        "core_version": "1.6.1",\n        "phase": "computeVm",\n        "exit_code": 40,\n        "exit_arg": "0",\n        "account_address": "0:c6cfd0506f8d33891690b34fafe3f686873afc42653ef88a11d73e4866fda928",\n        "description": "Invalid signature"\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);