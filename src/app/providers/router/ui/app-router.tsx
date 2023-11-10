import { memo, Suspense, useCallback } from 'react'
import { AppRoutesProps } from '@/shared'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/route-config'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<div>Loading</div>}>{route.element}</Suspense>

    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
