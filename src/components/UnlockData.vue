<script setup>

import IconUnlock from '@/components/icons/IconUnlock.vue'
</script>

<template>
  <div class="unlock">
    <div class="unlock__content">
      <IconUnlock class="unlock__icon"/>
      <div class="unlock__text">
        <div class="unlock__title">Разблокировать данные</div>
        <div class="unlock__price">Стоимость: 1 проверка</div>
      </div>
    </div>
    <RouterLink to="/payment" class="btn btn--accent unlock__btn">Разблокировать данные</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.unlock {
  margin-top: 60px;
  display: flex;
  padding: 32px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(4px);
  height: 134px;
  background-image: url('@/assets/img/unlock-top.png'), url('@/assets/img/unlock-bottom.png');
  background-size: 100% 8px, 100% 8px;
  background-repeat: no-repeat;
  background-position: top center, bottom center;

  &__content {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__icon {
    color: #15995A;
  }

  &__title {
    color: rgba(255, 255, 255, 0.92);
    font-size: 20px;
    font-weight: 700;
    line-height: 132%;
  }

  &__price {
    color: #9DA2AD;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  &__btn {
    padding: 16px;
  }
}

@media screen and (max-width: $mobile) {
  .unlock {
    flex-direction: column;
    height: auto;
  }
}
</style>
