import { AppRoutes, AppRoutesProps, getRouteLogin } from '@/shared'
import { LoginPage, NotFoundPage } from '@/pages'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
}
