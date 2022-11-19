<template>
  <div class="bg-blue-300 h-full rounded-2xl">
    <div v-if="data" class="p-4">
      <div class="font-mono text-9xl tracking-wide">
        Date
      </div>
      <div class="font-mono text-8xl text-center mt-5">
        {{ data.date }}
      </div>

      <div class="mb-10" />

      <div class="font-mono text-9xl tracking-wide">
        Time
      </div>
      <div class="font-mono text-8xl text-center mt-5">
        {{ data.time }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { DateTimeInfo } from '../metricHelper';

defineProps({
  data: {
    type: Object as PropType<DateTimeInfo | undefined>,
    required: true
  }
});
</script>

<style scoped>

</style>