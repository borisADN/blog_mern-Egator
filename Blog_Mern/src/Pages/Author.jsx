import React, { useState } from 'react'

import Avatar1 from '../assets/Images/donald_trump.jpg'
import Avatar2 from '../assets/Images/nath_react.jpg'
import Avatar3 from '../assets/Images/avatar3.jpg'
import Avatar4 from '../assets/Images/avatar4.jpg'
import Avatar5 from '../assets/Images/brooo.jpg'
import { Link } from 'react-router-dom'



const authorsData = [
  { id: 1, name: 'Donald Trump', image: Avatar1 ,posts: 10 },
  { id: 2, name: 'Nathalie', image: Avatar2, posts: 5 },
  { id: 3, name: 'Avatar 3', image: Avatar3, posts: 2 },
  { id: 4, name: 'Avatar 4', image: Avatar4, posts: 2 },
  { id: 5, name: 'Avatar 5', image: Avatar5 ,posts: 2 },
]



const Author = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      { authors.length > 0 ? <div className="container authors__container">

        {authors.map(({ id, name, image, posts }) => {
          return (
            <Link to={`/posts/users/${id}`} key={id} className="author">
              <div className="author__avatar">
                <img src={image} alt={name} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts} posts</p>
              </div>
            </Link>
          )
        })}
      </div>: <h2 className="center">No Authors Found</h2>
       }
    </section>
  )
}

export default Author