<script setup>

import IconAsk from '@/components/icons/IconAsk.vue'
import IconMonitoringProtect from '@/components/icons/IconMonitoringProtect.vue'
import AppSwitch from '@/components/ui/AppSwitch.vue'
import { ref } from 'vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import SectionProtect from '@/components/SectionProtect.vue'
import IconFile from '@/components/icons/IconFile.vue'

const currentTab = ref('referral')

</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="my-top">
        <div class="user">
          <div class="user__info">
            <div class="user__name">Николай Резников</div>
            <div class="user__email">okaymaxim@gmail.com</div>
            <div class="user__mode">
              <button class="user__mode-btn"
                      :class="{ 'user__mode-btn--current': currentTab === 'settings' }"
                      @click="currentTab = 'settings'"
              >
                Настройки
              </button>
              <button class="user__mode-btn"
                      :class="{ 'user__mode-btn--current': currentTab === 'referral' }"
                      @click="currentTab = 'referral'"
              >
                Рефералка
              </button>
            </div>
          </div>
          <img class="user__pic" src="@/assets/img/user.jpg" alt="">
        </div>
        <div class="monitoring-banner">
          <IconMonitoringProtect/>
          <div class="monitoring-banner__content">
            <div class="monitoring-banner__title">Мониторинг</div>
            <div class="monitoring-banner__subtitle">Контролируйте доступ ваших данных</div>
            <div class="monitoring-banner__bottom">
              <AppSwitch :checked="monitoringOn"
                         @toggle="monitoringToggle"
                         :label="monitoringOn ? 'Включен' : 'Выключено'"/>
              <!--              <div class="monitoring__switch">Выключено</div>-->
              <div class="monitoring-banner__info">
                <IconAsk/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="currentTab === 'referral'" class="page-referral">
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
        <div class="requests-fallback">
          <div class="requests-fallback__inner">
            <IconFile />
            <div class="requests-fallback__text">
              <div class="requests-fallback__title">Таблица с приглашениями пуста</div>
              <div class="requests-fallback__description">При регистрации каждого пользователя по реферальной ссылке,<br> вы получите 7 дней бесплатного использования</div>
            </div>
          </div>
        </div>
        <div class="requests__table">
          <div class="requests__head">
            <div class="requests__head-time">Дата и время</div>
            <div class="requests__head-type">Приглашенные пользователи по реферальной ссылке</div>

          </div>
          <div class="requests__item" v-for="row of 4">
            <div class="requests__time">23.09.23 | 14:43</div>
            <div class="requests__description">
              <img src="@/assets/img/user.jpg" alt="" class="icon" width="40" height="40">
              georgia.young@example.com
            </div>
            <div class="requests__actions">
              <div v-if="row === 1 || row === 2" class="registered">Зарегистрирован</div>
              <button v-else class="btn btn--accent btn--small">Отправить снова</button>
            </div>
          </div>
        </div>
        <SectionProtect class="page-profile__section-protection"/>
      </div>
      <div v-else class="row">
        <div class="text">Если у вас есть вопросы, <br>
          или вы обнаружили ошибку, свяжитесь с нами</div>

        <div class="row__right">
          <button class="btn btn--gray">Сменить Эл. почту</button>
          <button class="btn btn--gray">Сменить пароль</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.registered {
  border-radius: 12px;
  padding: 4px 16px;
  width: 162px;
  height: 28px;
  font-weight: 400;
  font-size: 15px;
  line-height: 132%;
  color: #fff;
  background: rgba(43, 43, 43, 0.1);
}

.icon {
  border-radius: 50%;
}

