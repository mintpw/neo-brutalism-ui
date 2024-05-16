import { ComponentProps, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'font-semibold py-1 px-4 rounded-full active:opacity-80',
  variants: {
    variant: {
      filled:
        'bg-blue-lagoon-500 hover:bg-blue-lagoon-400 border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full',
      outline:
        'bg-transparent hover:bg-blue-lagoon-400  border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full',
      text: 'hover:text-blue-lagoon-500',
    },
    disabled: {
      true: 'opacity-50 bg-gray-500 pointer-events-none',
    },
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md',
  },
  compoundVariants: [
    {
      variant: 'text',
      disabled: true,
      class: 'bg-transparent text-gray-500',
    },
  ],
})

type ButtonVariants = ComponentProps<'button'> & VariantProps<typeof button>

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  return <button ref={ref} className={button(props)} {...props} />
})
