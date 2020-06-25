import Vue from "vue";
import App from '@/App'
import VueRouter from "vue-router";

const Home = r => require(['@/components/home/home'], r); //首页
const marketClass = r => require(['@/components/class/class'], r); //首页
const groupList = r => require(['@/components/grouplist/grouplist'], r); //首页
const Cart = r => require(['@/components/cart/cart'], r); //首页
const person = r => require(['@/components/person/person'], r); //首页
const subject = r => require(['@/components/subject'], r);
Vue.use(VueRouter);

//解决重复点击同一页面报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}

const routes = [
  {
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
      //地址为空时跳转home页面
      {
        path: '',
        redirect: '/subject'
      },
      {
        path: '/subject',
        name: 'subject',
        component: subject,
        children: [ //地址为/subject跳转home
            {
                path: '/subject',
                redirect: '/home'
            },
            { //主页
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                  keepAlive: true,
                  title: '首页'

              }    
            },
            { //分类
                path: '/marketClass',
                name: 'marketClass',
                component: marketClass,
                meta: {
                  title: '分类'
                },
     
            },
            { //拼团商品列表
                path: '/groupList',
                name: 'groupList',
                component: groupList,
                meta: {
                  title: '团购'
              }
            },
            { //购物车
                path: '/Cart',
                name: 'Cart',
                component: Cart,
                meta: {
                  title: '购物车'
              }
                
            },
            { //个人中心
                path: '/person',
                name: 'person',
                component: person,
                meta: {
                  title: '个人中心'
                }
               
            }
        ]
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
