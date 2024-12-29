import { signInWithDiscord, signOut, useUserQuery } from "@utils/supabase";
import { redirect } from '@tanstack/react-router';
export const Login = () => {
    const { data: user, error, isLoading: loading } = useUserQuery();
    if(user != null) {
        // redirect to accout
        redirect({ to: '/account/' });
    }
    return (
        <div className="col-12 p-2">
                <p className="alert alert-info">No personal information or access to your discord account is provided to us. This is only to verify your account and to manage discord roles </p>
                <button className="w-100 discord-btn py-3" onClick={signInWithDiscord}>Sign In with Discord</button>
        </div>
    );
};