.page-profile__section-protection {
  margin-top: 60px;
}
.referral {
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
.page-referral {
  margin-top: 20px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid rgba(255,255,255, 0.2);
  border-bottom: 1px solid rgba(255,255,255, 0.2);
  margin-top: 60px;

  .text {
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #fff;
  }

  &__right {
    display: flex;
    flex-shrink: 0;
    gap: 20px;
  }
}

.requests {
  margin-top: 60px;

  &__table {
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    padding: 20px;
    margin-top: 40px;
  }

  &__head-time {
    width: 160px;
    height: 32px;
    border: 2px solid rgba(255, 255, 255, 0.92);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 600;
    line-height: 152%;
  }

  &__head-type {
    height: 32px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.92);
    font-size: 12px;
    font-weight: 600;
    line-height: 152%;
    flex-grow: 1;
  }

  &__item, &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    gap: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  &__time {
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.92);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
    color: rgba(255, 255, 255, 0.92);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  &__description {
    flex-grow: 1;
  }
}

.requests-fallback {
  margin-top: 60px;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);

  &__inner {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border: 1px dashed rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
  }

  &__description {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }
}

.banner {
  &__title {
    span {
      color: red;
    }
  }

  &__description {
    font-size: 14px;
  }

  &__actions {
    display: flex;
    gap: 24px;
  }
}

.banner-buy {
  display: flex;
  align-items: center;
  gap: 24px;

  &__input {
    color: rgba(255, 255, 255, 0.92);
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    text-align: center;
    border-bottom: 4px solid rgb(217, 155, 83);
    border-right: 2px solid rgb(217, 155, 83);
    border-radius: 4px;
    background: rgba(18, 19, 20, 0.68);
    padding: 10px 8px;
    width: 100px;
    height: 52px;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }

  &__label {
    color: rgb(157, 162, 173);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__price {
    text-align: right;

    &-value {
      color: rgb(246, 248, 250);
      font-size: 24px;
      font-weight: 300;
      line-height: 132%;
    }

    &-old {
      color: rgb(157, 162, 173);
      font-size: 14px;
      font-weight: 500;
      line-height: 146%;
      text-decoration-line: line-through;
      margin-right: 12px;
    }
  }
}

.monitoring {
  margin-top: 20px;
}

.monitoring-banner {
  backdrop-filter: blur(16px);
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("@/assets/img/monitoring.png");
  background-size: cover;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 20px;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    color: rgba(255, 255, 255, 0.92);
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
  }

  &__subtitle {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    margin-top: 4px;
  }

  &__bottom {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(222, 224, 227, 0.92);
    color: #000;
  }

  &__switch {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: url("@/assets/img/unavailable.png");
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;

  }
}

.my-top {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.user {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 540px;
  width: 100%;
  flex-shrink: 0;


  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    color: #303034;
    font-size: 28px;
    font-weight: 700;
    line-height: 132%;
  }

  &__email {
    color: #303034;
    line-height: 132%;
    margin-top: 4px;
  }

  &__mode {
    border-radius: 22px;
    background: rgba(222, 224, 227, 0.92);
    margin-top: auto;
  }

  &__mode-btn {
    color: #606268;
    line-height: 132%;
    padding: 10px 16px;

    &--current {
      background: #303034;
      border-radius: 20px;
      color: rgba(255, 255, 255, 0.92);
    }
  }

  &__pic {
    width: 116px;
    height: 116px;
    border-radius: 50%;
  }
}

.name-relations {
  gap: 24px;
  display: flex;
  flex-direction: column;

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__item {
    background: rgba(22, 22, 25, 0.2);
    border-radius: 4px;
    padding: 10px 16px;
    font-weight: 400;
    font-size: 15px;
    line-height: 132%;
    color: #fff;
  }
}

.media-category {
  &__list {
    display: flex;
    gap: 8px;
    margin-top: 24px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 12px;
    padding: 4px 10px 4px 8px;
    height: 40px;
    background: #fff;
    color: rgb(22, 22, 25);
    font-size: 12px;
    font-weight: 700;
    line-height: 132%;
  }
}

.name-relations {
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  margin-top: 8px;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: $color-white;
    font-size: 16px;
    font-weight: 700;
    line-height: 132%;
  }

  &__btn {
    color: rgba(255, 255, 255, 0.92);
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    padding: 16px;
    height: 40px;
    display: flex;
    align-items: center;

    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}

