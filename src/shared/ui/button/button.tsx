import { classNames } from '@/shared'
import styles from './button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'regular' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  children?: ReactNode
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  const { className, variant = 'regular', children, disabled, ...otherProps } = props

  return (
    <button
      type={'button'}
      className={classNames(styles.button, {}, [className, styles[variant]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export { Button }
