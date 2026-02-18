import{_ as M,f as q,z as B,w as V,g as N,r as $,h as R,A as P,o as f,a as O,i as k,j as a,C as H,l as b,E as j,q as S,m as h,V as z,p as L,t as Q,F as U,x as G,y as F}from"./ByTLSTAx.js";import{_ as p}from"./D4Uph03E.js";import{d as J}from"./DKVnf8_P.js";import{d as K}from"./Y0fXfMW6.js";var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ArticleNewsDetail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"meapArticle",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapArticle_meapArticle_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"dateCreated"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"contributors"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"contributors_staffMember_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"byline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"slug"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"contributors_externalContributor_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"byline"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"contributor"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"articleTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"byline"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"date"},name:{kind:"Name",value:"dateUpdated"},arguments:[],directives:[]}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"MEAPAllFpb"},directives:[]}]}}]}}],loc:{start:0,end:1348}};d.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/collections/MEAPAllFpb.gql"

query ArticleNewsDetail($slug: [String!]) {
    entry(section: "meapArticle", slug: $slug) {
        ... on meapArticle_meapArticle_Entry {
            id
            sectionHandle
            uri
            slug
            to: slug
            title
            text: summary
            dateCreated
            category: articleCategories {
                title
            }
              contributors {
                ... on contributors_staffMember_BlockType {
                    byline
                    staffMember {
                        title
                        to: slug
                    }
                }
                ... on contributors_externalContributor_BlockType {
                byline
                title: contributor
                }
            }
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    id
                    image {
                        ...Image
                    }
                }
            }

            articleTopics {
                title
            }

            byline: staffMember {
                id
                slug
                title
            }
            date: dateUpdated
        }

        ...MEAPAllFpb
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var w={};function A(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return w[t]?!1:(w[t]=!0,!0)})}d.definitions=d.definitions.concat(A(J.definitions));d.definitions=d.definitions.concat(A(K.definitions));function g(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var t=n.type;t.kind==="NamedType"&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(l){g(l,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(l){g(l,i)}),n.definitions&&n.definitions.forEach(function(l){g(l,i)})}var y={};(function(){d.definitions.forEach(function(i){if(i.name){var t=new Set;g(i,t),y[i.name.value]=t}})})();function x(n,i){for(var t=0;t<n.definitions.length;t++){var l=n.definitions[t];if(l.name&&l.name.value==i)return l}}function W(n,i){var t={kind:n.kind,definitions:[x(n,i)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var l=y[i]||new Set,c=new Set,r=new Set;for(l.forEach(function(e){r.add(e)});r.size>0;){var m=r;r=new Set,m.forEach(function(e){if(!c.has(e)){c.add(e);var o=y[e]||new Set;o.forEach(function(v){r.add(v)})}})}return c.forEach(function(e){var o=x(n,e);o&&t.definitions.push(o)}),t}W(d,"ArticleNewsDetail");const X={id:"main",class:"page page-news-detail"},Y={__name:"[slug]",async setup(n){let i,t;const{$graphql:l}=q(),c=B(),{data:r,error:m}=([i,t]=V(async()=>G(`article-news/${c.params.slug}`,async()=>await l.default.request(d,{slug:c.params.slug}))),i=await i,t(),i);if(m.value)throw N({...m.value,statusMessage:"Page not found."+m.value,fatal:!0});if(!r.value.entry)throw N({statusCode:404,message:"Page not found",fatal:!0});r.value.entry;const e=$(p(r.value,"entry",{})),o=F(()=>p(e.value,"category[0].title","")),v=F(()=>(e.value.contributors||[]).map(s=>s.staffMember&&s.staffMember.length>0||s.title?`${s.byline||""} ${s.title||s.staffMember[0].title}`:"").map(s=>s));return R(r,(u,s)=>{console.log("In watch preview enabled, newVal, oldVal",u,s),e.value=p(u,"entry",{})}),P({title:e.value?e.value.title:"... loading"}),(u,s)=>{const I=H,C=j,E=z,_=L,T=Q,D=U;return f(),O("main",X,[k(I,{to:"/about/news",title:a(e).title,"parent-title":"News"},null,8,["title"]),!a(e).heroImage||a(e).heroImage.length===0?(f(),b(C,{key:0,class:"banner-text",category:a(o),title:a(e).title,text:a(e).text,byline:a(v)},null,8,["category","title","text","byline"])):S("",!0),k(_,{class:"section-banner"},{default:h(()=>[a(e).heroImage&&a(e).heroImage.length===1?(f(),b(E,{key:0,media:a(e).heroImage[0].image[0],title:a(e).title,text:a(e).text,category:a(o),byline:a(v),locations:a(e).locations,"date-created":a(e).dateCreated,"align-right":!0},null,8,["media","title","text","category","byline","locations","date-created"])):S("",!0)]),_:1}),k(_,{theme:"divider"},{default:h(()=>[k(T,{class:"divider",color:"visit"})]),_:1}),k(D,{class:"content",blocks:a(e).blocks},null,8,["blocks"])])}}},te=M(Y,[["__scopeId","data-v-1489fcb9"]]);export{te as default};
