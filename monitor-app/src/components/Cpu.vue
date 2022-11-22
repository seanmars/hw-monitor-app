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
                CPU %
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
import { CpuMetric } from '../metricHelper';

const props = defineProps({
  data: {
    type: Object as PropType<CpuMetric | undefined>,
    required: true
  }
});

const totalSteps = ref(100);

const completedSteps = computed(() => {
  return (Number(props.data?.load.split(' ')[0] ?? 0) || 0);
});

</script>

<style scoped>
.circle-progress-value {
  stroke-width: 6px;
  stroke: hsl(320, 80%, 60%);
  stroke-dasharray: 4 1;
}

.circle-progress-circle {
  stroke-width: 30px;
  stroke: #eee;
}

.circle-progress-text {
  font-weight: bold;
  fill: hsl(180, 80%, 47%);
}
</style>