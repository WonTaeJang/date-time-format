export default [
  {
    path: '/',
    children: [
      {
        path: '',
        component: () => import('./pages/Index.vue'),
      },
      {
        path: 'unix-time-stamp',
        component: () => import('./pages/UnixTimeStamp.vue'),
      },
      {
        path: 'date-time-format',
        component: () => import('./pages/DateTimeFormat.vue'),
      },
    ],
  },  
]