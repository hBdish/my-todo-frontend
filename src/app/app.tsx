import { useTheme } from '@/shared'

const App = () => {
  const { toggleTheme } = useTheme()
  return (
    <div className={'app'}>
      <button onClick={() => toggleTheme()}>click</button>
    </div>
  )
}

export { App }
