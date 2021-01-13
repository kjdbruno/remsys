import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Entry from '@/components/Entry'
import Report from '@/components/Report'
import GenerateReport from '@/components/ViewReport'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/entry', name: 'Entry', component: Entry },
    { path: '/report', name: 'Report', component: Report },
    //
    { path: '/generate/report', name: 'GenerateReport', component: GenerateReport }
  ]
})
