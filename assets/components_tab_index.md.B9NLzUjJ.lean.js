import{x as o,z as p}from"./chunks/theme.BTh_A52A.js";import{d as c,p as T,b as v,o as i,w as l,G as n,k as s,j as t,B as f,c as h,ar as V,a as d}from"./chunks/framework.B9s_fTIu.js";import{Q as u}from"./chunks/index.Cnf2THuG.js";const _=`<script setup lang="ts">
import { ref } from 'vue'
import { VerTab, VerTabItem } from '@versakit/ui'

const activeTab = ref('1')
<\/script>

<template>
  <VerTab v-model="activeTab" type="card">
    <VerTabItem label="标签1" name="1">
      <div class="content">标签1的内容</div>
    </VerTabItem>
    <VerTabItem label="标签2" name="2">
      <div class="content">标签2的内容</div>
    </VerTabItem>
    <VerTabItem label="标签3" name="3">
      <div class="content">标签3的内容</div>
    </VerTabItem>
  </VerTab>
</template>

<style scoped></style>
`,y=c({__name:"card",setup(m){const r=T("1");return(a,e)=>(i(),v(s(p),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=b=>r.value=b),type:"card"},{default:l(()=>[n(s(o),{label:"标签1",name:"1"},{default:l(()=>e[1]||(e[1]=[t("div",{class:"content"},"标签1的内容",-1)])),_:1}),n(s(o),{label:"标签2",name:"2"},{default:l(()=>e[2]||(e[2]=[t("div",{class:"content"},"标签2的内容",-1)])),_:1}),n(s(o),{label:"标签3",name:"3"},{default:l(()=>e[3]||(e[3]=[t("div",{class:"content"},"标签3的内容",-1)])),_:1})]),_:1},8,["modelValue"]))}}),B=`<script setup lang="ts">
import { ref } from 'vue'
import { VerTab, VerTabItem } from '@versakit/ui'

const activeTab = ref('1')
<\/script>

<template>
  <VerTab v-model="activeTab">
    <VerTabItem label="标签1" name="1">
      <div class="content">标签1的内容</div>
    </VerTabItem>
    <VerTabItem label="标签2" name="2">
      <div class="content">标签2的内容</div>
    </VerTabItem>
    <VerTabItem label="标签3" name="3">
      <div class="content">标签3的内容</div>
    </VerTabItem>
  </VerTab>
</template>

<style scoped></style>
`,C=c({__name:"base",setup(m){const r=T("1");return(a,e)=>(i(),v(s(p),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=b=>r.value=b)},{default:l(()=>[n(s(o),{label:"标签1",name:"1"},{default:l(()=>e[1]||(e[1]=[t("div",{class:"content"},"标签1的内容",-1)])),_:1}),n(s(o),{label:"标签2",name:"2"},{default:l(()=>e[2]||(e[2]=[t("div",{class:"content"},"标签2的内容",-1)])),_:1}),n(s(o),{label:"标签3",name:"3"},{default:l(()=>e[3]||(e[3]=[t("div",{class:"content"},"标签3的内容",-1)])),_:1})]),_:1},8,["modelValue"]))}}),D=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tab/index.md","filePath":"components/tab/index.md"}'),x={name:"components/tab/index.md"},W=Object.assign(x,{setup(m){return(r,a)=>{const e=f("ClientOnly");return i(),h("div",null,[a[0]||(a[0]=t("h1",{id:"tabs-标签页",tabindex:"-1"},[d("Tabs 标签页 "),t("a",{class:"header-anchor",href:"#tabs-标签页","aria-label":'Permalink to "Tabs 标签页"'},"​")],-1)),a[1]||(a[1]=t("p",null,"分隔内容上有关联但属于不同类别的数据集合。",-1)),a[2]||(a[2]=t("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),a[3]||(a[3]=t("p",null,[d("Tabs 组件提供了选项卡功能，通过 "),t("code",null,"tabList"),d(" 绑定当前激活的 "),t("code",null,"Tab"),d(" 名称。")],-1)),n(e,null,{default:l(()=>[n(s(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(B)},{vue:l(()=>[n(C)]),_:1},8,["vueCode"])]),_:1}),a[4]||(a[4]=t("h2",{id:"卡片",tabindex:"-1"},[d("卡片 "),t("a",{class:"header-anchor",href:"#卡片","aria-label":'Permalink to "卡片"'},"​")],-1)),a[5]||(a[5]=t("p",null,[d("Tabs 组件提供了选项卡功能，通过 "),t("code",null,"tabList"),d(" 绑定当前激活的 "),t("code",null,"Tab"),d(" 名称。")],-1)),n(e,null,{default:l(()=>[n(s(u),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(_)},{vue:l(()=>[n(y)]),_:1},8,["vueCode"])]),_:1}),a[6]||(a[6]=V("",5))])}}});export{D as __pageData,W as default};
