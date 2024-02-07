<script setup>

import SupportForm from '@/components/SupportForm.vue'
</script>

<template>
<main class="page-content">
  <div class="container">
    <div class="page-head--column">
      <h1 class="title">Написать в поддержку</h1>
    </div>

    <div class="support">
      <div class="support-types">
        <label class="support-types__item">
          <input type="radio" hidden="hidden" name="support-type">
          <span>У меня вопрос</span>
        </label>
        <label class="support-types__item">
          <input type="radio" hidden="hidden" name="support-type">
          <span>Я нашел ошибку</span>
        </label>
        <label class="support-types__item">
          <input type="radio" hidden="hidden" name="support-type">
          <span>Я хочу предложить</span>
        </label>
      </div>
    </div>
    <SupportForm />
  </div>
</main>
</template>

<style scoped lang="scss">

</style>
