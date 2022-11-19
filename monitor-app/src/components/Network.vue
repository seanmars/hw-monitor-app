<template>
  <div class="bg-blue-300 h-full rounded-2xl">
    <div v-if="data" class="p-4">
      <div class="font-mono text-9xl tracking-wide">
        {{ data.type }}
      </div>

      <div class="text-6xl text-center mt-20 text-pink-600">
        &#9650; {{ data.upload }}
      </div>
      <div class="text-6xl text-center mt-20 text-green-600">
        &#9660; {{ data.download }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { NetworkMetric } from '../metricHelper';

defineProps({
  data: {
    type: Object as PropType<NetworkMetric | undefined>,
    required: true
  }
});
</script>

<style scoped>

</style>