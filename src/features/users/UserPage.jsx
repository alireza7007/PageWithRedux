import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { selectPostByUser } from "../posts/postsSlice"
import { selectUserById } from "./usersSlice"

function UserPage() {
    const {userId} = useParams()
    const userPosts = useSelector(state => selectPostByUser(state,userId))
    const user = useSelector(state => selectUserById(state,userId))
    const postLinks = userPosts.map(post => (
        <li>
            <Link key={post.id} to={`/posts/${post.id}`} dideo-checked="true">{post.title}</Link>
        </li>
    ))
  return (
    <section>
    <h2>{user.firstName}</h2>
    <ul>
      {postLinks}
    </ul>
</section>
  )
}

export default UserPage