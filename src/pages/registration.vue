<script setup lang="ts">
import AuthViewSwitcher from "@/components/AuthViewSwitcher.vue";
import AdvantagesList from "@/components/AdvantagesList.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

const formSubmit = () => {

}
</script>

<template>
  <main class="page-content">
    <div class="container">
      <div class="page-head page-auth__page-head">
        <h1 class="title">Вход и регистрация</h1>
        <AuthViewSwitcher />
      </div>
      <div class="registration__wrapper">
        <RegistrationForm />
        <AdvantagesList />
      </div>
    </div>
  </main>
</template>


<style scoped lang="scss">

</style>
