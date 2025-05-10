import converterRoutes from '@/app/converter/routes.js'

const routes = [
  {
    path: '',
		component: () => import('@/layouts/DefaultLayout.vue'),
		children: [
			...converterRoutes
		]
  }
]

export default routes
