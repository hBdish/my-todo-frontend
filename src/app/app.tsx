import { useTheme } from '@/shared'
import { AppRouter } from './providers/router'

const App = () => {
  const { toggleTheme } = useTheme()
  return (
    <div className={'app'}>
      <AppRouter />
      <button onClick={() => toggleTheme()}>click</button>
    </div>
  )
}

export { App }
