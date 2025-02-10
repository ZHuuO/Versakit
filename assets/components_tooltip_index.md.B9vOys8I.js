import{y as s,S as r}from"./chunks/theme.fPrrFYEF.js";import{d as b,o as p,c as a,j as l,G as o,w as e,k as n,a as i,B as c}from"./chunks/framework.Z42t_U4q.js";import{Q as v}from"./chunks/index.DEUECMle.js";const u=`<script setup lang="ts">
import { VerTooltip, VerButton } from '@versakit/ui'
<\/script>

<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Top Left"
        position="top-left"
      >
        <ver-button ghost>top-left</ver-button>
      </ver-tooltip>

      <ver-tooltip class="box-item" effect="dark" content="Top " position="top">
        <ver-button ghost>top</ver-button>
      </ver-tooltip>

      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        position="top-right"
      >
        <ver-button ghost>top-right</ver-button>
      </ver-tooltip>
    </div>

    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        position="left-top"
      >
        <ver-button ghost>left-top</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        position="right-top"
      >
        <ver-button ghost>right-top</ver-button>
      </ver-tooltip>
    </div>
    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Left"
        position="left"
      >
        <ver-button ghost class="mt-3 mb-3">left</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right"
        position="right"
      >
        <ver-button ghost>right</ver-button>
      </ver-tooltip>
    </div>
    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="left-bottom"
        position="left-bottom"
      >
        <ver-button ghost>left-bottom</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        position="right-bottom"
      >
        <ver-button ghost>right-bottom</ver-button>
      </ver-tooltip>
    </div>
    <div class="row center">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        position="bottom-left"
      >
        <ver-button ghost>bottom-left</ver-button>
      </ver-tooltip>

      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom "
        position="bottom"
      >
        <ver-button ghost>bottom</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        position="bottom-right"
      >
        <ver-button ghost>bottom-right</ver-button>
      </ver-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin: 10px 10px;
}
</style>
`,g={class:"tooltip-base-box"},h={class:"row center"},x={class:"row"},k={class:"row"},_={class:"row"},B={class:"row center"},T=b({__name:"base",setup(f){return(d,t)=>(p(),a("div",g,[l("div",h,[o(n(r),{class:"box-item",effect:"dark",content:"Top Left",position:"top-left"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[0]||(t[0]=[i("top-left")])),_:1})]),_:1}),o(n(r),{class:"box-item",effect:"dark",content:"Top ",position:"top"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[1]||(t[1]=[i("top")])),_:1})]),_:1}),o(n(r),{class:"box-item",effect:"dark",content:"Top Right prompts info",position:"top-right"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[2]||(t[2]=[i("top-right")])),_:1})]),_:1})]),l("div",x,[o(n(r),{class:"box-item",effect:"dark",content:"Left Top prompts info",position:"left-top"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[3]||(t[3]=[i("left-top")])),_:1})]),_:1}),o(n(r),{class:"box-item",effect:"dark",content:"Right Top prompts info",position:"right-top"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[4]||(t[4]=[i("right-top")])),_:1})]),_:1})]),l("div",k,[o(n(r),{class:"box-item",effect:"dark",content:"Left",position:"left"},{default:e(()=>[o(n(s),{ghost:"",class:"mt-3 mb-3"},{default:e(()=>t[5]||(t[5]=[i("left")])),_:1})]),_:1}),o(n(r),{class:"box-item",effect:"dark",content:"Right",position:"right"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[6]||(t[6]=[i("right")])),_:1})]),_:1})]),l("div",_,[o(n(r),{class:"box-item",effect:"dark",content:"left-bottom",position:"left-bottom"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[7]||(t[7]=[i("left-bottom")])),_:1})]),_:1}),o(n(r),{class:"box-item",effect:"dark",content:"Right Bottom prompts info",position:"right-bottom"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[8]||(t[8]=[i("right-bottom")])),_:1})]),_:1})]),l("div",B,[o(n(r),{class:"box-item",effect:"dark",content:"Bottom Left prompts info",position:"bottom-left"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[9]||(t[9]=[i("bottom-left")])),_:1})]),_:1}),o(n(r),{class:"box-item",effect:"dark",content:"Bottom ",position:"bottom"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[10]||(t[10]=[i("bottom")])),_:1})]),_:1}),o(n(r),{class:"box-item",effect:"dark",content:"Bottom Right prompts info",position:"bottom-right"},{default:e(()=>[o(n(s),{ghost:""},{default:e(()=>t[11]||(t[11]=[i("bottom-right")])),_:1})]),_:1})])]))}}),L=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip/index.md","filePath":"components/tooltip/index.md"}'),w={name:"components/tooltip/index.md"},D=Object.assign(w,{setup(f){return(d,t)=>{const m=c("ClientOnly");return p(),a("div",null,[t[0]||(t[0]=l("h1",{id:"tooltip-文字提示",tabindex:"-1"},[i("Tooltip 文字提示 "),l("a",{class:"header-anchor",href:"#tooltip-文字提示","aria-label":'Permalink to "Tooltip 文字提示"'},"​")],-1)),t[1]||(t[1]=l("p",null,"常用于展示鼠标 hover 时的提示信息。",-1)),t[2]||(t[2]=l("h2",{id:"基本用法",tabindex:"-1"},[i("基本用法 "),l("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),t[3]||(t[3]=l("p",null,"在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。",-1)),o(m,null,{default:e(()=>[o(n(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(u)},{vue:e(()=>[o(T)]),_:1},8,["vueCode"])]),_:1})])}}});export{L as __pageData,D as default};
