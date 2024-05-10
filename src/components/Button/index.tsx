import { ComponentProps, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  variants: {
    variant: {
      filled: '',
      outline: 'bg-transparent hover:bg-blue-lagoon-400',
      text: 'hover:text-blue-lagoon-500',
      disabled: {
        true: 'bg-blue-lagoon-700 pointer-events-none',
      },
    },
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      class:
        'bg-blue-lagoon-500 hover:bg-blue-lagoon-400 border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full ',
    },
    {
      variant: 'filled',
      class: 'text-slate-400 bg-slate-200 opacity-100 hover:bg-slate-200 ',
      disabled: true,
    },
    {
      variant: 'outline',
      class: 'border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full',
    },
    {
      variant: 'outline',
      class: 'text-slate-400 bg-slate-200 opacity-100 hover:bg-slate-200 ',
      disabled: true,
    },
    {
      variant: 'text',
      class: 'rounded-full',
    },
    {
      variant: 'text',
      class: 'text-slate-400 opacity-100 hover:text-slate-400',
      disabled: true,
    },
  ],
  defaultVariants: {
    variant: 'filled',
    size: 'md',
  },
})

type ButtonVariants = ComponentProps<'button'> & VariantProps<typeof button>

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  return <button ref={ref} className={button(props)} {...props} />
})
