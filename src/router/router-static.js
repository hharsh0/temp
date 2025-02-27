import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/index';
import Home from '@/views/home';
import Login from '@/views/login';
import NotFound from '@/views/404';
import UpdatePassword from '@/views/update-password';
import Pay from '@/views/pay';
import Register from '@/views/register';
import Center from '@/views/center';

// Import other modules
import Users from '@/views/modules/users/list';
import Chongwu from '@/views/modules/chongwu/list';
import ChongwuCollection from '@/views/modules/chongwuCollection/list';
import ChongwuLiuyan from '@/views/modules/chongwuLiuyan/list';
import Chongwujiyang from '@/views/modules/chongwujiyang/list';
import Chongwulingyang from '@/views/modules/chongwulingyang/list';
import Chongwulingyangshenhe from '@/views/modules/chongwulingyangshenhe/list';
import Dictionary from '@/views/modules/dictionary/list';
import Forum from '@/views/modules/forum/list';
import News from '@/views/modules/news/list';
import Yonghu from '@/views/modules/yonghu/list';
import Ziyuanzhe from '@/views/modules/ziyuanzhe/list';
import Config from '@/views/modules/config/list';
import DictionaryChongwu from '@/views/modules/dictionaryChongwu/list';
import DictionaryChongwuCollection from '@/views/modules/dictionaryChongwuCollection/list';
import DictionaryChongwujiyangYesno from '@/views/modules/dictionaryChongwujiyangYesno/list';
import DictionaryChongwulingyangshenheYesno from '@/views/modules/dictionaryChongwulingyangshenheYesno/list';
import DictionaryForumState from '@/views/modules/dictionaryForumState/list';
import DictionaryJieshu from '@/views/modules/dictionaryJieshu/list';
import DictionaryNews from '@/views/modules/dictionaryNews/list';
import DictionarySex from '@/views/modules/dictionarySex/list';

const routes = [
  {
    path: '/index',
    name: '首页',
    component: Index,
    children: [
      { path: '/', name: 'home', component: Home, meta: { icon: '', title: 'center' } },
      { path: '/updatePassword', name: '修改密码', component: UpdatePassword, meta: { icon: '', title: 'updatePassword' } },
      { path: '/pay', name: '支付', component: Pay, meta: { icon: '', title: 'pay' } },
      { path: '/center', name: '个人信息', component: Center, meta: { icon: '', title: 'center' } },
      { path: '/users', name: '管理信息', component: Users },
      { path: '/dictionaryChongwu', name: '宠物类型', component: DictionaryChongwu },
      { path: '/dictionaryChongwuCollection', name: '收藏表类型', component: DictionaryChongwuCollection },
      { path: '/dictionaryChongwujiyangYesno', name: '审核状态', component: DictionaryChongwujiyangYesno },
      { path: '/dictionaryChongwulingyangshenheYesno', name: '审核状态', component: DictionaryChongwulingyangshenheYesno },
      { path: '/dictionaryForumState', name: '帖子状态', component: DictionaryForumState },
      { path: '/dictionaryJieshu', name: '是否被认领', component: DictionaryJieshu },
      { path: '/dictionaryNews', name: '公告类型', component: DictionaryNews },
      { path: '/dictionarySex', name: '性别类型', component: DictionarySex },
      { path: '/config', name: '轮播图', component: Config },
      { path: '/chongwu', name: '宠物信息', component: Chongwu },
      { path: '/chongwuCollection', name: '宠物收藏', component: ChongwuCollection },
      { path: '/chongwuLiuyan', name: '宠物留言', component: ChongwuLiuyan },
      { path: '/chongwujiyang', name: '宠物寄养', component: Chongwujiyang },
      { path: '/chongwulingyang', name: '宠物领养', component: Chongwulingyang },
      { path: '/chongwulingyangshenhe', name: '宠物领养审核', component: Chongwulingyangshenhe },
      { path: '/dictionary', name: '字典', component: Dictionary },
      { path: '/forum', name: '论坛', component: Forum },
      { path: '/news', name: '公告信息', component: News },
      { path: '/yonghu', name: '用户', component: Yonghu },
      { path: '/ziyuanzhe', name: '自愿者', component: Ziyuanzhe },
    ],
  },
  { path: '/login', name: 'login', component: Login, meta: { icon: '', title: 'login' } },
  { path: '/register', name: 'register', component: Register, meta: { icon: '', title: 'register' } },
  // { path: '/', name: '首页', redirect: '/index' },
   // 默认跳转
  { path: '/:pathMatch(.*)*', component: NotFound }, // 404 路由
];

// ✅ Use `createRouter` instead of Vue 2 syntax
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
