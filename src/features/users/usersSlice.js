import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import {client} from '../../api/client'


export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=> {
   return await client.get('users')
   
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async(newPost)=>{
    return await client.post('posts',newPost)
})

const usersAdapter = createEntityAdapter()

export const {
    selectAll : selectAllUser,
    selectById :selectUserById
    
} = usersAdapter.getSelectors(state => state.users)

const initialState = usersAdapter.getInitialState({
    status : 'idle'
})


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchUsers.pending]: (state)=>{
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state,action) => {
            usersAdapter.upsertMany(state,action.payload)
            state.status = 'idle'
        },
        [fetchUsers.rejected] : (state,action) => {
            state.status = 'idle'
            console.log(action.payload);
        },
        [addNewPost.fulfilled]:usersAdapter.addOne
    }
})

export default usersSlice.reducer