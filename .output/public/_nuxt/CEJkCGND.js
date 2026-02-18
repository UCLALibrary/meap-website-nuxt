import{_ as V,f as $,w as A,g as C,r as U,h as G,o as c,a as O,i as d,j as e,k as L,l as g,m as u,$ as Q,p as z,q as v,B as J,s as K,D as W,t as X,v as Y,P as Z,x as ee,y as S}from"./ByTLSTAx.js";import{_ as R}from"./D4Uph03E.js";import{d as ne}from"./DKVnf8_P.js";import{s as T}from"./BJ56Xtbm.js";var N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MeapHomePage"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"section"},value:{kind:"StringValue",value:"meapHomepage",block:!1}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"StringValue",value:"homepage-meap",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapHomepage_meapHomepage_Entry"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"featuredMeapResources"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"featuredProjects"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"category"},name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"byline"},name:{kind:"Name",value:"meapProjectTopic"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectTopics_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"projectLocations"},name:{kind:"Name",value:"region"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectRegion_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"meapNews"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"byline1"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"byline2"},name:{kind:"Name",value:"postDate"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:2030}};N.loc.source={body:`#import "../gql/fragments/Image.gql"

query MeapHomePage {
    entries(section: "meapHomepage", slug: "homepage-meap") {
        ... on meapHomepage_meapHomepage_Entry {
            id
            title
            titleGeneral
            summary
            heroImage {
                ... on heroImage_heroImage_BlockType {
                    image {
                        ...Image
                    }
                }
            }
            featuredMeapResources {
                id
                externalResourceUrl
                uri
                title
                text: summary
            }
            featuredProjects {
                title
                text: summary
                category: format
                to: uri
                byline: meapProjectTopic {
                    ... on meapProjectTopics_Category {
                        id
                        title
                    }
                }
                projectLocations: region {
                    ... on meapProjectRegion_Category {
                        id
                        title
                    }
                }
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        image {
                            ...Image
                        }
                    }
                }
            }
            meapNews {
                id
                title
                text: summary
                to: uri
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        image {
                            ...Image
                        }
                    }
                }
                articleCategories {
                    id
                    title
                }
                byline1: staffMember {
                    id
                    to: uri
                    title
                }
                byline2: postDate
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var D={};function ie(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return D[t]?!1:(D[t]=!0,!0)})}N.definitions=N.definitions.concat(ie(ne.definitions));function y(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var t=n.type;t.kind==="NamedType"&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(r){y(r,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(r){y(r,i)}),n.definitions&&n.definitions.forEach(function(r){y(r,i)})}var w={};(function(){N.definitions.forEach(function(i){if(i.name){var t=new Set;y(i,t),w[i.name.value]=t}})})();function M(n,i){for(var t=0;t<n.definitions.length;t++){var r=n.definitions[t];if(r.name&&r.name.value==i)return r}}function ae(n,i){var t={kind:n.kind,definitions:[M(n,i)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var r=w[i]||new Set,k=new Set,m=new Set;for(r.forEach(function(s){m.add(s)});m.size>0;){var h=m;m=new Set,h.forEach(function(s){if(!k.has(s)){k.add(s);var p=w[s]||new Set;p.forEach(function(o){m.add(o)})}})}return k.forEach(function(s){var p=M(n,s);p&&t.definitions.push(p)}),t}ae(N,"MeapHomePage");const te={id:"main",class:"page page-home"},se={__name:"index",async setup(n){let i,t;const{$graphql:r}=$(),{data:k,error:m}=([i,t]=A(async()=>ee("meap-home-page",async()=>{const a=await r.default.request(N);return console.log(a),a})),i=await i,t(),i);if(m.value)throw C({statusCode:m.value.statusCode,statusMessage:m.value.statusMessage+m.value,fatal:!0});if(!k.value.entries)throw C({statusCode:404,statusMessage:"Page Not Found",fatal:!0});console.log(k.value);const h=U(R(k.value,"entries",{}));G(k,(a,b)=>{console.log("In watch preview enabled, newVal, oldVal",a,b),h.value=R(a,"entry",{})});const s=S(()=>h.value.map(a=>({...a,to:`/${T(a.to)}`}))[0]),p=S(()=>s.value.heroImage[0].image[0]),o=S(()=>s.value.featuredMeapResources.map(a=>({...a,to:a.externalResourceUrl?a.externalResourceUrl:`/${T(a.uri)}`}))),l=S(()=>s.value.featuredProjects.map(a=>({...a,image:a.heroImage[0].image[0]}))),x=S(()=>l.value.slice(1)),f=S(()=>s.value.meapNews.map(a=>({...a,image:a.heroImage[0].image[0]})));return(a,b)=>{const E=L,j=Q,_=z,B=J,F=W,I=K,P=X,H=Y,q=Z;return c(),O("main",te,[d(E,{title:e(s).titleGeneral,text:e(s).summary,"hero-image":e(p),theme:"meap",class:"meap-masthead-secondary"},null,8,["title","text","hero-image"]),e(l)?(c(),g(_,{key:0,class:"section-banner"},{default:u(()=>[d(j,{class:"banner",media:e(l)[0].heroImage[0].image[0],to:e(l)[0].to,title:e(l)[0].title,category:e(l)[0].category,breadcrumb:"Featured Projects","start-date":e(l)[0].startDate,"end-date":e(l)[0].endDate,ratio:e(l)[0].ratio,prompt:"View project"},null,8,["media","to","title","category","start-date","end-date","ratio"])]),_:1})):v("",!0),d(_,null,{default:u(()=>[d(B,{items:e(x)},null,8,["items"]),e(x).length?(c(),g(I,{key:0,class:"button-more-link",to:"/projects"},{default:u(()=>[d(F,{text:"Explore Projects"})]),_:1})):v("",!0)]),_:1}),e(l)&&e(l).length&&e(o)&&e(o).length?(c(),g(_,{key:1,theme:"divider"},{default:u(()=>[d(P,{color:"about",class:"divider-way-finder"})]),_:1})):v("",!0),e(o)&&e(o).length?(c(),g(_,{key:2,class:"section"},{default:u(()=>[d(H,{"section-title":"Program Resources",items:e(o)},null,8,["items"]),e(o).length?(c(),g(I,{key:0,class:"button-more-link",to:"/applicants/resources"},{default:u(()=>[d(F,{text:"See all resources"})]),_:1})):v("",!0)]),_:1})):v("",!0),(e(l)&&e(l).length||e(o)&&e(o).length)&&e(f)&&e(f).length?(c(),g(_,{key:3,theme:"divider"},{default:u(()=>[d(P,{color:"about",class:"divider-way-finder"})]),_:1})):v("",!0),e(f)&&e(f).length?(c(),g(_,{key:4,"section-title":"News",class:"section"},{default:u(()=>[d(q,{items:e(f),image:e(f)[0].heroImage[0].image[0],class:"meap-news"},null,8,["items","image"]),e(o).length?(c(),g(I,{key:0,class:"button-more-link",to:"/about/news"},{default:u(()=>[d(F,{text:"See all news"})]),_:1})):v("",!0)]),_:1})):v("",!0)])}}},me=V(se,[["__scopeId","data-v-1ed25c8c"]]);export{me as default};
