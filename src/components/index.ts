import { App } from 'vue';
import chooseIcon from './chooseArea';
import chooseArea from './chooseIcon';
import Trend from './trend';
const components = [chooseArea, chooseIcon, Trend];

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item);
    });
  },
};
