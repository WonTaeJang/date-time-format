import convertorRoutes from '@/app/convertor/routes.js'

const routes = [
  {
    path: '',
		component: () => import('@/layouts/DefaultLayout.vue'),
		children: [
			...convertorRoutes
		]
  }
]

export default routes
