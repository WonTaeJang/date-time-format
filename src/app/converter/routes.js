export default [
  {
    path: '/converter',
    children: [
      {
        path: '',
        component: () => import('./pages/Index.vue'),
      },
      {
        path: 'unix-time-stamp',
        component: () => import('./pages/UnixTimeStamp.vue'),
      },
      // {
      //   path: 'datetime-format',
      //   component: () => import('./pages/DateTimeCustom.vue'),
      // },
    ],
  },  
]
