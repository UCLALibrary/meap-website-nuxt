import{i as o,o as i,a as t,n as a,d as g,g as C,K as f,l as S,al as $,j as h,F as b,D as M,c as j,E as L,e as r,t as l,Z as y,b as m,w as k,aZ as H,bi as w,cg as I,af as N,p as D}from"./index-XkfrPUbS.js";import{a as V}from"./browserLogos-CjpMGSPw.js";import{_ as P}from"./index.es-DmiJv5wA.js";const q={style:{"min-width":"16px","min-height":"16px"},width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function E(c,n){return i(),o("svg",q,[t("path",{d:"M13 2H4C3.44772 2 3 2.44772 3 3V11H4H13V2Z",class:a(["background","icon-light"]),fill:"#D0D2E0",style:{}}),t("path",{d:"M13 11V2H4M13 11H4M13 11V14H4M3 11V13C3 13.5523 3.44772 14 4 14V14M3 11V3C3 2.44772 3.44772 2 4 2V2M3 11H4M4 2V11M4 11V14M10 5H7",class:a(["border","icon-dark"]),stroke:"#1B1E2E","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])}const ae={name:"cy-book_x16",render:E},F={style:{"min-width":"24px","min-height":"24px"},width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=t("path",{d:"M20.4853 20.4853C15.799 25.1716 8.20101 25.1716 3.51472 20.4853C-1.17157 15.799 -1.17157 8.20101 3.51472 3.51472C8.20101 -1.17157 15.799 -1.17157 20.4853 3.51472C25.1716 8.20101 25.1716 15.799 20.4853 20.4853Z",fill:"#FFF",class:"icon-dark"},null,-1),U=t("path",{d:"M15.999 9L11 15L8.00098 12",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"icon-light"},null,-1),z=t("circle",{cx:"12",cy:"12",r:"12",stroke:"black","stroke-width":"1",style:{stroke:"rgba(0,0,0,0.1)"}},null,-1),A=[Z,U,z];function K(c,n){return i(),o("svg",F,A)}const O={name:"cy-circle-check_x24",render:K},R=["data-browser-id","onClick"],T={class:"grow"},G={class:"font-normal mr-[20px] text-gray-500 text-[14px] filter whitespace-nowrap group-focus-within:mix-blend-luminosity group-hover:mix-blend-luminosity"},J={key:0},Q={class:"flex items-center h-full align-middle"},W={key:0,"data-cy":"top-nav-browser-list-selected-item"},X={key:1,class:"h-[16px] relative"},Y={class:"text-center p-2 text-gray-300 text-[14px] leading-[20px]"},ee=t("div",{class:"mb-2 font-medium text-white"}," Unsupported browser ",-1),re=g({__name:"VerticalBrowserListItems",props:{selectable:{type:Boolean,default:!1},gql:null,specPath:{default:""}},setup(c){const n=c,{t:p}=C();f`
fragment VerticalBrowserListItems on CurrentProject {
  id
  browsers {
    id
    isSelected
    displayName
    version
    majorVersion
    isVersionSupported
    warning
    disabled
  }
}
`,f`
mutation VerticalBrowserListItems_SetBrowser($id: ID!, $specPath: String) {
  launchpadSetBrowser(id: $id) {
    id
    ...VerticalBrowserListItems
  }
  launchOpenProject(specPath: $specPath) {
    id
  }
}
`;const u=S(()=>{const s=w.sortBy(n.gql.browsers??[],"displayName"),[d]=w.remove(s,_=>_.isSelected);return s.unshift(d),s}),x=$(I),v=async s=>{if(s.disabled||!s.isVersionSupported||s.isSelected)return;const d={id:s.id,specPath:n.specPath};await x.executeMutation(d)};return(s,d)=>{const _=O,B=H;return n.gql?(i(!0),o(b,{key:0},M(r(u),e=>(i(),o("li",{key:e.id,class:a(["border-b border-transparent cursor-pointer flex border-b-gray-50 border-[1px] min-w-[240px] py-[12px] px-[16px] transition-colors duration-300 group focus-within-default",{"bg-jade-50":e.isSelected,"hover:bg-indigo-50 focus-within:bg-indigo-50":!e.isSelected&&!e.disabled&&e.isVersionSupported,"bg-gray-50 cursor-not-allowed":e.disabled||!e.isVersionSupported,"cursor-pointer":!e.disabled&&e.isVersionSupported}]),"data-cy":"top-nav-browser-list-item","data-browser-id":e.id,onClick:se=>v(e)},[(i(),j(L(r(V)[e.displayName?.toLowerCase()]||r(V).generic),{class:a(["mr-[16px] min-w-[26px] w-[26px] min-h-[45px]",{"filter grayscale":e.disabled||!e.isVersionSupported}]),alt:""},null,8,["class"])),t("div",T,[t("button",{class:a(["box-border font-medium focus:outline-none text-left",{"text-indigo-500 group-hover:text-indigo-700":!e.isSelected&&!e.disabled&&e.isVersionSupported,"text-jade-700":e.isSelected,"text-gray-500":e.disabled||!e.isVersionSupported}])},l(e.displayName),3),t("div",G,[y(l(r(p)("topNav.version"))+" "+l(e.majorVersion)+" ",1),e.isVersionSupported?h("",!0):(i(),o("span",J," (Unsupported) "))])]),t("div",null,[t("div",Q,[e.isSelected?(i(),o("div",W,[m(_,{class:"h-[24px] w-[24px] icon-dark-jade-100 icon-light-jade-500"})])):e.isVersionSupported?h("",!0):(i(),o("div",X,[m(P,null,{popper:k(()=>[t("div",Y,[ee,y(" "+l(e.warning),1)])]),default:k(()=>[m(B,{class:"icon-dark-gray-700 icon-light-gray-200","data-cy":"unsupported-browser-tooltip-trigger"})]),_:2},1024)]))])])],10,R))),128)):h("",!0)}}}),te=g({inheritAttrs:!0}),ce=g({...te,__name:"HideDuringScreenshot",setup(c){const n=N(),p=S(()=>({hidden:n.isScreenshotting}));return(u,x)=>(i(),o("div",{class:a([r(p),"p-0 m-0"])},[D(u.$slots,"default")],2))}}),de=""+new URL("cypress-dark-BaptZgkl.png",import.meta.url).href;export{ae as B,re as _,de as a,ce as b};
