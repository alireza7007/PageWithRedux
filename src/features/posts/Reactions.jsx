import { useDispatch } from "react-redux"
import { increaseReaction } from "./postsSlice"

const reactionsIcon = {
    eyes: '👀',
    heart: '❤️',
    hooray: '🎉',
    rocket: '🚀',
    thumbsUp: '👍',
}
function PostReactions({ reactions, postId }) {
    const dispatch = useDispatch()

    const handleIncreaseReaction = (reaction, postId) => {
        dispatch(increaseReaction({ reaction, postId }))
    }
    const reactionBtns = Object.keys(reactions).map(reaction => (
        <button
            onClick={() => handleIncreaseReaction(reaction, postId)}
            type="button"
            key={reaction}
            className="muted-button reaction-button">
            {reactionsIcon[reaction]} {reactions[reaction]}
        </button>
    ))
    return (
        <div>
            {reactionBtns}
        </div>
    )
}

export default PostReactions
