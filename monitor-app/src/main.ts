import { appWindow } from '@tauri-apps/api/window';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

window.addEventListener('keydown', async function (e) {
  if (e.code == 'F11') {
    await appWindow.setFullscreen(false);
  }
  if (e.code == 'F12') {
    await appWindow.setFullscreen(true);
  }
});

createApp(App).mount('#app');
