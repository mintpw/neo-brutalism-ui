import { forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const dropdown = tv({
  slots: {
    button:
      'btn hover:border-black bg-blue-lagoon-500 p-2 hover:bg-blue-lagoon-400 border-black border-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]',
    menu: 'menu dropdown-content z-[1] border-2 border-black bg-blue-lagoon-500 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-blue-lagoon-400 w-52',
  },
  variants: {
    variant: {
      default: '',
      rounded: {
        button: 'rounded-full',
        menu: 'rounded-lg',
      },
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
    variant: 'default',
    size: 'md',
  },
})

interface DropdownProps extends VariantProps<typeof dropdown> {
  title: string
  children: Array<React.ReactNode>
}

const { button, menu } = dropdown()

export const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  (props: DropdownProps, ref) => {
    return (
      <>
        <details className="dropdown">
          <summary className={button(props)} ref={ref} {...props}>
            {props.title}
          </summary>

          <ul className={menu(props)} {...props}>
            {props.children.map((child, index) => (
              <li key={index}>
                <a>{child}</a>
              </li>
            ))}
          </ul>
        </details>
      </>
    )
  }
)
