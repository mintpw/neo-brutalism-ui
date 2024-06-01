import { Button, Dropdown, Input } from '@/components'

const modeItems = ['Dark', 'Light']

const SignIn = () => {
  return (
    <div>
      <div className="flex flex-col items-end pb-8">
        <Dropdown title="Mode" variant="rounded">
          {modeItems}
        </Dropdown>
      </div>

      <div className="flex flex-col justify-center">
        <Input placeholder="Enter username" />
        <Input type="password" placeholder="Enter password" />
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default SignIn
