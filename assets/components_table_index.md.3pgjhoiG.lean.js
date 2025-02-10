import{s as b}from"./chunks/theme.fPrrFYEF.js";import{d as u,o,b as c,k as d,c as h,j as a,a as t,G as n,w as r,aq as k,B as y}from"./chunks/framework.Z42t_U4q.js";import{Q as m}from"./chunks/index.DEUECMle.js";const g=`<template>
  <VerTable border :data="tableData" :columns="columns"></VerTable>
</template>

<script setup lang="ts">
import { VerTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,x=u({__name:"border",setup(i){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],e=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(l,p)=>(o(),c(d(b),{border:"",data:s,columns:e}))}}),f=`<template>
  <VerTable stripe :data="tableData" :columns="columns"></VerTable>
</template>

<script setup lang="ts">
import { VerTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '范冰冰',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '4',
    name: '李冰冰',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,T=u({__name:"stripe",setup(i){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"},{key:"3",name:"范冰冰",age:42,address:"西湖区湖底公园1号"},{key:"4",name:"李冰冰",age:42,address:"西湖区湖底公园1号"}],e=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(l,p)=>(o(),c(d(b),{stripe:"",data:s,columns:e}))}}),_=`<template>
  <VerTable :data="tableData" :columns="columns" />
</template>

<script setup lang="ts">
import { VerTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,v=u({__name:"base",setup(i){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],e=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(l,p)=>(o(),c(d(b),{data:s,columns:e}))}}),A=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table/index.md","filePath":"components/table/index.md"}'),B={name:"components/table/index.md"},V=Object.assign(B,{setup(i){return(s,e)=>{const l=y("ClientOnly");return o(),h("div",null,[e[0]||(e[0]=a("h1",{id:"table-表格",tabindex:"-1"},[t("Table 表格 "),a("a",{class:"header-anchor",href:"#table-表格","aria-label":'Permalink to "Table 表格"'},"​")],-1)),e[1]||(e[1]=a("p",null,"展示行列数据。",-1)),e[2]||(e[2]=a("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[3]||(e[3]=a("p",null,"简单的表格",-1)),n(l,null,{default:r(()=>[n(d(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(_)},{vue:r(()=>[n(v)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=a("h2",{id:"带斑马纹表格",tabindex:"-1"},[t("带斑马纹表格 "),a("a",{class:"header-anchor",href:"#带斑马纹表格","aria-label":'Permalink to "带斑马纹表格"'},"​")],-1)),e[5]||(e[5]=a("p",null,"使用带斑马纹的表格，可以更容易区分出不同行的数据。",-1)),e[6]||(e[6]=a("p",null,[a("code",null,"stripe"),t(" 可以创建带斑马纹的表格。 如果 "),a("code",null,"true"),t(", 表格将会带有斑马纹。")],-1)),n(l,null,{default:r(()=>[n(d(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(f)},{vue:r(()=>[n(T)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=a("h2",{id:"带边框表格​",tabindex:"-1"},[t("带边框表格​ "),a("a",{class:"header-anchor",href:"#带边框表格​","aria-label":'Permalink to "带边框表格​"'},"​")],-1)),e[8]||(e[8]=a("p",null,[t("默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),a("code",null,"border"),t(" 属性，把该属性设置为 "),a("code",null,"true"),t(" 即可启用。")],-1)),n(l,null,{default:r(()=>[n(d(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(g)},{vue:r(()=>[n(x)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=k("",5))])}}});export{A as __pageData,V as default};
