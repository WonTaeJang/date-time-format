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
      {
        path: 'date-time-format',
        component: () => import('./pages/DateTimeFormat.vue'),
      },
      {
        path: 'word-to-html',
        component: () => import('./pages/WordToHtml.vue'),
      },
    ],
  },  
]