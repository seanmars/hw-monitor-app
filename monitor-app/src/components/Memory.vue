<template>
  <div class="bg-blue-300 h-full rounded-2xl">
    <div v-if="data" class="p-4 h-full">
      <div class="flex h-1/4">
        <div class="font-mono text-9xl tracking-wide">
          {{ data.type }}
        </div>
      </div>

      <div class="w-full h-3/4 flex items-center justify-center">
        <div class="w-1/2">
          <RadialProgress
            diameter="200"
            :completed-steps="completedSteps"
            :total-steps="totalSteps">
            <div class="font-mono text-4xl text-center">
              {{ completedSteps }}
              <br />
              MEMORY %
            </div>
          </RadialProgress>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from 'vue';
import RadialProgress from './RadialProgress.vue';
import { MemoryMetric } from '../metricHelper';

const props = defineProps({
  data: {
    type: Object as PropType<MemoryMetric | undefined>,
    required: true
  }
});

const totalSteps = ref(100);

const completedSteps = computed(() => {
  return (Number(props.data?.usage.split(' ')[0] ?? 0) || 0);
});
</script>

<style scoped>

</style>