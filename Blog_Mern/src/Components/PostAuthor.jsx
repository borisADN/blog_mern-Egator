import React from 'react'
import { Link } from 'react-router-dom'
import Default_Avatar from '../assets/Images/nath_react.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sddd`} className="post__author"> 
        <div className="post__author-avatar">
            <img src={Default_Avatar} alt="" />
        </div>
        <div className="post__author-details">
            <h5>By: Donald Trump</h5>
            <small>10 hours ago</small>
        </div>
    </Link>
  )
}

export default PostAuthor