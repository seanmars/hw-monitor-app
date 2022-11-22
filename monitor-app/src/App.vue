<script setup lang="ts">
import HwApi from './api/hwApi';
import { onMounted, onUnmounted, ref } from 'vue';
import MetricHelper, { CpuMetric, DateTimeInfo, GpuMetric, MemoryMetric, NetworkMetric } from './metricHelper';
import Cpu from './components/Cpu.vue';
import Gpu from './components/Gpu.vue';
import Memory from './components/Memory.vue';
import Network from './components/Network.vue';
import DateTimeCmp from './components/DateTimeCmp.vue';

const useHwApi = new HwApi();
const useHwHelper = new MetricHelper();

const cpuInfo = ref<CpuMetric | undefined>();
const gpuInfo = ref<GpuMetric | undefined>();
const memoryInfo = ref<MemoryMetric | undefined>();
const networkInfo = ref<NetworkMetric | undefined>();
const dtInfo = ref<DateTimeInfo | undefined>();

let timerId: number | undefined;

onMounted(async () => {
  await refreshMetric();

  timerId = window.setInterval(async () => {
    await refreshMetric();
  }, 5000);
});

onUnmounted(() => {
  window.clearInterval(timerId);
});

const refreshMetric = async () => {
  let response = await useHwApi.fetchMetrics();
  let raw = await response.json();
  cpuInfo.value = useHwHelper.getCpu(raw);
  gpuInfo.value = useHwHelper.getGpu(raw);
  memoryInfo.value = useHwHelper.getMemory(raw);
  networkInfo.value = useHwHelper.getNetwork(raw);
  dtInfo.value = useHwHelper.getDateTime();
};
</script>

<template>
  <div class="flex flex-wrap justify-center h-screen">

    <!-- Top -->
    <div class="w-full h-1/2 flex py-2">
      <!-- CPU -->
      <div class="w-1/2 h-full px-2">
        <Cpu :data="cpuInfo" />
      </div>
      <!-- GPU -->
      <div class="w-1/2 h-full px-2">
        <Gpu :data="gpuInfo" />
      </div>
    </div>
    <!-- Top End -->

    <!-- Bottom -->
    <div class="w-full h-1/2 flex py-2">
      <!-- RAM -->
      <div class="w-1/3 h-full px-2">
        <Memory :data="memoryInfo" />
      </div>
      <!-- NETWORK -->
      <div class="w-1/3 h-full px-2">
        <Network :data="networkInfo" />
      </div>
      <!-- Date/Time -->
      <div class="w-1/3 h-full px-2">
        <DateTimeCmp :data="dtInfo" />
      </div>
    </div>
    <!-- Bottom End -->

  </div>
</template>

<style scoped>

</style>