.row {
  display: flex;
  align-items: center;
  gap: 32px;
  align-self: flex-start;
}

.user-section {
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 1, 40, 0.40) 100%);
  padding: 20px;
  position: relative;

  &__head {
    padding-bottom: 24px;
  }

  &__bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    background: linear-gradient(180deg, rgba(47, 54, 86, 0.00) 0%, #2F3656 100%);
    border-radius: 0 0 8px 8px;
  }

  &__title {
    color: $color-white;
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
  }

  &__meta {
    color: rgba(255, 255, 255, 0.92);
    font-size: 16px;
    font-weight: 700;
    line-height: 132%;
    margin-top: 12px;

    span {
      opacity: 0.6;
    }
  }
}

.result {
  margin-top: 60px;
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: 540px 360px;
  grid-template-rows: auto 1fr;

  &__info {
    grid-column: 1/2;
    grid-row: 1/3;
    height: max-content;
  }

  &__media {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-bottom: 0;
  }

  &__place {
    grid-column: 2/3;
    grid-row: 2/3;
    height: max-content;
  }
}

.result-media {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 380px;
  overflow: hidden;

  &__item {
    border-radius: 8px;
    overflow: hidden;

    &--blur {
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(4px);
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }

  img {
    object-fit: cover;
  }

  &__btn {
    width: 100%;
  }
}

@media screen and (max-width: $laptop) {
  .result {
    display: flex;
    flex-wrap: wrap;

    &__info {
      width: 100%;
    }

    &__media {
      width: calc((100% - 20px) / 2);
    }

    &__place {
      width: calc((100% - 20px) / 2);
    }
  }

  .result-media {
    &__item {
      width: calc((100% - 8px) / 2);
      aspect-ratio: 156/100;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .user {
    max-width: 100%;
  }
  .my-top {
    flex-direction: column;
  }

  .banner {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: $tablet) {
  .title- {
    font-size: 28px;
  }

  .row {
    flex-wrap: wrap;
    gap: 16px;
  }
  .result {
    &__media {
      width: 100%;
    }

    &__place {
      width: 100%;
    }
  }

}

@media screen and (max-width: $phablet) {
  .requests {
    &__item {
      flex-wrap: wrap;
      gap: 16px;
    }

    &__time {
      order: 1;
    }

    &__description {
      order: 3;
      width: 100%;
    }

    &__actions {
      order: 2;
    }
  }
}

@media screen and (max-width: $mobile) {
  .user {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;

    &__mode {
      margin-top: 20px;
    }
  }

  .banner {
    align-items: flex-start;

    &__left {
      gap: 16px;

      svg {
        flex-shrink: 0;
      }
    }

    &__right {
      flex-direction: column;
      margin-left: 64px;
      align-items: flex-start;
    }

    &__text {
      align-items: flex-start;
    }

    &-buy {
      &__price {
        text-align: left;
      }
    }
  }
}

@media screen and (max-width: $mobile-xs) {
  .banner {
    align-items: center;

    &__left {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &__text {
      align-items: center;
      text-align: center;
    }

    &__actions {
      flex-direction: column;
      align-items: center;
    }

    &__right {
      align-items: center;
      margin-left: auto;
      margin-right: auto;
    }

    &-buy {
      align-items: center;

      &__text {
        text-align: center;
      }

      &__price {
        text-align: center;
      }
    }
  }

  .requests {
    &__item {
      gap: 8px;
      width: 100%;
    }

    &__time {
      width: calc(41% - 4px);
      font-size: 12px;
      padding: 10px 5px;
    }

    &__description {
      order: 3;
      width: 100%;
    }

    &__actions {
      width: calc(59% - 4px);
      .btn {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: $tablet) {
  .referral {
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__right {
      align-items: center;
    }
  }
}
</style>
