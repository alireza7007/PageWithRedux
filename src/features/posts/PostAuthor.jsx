import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'

function PostAuthor({userId}) {

  const author = useSelector(state => selectUserById(state,userId))

  return (
    <span>by :  {author ? author.lastName : '  unknown author'}</span>
  )
}

export default PostAuthor