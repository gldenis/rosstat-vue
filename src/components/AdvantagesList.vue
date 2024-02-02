<script setup>
import IconProtection from '@/components/icons/menu/IconProtection.vue'
</script>

<template>
  <div class="advantages">
    <div class="advantages__item" v-for="item of 7">
      <IconProtection class="advantages__icon" width="24" height="24"/>
      <div class="advantages__text">9 лет на защите ваших данных</div>
    </div>
  </div>
</template>

