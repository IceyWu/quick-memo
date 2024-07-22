export const words = [
  {
    title: '配置github账号',
    content: 'git config --global user.email "3128006406@qq.com"',
    tags: ['git', 'cmd']
  },
  {
    title: '配置工作gitlab账号',
    content: 'git config --global user.email "kui.wu@boran-tech.com""',
    tags: ['git', 'cmd']
  }
]
// 根据tag获取所有
export const getWordsByTag = (tag: string) => (tag === 'all' ? words : words.filter((item) => item.tags.includes(tag)))
