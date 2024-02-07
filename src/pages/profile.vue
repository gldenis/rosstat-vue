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
              <div v-if="row === 1 || row === 2" class="registered__bonus">3</div>
              <div v-if="row === 1 || row === 2" class="registered">
                Зарегистрирован
              </div>
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

</style>
