<script setup>
import IconMe from '@/components/icons/IconMe.vue'
import IconMail from '@/components/icons/IconMail.vue'
import { ref } from 'vue'

const passwordChanged = ref(false)
const formSubmit = () => {
  passwordChanged.value = true
}
</script>

<template>
  <div v-if="passwordChanged" class="auth-form">
    <IconMail class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__title">Пароль успешно сохранен</div>
    <div class="auth-form__buttons">
      <RouterLink to="/" class="btn btn--primary">Перейти на главную</RouterLink>
    </div>
  </div>
  <form v-else class="auth-form" @submit.prevent="formSubmit">
    <IconMe class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__fields-list">
      <input type="password" class="form-field__input" placeholder="Старый пароль">
      <input type="password" class="form-field__input" placeholder="Новый пароль">
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--primary">Отправить</button>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>
