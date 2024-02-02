<script setup>
import IconTelegram from "@/components/icons/social/IconTelegram.vue";
import IconInstagram from "@/components/icons/social/IconInstagram.vue";
import IconYoutube from "@/components/icons/social/IconYoutube.vue";
const icons = {
  telegram: IconTelegram,
  instagram: IconInstagram,
  youtube: IconYoutube,
}
defineProps({
  title: {
    type: String
  },
  info: {
    type: Array
  },
  unavailable: {
    type: Boolean
  }
})
</script>

<template>
  <div class="data-block">
    <h3 class="data-block__title">{{ title }}</h3>
    <div class="tag__list">
      <div class="tag__item"
           v-for="item of info"
           :class="[
             { unavailable },
             item.icon ? `tag__item--${item.icon}` : ''
           ]">
        <component v-if="item.icon" :is="icons[item.icon]" />
        {{ item.title }}
      </div>
    </div>
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.data-block {
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.20);
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    color: $color-white;
    font-size: 18px;
    font-weight: 500;
    line-height: 146%;
  }
}

.tag {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__item {
    height: 40px;
    padding: 10px 16px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.92);
    background: rgba(255, 255, 255, 0.92);
    color: #303034;
    line-height: 132%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;

    &--telegram {
      background: #1F87D3;
      border: none;
      color: $color-white;
      padding-left: 8px;
      padding-right: 8px;
    }

    &--instagram {
      background: linear-gradient(87deg, #F0B537 0%, #C84B4E 50.48%, #5534A4 100%);
      border: none;
      color: $color-white;
      padding-left: 8px;
      padding-right: 8px;

      &.unavailable {
        background: url('@/assets/img/unavailable.png'), linear-gradient(87deg, #F0B537 0%, #C84B4E 50.48%, #5534A4 100%);
      }
    }

    &--youtube {
      background: #C93131;
      border: none;
      color: $color-white;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
}

.unavailable {
  background-image: url('@/assets/img/unavailable.png');
  background-size: cover;
  border: none;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    display: block;
    border-radius: 4px;
    backdrop-filter: blur(2px);
    background: rgba(255, 255, 255, 0.2);
    top: 4px;
    right: 4px;
    bottom: 4px;
    left: 4px;
  }
}

</style>
