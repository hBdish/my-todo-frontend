import { classNames } from '@/shared'

interface NotFoundPageProps {
  className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props

  return <div className={classNames('', {}, [className])}>NotFoundPage</div>
}

export { NotFoundPage }
