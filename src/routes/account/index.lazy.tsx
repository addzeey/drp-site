import { Account } from '@components/Account';
import { Login } from '@components/Login';
import { createLazyFileRoute } from '@tanstack/react-router';
import { isAuthenticated } from '@utils/supabase';

export const Route = createLazyFileRoute('/account/')({
  component: () => {
    if (!isAuthenticated()) {
      return <Login />
    }
    return <Account />
  }
});