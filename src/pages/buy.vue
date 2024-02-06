<script setup>

import IconBuyChecks from '@/components/icons/IconBuyChecks.vue'
import SectionProtect from '@/components/SectionProtect.vue'
import SectionSliders from '@/components/SectionSliders.vue'
</script>

<template>
  <main class="page-content">
    <div class="container">
      <h1 class="title">Проверки</h1>
      <div class="banner">
        <div class="banner__left">
          <IconBuyChecks />
          <div class="banner__text">
            <div class="banner__title">Доступно проверок: 12</div>
            <div class="banner__description">Все данные пользователя в интернете
              по электронной почте</div>
          </div>
        </div>
        <div class="banner__right">
          <div class="banner-buy">
            <div class="banner-buy__text">
              <div class="banner-buy__label">Стоимость за: 2 недели</div>
              <div class="banner-buy__price">
                <span class="banner-buy__price-old">100 ₽</span>
                <span class="banner-buy__price-value">180 ₽</span>
              </div>
            </div>
          </div>
          <div class="banner__actions">
            <input type="text" class="banner-buy__input" value="2">
            <RouterLink to="/payment" class="btn btn--accent">Купить еще</RouterLink>
          </div>
        </div>
      </div>
      <SectionSliders class="page-buy__remove"/>
      <SectionProtect class="page-buy__protection" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.page-buy {
  &__remove {
    margin-top: 60px;
  }

  &__protection {
    margin-top: 60px;
  }
}

.banner {
  &__description {
    font-size: 14px;
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

.banner__actions {
  display: flex;
  gap: 16px;
}

@media screen and (max-width: $laptop) {
  .banner {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: $phablet) {
  .banner__right {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: $mobile) {
  .banner {
    align-items: flex-start;

    &__right {
      margin-left: 64px;
      align-items: flex-start;
    }

    &-buy__price {
      text-align: left;
    }

    &__text {
      text-align: left;
    }
  }
}

@media screen and (max-width: $mobile) {
  .banner {
    &__actions {
      flex-direction: column;
    }
  }
}

</style>
