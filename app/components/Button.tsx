import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import styles from './Button.module.css'

const buttonVariants = cva(styles.common, {
  variants: {
    variant: {
      default: styles.default,
      outline: styles.outline,
      secondary: styles.secondary,
      ghost: styles.ghost,
      link: styles.link,
    },
    size: {
      default: styles.sizeDefault,
      sm: styles.sizeSmall,
      lg: styles.sizeLarge,
      icon: styles.sizeIcon,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={clsx(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)

Button.displayName = 'Button'

export { Button }
