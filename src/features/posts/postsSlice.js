import { createSlice,createAsyncThunk,createEntityAdapter, createSelector } from "@reduxjs/toolkit";

import {client} from '../../api/client'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=> {
   return await client.get('posts')
   
})
export const increaseReaction = createAsyncThunk('posts/increaseReaction', async ({ reaction, postId }) => {
    await client.post(`/posts/${postId}/reaction/${reaction}`)

    return { reaction, postId }
})

const postsAdapter = createEntityAdapter({
    sortComparer : (a,b) => b.date - a.date 
})
const initialState = postsAdapter.getInitialState({
    status:'idle',
    error:null
})

export const {
    selectById : selectPostById,
    selectIds : selectPostIds,
    selectAll : selectAllPosts
}= postsAdapter.getSelectors(state => state.posts)
export const selectPostByUser = createSelector(
    selectAllPosts,
    (state,postId) => postId,
    (posts,postId) => posts.filter(post => post.user === postId)
)
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchPosts.pending]: (state)=>{
            state.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state,action) => {
            postsAdapter.upsertMany(state,action.payload)
            //state.entities = action.payload
            state.status = 'success'
        },
        [fetchPosts.rejected] : (state,action) => {
            state.status = 'error'
            state.error= action.payload;
        },
        [increaseReaction.fulfilled] : (state,action) =>{
            const {postId,reaction} = action.payload
            state.entities[postId].reactions[reaction] += 1
        }
    }
})

export default postsSlice.reducer