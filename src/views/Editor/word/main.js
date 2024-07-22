import { createApp } from 'vue';
import './style.css';
import App from './index.vue';
import CKEditor from '@ckeditor/ckeditor5-vue';

createApp(App).use(CKEditor).mount('#app');
