export default {
  nav: {
    landing: 'Home',
    chat: 'Workspace',
    admin: 'Console'
  },
  lang: {
    label: 'Language',
    zh: '中文',
    en: 'English'
  },
  common: {
    newChat: 'New chat',
    search: 'Search',
    settings: 'Settings',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    send: 'Send',
    retry: 'Retry',
    back: 'Back',
    active: 'Active',
    done: 'Done',
    error: 'Error',
    archived: 'Archived'
  },
  landing: {
    badge: 'AI coding assistant for developers',
    title: 'Write code with Codex, right in the browser',
    subtitle: 'Threads, approvals, file changes and terminals converge in one web workspace. The interface switches between Chinese and English, ready for local and self-hosted setups.',
    ctaPrimary: 'Open workspace',
    ctaSecondary: 'View console',
    featureTitle: 'Capabilities you can start with',
    features: [
      {
        title: 'Multiple threads',
        desc: 'Conversations are grouped by project and recent activity on the left; drafts and scroll position are kept separately.'
      },
      {
        title: 'Approval panel',
        desc: 'Commands, file changes and extra permissions are listed one by one and run only after you confirm.'
      },
      {
        title: 'Files and terminal',
        desc: 'File tabs, diff previews and terminal sessions live in the same workspace, no switching between tools.'
      },
      {
        title: 'Bilingual UI',
        desc: 'Simplified Chinese by default, one click to switch to English; labels and menus stay consistent across pages.'
      }
    ],
    codeCaption: 'Sample thread',
    codeLines: [
      '> Add email validation to the login form',
      '✓ Found src/login/Form.vue',
      '✓ Added validateEmail rule',
      '✓ Two changes staged, awaiting approval'
    ],
    footer: 'Codex Web · Frontend demo with local sample data'
  },
  chat: {
    threadTitle: 'Threads',
    detailTitle: 'Thread details',
    model: 'Model',
    permission: 'Permission',
    context: 'Context usage',
    contextUsed: 'Context used',
    inputPlaceholder: 'Type a message, Enter to send, Shift + Enter for a line break',
    you: 'You',
    codex: 'Codex',
    system: 'System',
    pendingApproval: 'Awaiting approval',
    changedFiles: 'Changed files',
    terminal: 'Terminal',
    presets: 'Prompt presets',
    permissions: [
      { value: 'read-only', label: 'Read-only' },
      { value: 'default', label: 'Default' },
      { value: 'full-access', label: 'Full access' }
    ]
  },
  admin: {
    welcome: 'Runtime overview',
    subtitle: 'Sample statistics for interface demo only; no real backend is connected.',
    stats: [
      { label: 'Active threads', value: '12' },
      { label: 'Pending approvals', value: '3' },
      { label: 'Messages today', value: '286' },
      { label: 'Failed tasks', value: '1' }
    ],
    tableTitle: 'Task list',
    cols: {
      thread: 'Thread',
      host: 'Host',
      model: 'Model',
      status: 'Status',
      updated: 'Updated',
      actions: 'Actions'
    },
    actions: {
      view: 'View',
      archive: 'Archive'
    }
  },
  mock: {
    threads: [
      'Email validation for login form',
      'Refactor list loading logic',
      'Debug terminal connection error',
      'Add unit tests',
      'Align API fields',
      'Archive older threads'
    ],
    messages: [
      { role: 'you', text: 'Please complete email validation for the login form.' },
      { role: 'codex', text: 'I will inspect src/login/Form.vue first, then add the email format rule and error message.' },
      { role: 'system', text: 'One file change is waiting for your approval.' }
    ],
    sessions: [
      { thread: 'Email validation for login form', host: 'Local', model: 'codex-standard', status: 'active', updated: '2m ago' },
      { thread: 'Refactor list loading logic', host: 'ssh@dev-01', model: 'codex-standard', status: 'done', updated: '18m ago' },
      { thread: 'Debug terminal connection error', host: 'ssh@dev-01', model: 'codex-reasoning', status: 'error', updated: '32m ago' },
      { thread: 'Add unit tests', host: 'Local', model: 'codex-reasoning', status: 'done', updated: '1h ago' },
      { thread: 'Align API fields', host: 'ssh@dev-02', model: 'codex-standard', status: 'active', updated: '2h ago' },
      { thread: 'Archive older threads', host: 'Local', model: 'codex-standard', status: 'archived', updated: 'Yesterday' }
    ]
  }
}
