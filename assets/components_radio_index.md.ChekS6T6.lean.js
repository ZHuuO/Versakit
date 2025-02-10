import{g as s}from"./chunks/theme.fPrrFYEF.js";import{d as v,p as f,o as u,c as m,G as o,w as l,a as r,k as n,j as d,aq as h,B as V}from"./chunks/framework.Z42t_U4q.js";import{Q as b}from"./chunks/index.DEUECMle.js";const c=`<template>
  <div>
    <VerRadio disabled label="1" v-model="gender">男</VerRadio>
    <VerRadio disabled label="0" v-model="gender">女</VerRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerRadio } from '@versakit/ui'

const gender = ref(1)
<\/script>
`,B=v({__name:"disabled",setup(p){const a=f(1);return(t,e)=>(u(),m("div",null,[o(n(s),{disabled:"",label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i)},{default:l(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),o(n(s),{disabled:"",label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=i=>a.value=i)},{default:l(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),C=`<template>
  <div>
    <VerRadio label="1" v-model="gender">男</VerRadio>
    <VerRadio label="0" v-model="gender">女</VerRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerRadio } from '@versakit/ui'

const gender = ref(1)
<\/script>
`,g=v({__name:"base",setup(p){const a=f(1);return(t,e)=>(u(),m("div",null,[o(n(s),{label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i)},{default:l(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),o(n(s),{label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=i=>a.value=i)},{default:l(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),R=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}'),_={name:"components/radio/index.md"},D=Object.assign(_,{setup(p){return(a,t)=>{const e=V("ClientOnly");return u(),m("div",null,[t[0]||(t[0]=d("h1",{id:"radio-单选框",tabindex:"-1"},[r("Radio 单选框 "),d("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),t[1]||(t[1]=d("p",null,"在一组备选项中进行单选。",-1)),t[2]||(t[2]=d("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),d("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),t[3]||(t[3]=d("p",null,"单选框的基本使用。",-1)),o(e,null,{default:l(()=>[o(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(C)},{vue:l(()=>[o(g)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=d("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),d("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),t[5]||(t[5]=d("p",null,[d("code",null,"disabled"),r(" 属性可以用来控制单选框的禁用状态。")],-1)),o(e,null,{default:l(()=>[o(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(c)},{vue:l(()=>[o(B)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=h("",3))])}}});export{R as __pageData,D as default};
