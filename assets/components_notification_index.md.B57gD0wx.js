import{y as c,Z as s}from"./chunks/theme.fPrrFYEF.js";import{d as V,o as p,c as f,G as o,w as l,a as i,k as r,_ as W,aq as y,j as n,B as v}from"./chunks/framework.Z42t_U4q.js";import{Q as b}from"./chunks/index.DEUECMle.js";const B=`<template>
  <div>
    <VerButton @click="topleft">top-left</VerButton>
    <VerButton @click="topright">top-right</VerButton>
    <VerButton @click="bottomleft">bottom-left</VerButton>
    <VerButton @click="bottomright">bottom-right</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const topleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'top-left',
  })
}

const topright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
  })
}

const bottomleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-left',
  })
}

const bottomright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-right',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,_=V({__name:"position",setup(m){const d=()=>{s({title:"title",content:"content",position:"top-left"})},t=()=>{s({title:"title",content:"content"})},a=()=>{s({title:"title",content:"content",position:"bottom-left"})},u=()=>{s({title:"title",content:"content",position:"bottom-right"})};return(h,e)=>(p(),f("div",null,[o(r(c),{onClick:d},{default:l(()=>e[0]||(e[0]=[i("top-left")])),_:1}),o(r(c),{onClick:t},{default:l(()=>e[1]||(e[1]=[i("top-right")])),_:1}),o(r(c),{onClick:a},{default:l(()=>e[2]||(e[2]=[i("bottom-left")])),_:1}),o(r(c),{onClick:u},{default:l(()=>e[3]||(e[3]=[i("bottom-right")])),_:1})]))}}),C=W(_,[["__scopeId","data-v-49e45a40"]]),k=`<template>
  <div>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warn" @click="warning">warning</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const info = () => {
  VerNotification({
    title: 'title',
    type: 'info',
    plain: true,
    content: 'content',
  })
}

const success = () => {
  VerNotification({
    title: 'title',
    type: 'success',
    plain: true,
    content: 'content',
  })
}

const warning = () => {
  VerNotification({
    title: 'title',
    type: 'warn',
    plain: true,
    content: 'content',
  })
}

