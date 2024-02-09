<script setup>
import IconMe from '@/components/icons/IconMe.vue'

import { useForm } from 'vee-validate'
import { object, string } from "yup"
import { reactive } from "vue"

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email"),
  password: string().required('пароль не может быть пустым'),
})

const { values, errors, defineField } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false,
})

const formSubmit = async () => {
  if (Object.keys(errors).length) alert("")
}
</script>

<template>
  <form class="auth-form" @submit.prevent="formSubmit">
    <IconMe class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__title">Войти</div>
    {{ errors.length }}
    <div class="auth-form__fields-list">
      <div class="form-field">
        <input type="text" class="form-field__input" placeholder="Адрес эл. почты" v-model="email" v-bind="emailAttrs">
        <div class="form-field__error">{{ errors.email }}</div>
      </div>
      <div class="form-field">
        <input type="password" class="form-field__input" placeholder="Пароль" v-model="password" v-bind="passwordAttrs">
        <div class="form-field__error">{{ errors.password }}</div>
      </div>
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--primary">Войти</button>
      <button class="btn btn--transparent" @click.prevent="$emit('recovery')">Я забыл пароль</button>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>
