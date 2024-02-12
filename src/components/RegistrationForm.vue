<script setup>

import IconRegistration from '@/components/icons/IconRegistration.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import { useForm } from 'vee-validate'
import { object, string } from "yup"

const schema = object({
  email: string().required('email не может быть пустым').email("введите валидный email"),
  password: string().required('пароль не может быть пустым'),
})

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false,
})

const formSubmit = handleSubmit(values => {

})
</script>

<template>
  <form class="auth-form" @submit.prevent="formSubmit">
    <IconRegistration class="auth-form__icon" width="48" height="48" />
    <div class="auth-form__title">Создать аккаунт</div>
    <div class="auth-form__fields-list">
      <BaseInput type="text"
                 v-model="email"
                 v-bind="emailAttrs"
                 placeholder="Адрес эл. почты"
                 :error="errors.email"/>
      <BaseInput type="password"
                 v-model="password"
                 v-bind="passwordAttrs"
                 placeholder="Придумайте пароль"
                 :error="errors.password"/>
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--accent">Создать аккаунт</button>
    </div>
  </form>
</template>

<style scoped lang="scss">

</style>
