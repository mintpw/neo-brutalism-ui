import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { Button } from '../Button'

const dialog = tv({
  base: 'modal-box border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]',
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

type InputProps = ComponentProps<'dialog'> & VariantProps<typeof dialog>

export const Dialog = forwardRef<HTMLDialogElement, InputProps>((props: InputProps, ref) => {
  const handleClick = () => {
    console.log('handleClick')
    if (!document) {
      return
    }
    if (document.getElementById('my_modal_1')) {
      document.getElementById('my_modal_1').showModal()
    }
  }
  return (
    <>
      <Button variant="filled" onClick={handleClick}>
        open modal
      </Button>
      <dialog id="my_modal_1" className="modal">
        <div className={dialog()}>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <Button variant="filled">Close</Button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
})
