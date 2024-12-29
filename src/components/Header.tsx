import { Link } from "@tanstack/react-router"

export const Header  = () => {
    return( 
        <header className="">
        <div className="container">
            <nav className="px-2">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/servers">Servers</Link>
                    </li>
                    <li>
                        <Link to="/admin">About</Link>
                    </li>
                    <li>
                        <Link to="/account">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    )
}