import{B as d,b as c}from"./chunks/theme.fPrrFYEF.js";import{d as f,p as C,o as h,c as p,G as l,w as n,k as s,j as t,a as r,aq as g,B as b}from"./chunks/framework.Z42t_U4q.js";import{Q as u}from"./chunks/index.DEUECMle.js";const w=`<script setup lang="ts">
import { VerCollapse, VerCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
<\/script>

<template>
  <div>
    <VerCollapse v-model="activeNames" accordion>
      <VerCollapseItem title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="2">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="3">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
`,y=f({__name:"accordion",setup(m){const o=C(["1"]);return(e,a)=>(h(),p("div",null,[l(s(c),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=i=>o.value=i),accordion:""},{default:n(()=>[l(s(d),{title:"Consistency",name:"1"},{default:n(()=>a[1]||(a[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(s(d),{title:"Consistency",name:"2"},{default:n(()=>a[2]||(a[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(s(d),{title:"Consistency",name:"3"},{default:n(()=>a[3]||(a[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),V=`<script setup lang="ts">
import { VerCollapse, VerCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
<\/script>

<template>
  <div>
    <VerCollapse v-model="activeNames" @change="handleChange">
      <VerCollapseItem title="Consistency 1" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 2" name="2">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 3" name="3">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
`,B=f({__name:"base",setup(m){const o=C(["1"]),e=a=>{console.log(a)};return(a,i)=>(h(),p("div",null,[l(s(c),{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=v=>o.value=v),onChange:e},{default:n(()=>[l(s(d),{title:"Consistency 1",name:"1"},{default:n(()=>i[1]||(i[1]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(s(d),{title:"Consistency 2",name:"2"},{default:n(()=>i[2]||(i[2]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1}),l(s(d),{title:"Consistency 3",name:"3"},{default:n(()=>i[3]||(i[3]=[t("div",null," Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",-1)])),_:1})]),_:1},8,["modelValue"])]))}}),A=JSON.parse('{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse/index.md","filePath":"components/collapse/index.md"}'),I={name:"components/collapse/index.md"},k=Object.assign(I,{setup(m){return(o,e)=>{const a=b("ClientOnly");return h(),p("div",null,[e[0]||(e[0]=t("h1",{id:"collapse-折叠面板",tabindex:"-1"},[r("Collapse 折叠面板 "),t("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1)),e[1]||(e[1]=t("p",null,"通过折叠面板收纳内容区域。",-1)),e[2]||(e[2]=t("h2",{id:"基本使用",tabindex:"-1"},[r("基本使用 "),t("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),e[3]||(e[3]=t("p",null,"可同时展开多个面板，面板之间不影响。",-1)),l(a,null,{default:n(()=>[l(s(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(V)},{vue:n(()=>[l(B)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"手风琴效果",tabindex:"-1"},[r("手风琴效果 "),t("a",{class:"header-anchor",href:"#手风琴效果","aria-label":'Permalink to "手风琴效果"'},"​")],-1)),e[5]||(e[5]=t("p",null,"每次只能展开一个面板",-1)),e[6]||(e[6]=t("p",null,[r("通过 "),t("code",null,"accordion"),r(" 属性来设置是否以手风琴模式显示。")],-1)),l(a,null,{default:n(()=>[l(s(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(w)},{vue:n(()=>[l(y)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=g("",3))])}}});export{A as __pageData,k as default};
