import { createLazyFileRoute } from '@tanstack/react-router'
import { Homepage } from '../components/Homepage'

export const Route = createLazyFileRoute('/')({
    component: Homepage,
})
