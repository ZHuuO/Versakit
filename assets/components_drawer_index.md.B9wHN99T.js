import{y as m,T as p}from"./chunks/theme.fPrrFYEF.js";import{d as D,p as f,o as w,c as v,G as l,w as a,a as o,k as d,j as e,B}from"./chunks/framework.Z42t_U4q.js";import{Q as b}from"./chunks/index.DEUECMle.js";const k=`<template>
  <div>
    <VerButton @click="drawerLeft = true">Left</VerButton>
    <VerButton @click="drawerTop = true">Top</VerButton>
    <VerButton @click="drawerRight = true">Right</VerButton>
    <VerButton @click="drawerBottom = true">Bottom</VerButton>

    <VerDrawer v-model="drawerLeft">
      <span>左边</span>
    </VerDrawer>

    <VerDrawer direction="top" v-model="drawerTop">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="right" v-model="drawerRight">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="bottom" v-model="drawerBottom">
      <span>上面</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from '@versakit/ui'

const drawerLeft = ref(false)
const drawerTop = ref(false)
const drawerRight = ref(false)
const drawerBottom = ref(false)
<\/script>
`,C=D({__name:"direction",setup(V){const s=f(!1),r=f(!1),n=f(!1),i=f(!1);return(y,t)=>(w(),v("div",null,[l(d(m),{onClick:t[0]||(t[0]=u=>s.value=!0)},{default:a(()=>t[8]||(t[8]=[o("Left")])),_:1}),l(d(m),{onClick:t[1]||(t[1]=u=>r.value=!0)},{default:a(()=>t[9]||(t[9]=[o("Top")])),_:1}),l(d(m),{onClick:t[2]||(t[2]=u=>n.value=!0)},{default:a(()=>t[10]||(t[10]=[o("Right")])),_:1}),l(d(m),{onClick:t[3]||(t[3]=u=>i.value=!0)},{default:a(()=>t[11]||(t[11]=[o("Bottom")])),_:1}),l(d(p),{modelValue:s.value,"onUpdate:modelValue":t[4]||(t[4]=u=>s.value=u)},{default:a(()=>t[12]||(t[12]=[e("span",null,"左边",-1)])),_:1},8,["modelValue"]),l(d(p),{direction:"top",modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=u=>r.value=u)},{default:a(()=>t[13]||(t[13]=[e("span",null,"上面",-1)])),_:1},8,["modelValue"]),l(d(p),{direction:"right",modelValue:n.value,"onUpdate:modelValue":t[6]||(t[6]=u=>n.value=u)},{default:a(()=>t[14]||(t[14]=[e("span",null,"上面",-1)])),_:1},8,["modelValue"]),l(d(p),{direction:"bottom",modelValue:i.value,"onUpdate:modelValue":t[7]||(t[7]=u=>i.value=u)},{default:a(()=>t[15]||(t[15]=[e("span",null,"上面",-1)])),_:1},8,["modelValue"])]))}}),g=`<template>
  <div>
    <VerButton @click="drawerLeft = true">基本使用</VerButton>

    <VerDrawer v-model="drawerLeft">
      <span>左边</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from '@versakit/ui'

const drawerLeft = ref(false)
<\/script>
`,T=D({__name:"base",setup(V){const s=f(!1);return(r,n)=>(w(),v("div",null,[l(d(m),{onClick:n[0]||(n[0]=i=>s.value=!0)},{default:a(()=>n[2]||(n[2]=[o("基本使用")])),_:1}),l(d(p),{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=i=>s.value=i)},{default:a(()=>n[3]||(n[3]=[e("span",null,"左边",-1)])),_:1},8,["modelValue"])]))}}),W={tabindex:"0"},z=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}'),x={name:"components/drawer/index.md"},N=Object.assign(x,{setup(V){return(s,r)=>{const n=B("ClientOnly"),i=B("Tool");return w(),v("div",null,[r[5]||(r[5]=e("h1",{id:"drawer-抽屉",tabindex:"-1"},[o("Drawer 抽屉 "),e("a",{class:"header-anchor",href:"#drawer-抽屉","aria-label":'Permalink to "Drawer 抽屉"'},"​")],-1)),r[6]||(r[6]=e("p",null,[o("有些时候, "),e("code",null,"Dialog"),o(" 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档。")],-1)),r[7]||(r[7]=e("h2",{id:"基础使用",tabindex:"-1"},[o("基础使用 "),e("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),r[8]||(r[8]=e("p",null,"呼出一个临时的侧边栏，自定义内容。",-1)),l(n,null,{default:a(()=>[l(d(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(g)},{vue:a(()=>[l(T)]),_:1},8,["vueCode"])]),_:1}),r[9]||(r[9]=e("h2",{id:"不同方向",tabindex:"-1"},[o("不同方向 "),e("a",{class:"header-anchor",href:"#不同方向","aria-label":'Permalink to "不同方向"'},"​")],-1)),r[10]||(r[10]=e("p",null,[o("抽屉可以从四个方向呼出，可以用 "),e("code",null,"direction"),o(" 设置。")],-1)),l(n,null,{default:a(()=>[l(d(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(k)},{vue:a(()=>[l(C)]),_:1},8,["vueCode"])]),_:1}),r[11]||(r[11]=e("h2",{id:"drawer-api",tabindex:"-1"},[o("Drawer API "),e("a",{class:"header-anchor",href:"#drawer-api","aria-label":'Permalink to "Drawer API"'},"​")],-1)),r[12]||(r[12]=e("h3",{id:"drawer-属性",tabindex:"-1"},[o("Drawer 属性 "),e("a",{class:"header-anchor",href:"#drawer-属性","aria-label":'Permalink to "Drawer 属性"'},"​")],-1)),e("table",W,[r[4]||(r[4]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[r[1]||(r[1]=e("td",null,[e("code",null,"direction")],-1)),r[2]||(r[2]=e("td",null,"设置呼出的方向",-1)),e("td",null,[r[0]||(r[0]=e("code",null,"enum",-1)),l(i,{value:"left,top,right,bottom"})]),r[3]||(r[3]=e("td",null,"left",-1))])])])])}}});export{z as __pageData,N as default};
