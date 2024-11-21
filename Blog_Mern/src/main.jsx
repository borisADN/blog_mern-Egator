import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import PostDetail from './Pages/PostDetail'
import Register from './Pages/Register'
import Login from './Pages/Login'
import UserProfile from './Pages/UserProfile'
import Author from './Pages/Author'
import CreatePost from './Pages/CreatePost'
import EditPost from './Pages/EditPost'
import CategoryPosts from './Pages/CategoryPosts'
import AuthorPosts from './Pages/AuthorPosts'
import Dashboard from './Pages/Dashboard'
import DeletePosts from './Pages/DeletePosts'
import Logout from './Pages/Logout'

const router= createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts/:id', element: <PostDetail /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'profile/:id', element: <UserProfile /> },
      { path: 'authors', element: <Author /> },
      { path: 'create', element: <CreatePost /> }, 
      { path: 'posts/categories/:category', element: <CategoryPosts /> }, 
      { path: 'posts/users/:id', element: <AuthorPosts /> }, 
      { path: 'myposts/:id', element: <Dashboard /> }, 
      { path: 'posts/:id/edit', element: <EditPost /> }, 
      { path: 'posts/:id/delete', element: <DeletePosts /> }, 
      { path: 'logout', element: <Logout /> }, 
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