const error = () => {
  VerNotification({
    title: 'title',
    type: 'error',
    plain: true,
    content: 'content',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,N=V({__name:"plain",setup(m){const d=()=>{s({title:"title",type:"info",plain:!0,content:"content"})},t=()=>{s({title:"title",type:"success",plain:!0,content:"content"})},a=()=>{s({title:"title",type:"warn",plain:!0,content:"content"})},u=()=>{s({title:"title",type:"error",plain:!0,content:"content"})};return(h,e)=>(p(),f("div",null,[o(r(c),{type:"info",onClick:d},{default:l(()=>e[0]||(e[0]=[i("info")])),_:1}),o(r(c),{type:"success",onClick:t},{default:l(()=>e[1]||(e[1]=[i("success")])),_:1}),o(r(c),{type:"warn",onClick:a},{default:l(()=>e[2]||(e[2]=[i("warning")])),_:1}),o(r(c),{type:"error",onClick:u},{default:l(()=>e[3]||(e[3]=[i("error")])),_:1})]))}}),g=W(N,[["__scopeId","data-v-a967307c"]]),w=`<template>
  <div>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warn" @click="warning">warning</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const info = () => {
  VerNotification({
    title: 'title',
    type: 'info',
    content: 'content',
  })
}

const success = () => {
  VerNotification({
    title: 'title',
    type: 'success',
    content: 'content',
  })
}

const warning = () => {
  VerNotification({
    title: 'title',
    type: 'warning',
    content: 'content',
  })
}

const error = () => {
  VerNotification({
    title: 'title',
    type: 'error',
    content: 'content',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,T=V({__name:"type",setup(m){const d=()=>{s({title:"title",type:"info",content:"content"})},t=()=>{s({title:"title",type:"success",content:"content"})},a=()=>{s({title:"title",type:"warning",content:"content"})},u=()=>{s({title:"title",type:"error",content:"content"})};return(h,e)=>(p(),f("div",null,[o(r(c),{type:"info",onClick:d},{default:l(()=>e[0]||(e[0]=[i("info")])),_:1}),o(r(c),{type:"success",onClick:t},{default:l(()=>e[1]||(e[1]=[i("success")])),_:1}),o(r(c),{type:"warn",onClick:a},{default:l(()=>e[2]||(e[2]=[i("warning")])),_:1}),o(r(c),{type:"error",onClick:u},{default:l(()=>e[3]||(e[3]=[i("error")])),_:1})]))}}),Z=W(T,[["__scopeId","data-v-b1b85772"]]),A=`<template>
  <div>
    <VerButton @click="openNotification">openNotification</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const openNotification = () => {
  VerNotification({
    title: 'title',
    content: 'content',
  })
}
<\/script>
`,x=V({__name:"base",setup(m){const d=()=>{s({title:"title",content:"content"})};return(t,a)=>(p(),f("div",null,[o(r(c),{onClick:d},{default:l(()=>a[0]||(a[0]=[i("openNotification")])),_:1})]))}}),D={tabindex:"0"},G=JSON.parse('{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}'),X={name:"components/notification/index.md"},I=Object.assign(X,{setup(m){return(d,t)=>{const a=v("ClientOnly"),u=v("Tool");return p(),f("div",null,[t[4]||(t[4]=y('<h1 id="notification-通知" tabindex="-1">Notification 通知 <a class="header-anchor" href="#notification-通知" aria-label="Permalink to &quot;Notification 通知&quot;">​</a></h1><p>悬浮出现在页面角落，显示全局的通知提醒消息。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>你可以通过设置 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文内容。 默认情况下，通知在 4500 毫秒后自动关闭，但你可以通过设置 <code>duration</code> 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 接收一个 Number，单位为毫秒。</p>',4)),o(a,null,{default:l(()=>[o(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(A)},{vue:l(()=>[o(x)]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=n("h2",{id:"不同类型",tabindex:"-1"},[i("不同类型 "),n("a",{class:"header-anchor",href:"#不同类型","aria-label":'Permalink to "不同类型"'},"​")],-1)),t[6]||(t[6]=n("p",null,[i("我们提供了四种不同类型的提醒框："),n("code",null,"success"),i("、"),n("code",null,"warning"),i("、"),n("code",null,"info"),i(" 和 "),n("code",null,"error"),i("。")],-1)),o(a,null,{default:l(()=>[o(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(w)},{vue:l(()=>[o(Z)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=n("h2",{id:"不同风格",tabindex:"-1"},[i("不同风格 "),n("a",{class:"header-anchor",href:"#不同风格","aria-label":'Permalink to "不同风格"'},"​")],-1)),t[8]||(t[8]=n("p",null,[i("通知色彩更加鲜明，支持 "),n("code",null,"success"),i("、"),n("code",null,"warning"),i("、"),n("code",null,"info"),i(" 和 "),n("code",null,"error"),i(" 四种类型。")],-1)),o(a,null,{default:l(()=>[o(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(k)},{vue:l(()=>[o(g)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=y('<h2 id="自定义消息弹出的位置" tabindex="-1">自定义消息弹出的位置 <a class="header-anchor" href="#自定义消息弹出的位置" aria-label="Permalink to &quot;自定义消息弹出的位置&quot;">​</a></h2><p>可以让 Notification 从屏幕四角中的任意一角弹出。</p><p>使用 <code>position</code> 属性设置 Notification 的弹出位置， 支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code> 和 <code>bottom-left</code>， 默认为 <code>top-right</code>。</p>',3)),o(a,null,{default:l(()=>[o(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(B)},{vue:l(()=>[o(C)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=y('<h2 id="notification-api" tabindex="-1">Notification API <a class="header-anchor" href="#notification-api" aria-label="Permalink to &quot;Notification API&quot;">​</a></h2><h3 id="notification-属性" tabindex="-1">Notification 属性 <a class="header-anchor" href="#notification-属性" aria-label="Permalink to &quot;Notification 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>duration</code></td><td>notification 的持续时间</td><td><code>number</code></td><td><code>4500</code></td></tr></tbody></table><h3 id="notification-方法" tabindex="-1">Notification 方法 <a class="header-anchor" href="#notification-方法" aria-label="Permalink to &quot;Notification 方法&quot;">​</a></h3>',4)),n("table",D,[t[3]||(t[3]=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"描述"),n("th",null,"类型")])],-1)),n("tbody",null,[n("tr",null,[t[1]||(t[1]=n("td",null,[n("code",null,"destroy")],-1)),t[2]||(t[2]=n("td",null,"notification 的销毁函数",-1)),n("td",null,[t[0]||(t[0]=n("code",null,"function",-1)),o(u,{value:"() => void"})])])])])])}}});export{G as __pageData,I as default};
