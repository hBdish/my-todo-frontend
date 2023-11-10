import { classNames, Mods } from '@/shared'
import styles from './input.module.scss'
import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react'

type InputVariant = 'regular'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'size'>

interface InputProps extends HTMLInputProps {
  className?: string
  variant?: InputVariant
  value?: string | number
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
}

const Input = (props: InputProps) => {
  const {
    className,
    variant = 'regular',
    value,
    onChange,
    autofocus,
    readonly,
    placeholder,
    type,
    ...otherProps
  } = props
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const mods: Mods = {
    [styles.readonly]: readonly,
    [styles.focused]: isFocused,
  }

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      className={classNames(styles.input, mods, [className, styles[variant]])}
      onBlur={onBlur}
      onFocus={onFocus}
      ref={ref}
      {...otherProps}
    ></input>
  )
}

export { Input }
