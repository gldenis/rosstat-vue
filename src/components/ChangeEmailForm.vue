<script setup>
import IconMail from '@/components/icons/IconMail.vue'
import { ref } from 'vue'
import AppInputCode from '@/components/AppInputCode.vue'

const emailChanged = ref(false)
const formSubmit = () => {
  emailChanged.value = true
}
const letterSent = ref(false)
</script>

<template>
  <div v-if="emailChanged" class="auth-form">
    <IconMail class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__title">Email успешно сохранен</div>
    <div class="auth-form__buttons">
      <RouterLink to="/" class="btn btn--primary">Перейти на главную</RouterLink>
    </div>
  </div>

  <form v-else-if="letterSent" class="auth-form" @submit.prevent="formSubmit">
    <IconMail class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__fields-list">
      <input type="text" class="form-field__input" placeholder="Новый email">
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--primary">Отправить</button>
    </div>
  </form>

  <form v-else class="auth-form" @submit.prevent="formSubmit">
    <IconMail class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__title">Код отправлен на текущую Эл. почту</div>
    <div class="auth-form__fields-list">
      <AppInputCode :length="4"/>
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--primary">Отправить</button>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>
