import { Login } from '@components/Login'
import { Servers } from '@components/Servers'
import { createLazyFileRoute } from '@tanstack/react-router'
import { isAuthenticated } from '@utils/supabase'

export const Route = createLazyFileRoute('/servers/')({
  component: () => {
    if (!isAuthenticated()) {
      return <Login />
    }
    return <Servers />
  }
})