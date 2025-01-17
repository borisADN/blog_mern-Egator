import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, thumbnail, category, title, description, authorId} ) => {
    const shortDescription = description.length > 145 ? description.substr(0, 145) + '...' : description
    const postTitle = title.length > 25 ? title.substr(0, 25) + '...' : title
  return (
    <article className="post">
        <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
        </div>
        <div className="post__content">
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{shortDescription}</p>
            <div className="post__footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem


// import React from "react";

// const PostItem = ({ postID, thumbnail, category, title, description, authorId }) => {
//   return (
//     <div className="post-item">
//       <img src={thumbnail} alt={title} />
//       <h2>{title}</h2>
//       <p>{category}</p>
//       <p>{description}</p>
//       <p>Author ID: {authorId}</p>
//     </div>
//   );
// };

// export default PostItem;
