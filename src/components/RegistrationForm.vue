<script setup>

import IconRegistration from '@/components/icons/IconRegistration.vue'

const formSubmit = () => {

}
</script>

<template>
  <form class="auth-form" @click.prevent="formSubmit">
    <IconRegistration class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__title">Создать аккаунт</div>
    <div class="auth-form__fields-list">
      <label class="auth-form__field">
        <input type="text" class="auth-form__input" placeholder="Адрес эл. почты">
      </label>
      <label class="auth-form__field">
        <input type="text" class="auth-form__input" placeholder="Придумайте пароль">
      </label>
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--accent">Создать аккаунт</button>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>
