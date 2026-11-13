<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, tm } = useI18n()
const router = useRouter()

const stats = tm('admin.stats') as { label: string; value: string }[]

interface Session {
  thread: string
  host: string
  model: string
  status: 'active' | 'done' | 'error' | 'archived'
  updated: string
}

const sessions = ref<Session[]>(
  (tm('mock.sessions') as Session[]).map((s) => ({ ...s }))
)

const statusClass: Record<Session['status'], string> = {
  active: 'st-active',
  done: 'st-done',
  error: 'st-error',
  archived: 'st-archived'
}

function archive(index: number) {
  sessions.value[index].status = 'archived'
}

function view(index: number) {
  void router.push('/chat')
}
</script>

<template>
  <div class="admin">
    <header class="admin-head">
      <h1 class="admin-title">{{ t('admin.welcome') }}</h1>
      <p class="admin-subtitle">{{ t('admin.subtitle') }}</p>
    </header>

    <section class="stats">
      <div v-for="(stat, i) in stats" :key="i" class="card stat-card">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </section>

    <section class="card table-card">
      <h2 class="table-title">{{ t('admin.tableTitle') }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th>{{ t('admin.cols.thread') }}</th>
            <th>{{ t('admin.cols.host') }}</th>
            <th>{{ t('admin.cols.model') }}</th>
            <th>{{ t('admin.cols.status') }}</th>
            <th>{{ t('admin.cols.updated') }}</th>
            <th>{{ t('admin.cols.actions') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in sessions" :key="i">
            <td>{{ row.thread }}</td>
            <td class="mono">{{ row.host }}</td>
            <td class="mono">{{ row.model }}</td>
            <td>
              <span class="tag" :class="statusClass[row.status]">
                <span class="status-dot"></span>
                {{ t(`common.${row.status}`) }}
              </span>
            </td>
            <td>{{ row.updated }}</td>
            <td class="actions">
              <button class="btn btn-ghost" @click="view(i)">{{ t('admin.actions.view') }}</button>
              <button
                v-if="row.status !== 'archived'"
                class="btn btn-ghost"
                @click="archive(i)"
              >
                {{ t('admin.actions.archive') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<style scoped>
.admin {
  max-width: 1080px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.admin-title {
  margin: 0;
  font-size: 22px;
}

.admin-subtitle {
  margin: 6px 0 0;
  color: var(--muted);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.stat-card {
  padding: 18px;
}

.stat-value {
  font-size: 26px;
  font-weight: 600;
}

.stat-label {
  margin-top: 6px;
  color: var(--muted);
  font-size: 13px;
}

.table-card {
  padding: 18px;
}

.table-title {
  margin: 0 0 14px;
  font-size: 16px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.table th,
.table td {
  text-align: left;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
}

.table th {
  color: var(--muted);
  font-weight: 500;
  font-size: 13px;
}

.actions {
  display: flex;
  gap: 4px;
}

.st-active {
  color: var(--warn);
  background: #fbf3e3;
}

.st-done {
  color: var(--ok);
  background: var(--primary-soft);
}

.st-error {
  color: var(--danger);
  background: #fbeae8;
}

.st-archived {
  color: var(--muted);
}

.st-active .status-dot {
  background: var(--warn);
}

.st-done .status-dot {
  background: var(--ok);
}

.st-error .status-dot {
  background: var(--danger);
}

.st-archived .status-dot {
  background: var(--muted);
}

@media (max-width: 820px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
