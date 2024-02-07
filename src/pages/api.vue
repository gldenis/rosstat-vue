<script setup lang="ts">
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import IconCopy from "@/components/icons/IconCopy.vue";
import { ref } from "vue";
import IconCopied from "@/components/icons/IconCopied.vue";
import AdvantagesList from "@/components/AdvantagesList.vue";
import IconProtection from "@/components/icons/menu/IconProtection.vue";
const highlightjs = hljsVuePlugin.component


const code = "import os\n" +
  "from rosstat import Rosstat\n" +
  "\n" +
  "client = Rosstat(\n" +
  "    api_key=os.environ.get( \"OPENAI_API_KEY\" ),\n" +
  ")\n" +
  "\n" +
  "chat_completion = client.chat.completions.create(\n" +
  "    messages=[\n" +

  "    ],\n" +
  "    model=\"asfadf\",\n" +
  ")"

const codeJs = "import Rosstat from \"rosstat\";\n" +
  "\n" +
  "const rosstat = new Rosstat();\n" +
  "\n" +
  "async function main() {\n" +
  "  const completion = await openai.chat.completions.create( {\n" +
  "    messages: [{ role: \"system\", content: \"You are a helpful .\" } ],\n" +
  "    model: \"ggsdfg\",\n" +
  "  });\n" +
  "\n" +
  "  console.log( completion.choices[0] );\n" +
  "}\n" +
  "\n" +
  "main();"

const currentLang = ref('py')
const copied = ref(false)
const copy = async () => {
  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 3000)
}
</script>

<template>
  <main class="page-content">
    <div class="container page-api__container">
      <div class="head-top--column">
        <h1 class="title">API доступ</h1>
        <p class="subtitle">Описание</p>
        <div class="switcher-api">
          <button class="switcher-api__item" :class="{'switcher-api__item--current': currentLang === 'py' }" @click="currentLang = 'py'">Python</button>
          <button class="switcher-api__item" :class="{'switcher-api__item--current': currentLang === 'js' }" @click="currentLang = 'js'">Javascript</button>
          <button class="switcher-api__item">URL</button>
        </div>
      </div>
      <div class="page-api__content">
        <div class="code-block">
          <highlightjs
            v-if="currentLang === 'py'"
            autodetect
            :code="code"
          />
          <highlightjs
            v-else
            autodetect
            :code="codeJs"
          />
          <button class="btn btn--small code-block__btn" :class="{ 'code-block__btn--copied': copied }" @click="copy">
            <IconCopied v-if="copied"/>
            <IconCopy v-else />
            {{ copied ? 'Скопировано' : 'Скопировать' }}
          </button>
        </div>
        <div class="advantages page-api__advantages">
          <div class="advantages__item" v-for="item of 5">
            <IconProtection class="advantages__icon" width="24" height="24"/>
            <div class="advantages__text">9 лет на защите ваших данных</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
