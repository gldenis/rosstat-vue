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
.payment-type {
  display: flex;
  gap: 32px;
  margin-top: 80px;

  &__icon {
    padding: 20px;
    border-radius: 16px;
    backdrop-filter: blur(8px);
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &--mir {
      background: rgba(34, 120, 198, 0.4);
    }
    &--bitcoin {
      background: rgba(250, 178, 39, 0.4);
    }
    &--usdt {
      background: rgba(226, 124, 0, 0.4);
    }
    &--qiwi {
      background: rgba(226, 124, 0, 0.4);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__name {
    font-weight: 700;
    font-size: 20px;
    line-height: 132%;
    color: #fff;
  }

  &__change-btn {
    font-weight: 600;
    font-size: 13px;
    line-height: 132%;
    color: #888beb;
  }

  &__card {
    display: flex;
    align-items: flex-end;
    gap: 32px;
  }

  &__wallet {
    display: flex;
    gap: 1px;
  }

  &__wallet-number {
    width: 18px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgb(217, 217, 217);
    background: linear-gradient(180.00deg, rgba(217, 217, 217, 0),rgba(217, 217, 217, 0.04) 100%);

    &:nth-child(4n + 1) {
      margin-left: 8px;
    }
    &:first-child {
      margin-left: 0;
    }
  }

  &__copy {
  }
}
.payment {
  max-width: 680px;
  margin: auto;
}

.payment-check {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  gap: 40px;
  margin-top: 80px;

  &__text {
    font-weight: 700;
    font-size: 20px;
    line-height: 132%;
    color: #fff;
    max-width: 325px;
  }

  &__btn {
    margin-left: auto;
    width: 200px;
  }
}

.subtitle--centered {
  text-align: center;
  margin-top: 16px;
}

@media screen and (max-width: $tablet){
  .payment-type {
    justify-content: center;

    &__card {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
@media screen and (max-width: $phablet){
  .payment-check {
    flex-wrap: wrap;
    gap: 20px;

    svg {
      width: 34px;
    }

    &__text {
      width: calc(100% - 20px - 34px);
      font-size: 16px;
    }

    &__btn {
      margin-left: 54px;
      width: 200px;
    }
  }
}

@media screen and (max-width: $mobile) {
  .payment-type {
    justify-content: center;

    &__icon {
      width: 100px;
      height: 60px;
    }

    &__text {
      flex-direction: column;
      align-items: flex-start;
    }

    &__wallet-number {
      width: 12px;
    }
  }
}

@media screen and (max-width: $mobile-xs) {
  .payment-type {
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__text {
      align-items: center;
    }

    &__card {
      align-items: center;
    }
  }

}
</style>
