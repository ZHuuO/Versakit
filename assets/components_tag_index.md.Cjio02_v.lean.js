import{u as o}from"./chunks/theme.fPrrFYEF.js";import{d as m,o as s,c as u,j as a,G as t,w as n,a as l,k as r,F as y,_ as f,aq as V,B as d}from"./chunks/framework.Z42t_U4q.js";import{Q as b}from"./chunks/index.DEUECMle.js";const v=`<template>
  <div class="my">
    <VerTag>Tag 1</VerTag>
    <VerTag type="success">Tag 2</VerTag>
    <VerTag type="info">Tag 3</VerTag>
    <VerTag type="warn">Tag 4</VerTag>
    <VerTag type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag plain>Tag 1</VerTag>
    <VerTag plain type="success">Tag 2</VerTag>
    <VerTag plain type="info">Tag 3</VerTag>
    <VerTag plain type="warn">Tag 4</VerTag>
    <VerTag plain type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag round>Tag 1</VerTag>
    <VerTag round type="success">Tag 2</VerTag>
    <VerTag round type="info">Tag 3</VerTag>
    <VerTag round type="warn">Tag 4</VerTag>
    <VerTag round type="error">Tag 5</VerTag>
  </div>
</template>

<script lang="ts" setup>
import { VerTag } from '@versakit/ui'
<\/script>

<style scoped>
.my {
  margin: 1rem 0;
}

.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
`,x={class:"my"},C={class:"my"},W={class:"my"},_=m({__name:"base",setup(g){return(i,e)=>(s(),u(y,null,[a("div",x,[t(r(o),null,{default:n(()=>e[0]||(e[0]=[l("Tag 1")])),_:1}),t(r(o),{type:"success"},{default:n(()=>e[1]||(e[1]=[l("Tag 2")])),_:1}),t(r(o),{type:"info"},{default:n(()=>e[2]||(e[2]=[l("Tag 3")])),_:1}),t(r(o),{type:"warn"},{default:n(()=>e[3]||(e[3]=[l("Tag 4")])),_:1}),t(r(o),{type:"error"},{default:n(()=>e[4]||(e[4]=[l("Tag 5")])),_:1})]),a("div",C,[t(r(o),{plain:""},{default:n(()=>e[5]||(e[5]=[l("Tag 1")])),_:1}),t(r(o),{plain:"",type:"success"},{default:n(()=>e[6]||(e[6]=[l("Tag 2")])),_:1}),t(r(o),{plain:"",type:"info"},{default:n(()=>e[7]||(e[7]=[l("Tag 3")])),_:1}),t(r(o),{plain:"",type:"warn"},{default:n(()=>e[8]||(e[8]=[l("Tag 4")])),_:1}),t(r(o),{plain:"",type:"error"},{default:n(()=>e[9]||(e[9]=[l("Tag 5")])),_:1})]),a("div",W,[t(r(o),{round:""},{default:n(()=>e[10]||(e[10]=[l("Tag 1")])),_:1}),t(r(o),{round:"",type:"success"},{default:n(()=>e[11]||(e[11]=[l("Tag 2")])),_:1}),t(r(o),{round:"",type:"info"},{default:n(()=>e[12]||(e[12]=[l("Tag 3")])),_:1}),t(r(o),{round:"",type:"warn"},{default:n(()=>e[13]||(e[13]=[l("Tag 4")])),_:1}),t(r(o),{round:"",type:"error"},{default:n(()=>e[14]||(e[14]=[l("Tag 5")])),_:1})])],64))}}),w=f(_,[["__scopeId","data-v-580ea1da"]]),B={tabindex:"0"},P=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}'),k={name:"components/tag/index.md"},Z=Object.assign(k,{setup(g){return(i,e)=>{const p=d("ClientOnly"),T=d("Tool");return s(),u("div",null,[e[7]||(e[7]=V("",4)),t(p,null,{default:n(()=>[t(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(v)},{vue:n(()=>[t(w)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=a("h2",{id:"tag-api",tabindex:"-1"},[l("Tag API "),a("a",{class:"header-anchor",href:"#tag-api","aria-label":'Permalink to "Tag API"'},"​")],-1)),e[9]||(e[9]=a("h3",{id:"tag-属性",tabindex:"-1"},[l("Tag 属性 "),a("a",{class:"header-anchor",href:"#tag-属性","aria-label":'Permalink to "Tag 属性"'},"​")],-1)),a("table",B,[e[6]||(e[6]=a("thead",null,[a("tr",null,[a("th",null,"属性"),a("th",null,"说明"),a("th",null,"类型"),a("th",null,"默认值")])],-1)),a("tbody",null,[a("tr",null,[e[1]||(e[1]=a("td",null,[a("code",null,"type")],-1)),e[2]||(e[2]=a("td",null,"Tag 的类型",-1)),a("td",null,[e[0]||(e[0]=a("code",null,"enum",-1)),t(T,{value:"primary,success,info,warning,danger"})]),e[3]||(e[3]=a("td",null,"primary",-1))]),e[4]||(e[4]=a("tr",null,[a("td",null,[a("code",null,"plain")]),a("td",null,"背景是否半透明"),a("td",null,[a("code",null,"boolean")]),a("td",null,"false")],-1)),e[5]||(e[5]=a("tr",null,[a("td",null,[a("code",null,"round")]),a("td",null,"Tag 是否为圆角"),a("td",null,[a("code",null,"boolean")]),a("td",null,"false")],-1))])])])}}});export{P as __pageData,Z as default};
