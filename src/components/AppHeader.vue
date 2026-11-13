<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale } from '../i18n'

const { t, locale } = useI18n()

const navItems = [
  { to: '/', key: 'landing' },
  { to: '/chat', key: 'chat' },
  { to: '/admin', key: 'admin' }
]

function toggleLocale() {
  setLocale(locale.value === 'zh-CN' ? 'en-US' : 'zh-CN')
}
</script>

<template>
  <header class="app-header">
    <div class="brand">
      <span class="brand-mark" aria-hidden="true"></span>
      <span class="brand-name">Codex Web</span>
    </div>

    <nav class="nav">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="nav-link"
        active-class="active"
        :exact-active-class="item.to === '/' ? 'active' : ''"
      >
        {{ t(`nav.${item.key}`) }}
      </RouterLink>
    </nav>

    <button class="btn btn-ghost lang-btn" :title="t('lang.label')" @click="toggleLocale">
      {{ locale === 'zh-CN' ? t('lang.en') : t('lang.zh') }}
    </button>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 56px;
  padding: 0 24px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.brand-mark {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: var(--primary);
}

.nav {
  display: flex;
  gap: 4px;
  flex: 1;
}

.nav-link {
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  color: var(--muted);
  font-size: 14px;
}

.nav-link:hover {
  background: var(--surface-2);
}

.nav-link.active {
  color: var(--primary);
  background: var(--primary-soft);
}

.lang-btn {
  font-size: 13px;
}
</style>
