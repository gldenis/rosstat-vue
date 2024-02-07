<script setup>

import IconPlus from '@/components/icons/IconPlus.vue'
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="page-head">
        <h1 class="title">Данные о других</h1>
        <button class="btn btn--secondary">Добавить контакт (1 проверка)</button>
      </div>
      <div class="referral">
        <div class="referral__left">
          <div class="referral__title">7 дней бесплатного мониторинга</div>
          <div class="referral__subtitle">При регистрации каждого пользователя по реферальной ссылке, вы получите 7 дней бесплатного использования</div>
        </div>
        <div class="referral__right">
          <div class="referral-add">
            <input class="form-field__input" type="text" placeholder="Адрес эл. почты" >
            <button class="btn btn--icon btn--gray">
              <IconPlus />
            </button>
          </div>
          <button class="btn btn--accent">Отправить приглашения</button>
        </div>
      </div>
      <div class="user__list">
        <div v-for="user of 5" class="user__item">
          <div class="user__column">
            <div class="user__data">
              <div class="user__pic">
                <img  src="@/assets/img/user.jpg" alt="" width="40" height="40" loading="lazy">
              </div>
              <div class="user__contact">jessica.hanson@example.com</div>
            </div>

          </div>
          <div class="user__column">
            <div class="user-name__list">
              <div class="user-name__item">Константинов</div>
              <div class="user-name__item">Константинов</div>
            </div>
            <div class="user__row">
              <div class="image-list">
                <div v-for="item of 6" class="image-list__item">
                  <img src="@/assets/img/user.jpg" alt="" >
                </div>
              </div>
              <button class="btn btn--small btn--primary">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
