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
.support-types {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 6px;
  margin: 40px auto 80px;

  &__item {
    span {
      height: 100%;
      min-height: 40px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid transparent;
      font-weight: 600;
      font-size: 12px;
      line-height: 132%;
      text-align: center;
    }

    input:checked + span {
      border: 1px solid rgba(255, 255, 255, 0.92);
    }
  }
}
</style>
