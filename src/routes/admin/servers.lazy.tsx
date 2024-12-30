import { ServerAdmin } from '@components/ServersAdmin'
import { createLazyFileRoute } from '@tanstack/react-router'
import "@styles/admin.scss"
export const Route = createLazyFileRoute('/admin/servers')({
  component: ServerAdmin
})