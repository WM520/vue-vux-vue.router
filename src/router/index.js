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
import Teacher from '@/components/livedetail/teacher';
import MineDetail from '@/components/mine/minedetail';
import LiveRoom from '@/components/LiveRoom';
import TeacherCourse from '@/components/mycourse/teachercourse';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/wxapp',
      name: 'Home',
      component: Home
    },
    {
      path: '/wxapp/recent',
      name: 'Recent',
      component: Recent
    },
    {
      path: '/wxapp/livedetail',
      name: 'LiveDetail',
      component: LiveDetail
    },
    {
      path: '/wxapp/fightcourse',
      name: 'FightCourse',
      component: FightCourse
    },
    {
      path: '/wxapp/livedetail/opportunity',
      name: 'Opportunity',
      component: Opportunity
    },
    {
      path: '/wxapp/myorder',
      name: 'MyOrder',
      component: MyOrder
    },
    {
      path: '/wxapp/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/wxapp/feedback',
      name: 'FeedBack',
      component: FeedBack
    },
    {
      path: '/wxapp/mycourse',
      name: 'MyCourse',
      component: MyCourse
    },
    {
      path: '/wxapp/myteacher',
      name: 'MyTeacher',
      component: MyTeacher
    },
    {
      path: '/wxapp/myteacher/mywallet',
      name: 'MyWallet',
      component: MyWallet
    },
    {
      path: '/wxapp/particulars',
      name: 'Particulars',
      component: Particulars
    },
    {
      path: '/wxapp/addbankcard',
      name: 'AddBankCard',
      component: AddBankCard
    },
    {
      path: '/wxapp/bankcard',
      name: 'BankCard',
      component: BankCard
    },
    {
      path: '/wxapp/myorder/orderdetails',
      name: 'OrderDetails',
      component: OrderDetails
    },
    {
      path: '/wxapp/livedetail/liveaudio',
      name: 'LiveAudio',
      component: LiveAudio
    },
    {
      path: '/wxapp/teacher',
      name: 'Teacher',
      component: Teacher
    },
    {
      path: '/wxapp/minedetail',
      name: 'MineDetail',
      component: MineDetail
    },
    {
        path: '/wxapp/livedetail/liveroom',
        name: 'LiveRoom',
        component: LiveRoom
    },
    {
      path: '/wxapp/myteacher/teachercourse',
      name: 'TeacherCourse',
      component: TeacherCourse
    }
  ]
});
