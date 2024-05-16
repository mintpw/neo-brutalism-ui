import { Button, Input } from '@/components'

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center">
      <Input placeholder="Enter username" />
      <Input type="password" placeholder="Enter password" />
      <Button>SignIn</Button>
    </div>
  )
}

export default SignIn
