import { Button, useTheme } from '@/shared'
import { AppRouter } from './providers/router'

const App = () => {
  const { toggleTheme } = useTheme()
  return (
    <div className={'app'}>
      <AppRouter />
      <Button onClick={() => toggleTheme()}>click</Button>
    </div>
  )
}

export { App }
