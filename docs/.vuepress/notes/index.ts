import { defineNotesConfig } from 'vuepress-theme-plume'
import ai from './ai.ts'
import high_math from './high_math.ts'
export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: '/notes/',
  link: '/',
  // 在这里添加 note 配置
  notes: [
    {
      dir: 'notes',
      link: '/notes/',
      sidebar: [
        {
          text: '总览',
          link: '/notes/',
          icon: 'ep:guide',
          items: [
            { text: '人工智能', link: '/notes/ai/README.md' },
            { text: '高等数学', link: '/notes/high_math/README.md' }
          ]
        }
      ],
    },
    ai,
    high_math,
  ],
})
