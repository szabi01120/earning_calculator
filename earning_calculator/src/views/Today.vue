<script setup>
import WelcomeItem from '../components/WelcomeItem.vue';
import DocumentationIcon from '../components/icons/IconDocumentation.vue';
import ToolingIcon from '../components/icons/IconTooling.vue';
import EcosystemIcon from '../components/icons/IconEcosystem.vue';
import CommunityIcon from '../components/icons/IconCommunity.vue';
import SupportIcon from '../components/icons/IconSupport.vue';
import { calculateEarnings } from '../components/calculation';
import { ref, onMounted } from 'vue';

const currentTime = ref(new Date().toLocaleString('hu-HU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

const hourlyWage = 2302;
const earnings = ref(calculateEarnings(hourlyWage));

function formatCurrency(amount) {
  return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF', maximumFractionDigits: 2 }).format(amount);
}

onMounted(() => {
  setInterval(() => {
    currentTime.value = new Date().toLocaleString('hu-HU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    earnings.value = calculateEarnings(hourlyWage);
  }, 1000)
})
</script>

<template>
  <main>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>

      <h1 class="text-3xl ">Current Time: <a class="green">{{ currentTime }}</a></h1>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Today I earned:</template>

      <p class="text-xl">
        I earned <a class="green text-2xl"> {{ formatCurrency(earnings) }}</a> today.
      </p>

    </WelcomeItem>
  </main>
</template>
