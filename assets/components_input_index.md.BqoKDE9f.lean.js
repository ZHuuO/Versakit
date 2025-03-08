import{G as m,N as c}from"./chunks/theme.BTh_A52A.js";import{d as h,p as b,b as f,o as u,w as o,G as d,k as l,B as v,c as _,j as t,ar as V,a as r}from"./chunks/framework.B9s_fTIu.js";import{Q as p}from"./chunks/index.Cnf2THuG.js";const B=`<template>
  <VerRow>
    <VerInput disabled v-model="value" placeholder="Please input" />
  </VerRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerInput, VerRow } from '@versakit/ui'

const value = ref('')
<\/script>

<style scoped></style>
`,C=h({__name:"disabled",setup(i){const n=b("");return(e,a)=>(u(),f(l(c),null,{default:o(()=>[d(l(m),{disabled:"",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=s=>n.value=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),x=`<template>
  <VerRow>
    <VerInput v-model="value" placeholder="Please input" />
  </VerRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerInput, VerRow } from '@versakit/ui'

const value = ref('')
<\/script>

<style scoped></style>
`,k=h({__name:"base",setup(i){const n=b("");return(e,a)=>(u(),f(l(c),null,{default:o(()=>[d(l(m),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=s=>n.value=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),D=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}'),A={name:"components/input/index.md"},X=Object.assign(A,{setup(i){return(n,e)=>{const a=v("ClientOnly");return u(),_("div",null,[e[0]||(e[0]=t("h1",{id:"input-输入框",tabindex:"-1"},[r("Input 输入框 "),t("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),e[1]||(e[1]=t("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[2]||(e[2]=t("p",null,"通过鼠标或键盘输入字符.",-1)),d(a,null,{default:o(()=>[d(l(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(x)},{vue:o(()=>[d(k)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=t("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[4]||(e[4]=t("p",null,[r("通过 "),t("code",null,"disabled"),r(" 属性指定是否禁用 input 组件")],-1)),d(a,null,{default:o(()=>[d(l(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(B)},{vue:o(()=>[d(C)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=V("",3))])}}});export{D as __pageData,X as default};
