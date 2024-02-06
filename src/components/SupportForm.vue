<script setup>

import IconScreenshot from '@/components/icons/IconScreenshot.vue'
import IconSend from '@/components/icons/IconSend.vue'
import { ref } from 'vue'
const formSubmit = () => {
  console.log(inputFile.value.files)
}

const inputFile = ref()
const file = ref()
const changeFile = (event) => {
  file.value = event.target.files[0]
}
</script>

<template>
  <form class="auth-form" @submit.prevent="formSubmit">
    <div class="auth-form__fields-list">
      <textarea class="form-field__input form-field__textarea" placeholder="Ваш вопрос.." />
      <input type="file" hidden="hidden" ref="inputFile" @change="changeFile"/>
      <button class="btn" @click="inputFile.click()">
        <IconScreenshot />
        Приложить скриншот
      </button>
      <div v-if="file" class="files">{{ file.name }}</div>
    </div>
    <div class="auth-form__buttons">
      <button class="btn btn--accent">
        <IconSend />
        Отправить в поддержку
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.files {
  text-align: center;
}
.form-field__textarea {
  height: 108px;
  padding: 10px 16px;
  resize: none;
}
</style>
