import { createLazyFileRoute} from '@tanstack/react-router'
import { Admin } from '@components/Admin';
import "@styles/admin.scss"

export const Route = createLazyFileRoute('/admin/')({
  component: Admin
})