import { ComponentProps, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import Button from '../Button'

const dialog = tv({
  base: 'modal-box border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]',
  variants: {
    variant: {
      text: 'bg-primary-500 focus:bg-primary-400',
      password: 'bg-transparent hover:bg-primary-400',
      number: 'hover:text-primary-500',
      date: '',
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
})

type DialogVariants = ComponentProps<'dialog'> & VariantProps<typeof dialog>

interface DialogProps extends DialogVariants {
  dialogButton?: string
  title?: string
  description?: string
  closeButton?: string
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>((props: DialogProps, ref) => {
  const {
    dialogButton = 'Open Modal',
    title = 'Hello',
    description = 'Press ESC key or click the button below to close',
    closeButton = 'Close',
  } = props

  const handleClick = () => {
    const modal = document?.getElementById('my_modal_1') as HTMLDialogElement | null
    modal?.showModal()
  }

  return (
    <>
      <Button variant="filled" onClick={handleClick}>
        {dialogButton}
      </Button>
      <dialog id="my_modal_1" className="modal" ref={ref}>
        <div className={dialog()}>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <form method="dialog">
              <Button variant="filled" disabled={props.disabled}>
                {closeButton}
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
})

export default Dialog
