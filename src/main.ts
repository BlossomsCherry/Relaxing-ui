import '../styles/main.css'

import { createApp } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/arduino-light.css'
import App from './App.vue'
import router from './router'
import RelaxUi from '../packages/index'

const app = createApp(App)

app.use(router)
app.use(RelaxUi)
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    'javascript',
    'css',
    'python',
    'html',
    'bash',
    'java',
    'sql',
    'json',
    'http',
    'go',
    'c++',
    'c#',
    ''
  ]
})

//自定义指令
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block)
  })
})

app.mount('#app')
