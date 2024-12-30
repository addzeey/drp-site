import { Link } from "@tanstack/react-router"

export const AdminMenu = () => {
    return (
        <nav className='d-flex flex-column admin-menu'>
            <ul className="list-group list-unstyled d-flex flex-column">
                <li>
                    <Link to="/admin/application">Applications</Link>
                </li>
                <li>
                    <Link to="/admin/rules">Rules</Link>
                </li>
                <li>
                    <Link to="/admin/servers">Servers</Link>
                </li>
            </ul>
        </nav>
    )
}