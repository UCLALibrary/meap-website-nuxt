import{d as de}from"./DKVnf8_P.js";var b={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockAssociatedTopicCardsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"associatedTopicsFlexiblePageBlock"},name:{kind:"Name",value:"meapflexiblePageBlocks_associatedTopics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_associatedTopics_associatedTopics_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"topics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:514}};b.loc.source={body:`fragment BlockAssociatedTopicCardsFragment on ElementInterface {
    id
    typeHandle
    sectionSummary: summary
    sectionTitle: titleGeneral
    associatedTopicsFlexiblePageBlock: meapflexiblePageBlocks_associatedTopics {
        ... on meapflexiblePageBlocks_associatedTopics_associatedTopics_BlockType {
            id
            topics {
                title
                typeHandle
                externalResourceUrl
                uri
                text: summary
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function k(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){k(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){k(a,n)}),e.definitions&&e.definitions.forEach(function(a){k(a,n)})}var $={};(function(){b.definitions.forEach(function(n){if(n.name){var i=new Set;k(n,i),$[n.name.value]=i}})})();function z(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function oe(e,n){var i={kind:e.kind,definitions:[z(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=$[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=$[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=z(e,t);d&&i.definitions.push(d)}),i}oe(b,"BlockAssociatedTopicCardsFragment");var B={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockBannerFeaturedFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"content"},name:{kind:"Name",value:"meapflexiblePageBlocks_bannerFeatured"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_bannerFeatured_internalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"contentType"},name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"projectCategory"},name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"articleCategory"},name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectByline1"},name:{kind:"Name",value:"meapProjectTopic"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectTopics_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"articleByline1"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"articleByline2"},name:{kind:"Name",value:"postDate"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"articleLocations"},name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectLocations"},name:{kind:"Name",value:"region"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectRegion_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_bannerFeatured_externalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alignment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline1"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline2"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentType"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:2123}};B.loc.source={body:`fragment BlockBannerFeaturedFragment on ElementInterface {
    typeHandle
    id
    sectionTitle: titleGeneral
    content: meapflexiblePageBlocks_bannerFeatured {
        ... on meapflexiblePageBlocks_bannerFeatured_internalContent_BlockType {
            id
            contentLink {
                contentType: sectionHandle
                title
                to: uri
                summary
                projectCategory: format
                # eventCategory: eventType
                articleCategory: articleCategories {
                    title
                }
                projectByline1: meapProjectTopic {
                    ... on meapProjectTopics_Category {
                        id
                        title
                    }
                }
                articleByline1: staffMember {
                  id
                  to: uri
                  title
                }
                articleByline2: postDate
                # eventByline1: dateStartTime
                # eventByline2: dateEndTime

                articleLocations: associatedLocations {
                    id
                    title
                    to: uri
                }
                # eventLocations: eventLocation
                projectLocations: region {
                    ... on meapProjectRegion_Category {
                        id
                        title
                    }
                }
                # aligment will be defualts to left
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        image {
                            ...Image
                        }
                    }
                }
            }
        }
        ... on meapflexiblePageBlocks_bannerFeatured_externalContent_BlockType {
            id
            image {
                ...Image
            }
            title: titleGeneral
            summary
            alignment
            location
            byline1
            byline2
            to: buttonUrl
            category
            contentType
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function u(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){u(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){u(a,n)}),e.definitions&&e.definitions.forEach(function(a){u(a,n)})}var H={};(function(){B.definitions.forEach(function(n){if(n.name){var i=new Set;u(n,i),H[n.name.value]=i}})})();function V(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function re(e,n){var i={kind:e.kind,definitions:[V(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=H[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=H[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=V(e,t);d&&i.definitions.push(d)}),i}re(B,"BlockBannerFeaturedFragment");var _={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockCardWithImageFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"cardWithImage"},name:{kind:"Name",value:"meapflexiblePageBlocks_cardWithImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_cardWithImage_internalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"contentType"},name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"projectCategory"},name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"articleCategory"},name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectByline1"},name:{kind:"Name",value:"meapProjectTopic"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectTopics_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"articleByline1"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"articleByline2"},name:{kind:"Name",value:"postDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectLocations"},name:{kind:"Name",value:"region"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectRegion_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_cardWithImage_externalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"byline1"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline2"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:2259}};_.loc.source={body:`fragment BlockCardWithImageFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    cardWithImage: meapflexiblePageBlocks_cardWithImage {
        id
        ... on meapflexiblePageBlocks_cardWithImage_internalContent_BlockType {
            id
            typeHandle
            contentLink {
                id
                contentType: sectionHandle
                to: uri
                title
                text: summary
                # prompt: buttonText
                # date {
                #     startDate
                #     endDate
                # }
                projectCategory: format
                # eventCategory: eventType
                articleCategory: articleCategories {
                    title
                }
                projectByline1: meapProjectTopic {
                    ... on meapProjectTopics_Category {
                        id
                        title
                    }
                }
                articleByline1: staffMember {
                    id
                    to: uri
                    title
                }
                articleByline2: postDate
                # eventByline1: dateStartTime
                # eventByline2: dateEndTime
                associatedLocations {
                    id
                    title
                    to: uri
                }
                projectLocations: region {
                    ... on meapProjectRegion_Category {
                        id
                        title
                    }
                }
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        id
                        image {
                            ...Image
                        }
                        altText
                    }
                }
            }
        }
        ... on meapflexiblePageBlocks_cardWithImage_externalContent_BlockType {
            id
            typeHandle
            title: titleGeneral
            image {
                ...Image
            }
            byline1
            byline2
            category
            location
            text: summary
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function v(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){v(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){v(a,n)}),e.definitions&&e.definitions.forEach(function(a){v(a,n)})}var G={};(function(){_.definitions.forEach(function(n){if(n.name){var i=new Set;v(n,i),G[n.name.value]=i}})})();function J(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function me(e,n){var i={kind:e.kind,definitions:[J(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=G[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=G[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=J(e,t);d&&i.definitions.push(d)}),i}me(_,"BlockCardWithImageFragment");var C={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockHighlightFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"highlight"},name:{kind:"Name",value:"meapflexiblePageBlocks_highlight"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_highlight_internalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"contentType"},name:{kind:"Name",value:"sectionHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"projectCategory"},name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"articleCategory"},name:{kind:"Name",value:"articleCategories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectByline1"},name:{kind:"Name",value:"meapProjectTopic"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectTopics_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",alias:{kind:"Name",value:"articleByline1"},name:{kind:"Name",value:"staffMember"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"articleByline2"},name:{kind:"Name",value:"postDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"associatedLocations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"to"},name:{kind:"Name",value:"uri"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"projectLocations"},name:{kind:"Name",value:"region"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapProjectRegion_Category"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"heroImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"heroImage_heroImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_highlight_externalContent_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"byline1"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"byline2"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"text"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:2253}};C.loc.source={body:`fragment BlockHighlightFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    highlight: meapflexiblePageBlocks_highlight {
        ... on meapflexiblePageBlocks_highlight_internalContent_BlockType {
            id
            typeHandle
            contentLink {
                id
                # category: typeHandle
                contentType: sectionHandle
                to: uri
                title
                text: summary
                # prompt: buttonText
                # date {
                #     startDate
                #     endDate
                # }
                projectCategory: format
                # eventCategory: eventType
                articleCategory: articleCategories {
                    title
                }
                projectByline1: meapProjectTopic {
                    ... on meapProjectTopics_Category {
                        id
                        title
                    }
                }
                articleByline1: staffMember {
                    id
                    to: uri
                    title
                }
                articleByline2: postDate
                # eventByline1: dateStartTime
                # eventByline2: dateEndTime
                associatedLocations {
                    id
                    title
                    to: uri
                }
                projectLocations: region {
                    ... on meapProjectRegion_Category {
                        id
                        title
                    }
                }
                heroImage {
                    ... on heroImage_heroImage_BlockType {
                        id
                        image {
                            ...Image
                        }
                        altText
                    }
                }
            }
        }
        ... on meapflexiblePageBlocks_highlight_externalContent_BlockType {
            id
            typeHandle
            title
            image {
                ...Image
            }
            byline1
            byline2
            category
            location
            text: summary
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function f(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){f(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){f(a,n)}),e.definitions&&e.definitions.forEach(function(a){f(a,n)})}var L={};(function(){C.definitions.forEach(function(n){if(n.name){var i=new Set;f(n,i),L[n.name.value]=i}})})();function K(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function ce(e,n){var i={kind:e.kind,definitions:[K(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=L[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=L[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=K(e,t);d&&i.definitions.push(d)}),i}ce(C,"BlockHighlightFragment");var x={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"impactNumbersCarousel"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"impactNumbersCarousel_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"largeText"},name:{kind:"Name",value:"impactNumber"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"mediumText"},name:{kind:"Name",value:"impactText"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"smallDescriptor"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:437}};x.loc.source={body:`fragment BlockImpactNumbersCarouselFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    blocks: impactNumbersCarousel {
        id
        ... on impactNumbersCarousel_impactNumbersCarousel_BlockType {
            id
            largeText: impactNumber
            mediumText: impactText
            smallDescriptor: summary
            image {
                ...Image
            }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function g(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){g(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){g(a,n)}),e.definitions&&e.definitions.forEach(function(a){g(a,n)})}var O={};(function(){x.definitions.forEach(function(n){if(n.name){var i=new Set;g(n,i),O[n.name.value]=i}})})();function X(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function se(e,n){var i={kind:e.kind,definitions:[X(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=O[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=O[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=X(e,t);d&&i.definitions.push(d)}),i}se(x,"BlockImpactNumbersCarouselFragment");var E={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockMediaGalleryFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mediaGallery"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaGallery_image_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionTitle"},name:{kind:"Name",value:"captionHeading"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"captionText"},name:{kind:"Name",value:"caption"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sortOrder"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"item"},name:{kind:"Name",value:"imageFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:413}};E.loc.source={body:`fragment BlockMediaGalleryFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    mediaGallery {
        id
        ... on mediaGallery_image_BlockType {
          id
          captionTitle: captionHeading
          captionText: caption
          altText
          sortOrder
          item: imageFile {
          	...Image
          }
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function p(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){p(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){p(a,n)}),e.definitions&&e.definitions.forEach(function(a){p(a,n)})}var Q={};(function(){E.definitions.forEach(function(n){if(n.name){var i=new Set;p(n,i),Q[n.name.value]=i}})})();function Y(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function ke(e,n){var i={kind:e.kind,definitions:[Y(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=Q[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=Q[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=Y(e,t);d&&i.definitions.push(d)}),i}ke(E,"BlockMediaGalleryFragment");var I={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockMediaWithTextFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mediaWithText"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaWithText_mediaEmbed_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"titleLink"},name:{kind:"Name",value:"titleEmbed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"linkToMedia"},name:{kind:"Name",value:"embedCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeMedia"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"mediaWithText_mediaUpload_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titleUpload"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coverImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"upload"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Image"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"typeMedia"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:786}};I.loc.source={body:`fragment BlockMediaWithTextFragment on ElementInterface  {
    id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    mediaWithText {
        ... on mediaWithText_mediaEmbed_BlockType {
            id
            titleLink: titleEmbed
            description
            coverImage {
                ...Image
            }
            buttonText
            buttonUrl
            linkToMedia: embedCode
            typeMedia
        }
        ... on mediaWithText_mediaUpload_BlockType {
            id
            titleUpload
            description
            buttonText
            buttonUrl
            coverImage {
                ...Image
            }
            upload {
                ...Image
            }
            typeMedia
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function F(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){F(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){F(a,n)}),e.definitions&&e.definitions.forEach(function(a){F(a,n)})}var q={};(function(){I.definitions.forEach(function(n){if(n.name){var i=new Set;F(n,i),q[n.name.value]=i}})})();function Z(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function ue(e,n){var i={kind:e.kind,definitions:[Z(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=q[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=q[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=Z(e,t);d&&i.definitions.push(d)}),i}ue(I,"BlockMediaWithTextFragment");var w={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockPullQuoteFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pullQuote"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"pullQuote_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribution"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:198}};w.loc.source={body:`fragment BlockPullQuoteFragment on ElementInterface {
    id
    typeHandle
    pullQuote {
        ... on pullQuote_pullQuote_BlockType {
            text
            attribution
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function S(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){S(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){S(a,n)}),e.definitions&&e.definitions.forEach(function(a){S(a,n)})}var j={};(function(){w.definitions.forEach(function(n){if(n.name){var i=new Set;S(n,i),j[n.name.value]=i}})})();function ee(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function ve(e,n){var i={kind:e.kind,definitions:[ee(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=j[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=j[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=ee(e,t);d&&i.definitions.push(d)}),i}ve(w,"BlockPullQuoteFragment");var P={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockRichTextFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"richText"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]}]}}],loc:{start:0,end:113}};P.loc.source={body:`fragment BlockRichTextFragment on ElementInterface {
    richText
  	sectionTitle: titleGeneral
    typeHandle
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function N(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){N(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){N(a,n)}),e.definitions&&e.definitions.forEach(function(a){N(a,n)})}var W={};(function(){P.definitions.forEach(function(n){if(n.name){var i=new Set;N(n,i),W[n.name.value]=i}})})();function ne(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function fe(e,n){var i={kind:e.kind,definitions:[ne(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=W[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=W[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=ne(e,t);d&&i.definitions.push(d)}),i}fe(P,"BlockRichTextFragment");var R={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockSimpleCardsFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionTitle"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"sectionSummary"},name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"cards"},name:{kind:"Name",value:"meapflexiblePageBlocks_simpleCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_simpleCards_internalResource_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLink"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"uri"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalResourceUrl"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapflexiblePageBlocks_simpleCards_externalResource_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"title"},name:{kind:"Name",value:"titleGeneral"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"externalLink"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:685}};R.loc.source={body:`fragment BlockSimpleCardsFragment on ElementInterface {
    id
    typeHandle
    sectionTitle: titleGeneral
    sectionSummary: summary
    cards: meapflexiblePageBlocks_simpleCards {
        ... on meapflexiblePageBlocks_simpleCards_internalResource_BlockType {
            id
            typeHandle
            contentLink {
                id
                uri
                title
                summary
                externalResourceUrl
            }
        }
        ... on meapflexiblePageBlocks_simpleCards_externalResource_BlockType {
            id
            typeHandle
            title: titleGeneral
            summary
            externalLink
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function y(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){y(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){y(a,n)}),e.definitions&&e.definitions.forEach(function(a){y(a,n)})}var M={};(function(){R.definitions.forEach(function(n){if(n.name){var i=new Set;y(n,i),M[n.name.value]=i}})})();function ie(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function ge(e,n){var i={kind:e.kind,definitions:[ie(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=M[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=M[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=ie(e,t);d&&i.definitions.push(d)}),i}ge(R,"BlockSimpleCardsFragment");var D={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BlockCallToActionFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"callToAction"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"callToAction_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titleCta"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"buttonText"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"buttonUrl"},name:{kind:"Name",value:"buttonLink"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:327}};D.loc.source={body:`fragment BlockCallToActionFragment on ElementInterface {
    id
    typeHandle
    callToAction {
        ... on callToAction_callToAction_BlockType {
            id
            titleCta
            summary
            icon
            buttonText
            buttonUrl: buttonLink
            backgroundColor
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function h(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){h(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){h(a,n)}),e.definitions&&e.definitions.forEach(function(a){h(a,n)})}var A={};(function(){D.definitions.forEach(function(n){if(n.name){var i=new Set;h(n,i),A[n.name.value]=i}})})();function ae(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function pe(e,n){var i={kind:e.kind,definitions:[ae(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=A[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=A[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=ae(e,t);d&&i.definitions.push(d)}),i}pe(D,"BlockCallToActionFragment");var r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MEAPAllFpb"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ElementInterface"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"blocks"},name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"typeHandle"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_associatedTopicCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockAssociatedTopicCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_bannerFeatured_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockBannerFeaturedFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_cardWithImage_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCardWithImageFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_highlight_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockHighlightFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_impactNumbersCarousel_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockImpactNumbersCarouselFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_mediaGallery_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaGalleryFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_mediaWithText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockMediaWithTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_pullQuote_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockPullQuoteFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_richText_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockRichTextFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_simpleCards_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockSimpleCardsFragment"},directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"meapFlexiblePageBlockCollections_allFpb_callToAction_BlockType"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BlockCallToActionFragment"},directives:[]}]}}]}}]}}],loc:{start:0,end:2271}};r.loc.source={body:`#import "../gql/fragments/Image.gql"
#import "../gql/fragments/BlockAssociatedTopicCardsFragment.gql"
#import "../gql/fragments/BlockBannerFeaturedFragment.gql"
#import "../gql/fragments/BlockCardWithImageFragment.gql"
#import "../gql/fragments/BlockHighlightFragment.gql"
#import "../gql/fragments/BlockImpactNumbersCarouselFragment.gql"
#import "../gql/fragments/BlockMediaGalleryFragment.gql"
#import "../gql/fragments/BlockMediaWithTextFragment.gql"
#import "../gql/fragments/BlockPullQuoteFragment.gql"
#import "../gql/fragments/BlockRichTextFragment.gql"
#import "../gql/fragments/BlockSimpleCardsFragment.gql"
#import "../gql/fragments/BlockCallToActionFragment.gql"

fragment MEAPAllFpb on ElementInterface {
    blocks: meapFlexiblePageBlockCollections_allFpb {
        id
        typeHandle

        ... on meapFlexiblePageBlockCollections_allFpb_associatedTopicCards_BlockType {
            ...BlockAssociatedTopicCardsFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_bannerFeatured_BlockType {
            ...BlockBannerFeaturedFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_cardWithImage_BlockType {
            ...BlockCardWithImageFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_highlight_BlockType {
            ...BlockHighlightFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_impactNumbersCarousel_BlockType {
            ...BlockImpactNumbersCarouselFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_mediaGallery_BlockType {
            ...BlockMediaGalleryFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_mediaWithText_BlockType {
            ...BlockMediaWithTextFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_pullQuote_BlockType {
            ...BlockPullQuoteFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_richText_BlockType {
            ...BlockRichTextFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_simpleCards_BlockType {
            ...BlockSimpleCardsFragment
        }
        ... on meapFlexiblePageBlockCollections_allFpb_callToAction_BlockType {
            ...BlockCallToActionFragment
        }
    }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var te={};function s(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return te[i]?!1:(te[i]=!0,!0)})}r.definitions=r.definitions.concat(s(de.definitions));r.definitions=r.definitions.concat(s(b.definitions));r.definitions=r.definitions.concat(s(B.definitions));r.definitions=r.definitions.concat(s(_.definitions));r.definitions=r.definitions.concat(s(C.definitions));r.definitions=r.definitions.concat(s(x.definitions));r.definitions=r.definitions.concat(s(E.definitions));r.definitions=r.definitions.concat(s(I.definitions));r.definitions=r.definitions.concat(s(w.definitions));r.definitions=r.definitions.concat(s(P.definitions));r.definitions=r.definitions.concat(s(R.definitions));r.definitions=r.definitions.concat(s(D.definitions));function T(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){T(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){T(a,n)}),e.definitions&&e.definitions.forEach(function(a){T(a,n)})}var U={};(function(){r.definitions.forEach(function(n){if(n.name){var i=new Set;T(n,i),U[n.name.value]=i}})})();function le(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function Fe(e,n){var i={kind:e.kind,definitions:[le(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=U[n]||new Set,o=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var d=U[t]||new Set;d.forEach(function(c){l.add(c)})}})}return o.forEach(function(t){var d=le(e,t);d&&i.definitions.push(d)}),i}Fe(r,"MEAPAllFpb");export{r as d};
