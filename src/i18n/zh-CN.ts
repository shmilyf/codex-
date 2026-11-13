export default {
  nav: {
    landing: '产品首页',
    chat: '工作台',
    admin: '控制台'
  },
  lang: {
    label: '语言',
    zh: '中文',
    en: 'English'
  },
  common: {
    newChat: '新建对话',
    search: '搜索',
    settings: '设置',
    save: '保存',
    cancel: '取消',
    confirm: '确认',
    send: '发送',
    retry: '重试',
    back: '返回',
    active: '运行中',
    done: '已完成',
    error: '异常',
    archived: '已归档'
  },
  landing: {
    badge: '面向开发者的 AI 编码助手',
    title: '在浏览器里，与 Codex 一起写代码',
    subtitle: '会话、审批、文件变更与终端都收敛到一个网页工作区，中英界面随你切换，适合本地与自托管部署。',
    ctaPrimary: '进入工作台',
    ctaSecondary: '查看控制台',
    featureTitle: '你可以直接上手的能力',
    features: [
      {
        title: '多会话线程',
        desc: '左侧按项目与最近时间排列对话，草稿与阅读位置分别保留，切换不丢失。'
      },
      {
        title: '权限审批面板',
        desc: '命令、文件改动与额外权限逐条列出，确认后再执行，范围清晰可见。'
      },
      {
        title: '文件与终端',
        desc: '多文件标签、差异预览与终端会话在同一工作区展开，不必在工具间来回跳转。'
      },
      {
        title: '中英双语',
        desc: '界面默认简体中文，可一键切换英文，文案与菜单在所有页面保持一致。'
      }
    ],
    codeCaption: '示例会话',
    codeLines: [
      '> 为登录表单补充邮箱格式校验',
      '✓ 找到 src/login/Form.vue',
      '✓ 新增 validateEmail 规则',
      '✓ 提交两处改动，等待审批'
    ],
    footer: 'Codex Web · 前端演示界面，数据为本地示例'
  },
  chat: {
    threadTitle: '会话列表',
    detailTitle: '会话详情',
    model: '模型',
    permission: '权限',
    context: '上下文用量',
    contextUsed: '已用上下文',
    inputPlaceholder: '输入消息，Enter 发送，Shift + Enter 换行',
    you: '你',
    codex: 'Codex',
    system: '系统',
    pendingApproval: '等待审批',
    changedFiles: '变更文件',
    terminal: '终端',
    presets: '提示词预设',
    permissions: [
      { value: 'read-only', label: '只读' },
      { value: 'default', label: '默认' },
      { value: 'full-access', label: '完全访问' }
    ]
  },
  admin: {
    welcome: '运行概览',
    subtitle: '以下为示例统计，仅用于界面演示，不连接真实后端。',
    stats: [
      { label: '活跃会话', value: '12' },
      { label: '待审批', value: '3' },
      { label: '今日消息', value: '286' },
      { label: '异常任务', value: '1' }
    ],
    tableTitle: '任务列表',
    cols: {
      thread: '会话',
      host: '主机',
      model: '模型',
      status: '状态',
      updated: '最近更新',
      actions: '操作'
    },
    actions: {
      view: '查看',
      archive: '归档'
    }
  },
  mock: {
    threads: [
      '登录表单邮箱校验',
      '重构列表加载逻辑',
      '终端连接报错排查',
      '补充单元测试',
      '接口字段对齐',
      '旧会话归档整理'
    ],
    messages: [
      { role: 'you', text: '帮我把登录表单的邮箱校验补全。' },
      { role: 'codex', text: '我先查看 src/login/Form.vue，再补充邮箱格式规则与错误提示。' },
      { role: 'system', text: '有一条文件改动等待你审批确认。' }
    ],
    sessions: [
      { thread: '登录表单邮箱校验', host: '本机', model: 'codex-standard', status: 'active', updated: '2 分钟前' },
      { thread: '重构列表加载逻辑', host: 'ssh@dev-01', model: 'codex-standard', status: 'done', updated: '18 分钟前' },
      { thread: '终端连接报错排查', host: 'ssh@dev-01', model: 'codex-reasoning', status: 'error', updated: '32 分钟前' },
      { thread: '补充单元测试', host: '本机', model: 'codex-reasoning', status: 'done', updated: '1 小时前' },
      { thread: '接口字段对齐', host: 'ssh@dev-02', model: 'codex-standard', status: 'active', updated: '2 小时前' },
      { thread: '旧会话归档整理', host: '本机', model: 'codex-standard', status: 'archived', updated: '昨天' }
    ]
  }
}
