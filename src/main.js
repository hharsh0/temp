
/* eslint-disable */
import { createApp } from 'vue';
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // Ensure ElementPlus styles load
import '@/assets/css/element-variables.scss';
import '@/assets/css/style.scss';
import router from '@/router/router-static.js';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import * as echarts from 'echarts';
import 'echarts/theme/macarons.js';
import http from '@/utils/http.js';
import base from '@/utils/base';
import { isAuth, getCurDate, getCurDateTime } from '@/utils/utils';
import storage from "@/utils/storage";
import FileUpload from "@/components/common/FileUpload";
import Editor from "@/components/common/Editor";
import api from '@/utils/api';
import * as validate from '@/utils/validate.js';
import { initAMapApiLoader } from '@vuemap/vue-amap';
import JsonExcel from 'vue-json-excel';
import VueQr from 'vue-qr';
import printJS from 'print-js';
import md5 from 'js-md5';

// Initialize Vue App
const app = createApp(App);

// Use Plugins
app.use(router);
app.use(ElementPlus, { size: 'medium', zIndex: 3000 });

const BASE_URL = "http://localhost:8080/liulangdongwubeihua";

// Setup Global Properties
app.config.globalProperties.$validate = validate;
app.config.globalProperties.$http = http;
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$base = base.get();
app.config.globalProperties.$project = base.getProjectName();
app.config.globalProperties.$storage = storage;
app.config.globalProperties.$api = api;
app.config.globalProperties.isAuth = isAuth;
app.config.globalProperties.getCurDateTime = getCurDateTime;
app.config.globalProperties.getCurDate = getCurDate;
app.config.globalProperties.$md5 = md5;
app.config.globalProperties.$baseURL = BASE_URL;

// Register Components
app.component('bread-crumbs', BreadCrumbs);
app.component('file-upload', FileUpload);
app.component('editor', Editor);
app.component('VueQr', VueQr);
app.component('downloadExcel', JsonExcel);

// Mount App
app.mount('#app');
