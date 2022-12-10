import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>
                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/" dideo-checked="true">Posts</Link>
                        <Link to="/users" dideo-checked="true">Users</Link>
                        <Link to="/notifications" dideo-checked="true">Notifications <span className="badge">5</span></Link>
                    </div><button className="button">Refresh Notifications</button>
                </div>
            </section>
        </nav>
    )
}

export default Navbar
