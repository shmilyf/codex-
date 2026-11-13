<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, locale } = useI18n()

const threads = tm('mock.threads') as string[]
const initialMessages = tm('mock.messages') as { role: string; text: string }[]

const query = ref('')
const activeThread = ref(0)
const draft = ref('')
const messages = ref<{ role: string; text: string }[]>([...initialMessages])
const model = ref('codex-standard')
const permission = ref('default')
const contextPercent = 62

const filteredThreads = computed(() =>
  threads.filter((name) => name.toLowerCase().includes(query.value.toLowerCase()))
)

const modelOptions = ['codex-standard', 'codex-reasoning']
const permissionOptions = tm('chat.permissions') as { value: string; label: string }[]

function selectThread(index: number) {
  activeThread.value = index
}

function send() {
  const text = draft.value.trim()
  if (!text) return
  messages.value.push({ role: 'you', text })
  draft.value = ''
}

function roleLabel(role: string) {
  return t(`chat.${role}`)
}
</script>

<template>
  <div class="chat">
    <aside class="side card">
      <div class="side-head">
        <button class="btn btn-primary" @click="activeThread = -1; draft = ''">
          {{ t('common.newChat') }}
        </button>
      </div>
      <input v-model="query" class="search" :placeholder="t('common.search')" />
      <ul class="thread-list">
        <li
          v-for="(name, i) in filteredThreads"
          :key="i"
          class="thread-item"
          :class="{ active: activeThread === i }"
          @click="selectThread(i)"
        >
          {{ name }}
        </li>
      </ul>
    </aside>

    <section class="conversation">
      <div class="message-list">
        <div v-for="(msg, i) in messages" :key="i" class="message" :class="msg.role">
          <div class="message-meta">{{ roleLabel(msg.role) }}</div>
          <div class="message-bubble">{{ msg.text }}</div>
        </div>
      </div>

      <div class="composer">
        <textarea
          v-model="draft"
          class="composer-input"
          :placeholder="t('chat.inputPlaceholder')"
          rows="3"
          @keydown.enter.exact.prevent="send"
        ></textarea>
        <div class="composer-bar">
          <span class="tag mono">{{ model }}</span>
          <button class="btn btn-primary" @click="send">{{ t('common.send') }}</button>
        </div>
      </div>
    </section>

    <aside class="detail card">
      <h3 class="detail-title">{{ t('chat.detailTitle') }}</h3>

      <label class="field">
        <span class="field-label">{{ t('chat.model') }}</span>
        <select v-model="model" class="field-input">
          <option v-for="opt in modelOptions" :key="opt" :value="opt">{{ opt }}</option>
        </select>
      </label>

      <label class="field">
        <span class="field-label">{{ t('chat.permission') }}</span>
        <select v-model="permission" class="field-input">
          <option v-for="opt in permissionOptions" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
      </label>

      <div class="field">
        <span class="field-label">{{ t('chat.context') }}</span>
        <div class="meter">
          <div class="meter-fill" :style="{ width: contextPercent + '%' }"></div>
        </div>
        <span class="field-hint">{{ t('chat.contextUsed') }} {{ contextPercent }}%</span>
      </div>

      <div class="block">
        <div class="block-title">{{ t('chat.changedFiles') }}</div>
        <ul class="file-list mono">
          <li>src/login/Form.vue</li>
          <li>src/login/validate.ts</li>
        </ul>
      </div>

      <div class="block">
        <div class="block-title">{{ t('chat.terminal') }}</div>
        <div class="terminal mono">$ npm run dev</div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.chat {
  display: grid;
  grid-template-columns: 260px 1fr 280px;
  gap: 16px;
  height: 100%;
  padding: 16px;
  max-width: 1400px;
  margin: 0 auto;
}

.side,
.detail {
  padding: 14px;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.side-head {
  margin-bottom: 10px;
}

.search {
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  margin-bottom: 10px;
}

.thread-list {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
}

.thread-item {
  padding: 9px 10px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  cursor: pointer;
}

.thread-item:hover {
  background: var(--surface-2);
}

.thread-item.active {
  background: var(--primary-soft);
  color: var(--primary);
}

.conversation {
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message-meta {
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 4px;
}

.message-bubble {
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  max-width: 70%;
}

.message.you .message-bubble {
  background: var(--primary-soft);
  margin-left: auto;
}

.message.system .message-bubble {
  background: transparent;
  border: 1px dashed var(--border);
  color: var(--muted);
}

.composer {
  border-top: 1px solid var(--border);
  padding: 12px 14px;
}

.composer-input {
  width: 100%;
  resize: none;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px;
  font-family: inherit;
}

.composer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.detail-title {
  margin: 0 0 16px;
  font-size: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.field-label {
  font-size: 13px;
  color: var(--muted);
}

.field-input {
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
}

.field-hint {
  font-size: 12px;
  color: var(--muted);
}

.meter {
  height: 8px;
  border-radius: 999px;
  background: var(--surface-2);
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 999px;
}

.block {
  margin-top: 18px;
}

.block-title {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 8px;
}

.file-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
}

.terminal {
  background: var(--text);
  color: #e6efec;
  padding: 10px;
  border-radius: var(--radius-sm);
  font-size: 13px;
}

@media (max-width: 1020px) {
  .chat {
    grid-template-columns: 220px 1fr;
  }
  .detail {
    display: none;
  }
}
</style>
