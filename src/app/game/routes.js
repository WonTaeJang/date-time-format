export default [
  {
    path: '/game',
    children: [
      {
        path: '',
        component: () => import('./pages/Index.vue'),
      },
      {
        path: 'tetris',
        component: () => import('./pages/GameTetris.vue'),
      },
    ],
  },  
]