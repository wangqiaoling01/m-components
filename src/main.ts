import { toLine } from './utils/index';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as EleIcons from '@element-plus/icons';
import customUI from './components';

const app = createApp(App);

// 全局注册组件 牺牲性能
for (let i in EleIcons) {
  app.component(`el-icon-${toLine(i)}`, (EleIcons as any)[i]);
}

app.use(router).use(ElementPlus).use(customUI);
app.mount('#app');
