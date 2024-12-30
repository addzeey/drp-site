import { createLazyFileRoute } from '@tanstack/react-router'
import "@styles/admin.scss"
import { Admin } from '@components/Admin'
export const Route = createLazyFileRoute('/admin/application')({
  component: Admin
})