import { Link } from "@tanstack/react-router"
import { isAuthenticated, useFetchProfile, useUserQuery } from "@utils/supabase";

export const Header = () => {
    const { data: user, error: userError, isLoading: userLoading } = useUserQuery();
    const { data: profile, error: profileError, isLoading: profileLoading } = useFetchProfile();
    const isAdmin: boolean = profile != null && profile.is_admin ? true : false;
    return (
        <header className="">
            <div className="container">
                <nav className="pt-3">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {
                            user != null && isAuthenticated() ? (
                            <>
                                <li><Link to="/application">Application</Link></li>
                                <li><Link to="/servers">Servers</Link></li>
                                <li><Link to="/account">Account</Link></li>
                            </>
                            ) : (
                                <li><Link to="/account">Login</Link></li>
                            )
                        }
                        {
                            user != null && profile != null && !profileError && isAdmin ? (
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                            ) : null
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}