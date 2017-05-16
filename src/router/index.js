import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home';
import Recent from '@/components/recent/recent';
import LiveDetail from '@/components/livedetail/livedetail';
import FightCourse from '@/components/livedetail/fightcourse';
import Opportunity from '@/components/livedetail/opportunity';
import MyOrder from '@/components/myorder/myorder';
import OrderDetails from '@/components/myorder/orderdetails';
import Introduction from '@/components/introduction/introduction';
import FeedBack from '@/components/feedback/feedback';
import MyCourse from '@/components/mycourse/mycourse';
import MyTeacher from '@/components/myteacher/myteacher';
import MyWallet from '@/components/myteacher/wallet';
import Particulars from '@/components/myteacher/particulars';
import AddBankCard from '@/components/myteacher/addBankCard';
import BankCard from '@/components/myteacher/bankCard';
import LiveAudio from '@/components/liveaudio/liveaudio';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recent',
      name: 'Recent',
      component: Recent
    },
    {
      path: '/livedetail',
      name: 'LiveDetail',
      component: LiveDetail
    },
    {
      path: '/fightcourse',
      name: 'FightCourse',
      component: FightCourse
    },
    {
      path: '/opportunity',
      name: 'Opportunity',
      component: Opportunity
    },
    {
      path: '/myorder',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/feedback',
      name: 'FeedBack',
      component: FeedBack
    },
    {
      path: '/mycourse',
      name: 'MyCourse',
      component: MyCourse
    },
    {
      path: '/myteacher',
      name: 'MyTeacher',
      component: MyTeacher
    },
    {
      path: '/mywallet',
      name: 'MyWallet',
      component: MyWallet
    },
    {
      path: '/particulars',
      name: 'Particulars',
      component: Particulars
    },
    {
      path: '/addbankcard',
      name: 'AddBankCard',
      component: AddBankCard
    },
    {
      path: '/bankcard',
      name: 'BankCard',
      component: BankCard
    },
    {
      path: '/orderdetails',
      name: 'OrderDetails',
      component: OrderDetails
    },
    {
      path: '/liveaudio',
      name: 'LiveAudio',
      component: LiveAudio
    }
  ]
});
