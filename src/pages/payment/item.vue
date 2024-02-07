<script setup>

import IconPaymentCheck from '@/components/icons/IconPaymentCheck.vue'
import IconCopy from '@/components/icons/IconCopy.vue'
import { ref } from 'vue'
const checkDownloaded = ref(false)
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="payment">
        <template v-if="checkDownloaded">
          <div class="page-head--column">
            <h1 class="title">Процесс оплаты завершен</h1>
            <p class="subtitle">После проверки приложенного вами чека, <br>
              мы вышлем ссылку на скачивание урока на почту: <br>
              okeymaksim@gmail.com</p>
            <RouterLink to="/" class="btn btn--primary">Вернуться на главную</RouterLink>
          </div>
        </template>
        <template v-else>
          <div class="page-head--column">
            <h1 class="title">Проверить друга</h1>
            <p class="subtitle">Из-за недавнего инцидента с Твиттером, есть риск, что ваши данные могут быть использованы в корыстных целях. Наш антивирус выпустил обновление, которое защищает вас от подобного</p>
          </div>
          <div v-if="$route.params.slug === 'mir'" class="payment-type">
            <div class="payment-type__icon payment-type__icon--mir">
              <img src="@/assets/img/payments/mir.svg" alt="">
            </div>
            <div class="payment-type__content">
              <div class="payment-type__text">
                <div class="payment-type__name">На карту МИР</div>
                <RouterLink to="/payment" class="payment-type__change-btn">Выбрать другой способ</RouterLink>
              </div>
              <div class="payment-type__card">
                <div class="payment-type__wallet">
                  <div class="payment-type__wallet-number" v-for="number of 16">{{ Math.floor(Math.random()*9) }}</div>
                </div>
                <button class="btn btn--small btn--outlined payment-type__copy"><IconCopy /> Скопировать</button>
              </div>
            </div>
          </div>
          <div v-if="$route.params.slug === 'bitcoin'" class="payment-type">
            <div class="payment-type__icon payment-type__icon--mir">
              <img src="@/assets/img/payments/bitcoin.png" alt="">
            </div>
            <div class="payment-type__content">
              <div class="payment-type__text">
                <div class="payment-type__name">Bitcoin</div>
                <RouterLink to="/payment" class="payment-type__change-btn">Выбрать другой способ</RouterLink>
              </div>
              <div class="payment-type__card">
                <div class="payment-type__wallet">
                  <div class="payment-type__wallet-number" v-for="number of 16">{{ Math.floor(Math.random()*9) }}</div>
                </div>
                <button class="btn btn--small btn--outlined payment-type__copy"><IconCopy /> Скопировать</button>
              </div>
            </div>
          </div>
          <div v-if="$route.params.slug === 'usdt'" class="payment-type">
            <div class="payment-type__icon payment-type__icon--mir">
              <img src="@/assets/img/payments/usdt.svg" alt="">
            </div>
            <div class="payment-type__content">
              <div class="payment-type__text">
                <div class="payment-type__name">Tron</div>
                <RouterLink to="/payment" class="payment-type__change-btn">Выбрать другой способ</RouterLink>
              </div>
              <div class="payment-type__card">
                <div class="payment-type__wallet">
                  <div class="payment-type__wallet-number" v-for="number of 16">{{ Math.floor(Math.random()*9) }}</div>
                </div>
                <button class="btn btn--small btn--outlined payment-type__copy"><IconCopy /> Скопировать</button>
              </div>
            </div>
          </div>
          <div v-if="$route.params.slug === 'qiwi'" class="payment-type">
            <div class="payment-type__icon payment-type__icon--mir">
              <img src="@/assets/img/payments/qiwi.svg" alt="">
            </div>
            <div class="payment-type__content">
              <div class="payment-type__text">
                <div class="payment-type__name">QIWI</div>
                <RouterLink to="/payment" class="payment-type__change-btn">Выбрать другой способ</RouterLink>
              </div>
              <div class="payment-type__card">
                <div class="payment-type__wallet">
                  <div class="payment-type__wallet-number" v-for="number of 16">{{ Math.floor(Math.random()*9) }}</div>
                </div>
                <button class="btn btn--small btn--outlined payment-type__copy"><IconCopy /> Скопировать</button>
              </div>
            </div>
          </div>

          <div class="payment-check">
            <IconPaymentCheck />
            <div class="payment-check__text">Загрузите чек для ускорения
              процесса перевода</div>
            <button class="btn btn--accent payment-check__btn" @click="checkDownloaded = true">Загрузить чек</button>
          </div>
          <div class="subtitle subtitle--centered">После оплаты ссылка на урок прийдет на почту <br>
            okeymaksim@gmail.com</div>
        </template>
      </div>
    </div>
  </main>

</template>

<style scoped lang="scss">

</style>
