import { Login } from '@components/Login'
import { Rules } from '@components/Rule'
import { createLazyFileRoute } from '@tanstack/react-router'
import { isAuthenticated } from '@utils/supabase'
import "@styles/admin.scss"
export const Route = createLazyFileRoute('/admin/rules')({
  component: () => {
    if(!isAuthenticated()) {
      return <Login />
    }
    return <Rules />
  }
})