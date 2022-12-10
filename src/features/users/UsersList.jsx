import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectAllUser } from "./usersSlice"


function UsersList() {
    const users = useSelector(selectAllUser)
    const userList = users.map(user => (
        <li><Link key={user.id} to={`/users/${user.id}`} dideo-checked="true">{user.firstName}</Link></li>
    ))

  return (
    <section>
            <h2>Users</h2>
            <ul>
                {userList}
            </ul>
        </section>
  )
}

export default UsersList