"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9679],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1097:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={sidebar_position:1},l="Schema",p={unversionedId:"develop/api-tools/api-sdk/api/schema",id:"develop/api-tools/api-sdk/api/schema",title:"Schema",description:"Referenced repository//docs.everos.dev/ever-sdk/reference/ever-os-api/schema",source:"@site/../../src/develop/api-tools/api-sdk/api/schema.md",sourceDirName:"develop/api-tools/api-sdk/api",slug:"/develop/api-tools/api-sdk/api/schema",permalink:"/develop/api-tools/api-sdk/api/schema",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/api-tools/api-sdk/api/schema.md",tags:[],version:"current",lastUpdatedAt:1654876115,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Networks",permalink:"/develop/api-tools/api-sdk/api/networks"},next:{title:"Web Playground",permalink:"/develop/api-tools/api-sdk/api/playgroud"}},c={},d=[{value:"Root types",id:"root-types",level:2},{value:"Non-root types",id:"non-root-types",level:2},{value:"Query types",id:"query-types",level:2},{value:"Subscription types",id:"subscription-types",level:2},{value:"Mutation types",id:"mutation-types",level:2},{value:"Syntax",id:"syntax",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schema"},"Schema"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Referenced repository: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/reference/ever-os-api/schema"},"https://docs.everos.dev/ever-sdk/reference/ever-os-api/schema"))),(0,o.kt)("p",null,"A schema defines a type system of GraphQL API. It describes the complete set of possible data (objects, fields, relationships, everything) that a client can access."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#root-types"},"Root types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#non-root-types"},"Non-root types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#query-types"},"Query types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#subscription-types"},"Subscription types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mutation-types"},"Mutation types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#syntax"},"Syntax"))),(0,o.kt)("h2",{id:"root-types"},"Root types"),(0,o.kt)("p",null,"TON Labs GraphQL schema has three root types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"query"),(0,o.kt)("li",{parentName:"ul"},"mutation"),(0,o.kt)("li",{parentName:"ul"},"subscription")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/June2018/#sec-Type-System"},"query type")," defines GraphQL operations that retrieve data from the server."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.github.io/graphql-spec/June2018/#sec-Type-System"},"mutation type")," defines GraphQL operations that change data on the server. It is analogous to performing HTTP verbs such as ",(0,o.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),". Mutations are used to send messages to the blockchain. We recommend to do it only via SDK, not directly."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"subscription")," root type \u2013 a long\u2010lived request that fetches data in response to source events."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/reference/types-and-methods/mod_net"},"TON Labs SDK net module")," - the official TON Labs wrapper over GraphQL API for root queries and subscriptions."),(0,o.kt)("h2",{id:"non-root-types"},"Non-root types"),(0,o.kt)("p",null,"See non-root type descriptions in ",(0,o.kt)("a",{parentName:"p",href:"/develop/api-tools/api-sdk/api/field-description"},"Field descriptions")," section."),(0,o.kt)("h2",{id:"query-types"},"Query types"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Collection type queries:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blockchain"),(0,o.kt)("td",{parentName:"tr",align:null},"New API that includes a set of functions for pagination of ",(0,o.kt)("inlineCode",{parentName:"td"},"blocks"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"key_blocks"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"transactions")," and account\u2019s transactions via blockchain-based cursor that stays the same for all the endpoints, compared to an approach with an artificial database cursor - like timestamp or sequential index - that may vary from instance to instance. May be useful for Integrators and DApps who needs to sequentially read all blocks or transactions from API, due to inefficiency of simple collection pagination by timestamps or ",(0,o.kt)("inlineCode",{parentName:"td"},"seq_no")," in multithreaded Everscale environment, also such simple pagination may not work when there are too many objects with the same timestamp.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/develop/api-tools/api-sdk/api/field-description#block-type"},"blocks")),(0,o.kt)("td",{parentName:"tr",align:null},"Query blocks data. Blocks include masterchain and shardchain blocks.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/develop/api-tools/api-sdk/api/field-description#account-type"},"accounts")),(0,o.kt)("td",{parentName:"tr",align:null},"Query the latest account data: includes such information as address, balance, code, data, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/develop/api-tools/api-sdk/api/field-description#message-type"},"messages")),(0,o.kt)("td",{parentName:"tr",align:null},"Query messages data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/develop/api-tools/api-sdk/api/field-description#transaction-type"},"transaction")),(0,o.kt)("td",{parentName:"tr",align:null},"Query transactions data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blocks","_","signatures"),(0,o.kt)("td",{parentName:"tr",align:null},"Query data about block signatures.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"statistics"),(0,o.kt)("td",{parentName:"tr",align:null},"General Everscale Network statistics related to accounts, transactions, messages and blocks. And also some essential statistics about validators and depools.Available only in Cloud API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"counterparties"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns a list of addresses the specified account interacted with, sorted by the latest interaction time (the latest message time between 2 accounts) DESC. Feature may be useful for wallet applications or for chat-based DApps to show the list of counterparties in descending order.Available only in Cloud API.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aggregation queries:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateBlocks"),(0,o.kt)("td",{parentName:"tr",align:null},"Get aggregation info about blocks: COUNT, SUM, MAX, MIN, AVERAGE functions over blocks data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateTransactions"),(0,o.kt)("td",{parentName:"tr",align:null},"Get aggregation info about transactions: COUNT, SUM, MAX, MIN, AVERAGE functions over transactions data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateMessages"),(0,o.kt)("td",{parentName:"tr",align:null},"Get aggregation info about messages: COUNT, SUM, MAX, MIN, AVERAGE functions over messages data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateAccounts"),(0,o.kt)("td",{parentName:"tr",align:null},"Get aggregation info about accounts: COUNT, SUM, MAX, MIN, AVERAGE functions over accounts data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregateBlockSignatures"),(0,o.kt)("td",{parentName:"tr",align:null},"Get aggregation info about block signaturess: COUNT, SUM, MAX, MIN, AVERAGE functions over block signatures data.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other queries")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"getAccountsCount - number of accounts. ",(0,o.kt)("strong",{parentName:"li"},"will be deprecated soon"),"."),(0,o.kt)("li",{parentName:"ul"},"getTransactionsCount - number of transactions. ",(0,o.kt)("strong",{parentName:"li"},"will be deprecated soon"),"."),(0,o.kt)("li",{parentName:"ul"},"getAccountsTotalBalance - total balance of accounts. ",(0,o.kt)("strong",{parentName:"li"},"will be deprecated soon"),"."),(0,o.kt)("li",{parentName:"ul"},"info - get information about the active GraphQL API version.")),(0,o.kt)("h2",{id:"subscription-types"},"Subscription types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"blocks"),(0,o.kt)("li",{parentName:"ul"},"accounts"),(0,o.kt)("li",{parentName:"ul"},"messages"),(0,o.kt)("li",{parentName:"ul"},"transaction"),(0,o.kt)("li",{parentName:"ul"},"blocks","_","signatures"),(0,o.kt)("li",{parentName:"ul"},"counterparties")),(0,o.kt)("h2",{id:"mutation-types"},"Mutation types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"postRequests - used to send messages to blockchain.")),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"Read about GraphQL syntax in its ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org"},(0,o.kt)("inlineCode",{parentName:"a"},"official documentation")),". In this example we query account info:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  blockchain{\n   account(address:"0:653b9a6452c7a982c6dc92b2da9eba832ade1c467699ebb3b43dca6d77b780dd"){\n    info{\n      address\n      acc_type\n      balance\n      last_paid\n      last_trans_lt\n      boc\n      data\n      code\n      library\n      data_hash\n      code_hash\n      library_hash\n    }\n  }\n  }\n}\n')),(0,o.kt)("p",null,"Here you can see a request for account's  fields ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"acc_type"),", etc, forming a selection set (also called a 'projection')."),(0,o.kt)("p",null,"A selection set must contain only scalar fields, otherwise you will get an error. A scalar field describes one discrete piece of information available to a request within a selection set. If field is an object, you need to specify the fields of this object."),(0,o.kt)("p",null,"Read more in the next sections."))}m.isMDXComponent=!0}}]);