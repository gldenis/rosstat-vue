<script setup>
import { ref } from 'vue'
import IconPaymentCheck from '@/components/icons/IconPaymentCheck.vue'
import IconCopy from '@/components/icons/IconCopy.vue'

const selectedPayment = ref()
const selectPayment = value => {
  selectedPayment.value = value
}
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="page-head--column">
        <h1 class="title">Выберите способ оплаты</h1>
        <p class="subtitle">Описание</p>
      </div>
      <div class="payment__list">
        <div class="payment__item payment__item--mir"
             :class="[ selectedPayment === 'mir' ? 'payment__item--selected' : selectedPayment ? 'payment__item--unselected' : '' ]"
             @click="selectPayment('mir')">
          <div class="payment__icon">
            <img src="@/assets/img/payments/mir.svg" alt="">
          </div>
          <div class="payment__name">МИР</div>
        </div>
        <div class="payment__item payment__item--bitcoin"
             :class="[ selectedPayment === 'bitcoin' ? 'payment__item--selected' : selectedPayment ? 'payment__item--unselected' : '' ]"
             @click="selectPayment('bitcoin')">
          <div class="payment__icon">
            <img src="@/assets/img/payments/bitcoin.png" alt="">
          </div>
          <div class="payment__name">Bitcoin</div>
        </div>
        <div class="payment__item payment__item--usdt"
             :class="[ selectedPayment === 'usdt' ? 'payment__item--selected' : selectedPayment ? 'payment__item--unselected' : '' ]"
             @click="selectPayment('usdt')">
          <div class="payment__icon">
            <img src="@/assets/img/payments/usdt.svg" alt="">
          </div>
          <div class="payment__name">USDT</div>
        </div>
        <div class="payment__item payment__item--qiwi"

             :class="[ selectedPayment === 'qiwi' ? 'payment__item--selected' : selectedPayment ? 'payment__item--unselected' : '' ]"
             @click="selectPayment('qiwi')">
          <div class="payment__icon">
            <img src="@/assets/img/payments/qiwi.svg" alt="">
          </div>
          <div class="payment__name">KIWI</div>
        </div>
      </div>

      <button v-if="selectedPayment" class="btn btn--primary payment__btn" @click="$router.push('/payment/' + selectedPayment)">Продолжить</button>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
