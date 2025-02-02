import type { DefaultTheme } from 'vitepress'

export function getSidebar(): DefaultTheme.Sidebar {
  return {
    '/components': [
      {
        text: '通用',
        items: [
          { text: 'Button 按钮', link: '/components/button/' },
          { text: 'Collapse 折叠面板', link: '/components/collapse/' },
          { text: 'Tooltip 提示', link: '/components/tooltip/' },
          { text: 'Popconfirm 弹出确认', link: '/components/popconfirm/' },
        ],
      },
      { text: '导航', items: [] },
      {
        text: '反馈',
        items: [
          { text: 'Alert 提示', link: '/components/alter/' },
        ],
      },
      {
        text: '数据录入',
        items: [
          { text: 'Input 输入框', link: '/components/input/' },
        ],
      },
      {
        text: '数据展示',
        items: [
          { text: 'Tree 树', link: '/components/tree/' },
        ],
      },
      {
        text: '布局',
        items: [
          { text: 'Space 间距', link: '/components/space/' },
        ],
      },
    ],
    '/utils': [
      { text: '类名生成器', link: '/utils/gen-class' },
    ],
  }
}
