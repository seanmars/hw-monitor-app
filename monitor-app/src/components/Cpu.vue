<template>
  <div class="bg-blue-300 h-full rounded-2xl">
    <div v-if="data" class="p-4">
      <div class="flex">
        <div class="font-mono text-9xl tracking-wide flex-none">
          {{ data.type }}
        </div>
        <div class="grow"></div>
        <div class="flex items-end mb-5">
          <div class="font-mono text-4xl flex-none">
            {{ data.name }}
          </div>
        </div>
      </div>

      <div>
        {{ data.power }}
      </div>
      <div>
        {{ data.load }}
      </div>
      <div>
        {{ data.temperature }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { CpuMetric } from '../metricHelper';

defineProps({
  data: {
    type: Object as PropType<CpuMetric | undefined>,
    required: true
  }
});
</script>

<style scoped>

</style>