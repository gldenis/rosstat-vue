<script setup>

import IconRegistration from '@/components/icons/IconRegistration.vue'
import IconMe from '@/components/icons/IconMe.vue'
</script>

<template>
  <div class="auth-switch">
    <RouterLink to="/registration" class="auth-switch__item">
      <IconRegistration />
      Регистрация
    </RouterLink>
    <RouterLink to="/login" class="auth-switch__item">
      <IconMe width="20" height="20" />
      Вход
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.auth-switch {
  border-radius: 24px;
  background: rgba(22, 22, 25, 0.6);
  padding: 4px;
  display: flex;
  gap: 4px;

  &__item {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);

    &.router-link-exact-active {
      background: #fff;
      color: #000;
    }
  }
}
</style>
