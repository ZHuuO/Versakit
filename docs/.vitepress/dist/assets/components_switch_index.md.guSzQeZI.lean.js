import { h as g, P as c } from './chunks/theme.B5pwRwa9.js'
import {
  d as v,
  p as d,
  o as i,
  c as h,
  G as n,
  k as o,
  _ as f,
  b as w,
  j as l,
  a as t,
  w as U,
  B as T,
} from './chunks/framework.Z42t_U4q.js'
import { Q as p } from './chunks/index.DEUECMle.js'
const B = `<template>\r
  <div>\r
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>\r
\r
    <VerSwitch :size="selectedValue" v-model="value" />\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerSwitch, VerSegmented } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
const selectedValue = ref('md')\r
\r
const options = [\r
  { label: 'SM', value: 'sm' },\r
  { label: 'MD', value: 'md' },\r
  { label: 'LG', value: 'lg' },\r
]\r
<\/script>\r
\r
<style scoped>\r
.ver-switch {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  D = v({
    __name: 'size',
    setup(m) {
      const r = d(!1),
        e = d('md'),
        a = [
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
        ]
      return (s, J) => (
        i(),
        h('div', null, [
          n(
            o(g),
            {
              modelValue: e.value,
              'onUpdate:modelValue': J[0] || (J[0] = (u) => (e.value = u)),
              options: a,
            },
            null,
            8,
            ['modelValue'],
          ),
          n(
            o(c),
            {
              size: e.value,
              modelValue: r.value,
              'onUpdate:modelValue': J[1] || (J[1] = (u) => (r.value = u)),
            },
            null,
            8,
            ['size', 'modelValue'],
          ),
        ])
      )
    },
  }),
  b = f(D, [['__scopeId', 'data-v-75a4d362']]),
  V = `<template>\r
  <VerSwitch v-model="value" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerSwitch } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
<\/script>\r
`,
  x = v({
    __name: 'base',
    setup(m) {
      const r = d(!1)
      return (e, a) => (
        i(),
        w(
          o(c),
          {
            modelValue: r.value,
            'onUpdate:modelValue': a[0] || (a[0] = (s) => (r.value = s)),
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  O = { tabindex: '0' },
  S = JSON.parse(
    '{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}',
  ),
  C = { name: 'components/switch/index.md' },
  z = Object.assign(C, {
    setup(m) {
      return (r, e) => {
        const a = T('ClientOnly'),
          s = T('Tool')
        return (
          i(),
          h('div', null, [
            e[6] ||
              (e[6] = l(
                'h1',
                { id: 'switch-开关', tabindex: '-1' },
                [
                  t('Switch 开关 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#switch-开关',
                      'aria-label': 'Permalink to "Switch 开关"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[7] ||
              (e[7] = l(
                'p',
                null,
                '表示两种相互对立的状态间的切换，多用于触发「开/关」。',
                -1,
              )),
            e[8] ||
              (e[8] = l(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  t('基础用法 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础用法',
                      'aria-label': 'Permalink to "基础用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[9] ||
              (e[9] = l(
                'p',
                null,
                [
                  t('绑定 '),
                  l('code', null, 'v-model'),
                  t(' 到一个 '),
                  l('code', null, 'Boolean'),
                  t(' 类型的变量。'),
                ],
                -1,
              )),
            n(a, null, {
              default: U(() => [
                n(
                  o(p),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    theme: '',
                    lightTheme: '',
                    darkTheme: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: o(V),
                  },
                  { vue: U(() => [n(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[10] ||
              (e[10] = l(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  t('尺寸 '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#尺寸',
                      'aria-label': 'Permalink to "尺寸"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[11] ||
              (e[11] = l(
                'p',
                null,
                [
                  t('可以通过 '),
                  l('code', null, 'size'),
                  t(' 属性来设置 switch 的大小。'),
                ],
                -1,
              )),
            n(a, null, {
              default: U(() => [
                n(
                  o(p),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    theme: '',
                    lightTheme: '',
                    darkTheme: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: o(B),
                  },
                  { vue: U(() => [n(b)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[12] ||
              (e[12] = l(
                'h2',
                { id: 'switch-api', tabindex: '-1' },
                [
                  t('Switch API '),
                  l(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#switch-api',
                      'aria-label': 'Permalink to "Switch API"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l('table', O, [
              e[5] ||
                (e[5] = l(
                  'thead',
                  null,
                  [
                    l('tr', null, [
                      l('th', null, '属性'),
                      l('th', null, '说明'),
                      l('th', null, '类型'),
                      l('th', null, '默认值'),
                    ]),
                  ],
                  -1,
                )),
              l('tbody', null, [
                e[4] ||
                  (e[4] = l(
                    'tr',
                    null,
                    [
                      l('td', null, [
                        l('code', null, 'v-model'),
                        t(' / '),
                        l('code', null, 'modelValue'),
                      ]),
                      l('td', null, '绑定值'),
                      l('td', null, [l('code', null, 'boolean')]),
                      l('td', null, 'false'),
                    ],
                    -1,
                  )),
                l('tr', null, [
                  e[1] || (e[1] = l('td', null, [l('code', null, 'size')], -1)),
                  e[2] || (e[2] = l('td', null, '设置尺寸', -1)),
                  l('td', null, [
                    e[0] || (e[0] = l('code', null, 'enum', -1)),
                    n(s, { value: 'lg,md,sm' }),
                  ]),
                  e[3] || (e[3] = l('td', null, 'md', -1)),
                ]),
              ]),
            ]),
          ])
        )
      }
    },
  })
export { S as __pageData, z as default }
