import type { Meta, StoryObj } from '@storybook/react'
import SignIn from './SignIn'

const meta: Meta<typeof SignIn> = {
  title: 'Examples/Form',
  component: SignIn,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Login: Story = {}
