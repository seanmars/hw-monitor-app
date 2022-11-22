<template>
  <div class="bg-blue-300 h-full rounded-2xl">
    <div v-if="data" class="p-4 h-full">
      <div class="flex h-1/4">
        <div class="font-mono text-9xl tracking-wide flex-none">
          {{ data.type }}
        </div>
        <div class="grow"></div>
        <div class="flex items-end">
          <div class="font-mono text-4xl flex-none">
            {{ data.name }}
          </div>
        </div>
      </div>

      <div class="flex w-full h-2/3">
        <div class="w-1/6">
        </div>

        <div class="w-2/6 h-full flex items-center">
          <div class="w-full">
            <RadialProgress
              diameter="200"
              :completed-steps="completedSteps"
              :total-steps="totalSteps">
              <div class="font-mono text-4xl text-center">
                {{ completedSteps }}
                <br />
                GPU %
              </div>
            </RadialProgress>
          </div>
        </div>

        <div class="w-1/6">
        </div>

        <div class="w-2/6 h-full flex items-center">
          <div class="w-full">
            <div class="font-mono text-4xl text-left">{{ data.power }}</div>
            <div class="font-mono text-4xl text-left">{{ data.temperature }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from 'vue';
import RadialProgress from './RadialProgress.vue';
import { GpuMetric } from '../metricHelper';

const props = defineProps({
  data: {
    type: Object as PropType<GpuMetric | undefined>,
    required: true
  }
});

const totalSteps = ref(100);

const completedSteps = computed(() => {
  return (Number(props.data?.load.split(' ')[0] ?? 0) || 0);
});
</script>

<style scoped>

</style>