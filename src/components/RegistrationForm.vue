<script setup>

import IconRegistration from '@/components/icons/IconRegistration.vue'

const formSubmit = () => {

}
</script>

<template>
  <form class="login-form" @click.prevent="formSubmit">
    <IconRegistration class="login-form__icon" width="48" height="48" />
    <div class="login-form__title">Создать аккаунт</div>
    <div class="login-form__fields-list">
      <label class="login-form__field">
        <input type="text" class="login-form__input" placeholder="Адрес эл. почты">
      </label>
      <label class="login-form__field">
        <input type="text" class="login-form__input" placeholder="Придумайте пароль">
      </label>
    </div>
    <div class="login-form__buttons">
      <button class="btn btn--accent">Создать аккаунт</button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.login-form {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;

  &__icon {
    margin-left: auto;
    margin-right: auto;
  }

  &__title {
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 28px;
    font-weight: 700;
    line-height: 132%;
  }

  &__fields-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__field {
    width: 100%;
  }

  &__input {
    width: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    height: 52px;
    padding: 10px 16px;
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    color: #fff;

    &::placeholder {
      color: rgb(157, 162, 173);
    }
  }
}
</style>
