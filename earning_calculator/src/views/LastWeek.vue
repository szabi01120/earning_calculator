<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
import SupportIcon from '../components/icons/IconSupport.vue'

import { ref, onMounted } from 'vue'

const currentTime = ref(new Date().toLocaleString('hu-HU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleString('hu-HU', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }, 1000)
})
</script>

<template>
  <main>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>

      <h1 class="text-4xl ">Current Time: {{ currentTime }}</h1>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Last week I earned:</template>

      <p class="text-xl">
        I earned 1000 HUF today.
      </p>

    </WelcomeItem>
  </main>
</template>
