import { signInWithDiscord, signOut, useUserQuery } from "@utils/supabase";
import { useNavigate } from '@tanstack/react-router';
export const Account = () => {
    const { data: user, error, isLoading: loading } = useUserQuery();
    const navigate = useNavigate();

    // Redirect to base URL if user is not authenticated
    if (!loading && !user) {
        navigate({ pathname: '/', replace: true });
        return null;
    }

    return (
        <>
            <h1>hello!</h1>
            {
                user ? (
                    <div>
                        <img src={user.avatar_url} alt={user.global_name} />
                        <p>{user.full_name}</p>
                        <p>discord id: {user.provider_id}</p>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                ) : (
                    <button onClick={signInWithDiscord}>Sign In with Discord</button>
                )
            }
        </>
    );
};