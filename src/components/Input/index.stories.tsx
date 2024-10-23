import type { Meta, StoryObj } from '@storybook/react'
import Input from '.'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    type: 'text',
    placeholder: 'Insert text here',
    disabled: false,
    rounded: true,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
    rounded: true,
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Number',
    rounded: true,
  },
}

export const Date: Story = {
  args: {
    type: 'date',
    placeholder: 'Date',
    rounded: true,
  },
}
