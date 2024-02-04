<script setup>
import IconMe from '@/components/icons/IconMe.vue'

const formSubmit = () => {

}
</script>

<template>
  <form class="auth-form" @click.prevent="formSubmit">
    <IconMe class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__title">Войти</div>
    <div class="auth-form__fields-list">
      <input type="text" class="form-field__input" placeholder="Адрес эл. почты">
      <input type="password" class="form-field__input" placeholder="Пароль">
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--primary">Войти</button>
      <button class="btn btn--transparent" @click.prevent="$emit('recovery')">Я забыл пароль</button>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>
