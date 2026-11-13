<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const features = tm('landing.features')
const codeLines = tm('landing.codeLines')
</script>

<template>
  <div class="landing">
    <section class="hero">
      <div class="hero-copy">
        <span class="badge tag">{{ t('landing.badge') }}</span>
        <h1 class="hero-title">{{ t('landing.title') }}</h1>
        <p class="hero-subtitle">{{ t('landing.subtitle') }}</p>
        <div class="hero-actions">
          <RouterLink to="/chat" class="btn btn-primary">{{ t('landing.ctaPrimary') }}</RouterLink>
          <RouterLink to="/admin" class="btn">{{ t('landing.ctaSecondary') }}</RouterLink>
        </div>
      </div>

      <div class="card code-card">
        <div class="code-card-title mono">{{ t('landing.codeCaption') }}</div>
        <pre class="code-body"><code v-for="(line, i) in codeLines" :key="i" class="code-line">{{ line }}</code></pre>
      </div>
    </section>

    <section class="features">
      <h2 class="section-title">{{ t('landing.featureTitle') }}</h2>
      <div class="feature-grid">
        <article v-for="(feature, i) in features" :key="i" class="card feature-card">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </article>
      </div>
    </section>

    <footer class="landing-footer">{{ t('landing.footer') }}</footer>
  </div>
</template>

<style scoped>
.landing {
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 24px 24px;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  align-items: center;
  padding: 24px 0;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
}

.hero-title {
  margin: 0;
  font-size: 34px;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.hero-subtitle {
  margin: 0;
  color: var(--muted);
  max-width: 460px;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

.code-card {
  padding: 18px;
}

.code-card-title {
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 12px;
}

.code-body {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.code-line {
  display: block;
  white-space: pre-wrap;
  color: var(--text);
}

.features {
  margin-top: 48px;
}

.section-title {
  font-size: 20px;
  margin: 0 0 18px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.feature-card {
  padding: 20px;
}

.feature-title {
  margin: 0 0 8px;
  font-size: 16px;
}

.feature-desc {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.landing-footer {
  margin-top: 48px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 13px;
}

@media (max-width: 820px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
