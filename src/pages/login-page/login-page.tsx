import { classNames } from '@/shared'

interface LoginPageProps {
  className?: string
}

const LoginPage = (props: LoginPageProps) => {
  const { className } = props

  return <div className={classNames('', {}, [className])}>LoginPage</div>
}

export { LoginPage }
