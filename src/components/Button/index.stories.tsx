import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outline', 'text'],
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

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    size: 'md',
    disabled: false,
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    size: 'md',
    disabled: false,
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button',
    size: 'md',
    disabled: false,
  },
}
