import DashboardLayout from '@/views/dashboard/DashboardLayout.vue'
// GeneralViews
import NotFound from '@/pages/NotFoundPage.vue'
import LoginView from '@/pages/Auth/AuthLogin.vue'
import RegisterView from '@/pages/Auth/AuthRegister.vue'

// Admin pages
import Dashboard from '@/pages/Dashboard.vue'
import Training from '@/pages/Training.vue'
import TrainingCreate from '@/pages/TrainingCreate.vue'
import Profile from '@/pages/Profile.vue'
import Notifications from '@/pages/Notifications.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Typography from '@/pages/Typography.vue'
import TableList from '@/pages/TableList.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'training/create',
        name: 'create-training',
        component: TrainingCreate
      },
      {
        path: 'training',
        name: 'training',
        component: Training
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
