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
                <img  src="@/assets/img/user.jpg" alt="" width="40" height="40">
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
.user-name {
  &__list {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__item {
    background: rgba(22, 22, 25, 0.2);
    border-radius: 4px;
    padding: 10px 16px;
    width: 135px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.image-list {
  display: flex;
  align-items: center;
  gap: 4px;

  &__item {
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    img {
      width: 40px;
      height: 40px;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(2px);
    }
  }
}
.user {
  &__list {
    margin-top: 60px;
    border-radius: 4px;
    padding: 20px;
    background: rgba(255,255,255, 0.2);
    counter-reset: user;
  }

  &__item {
    border-radius: 12px;
    padding: 44px 20px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255,255,255, 0.2);

    &:first-child {
      padding-top: 20px;
      border-top: none;
    }
    &:last-child {
      padding-bottom: 20px;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__row {
    display: flex;
    gap: 8px;
  }

  &__data {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__pic {
    border-radius: 4px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
    }

    &::before {
      z-index: 1;
      counter-increment: user;
      content: counter(user);
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 146%;
      text-align: right;
      color: #fff;
    }
  }

  &__contact {
    font-weight: 500;
    font-size: 18px;
    line-height: 146%;
    color: #ffffff;
  }
}

.referral {
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  padding: 32px;
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;


  &:before {
    content: '';
    filter: blur(4px);
    background-color: rgb(217, 217, 217);
    background-image: url("@/assets/img/referral.png") ;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &__left {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
    max-width: 468px;
    padding-bottom: 16px;
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 132%;
    color: #fff;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: rgba(255,255,255, 0.8);
  }

  &__right {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
  }

  &-add {
    display: flex;
    align-items: center;
    gap: 16px;
  }

}
</style>
