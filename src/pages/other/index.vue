<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ProgressBar from "@/components/ui/ProgressBar.vue";
import IconEmailForm from "@/components/icons/IconEmailForm.vue";

const email = ref('')
const fetchingStarted = ref(false)
const progress = ref(0)
const router = useRouter()

const SEARCH_TIME = 3000
const checkContact = async () => {
  fetchingStarted.value = true

  const interval = setInterval( () => {
    progress.value += 1
    },
    SEARCH_TIME / 100
  );
  await new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve()
    }, SEARCH_TIME)
  } )

  clearInterval(interval)

  await router.push('/other/someresultid')
}

</script>

<template>
  <main class="page-content">
    <div class="container container--centered-x">
      <div class="page-head--column">
        <h1 class="title">Проверить контакт</h1>
        <p class="subtitle">Из-за недавнего инцидента с Твиттером, есть риск, что ваши данные могут быть использованы в корыстных целях. Наш антивирус выпустил обновление, которое защищает вас от подобного</p>
      </div>

        <div v-if="fetchingStarted" class="email-form__progress">
          <ProgressBar :value="progress"/>
        </div>
        <form v-else class="email-form" @submit.prevent="checkContact">
          <IconEmailForm class="email-form__icon"/>
          <input type="email" class="email-form__input" placeholder="Адрес эл. почты" v-model="email">
          <button class="btn email-form__btn">Запустить проверку</button>
        </form>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
