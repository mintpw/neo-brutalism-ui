import type { Meta, StoryObj } from '@storybook/react'
import Dialog from '.'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    variant: {
      options: ['text', 'password', 'number', 'date'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    disabled: false,
  },
}
