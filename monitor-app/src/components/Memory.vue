<template>
  <div class="bg-blue-300 h-full rounded-2xl">
    <div v-if="data" class="p-4 h-full">
      <div class="font-mono text-9xl tracking-wide">
        {{ data.type }}
      </div>

      <div class="flex items-center justify-center h-1/2">
        <div class="text-center">
          {{ data.usage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { MemoryMetric } from '../metricHelper';

defineProps({
  data: {
    type: Object as PropType<MemoryMetric | undefined>,
    required: true
  }
});
</script>

<style scoped>

</style>