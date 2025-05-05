export default [
  {
    path: '/converter',
    children: [
      {
        path: '',
        component: () => import('./pages/Index.vue'),
      },
      {
        path: 'unixtime',
        component: () => import('./pages/UnixTime.vue'),
      },
      // {
      //   path: 'datetime-format',
      //   component: () => import('./pages/DateTimeCustom.vue'),
      // },
    ],
  },  
]
