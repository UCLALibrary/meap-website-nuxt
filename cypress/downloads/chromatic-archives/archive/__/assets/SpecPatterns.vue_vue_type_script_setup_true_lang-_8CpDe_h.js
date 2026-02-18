import{_ as y}from"./document-text_x16-DkpQ_gFP.js";import{d as f,K as g,c as b,j as v,o as n,w as u,p as m,a as s,t as l,l as h,i as a,n as F,e as _,u as q,b as d,F as k,D as C}from"./index-XkfrPUbS.js";import{b as P}from"./OpenFileInIDE.vue_vue_type_script_setup_true_lang-BTaRIGLR.js";const I=["onClick"],$={class:"text-purple-500 cursor-pointer"},j=f({__name:"OpenConfigFileInIDE",props:{gql:null},setup(o){const e=o;return g`
fragment OpenConfigFileInIDE on CurrentProject {
  id
  configFile
  configFileAbsolutePath
}
`,(r,c)=>e.gql.configFileAbsolutePath?(n(),b(P,{key:0,"file-path":e.gql.configFileAbsolutePath},{default:u(({onClick:t})=>[m(r.$slots,"default",{onClick:t},()=>[s("button",{"data-testid":"open-config-file",class:"hocus-link-default decoration-purple-500",onClick:t},[s("span",$,l(e.gql.configFile??"cypress.config.js"),1)],8,I)])]),_:3},8,["file-path"])):v("",!0)}}),D={class:"inline-flex items-center","data-cy":"file-match-indicator"},E=f({__name:"FileMatchIndicator",props:{variant:{default:"default"}},setup(o){const e=o,r={default:"bg-jade-100 text-jade-600",info:"bg-purple-100 text-purple-600"},c=h(()=>r[e.variant]);return(t,p)=>(n(),a("div",D,[s("span",{class:F(["rounded font-medium h-[24px] text-center px-[8px] truncate select-none",_(c)])},[m(t.$slots,"default")],2)]))}}),w={class:"rounded border-gray-100 border-[1px] w-full"},B={class:"flex p-[16px] items-center justify-between"},S={key:0},A={key:1},N=["onClick"],O={class:"group-hocus:underline"},V={class:"divide-gray-200 divide-y bg-gray-50 px-[16px]"},L=f({__name:"SpecPatterns",props:{gql:null,variant:null},setup(o){const e=o;g`
fragment SpecPatterns on CurrentProject {
  id
  config
  currentTestingType
  ...OpenConfigFileInIDE
  configFile
  specs {
    id
  }
}
`;const{t:r}=q(),c=h(()=>{const t=e.gql.config.find(p=>p.field==="specPattern")?.value;return t?typeof t=="string"?[t]:t:[]});return(t,p)=>{const x=y;return n(),a("div",w,[s("div",B,[d(E,{variant:e.variant},{default:u(()=>[e.variant==="info"?(n(),a("span",S,"specPattern")):(n(),a("span",A,l(_(r)("components.specPattern.matches",e.gql.specs.length)),1))]),_:1},8,["variant"]),d(j,{gql:e.gql},{default:u(({onClick:i})=>[s("button",{class:"flex outline-transparent text-indigo-500 gap-[8px] items-center group","aria-label":"open in IDE",onClick:i},[d(x,{class:"icon-light-gray-100 icon-dark-gray-500"}),s("span",O,l(e.gql.configFile),1)],8,N)]),_:1},8,["gql"])]),s("div",V,[(n(!0),a(k,null,C(_(c),i=>(n(),a("code",{key:i,class:"flex py-[8px] text-gray-600 text-[14px] leading-[24px] block","data-cy":"spec-pattern"},l(i),1))),128))])])}}});export{L as _,j as a,E as b};
