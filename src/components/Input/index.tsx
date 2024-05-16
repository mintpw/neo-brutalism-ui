import { ComponentProps, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const input = tv({
  base: 'border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none',
  variants: {
    variant: {
      text: 'bg-blue-lagoon-500 focus:bg-blue-lagoon-400',
      password: 'bg-transparent hover:bg-blue-lagoon-400',
      number: 'hover:text-blue-lagoon-500',
      date: '',
    },
    disabled: {
      true: 'opacity-50 bg-gray-500 pointer-events-none',
    },
    rounded: {
      true: 'rounded-full',
    },
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
})

type InputProps = ComponentProps<'input'> & VariantProps<typeof input>

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return <input ref={ref} type="text" autoComplete="off" className={input(props)} {...props} />
})
