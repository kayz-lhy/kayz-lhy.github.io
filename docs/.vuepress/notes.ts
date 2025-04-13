import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: '人工智能',
  link: '/a1i/',
  // sidebar: [
  //   '/ai/机器学习/ml.md',
  //   '/ai/深度学习/深度学习.md',],
})

export const zhNotes = defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [zhDemoNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})
