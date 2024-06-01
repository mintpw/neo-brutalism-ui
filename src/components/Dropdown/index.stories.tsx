import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    variant: {
      options: ['default', 'rounded'],
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

const items = ['Item 1', 'Item 2', 'Item 3']
const title = 'Dropdown'

export const Default: Story = {
  args: {
    variant: 'default',
    title: title,
    children: items,
    size: 'md',
    disabled: false,
  },
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    title: title,
    children: items,
    size: 'md',
    disabled: false,
  },
}
