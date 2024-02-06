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
.payment {
  &__list {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 80px;
  }

  &__item {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    border-radius: 4px;
    width: 153px;
    height: 160px;
    backdrop-filter: blur(8px);
    cursor: pointer;

    &--mir {
      background: rgba(34, 120, 198, 0.4);
    }
    &--bitcoin {
      background: rgba(250, 178, 39, 0.4);
    }
    &--usdt {
      background: rgba(4, 131, 96, 0.4);
    }
    &--qiwi {
      background: rgba(226, 124, 0, 0.4);
    }

    &--selected {
      background: rgba(34, 120, 198, 0.6);
    }

    &--unselected {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &__name {
    color: rgba(255, 255, 255, 0.92);
    font-size: 16px;
    font-weight: 600;
    line-height: 132%;
  }

  &__btn {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 320px;
    display: block;
  }
}

@media screen and (max-width: $tablet) {
  .payment {
    &__list {
      flex-wrap: wrap;
    }

    &__item {
      width: calc((100% - 8px) / 2);
    }
  }
}
</style>
