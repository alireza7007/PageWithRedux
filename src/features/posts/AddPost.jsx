import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addNewPost, selectAllUser } from "../users/usersSlice";

function AddPost() {
    const [title, setTitle] = useState('')
    const [userId, setUserId] = useState( )
    const [content, setContent] = useState( )
    const [status, setStatus] = useState('idle')
    const dispatch = useDispatch()


    const handelChengTitle = e => setTitle(e.target.value)
    const handelChengUserId = e => setUserId(e.target.value)
    const handelChengContent = e => setContent(e.target.value)

    const users =useSelector(selectAllUser)
    const userOption = users.map(user => <option key={user.id} value={user.id} >{user.lastName}</option> )

    const canSave = () => {
        return[title,userId,content].every(Boolean) && status === 'idle'
    }

    const onSave = async()=> {
        setStatus('pending')
         const response =  await dispatch(addNewPost({title,content,user:userId}))
         setStatus('idle')
        setTitle('')
        setContent('')
        setUserId()
        
    }
  return (
 
   <section>
    <h2>Add a New Post</h2>
    <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" value={title} onChange={handelChengTitle} name="postTitle" placeholder="What's on your mind?" />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={handelChengUserId}>
            <option value=""></option>
            {userOption}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={handelChengContent}></textarea>
        <button type="button" disabled={!canSave()} onClick={onSave}>
            Save Post
        </button>
    </form>
</section>

  )
}

export default AddPost