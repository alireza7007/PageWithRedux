import React from 'react'
import './app.css'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Navbar from './app/Navbar'
import AddPost from './features/posts/AddPost'
import PostsList from './features/posts/PostsList'
import UsersList from './features/users/UsersList'
import UserPage from './features/users/UserPage'

function App() {
  
  return (
    <>
    <Router>
    <Navbar />
    <div className="App">
    <Switch>
      <Route path='/' exact>
        <AddPost />
        <PostsList />
      </Route>
    <Route path="/users" exact>
      <UsersList />
    </Route>
    <Route path="/users/:userId" exact>
      <UserPage />
    </Route>
   
    </Switch>
     </div>
    </Router>
    </>
  )
}

export default App